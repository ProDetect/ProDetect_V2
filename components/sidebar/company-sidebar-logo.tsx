"use client";
import React, { useState } from "react";
import Image from 'next/image';

interface Company {
}

export const CompanySidebarLogo = () => {
  const [company] = useState<Company>({
  });
  return (
    <Image
      className='mt-0.5 w-50 h-25'
      src='/dashboard-logo.png'
      alt='prodetect_logo'
      width={200}
      height={100}
    />
  );
}
