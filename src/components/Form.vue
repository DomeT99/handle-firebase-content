<script setup lang="ts">
// @ts-nocheck
import { type Option } from "@/utils/types";

const props = defineProps();
</script>
<template>
  <form>
    <div v-for="(field, index) in props" :key="index">
      <label :for="field.name">{{ field.label }}</label>
      <div class="input-field">
        <input
          v-if="field.type === 'text' || field.type === 'number'"
          :name="field.name"
          :type="field.type"
          :id="field.name"
        />
        <select v-else :name="field.name" :id="field.name">
          <option
            v-for="(option, optIndex) in field.options"
            :key="optIndex"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </div>
    </div>
    <div class="input-row">
      <button type="submit">Submit</button>
    </div>
  </form>
</template>
