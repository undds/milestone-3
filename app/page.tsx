'use client';
import AcmeLogo from '@/app/ui/acme-logo';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import TopNav from '@/app/ui/dashboard/topnav';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} antialiased text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong className="text-stone-900">Welcome to Sustainabrew.</strong>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start px-6 py-3 text-sm font-lg text-stone-1000 border-[2px] border-stone-900 rounded-lg transition-colors md:text-base"
          >
            <span>Get started</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src='/hero-desktop.png'
            width={1000}
            height={700}
            className='hidden md:block rounded-lg'
            alt='Screenshots of the dashboard project showing desktop version'
          />
          <Image
            src='/hero-desktop.png'
            width={500}
            height={620}
            className='block md:hidden rounded-lg'
            alt='Screenshot of the dashboard project showing mobile version'
          />
        </div>
      </div>
    </main>
  );
}
