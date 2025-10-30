import Link from "next/link";

interface ButtonProps {
  link: string;
  label: string;
  wFull: boolean;
  variant?: "mobile" | "desktop";
}

export function Button({ link, label, wFull, variant }: ButtonProps) {
  const baseStyle = ` ${
    wFull ? "w-full" : "w-[197px]"
  }  flex py-3 px-4 bg-neutral-900 items-center justify-center rounded-[10px] textpresent-5 text-neutral-0 transition-all duration-300 ease-in-out hover:bg-neutral-800 `;

  return (
    <Link
      href={link}
      className={`
                ${baseStyle}
                ${variant === "mobile" ? "flex xl:hidden" : ""}
                ${variant === "desktop" ? "hidden xl:flex " : ""}
            `}
    >
      {" "}
      {label}{" "}
    </Link>
  );
}
