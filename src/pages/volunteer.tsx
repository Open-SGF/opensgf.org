import { Hero } from '@/components/Blocks/Hero/Hero';
import { IconSet } from '@/components/Blocks/IconSet/IconSet';
import Image from 'next/image';
import { ParticlesComp } from '@/components/Particles/Particles';
import React from 'react';
import { UpcomingEvents } from '@/components/Blocks/UpcomingEvents/UpcomingEvents';

export default function volunteer() {
    return (
        <div>
            <Hero
                header={<h2>Volunteer With Us</h2>}
                text={
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur enim exercitationem
                        impedit iure labore libero modi mollitia nesciunt quae quibusdam! Ad animi eveniet excepturi
                        fugiat modi? Ab animi fugit rerum.
                    </p>
                }
                lable={<h3> Skills/Help Needed</h3>}
                list={
                    <ul>
                        <li>Developement</li>
                        <li>Marketing</li>
                        <li>Design</li>
                    </ul>
                }
                image={
                    <Image src={'/images/volunteer-working.svg'} alt="volunteers-working" width={362} height={175} />
                }
                particles={<ParticlesComp />}
            />
            <UpcomingEvents />
            <IconSet />
        </div>
    );
}
