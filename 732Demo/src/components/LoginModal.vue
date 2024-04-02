<script setup>
import { ref } from 'vue'
import { store } from '../store/store'
import styles from '../assets/scss/loginmodal.module.scss'
const input = ref('')

function login() {
  store.isUserLogin = true;
  store.username = input.value;
  store.isModalOpen = false;
}

function logout() {
  store.isUserLogin = false;
  store.username = '';
  store.isModalOpen = false;
}

function close() {
  store.isModalOpen = false;
  input.value = '';
}
</script>

<template>
    <Teleport to="body">
      <div v-if="store.isModalOpen" :class="styles.mask"></div>
      <div v-if="store.isModalOpen" :class="styles.modal_container">
          <a @click="close">
              <el-icon><Close /></el-icon>
          </a>
          <div v-if="!store.isUserLogin" >
              <h1>Login</h1>
              <el-input v-model="input" style="width: 240px" placeholder="Please input" />
              <el-button round @click="login">Login</el-button>
          </div>
          <div v-else>
              <h1>Welcome back!</h1>
              <p>{{ store.username }}</p>
              <el-button round @click="logout">Logout</el-button>
          </div>
      </div>
    </Teleport>
</template>