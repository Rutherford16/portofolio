import { useRef, useEffect } from 'react';
import anime from 'animejs';

export default function Honda() {
    const animationRef = useRef(null);

    const animasi = () => {
        animationRef.current =
            anime.timeline({
                easing: 'linear',
                loop: true,
                // direction: 'alternate',
                duration: 1000
            })
                .add({
                    targets: '#rangka',
                    d: 'M3,1 L80,28 C80,28 84,30 80,34 L68,48 L62,48 L77,33 C77,33 80,31 77,30 L10,12 C10,12 2,8 3,1 Z',
                })
                .add({
                    targets: '#tulang1',
                    opacity: [0, 1],
                }, '-=800')
                .add({
                    targets: '#tulang2',
                    opacity: [0, 1],
                }, '-=800')
                .add({
                    targets: '#tulang3',
                    opacity: [0, 1],
                }, '-=800')
                .add({
                    targets: '#tulang4',
                    opacity: [0, 1],
                }, '-=800')
                .add({
                    targets: '#logo',
                    translateX: 200,
                }, '+=800')
                .add({
                    targets: '#logo',
                    rotateY: '180deg',
                })
                .add({
                    targets: '#logo',
                    translateX: 85,
                    duration: 200
                })
                .add({
                    targets: '#textLogo',
                    opacity: [0, 1],
                })
    }

    useEffect(() => {
        animasi();
    }, []);

    return (

        <div id="box" className='flex justify-center w-fit bg-transparent'>
            <svg viewBox="0 0 86 64" className='h-96'>
                <g id="logo">
                    <path id="rangka" fill="red" d="M3,30 L80,28 C80,28 84,30 80,32 L68,32 L62,32 L77,31 C77,31 80,30 77,30 L10,35 C10,35 2,36 3,30 Z" />
                    {/* <path id="rangka" fill="red" d="M3,1 L80,28 C80,28 84,30 80,34 L68,48 L62,48 L77,33 C77,33 80,31 77,30 L10,12 C10,12 2,8 3,1 Z" /> */}
                    <path id="tulang1" fill="red" d="M10,14 L74,31 C74,31 77,32 73,35 L54,30 L54,29 L17,20 C17,20 10,19 10,14 Z" />
                    <path id="tulang2" fill="red" d="M15,22 L72.5,36 L68.5,39.5 L54,36 L54,35 L22,28 C22,28 16,28 15,22 Z" />
                    <path id="tulang3" fill="red" d="M20,31 L68,41 L65,44 L54,42 L54,41 L27,36 C27,36 22,36 20,31 Z" />
                    <path id="tulang4" fill="red" d="M54,43.5 L64,45 L61,48 L44,48 L54,43.5 Z" />
                </g>
                <text id="textLogo" className='font-serif font-extrabold' x="0" y="63" fill="red" style={{ fontSize: '15pt' }}>HONDA</text>
            </svg>
        </div>
    );
}