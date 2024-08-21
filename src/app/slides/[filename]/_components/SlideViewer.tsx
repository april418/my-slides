'use client';

import {useEffect, useState} from 'react';
import {getSlide} from '@/actions/getSlide';
import {Slide} from '@/features/remark/components/Slide';

type Props = {
  filename: string;
};

export function SlideViewer({filename}: Props) {
  const [doc, setDoc] = useState<string | undefined>();

  useEffect(() => {
    (async () => {
      setDoc(await getSlide({filename}));
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
