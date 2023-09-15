import { useRef, useEffect } from 'react';
import anime from 'animejs';

export default function Bankaltimtara() {
    const animationRef = useRef(null);

    const animasi = () => {
        animationRef.current =
            anime.timeline({
                easing: 'easeInOutExpo',
                loop: true,
                direction: 'alternate',
                duration: 2500
            })
                .add({
                    targets: ['#textLogo', '#logo'],
                    opacity: [0, 1]
                })
                .add({
                    targets: '#b',
                    d: "M37,71 C37,71 37,75 37,55 C37,55 37,37 37,35 C37,35 37,35 37,30 Z"
                }, 0)
                .add({
                    targets: '#p',
                    d: "M69,5 C69,5 69,1 69,21 C69,21 69,39 69,37 C69,37 69,38 69,45 Z"
                }, '-=2500')
                .add({
                    targets: '#d',
                    d: "M106,71 C106,71 106,75 106,55 C106,55 106,37 106,35 C106,35 106,35 106,30 Z"
                }, '-=2500')
                .add({
                    targets: '#b',
                    d: "M37,71 C37,71 69,75 69,55 C69,55 69,37 41,35 C41,35 37,35 37,30 Z",
                    strokeWidth: 0
                }, '-=500')
                .add({
                    targets: '#p',
                    d: "M69,5 C69,5 101,1 101,21 C101,21 101,39 73,37 C73,37 69,38 69,45 Z",
                    strokeWidth: 0
                }, '-=2500')
                .add({
                    targets: '#d',
                    d: "M106,71 C106,71 74,75 74,55 C74,55 74,37 102,35 C102,35 106,35 106,30 Z",
                    strokeWidth: 0
                }, '-=2500');
    }

    useEffect(() => {
        animasi();
    }, []);

    return (
        <div id="box" className='flex justify-center w-fit p-5 bg-white'>
            <svg viewBox="0 0 145 100" className='w-full h-full'>
                <g id="logo">
                    <path id="b" fill="#05437c" style={{ strokeWidth: ".2", stroke: "#05437c" }}
                        d="M69,71 C69,71 69,75 69,55 C69,55 69,37 69,35 C69,35 69,35 69,30 Z" />
                    <path id="p" fill="#6d4006" style={{ strokeWidth: ".2", stroke: "#6d4006" }}
                        d="M69,5 C69,5 69,1 69,21 C69,21 69,39 69,37 C69,37 69,38 69,45 Z" />
                    <path id="d" fill="#05437c" style={{ strokeWidth: ".2", stroke: "#05437c" }}
                        d="M69,71 C69,71 69,75 69,55 C69,55 69,37 69,35 C69,35 69,35 69,30 Z" />
                </g>
                <text id="textLogo" x="5" y="95" fill="#05437c" style={{ fontSize: '15pt', letterSpacing: '1px' }}>bankaltimtara</text>
            </svg>
        </div>
    );
}