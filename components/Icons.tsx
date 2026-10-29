import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function CalculatorIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="2.5" width="16" height="19" rx="2" />
      <path d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" />
    </svg>
  );
}

export function ScaleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v18M7 21h10M4 7h16M6.5 7 4 13h5L6.5 7ZM17.5 7 15 13h5l-2.5-6Z" />
      <path d="M4 13a2.5 2.5 0 0 0 5 0M15 13a2.5 2.5 0 0 0 5 0" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 21h18M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M15 9h3a1 1 0 0 1 1 1v11" />
      <path d="M8 8h4M8 12h4M8 16h4" />
    </svg>
  );
}

export function FileXIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14 2.5H7a1.5 1.5 0 0 0-1.5 1.5v16A1.5 1.5 0 0 0 7 21.5h10a1.5 1.5 0 0 0 1.5-1.5V7L14 2.5Z" />
      <path d="M14 2.5V7h4.5M9.5 12l5 5M14.5 12l-5 5" />
    </svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 17.5l9 5 9-5" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6.5 3.5h-2A1.5 1.5 0 0 0 3 5.2C3 13.9 10.1 21 18.8 21a1.5 1.5 0 0 0 1.7-1.5v-2a1.5 1.5 0 0 0-1.2-1.5l-2.6-.5a1.5 1.5 0 0 0-1.4.4l-1 1a13 13 0 0 1-4.7-4.7l1-1a1.5 1.5 0 0 0 .4-1.4L10.5 4.7a1.5 1.5 0 0 0-1.5-1.2h-2.5Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="1.5" />
      <path d="m3 6 9 6.5L21 6" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.5l3.5 2" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20.5 20.5-4.6-4.6" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base(props)} strokeWidth={2}>
      <path d="m5 9 7 7 7-7" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base(props)} strokeWidth={2}>
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 12h17M14 5.5 20.5 12 14 18.5" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)} strokeWidth={2.2}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 2.5 4.5 5.5v6c0 5 3.2 8.6 7.5 10 4.3-1.4 7.5-5 7.5-10v-6L12 2.5Z" />
      <path d="m8.5 11.8 2.5 2.5 4.5-5" />
    </svg>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 4.5h6a2.5 2.5 0 0 1 2.5 2.5v14a2 2 0 0 0-2-2H3.5v-14ZM20.5 4.5h-6A2.5 2.5 0 0 0 12 7v14a2 2 0 0 1 2-2h6.5v-14Z" />
    </svg>
  );
}

export function NewsIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 4.5h13a1.5 1.5 0 0 1 1.5 1.5v13.5H5.5A1.5 1.5 0 0 1 4 18V4.5Z" />
      <path d="M18.5 8H21v9.5a2 2 0 0 1-2 2M7.5 8h7M7.5 11.5h7M7.5 15h4" />
    </svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="2.5" y="7" width="19" height="13" rx="1.5" />
      <path d="M8.5 7V5A1.5 1.5 0 0 1 10 3.5h4A1.5 1.5 0 0 1 15.5 5v2M2.5 12.5h19M10.5 12.5v2h3v-2" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20.5c0-3.4 2.9-5.5 6.5-5.5s6.5 2.1 6.5 5.5" />
      <path d="M16.5 5.2a3.5 3.5 0 0 1 0 6.6M18.5 15.4c1.9.7 3 2.4 3 5.1" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="5" width="17" height="16" rx="1.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </svg>
  );
}

export function DocIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14 2.5H7A1.5 1.5 0 0 0 5.5 4v16A1.5 1.5 0 0 0 7 21.5h10a1.5 1.5 0 0 0 1.5-1.5V7L14 2.5Z" />
      <path d="M14 2.5V7h4.5M8.5 12h7M8.5 15.5h7M8.5 8.5h2.5" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v11M7.5 9.5 12 14l4.5-4.5M4 20.5h16" />
    </svg>
  );
}

export function HeadsetIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 13.5h1.5A1.5 1.5 0 0 1 7 15v3a1.5 1.5 0 0 1-1.5 1.5H5A1 1 0 0 1 4 18.5v-5ZM20 13.5h-1.5A1.5 1.5 0 0 0 17 15v3a1.5 1.5 0 0 0 1.5 1.5H19a1 1 0 0 0 1-1v-5Z" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m3.5 10.5 8.5-7 8.5 7v10a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-10Z" />
      <path d="M9.5 21.5v-7h5v7" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)} strokeWidth={2}>
      <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)} strokeWidth={2}>
      <path d="m5.5 5.5 13 13M18.5 5.5l-13 13" />
    </svg>
  );
}

export function ServiceIcon({ name, ...props }: IconProps & { name: string }) {
  switch (name) {
    case "calculator":
      return <CalculatorIcon {...props} />;
    case "scale":
      return <ScaleIcon {...props} />;
    case "building":
      return <BuildingIcon {...props} />;
    case "fileX":
      return <FileXIcon {...props} />;
    default:
      return <LayersIcon {...props} />;
  }
}
