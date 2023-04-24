<template>
  <div class="task-input">
    <label class="goal">
      Your Goal:
      <input type="number" v-model.number="task.goal" @input="emitUpdate" min="0" step="0.01" required />
    </label>
    <div class="">
      <label>
        You do
        <input type="number" v-model.number="task.amount" @input="emitUpdate" min="0" step="0.01" required />
      </label>
      <label>
        Every
        <input type="number" v-model.number="task.frequency" @input="emitUpdate" min="0" step="0.01" required />
        <select v-model="task.frequencyUnit" @change="emitUpdate">
          <option v-for="unit in frequencies" :value="unit" :key="unit">{{ unit }}</option>
        </select>
      </label>
    </div>
    <p v-if="validationError" class="error">{{ validationError }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue';
import { Task } from '../types';

export default defineComponent({
  props: {
    task: {
      type: Object as () => Task,
      required: true,
    },
  },
  data() {
    return {
      validationError: ''
    };
  },
  computed: {

  },
  methods: {
    emitUpdate() {
      if (this.task.goal <= 0) {
        this.validationError = 'Goal must be a positive numbers.';
      } else if (this.task.amount <= 0) {
        this.validationError = 'Amount must be positive numbers.';
      } else if (this.task.frequency <= 0) {
        this.validationError = 'Frequency must be positive numbers.';
      } else {
        this.validationError = '';
        this.$emit('update-task', this.task);
      }
    },
  },
  setup(props) {
    const amount = toRef(props.task, 'amount');
    const frequency = toRef(props.task, 'frequency');
    const frequencyUnit = toRef(props.task, 'frequencyUnit');
    const goal = toRef(props.task, 'goal');
    const frequencies = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];

    return {
      amount,
      frequency,
      frequencyUnit,
      goal,
      frequencies,
    };
  },
});
</script>

<style scoped>
.task-input {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.goal {
  display: block;
}

.error {
  color: red;
}
</style>
