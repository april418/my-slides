import {getLocalContent} from '@/features/local-files/lib/getLocalContent';
import {Slide} from '@/features/remark/components/Slide';
import {getContent} from '@/features/github/lib/github';

type Props = {
  filename: string;
};

export async function SlideViewer({filename}: Props) {
  const doc =
    process.env.NODE_ENV === 'development'
      ? await getLocalContent({filename})
      : await getContent({path: `slides/${filename}`});

  return <Slide doc={doc} />;
}
