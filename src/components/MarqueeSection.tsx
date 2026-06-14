import React, { useRef, useState, useEffect } from 'react';

const row1Images = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
];

const row2Images = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

// Tripled lists for seamless loop
const tripledRow1 = [...row1Images, ...row1Images, ...row1Images];
const tripledRow2 = [...row2Images, ...row2Images, ...row2Images];

// Base offsets to center the middle sets:
// Each image is 420px wide with a gap of 12px (gap-3) -> 432px per unit.
// Row 1 set width = 11 * 432 = 4752px.
// Row 2 set width = 10 * 432 = 4320px.
const ROW1_BASE_OFFSET = -4752;
const ROW2_BASE_OFFSET = -4320;

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Calculate section top relative to document body scroll
      const sectionTop = rect.top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial run

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const row1Transform = `translate3d(${ROW1_BASE_OFFSET + (scrollOffset - 200)}px, 0, 0)`;
  const row2Transform = `translate3d(${ROW2_BASE_OFFSET - (scrollOffset - 200)}px, 0, 0)`;

  return (
    <div
      ref={sectionRef}
      className="bg-[#0C0C0C] w-full pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 - Moves RIGHT on scroll */}
        <div className="overflow-hidden w-full">
          <div
            style={{ transform: row1Transform, willChange: 'transform' }}
            className="flex gap-3 whitespace-nowrap"
          >
            {tripledRow1.map((url, idx) => (
              <img
                key={`row1-${idx}`}
                src={url}
                alt={`Jack Work 3D Row 1 - ${idx}`}
                className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Row 2 - Moves LEFT on scroll */}
        <div className="overflow-hidden w-full">
          <div
            style={{ transform: row2Transform, willChange: 'transform' }}
            className="flex gap-3 whitespace-nowrap"
          >
            {tripledRow2.map((url, idx) => (
              <img
                key={`row2-${idx}`}
                src={url}
                alt={`Jack Work 3D Row 2 - ${idx}`}
                className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
