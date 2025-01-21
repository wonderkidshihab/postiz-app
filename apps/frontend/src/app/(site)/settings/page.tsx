export const dynamic = 'force-dynamic';

import { SettingsComponent } from '@gitroom/frontend/components/settings/settings.component';
import { internalFetch } from '@gitroom/helpers/utils/internal.fetch';
import { Metadata } from 'next';
import { RedirectType } from 'next/dist/client/components/redirect';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: `Zoomblie Settings`,
  description: '',
};
export default async function Index({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  if (searchParams.code) {
    await internalFetch('/settings/github', {
      method: 'POST',
      body: JSON.stringify({ code: searchParams.code }),
    });

    return redirect('/settings', RedirectType.replace);
  }

  return <SettingsComponent />;
}
