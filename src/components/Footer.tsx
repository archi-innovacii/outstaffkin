import Image from 'next/image';

import { FooterForm } from './FooterForm';

export const Footer = () => (
	<footer className='block mt-auto py-[30px] md:py-[60px] w-full bg-[#807377] text-white'>
		<div className='w-full mx-auto px-[10px] md:px-5 min-w-[320px] max-w-[420px] md:max-w-[860px] xl:max-w-[1120px]'>
			<div className='w-full md:flex md:flex-nowrap md:items-start'>
				<div className='flex flex-nowrap md:flex-wrap justify-between xl:justify-start mb-10 md:mb-0 md:flex-auto md:items-start'>
					<div className='flex-[0_1_135px] md:basis-[200px] xl:basis-[260px] md:mr-10 font-light text-xs/normal xl:text-base/normal w-auto '>
						<h3 className='mb-5 text-xs/normal md:text-base/normal xl:text-xl/normal font-medium'>
							Информация
						</h3>
						<span className='block'>
							<b className='font-medium'>ИНН</b> 7708246043
						</span>
						<span className='block'>
							<b className='font-medium'>ОГРН</b> 1157746063078
						</span>
						<span>
							Уведомление об аккредитации ФСТЗ “РОСТРУД” № А-64/77 “Аутстаффкин 2023”
							<br />
							Все права защищены
						</span>
					</div>

					<div className='flex-[0_1_135px] md:basis-[200px] xl:basis-[260px] md:mr-10 font-light text-xs/normal xl:text-base/normal w-auto'>
						<h3 className='mb-5 text-xs/normal md:text-base/normal xl:text-xl/normal font-medium'>
							Наш адрес,
						</h3>
						<p className='mb-4'>
							<span>г. Москва</span>
							<span>
								{' '}
								м. Новослободская
								<br /> БЦ &quot;Сущевский&quot;, ул. Сущёвская, <br />
								д. 12, стр. 1, 2 подъезд, 3 эт., оф. 4
							</span>
						</p>
						<p className='mb-4'>
							Режим работы
							<time className='block font-medium'>ПН-ПТ 9:00 - 19:00</time>
						</p>

						<a
							href='tel:+74951505424'
							className='block mb-4 font-medium underline hover:text-[#ccc] transition-colors'
						>
							+7 (495) 150-54-24
						</a>
						<a
							href='tel:+79255550550'
							className='block mb-4 font-medium underline hover:text-[#ccc] transition-colors'
						>
							+7 (925) 555-05-50
						</a>

						<a
							href='mailto:msk@autstaffkin.com'
							className='block mb-4 font-medium underline hover:text-[#ccc] transition-colors'
						>
							msk@autstaffkin.com
						</a>
					</div>

					<div className='hidden md:flex flex-nowrap items-center justify-center md:justify-start mt-5 md:mt-[130px] xl:mt-[100px] w-full'>
						<Image
							src='/out logo full white.svg'
							alt='Аутстаффкин'
							priority
							width={229}
							height={58}
							className='mr-2 md:mr-5'
						/>
						<span className='-mt-1.5 text-2xl/normal font-medium'>© 2023</span>
					</div>
				</div>

				<div className='w-[240x] md:w-[290px] md:flex-[0_0_275px] mx-auto mb-8 md:mb-0'>
					<div className='mb-10 md:mb-0'>
						<span className='block text-center text-base/normal md:text-xl/normal xl:text-2xl/normal font-light mb-3 md:mb-5 xl:mb-8'>
							Свяжитесь с нами
						</span>
						<FooterForm />
					</div>
				</div>

				<div className='w-full flex flex-nowrap items-center justify-center mt-5 md:hidden'>
					<Image
						src='/logo-white.svg'
						alt='Аутстаффкин'
						priority
						width={209}
						height={57}
						className='mr-2'
					/>
					<span className='-mt-1.5 text-2xl/normal font-medium'>© 2023</span>
				</div>
			</div>
		</div>
	</footer>
);
