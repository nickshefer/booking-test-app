import { Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const roboto = Roboto({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap'
});

export const metadata = {
	title: 'Air Tickets',
	description: 'Поиск дешевых авиабилетов'
};

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body
				className={`${roboto.className} bg-think-blue text-lg gradient-body`}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}
