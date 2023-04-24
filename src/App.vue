<template>
  <div class="app">
    <h1>Goal Time Estimator</h1>
    <TaskInput :task="task" />
    <ResultDisplay :task="task" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Task } from './types';
import TaskInput from './components/TaskInput.vue';
import ResultDisplay from './components/ResultDisplay.vue';

export default defineComponent({
  components: {
    TaskInput,
    ResultDisplay,
  },
  setup() {
    const task = ref<Task>({ amount: 1, frequency: 1, frequencyUnit: 'day', goal: 12 });
    return { task };
  },
});
</script>

<style>
.app {
  margin: 1em;
}
</style>
