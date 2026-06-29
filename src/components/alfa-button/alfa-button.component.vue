<template>
  <button :class="classes"><slot /></button>
</template>

<script setup lang="ts">
import type { AlfaButtonProps } from "./alfa-button.types";

const props = withDefaults(defineProps<AlfaButtonProps>(), {
  variant: "cta",
  size: "md",
});

const baseClass = "alfa-button";

const classes = [baseClass, `${baseClass}--${props.variant}`, `${baseClass}--${props.size}`];
</script>
<style scoped lang="scss">
.alfa-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: fit-content;
  height: fit-content;
  box-sizing: border-box;
  transition: all var(--transitions-duration-md) ease;

  &:hover {
    cursor: pointer;
  }

  &--primary {
    background-color: var(--accent-background-color);
    color: var(--accent-color);

    &:hover {
      background-color: var(--accent-color);
      color: var(--on-accent-color);
    }
  }

  &--cta {
    border-radius: 1000px !important;
    color: var(--on-accent-color);
    background-color: var(--accent-color);

    &:hover {
      background-color: var(--accent-dark-color);
    }
  }

  &--secondary,
  &--ghost {
    &:hover {
      background-color: var(--accent-background-color);
    }
  }

  &--secondary {
    background: transparent;
    border: 1px solid var(--accent-color);
    color: var(--text);
  }

  &--ghost {
    color: var(--accent-color);
    background: transparent;
  }

  &--sm {
    padding: 4px 8px;
    border-radius: 4px;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-normal);
  }

  &--md {
    padding: 6px 14px;
    border-radius: 6px;
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
  }

  &--lg {
    padding: 8px 24px;
    border-radius: 8px;
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-normal);
  }
}
</style>
