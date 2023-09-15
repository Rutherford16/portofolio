import { useRef, useEffect } from 'react';
import anime from 'animejs';

export default function Marlboro() {
    const animationRef = useRef(null);

    const animasi = () => {
        animationRef.current =
            anime.timeline({
                easing: 'easeInOutExpo',
                loop: true,
                direction: 'alternate',
                duration: 2000
            })
                .add({
                    targets: '#textStyle',
                    d: "M1,52 L32,34 L64,52"
                })
                .add({
                    targets: '#segitiga',
                    points: "0,54 32,36 64,54"
                }, '-=2000')
                .add({
                    targets: '#kotakBawah',
                    translateY: -42.1,
                    direction: 'reverse'
                }, '-=2000')
                .add({
                    targets: '#isiKotakBawah',
                    translateY: [120, 0],
                    opacity: [0, 1]
                }, '-=2000')
                .add({
                    targets: '#daun',
                    opacity: [0, 1]
                }, '-=1500')
                .add({
                    targets: '#daunKiri',
                    d: "M30.8,5 L30.8,6 C30.8,6 32.8,8 30.8,10 C30.8,10 28.8,8 30.8,6"
                }, '-=1800')
                .add({
                    targets: '#daunKanan',
                    d: "M33.2,5 L33.2,6 C33.2,6 35.2,8 33.2,10 C33.2,10 31.2,8 33.2,6"
                }, '-=2000')
                .add({
                    targets: ['#kananDaun', '#kiriDaun'],
                    opacity: [0, 1]
                }, '-=1500');
    }

    useEffect(() => {
        animasi();
    }, []);

    return (

        <div id="box" className='flex justify-center w-fit p-5 bg-white'>
            <svg viewBox="0 0 64 96" className='h-96 font-podiumSharp'>
                <rect width="64" height="96" fill="#193f5c"></rect>

                <g id="kiriDaun">
                    <line x1="5" y1="5.5" x2="27" y2="5.5" style={{ stroke: '#fff', strokeWidth: '.2' }} />
                    <text x="6" y="9.2" fill="#fffffe" style={{ fontSize: '3pt', letterSpacing: '1.6px' }}>CRAFTED</text>
                    <line x1="5" y1="10" x2="27" y2="10" style={{ stroke: '#fff', strokeWidth: '.2' }} />
                </g>

                <g id="daun">
                    <path id="daunKiri" fill="none" style={{ stroke: '#fff', strokeWidth: '.2' }}
                        d="M32,5 L32,6 C32,6 34,8 32,10 C32,10 30,8 32,6" />
                    <path id="daunTengah" fill="none" style={{ stroke: '#fff', strokeWidth: '.2' }}
                        d="M32,5 L32,6 C32,6 34,8 32,10 C32,10 30,8 32,6" />
                    <path id="daunKanan" fill="none" style={{ stroke: '#fff', strokeWidth: '.2' }}
                        d="M32,5 L32,6 C32,6 34,8 32,10 C32,10 30,8 32,6" />
                </g>

                <g id="kananDaun">
                    <line x1="37" y1="5.5" x2="58" y2="5.5" style={{ stroke: '#fff', strokeWidth: '.2' }} />
                    <text x="38" y="9.2" fill="#fffffe" style={{ fontSize: '3pt', letterSpacing: '2.2px' }}>ORIGIN</text>
                    <line x1="37" y1="10" x2="58" y2="10" style={{ stroke: '#fff', strokeWidth: '.2' }} />
                </g>

                <path id="textStyle" fill="none" stroke="none" d="M-4,94 L32,94 L64,94" />
                <text x="11" fill="#fffffe">
                    <textPath href="#textStyle">
                        MARLBORO
                    </textPath>
                </text>

                <polygon id="segitiga" points="0,96 32,96 64,96" fill="#fffffe" />
                <rect id="kotakBawah" x="0" y="96" width="64" height="42.1" fill="#fffffe"></rect>

                <g id="isiKotakBawah">
                    <path id="tagline" fill="none" stroke="none" d="M20,60 C20,60 30,50 44,60" />
                    <text fill="#030504" style={{ fontSize: '3pt' }}>
                        <textPath href="#tagline" startOffset="10%">
                            QUALITY TOBACCO
                        </textPath>
                    </text>
                    <text x="22" y="65" fill="#030504" style={{ fontSize: '2pt', letterSpacing: '.6px' }}>
                        EST
                    </text>
                    <rect x="28" y="60" width="6" height="6" fill="red"></rect>
                    <polygon points="28,66.2 31,63 34,66.2" fill="#fffffe" />
                    <text x="35" y="65" fill="#030504" style={{ fontSize: '2pt', letterSpacing: '.6px' }}>
                        1908
                    </text>
                    <line x1="4" y1="74" x2="60" y2="74" style={{ stroke: '#030504', strokeWidth: '.2' }} />
                    <text x="4" y="78" fill="#030504" style={{ fontSize: '1.5pt', letterSpacing: '.5px' }}>TASTING
                        NOTES</text>
                    <text x="4" y="81" fill="#030504" style={{ fontSize: '1.5pt', letterSpacing: '.5px' }}>RICH AND LIVELY
                        TOBACCO TASTE</text>
                    <text x="4" y="84" fill="#030504" style={{ fontSize: '1.5pt', letterSpacing: '.5px' }}>WITH AROMATIC
                        CHARACTER</text>
                    <line x1="4" y1="86" x2="60" y2="86" style={{ stroke: '#030504', strokeWidth: '.2' }} />
                    <text x="18" y="96" fill="#030504" style={{ fontSize: '3.2pt', letterSpacing: '.6px' }}>
                        12 CIGARETTES
                    </text>
                </g>
            </svg>
        </div>
    );
}