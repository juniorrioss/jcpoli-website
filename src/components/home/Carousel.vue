<template>
  <v-layout row wrap class="jcecec-slider">
    <v-flex xs12>
      <v-carousel hide-controls hide-delimiters height="900">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          hide-controls
        >
          <v-container fill-height>
            <v-layout align-center fill-height justify-center>
              <div class="banner">
                <!--<img src="assets/img/logo-clean.webp" class="logo" />
                <img src="assets/img/logo-clean.webp" class="logo back" />
                <img src="assets/img/logo.png" class="logo-opacity" />-->

                <div>
                  <span class="date">09 a 11 de Maio</span>
                </div>
                <hr />
                <div>
                  <span class="jcecec">I JCPOLI</span>
                </div>
                <div>
                  <span class="jcecec-sub">
                    Jornada Científica da Escola Politécnica
                  </span>
                </div>
                <hr />
                <div>
                  <span id="description">
                    CULTURA, INOVAÇÃO e EMPREENDEDORISMO
                  </span>
                </div>
              </div>
            </v-layout>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Carousel extends Vue {
  private items: any

  constructor() {
    super()

    this.items = [
      {
        src: '/assets/img/slider/3.jpeg'
      },
      {
        src: '/assets/img/slider/4.jpg'
      }
      // {
      //   src: "/assets/img/slider/1.jpg"
      // }
    ]
  }
}
</script>

<style scoped>
.banner {
  background-color: #2364adc4;
  color: #fff;
}

.logo-opacity {
  opacity: 30%;
  height: 10rem;
}

@media screen and (max-width: 576px) {
  .banner {
    padding: 30px 5px;
  }
}

.banner span {
  text-align: center;
}

#description {
  letter-spacing: 3px;
}

.jcecec {
  text-transform: uppercase;
  font-size: 5em;
  font-weight: 300;
}

.jcecec-sub {
  font-size: 0.9em;
}

#logo {
  width: 10%;
  height: 10%;
}

.banner {
  position: relative;
  padding: 3rem 6rem;
}

hr {
  border: 1px solid #fff;
}

@media only screen and (max-width: 760px) {
  .jcecec-slider {
    display: none;
  }
}
</style>
