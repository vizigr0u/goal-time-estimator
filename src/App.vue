<template>
  <div id="app">
    <h1>Goal Time Estimator</h1>
    <TaskInput @update-task="updateTask" />
    <ComponentInput @update-component="updateComponent" />
    <ResultDisplay :result="result" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskInput from './components/TaskInput.vue';
import ComponentInput from './components/ComponentInput.vue';
import ResultDisplay from './components/ResultDisplay.vue';

export default defineComponent({
  components: {
    TaskInput,
    ComponentInput,
    ResultDisplay,
  },
  data() {
    return {
      task: {
        name: '',
        goal: 0,
      },
      component: {
        amount: 0,
        frequency: 0,
      },
      result: {},
    };
  },
  methods: {
    updateTask(task) {
      this.task = task;
      this.calculateResult();
    },
    updateComponent(component) {
      this.component = component;
      this.calculateResult();
    },
    calculateResult() {
      // Implement your calculation logic here
    },
  },
});
</script>

<style>
/* Add your global styles here */
</style>
