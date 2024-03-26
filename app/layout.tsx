'use client'

import '@/app/ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';
import TopNav from './ui/dashboard/topnav';

function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
      <html lang="en">
        <body className={`${lusitana.className} antialiased`}>
          <div className="w-full flex-none md:w-full h-[70px] bg-red-700">
            <TopNav/>
          </div>
          {children}
        </body>
      </html>
  );
}

export default (RootLayout);