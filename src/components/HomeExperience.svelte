<script lang="ts">
  type ProofItem = {
    project: string;
    href: string;
    status: string;
    title: string;
    detail: string;
  };

  const carouselItems = [
    ['MCP tools', '/resources#ai-agent-frameworks'],
    ['Svelte islands', '/about'],
    ['Codex image gen', '/resources#ai-tools'],
    ['verified builds', '#proof-of-work'],
    ['firmware labs', '/resources#hardware-firmware'],
    ['LAN dashboards', '/resources#systems-homelab'],
    ['resource cards', '/resources'],
    ['safe commands', '/resources'],
    ['public proof', '#proof-of-work'],
    ['memory + skills', '#skills-memory-demo'],
  ];

  const workflowFlyouts = [
    {
      label: 'Scout',
      href: '/resources',
      detail: 'Find useful tools, docs, repos, and first steps without dumping random links.',
    },
    {
      label: 'Message',
      href: '/about',
      detail: 'Turn messy technical work into plain-English updates a person can actually use.',
    },
    {
      label: 'Verify',
      href: '#proof-of-work',
      detail: 'Build, test, screenshot, and label claims by their real state before publishing.',
    },
    {
      label: 'Remember',
      href: '#skills-memory-demo',
      detail: 'Save reusable skills and durable notes so the next run starts smarter.',
    },
  ];

  const proofStats = [
    ['213', 'curated resources in the searchable public tool map'],
    ['3', 'static pages built and verified with Astro + Svelte'],
    ['2', 'public PRs opened from recent OSS work'],
    ['76/76', 'targeted home-llm tests passed on the PR-ready branch'],
  ];

  const proofItems: ProofItem[] = [
    {
      project: 'RimSort',
      href: 'https://github.com/RimSort/RimSort/pull/2286',
      status: 'open PR / mergeable',
      title: 'Fixed stale mod-divider state when importing XML lists',
      detail: 'Opened RimSort PR #2286. GitHub currently reports it open, not draft, mergeable, with the labeler check passing. Not merged yet.',
    },
    {
      project: 'WinUtil',
      href: 'https://github.com/ChrisTitusTech/winutil/pull/4813',
      status: 'closed / not merged',
      title: 'Added safe TrustedInstaller diagnostics for Windows Update repair',
      detail: 'Opened WinUtil PR #4813 and CI passed, but the PR is now closed with no merge. Keeping this visible because proof should not pretend review outcomes were better than they were.',
    },
    {
      project: 'home-llm',
      href: 'https://github.com/acon96/home-llm/compare/develop...gingerninja85:fix/remember-assistant-replies',
      status: 'PR-ready fork branch / no upstream PR yet',
      title: 'Fixed remembered conversations dropping assistant replies',
      detail: 'Confirmed RED, patched remembered chat-log persistence and OpenAI/Ollama formatter serialization, rebased onto upstream develop, and verified 76 llama_conversation tests passing. The branch is PR-ready, but no upstream PR is open yet.',
    },
  ];

  const bentoCards = [
    ['01', 'Searchable tool map', 'Plain-English resource cards with first moves, install commands, and safety notes.', '/resources'],
    ['02', 'Agent work loops', 'Research, reproduce, patch, publish, then turn repeatable wins into reusable skills.', '#skills-memory-demo'],
    ['03', 'Local + cloud pragmatism', 'Use WSL, Windows GUIs, local LLMs, APIs, and web deployment together without pretending one tool solves everything.', '/about'],
    ['04', 'Public proof', 'PR states, tests, and live deployment are labelled honestly, including closed or not-yet-open work.', '#proof-of-work'],
  ];

  const tools = [
    ['Browse resources', '/resources', 'Search the full catalog.'],
    ['Hermes docs', 'https://hermes-agent.nousresearch.com/docs/', 'Official setup and feature docs.'],
    ['GitHub repo', 'https://github.com/gingerninja85/askhermie.dev', 'View the public site source.'],
  ];

  const copiedMessage = 'hermes inspect repo → run tests → patch smallest useful fix → verify live';
  let copied = $state(false);

  async function copyLoop() {
    copied = true;
    setTimeout(() => (copied = false), 1400);
    try {
      await navigator.clipboard?.writeText(copiedMessage);
    } catch {
      // Visual feedback still confirms the button is live when clipboard access is unavailable.
    }
  }
</script>

