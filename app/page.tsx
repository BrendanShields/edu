'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const START_HREF = '/preface/welcome';

export default function Home() {
  const router = useRouter();

  function handleStart(e: React.MouseEvent) {
    e.preventDefault();

    if (typeof document.startViewTransition === 'function') {
      document.startViewTransition(async () => {
        router.push(START_HREF);
        // Wait for the destination's data-section sentinel to appear so the
        // morph happens against the new DOM rather than the empty shell.
        await new Promise<void>((resolve) => {
          const observer = new MutationObserver(() => {
            if (document.querySelector('[data-section]')) {
              observer.disconnect();
              resolve();
            }
          });
          observer.observe(document.body, { childList: true, subtree: true });
          setTimeout(() => { observer.disconnect(); resolve(); }, 1000);
        });
      });
    } else {
      router.push(START_HREF);
    }
  }

  return (
    <main id="main-content" className="home">
      <div className="home__inner">
        <div className="home__hero" style={{ viewTransitionName: 'intro-image' }}>
          <Image
            src="/intro-image.png"
            alt="Mountain trail map showing Copilot, OpenCode, and Claude Code as trails of increasing difficulty"
            width={576}
            height={576}
            sizes="(max-width: 480px) 80vw, 288px"
            priority
            className="home__hero-img"
          />
        </div>
        <h1 className="home__title">Welcome to the Workshop.</h1>
        <p className="home__lede">
          Master Claude Code, OpenCode, and GitHub Copilot. From your first prompt to multi-agent orchestration.
        </p>
        <a
          href={START_HREF}
          onClick={handleStart}
          className="home__cta"
        >
          Start Here
        </a>
      </div>
    </main>
  );
}
