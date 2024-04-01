<script setup>
import { RouterLink } from 'vue-router';
import { albums, artists } from '../../public/dummyData.js';
import styles from '../assets/scss/homepage.module.scss';

defineProps({
  username: {
    type: String,
    required: true
  }
})

</script>

<template>
    <div :class="styles.home_content">
        <div :class="styles.popular_albums">
            <div :class="styles.content_title">
                <h2>Popular albums</h2>
                <RouterLink to="#">Show all</RouterLink>
            </div>

            <!--use v-for and v-bind to iterate dummy data and show all items.  
                `v-bind` can be simplified as `:`. It is used to tell Vue that this is
                 a property that needs to be bound to a JavaScript expression, 
                 rather than a normal static property.
            -->
            <ul>
                <li v-for="(album, index) in albums" v-bind:key="index">
                    <img :src="album.imgSrc">
                    <p>{{ album.name }}</p>
                    <p>{{ album.artist }}</p>
                </li>
            </ul>
        </div>

        <div :class="styles.popular_artists">
            <div :class="styles.content_title">
                <h2>Popular artists</h2>
                <RouterLink to="#">Show all</RouterLink>
            </div>
            <ul>
                <li v-for="(artist, index) in artists" :key="index">
                    <img :src="artist.imgSrc">
                    <p>{{ artist.name }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>