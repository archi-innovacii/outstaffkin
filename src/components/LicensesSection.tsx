import { LicensesModal } from './LicensesModal';

export const LicensesSection = () => (
	<section className='block w-full pt-[30px] pb-[170px] bg-licenses-bg bg-cover bg-no-repeat bg-[bottom_center] md:mt-[30px] md:pt-[150px] md:pb-[365px] xl:-mt-10 xl:pt-[130px] xl:pb-[530px] xl:bg-contain xl:bg-[left_center]'>
		<div className='relative w-full mx-auto min-w-[320px] max-w-[420px] md:max-w-[860px] xl:max-w-[1120px] px-[10px] md:px-5'>
			<h2 className='w-[220px] my-5 font-medium text-base md:text-xl xl:text-2xl'>
				Официально аккредитованная компания ФСТЗ&nbsp;“РОСТРУД”
			</h2>
			<LicensesModal
				trigger={
					<a
						aria-roledescription='Кнопка для открытия модального окна с лицензиями'
						tabIndex={0}
						role='button'
						className='absolute right-[75px] -bottom-[75px] w-[46px] h-[45px] bg-loupe bg-cover hover:scale-110 transition-transform duration-300 ease-in-out md:right-[235px] md:-bottom-[140px] xl:right-[460px] xl:-bottom-[210px] cursor-pointer'
					></a>
				}
			/>
		</div>
	</section>
);
