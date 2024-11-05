"use client";
import React from "react";
import { useTheme as useNextTheme } from "next-themes";
import Image from 'next/image';

export const CompanySidebarLogo = () => {
  const { resolvedTheme } = useNextTheme();

  return (
    <Image
      className='mt-0.5 w-50 h-25'
      src={resolvedTheme === "dark" ? '/dashboard-logo.png' : '/logo.png'}
      alt='prodetect_logo'
      width={200}
      height={100}
    />
  );
};
