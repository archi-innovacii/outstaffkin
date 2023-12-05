'use client';

import * as Dialog from '@radix-ui/react-dialog';

import { useSuccessDialog } from '@/Providers/SuccessModalProvider';

export const SuccessModal = () => {
	const [isOpen, onOpenChange] = useSuccessDialog();

	const closeModal = () => {
		onOpenChange(false);
	};

	return (
		<Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
			<Dialog.Portal>
				<Dialog.Overlay className='bg-black/50 data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayHide fixed inset-0 backdrop-blur-sm z-40' />
				<Dialog.Content className='fixed left-[50%] top-[50%] z-40 grid p-3 md:p-5 w-full max-w-xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut rounded-lg md:w-full'>
					<div className='text-center'>
						<h2 className='text-2xl font-bold mb-5'>Спасибо за заявку!</h2>
						<p className='text-lg text-[#666] mb-3'>
							Мы перезвоним вам в ближайшее время!
						</p>
					</div>

					<button
						className='mx-auto px-5 py-3 text-white bg-gradient-to-t from-[#e30e00] to-[#ac0600] rounded-full text-center text-lg/normal font-normal disabled:opacity-50'
						onClick={closeModal}
					>
						На главную
					</button>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};
