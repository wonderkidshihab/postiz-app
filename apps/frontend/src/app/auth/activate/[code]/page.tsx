export const dynamic = 'force-dynamic';

import { AfterActivate } from '@gitroom/frontend/components/auth/after.activate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Zoomblie - Activate your account`,
  description: '',
};

export default async function Auth() {
  return <AfterActivate />;
}
