import { WEBSITE } from "@/constants";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Logo = ({ className }: Props) => {
  return <img className={cn("w-8", className)} src="/logo.svg" alt={WEBSITE} />;
};
