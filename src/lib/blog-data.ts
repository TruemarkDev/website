import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import readingTime from 'reading-time';

type BlogEntry = CollectionEntry<'blog'>;

const slugFromAuthorName = (name?: string) => (name ?? '').toLowerCase().trim();

// Components ported from Gatsby read images via `featuredImage.childImageSharp.resize.src`.
// All images now live under public/images/* and are referenced by absolute URL strings,
// so we wrap a string into that legacy shape to keep the components untouched.
export function imageToShape(url?: string | null) {
  if (!url) return null;
  return {
    src: url,
    childImageSharp: {
      resize: { src: url, width: 0, height: 0 },
      gatsbyImageData: { src: url, images: { fallback: { src: url } } },
    },
  };
}

async function resolveAuthor(name?: string) {
  if (!name) return null;
  const id = slugFromAuthorName(name);
  try {
    const entry = await getEntry('authors', id);
    if (!entry) return null;
    const data = entry.data as Record<string, any>;
    return {
      id: data.author_id,
      name: data.name,
      position: data.position,
      organization: data.organization,
      bio: data.bio,
      resume: data.resume,
      avatar: imageToShape(data.avatar),
    };
  } catch {
    return null;
  }
}

export interface BlogNode {
  excerpt: string;
  frontmatter: any;
  fields: { slug: string; timeToRead: { text: string } };
}

export async function getBlogPosts(): Promise<BlogEntry[]> {
  const all = await getCollection('blog', ({ data }) => data.type === 'blog-post');
  return all.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
}

export async function toBlogNode(entry: BlogEntry): Promise<{ node: BlogNode }> {
  const author = await resolveAuthor(entry.data.author);
  const text = entry.body || '';
  const minutes = readingTime(text);
  const featured = imageToShape(entry.data.featuredImage as string | undefined);
  return {
    node: {
      excerpt: text.replace(/[#>*_`]/g, '').slice(0, 200),
      frontmatter: {
        uid: entry.data.uid,
        title: entry.data.title,
        description: entry.data.description,
        keywords: entry.data.keywords,
        category: entry.data.category,
        tags: entry.data.tags,
        slug: entry.data.customSlug,
        type: entry.data.type,
        date: entry.data.date instanceof Date
          ? entry.data.date.toISOString().slice(0, 10)
          : entry.data.date,
        last_modified_at:
          entry.data.last_modified_at instanceof Date
            ? entry.data.last_modified_at.toISOString().slice(0, 10)
            : entry.data.last_modified_at,
        toc: entry.data.toc,
        featured: entry.data.featured,
        featuredImage: featured,
        image: featured,
        author,
      },
      fields: {
        slug: `/${entry.data.customSlug}`,
        timeToRead: { text: minutes.text },
      },
    },
  };
}

export async function getFeaturedBlogs(limit = 3) {
  const all = await getBlogPosts();
  const featured = all.filter((p) => p.data.featured).slice(0, limit);
  const nodes = await Promise.all(featured.map(toBlogNode));
  return { edges: nodes };
}

// Edges shaped for the BlogMegaMenu (every blog post in date-DESC order with
// the minimum frontmatter the menu reads: title/category/slug/featuredImage).
export async function getMegaMenuBlogPosts() {
  const all = await getBlogPosts();
  return all.map((entry) => ({
    node: {
      excerpt: '',
      frontmatter: {
        title: entry.data.title,
        description: entry.data.description ?? '',
        category: entry.data.category ?? '',
        slug: entry.data.customSlug,
        featuredImage: imageToShape(entry.data.featuredImage as string | undefined),
      },
    },
  }));
}

export async function getBlogCategories() {
  const all = await getBlogPosts();
  const counts = new Map<string, number>();
  for (const entry of all) {
    const cat = (entry.data.category ?? '').trim();
    if (!cat) continue;
    counts.set(cat, (counts.get(cat) ?? 0) + 1);
  }
  return Array.from(counts, ([category, totalCount]) => ({ category, totalCount }))
    .sort((a, b) => b.totalCount - a.totalCount);
}

export async function getAllBlogsForSection(limit?: number) {
  const all = await getBlogPosts();
  const slice = typeof limit === 'number' ? all.slice(0, limit) : all;
  const nodes = await Promise.all(slice.map(toBlogNode));
  return { edges: nodes };
}
