<template>
  <div class="home-view-container">
    <div class="home-view-container__component-block">
      <citizens></citizens>
    </div>
  </div>
</template>

<script setup lang="ts">
import HelloLerna from '@/components/HelloLerna.vue';
import Citizens from '@/components/Citizens.vue';
</script>

<style lang="scss">
.home-view-container {
  max-width: 960px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__component-block {
    max-width: inherit / 2;
    height: 720px;
    margin: auto;
  }
}
</style>
