import Image from 'next/image';
import { HomeStartLink } from '@/components/HomeStartLink';

const START_HREF = '/preface/welcome';

export default function Home() {
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
        <HomeStartLink href={START_HREF} className="home__cta">
          Start Here
        </HomeStartLink>
      </div>
    </main>
  );
}
