'use client';

import {useContext, useEffect} from 'react';
import mermaid from 'mermaid';
import mermaidSettings from '@/features/mermaid/lib/settings';
import {RemarkContext} from '../contexts/RemarkContext';
import remarkSettings from '../lib/settings';

export type Props = {
  doc: string;
};

export function Slide({doc}: Props) {
  const context = useContext(RemarkContext);

  useEffect(() => {
    if (context && context.remark) {
      context.remark.create(remarkSettings);
      mermaid.init(mermaidSettings, document.querySelectorAll('.mermaid'));
    }
  }, [context, context?.remark]);

  return context ? (
    <>
      <textarea id="source" defaultValue={doc} />
    </>
  ) : (
    <p>Loading...</p>
  );
}
