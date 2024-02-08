"use client";

import anime from "animejs";
import { useEffect, useRef } from "react";

export default function Tatagraha() {
    const animationRef = useRef(null);
    const animasi = () => {
        const textWrapper = document.querySelector('#letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<tspan id='letter'>$&</tspan>");
        animationRef.current =
            anime.timeline({
                easing: 'easeInOutExpo',
                loop: true,
                direction: 'alternate',
                duration: 2000
            })
                .add({
                    targets: ['#kotak5', '#kotak6', '#kotak7', '#nyempil'],
                    y: 30,
                    duration: 1000
                })
                .add({
                    targets: ['#kotak9', '#kotak10', '#kotak11', '#kotak12'],
                    y: 60,
                    duration: 1000
                }, '-=1000')
                .add({
                    targets: '#kotak2',
                    x: 20,
                    duration: 1000
                }, '-=500')
                .add({
                    targets: '#kotak3',
                    x: 40,
                    duration: 1000
                }, '-=1000')
                .add({
                    targets: '#kotak4',
                    x: 60,
                    duration: 1000
                }, '-=1000')
                .add({
                    targets: '#kotak10',
                    x: 20,
                    duration: 1000
                }, '-=1000')
                .add({
                    targets: '#kotak11',
                    x: 40,
                    duration: 1000
                }, '-=1000')
                .add({
                    targets: '#kotak12',
                    x: 60,
                    duration: 1000
                }, '-=1000')
                .add({
                    targets: '#kotak6',
                    x: 20,
                    duration: 1000
                }, '-=1000')
                .add({
                    targets: '#kotak7',
                    x: 40,
                    duration: 1000
                }, '-=1000')
                .add({
                    targets: '#nyempil',
                    x: 60,
                    duration: 1000
                }, '-=1000')
                .add({
                    targets: '#nyempil',
                    transform: "rotate(45 76 54)",
                }, '-=1000')
                .add({
                    targets: '#letter',
                    scale: [0.3, 1],
                    opacity: [0, 1],
                    translateY: 0,
                    duration: 500,
                    delay: (el, i) => 70 * (i + 1)
                }, '-=1200')
                .add({
                    targets: '#arsitek',
                    opacity: [0, 1],
                }, '-=800');
    }

    useEffect(() => {
        animasi();
    }, []);

    return (
        <span className='flex w-full h-auto p-8 bg-white text-blue-900'>
            <svg viewBox="0 0 260 84" className="w-full h-auto">
                <rect width='15' height='25' x='0' y='0' fill="currentColor" />
                <rect width='15' height='25' x='0' y='0' fill="currentColor" id="kotak2" />
                <rect width='15' height='25' x='0' y='0' fill="currentColor" id="kotak3" />
                <rect width='15' height='25' x='0' y='0' fill="currentColor" id="kotak4" />
                <rect width='15' height='25' x='0' y='0' fill="currentColor" id="kotak5" />
                <rect width='15' height='25' x='0' y='0' fill="currentColor" id="kotak6" />
                <rect width='15' height='25' x='0' y='0' fill="currentColor"  id="kotak7" />
                <rect width='15' height='25' x='0' y='0' fill="none" stroke="currentColor" transform="rotate(0 76 54)" id="nyempil" />
                <rect width='15' height='25' x='0' y='0' fill="currentColor"  id="kotak9" />
                <rect width='15' height='25' x='0' y='0' fill="currentColor"  id="kotak10" />
                <rect width='15' height='25' x='0' y='0' fill="currentColor"  id="kotak11" />
                <rect width='15' height='25' x='0' y='0' fill="currentColor" id="kotak12" />
                <text y='50' x='100' className="text-4xl font-semibold font-mocha" fill="currentColor"><tspan id="letters">tatagraha</tspan></text>
                <text y='75' x='100' className="text-lg tracking-[.45em]" fill="currentColor" id="arsitek">ARCHITECT</text>
            </svg>
        </span>
    )
}
