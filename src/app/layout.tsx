import type {Metadata} from 'next';
import {Press_Start_2P} from 'next/font/google';
import {RemarkProvider} from '@/features/remark/providers/RemarkProvider';
import {NesCssProvider} from '@/features/nes-css/providers/NesCssProvider';
import './global.css';

const pressStart2p = Press_Start_2P({weight: '400', subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NesCssProvider>
        <RemarkProvider>
          <body className={pressStart2p.className}>{children}</body>
        </RemarkProvider>
      </NesCssProvider>
    </html>
  );
}
