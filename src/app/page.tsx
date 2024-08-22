import {Icon} from '@/features/nes-css/components/Icon';
import {SlideList} from './_components/SlideList';

export default function Home() {
  return (
    <>
      <header>
        <h1 style={{marginBottom: 0}}>{process.env.NEXT_PUBLIC_GITHUB_REPO}</h1>
        <a
          href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_OWNER}/${process.env.NEXT_PUBLIC_GITHUB_REPO}`}
        >
          <Icon name="github" />
        </a>
      </header>
      <main>
        <SlideList />
      </main>
    </>
  );
}
