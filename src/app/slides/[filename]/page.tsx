import {getLocalSlides} from '@/features/local-files/lib/getLocalSlides';
import {getContentDescriptors} from '@/features/github/lib/github';
import {SlideViewer} from './_components/SlideViewer';
import {BackButton} from './_components/BackButton';

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
      <SlideViewer filename={filename} />
    </>
  );
}
