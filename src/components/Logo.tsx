import Image from "next/image";

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/brand/app-icon-solid-512-transparent.png"
        alt=""
        width={size}
        height={size}
      />
      <span
        className="font-heading font-extrabold"
        style={{
          letterSpacing: "-0.04em",
          fontSize: size * 0.5,
        }}
      >
        <span className="text-text-primary">Vincel</span>{" "}
        <span className="text-accent-gold">Studio</span>
      </span>
    </div>
  );
}
