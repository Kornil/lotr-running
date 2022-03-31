<script setup lang="ts">
import { onBeforeMount, ref, watch } from "vue";

import InputComponent from "./components/InputComponent.vue";
import RouteComponent from "./components/RouteComponent.vue";
import { calculateCurrentMilestone, calculateRoutePercent } from "./utils";

const LOCALSTORAGE_KEY = "progress";
const currentProgress = ref<number>(0);
const milestone = ref<string>(calculateCurrentMilestone(currentProgress.value));
const progressPercent = ref<number>(
  calculateRoutePercent(currentProgress.value)
);

const addProgress = (value: number) => (currentProgress.value += value);
const resetProgress = () => (currentProgress.value = 0);

watch(currentProgress, () => {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentProgress.value));

  milestone.value = calculateCurrentMilestone(currentProgress.value);
  progressPercent.value = calculateRoutePercent(currentProgress.value);
});

onBeforeMount(() => {
  const storedData = localStorage.getItem(LOCALSTORAGE_KEY);

  if (storedData) {
    currentProgress.value = Number(storedData);
  }
});
</script>

<template>
  <header>
    <h1>Lord of the rings journey tracker</h1>
  </header>
  <main>
    <div>
      <InputComponent
        :current-progress="currentProgress"
        :add-progress="addProgress"
      />
    </div>

    <div>
      <RouteComponent
        :milestone="milestone"
        :progress-percent="progressPercent"
      />
    </div>
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  header {
    display: flex;
    place-items: center;
    padding-bottom: 40px;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
