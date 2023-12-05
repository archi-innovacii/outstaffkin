import { TestDriveForm } from './TestDriveForm';

export const GetTestDriveSection = () => (
	<section className='block border-y border-[#cacaca] py-[10px] md:py-5 xl:py-8'>
		<div className='mx-auto w-full min-w-[320px] max-w-[420px] md:max-w-[860px] xl:max-w-[1120px] px-3 md:px-5 '>
			<h3 className='block text-center font-light text-base/normal md:text-xl/normal xl:text-2xl/normal mb-3 md:mb-5 xl:mb-8'>
				Заполните заявку сейчас и получите тест-драйв услуги на месяц!
			</h3>
			<TestDriveForm />
		</div>
	</section>
);
