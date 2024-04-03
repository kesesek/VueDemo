<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const lastSegment = computed(() => {
  const segments = route.path.split('/').filter(Boolean)
  return segments.length > 0 ? segments[segments.length - 1] : ''
})
</script>

<template>
  <div>This is {{ lastSegment }} page.</div>
</template>