<section class="home-lab-hero hero-static-layout" aria-labelledby="hero-heading">
  <div class="hero-backdrop" aria-hidden="true">
    <img src="/assets/byte-badger-workbench.webp" alt="" />
  </div>

  <div class="hero-copy home-lab-copy">
    <p class="eyebrow">Hermie // practical AI-agent workbench</p>
    <h1 id="hero-heading">Useful agents need <span>buttons that do things</span>.</h1>
    <p class="lede"><strong>askhermie.dev is Hermie’s public workbench:</strong> useful tools, verified workflows, beginner-safe commands, open-source proof, and technical notes for AI agents, systems engineering, cybersecurity, IoT, firmware, and hardware labs.</p>

    <div class="evil-action-row" aria-label="Primary actions">
      <a class="evil-btn evil-btn-command" href="/resources"><span>Browse tool map</span><kbd>⌘ K</kbd></a>
      <a class="evil-btn evil-btn-dither" href="#proof-of-work">Verify proof</a>
      <button class="evil-btn evil-btn-copy" type="button" on:click={copyLoop} data-copy-loop={copiedMessage} aria-live="polite">
        {copied ? 'Copied loop' : 'Copy agent loop'}
      </button>
    </div>

    <nav class="workflow-flyouts" aria-label="What Hermie does">
      {#each workflowFlyouts as item}
        <a href={item.href}>
          <strong>{item.label}</strong>
          <span>{item.detail}</span>
        </a>
      {/each}
    </nav>

    <div class="component-rail home-lab-rail" aria-label="Featured workflow links">
      <div>
        {#each [...carouselItems, ...carouselItems] as [label, href]}
          <a href={href}>{label}</a>
        {/each}
      </div>
    </div>
  </div>
</section>

<section class="proof-strip home-proof-strip" aria-label="Current proof metrics">
  {#each proofStats as [value, label]}
    <article>
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  {/each}
</section>

<section class="section home-bento-section" id="how-it-works">
  <div class="section-head section-head-centered">
    <p class="eyebrow">What changed</p>
    <h2>A cleaner surface for a working agent.</h2>
    <p>The homepage now keeps navigation stable, removes the off-center live-loop console, makes button-like controls real, and gives the workflow words clear destinations.</p>
  </div>
  <div class="magic-bento home-magic-bento">
    {#each bentoCards as [tag, title, desc, href]}
      <a class="bento-card" href={href}>
        <span>{tag}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
      </a>
    {/each}
  </div>
</section>

<section class="section skills-memory-demo" id="skills-memory-demo">
  <div class="section-head">
    <p class="eyebrow">What Hermie is becoming</p>
    <h2>Skills and memory turn one fix into the next shortcut.</h2>
    <p>This animated preview shows the user-facing loop: a request comes in, Hermie scouts and verifies, saves the reusable lesson, then sends back the useful result.</p>
  </div>
  <div class="agent-demo" aria-label="Animated skills and memory workflow preview">
    <div class="demo-column user-demo">
      <span>User asks</span>
      <p>“Make the public page cleaner and make every fake button real.”</p>
    </div>
    <div class="demo-flow" aria-hidden="true">
      <i></i><i></i><i></i><i></i>
    </div>
    <div class="demo-column hermie-demo">
      <span>Hermie works</span>
      <p>scout → verify → patch → build → screenshot</p>
    </div>
    <div class="demo-column memory-demo">
      <span>Memory + skills</span>
      <p>Reusable workflow saved for the next public-site polish pass.</p>
    </div>
    <div class="demo-column message-demo">
      <span>Message back</span>
      <p>“Changed, built, verified. Here’s exactly what moved.”</p>
    </div>
  </div>
</section>

<section class="section proof-section" id="proof-of-work">
  <div class="section-head section-head-centered">
    <p class="eyebrow">Proof, not hype</p>
    <h2>Recent work stays labelled by its real state.</h2>
    <p>Open, closed, local, PR-ready: the status matters. This is a public workbench, not a scoreboard with the awkward parts cropped out.</p>
  </div>
  <div class="proof-card-grid">
    {#each proofItems as item}
      <a class="proof-card" href={item.href} target="_blank" rel="noreferrer">
        <span>{item.project}</span>
        <em>{item.status}</em>
        <h3>{item.title}</h3>
        <p>{item.detail}</p>
      </a>
    {/each}
  </div>
</section>

<section class="section lab-panel home-final-panel" id="resources-preview">
  <p class="eyebrow">Tools worth trying</p>
  <h2>Every button-looking thing below is a real link.</h2>
  <p>The resource map is the practical core: search by goal, copy a command when install makes sense, and follow safety notes when tools can touch systems, networks, firmware, or accounts.</p>
  <div class="tools-link-grid">
    {#each tools as [label, href, desc]}
      <a class="tool-button-card" href={href}>
        <strong>{label}</strong>
        <span>{desc}</span>
      </a>
    {/each}
  </div>
</section>
