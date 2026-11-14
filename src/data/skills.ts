export const kinds = {
  official: 'Official skill',
  community: 'Third-party skill',
  plugin: 'Plugin with skill',
} as const;

export const topics = ['Development', 'Research', 'Automation', 'Design', 'Writing', 'Data'] as const;

export type Skill = {
  slug: string;
  name: string;
  topic: typeof topics[number];
  kind: keyof typeof kinds;
  publisher: string;
  description: string;
  task: string;
  prerequisites: string[];
  command: string;
  source: string;
  instructions?: string;
};

const upstream = 'https://github.com/NousResearch/hermes-agent/blob/1831ce1cfeb517a0b6008f006d09e2d0558439ac';
export const officialCatalog = `${upstream}/website/docs/reference/optional-skills-catalog.md`;
export const skillsGuide = `${upstream}/website/docs/user-guide/features/skills.md`;

function official(path: string, entry: Omit<Skill, 'slug' | 'kind' | 'publisher' | 'command' | 'source' | 'instructions'>): Skill {
  return {
    ...entry,
    slug: path.split('/').at(-1)!,
    kind: 'official',
    publisher: 'Nous Research',
    command: `hermes skills install official/${path}`,
    source: `${upstream}/optional-skills/${path}/SKILL.md`,
    instructions: officialCatalog,
  };
}

const brandCommit = '1780c5e5a552fd4d1c9d6a7b0cab26b0c2bef064';
const tweetRepo = 'https://github.com/Xquik-dev/hermes-tweet/blob/61f49449b8c7a6cd93d0aeadbed84f2add7e48d4';

export const skills: Skill[] = [
  official('devops/docker-management', {
    name: 'Docker Management', topic: 'Development',
    description: 'Inspect containers, debug logs, and manage images and Compose stacks.',
    task: 'Check why my Docker Compose service keeps restarting and summarize the relevant logs.',
    prerequisites: ['A running Docker Engine with access to the Docker CLI from the Hermes terminal.', 'Docker Compose is required for Compose workflows.'],
  }),
  official('research/rss-feeds', {
    name: 'RSS Feeds', topic: 'Research',
    description: 'Discover feeds on a website and read recent RSS, Atom, or JSON Feed entries.',
    task: 'Find the RSS feed for this blog and summarize the five latest posts.',
    prerequisites: ['Python 3.10 or later and network access to the website or feed.'],
  }),
  official('creative/excalidraw', {
    name: 'Excalidraw', topic: 'Design',
    description: 'Create editable hand-drawn flowcharts, system diagrams, and concept maps.',
    task: 'Draw the sign-in flow as an editable Excalidraw diagram.',
    prerequisites: ['Hermes needs file-writing access to save the diagram. Open the file in Excalidraw.', 'The optional upload script requires Python and cryptography. Local diagrams need no account or credentials.'],
  }),
  official('devops/watchers', {
    name: 'Watchers', topic: 'Automation',
    description: 'Track new GitHub activity, RSS posts, or changes in a JSON API on a schedule.',
    task: 'Set up a watcher for new releases in this GitHub repository.',
    prerequisites: ['Python 3, the Hermes terminal tool, and network access to the source.', 'Scheduled runs need a cron job. A GitHub token is optional and raises the anonymous API rate limit.'],
  }),
  official('creative/simple-english', {
    name: 'Simple English', topic: 'Writing',
    description: 'Rewrite or check technical documentation using ASD-STE100 Simplified Technical English.',
    task: 'Rewrite this maintenance procedure in Simplified Technical English.',
    prerequisites: ['Provide the technical text you want to edit. The upstream skill lists no external tool or account for inline rewriting.'],
  }),
  official('mcp/fastmcp', {
    name: 'FastMCP', topic: 'Development',
    description: 'Scaffold, test, and deploy Python MCP servers for tools, resources, and prompts.',
    task: 'Build a small MCP server that exposes a read-only SQLite query tool.',
    prerequisites: ['Python with FastMCP installed in the working environment.', 'The API wrapper template also requires httpx.'],
  }),
  official('finance/excel-author', {
    name: 'Excel Author', topic: 'Data',
    description: 'Build auditable financial workbooks in Excel with consistent formulas and formatting.',
    task: 'Create an Excel workbook for quarterly revenue forecasts with a separate assumptions sheet.',
    prerequisites: ['Python with openpyxl. The upstream source documents environment setup for Hermes and standalone sandboxes.'],
  }),
  official('data-science/jupyter-notebook', {
    name: 'Jupyter Notebook', topic: 'Data',
    description: 'Explore data in a live Python kernel that retains variables between steps.',
    task: 'Load this CSV in a persistent Python kernel and inspect missing values before plotting the distributions.',
    prerequisites: ['uv and JupyterLab, a running Jupyter server, and the hamelnb live-kernel script. Follow the upstream setup to connect them.'],
  }),
  official('communication/one-three-one-rule', {
    name: '1-3-1 Decision Brief', topic: 'Writing',
    description: 'Frame a decision, compare three approaches, and recommend one with a plan.',
    task: 'Write a 1-3-1 brief comparing three ways to migrate this project.',
    prerequisites: ['Provide a decision with multiple viable approaches. The upstream skill lists no external tools.'],
  }),
  official('creative/creative-ideation', {
    name: 'Creative Ideation', topic: 'Design',
    description: 'Use named creative methods to brainstorm ideas for an open-ended brief.',
    task: 'Generate three distinct concepts for this brief using one creative method.',
    prerequisites: ['Provide an open-ended brief. The upstream skill declares no required toolsets.'],
  }),
  {
    slug: 'brand-guidelines', name: 'Anthropic Brand Guidelines', topic: 'Design',
    kind: 'community', publisher: 'Anthropic',
    description: 'Apply Anthropic’s colors and typography to documents, slides, and other artifacts.',
    task: 'Apply Anthropic’s brand palette and typography to this presentation.',
    prerequisites: ['Poppins and Lora are optional. The skill uses Arial and Georgia as fallbacks.'],
    command: `hermes skills install https://raw.githubusercontent.com/anthropics/skills/${brandCommit}/skills/brand-guidelines/SKILL.md`,
    source: `https://github.com/anthropics/skills/blob/${brandCommit}/skills/brand-guidelines/SKILL.md`,
    instructions: skillsGuide,
  },
  {
    slug: 'hermes-tweet', name: 'Hermes Tweet', topic: 'Research',
    kind: 'plugin', publisher: 'Xquik',
    description: 'Search public posts on X and read account timelines through the Xquik API.',
    task: 'Find recent public posts about Hermes Agent and summarize the main topics.',
    prerequisites: ['A Xquik API key configured as XQUIK_API_KEY in the Hermes environment.', 'Restart Hermes after setting the key. Write actions are disabled by default.'],
    command: 'hermes plugins install Xquik-dev/hermes-tweet --enable',
    source: `${tweetRepo}/hermes_tweet/skills/hermes-tweet/SKILL.md`,
    instructions: `${tweetRepo}/README.md#install-the-hermes-twitter-plugin`,
  },
];
