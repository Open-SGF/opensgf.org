import { Hero } from '@/components/Blocks/Hero/Hero';
import { IconSet } from '@/components/Blocks/IconSet/IconSet';
import React from 'react';

export default function volunteer() {
    return (
        <div>
            <Hero imageSrc="/images/group-working-two.svg">
                <h1>Volunteer With Us</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Enim nec dui nunc mattis.
                </p>
                <h2>Skillsets Needed:</h2>
                <ul>
                    <li>-Lorem ipsum</li>
                    <li>-Lorem ipsum</li>
                    <li>-Lorem ipsum</li>
                    <li>-Lorem ipsum</li>
                </ul>
            </Hero>
            <div>Upcoming Events Block</div>
            <IconSet />
        </div>
    );
}
