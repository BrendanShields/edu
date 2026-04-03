import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const toolEnum = z.enum(['claude-code', 'opencode', 'github-copilot']);

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  order: z.number(),
  tools: z.array(toolEnum),
  duration: z.string().optional(),
  draft: z.boolean().default(false),
});

const makeCollection = (base: string) =>
  defineCollection({
    loader: glob({ pattern: '**/*.mdx', base }),
    schema: baseSchema,
  });

export const collections = {
  foundations: makeCollection('./src/content/foundations'),
  productivity: makeCollection('./src/content/productivity'),
  mastery: makeCollection('./src/content/mastery'),
  advanced: makeCollection('./src/content/advanced'),
  reference: makeCollection('./src/content/reference'),
};
