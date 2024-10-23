interface StatusIconProps {
  active?: boolean;
  size?: number;
  className?: string;
}

export default function StatusIcon({
  active = false,
  size = 12,
  className,
}: StatusIconProps) {
  return (
    <>
      <span className="sr-only">{active ? "Online" : "Offline"}</span>
      <span
        className={`right-0 w-${size / 4} h-${
          size / 4
        } rounded-full ${className} ${
          active ? "bg-green-500" : "bg-gray-400"
        } border-2 border-white`}
      ></span>
    </>
  );
}
