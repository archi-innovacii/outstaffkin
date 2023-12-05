'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import Image from 'next/image';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const FaqItems = [
	{
		trigger: 'Могут ли у нас возникнуть проблемы с законом?!',
		content:
			'Вся ответственность за кадровые и бухгалтерские вопросы полностью лежит на нашей компании с момента подписания договора.',
	},
	{
		trigger:
			'Из-за чего такое различие в цене? У одной компании 3000, у другой 7000, а у вас 3500? Почему?',
		content:
			'Некоторые компании не включают в стоимость аутстаффинга оплату налогов, у нас НДФЛ уже входит в пакет услуг. Другие, пытаясь нажиться на незнающих людях, ставят накрутку более 300%. Мы против скрытых платежей и бешеных наценок, мы работаем честно!',
	},
	{
		trigger: 'Легальна ли ваша деятельность?',
		content:
			'Мы являемся официальным агентством занятости, аккредитованным ФСТЗ РОСТРУД. Уведомление № А-64/77.',
	},
	{
		trigger: 'Все равно сомневаемся',
		content:
			'Дарим Вам тест-драйв услуги на 30 дней с отсрочкой платежа, если оставите заявку прямо сейчас. Вы ничем не рискуете!',
	},
];

export const FaqAccordion = () => (
	<Accordion type='single' collapsible className='mx-auto mb-[10px] md:mb-10'>
		{FaqItems.map((item, index) => (
			<AccordionItem
				className='mb-[10px] md:mb-[15px] xl:mb-5'
				key={index}
				value={index.toString()}
			>
				<AccordionTrigger className='group flex justify-start items-center gap-x-10 text-start w-full m-0 py-[10px] px-[30px] text-xs font-medium border border-[#b2b9c5] bg-[#fafcff] rounded-lg md:py-[13px] md:ps-[45px] md:pe-[75px] md:text-base xl:py-[15px] xl:ps-[55px] xl:pe-[90px] xl:text-xl'>
					<div className='group-data-[state=open]:rotate-90 group-data-[state=closed]:rotate-0 transition-transform duration-300'>
						<Image src={'/right-arrow.svg'} alt={'faq-icon'} width={18} height={9} />
					</div>
					{item.trigger}
				</AccordionTrigger>
				<AccordionContent className='ps-[30px] pt-[10px] text-xs font-light md:ps-[75px} md:pe-[45px] md:text-base xl:pt-[15px] xl:text-xl'>
					{item.content}
				</AccordionContent>
			</AccordionItem>
		))}
	</Accordion>
);

const Accordion = AccordionPrimitive.Root;

const AccordionItem = forwardRef<
	ElementRef<typeof AccordionPrimitive.Item>,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item ref={ref} className={className} {...props} />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = forwardRef<
	ElementRef<typeof AccordionPrimitive.Trigger>,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className='flex'>
		<AccordionPrimitive.Trigger ref={ref} className={className} {...props}>
			{children}
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = forwardRef<
	ElementRef<typeof AccordionPrimitive.Content>,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className='overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
		{...props}
	>
		<div className={className}>{children}</div>
	</AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
