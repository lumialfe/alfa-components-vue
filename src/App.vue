<script setup lang="ts">
import { AlfaButton, AlfaText } from "@/components";
</script>

<template>
  <div class="alfa-grid">
    <AlfaButton variant="cta" size="sm">Shop Now</AlfaButton>
    <AlfaButton variant="cta" size="md">Shop Now</AlfaButton>
    <AlfaButton variant="cta" size="lg">Shop Now</AlfaButton>
    <AlfaButton variant="primary" size="sm">Accept</AlfaButton>
    <AlfaButton variant="primary" size="md">Accept</AlfaButton>
    <AlfaButton variant="primary" size="lg">Accept</AlfaButton>
    <AlfaButton variant="secondary" size="sm">Cancel</AlfaButton>
    <AlfaButton variant="secondary" size="md">Cancel</AlfaButton>
    <AlfaButton variant="secondary" size="lg">Cancel</AlfaButton>
    <AlfaButton variant="ghost" size="sm">Button</AlfaButton>
    <AlfaButton variant="ghost" size="md">Button</AlfaButton>
    <AlfaButton variant="ghost" size="lg">Button</AlfaButton>
  </div>
  <div class="alfa-grid">
    <AlfaText tag="h1">Hello World</AlfaText>
    <AlfaText tag="h2">Hello World</AlfaText>
    <AlfaText tag="h3">Hello World</AlfaText>
    <AlfaText tag="h4">Hello World</AlfaText>
    <AlfaText tag="h5">Hello World</AlfaText>
    <AlfaText tag="h6">Hello World</AlfaText>
    <AlfaText tag="p">Hello World</AlfaText>
    <AlfaText tag="span">Hello World</AlfaText>
    <AlfaText variant="overline">Hello World</AlfaText>
    <AlfaText variant="overline-lg">Hello World</AlfaText>
  </div>
</template>

<style lang="scss" scoped>
.alfa-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
