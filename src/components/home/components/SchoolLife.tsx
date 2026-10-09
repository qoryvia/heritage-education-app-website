"use client";

import CountUp from "react-countup";

import bannerImage from "@/assets/images/home/banner/1.jpg";

const schoolStats = [
  {
    value: 80,
    label: "Professional Teachers",
  },
  {
    value: 25,
    label: "Years of Excellence",
  },
  {
    value: 1000,
    label: "Happy Students",
  },
  {
    value: 50,
    label: "Curricular Activities",
  },
];

export default function SchoolLife() {
  return (
    <section
      aria-label="School statistics"
      className="relative isolate overflow-hidden bg-[#002147] text-white"
    >
      {/* Background photograph */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: `url("${bannerImage.src}")`,
        }}
      />

      {/* Navy overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[rgba(0,33,71,0.88)]"
      />

      {/* Subtle contrast gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#002147]/50 via-transparent to-[#002147]/50"
      />

      {/* Centered statistics */}
      <div className="flex min-h-[260px] items-center justify-center px-6 py-16 sm:min-h-[280px] sm:py-20 lg:min-h-[320px] lg:py-24 xl:px-40">
        <div className="mx-auto grid w-full max-w-[1000px] grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-6">
          {schoolStats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-center gap-3 sm:gap-4"
            >
              {/* Fixed-width counter with golden line */}
              <div className="flex w-[5.5ch] min-w-[5.5ch] flex-none flex-col items-end gap-2">
                <span
                  className="inline-flex w-full justify-end text-right text-5xl font-normal leading-none tracking-tight tabular-nums sm:text-6xl"
                  aria-label={stat.value.toLocaleString("en-IN")}
                >
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2}
                    enableScrollSpy
                    scrollSpyOnce
                    scrollSpyDelay={100}
                    useEasing
                    useIndianSeparators
                  >
                    {({ countUpRef }) => (
                      <span
                        ref={countUpRef}
                        className="inline-block"
                      />
                    )}
                  </CountUp>
                </span>

                {/* Golden underline */}
                <span
                  aria-hidden="true"
                  className="h-[2px] w-9 rounded-full bg-[#D4AF37] sm:w-12"
                />
              </div>

              {/* Statistic label */}
              <span className="max-w-[125px] text-xs font-medium uppercase leading-5 tracking-wide text-white/95 sm:text-[13px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}