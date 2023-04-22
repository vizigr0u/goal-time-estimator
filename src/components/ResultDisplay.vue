<template>
    <div class="result-display">
      <h2>Result</h2>
      <p>Number of Iterations: {{ result.iterations }}</p>
      <p>Time Taken: {{ result.time }}</p>
      <p>Completion Date: {{ result.completionDate }}</p>
    </div>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      result: {
        type: Object,
        required: true,
      },
    },
  });
  </script>

  <style scoped>
  /* Add your styles for ResultDisplay component */
  </style>
