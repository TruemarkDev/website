import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z
    .object({
      uid: z.string().optional(),
      title: z.string(),
      description: z.string().optional(),
      keywords: z.string().optional(),
      featuredImage: z.string().optional(),
      customSlug: z.string().optional(),
      category: z.string().optional(),
      tags: z.array(z.string()).default([]),
      author: z.string().optional(),
      type: z.string().default('blog-post'),
      toc: z.boolean().optional().default(false),
      featured: z.boolean().optional().default(false),
      comments: z.boolean().optional().default(true),
      share: z.boolean().optional().default(true),
      readingTime: z.string().optional(),
      date: z.coerce.date(),
      last_modified_at: z.coerce.date().optional(),
    })
    .passthrough(),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/case-studies' }),
  schema: z
    .object({
      uid: z.string().optional(),
      title: z.string(),
      description: z.string().optional(),
      featuredImage: z.string().optional(),
      bgImage: z.string().optional(),
      customSlug: z.string().optional(),
      platforms: z.array(z.string()).default([]),
      industries: z.array(z.string()).default([]),
      androidUrl: z.string().optional(),
      iosUrl: z.string().optional(),
      webUrl: z.string().optional(),
      type: z.string().default('case-study'),
      className: z.string().optional(),
    })
    .passthrough(),
});

const jobs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jobs' }),
  schema: z
    .object({
      uid: z.string().optional(),
      title: z.string(),
      type: z.string().default('job'),
      category: z.string().optional(),
      description: z.string().optional(),
      datePosted: z.coerce.date().optional(),
      validityInDays: z.number().optional(),
      monthsOfExperience: z.number().optional(),
      educationRequirements: z.union([z.string(), z.array(z.string())]).optional(),
      salaryMin: z.number().optional(),
      salaryMax: z.number().optional(),
      keywords: z.string().optional(),
      skills: z.array(z.string()).optional(),
      jobDescriptions: z.array(z.string()).optional(),
      perks: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
      featuredImage: z.string().optional(),
      customSlug: z.string().optional(),
      remoteEligible: z.boolean().optional(),
      remoteOnly: z.boolean().optional(),
      positionOpen: z.boolean().optional(),
      vacancyCount: z.number().optional(),
    })
    .passthrough(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z
    .object({
      uid: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
      featuredImage: z.string().optional(),
      bgImage: z.string().optional(),
      ownerImage: z.string().optional(),
      companyLogo: z.string().optional(),
      customSlug: z.string().optional(),
      type: z.string().default('project'),
    })
    .passthrough(),
});

const traineePrograms = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/trainee-programs' }),
  schema: z
    .object({
      uid: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
      featuredImage: z.string().optional(),
      customSlug: z.string().optional(),
      type: z.string().default('trainee-programs'),
    })
    .passthrough(),
});

const authors = defineCollection({
  loader: glob({ pattern: '**/*.{yml,yaml}', base: './src/content/authors' }),
  schema: z.object({
    author_id: z.string(),
    name: z.string(),
    avatar: z.string().optional(),
    organization: z.string().optional(),
    position: z.string().optional(),
    bio: z.string().optional(),
    resume: z.string().optional(),
  }),
});

export const collections = {
  blog,
  'case-studies': caseStudies,
  jobs,
  projects,
  'trainee-programs': traineePrograms,
  authors,
};
