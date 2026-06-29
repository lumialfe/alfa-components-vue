<template>
  <component :is="tag" :class="classes"><slot /></component>
</template>

<script setup lang="ts">
import type { AlfaTextProps } from "./alfa-text.types";

const props = withDefaults(defineProps<AlfaTextProps>(), {
  tag: "span",
});

const baseClass = "alfa-text";

const classes = [baseClass, { [`${baseClass}--${props.variant}`]: props.variant }];
</script>

<style scoped lang="scss">
.alfa-text {
  font-family: var(--sans);
  color: var(--text-color);
  margin: 0;
  transition: all var(--transitions-duration-md) ease;

  &--overline {
    text-transform: uppercase;
    letter-spacing: 4px;
  }

  &--overline-lg {
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-lg);
  }
}

h1 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-lg);
  color: var(--text-h);
}

h2 {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-lg);
}

h3 {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-lg);
}

h4 {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-lg);
}

h5 {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-lg);
}

h6 {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-lg);
}

p {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-md);
}

span {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-md);
}
</style>
