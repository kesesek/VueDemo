<script setup>
import { RouterLink } from 'vue-router';
import styles from '../assets/scss/homepage.module.scss'

defineProps({
  username: {
    type: String,
    required: true
  }
})

</script>

<template>
    <span :class="styles.login_link">
        <RouterLink to="#">Login</RouterLink>
    </span>
    <div :class="styles.home_content">
        <div :class="styles.popular_albums">
            <h2>Popular albums</h2>
            <RouterLink to="#">Show all</RouterLink>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

        <div :class="styles.popular_artist">
            <h2>Popular artists</h2>
            <RouterLink to="#">Show all</RouterLink>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>