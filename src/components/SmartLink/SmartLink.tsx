import Link from 'next/link';
import React from 'react';

interface ISmartLink {
    to: string;
    children: JSX.Element[] | JSX.Element | string;
}

export function SmartLink({ to, children }: ISmartLink): JSX.Element {
    if (to.includes('https://') || to.includes('http://') || to.includes('.')) {
        return (
            <Link href={to} passHref>
                <a target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            </Link>
        );
    }
    return (
        <Link href={to} passHref>
            <a>{children}</a>
        </Link>
    );
}
