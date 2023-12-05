const WarrantyList = [
	'В случае, если пропустили хотя бы день уплаты налогов',
	'В случае, если возникли трудности с законом по нашей вине',
	'В случае, если мы не выполнили хотя бы один пункт договора',
];
export const GuarantySection = () => (
	<section className='block pt-[30px] pb-5 -mt-[30px] bg-[#fffafc] md:-mt-[70px] py-[35px] xl:-mt-[110px] xl:pt-[72px] xl:pb-[90px] text-black'>
		<div className='relative w-full mx-auto px-[10px] min-w-[320px] max-w-[420px] md:max-w-[860px] xl:max-w-[1120px] md:px-5'>
			<div className='mb-[25px] md:mb-[60px]'>
				<h2 className='text-center font-medium text-lg/normal md:text-[28px]/normal xl:text-4xl/normal'>
					Тройная гарантия возврата денег
				</h2>
			</div>
			<ul className='flex flex-col md:flex-row flex-nowrap justify-between'>
				{WarrantyList.map((item, index) => (
					<li
						className='w-[220px] mx-auto mb-[25px] px-[10px] py-[25px] shadow-[0_17px_42px_-28px_rgba(0,0,0,.5)] rounded-xl border border-[#eee] text-center font-light text-black/80 text-xs md:flex-[0_0_auto] md:w-[30.5%] md:py-[35px] md:mx-0 md:text-base xl:text-xl xl:w-[32%]'
						key={index}
					>
						<div className='flex items-center justify-center w-[90px] h-[90px] border-2 border-[#ac0039] bg-white text-[#ac0039] rounded-full font-bold text-4xl/normal mb-[25px] md:mb-10 mx-auto'>
							{index + 1}
						</div>
						{item}
					</li>
				))}
			</ul>
		</div>
	</section>
);
