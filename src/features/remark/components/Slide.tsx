'use client';

import {useContext, useEffect} from 'react';
import {RemarkContext} from '../contexts/RemarkContext';

export type Props = {
  doc: string;
};

export function Slide({doc}: Props) {
  const context = useContext(RemarkContext);

  useEffect(() => {
    if (context && context.remark) {
      context.remark.create();
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
