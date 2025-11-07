import type { Metadata } from 'next';
import { Inter, Noto_Serif_Devanagari, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const noto = Noto_Serif_Devanagari({ subsets: ['devanagari'], variable: '--font-noto' });

export const metadata: Metadata = {
  title: 'नेकी का प्रतिफल',
  description:
    'एक किसान और कबूतर की करुणा और कृतज्ञता की कहानी को एक इंटरेक्टिव अनुभव के रूप में महसूस करें।'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className={`${inter.variable} ${playfair.variable} ${noto.variable}`}>
      <body className="font-sans antialiased text-base text-dusk">
        {children}
      </body>
    </html>
  );
}
