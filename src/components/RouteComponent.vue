<template>
  <div>
    <h2>{{ milestone }}</h2>
    <h3>Journey {{ progressPercent }}% completed</h3>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  milestone: string;
  progressPercent: number;
}>();
</script>
