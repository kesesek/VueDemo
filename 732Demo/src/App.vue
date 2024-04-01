<script setup>
import { RouterView } from 'vue-router'
import styles from '../src/assets/scss/app.module.scss';
</script>

<template>
    <!-- left bar -->
    <div :class="styles.main_container">

      <div :class="styles.leftbar">
        <h3>Music App</h3>
        <br>
        <div>
          <h4>Discover</h4>
          <ul>
            <li>
              <el-icon :size="20" style="margin-right: 10px"><House /></el-icon>
              <p>Home</p>
            </li>
            <li>
              <el-icon :size="20" style="margin-right: 10px"><Compass /></el-icon>
              <p>Browse</p>
            </li>
            <li>
              <el-icon :size="20" style="margin-right: 10px"><Headset /></el-icon>
              <p>Radio</p>
            </li>
          </ul>
        </div>

        <br>
        <h4>Library</h4>
        <ul>
          <li>
            <el-icon :size="20" style="margin-right: 10px"><Guide /></el-icon>
            <p>Playlists</p>
          </li>
          <li>
            <el-icon :size="20" style="margin-right: 10px"><VideoPlay /></el-icon>
            <p>Songs</p>
          </li>
          <li>
            <el-icon :size="20" style="margin-right: 10px"><Star /></el-icon>
            <p>
              Personalized picks
            </p>
          </li>
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
            <el-icon :size="20"><User/></el-icon>

        </div>
      </div>

      <RouterView />
    </div>

  </div>

</template>