<script setup>
import { RouterLink } from 'vue-router';
import styles from '../assets/scss/homepage.module.scss';
import { albums, artists } from '../../public/dummyData';

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

            <!--use v-for and v-bind to iterate dummy data and show all items.  
                `v-bind` can be simplified as `:` to tell Vue that this is
                 a property that needs to be bound to a JavaScript expression, 
                 rather than a normal static property.
            -->
            <ul>
                <li v-for="(album, index) in albums" v-bind:key="index">
                    <img :src="album.imgSrc">
                    {{ album.name }}
                </li>
            </ul>
        </div>

        <div :class="styles.popular_artist">
            <h2>Popular artists</h2>
            <RouterLink to="#">Show all</RouterLink>
            <ul>
                <li v-for="(artist, index) in artists" :key="index">
                    <img :src="artist.imgSrc">
                    {{ artist.name }}
                </li>
            </ul>
        </div>
    </div>
</template>