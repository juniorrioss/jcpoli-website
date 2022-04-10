<template>
  <div id="container-sobre">
    <v-layout p-3 row wrap>
      <v-flex xs12 class="text-xs-left" mt-5>
        <h2>I Jornada Científica da Escola Politécnica</h2>
      </v-flex>
      <v-flex id="sobre" xs12 class="text-xs-left" mt-3>
        <p>
          Temos o prazer de anunciar a realização da I
          Jornada Científica da Escola Politécnica (JCPOLI) da Pontifícia Universidade Católica de Goiás
          (PUC Goiás) 9 a 11 de Maio de 2022. A I JCPOLI 
          será XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX Ainda da tempo de submeter o seu trabalho
          online em http://ecec.pucgoias.edu.br. Os melhores
          trabalhos da I JCPOLI serão convidados para publicação na revista da Escola Politécnica.
        </p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {}
</script>

<style>
#container-sobre {
  max-width: 1000px !important;
  padding: 0 24px;
  margin: auto;
}
#container-sobre h2 {
  color: #2776f5;
}

@media screen and (max-width: 576px) {
  #sobre p {
    font-size: 18px !important;
  }
}
</style>


