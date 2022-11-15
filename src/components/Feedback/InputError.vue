<template>
    <div v-show="errors">
        <p class="text-sm mx-3 my-2 text-red-600">
            {{ errors }}
        </p>
    </div>
</template>

<script setup>
    defineProps(['errors']);
</script> 