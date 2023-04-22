<template>
    <div class="task-input">
      <h2>Task</h2>
      <label>
        Name:
        <input type="text" v-model="task.name" @input="emitUpdate" />
      </label>
      <label>
        Goal Quantity:
        <input type="number" v-model.number="task.goal" @input="emitUpdate" />
      </label>
    </div>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    data() {
      return {
        task: {
          name: '',
          goal: 0,
        },
      };
    },
    methods: {
      emitUpdate() {
        this.$emit('update-task', this.task);
      },
    },
  });
  </script>

  <style scoped>
  /* Add your styles for TaskInput component */
  </style>
