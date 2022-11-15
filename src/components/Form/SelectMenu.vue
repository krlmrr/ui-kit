<template>
  <div class='m-2'>
    <div class="flex justify-between">
      <Label :for="label">
        {{ label }}
      </Label>

      <Label
          class="text-sm text-gray-400"
          v-if="required"
      >
        Required
      </Label>
    </div>

    <select
        :id='label'
        :name='label'
        class='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300
      focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md'
        v-model='selectedOption'
    >
      <option></option>

      <option
        v-for='option in options'
        :value='option'
      >
        {{ option.name }}

        {{ option.first_name }}
        {{ option.last_name }}
      </option>
    </select>
    
    <InputError :errors="errors" />
  
  </div>
  

</template>

<script setup lang="ts">
import {computed} from 'vue'
import Label from '@/components/Form/Label.vue'
import InputError from '@/components/Feedback/InputError.vue'

const props = defineProps({
  label: String,
  errors: String,
  required: Boolean,
  options: Array,
  modelValue: Object
})

const emit = defineEmits(['update:modelValue'])

const selectedOption = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

</script>
