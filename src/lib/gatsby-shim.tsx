// Minimal `gatsby` replacement — wired via Vite alias in astro.config.mjs.
// Only `Link` and `navigate` remain in active use. Removing the last callers
// is the final step of Phase 4 (delete the shim entirely).
import React from 'react';

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

export default {
  Link,
  navigate,
};
