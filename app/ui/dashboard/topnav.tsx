'use client'
import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from 'react';
import LoginForm from '../login-form';

export default function TopNav() {
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(false);

  return (
    <div className="flex h-full flex-row md:px-2">
      <Link
        className="mb-2 flex items-center pt-5 justify-end rounded-md p-4"
        href="/"
      >
        <div className="text-white">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row h-full justify-between space-x-2 md:flex-row md:space-x-0">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
          <a 
          href = "/profile"
          className="flex h-full grow items-center justify-center gap-2 rounded-md p-3 text-white text-sm font-medium hover:bg-stone-900 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3">
            <p className="hidden md:block">Profile</p>
          </a>
        {isSignedIn === true ? (
          <form>
            <Link href="/">
              <button 
              className="flex h-full grow items-center justify-center gap-2 rounded-md p-3 text-white text-sm font-medium hover:bg-stone-900 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3">
                <PowerIcon className="w-6" />
                <div className="hidden md:block">Sign Out</div>
              </button>
            </Link>
          </form>
        ) : isSignedIn === false ? (
          <form>
          <Link href="/login">
            <button 
            className="flex h-full grow items-center justify-center gap-2 rounded-md p-3 text-white text-sm font-medium hover:bg-stone-900 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3">
              <PowerIcon className="w-6" />
              <div className="hidden md:block">Sign In</div>
            </button>
          </Link>
        </form>
        ) : null}
      </div>
    </div>
  );
}
