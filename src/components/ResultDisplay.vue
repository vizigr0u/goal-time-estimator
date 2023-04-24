<template>
  <div class="result">
    <p>
      You need to repeat your task {{ numberOfIterations }} times.
    </p>
    <p>
      If you started now, you would be done {{ relativeTime }}, on {{ completionDate.toLocaleString() }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Task } from '../types';
import { GetRelativeTimeString, GetSecondsForUnit } from '../timeUtils';

export default defineComponent({
  name: 'ResultDisplay',
  props: {
    task: {
      type: Object as () => Task,
      required: true,
    },
  },
  computed: {
    numberOfIterations(): number {
      const { goal, amount } = this.task;
      const amountPerIteration = amount;
      return amountPerIteration <= 0 ? 1 : Math.ceil(goal / amountPerIteration);
    },
    timeTakenSeconds(): number {
      return (this.numberOfIterations - 1) * this.task.frequency * GetSecondsForUnit(this.task.frequencyUnit);
    },
    completionDate(): Date {
      const now = new Date();
      return new Date(now.getTime() + this.timeTakenSeconds * 1000);
    },
    relativeTime(): string {
      return GetRelativeTimeString(this.completionDate);
    }
  }
});
</script>
