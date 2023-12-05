import Image from 'next/image';

import { CallOrderBtn } from './CallOrderBtn';

export const Header = () => (
	<header className='absolute top-0 w-full block md:mx-auto pt-[10px] md:py-[25px] xl:pt-[35px]'>
		<div className='relative mx-auto md:px-5 w-full min-w-[320px] max-w-[420px] md:max-w-[860px] xl:max-w-[1120px]'>
			<div className='flex flex-wrap justify-between items-start md:items-center'>
				<div className='flex shrink-0 grow-0 basis-auto mx-auto md:m-0 w-[300px] md:w-[292px] xl:w-[399px] h-[77px] md:h-[75px] xl:h-[101px] order-2 md:order-[initial]'>
					<Image
						src='/out logo full.svg'
						alt='Аутстаффкин'
						priority
						width={399}
						height={75}
						className='self-start w-auto h-auto'
					/>
				</div>

				<div className='mb-[15px] md:mb-0 mr-[4px] xl:ms-auto text-[10px] md:text-[14px] xl:text-base/normal text-start font-light leading-[-.5px]'>
					<p className=''>
						г. Москва, м. Новослободская, <br />
						БЦ &quot;Сущевский&quot;, ул. Сущёвская, <br />
						д. 12, стр. 1, 2 подъезд, 3 эт., оф. 4
					</p>
					<p className='font-normal'>ПН-ПТ с 9:00 до 19:00</p>
				</div>

				<div className='relative flex flex-col gap-y-2 shrink-0 grow-0 basis-auto mb-5 md:mb-0 xl:ms-auto text-xs md:text-base xl:text-xl text-center font-light'>
					<a
						href='tel:+74951505424'
						className='block md:hidden px-4 py-1.5 border border-[#ac0039] rounded-lg text-center font-normal'
					>
						+7 (495) 150-54-24{' '}
					</a>
					<a
						href='tel:+79255550550'
						className='block md:hidden px-4 py-1.5 border border-[#ac0039] rounded-lg text-center font-normal'
					>
						+7 (925) 555-05-50{' '}
					</a>

					<CallOrderBtn>+7 (495) 150-54-24</CallOrderBtn>
					<CallOrderBtn>+7 (925) 555-05-50</CallOrderBtn>
				</div>
			</div>
		</div>
	</header>
);
