<script setup>
import { ref } from 'vue'
import { store } from '../store/store'
import styles from '../assets/scss/loginmodal.module.scss'
const input = ref('')

function login() {
  store.isUserLogin = true;
  store.username = input.value;
  store.isModalOpen = false;
  localStorage.setItem('username', store.username);
}

function logout() {
  store.isUserLogin = false;
  store.username = '';
  store.isModalOpen = false;
  localStorage.removeItem('username');
}

function close() {
  store.isModalOpen = false;
  input.value = '';
}
</script>

<template>
    <Teleport to="body">
      <div v-if="store.isModalOpen" :class="styles.mask" @click="close"></div>
      <div v-if="store.isModalOpen" :class="styles.modal_container">
          <a @click="close">
              <el-icon :size="20"><Close /></el-icon>
          </a>
          <div v-if="!store.isUserLogin" :class="styles.modal_content">
              <h1>Login</h1>
              <div>
                <el-input
                  v-model="input"
                  style="width: 240px"
                  placeholder="Please input"
                  maxlength="8"
                />
                <el-button style="width: 167.5px" @click="login">Login</el-button>
              </div>
          </div>
          <div v-else :class="styles.modal_content">
              <h1>Welcome back!</h1>
              <div>
                <h3>{{ store.username }}</h3>
                <el-button style="width: 167.5px" @click="logout">Logout</el-button>
              </div>
          </div>
      </div>
    </Teleport>
</template>