<template>
  <div>
    <Main> TESTE </Main>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import PhotoHeader from '../components/organization/PhotoHeader.vue'
import Main from '../components/organization/Main.vue'
import MiniCourse from '../components/miniCourse/index.vue'

@Component({
  components: {
    Main
  }
})
export default class Exposicoes extends Vue {
  constructor() {
    super()
  }
}
</script>

<style scoped></style>
