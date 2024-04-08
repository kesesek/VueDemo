<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { store } from './store/store'
import LoginModal from './components/LoginModal.vue'
import styles from '../src/assets/scss/app.module.scss'

/*
useRoute() returns the current route location.
useRouter returns the router instance.
*/
const route = useRoute()
const router = useRouter()

onMounted(() => {
  const username = localStorage.getItem('username')
  if (username) {
    store.isUserLogin = true
    store.username = username
  }
})

function goBack() {
  router.go(-1)
}

function goFoward() {
  router.go(1)
}
</script>

<template>
  <div :class="styles.main_container">
    <!-- left bar -->
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

          <RouterLink to="/radio">
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
        <RouterLink to="/playlists">
          <li>
            <el-icon :size="20" style="margin-right: 10px"><Guide /></el-icon>
            <p>Playlists</p>
          </li>
        </RouterLink>

        <RouterLink to="/songs">
          <li>
            <el-icon :size="20" style="margin-right: 10px"><VideoPlay /></el-icon>
            <p>Songs</p>
          </li>
        </RouterLink>

        <RouterLink to="/personalized_picks">
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
          <el-icon :size="20" style="margin-right: 30px; cursor: pointer" @click="goBack">
            <ArrowLeft />
          </el-icon>
          <el-icon :size="20" style="cursor: pointer" @click="goFoward">
            <ArrowRight />
          </el-icon>
        </div>
        <div v-if="store.username" style="font-weight: bold; font-size: 25px">
          Hello, {{ store.username }}
        </div>
        <div>
          <el-icon :size="20" style="margin-right: 30px"><Search /></el-icon>
          <a @click="store.isModalOpen = true">
            <el-icon :size="20"><User /></el-icon>
          </a>
          <LoginModal />
        </div>
      </div>

      <RouterView />
    </div>
  </div>
</template>
