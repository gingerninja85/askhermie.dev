import { resourceEntries } from './resources';
import { skills } from './skills';

export const resourceRows = resourceEntries.map(resource => ({
  ...resource,
  kind: 'resource' as const,
  description: resource.use,
  anchor: `resource-${resource.slug}`,
  search: [resource.name, resource.topic, resource.category, resource.difficulty, resource.use,
    resource.firstStep, resource.exampleUse, resource.command, resource.safetyNote].join(' '),
}));

export const skillRows = skills.map(skill => ({
  ...skill,
  href: `/skills/${skill.slug}/`,
  search: [skill.name, skill.slug, skill.description, skill.task, skill.topic, skill.publisher].join(' '),
}));
