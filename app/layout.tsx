'use client'

import '@/app/ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';
import TopNav from './ui/dashboard/topnav';

function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
      <html lang="en" className='bg-stone-500'>
        <body className={`${lusitana.className} antialiased`}>
          <div className="w-full flex-none md:w-full h-[70px] bg-stone-700">
            <TopNav/>
          </div>
          <div className='bg-stone-500'>
            {children}
          </div>
        </body>
      </html>
  );
}

export default (RootLayout);