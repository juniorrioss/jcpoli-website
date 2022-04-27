<template>
  <div>
    <PhotoHeader
      :title="title"
      :description="description"
      :image="background"
      offset="calc((-150/500)*100vw + 67.304015296px)"
    ></PhotoHeader>

    <Main>
      <div class="courses-list">
        <div v-for="(course, index) in coursesList" :key="index">
          <MiniCourse :course="course"></MiniCourse>
          <hr />
        </div>
      </div>
    </Main>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import PhotoHeader from '../components/organization/PhotoHeader.vue'
import Main from '../components/organization/Main.vue'
import MiniCourse from '../components/miniCourse/index.vue'
import { Palestras_Computacao } from '@/storage/programacao/palestras_new'

@Component({
  components: {
    PhotoHeader,
    Main,
    MiniCourse
  }
})
export default class Palestras extends Vue {
  private coursesList: any

  private title = 'Palestras'
  private description = 'Palestras da jornada'
  private background = 'assets/img/slider/6.jpg'

  constructor() {
    super()

    this.coursesList = Palestras_Computacao
  }
}
</script>

<style scoped>
.courses-list > div:not(:first-child) {
  margin-top: 35px;
}
</style>
