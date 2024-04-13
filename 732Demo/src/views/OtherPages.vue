<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

// `useRoute` is used to access the route object in components. 
const route = useRoute()
// `computed` creates a reactive computed property. 
// Here we compute the last segment of the current route path:
const lastSegment = computed(() => {
  const segments = route.path.split('/').filter(Boolean)
  return segments.length > 0 ? segments[segments.length - 1] : ''
})
</script>

<template>
  <div>This is {{ lastSegment }} page.</div>
</template>
