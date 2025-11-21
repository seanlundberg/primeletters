import { FirstDateProvider } from '@/features/first-date/context/FirstDateContext';
import { FirstDateFlow } from '@/features/first-date/components/FirstDateFlow';

export default function FirstDatePage() {
  return (
    <FirstDateProvider initialStepId="start">
      <FirstDateFlow />
    </FirstDateProvider>
  );
}