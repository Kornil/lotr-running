<template>
  <div>
    <h2 id="milestone">{{ milestone }}</h2>
    <h3 id="progressPercent">Journey {{ progressPercent }}% completed</h3>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  milestone: string;
  progressPercent: number;
}>();
</script>
