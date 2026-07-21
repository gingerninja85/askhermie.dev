<script lang="ts">
  type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced' | 'Reference';

  type Resource = {
    name: string;
    category: string;
    use: string;
    firstStep: string;
    exampleUse: string;
    command?: string;
    safetyNote?: string;
    url: string;
    difficulty: Difficulty;
  };

  type ResourceGroup = {
    name: string;
    blurb: string;
    categories: string[];
    id: string;
    slug: string;
    resources: Resource[];
  };

  type Props = {
    resources: Resource[];
    resourceGroups: ResourceGroup[];
  };

  let { resources, resourceGroups }: Props = $props();
  let query = $state('');
  let activeFilter = $state('all');
  let copiedCommand = $state<string | null>(null);

  const searchableText = (resource: Resource) => [
    resource.name,
    resource.category,
    resource.difficulty,
    resource.use,
    resource.firstStep,
    resource.exampleUse,
    resource.command ?? '',
    resource.safetyNote ?? '',
  ].join(' ').toLowerCase();

  const resourceMatches = (resource: Resource, groupSlug: string) => {
    const groupMatch = activeFilter === 'all' || groupSlug === activeFilter;
    const searchMatch = !query.trim() || searchableText(resource).includes(query.trim().toLowerCase());
    return groupMatch && searchMatch;
  };

  let visibleGroups = $derived(
    resourceGroups
      .map((group) => ({
        ...group,
        resources: group.resources.filter((resource) => resourceMatches(resource, group.slug)),
      }))
      .filter((group) => group.resources.length > 0)
  );

  let visibleCount = $derived(visibleGroups.reduce((total, group) => total + group.resources.length, 0));

  async function copyCommand(command: string) {
    try {
      await navigator.clipboard.writeText(command);
      copiedCommand = command;
      setTimeout(() => {
        if (copiedCommand === command) copiedCommand = null;
      }, 1300);
    } catch {
      copiedCommand = 'clipboard-failed';
    }
  }
</script>

<section class="resource-control-panel" aria-label="Resource search and filters">
  <div class="resource-search">
    <label for="resource-search-input">Search the catalog</label>
    <input
      id="resource-search-input"
      type="search"
      placeholder="Try: firmware, ESP32, monitoring, MCP, Docker..."
      autocomplete="off"
      bind:value={query}
    />
    <p><span id="resource-count">{visibleCount}</span> visible resources. Filter by group or search by name, category, use case, command, or safety note.</p>
  </div>
  <div class="filter-chips" role="list" aria-label="Resource groups">
    <button class:active={activeFilter === 'all'} class="filter-chip" type="button" on:click={() => (activeFilter = 'all')}>All</button>
    {#each resourceGroups as group}
      <button class:active={activeFilter === group.slug} class="filter-chip" type="button" on:click={() => (activeFilter = group.slug)}>{group.name}</button>
    {/each}
  </div>
</section>

<section class="section">
  <div class="section-head">
    <p class="eyebrow">Resource map</p>
    <h2>Everything interesting enough to earn a spot.</h2>
    <p>Commands target Linux/WSL unless the card says otherwise. Security tools are for labs, your own systems, or explicitly authorized work. “Open resource” buttons leave this site.</p>
    <p class="external-link-note">External link note: every <strong>Open resource</strong> button opens the original project/docs site in a new tab.</p>
  </div>

  {#if visibleGroups.length === 0}
    <div class="empty-state">
      <p class="eyebrow">No matches</p>
      <h3>No resource matches “{query}”.</h3>
      <p>Try a broader search like <strong>AI</strong>, <strong>firmware</strong>, <strong>monitoring</strong>, <strong>ESP32</strong>, or <strong>MCP</strong>.</p>
      <button class="filter-chip active" type="button" on:click={() => { query = ''; activeFilter = 'all'; }}>Reset filters</button>
    </div>
  {:else}
    <div class="category-resource-list">
      {#each visibleGroups as group}
        <section class="category-section" id={group.id} data-group={group.slug} aria-labelledby={`${group.id}-heading`}>
          <div class="category-heading">
            <div>
              <p class="eyebrow">{group.resources.length} {group.resources.length === 1 ? 'resource' : 'resources'}</p>
              <h3 id={`${group.id}-heading`}>{group.name}</h3>
            </div>
            <p>{group.blurb}</p>
          </div>
          <div class="resource-grid">
            {#each group.resources as resource}
              <article class="resource-card" id={`resource-${resource.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} data-group={group.slug}>
                <div class="resource-topline">
                  <span class="pill">{resource.category}</span>
                  <span class={`difficulty ${resource.difficulty.toLowerCase()}`}>{resource.difficulty}</span>
                </div>
                <h2>{resource.name}</h2>
                <p>{resource.use}</p>
                <div class="first-step">
                  <strong>First move:</strong>
                  <span>{resource.firstStep}</span>
                </div>
                <div class="example-use">
                  <strong>Example use case:</strong>
                  <span>{resource.exampleUse}</span>
                </div>
                {#if resource.safetyNote}
                  <div class="first-step safety-note">
                    <strong>Safety note:</strong>
                    <span>{resource.safetyNote}</span>
                  </div>
                {/if}
                {#if resource.command}
                  <div class="command-box">
                    <div class="command-head">
                      <span>Copy/paste</span>
                      <button class="copy-command" type="button" on:click={() => copyCommand(resource.command ?? '')}>
                        {copiedCommand === resource.command ? 'Copied' : copiedCommand === 'clipboard-failed' ? 'Select text' : 'Copy'}
                      </button>
                    </div>
                    <pre><code>{resource.command}</code></pre>
                  </div>
                {/if}
                <a class="resource-link" href={resource.url} target="_blank" rel="noreferrer" aria-label={`${resource.name} external link`}>
                  <span>Open resource</span>
                  <em>External link</em>
                </a>
              </article>
            {/each}
          </div>
        </section>
      {/each}
    </div>
  {/if}
</section>
