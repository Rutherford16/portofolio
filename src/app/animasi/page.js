'use client'

import { useRef, useEffect } from "react"
import anime from "animejs"

export default function Animasi() {
    const animationRef = useRef(null);

    const animasi = () => {
        const textWrapper = document.querySelector('.letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<tspan class='letter'>$&</tspan>");
        animationRef.current =
            anime.timeline({
                delay: 250,
                easing: 'easeInOutExpo'
            })
                .add({
                    targets: '.leftWing',
                    points: '45,95 15,20 35,40',
                    duration: 4000
                })
                .add({
                    targets: '.rightWing',
                    points: '450,35 10,5 40,35',
                    duration: 3000
                }, '-=3700')
                .add({
                    targets: '.text',
                    translateX: 30,
                    duration: 4000
                }, '-=4000')
                .add({
                    targets: '.letter',
                    scale: [0.3, 1],
                    opacity: [0, 1],
                    translateY: 0,
                    duration: 500,
                    delay: (el, i) => 70 * (i + 1)
                }, '-=2300');
    }

    useEffect(() => {
        animasi();
    }, []);

    return (
        <>
            <div className="lg:w-2/4 w-3/4 border h-fit pt-3 m-auto">
                <svg className="text-white w-full h-full text-5xl font-hemiHead" viewBox="0 0 460 100">
                    <g fill="currentColor">
                        <polygon points="10,95 50,5 50,35" className="leftWing" />
                        <text x="30" y="90" className="text">
                            B<tspan className="letters">lackadders</tspan>
                        </text>
                        <polygon points="100,95 55,5 55,35" className="rightWing" />
                    </g>
                </svg>
            </div>
        </>
    )
}