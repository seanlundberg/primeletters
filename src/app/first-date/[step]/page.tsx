import { FirstDateProvider } from '@/features/first-date/context/FirstDateContext';
import { FirstDateFlow } from '@/features/first-date/components/FirstDateFlow';

interface PageProps {
    params: Promise<{ step: string }>;
}

export default async function FirstDateStepPage({ params }: PageProps) {
    const { step } = await params;
    
    return (
        <FirstDateProvider initialStepId={step}>
            <FirstDateFlow />
        </FirstDateProvider>
    );
}

