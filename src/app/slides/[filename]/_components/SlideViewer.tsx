'use client';

import {useEffect, useState} from 'react';
import {Slide} from '@/features/remark/components/Slide';
import {getContent} from '@/features/github/lib/github';

type Props = {
  filename: string;
};

export function SlideViewer({filename}: Props) {
  const [doc, setDoc] = useState<string | undefined>();

  useEffect(() => {
    (async () => {
      const content = await getContent({path: `slides/${filename}`});
      setDoc(content);
    })();
  }, [filename]);

  return doc ? (
    <Slide doc={doc} />
  ) : (
    <main>
      <p>Loading...</p>
    </main>
  );
}
