// @flow
import { acquisitionsSupportBaseline } from 'common/modules/experiments/tests/acquisitions-support-baseline';
import { acquisitionsSupportUsRecurringContribution } from 'common/modules/experiments/tests/acquisitions-support-us-recurring-contributions';

export const membershipEngagementBannerTests: $ReadOnlyArray<
    AcquisitionsABTest
> = [acquisitionsSupportBaseline, acquisitionsSupportUsRecurringContribution];