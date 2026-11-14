<script lang="ts">
  import { onMount } from 'svelte';

  type Props = {
    groups: { name: string; id: string }[];
    initialCount: number;
  };
  let { groups, initialCount }: Props = $props();
  let ready = $state(false);
  let query = $state('');
  let topic = $state('');
  let visibleCount = $state(initialCount);
  let input: HTMLInputElement;
  let catalog: HTMLElement;
  let sections: { element: HTMLElement; entries: { element: HTMLElement; text: string }[] }[] = [];
  let copyStatus = $state('');

  onMount(() => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initialise, { once: true });
    } else {
      initialise();
    }
    return () => {
      document.removeEventListener('DOMContentLoaded', initialise);
      window.removeEventListener('hashchange', openLinkedEntry);
    };
  });

  function initialise() {
    catalog = document.getElementById('catalog')!;
    sections = Array.from(catalog.querySelectorAll<HTMLElement>('[data-catalog-group]'), (element) => ({
      element,
      entries: Array.from(element.querySelectorAll<HTMLElement>('[data-resource]'), (entry) => ({
        element: entry,
        text: (entry.textContent ?? '').toLowerCase(),
      })),
    }));
    for (const pre of catalog.querySelectorAll('pre')) {
      const button = document.createElement('button');
      button.className = 'copy-button';
      button.type = 'button';
      button.textContent = 'Copy command';
      pre.before(button);
      button.addEventListener('click', async () => {
        copyStatus = '';
        try {
          await navigator.clipboard.writeText(pre.textContent ?? '');
          copyStatus = 'Command copied.';
        } catch {
          copyStatus = 'Could not copy. Select the command text to copy it.';
          pre.focus();
        }
      });
    }

    openLinkedEntry();
    window.addEventListener('hashchange', openLinkedEntry);
    ready = true;
  }

  function openLinkedEntry() {
    const entry = document.getElementById(window.location.hash.slice(1));
    if (!(entry instanceof HTMLDetailsElement) || !catalog.contains(entry)) return;
    if (entry.hidden) reset(false);
    entry.open = true;
    entry.scrollIntoView();
  }

  function filter() {
    const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let total = 0;
    for (const { element, entries } of sections) {
      let matches = 0;
      const matchesTopic = !topic || topic === element.id;
      for (const entry of entries) {
        const show = matchesTopic && words.every((word) => entry.text.includes(word));
        entry.element.hidden = !show;
        if (show) matches++;
      }
      element.hidden = matches === 0;
      total += matches;
    }
    visibleCount = total;
  }

  function reset(focus = true) {
    query = '';
    topic = '';
    filter();
    if (focus) input.focus();
  }
</script>

{#if ready}
  <div class="catalog-controls">
    <div>
      <label for="resource-search-input">Search resources</label>
      <input id="resource-search-input" type="search" placeholder="Try ESP32, DNS or MCP" bind:this={input} bind:value={query} oninput={(event) => { query = event.currentTarget.value; filter(); }} autocomplete="off" />
    </div>
    <div>
      <label for="resource-topic">Topic</label>
      <select id="resource-topic" bind:value={topic} onchange={(event) => { topic = event.currentTarget.value; filter(); }}>
        <option value="">All topics</option>
        {#each groups as group}
          <option value={group.id}>{group.name}</option>
        {/each}
      </select>
    </div>
    <div class="catalog-results">
      <p id="resource-count" role="status">{visibleCount === 0 ? 'No resources match your search.' : `${visibleCount} ${visibleCount === 1 ? 'resource' : 'resources'}`}</p>
      {#if query || topic}<button type="button" class="reset-button" onclick={() => reset()}>Clear filters</button>{/if}
    </div>
  </div>
  <div class="sr-only" role="status">{copyStatus}</div>
{/if}
