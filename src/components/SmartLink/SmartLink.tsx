import Link from 'next/link';
import React from 'react';

interface ISmartLink {
    to: string;
    children: React.ReactNode[] | React.ReactNode | string;
}

export function SmartLink({ to, children }: ISmartLink): React.ReactNode {
    if (to.includes('https://') || to.includes('http://') || to.includes('.')) {
        return (
            <a href={to} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    }
    return <Link href={to}>{children}</Link>;
}
