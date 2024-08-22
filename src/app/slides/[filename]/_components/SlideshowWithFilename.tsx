import {getLocalContent} from '@/features/local-files/lib/getLocalContent';
import {getContent} from '@/features/github/lib/github';
import {Slideshow} from './Slideshow';

type Props = {
  filename: string;
};

export async function SlideshowWithFilename({filename}: Props) {
  const doc =
    process.env.NODE_ENV === 'development'
      ? await getLocalContent({filename})
      : await getContent({path: `slides/${filename}`});

  return <Slideshow doc={doc} />;
}
