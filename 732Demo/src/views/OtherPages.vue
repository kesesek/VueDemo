<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue';
const route = useRoute();
const lastSegment = computed(() => {
  const segments = route.path.split('/').filter(Boolean); // 分割路径并移除空字符串
  return segments.length > 0 ? segments[segments.length - 1] : '';
});
</script>

<template>
    <div>
        This is {{ lastSegment }} page.
    </div>
</template>