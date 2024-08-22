import {Icon} from '@/features/nes-css/components/Icon';
import {SlideList} from './_components/SlideList';

export default function Home() {
  const owner = process.env.NEXT_PUBLIC_GITHUB_OWNER;
  const repo = process.env.NEXT_PUBLIC_GITHUB_REPO;

  return (
    <>
      <header>
        <h1 style={{marginBottom: 0}}>{repo}</h1>
        <a href={`https://github.com/${owner}/${repo}`}>
          <Icon name="github" />
        </a>
      </header>
      <main>
        <SlideList />
      </main>
    </>
  );
}
