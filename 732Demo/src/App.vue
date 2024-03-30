<script setup>
import { RouterView } from 'vue-router'
import styles from '../src/assets/scss/app.module.scss';
</script>

<template>
    <!-- left bar -->
    <!-- 
      When using CSS Modules in Vue, use `v-bind:class` or `:class`
      to dynamically bind HTML attributes to expressions.
    -->
    <div :class="styles.main_container">

      <div :class="styles.leftbar">
        <h3>Music App</h3>
        <br>
        <div>
          <h4>Discover</h4>
          <ul>
            <li>Home</li>
            <li>Browse</li>
            <li>Radio</li>
          </ul>
        </div>

        <br>
        <h4>Library</h4>
        <ul>
          <li>Playlists</li>
          <li>Songs</li>
          <li>Personalized picks</li>
        </ul>
      </div>

    <!-- component -->
    <div :class="styles.content">
      <RouterView />
    </div>

  </div>

</template>