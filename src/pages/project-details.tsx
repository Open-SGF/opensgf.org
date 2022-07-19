import React, {Component} from 'react';
import { Hero } from '@/components/Blocks/Hero/Hero';
import {ParticlesComp} from "@/components/Particles/Particles";
import Image from "next/image";
import Gallery from "@/components/Gallery";

export default function ProjectDetails() {
        return (
            <div>
            <Hero
                header={<h2>Project Name</h2>}
                text={<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum est harum illum iusto labore reprehenderit repudiandae tenetur velit voluptates!</p>}
                image={<Image src={"/images/Laptop-phone.svg"} alt='laptop' width={500} height={500}/> }
                particles={<ParticlesComp />}
                lable={<h3>Skills/Help Needed</h3>}
                list={<ul>
                   <li>
                       Design
                   </li>
                    <li>
                       Development
                    </li>
                    <li>
                       Marketing
                    </li>
                </ul>}
                bool={true}
                />
            <Gallery/>
            </div>
        );
}

