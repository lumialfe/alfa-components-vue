import type { Size } from "@/components/component.types";

export type Variant = "cta" | "primary" | "secondary" | "ghost";

export interface AlfaButtonProps {
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
}
