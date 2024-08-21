import {getContentDescriptors} from '@/features/github/lib/github';
import {SlideViewer} from './_components/SlideViewer';

export async function generateStaticParams() {
  const slides = await getContentDescriptors({path: 'slides'});
  return slides.map(slide => ({
    filename: slide.name,
    download_url: slide.download_url,
  }));
}

type Props = {
  params: {
    filename: string;
    download_url: string;
  };
};

export default function Page({params: {filename, download_url}}: Props) {
  return <SlideViewer filename={filename} download_url={download_url} />;
}
