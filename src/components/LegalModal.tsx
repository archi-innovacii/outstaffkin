'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';

import { LegalForm } from './LegalForm';

export const LegalModal = ({ trigger }: { trigger: string }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
			<Dialog.Trigger asChild>
				<a className='text-xs hover:underline text-[#337ab7] cursor-pointer'>{trigger}</a>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className='bg-black/50 data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayHide fixed inset-0 backdrop-blur-sm z-40' />
				<Dialog.Content className='fixed left-[50%] top-[50%] z-40 grid p-6 md:p-5 w-full max-w-3xl max-h-[90vh] translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut overflow-y-auto rounded-lg md:w-full scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scrollbar-corner-rounded-lg scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg'>
					<LegalForm />
					<Dialog.Close className='absolute right-3 top-2 px-1  text-gray-500 hover:text-gray-700'>
						<span className='text-lg'>x</span>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};
