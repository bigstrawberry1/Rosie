import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function InteractiveHero() {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth return to center
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  // Glare position
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [100, 0]), springConfig);
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [100, 0]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate normalized mouse position (-0.5 to 0.5)
    const normalizedX = (e.clientX - rect.left) / width - 0.5;
    const normalizedY = (e.clientY - rect.top) / height - 0.5;
    
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset to center
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <figure className="my-12 w-full perspective-[1200px]">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative w-full rounded-2xl shadow-xl border border-[#E8E4DB] bg-white overflow-hidden cursor-crosshair",
          "transition-shadow duration-300 ease-out",
          isHovered ? "shadow-2xl shadow-blue-500/10" : ""
        )}
      >
        <motion.div
          style={{ transform: "translateZ(20px)" }}
          className="w-full h-full"
        >
          <img
            src="/hero-cards.jpg"
            alt="Pokémon TCG Pocket EX Cards"
            className="w-full h-auto object-cover max-h-[500px]"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=1200&auto=format&fit=crop";
            }}
          />
        </motion.div>

        {/* Dynamic Holographic / Glare Overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.6 : 0,
            background: useTransform(
              [glareX, glareY],
              ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 50%)`
            )
          }}
        />
        
        {/* Subtle Rainbow Foil Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none mix-blend-color-dodge opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.15 : 0,
            background: useTransform(
              [glareX, glareY],
              ([x, y]) => `linear-gradient(115deg, transparent 20%, rgba(255, 215, 0, 0.5) 30%, rgba(255, 0, 128, 0.5) 40%, rgba(0, 255, 255, 0.5) 50%, transparent 60%)`,
            ),
            backgroundPosition: useTransform(
              [glareX, glareY],
              ([x, y]) => `${x}% ${y}%`
            ),
            backgroundSize: "200% 200%"
          }}
        />
      </motion.div>
      
      <figcaption className="text-center text-sm text-[#6B6B66] mt-4 font-sans">
        Image: Creatures, DeNA/The Pokémon Company
      </figcaption>
    </figure>
  );
}
