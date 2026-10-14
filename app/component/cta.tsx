import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CTAProps {
  className?: string;
  title?: string;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
}

export default function CTA({
  className = "",
  title = "Clarity for Your Legal Challenges",
  subtitle = "Strategic, result-driven legal solutions for individuals and businesses across India.",
  primaryBtnText = "Get Legal Help",
  primaryBtnHref = "/#contact",
  secondaryBtnText = "Explore our practice areas →",
  secondaryBtnHref = "/service",
}: CTAProps) {
  return (
    <section className={`relative bg-[#FAF4EB] py-[90px] overflow-hidden border-t border-[#30261C]/10 ${className}`}>
      {/* Background Decorative Blur & Yellow-Toned Light Beam Rays */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[968px] h-[1293px] left-1/2 -ml-[284px] -top-[531px]"
          style={{ transform: "rotate(11.849deg)" }}
        >
          <div
            className="absolute w-[49px] h-[1298px] left-[8px] top-[69px]"
            style={{
              transform: "rotate(39.681deg)",
              background: "rgba(210, 158, 13, 0)",
              filter: "blur(120px)",
            }}
          />
          <div
            className="absolute w-[49px] h-[1298px] left-[234px] top-[116px]"
            style={{
              transform: "rotate(29.681deg)",
              background: "rgba(210, 158, 13, 0)",
              filter: "blur(120px)",
            }}
          />
          <div
            className="absolute w-[49px] h-[1298px] left-[498px] top-[191px]"
            style={{
              transform: "rotate(29.681deg)",
              background: "rgba(210, 158, 13, 0.42)",
              filter: "blur(110px)",
            }}
          />
          <div
            className="absolute w-[49px] h-[1298px] left-[297px] top-[130px]"
            style={{
              transform: "rotate(29.681deg)",
              background: "rgba(210, 158, 13, 0.38)",
              filter: "blur(110px)",
            }}
          />
          <div
            className="absolute w-[49px] h-[1298px] left-[90px] top-[86px]"
            style={{
              transform: "rotate(29.681deg)",
              background: "rgba(210, 158, 13, 0.28)",
              filter: "blur(110px)",
            }}
          />
          <div
            className="absolute w-[49px] h-[1298px] left-[316px] top-[134px]"
            style={{
              transform: "rotate(29.681deg)",
              background: "rgba(210, 158, 13, 0.22)",
              filter: "blur(110px)",
            }}
          />
          <div
            className="absolute w-[49px] h-[1298px] left-[580px] top-[208px]"
            style={{
              transform: "rotate(29.681deg)",
              background: "rgba(210, 158, 13, 0)",
              filter: "blur(120px)",
            }}
          />
          <div
            className="absolute w-[49px] h-[1298px] left-[378px] top-[147px]"
            style={{
              transform: "rotate(29.681deg)",
              background: "rgba(210, 158, 13, 0)",
              filter: "blur(120px)",
            }}
          />
        </div>

        {/* Ambient Warm Golden Glow Mesh */}
        <svg
          className="absolute left-[30%] bottom-0 w-[245px] h-[234px]"
          width="868"
          height="696"
          viewBox="0 0 868 696"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: "blur(101.6px)" }}
        >
          <g filter="url(#filter0_f_cta)">
            <path
              d="M270.9 472.4V270.9L596.9 472.4V582.9L270.9 472.4Z"
              fill="#D29E0D"
              fillOpacity="0.5"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_cta"
              x="0"
              y="0"
              width="867.8"
              height="853.8"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="135.45"
                result="effect1_foregroundBlur"
              />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Main Content Box */}
      <div className="relative z-10 max-w-[588px] mx-auto flex flex-col items-center gap-[24px] md:gap-[30px] px-4 md:px-6">
        {/* Brand Icon Box */}
        <div
          className="w-[72px] h-[72px] md:w-[85px] md:h-[85px] p-[6px] md:p-[7px] flex justify-center items-center rounded-[10px]"
          style={{
            background: "rgba(210, 158, 13, 0.15)",
            border: "1px solid rgba(210, 158, 13, 0.3)",
            boxShadow: "rgba(48, 38, 28, 0.06) 0px 4px 20px 0px",
            backdropFilter: "blur(3px)",
          }}
        >
          <div
            className="w-[60px] h-[60px] md:w-[71px] md:h-[71px] flex-shrink-0 rounded-[6px] flex items-center justify-center bg-[#30261C] shadow-sm"
            style={{
              filter: "drop-shadow(rgba(0, 0, 0, 0.25) 0px 2px 4px)",
            }}
          >
            <Image
              alt="AMA Legal Solutions"
              width={53}
              height={53}
              src="/newAssets/logo/ama_box.svg"
              className="w-[45px] md:w-[53px] h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Heading & Subtitle */}
        <div className="flex flex-col items-center gap-[16px] md:gap-[19px] w-full text-center">
          <h2 className="text-[#30261C] text-center text-[31px] md:text-[47px] font-normal leading-[1.15] md:leading-[1.2] w-full tracking-tight">
            {title}
          </h2>
          <p
            className="text-center text-[16px] md:text-[19px] font-normal leading-[1.45] md:leading-[25px] w-full text-[#30261C]/75"
            style={{
              letterSpacing: "0.2px",
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Actions Button Row */}
        <div className="flex flex-row items-center gap-[16px] md:gap-[38px] flex-wrap justify-center sm:flex-nowrap">
          {/* Primary CTA Button with Glow Effect */}
          <div className="relative w-[150px] md:w-[172px] h-[43px] flex-shrink-0">
            <Link
              href={primaryBtnHref}
              className="absolute left-0 top-[4px] w-[150px] md:w-[172px] h-[35px] md:h-[39px] flex items-center justify-center gap-[8px] rounded-[47px] border-2 border-[#D29E0D] bg-[#30261C] px-[20px] md:px-[27px] py-[8px] md:py-[10px] hover:bg-[#D29E0D] hover:text-black transition-all shadow-sm group"
            >
              <span className="text-[#FAF4EB] group-hover:text-black text-[14px] md:text-[16px] font-medium leading-[16px] md:leading-[18px] transition-colors">
                {primaryBtnText}
              </span>
            </Link>

            {/* Glowing Accent Oval */}
            <svg
              className="absolute left-[15px] md:left-[28px] top-0 pointer-events-none z-10 w-[120px]"
              width="120"
              height="10"
              viewBox="0 0 140 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_1740_3634)">
                <ellipse
                  cx="70"
                  cy="7.5"
                  rx="66"
                  ry="3.5"
                  fill="url(#paint0_linear_1740_3634)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_1740_3634"
                  x="0"
                  y="0"
                  width="140"
                  height="15"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="2"
                    result="effect1_foregroundBlur_1740_3634"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1740_3634"
                  x1="4"
                  y1="7.5"
                  x2="136"
                  y2="7.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D29E0D" />
                  <stop offset="0.5" stopColor="white" />
                  <stop offset="1" stopColor="#D29E0D" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Secondary Text Link */}
          <Link
            href={secondaryBtnHref}
            className="text-[#30261C] hover:text-[#D29E0D] text-[15px] md:text-[18px] font-medium leading-[19px] transition-colors whitespace-nowrap"
          >
            {secondaryBtnText}
          </Link>
        </div>
      </div>
    </section>
  );
}
