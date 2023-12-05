import { AboutOutstaffingSection } from '@/components/AboutOutstaffingSection';
import { AdvantagesSection } from '@/components/AdvantagesSection';
import { FaqSection } from '@/components/FaqSection';
import { GetTestDriveSection } from '@/components/GetTestDriveSection';
import { GuarantySection } from '@/components/GuarantySection';
import { HeroSection } from '@/components/HeroSection';
import { LicensesSection } from '@/components/LicensesSection';
import { OrderCallDialog } from '@/components/OrderCallModal';
import { SolutionSection } from '@/components/SolutionSection';
import { StepsSection } from '@/components/StepsSection';
import { SuccessModal } from '@/components/SuccessModal';

export default function Home() {
	return (
		<main>
			<HeroSection />
			<OrderCallDialog />
			<GetTestDriveSection />
			<AboutOutstaffingSection />
			<AdvantagesSection />
			<StepsSection />
			<LicensesSection />
			<GuarantySection />
			<SolutionSection />
			<FaqSection />
			<SuccessModal />
		</main>
	);
}
