export const dynamic = 'force-dynamic';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Zoomblie Messages`,
  description: '',
};

export default async function Index() {
  return (
    <div className="bg-customColor3 h-[951px] flex flex-col rounded-[4px] border border-customColor6">
      <div className="bg-customColor8 h-[64px]" />
      <div className="flex-1 flex justify-center items-center text-[20px]">
        Select a conversation and chat away.
      </div>
    </div>
  );
}
