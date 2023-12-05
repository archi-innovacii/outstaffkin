import Image from 'next/image';

export const AboutOutstaffingSection = () => (
	<section className='w-full py-5 md:py-10 xl:py-[65px] bg-gradient-to-t from-[#fffafc]/0  to-[#fffafc]/100'>
		<div className='w-full mx-auto min-w-[320px] max-w-[420px] md:max-w-[860px] xl:max-w-[1120px] px-3 md:px-5 '>
			<div className='mb-4 md:mb-8'>
				<h3 className='text-center font-medium text-lg/normal md:text-xl/normal xl:text-4xl/normal'>
					Что такое Аутстаффинг:
				</h3>
			</div>
			<p className='mb-6 md:mb-12 text-xs/normal md:text-xl/normal font-light'>
				Аутстаффинг – это выведение персонала за штат компании. При аутстаффинге персонал
				заключает трудовые договоры не с фирмой, являющейся фактическим работодателем, а с
				организацией-посредником, или аутстаффером.
			</p>

			<div className='flex flex-wrap md:flex-nowrap justify-between w-full'>
				<div className='flex-[0_0_auto] md:flex-auto w-[48%] md:w-auto md:max-w-[24%] xl:max-w-[23.5%] px-3 py-5 md:py-8 xl:py-9 mb-5 shadow-[0_17px_42px_-28px_rgba(0,0,0,.5)] border border-[#eee] rounded-xl'>
					<Image
						width={75}
						height={60}
						alt='Аутстаффинг'
						src={'/trigger1.svg'}
						className='mx-auto mb-3 md:mb-5 xl:mb-9 w-[75px] h-[60px] md:w-[85px] md:h-[80px] xl:w-[90px] xl:h-[105px]'
					/>
					<div>
						<h4 className='text-center font-medium mx-auto mb-1 md:mb-4 xl:mb-5 text-xs/normal md:text-base/normal xl:text-xl/normal'>
							Быстро
						</h4>
						<p className='text-xs/normal xl:text-base/normal font-light text-center'>
							Вывод персонала за штат в течение 1 дня
						</p>
					</div>
				</div>
				<div className='flex-[0_0_auto] md:flex-auto w-[48%] md:w-auto md:max-w-[24%] xl:max-w-[23.5%] px-3 py-5 md:py-8 xl:py-9 mb-5 shadow-[0_17px_42px_-28px_rgba(0,0,0,.5)] border border-[#eee] rounded-xl'>
					<Image
						width={75}
						height={60}
						alt='Аутстаффинг'
						src={'/trigger2.svg'}
						className='mx-auto mb-3 md:mb-5 xl:mb-9 w-[75px] h-[60px] md:w-[85px] md:h-[80px] xl:w-[90px] xl:h-[105px]'
					/>
					<div>
						<h4 className='text-center font-medium mx-auto mb-1 md:mb-4 xl:mb-5 text-xs/normal md:text-base/normal xl:text-xl/normal'>
							Без рисков и штрафов
						</h4>
						<p className='text-xs/normal xl:text-base/normal font-light text-center'>
							Берем на себя ответственность за исполнение законов
						</p>
					</div>
				</div>
				<div className='flex-[0_0_auto] md:flex-auto w-[48%] md:w-auto md:max-w-[24%] xl:max-w-[23.5%] px-3 py-5 md:py-8 xl:py-9 mb-5 shadow-[0_17px_42px_-28px_rgba(0,0,0,.5)] border border-[#eee] rounded-xl'>
					<Image
						width={75}
						height={60}
						alt='Аутстаффинг'
						src={'/trigger3.svg'}
						className='mx-auto mb-3 md:mb-5 xl:mb-9 w-[75px] h-[60px] md:w-[85px] md:h-[80px] xl:w-[90px] xl:h-[105px]'
					/>
					<div>
						<h4 className='text-center font-medium mx-auto mb-1 md:mb-4 xl:mb-5 text-xs/normal md:text-base/normal xl:text-xl/normal'>
							Никакой рутины
						</h4>
						<p className='text-xs/normal xl:text-base/normal font-light text-center'>
							Избавьтесь от контактов с гос. структурами и кадрового взаимодействия
						</p>
					</div>
				</div>
				<div className='flex-[0_0_auto] md:flex-auto w-[48%] md:w-auto md:max-w-[24%] xl:max-w-[23.5%] px-3 py-5 md:py-8 xl:py-9 mb-5 shadow-[0_17px_42px_-28px_rgba(0,0,0,.5)] border border-[#eee] rounded-xl'>
					<Image
						width={75}
						height={60}
						alt='Аутстаффинг'
						src={'/trigger4.svg'}
						className='mx-auto mb-3 md:mb-5 xl:mb-9 w-[75px] h-[60px] md:w-[85px] md:h-[80px] xl:w-[90px] xl:h-[105px]'
					/>
					<div>
						<h4 className='text-center font-medium mx-auto mb-1 md:mb-4 xl:mb-5 text-xs/normal md:text-base/normal xl:text-xl/normal'>
							Прозрачно
						</h4>
						<p className='text-xs/normal xl:text-base/normal font-light text-center'>
							Вы получаете отчет об оплате налогов каждый месяц
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);
