<template>
  <div class="obs-page view">
    <PhotoHeader
      title="Escola"
      image="/assets/img/puc_sub.jpeg"
      description="Histórico da Escola Politécnica"
    ></PhotoHeader>

    <Main>
      <Paragraph title="Histórico">
        Histórico do evento descrito aqui
      </Paragraph>

      <Paragraph title="Tema da I JCPOLI">
        A IV JCECEC e I Jornada Científica Regional (JCR) será realizada de 9 a
        11 de Maio de 2022. A I JCPOLI será a
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX. Nessa edição conta-se
        com a participação do XXXXXXXXXXXXXXXXXXXXXX.
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      </Paragraph>
    </Main>

    <Organization />
    <Main>
      <Paragraph title="palestrantes">
        <Speakers :speakers="speakers" :paginate="2" />
      </Paragraph>

      <!--<Supporters /> -->
    </Main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PhotoHeader from '@/components/organization/PhotoHeader.vue'
import Main from '@/components/organization/Main.vue'
import Paragraph from '@/components/organization/Paragraph.vue'
import HorizontalList from '@/components/organization/HorizontalList.vue'
import Speakers from '@/components/organization/Speakers.vue'
import Columns from '@/components/organization/Columns.vue'
import Organization from '@/components/organization/Names.vue'
import Supporters from '@/components/organization/Supporters.vue'
import { speakers_list } from '@/storage/programacao/speakers'

@Component({
  components: {
    PhotoHeader,
    Main,
    HorizontalList,
    Paragraph,
    Speakers,
    Columns,
    Organization,
    Supporters
  }
})
export default class Escola extends Vue {
  private speakers: any = null

  constructor() {
    super()
    this.speakers = speakers_list
  }
}
</script>

<style scoped></style>
