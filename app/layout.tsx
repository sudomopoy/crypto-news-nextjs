import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/global.scss";
import BaseLayout from "@/components/BaseLayout";
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;
//
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
    title: "News App",
    description: "News App",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`antialiased`} //${geistSans.variable} ${geistMono.variable}
            >
                <BaseLayout>
                    {children}
                </BaseLayout>
            </body>
        </html>
    );
}
