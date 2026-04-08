'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { MouseEvent } from 'react';

interface HomeStartLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function HomeStartLink({ href, className, children }: HomeStartLinkProps) {
  const router = useRouter();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (typeof document.startViewTransition !== 'function') return;
    // Take over from <Link>'s default navigation so we can wrap it in
    // startViewTransition() and wait for the destination DOM to mount before
    // the transition snapshot is taken.
    e.preventDefault();
    document.startViewTransition(async () => {
      router.push(href);
      // Wait for the destination's data-section sentinel to appear so the
      // morph happens against the new DOM rather than the empty shell.
      await new Promise<void>((resolve) => {
        let timeoutId: ReturnType<typeof setTimeout> | null = null;
        const finish = () => {
          if (timeoutId !== null) clearTimeout(timeoutId);
          observer.disconnect();
          resolve();
        };
        const observer = new MutationObserver(() => {
          if (document.querySelector('[data-section]')) finish();
        });
        observer.observe(document.body, { childList: true, subtree: true });
        timeoutId = setTimeout(finish, 1000);
      });
    });
  }

  return (
    // <Link> still gives us prefetching even though we hijack the click — the
    // destination chunk is warmed in the background, which makes the
    // View Transition land instantly when the user actually clicks.
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
