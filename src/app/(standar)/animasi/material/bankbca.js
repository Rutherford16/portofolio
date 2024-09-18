import { useRef, useEffect } from "react";
import anime from "animejs";

export default function BankBCA() {
  const animationRef = useRef(null);

  const animasi = () => {
    animationRef.current = anime.timeline({
      easing: "easeInOutExpo",
      loop: true,
      direction: "alternate",
      duration: 2500,
    });
  };

  useEffect(() => {
    animasi();
  }, []);

  return (
    <div className="flex justify-center w-fit bg-white text-white">
      <svg viewBox="0 0 600 600" className="w-full h-full">
        <path
          fill="#aec0d6"
          d="M0,0 L600,0 L600,260 C600,260 440,220 0,320 L0,320 Z"
        />
        <path
          fill="#bac7d7"
          d="M0,320 C0,320 440,220 600,260 L600,260 L600,600 L0,600 Z"
        />
        <path
          fill="#1664a9"
          d="M100,100 C100,100 270,0 500,100 L500,100 C500,100 600,270 500,500 L500,500 C500,500 270,600 100,500 L100,500 C100,500 0,270 100,100 Z"
          id="bingkaiLuar"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          d="M120,250 C120,250 165,230 220,250 L220,250 C220,250 245,290 220,340 L220,340 C220,340 165,360 120,340 L120,340 C120,340 95,300 120,250 Z"
          id="bingkaiLogo"
        />
        <path
          fill="currentColor"
          d="M158,320 C158,320 162,305 140,315 C140,315 120,325 125,300 C125,300 160,300 160,315 L160,315 L160,320 L158,320 Z"
          id="bungaKecilKiri"
        />
        <path
          fill="currentColor"
          d="M162,320 C162,320 168,298 128,298 C128,298 120,298 120,285 C120,285 120,272 140,275 C140,275 163,280 164,295 L164,295 L164,320 L162,320 Z"
          id="bungaKiri"
        />
        <path
          fill="currentColor"
          d="M166,290 C166,290 160,275 140,273 C140,273 110,260 165,250 L168,290 L168,320 L166,320 Z"
          id="bungaTengah"
        />
        <path
          fill="currentColor"
          d="M170,285 L172,285 L172,320 L170,320 Z"
          id="bungaKanan"
        />
        <path
          fill="currentColor"
          d="M174,315 L176,315 L176,320 L174,320 Z"
          id="bungaKecilKanan"
        />
        <path
          fill="none"
          stroke="none"
          strokeWidth="3"
          id="textStyle"
          d="M125,335 C125,335 160,355 210,335"
        />
        <text fill="currentColor" className="text-lg font-bold">
          <textPath href="#textStyle">GRUP BCA</textPath>
        </text>
        <text
          x="240"
          y="340"
          fill="currentColor"
          className="font-nougat italic text-9xl"
        >
          BCA
        </text>
        <text
          x="120"
          y="400"
          fill="currentColor"
          className="text-4xl font-sans"
        >
          Senantiasa di Sisi Anda
        </text>
      </svg>
    </div>
  );
}
