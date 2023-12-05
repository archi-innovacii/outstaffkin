'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

import { useDialog } from '@/Providers/OrderCallProvider';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string;
}

export const CallOrderBtn = (props: Props) => {
	const { children, className, ...rest } = props;

	const [, setIsOpen] = useDialog();

	const handleClick = () => {
		setIsOpen(true);
	};

	return (
		<button
			{...rest}
			onClick={handleClick}
			className={`hidden md:block px-4 py-1.5 border border-[#ac0039] hover:text-white bg-white hover:bg-gradient-to-t from-[#e3004c]/90 to-[#ac0039]  rounded-lg text-center font-normal duration-300 ease-linear ${className}`}
		>
			{children}
		</button>
	);
};
