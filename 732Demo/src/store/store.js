/* 
`reactive` is a function imported from Vue's composition API 
that is used to create a reactive data object. 
When you wrap an object with reactive, Vue tracks changes to its
 properties and ensures that any component that uses these 
 properties as dependencies will reactively update whenever 
 the properties change.
*/ 

import { reactive } from 'vue'

export const store = reactive({
  isUserLogin: false,
  isModalOpen: false,
  username: ''
})
