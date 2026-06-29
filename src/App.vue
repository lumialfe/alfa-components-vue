<script setup lang="ts">
import { AlfaButton } from "@/components";
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
</template>

<style lang="scss" scoped>
.alfa-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
