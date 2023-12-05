const SolutionList = [
	'Психологический аспект: Почему все работают в штате, а я в другой компании? - Этот вопрос можно разрешить беседой с сотрудниками о том, что в Вашей компании все работают на равных условиях и Вы равнозначно цените их труд.',
	'У работников могут возникать вопросы по нестыковке записей в трудовой книжке и реальных обязанностей. Решается это просто - рекомендательное письмо от обоих сторон (компания и подрядчик) с объяснением ситуации.',
	'Ваши подчиненные могут посчитать несолидным работать на одно предприятие, а числиться в другом. Стоит учесть, что 81% европейских компаний работают через аутстаффинг, и эта цифра растет',
];

export const SolutionSection = () => (
	<section className='relative block py-[25px] px-5 border-y border-[#cacaca] md:py-10 md:px-[25px] xl:px-0 xl:pt-[60px] xl:pb-[50px]'>
		<div className='hidden sm:block absolute bg-no-repeat w-full h-[74px] top-0 -mt-[37px] bg-[url(/clip.png),url(/clip.png)] bg-auto bg-[position:left_111px_center,right_111px_center]'></div>
		<div className='w-full mx-auto min-w-[320px] max-w-[420px] md:max-w-[860px] xl:max-w-[1120px] px-[10px] md:px-5'>
			<div className='mb-5 md:mb-[30px] xl:mb-[50px]'>
				<h2 className='text-center font-medium text-lg/normal md:text-[28px]/normal xl:text-4xl/normal'>
					Недостатки аутстаффинга и способы их решения
				</h2>
			</div>

			<ul>
				{SolutionList.map((item, index) => (
					<li
						className='relative mb-[10px] ps-[30px] text-sm font-light text-black/80 before:absolute before:w-[10px] before:h-[10px] before:left-[10px] before:top-[5px] before:bg-[#ac0039] before:rounded-full md:mb-5 md:text-xl md:before:w-[13px] md:before:h-[13px] md:before:left-0 md:before:top-2 xl:text-2xl xl:mb-[30px] xl:ps-11 xl:before:w-4 xl:before:h-4 xl:before:top-[10px]'
						key={index}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	</section>
);
