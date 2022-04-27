<template>
  <div>
    <PhotoHeader
      :title="title"
      :description="description"
      :image="background"
      offset="calc((-100/523)*100vw + 67.304015296px)"
    ></PhotoHeader>

    <Main>
      <div class="courses-list">
        <div v-for="(props, index) in coursesList" :key="index">
          <h3 class="section-course">{{ props.curso }}</h3>
          <div v-for="(course, index) in props.minicurso" :key="index">
            <MiniCourse :course="course"></MiniCourse>
            <hr />
          </div>
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
import { miniCourses_Section } from '@/models/miniCourses'

@Component({
  components: {
    PhotoHeader,
    Main,
    MiniCourse
  }
})
export default class MiniCourses extends Vue {
  private coursesList: any

  private title = 'Minicursos'
  private description = 'Minicursos da jornada'
  private background = 'assets/img/lab.jpg'

  constructor() {
    super()

    this.coursesList = miniCourses_Section
  }
}
</script>

<style scoped>
.courses-list > div:not(:first-child) {
  margin-top: 35px;
}

.section-course {
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  background-color: whitesmoke;
  box-shadow: 0 0.46875rem 2.1875rem rgba(0, 0, 0, 0.03),
    0 0.9375rem 1.40625rem rgba(0, 0, 0, 0.03),
    0 0.25rem 0.53125rem rgba(0, 0, 0, 0.05),
    0 0.125rem 0.1875rem rgba(0, 0, 0, 0.03);
  padding: 1rem;
}
</style>
