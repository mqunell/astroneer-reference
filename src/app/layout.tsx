import { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
	title: 'Astroneer Reference',
	description: 'Astroneer Reference',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en">
		<body
			className="min-h-screen w-screen bg-cover bg-fixed bg-center bg-no-repeat"
			style={{ backgroundImage: 'url(astroneer-background.webp)' }}
		>
			{children}
		</body>
	</html>
);

export default RootLayout;
