export const dynamic = 'force-dynamic';

import { Register } from '@gitroom/frontend/components/auth/register';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Zoomblie Register`,
  description: '',
};

export default async function Auth() {
  return <Register />;
}
