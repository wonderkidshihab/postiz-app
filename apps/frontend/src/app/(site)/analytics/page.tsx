export const dynamic = 'force-dynamic';

import { AnalyticsComponent } from '@gitroom/frontend/components/analytics/analytics.component';
import { PlatformAnalytics } from '@gitroom/frontend/components/platform-analytics/platform.analytics';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Zoomblie Analytics`,
  description: '',
};

export default async function Index() {
  return (
    <>
      {isGeneralServerSide() ? <PlatformAnalytics /> : <AnalyticsComponent />}
    </>
  );
}
