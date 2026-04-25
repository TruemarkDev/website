import { getCollection } from 'astro:content';
import { resolveImage } from './image-resolver';

const toIso = (v: unknown) =>
  v instanceof Date ? v.toISOString().slice(0, 10) : (v as string | undefined);

const resolveUrl = async (p?: string | null) =>
  (await resolveImage(p))?.src ?? p ?? undefined;

export async function getTraineeProgramEdges() {
  const all = await getCollection('trainee-programs');
  const edges = all.map((entry) => {
    const data = entry.data as Record<string, any>;
    return {
      node: {
        frontmatter: {
          uid: data.uid,
          title: data.title,
          dateForNextIntake: toIso(data.dateForNextIntake),
          datePosted: toIso(data.datePosted),
          validityInDays: data.validityInDays,
          vacancyCount: data.vacancyCount,
          category: data.category,
          positionOpen: !!data.positionOpen,
        },
      },
    };
  });
  return { edges };
}

export async function getFeaturedProjectEdges() {
  const all = await getCollection('projects', ({ data }) => !!data.featured);
  all.sort((a, b) => String(b.data.uid ?? '').localeCompare(String(a.data.uid ?? '')));
  return {
    edges: await Promise.all(
      all.map(async (entry) => {
        const data = entry.data as Record<string, any>;
        return {
          node: {
            frontmatter: {
              ...data,
              featuredImage: await resolveUrl(data.featuredImage),
              companyLogo: await resolveUrl(data.companyLogo),
              ownerImage: await resolveUrl(data.ownerImage),
            },
          },
        };
      }),
    ),
  };
}
