'use client';

import {useState} from 'react';
import Script from 'next/script';
import {RemarkContext} from '../contexts/RemarkContext';

export function RemarkProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [remark, setRemark] = useState<Remark>();
  const [error, setError] = useState<Error | undefined>(undefined);

  return (
    <>
      <RemarkContext.Provider value={{remark, setRemark, error}}>
        {children}
      </RemarkContext.Provider>
      <Script
        src="https://remarkjs.com/downloads/remark-latest.min.js"
        onLoad={() => {
          setRemark(window.remark);
        }}
        onError={error => {
          setError(error);
        }}
      />
    </>
  );
}
