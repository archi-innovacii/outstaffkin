import { StepsModal } from './StepsModal';

const StepsList = [
	{
		title: 'Консультация и согласование',
		text: 'Вы получите ответы на вопросы и выберете удобное для Вас время',
	},
	{
		title: 'Заключение договора',
		text: 'Подготовка необходимых документов для вывода сотрудников за штат',
	},
	{
		title: 'Снижение нагрузки на вашу компанию',
		text: 'Берем на себя кадровый вопрос и контакты с государственными службами. Вы получаете отчет каждый месяц',
	},
	{
		title: 'Сокращение затрат',
		text: 'Вы экономите более 64 тысяч в год за одного человека. Более полумиллиона за 10 человек!',
	},
];
export const StepsSection = () => (
	<section className='relative block w-full pt-10 md:pt-[60px] xl:pt-[90px] xl:pb-[50px] bg-gradient-to-t from-[#fff]/0  to-[#fffafc]/100'>
		<div className='relative w-full mx-auto px-5 min-w-[320px] max-w-[420px] md:max-w-[860px] xl:max-w-[1120px]'>
			<div className='mb-[25px] md:mb-[60px] xl:mb-[45px]'>
				<h2 className='text-center font-medium text-lg/normal md:text-[30px]/normal xl:text-4xl/normal'>
					Как вывести персонал за штат
				</h2>
			</div>

			<ul className='list-none p-0 mb-[15px] md:mx-auto md:flex md:flex-wrap xl:justify-center'>
				<li className='w-60 mx-auto mb-[25px] md:relative md:w-1/2 md:px-[15px] md:mb-10 xl:flex-[0_0_auto] xl:w-1/3 xl:mb-[60px]'>
					<div className='flex items-center justify-center w-[85px] h-[85px] mx-auto mb-[10px] border-2 border-[#ac0039] bg-white text-[#ac0039] rounded-full font-bold text-4xl/normal md:mb-[30px] xl:w-20 xl:h-20'>
						1
					</div>

					<div>
						<h3 className='text-center m-0 text-base/normal font-medium md:mb-[5px] md:text-xl/normal'>
							Запрос в Аутстаффкин
						</h3>
						<p className='text-center m-0 text-xs/normal font-light md:text-base/normal'>
							Заполните форму или позвоните нам
							<br />
							<a href='tel:+74951505424' className='underline hover:no-underline'>
								+7 (495) 150-54-24
							</a>
							<br />
							или{' '}
							<a href='tel:+79255550550' className='underline hover:no-underline'>
								+7 (925) 555-05-50
							</a>
						</p>
					</div>
				</li>
				{StepsList.map((step, index) => (
					<li
						className='w-60 mx-auto mb-[25px] md:relative md:w-1/2 md:px-[15px] md:mb-10 xl:flex-[0_0_auto] xl:w-1/3 xl:mb-[60px] xl:mx-0'
						key={index}
					>
						<div className='flex items-center justify-center w-[85px] h-[85px] mx-auto mb-[10px] border-2 border-[#ac0039] bg-white text-[#ac0039] rounded-full font-bold text-4xl/normal md:mb-[30px] xl:w-20 xl:h-20'>
							{index + 2}
						</div>

						<div>
							<h3 className='text-center m-0 text-base/normal font-medium md:mb-[5px] md:text-xl/normal'>
								{step.title}
							</h3>
							<p className='text-center m-0 text-xs/normal font-light md:text-base/normal'>
								{step.text}
							</p>
						</div>
					</li>
				))}
			</ul>
			<StepsModal trigger='Начать экономить' />
		</div>
	</section>
);
