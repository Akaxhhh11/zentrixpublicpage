import logoAsset from "@/assets/zentrix-logo.asset.json";

export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Zentrix"
      className={`${className} rounded-md object-contain`}
      loading="eager"
    />
  );
}
