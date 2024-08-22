'use client';

import mermaid from 'mermaid';
import {RemarkSlideshow} from '@/features/remark/components/RemarkSlideshow';
import settings from '@/features/mermaid/lib/settings';

type Props = {
  doc: string;
};

export async function Slideshow({doc}: Props) {
  return (
    <RemarkSlideshow
      doc={doc}
      onShowSlide={(slide, container) => {
        // Remarkがclassを付け替えるのを待つ
        setTimeout(async () => {
          await mermaid.run({
            querySelector: '.remark-visible .mermaid',
          });
        }, 100);
      }}
      onInit={(sildeshow, container) => {
        mermaid.initialize(settings);
      }}
    />
  );
}
