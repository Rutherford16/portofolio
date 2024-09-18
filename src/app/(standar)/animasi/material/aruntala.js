import { useRef, useEffect } from "react";
import anime from "animejs";

export default function Aruntala() {
  const animationRef = useRef(null);

  const animasi = () => {
    const textWrapper = document.querySelector("#namaLogo1");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<tspan id='letter'>$&</tspan>"
    );
    animationRef.current = anime
      .timeline({
        easing: "easeInOutQuad",
        loop: true,
        direction: "alternate",
        duration: 600,
      })
      .add({
        targets: "#sisiKiri",
        d: "M245 65 L262 95 L68 389 L30 389 Z",
      })
      .add(
        {
          targets: "#sisiKanan",
          d: "M268 30 L286 0 L498 325 L460 325 Z",
        },
        "-=150"
      )
      .add(
        {
          targets: "#sisiBawah",
          d: "M135 359 L520 359 L540 389 L115 389 Z",
        },
        "-=150"
      )
      .add({
        targets: "#segitigaKecilKiri",
        points: "198,190 171,230 230,230",
      })
      .add(
        {
          targets: "#segitigaKecilKanan",
          points: "374,190 348,230 400,230",
        },
        "-=600"
      )
      .add(
        {
          targets: "#segitigaKecilBawah",
          points: "286,326 260,362 310,362",
        },
        "-=600"
      )
      .add(
        {
          targets: "#segitigaDalam",
          opacity: 1,
        },
        "-=400"
      )
      .add({
        targets: "#letter",
        scale: [0.3, 1],
        opacity: [0, 1],
        translateY: 0,
        duration: 500,
        delay: (el, i) => 70 * (i + 1),
      })
      .add({
        targets: "#namaLogo2",
        opacity: 1,
      })
  };

  useEffect(() => {
    animasi();
  }, []);

  return (
    <div id="box" className="flex justify-center w-fit h-full p-5 font-sans">
      <svg viewBox="0 0 580 520" className="w-full h-full">
        <polygon
          points="198,190 171,230 184,210"
          fill="#DC2626"
          id="segitigaKecilKiri"
        />
        <polygon
          points="286,362 260,362 310,362"
          fill="#DC2626"
          style={{
            strokeWidth: 0,
            stroke: "none",
          }}
          id="segitigaKecilBawah"
        />
        <polygon
          points="374,190 387,210 400,230"
          fill="#DC2626"
          id="segitigaKecilKanan"
        />
        <path
          id="sisiKiri"
          fill="#DC2626"
          d="M30 389 L68 389 L68 389 L30 389 Z"
        />
        <path
          id="sisiBawah"
          fill="#DC2626"
          d="M520 359 L520 359 L540 389 L540 389 Z"
        />
        <path
          id="sisiKanan"
          fill="#DC2626"
          d="M268 30 L286 0 L286 0 L268 30 Z"
        />
        <polygon
          points="286,150 180,314 392,314"
          fill="none"
          style={{
            strokeWidth: 30,
            stroke: "#DC2626",
          }}
          className="opacity-0"
          id="segitigaDalam"
        />
        <text
          id="namaLogo1"
          x="0"
          y="480"
          fill="#DC2626"
          style={{
            fontSize: "80pt",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          ARUNTALA
        </text>
        <text
          id="namaLogo2"
          x="160"
          y="515"
          fill="#ff914d"
          style={{
            fontSize: "30pt",
            fontWeight: "bold",
            letterSpacing: "1px",
            opacity: "0",
          }}
        >
          KARYA GROUP
        </text>
      </svg>
    </div>
  );
}
