'use client';

import * as Dialog from '@radix-ui/react-dialog';

import { useDialog } from '@/Providers/OrderCallProvider';
import { useSuccessDialog } from '@/Providers/SuccessModalProvider';
import { CallOrderForm } from './CallOrderForm';

export const OrderCallDialog = () => {
	const [isOpen, setIsOpen] = useDialog();
	const [, setIsOpenSuccess] = useSuccessDialog();

	const onSuccess = () => {
		setIsOpen(false);
		setIsOpenSuccess(true);
	};

	return (
		<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
			<Dialog.Portal>
				<Dialog.Overlay className='bg-black/50 data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayHide fixed inset-0 backdrop-blur-sm z-40' />
				<Dialog.Content className='fixed left-[50%] top-[50%] z-40 grid p-3 md:p-5 w-full max-w-xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut rounded-lg md:w-full'>
					<CallOrderForm onSuccess={onSuccess} />
					<Dialog.Close className='absolute right-3 top-2 px-1  text-gray-500 hover:text-gray-700'>
						<span className='text-lg'>x</span>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};
