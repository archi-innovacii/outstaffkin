'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

const SuccessDialogState = (initialState: boolean) => useState<boolean>(initialState);
export const SuccessDialogContext = createContext<ReturnType<typeof SuccessDialogState> | null>(
	null,
);

export const useSuccessDialog = () => {
	const isOpen = useContext(SuccessDialogContext);

	if (!isOpen) {
		throw new Error('useSuccessDialog must be used within a CartProvider');
	}

	return isOpen;
};

export default function SuccessDialogProvider({
	children,
	initialState,
}: {
	children: ReactNode;
	initialState: boolean;
}) {
	const [isOpen, setIsOpen] = SuccessDialogState(initialState);

	return (
		<SuccessDialogContext.Provider value={[isOpen, setIsOpen]}>
			{children}
		</SuccessDialogContext.Provider>
	);
}
