import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { ReactNode } from 'react';

import DialogProvider from '@/Providers/OrderCallProvider';
import SuccessDialogProvider from '@/Providers/SuccessModalProvider';
import { Footer } from '@/components/Footer';

import './globals.css';

const url = process.env.NEXT_PUBLIC_APP_URL as string;

const openSans = Open_Sans({
	subsets: ['cyrillic'],
	display: 'swap',
	weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
	metadataBase: new URL(url),
	title: 'Aутстаффинг персонала',
	description:
		'Выведение персонала за штат компании от 3000 руб. Поможем остаться на УСН. Сокращение расходов предприятия от 550 тыс. в год.',
	keywords:
		'аутстаффинг, аутстаффинг персонала, вывод персонала, выведение персонала, вывод сотрудников за штат, снижение расходов на зарплату, аренда персонала, как вывести сотрудника за штат',
	openGraph: {
		locale: 'ru_RU',
		type: 'website',
		siteName: 'Аутстаффкин',
		title: 'Аутстаффинг| Вывод персонала за штат',
		description: 'Выведение персонала за штат компании от 3000 руб. Поможем остаться на УСН...',
		url,
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='ru'>
			<DialogProvider initialState={false}>
				<SuccessDialogProvider initialState={false}>
					<body
						className={`flex flex-col min-h-screen ${openSans.className} subpixel-antialiased`}
					>
						{children}
						<Footer />
					</body>
				</SuccessDialogProvider>
			</DialogProvider>
		</html>
	);
}
