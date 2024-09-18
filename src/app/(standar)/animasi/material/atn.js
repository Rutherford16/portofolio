"use client";

import anime from "animejs";
import { useEffect, useRef } from "react";

export default function ATN() {
  const animationRef = useRef(null);
  const animasi = () => {
    animationRef.current = anime
      .timeline({
        easing: "easeInOutExpo",
        loop: true,
        direction: "alternate",
        duration: 2000,
      })
      .add({
        targets: "#apartemen",
        d: "M0,128 L128,0 L172,22 L172,72 L212,92 L256,128 Z",
        duration: 3000,
      });
  };

  useEffect(() => {
    animasi();
  }, []);

  return (
    <span className="flex w-full h-auto p-8 bg-slate-500 text-white">
      <svg viewBox="0 0 256 128" className="w-full h-auto">
        <g>
          {/* <rect width={256} height={4} y={80} fill="currentColor" /> */}
          <path
            id="apartemen"
            fill="currentColor"
            stroke="none"
            d="M0,128 L128,124 L128,124 L128,124 L128,124 L256,128 Z"
          />
        </g>
        {/* <rect width='15' height='25' x='0' y='0' fill="currentColor" />
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
                <text y='75' x='100' className="text-lg tracking-[.45em]" fill="currentColor" id="arsitek">ARCHITECT</text> */}
      </svg>
    </span>
  );
}
