'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

const DialogState = (initialState: boolean) => useState<boolean>(initialState);
export const DialogContext = createContext<ReturnType<typeof DialogState> | null>(null);

export const useDialog = () => {
	const isOpen = useContext(DialogContext);

	if (!isOpen) {
		throw new Error('useDialog must be used within a CartProvider');
	}

	return isOpen;
};

export default function DialogProvider({
	children,
	initialState,
}: {
	children: ReactNode;
	initialState: boolean;
}) {
	const [isOpen, setIsOpen] = DialogState(initialState);

	return <DialogContext.Provider value={[isOpen, setIsOpen]}>{children}</DialogContext.Provider>;
}
