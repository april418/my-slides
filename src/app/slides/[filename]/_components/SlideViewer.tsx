'use client';

import {useEffect, useState} from 'react';
import {Slide} from '@/features/remark/components/Slide';
import {getContent} from '@/features/github/lib/github';

type Props = {
  filename: string;
  download_url: string;
};

export function SlideViewer({filename, download_url}: Props) {
  const [doc, setDoc] = useState<string | undefined>();

  useEffect(() => {
    (async () => {
      setDoc(await getContent({download_url}));
    })();
  }, [download_url]);

  return doc ? (
    <Slide doc={doc} />
  ) : (
    <main>
      <p>Loading...</p>
    </main>
  );
}
