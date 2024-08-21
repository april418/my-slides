import {SlideViewer} from './_components/SlideViewer';

type Props = {
  params: {
    filename: string;
  };
};

export default function Page({params: {filename}}: Props) {
  return <SlideViewer filename={filename} />;
}
