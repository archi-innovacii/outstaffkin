import Image from 'next/image';

import { FaqAccordion } from './FaqAccordion';
import { FaqModal } from './FaqModal';

export const FaqSection = () => (
	<section className='py-10 bg-[#fffafc] md:py-[60px]'>
		<div className='relative w-full mx-auto px-[10px] min-w-[320px] max-w-[420px] md:px-5 md:max-w-[860px] xl:max-w-[1120px]'>
			<div className='mb-[25px] md:mb-[50px]'>
				<h2 className='text-center font-medium text-lg/normal md:text-[28px]/normal xl:text-4xl/normal'>
					Самые популярные вопросы
				</h2>
			</div>

			<FaqAccordion />

			<div className='flex flex-col items-center justify-start w-full'>
				<span className='mb-[45px] text-base md:mb-[55px] md:text-xl xl:text-2xl'>
					Не нашли ответа на вопрос?
					<Image
						src='/arrow.svg'
						alt='arrow'
						width={16}
						height={16}
						className='mx-auto mt-5'
					/>
				</span>
				<FaqModal trigger='Задайте сейчас' />
			</div>
		</div>
	</section>
);
