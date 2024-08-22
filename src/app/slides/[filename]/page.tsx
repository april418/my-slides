import {getLocalSlides} from '@/features/local-files/lib/getLocalSlides';
import {getContentDescriptors} from '@/features/github/lib/github';
import {BackButton} from './_components/BackButton';
import {SlideshowWithFilename} from './_components/SlideshowWithFilename';

export async function generateStaticParams() {
  if (process.env.NODE_ENV === 'development') {
    const files = await getLocalSlides();
    return files.map(filename => ({filename}));
  }

  const slides = await getContentDescriptors({path: 'slides'});
  return slides.map(slide => ({
    filename: slide.name,
  }));
}

type Props = {
  params: {
    filename: string;
  };
};

export default function Page({params: {filename}}: Props) {
  return (
    <>
      <BackButton />
      <SlideshowWithFilename filename={filename} />
    </>
  );
}
