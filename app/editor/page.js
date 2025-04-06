
'use client';

import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import Editor from '@/components/Editor';
import Tabs from '@/components/Tabs';
import { useEffect, useState } from 'react';

const PreviewButtons = dynamic(() => import('@/components/PreviewButtons'), { ssr: false });

export default function Page() {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') || 'contact';

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);

  if (!hasMounted) return null;

  return (
    <div className="mx-auto mt-8 flex max-w-screen-xl 2xl:max-w-screen-2xl flex-col gap-10 px-3 pb-8 md:mt-8 2xl:mt-14 2xl:gap-10">
      <PreviewButtons />
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="flex-grow">
          <Tabs activeTab={tab} />
          <Editor tab={tab} />
        </div>
      </div>
    </div>
  );
}



