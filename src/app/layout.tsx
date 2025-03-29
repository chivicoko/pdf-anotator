import { ReactNode } from 'react';
import './globals.css';

// import Modal from 'react-modal';
// Modal.setAppElement('#__next');

export const metadata = {
  title: "Lapo-app | Good web application.",
  description: "Lapo-app is good.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-[#f8fbff]'>
        {children}
      </body>
    </html>
  );
}
