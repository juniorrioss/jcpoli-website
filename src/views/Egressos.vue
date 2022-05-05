<template>
  <div class="obs-page view">
    <PhotoHeader
      title="Encontro de Egressos Ciência da Computação"
      image="/assets/img/puc_sub.jpeg"
      description=""
    ></PhotoHeader>
    <div id="grid">
      <img src="/assets/img/egressos/1.jpeg" />
      <img src="/assets/img/egressos/2.jpeg" />
      <img src="/assets/img/egressos/3.jpeg" />
      <img src="/assets/img/egressos/4.jpeg" />
      <img src="/assets/img/egressos/5.jpeg" />
      <img src="/assets/img/egressos/6.jpeg" />
      <img src="/assets/img/egressos/7.jpeg" />
      <img src="/assets/img/egressos/8.jpeg" />
      <img src="/assets/img/egressos/9.jpeg" />
    </div>
    <Main>
      <Paragraph title="Encontro de Egressos">
        Encontro de Egressos Ciência da Computação Para comemorar os 30 anos do
        curso de Ciência da Computação da PUC Goiás não há nada melhor do que
        relembrar o passado. No dia 14/05/2022 de 9:00 as 11:00 no hall entre os
        auditórios 2 e 3 da área II estaremos esperando você que fez a história
        do curso. Teremos uma exposição de fotos e muitas estórias para contar e
        relembrar. Caso tenha alguma foto que queira enviar para fazer parte de
        nosso “photo booking” envie para cecilia@pucgoias.edu.br com uma breve
        descrição da mesma. Vamos escrever nosso livro de memórias, e você faz
        parte dele. Esperamos você para nos contar a sua participação na
        conquista desses 30 anos de sucesso. Espero vocês!!! Carmen Cecilia –
        egressa do curso de Ciência da Computação.
      </Paragraph>
    </Main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PhotoHeader from "@/components/organization/PhotoHeader.vue";
import Main from "@/components/organization/Main.vue";
import Paragraph from "@/components/organization/Paragraph.vue";
import HorizontalList from "@/components/organization/HorizontalList.vue";
import Speakers from "@/components/organization/Speakers.vue";
import Columns from "@/components/organization/Columns.vue";
import Organization from "@/components/organization/Names.vue";
//import Supporters from '@/components/organization/Supporters.vue'
//import { speakers_list } from '@/storage/programacao/speakers'

@Component({
  components: {
    PhotoHeader,
    Main,
    HorizontalList,
    Paragraph,
    Speakers,
    Columns,
    Organization,
    //Supporters
  },
})
export default class Escola extends Vue {
  private speakers: any = null;

  constructor() {
    super();
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

#grid {
  display: grid;
  grid: flex;
  grid-template-columns: reapeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(250px, auto);
  grid-auto-flow: column dense;
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  margin: 20px 0 0 0;
}

#grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
