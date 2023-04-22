<template>
    <div class="component-input">
      <h2>Component</h2>
      <label>
        Amount:
        <input type="number" v-model.number="component.amount" @input="emitUpdate" />
      </label>
      <label>
        Frequency:
        <input type="number" v-model.number="component.frequency" @input="emitUpdate" />
      </label>
    </div>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    data() {
      return {
        component: {
          amount: 0,
          frequency: 0,
        },
      };
    },
    methods: {
      emitUpdate() {
        this.$emit('update-component', this.component);
      },
    },
  });
  </script>

  <style scoped>
  /* Add your styles for ComponentInput component */
  </style>
