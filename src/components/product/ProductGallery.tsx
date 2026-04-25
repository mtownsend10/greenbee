"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Stamp } from "@/components/illustrations/Stamp";
import { LeafSprig } from "@/components/illustrations/LeafSprig";
import type { Image as ProductImage } from "@/lib/shopify/types";

type Props = {
  title: string;
  images: ProductImage[];
  patternColor?: string;
};

export function ProductGallery({ title, images, patternColor }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex] ?? images[0];

  return (
    <div className="relative">
      <div
        className="relative aspect-square rounded-3xl border-2 border-ink shadow-[10px_10px_0_0_var(--ink)] overflow-hidden bg-paper"
        style={
          patternColor
            ? {
                backgroundImage: `radial-gradient(circle at 80% 20%, ${patternColor}33 0%, transparent 70%)`,
              }
            : undefined
        }
      >
        <Image
          key={active.url}
          src={active.url}
          alt={active.altText ?? title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover animate-[fadeIn_300ms_ease-out]"
        />
        <div className="absolute -top-3 -left-3 rotate-[-8deg] pointer-events-none">
          <Stamp
            text="Hand pressed"
            size={120}
            innerLabel={
              <span className="text-forest font-display text-xl">
                Bee
                <br />
                Made
              </span>
            }
            className="text-forest"
          />
        </div>
        <LeafSprig className="absolute bottom-4 right-4 w-16 pointer-events-none" />
      </div>

      {images.length > 1 && (
        <div className="mt-5 flex gap-3 flex-wrap">
          {images.map((img, i) => (
            <button
              key={img.url}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Show image ${i + 1}`}
              aria-pressed={i === activeIndex}
              className={cn(
                "relative size-20 rounded-xl border-2 overflow-hidden bg-cream transition-all",
                i === activeIndex
                  ? "border-honey shadow-[3px_3px_0_0_var(--ink)] -translate-y-0.5"
                  : "border-ink hover:border-honey",
              )}
            >
              <Image
                src={img.url}
                alt={img.altText ?? title}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0.5;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
