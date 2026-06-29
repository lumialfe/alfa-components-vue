export type Variant = "cta" | "primary" | "secondary" | "ghost";

export type Size = "sm" | "md" | "lg";

export interface AlfaButtonProps {
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
}
