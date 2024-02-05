import { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
	title: 'Astroneer Reference',
	description: 'Astroneer Reference',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en">
		<body className="w-screen min-h-screen bg-auto bg-no-repeat bg-center bg-astroneer">
			{children}
		</body>
	</html>
);

export default RootLayout;
