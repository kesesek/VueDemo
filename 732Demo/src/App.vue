<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
import styles from '../src/assets/scss/app.module.scss'

const route = useRoute()
</script>

<template>
  <!-- left bar -->
  <div :class="styles.main_container">
    <div :class="styles.leftbar">
      <h3>Music App</h3>
      <br />
      <div>
        <h4>Discover</h4>
        <ul>
          <RouterLink to="/">
            <li :class="route.path.endsWith('/') ? styles.selected : ''">
              <el-icon :size="20" style="margin-right: 10px"><House /></el-icon>
              <p>Home</p>
            </li>
          </RouterLink>

          <RouterLink to="/browse">
            <li :class="route.path.endsWith('/browse') ? styles.selected : ''">
              <el-icon :size="20" style="margin-right: 10px"><Compass /></el-icon>
              <p>Browse</p>
            </li>
          </RouterLink>

          <RouterLink to="#">
            <li>
              <el-icon :size="20" style="margin-right: 10px"><Headset /></el-icon>
              <p>Radio</p>
            </li>
          </RouterLink>
        </ul>
      </div>

      <br />
      <h4>Library</h4>
      <ul>
        <RouterLink to="#">
          <li>
            <el-icon :size="20" style="margin-right: 10px"><Guide /></el-icon>
            <p>Playlists</p>
          </li>
        </RouterLink>

        <RouterLink to="#">
          <li>
            <el-icon :size="20" style="margin-right: 10px"><VideoPlay /></el-icon>
            <p>Songs</p>
          </li>
        </RouterLink>

        <RouterLink to="#">
          <li>
            <el-icon :size="20" style="margin-right: 10px"><Star /></el-icon>
            <p>Personalized picks</p>
          </li>
        </RouterLink>
      </ul>
    </div>

    <!-- component -->
    <div :class="styles.content">
      <div :class="styles.login_link">
        <div>
          <el-icon :size="20" style="margin-right: 30px"><ArrowLeft /></el-icon>
          <el-icon :size="20"><ArrowRight /></el-icon>
        </div>
        <div>
          <el-icon :size="20" style="margin-right: 30px"><Search /></el-icon>
          <el-icon :size="20"><User /></el-icon>
        </div>
      </div>

      <RouterView />
    </div>
  </div>
</template>
