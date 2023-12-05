const AdvantagesList = [
	'Остаться на УСН за счет сокращения штата',
	'Снять с себя юридическую отчетность за персонал',
	'Избежать конфликтных ситуаций с сотрудниками и трудовых споров',
	'Избавиться от выплат больничных, отпускных и производственных травм',
	'Передать оформление пакета документов для иностранных кадров',
	'Снизить занятость бухгалтерского и кадрового отделов',
];
export const AdvantagesSection = () => (
	<section className='relative block w-full border-y border-[#cacaca] py-5 md:pt-10 md:pb-[30px] xl:pt-[60px] xl:pb-10'>
		<div className='hidden absolute bg-no-repeat w-full h-[74px] top-0 -mt-[37px] bg-[url(/clip.png),url(/clip.png)] bg-auto bg-[position:left_111px_center,right_111px_center] sm:block'></div>
		<div className='relative w-full mx-auto px-5 min-w-[320px] max-w-[420px] md:max-w-[860px] xl:max-w-[1120px]'>
			<div className='mb-4 md:mb-10 xl:mb-[50px]'>
				<h2 className='text-center font-medium text-lg/normal md:text-[30px]/normal xl:text-4xl/normal'>
					Аутстаффинг – это для вас, если Вы хотите
				</h2>
			</div>

			<ul className='list-none p-0 m-0'>
				{AdvantagesList.map((advantage, index) => (
					<li
						className='relative ps-6 md:ps-[60px] xl:ps-[75px] mb-[10px] md:mb-[25px] xl:mb-[35px] font-light text-sm/normal md:text-lg/normal xl:text-2xl/normal before:absolute before:w-[14px] before:h-[11px] before:left-0 before:top-[5px] before:bg-check-green before:bg-contain before:bg-no-repeat md:before:w-6 md:before:h-[18px] md:before:left-5 xl:before:w-[34px] xl:before:h-[25px] xl:before:left-0 xl:before:top-[10px]'
						key={index}
					>
						{advantage}
					</li>
				))}
			</ul>
		</div>
	</section>
);
