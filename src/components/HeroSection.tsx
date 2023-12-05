import { Header } from './Header';

export const HeroSection = () => (
	<section className='relative w-full overflow-hidden bg-[#d4d4d4] bg-cover bg-hero-bg bg-[position:bottom_center] pt-[185px] md:pb-[130px] xl:pb-[170px]'>
		<Header />
		<div className='relative w-full mx-auto px-5 min-w-[320px] max-w-[420px] md:max-w-[860px] xl:max-w-[1120px]'>
			<div>
				<h1 className='mb-[85px] md:mb-5 text-center md:text-start text-3xl md:text-4xl xl:text-5xl xl:mb-4 font-normal leading-[1.1]'>
					Вывод персонала за штат
				</h1>
				<h3 className='my-5 md:my-8 mx-auto md:mx-0 max-w-[520px] text-center md:text-start text-xl md:text-[28px] lg:text-[32px] font-light leading-[1.4] '>
					Сокращение расходов предприятия от 550 тыс. в год!
				</h3>
			</div>
			<div className='absolute right-0 bg-cover bg-hero-man bg-[position:center_right] w-0 md:w-[312px] xl:w-[348px] h-0 md:h-[377px] xl:h-[421px] md:bottom-[-175px] xl:bottom-[-220px]'></div>
		</div>
	</section>
);
