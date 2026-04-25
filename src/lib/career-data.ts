import { getCollection } from 'astro:content';

const toIso = (v: unknown) =>
  v instanceof Date ? v.toISOString().slice(0, 10) : (v as string | undefined);

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
    edges: all.map((entry) => {
      const data = entry.data as Record<string, any>;
      const wrap = (url?: string) =>
        url
          ? { childImageSharp: { resize: { src: url, width: 0, height: 0 } } }
          : null;
      return {
        node: {
          frontmatter: {
            ...data,
            featuredImage: wrap(data.featuredImage),
            companyLogo: wrap(data.companyLogo),
            ownerImage: wrap(data.ownerImage),
          },
        },
      };
    }),
  };
}
