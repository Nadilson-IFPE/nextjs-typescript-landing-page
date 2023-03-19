import React, { ReactNode } from 'react';
import Head from 'next/head';
import 'animate.css';
import { Inter } from 'next/font/google';

interface LayoutProps {
    title: string
    children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

const Layout = ({ title, children }: LayoutProps) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="UTF-8" />
                <meta name="description" content={title} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>
            <div className={inter.className}>
                {children}
            </div>

        </div>
    )
}
export default Layout;