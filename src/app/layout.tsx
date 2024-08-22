import type {Metadata} from 'next';
import {Press_Start_2P} from 'next/font/google';
import {RemarkProvider} from '@/features/remark/providers/RemarkProvider';
import './global.sass';

const pressStart2p = Press_Start_2P({weight: '400', subsets: ['latin']});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_GITHUB_REPO,
  description: 'Show slides with markdown',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RemarkProvider>
        <body className={pressStart2p.className}>{children}</body>
      </RemarkProvider>
    </html>
  );
}
