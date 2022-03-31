<template>
  <div>
    <h2>{{ currentProgress }} Km</h2>
    <div class="input-container">
      <div>
        <input type="number" min="0" :value="inputValue" />
        <button class="input-btn add" @click="increaseInputValue">+</button>
        <button class="input-btn remove" @click="decreaseInputValue">-</button>
      </div>
      <div class="button-container">
        <button @click="handleAddProgress">Add</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  currentProgress: number;
  addProgress: (value: number) => void;
}>();

const inputValue = ref<number>(0);

const increaseInputValue = () => inputValue.value++;
const decreaseInputValue = () =>
  inputValue.value > 0 ? inputValue.value-- : inputValue.value;

const handleAddProgress = () => {
  props.addProgress(inputValue.value);

  inputValue.value = 0;
};
</script>

<style scoped>
.input-container {
  margin-top: 16px;
  display: flex;
}

.input-container input[type="number"]::-webkit-inner-spin-button,
.input-container input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.input-container input[type="number"] {
  -moz-appearance: textfield;
}

.input-container input {
  width: 60px;
  height: 40px;
  padding-left: 16px;
  border: 1px solid #333;
}

.input-container input:focus {
  outline: 0;
}

button {
  cursor: pointer;
  margin: 0;
  padding: 0;
  border: 0;
  color: #333;
  border: 1px solid #333;
  background: #888;
  padding: 8px;
}

.button-container {
  margin-left: 16px;
}

.button-container button {
  padding: 10px;
}

.input-container .input-btn {
  position: relative;
  border: none;
  border-left: 1px solid #333;
  padding: 0;
  width: 20px;
  height: 20px;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}

button:active {
  background-color: #eee;
}

.input-btn.add {
  position: absolute;
  height: 50%;
  top: 0;
}

.input-btn.remove {
  position: absolute;
  bottom: 0;
  height: 50%;
}
</style>
