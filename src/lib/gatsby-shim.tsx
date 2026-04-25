// Drop-in replacement for `gatsby` exports used by ported components.
// Wired via Vite alias in astro.config.mjs.
import React from 'react';
import { siteQueryData } from './site-metadata';

export const graphql = (strings: TemplateStringsArray, ..._values: unknown[]) =>
  strings.join('');

export type LinkProps = {
  to: string;
  href?: string;
  children?: React.ReactNode;
  className?: string;
  activeClassName?: string;
  partiallyActive?: boolean;
  [key: string]: unknown;
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, href, children, activeClassName, partiallyActive, ...rest }, ref) => {
    const target = to ?? href ?? '#';
    return (
      <a ref={ref} href={target} {...rest}>
        {children}
      </a>
    );
  }
);
Link.displayName = 'Link';

export const navigate = (to: string) => {
  if (typeof window !== 'undefined') {
    window.location.assign(to);
  }
};

// A permissive query result that satisfies most components ported from Gatsby.
// Real data wiring should be done at the page level (Astro frontmatter) and
// passed in as props instead of relying on Gatsby's static query layer.
const emptyEdges = { edges: [] as Array<unknown> };
const defaultStaticQueryData: Record<string, any> = {
  ...siteQueryData,
  allMdx: emptyEdges,
  allMarkdownRemark: { ...emptyEdges, categories: [] },
  categoriesBlogQuery: emptyEdges,
  allTraineePrograms: emptyEdges,
  allCaseStudies: emptyEdges,
  allJobs: emptyEdges,
  allBlogPosts: emptyEdges,
  featuredBlogs: emptyEdges,
};

export const useStaticQuery = <T = typeof defaultStaticQueryData,>(
  _query?: unknown
): T => defaultStaticQueryData as unknown as T;

type RenderProp<T> = (data: T) => React.ReactNode;
export const StaticQuery: React.FC<{
  query?: unknown;
  render?: RenderProp<typeof defaultStaticQueryData>;
  children?: RenderProp<typeof defaultStaticQueryData> | React.ReactNode;
}> = ({ render, children }) => {
  const renderer =
    typeof render === 'function'
      ? render
      : typeof children === 'function'
      ? (children as RenderProp<typeof defaultStaticQueryData>)
      : null;
  return <>{renderer ? renderer(defaultStaticQueryData) : null}</>;
};

export default {
  graphql,
  Link,
  navigate,
  useStaticQuery,
  StaticQuery,
};
