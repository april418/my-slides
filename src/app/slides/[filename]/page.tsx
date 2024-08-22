import {getContentDescriptors} from '@/features/github/lib/github';
import {SlideViewer} from './_components/SlideViewer';
import {BackButton} from './_components/BackButton';

export async function generateStaticParams() {
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
