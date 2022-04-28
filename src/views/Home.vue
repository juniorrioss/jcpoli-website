<template>
  <v-app class="home" id="inspire">
    <Carousel />

    <About />

    <Dates />

    <v-layout row wrap>
      <v-flex xs12 sm12>
        <v-parallax
          dark
          src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
          <v-layout id="whenwhere">
            <div>
              <!-- <v-flex> -->
              <div class="icontitle">
                <i class="fas fa-clock"></i>
                <h5>QUANDO</h5>
              </div>
              <span id="quando">
                De 09 a 11 de
                <br />maio de 2022
              </span>
              <!-- </v-flex> -->
              <!-- <v-flex> -->
              <div class="icontitle">
                <i class="fas fa-map-marked"></i>
                <h5>ONDE</h5>
              </div>
              <div>
                <v-flex class="onde"
                  >Escola de Ciências Exatas e da Computação</v-flex
                >
                <v-flex class="onde"
                  >Pontifícia Universidade Católica de Goiás</v-flex
                >
              </div>
              <span id="onde-endereco">
                Av, 1ª Avenida, 458-590 - Setor Leste Universitário,
                <br />Goiânia - GO, 74605-020
              </span>
              <!-- </v-flex> -->
            </div>
          </v-layout>
        </v-parallax>
      </v-flex>
    </v-layout>

    <Main>
      <Speakers :speakers="speakersList" :paginate="1" />

      <!-- <Supporters /> -->
    </Main>

    <div mt-5 mb-5 id="inscricoes" class="footer-subscription">
      <div>
        <v-container>
          <v-layout class="call">
            <v-flex>
              <p>INSCREVA-SE JÁ</p>
            </v-flex>
          </v-layout>
          <v-layout class="subcall text-left">
            <v-flex>
              <p class="text-justify">
                A I JCPOLI será realizada de 9 a 11 de Maio de 2022, com tema:
                Cultura, Inovação e Empreendedorismo.
              </p>
            </v-flex>
          </v-layout>

          <v-layout row wrap class="button-actions">
            <!--
            <v-flex offset-md3 xs12 md3>
              <v-btn @click="goToSubscription" color="primary" large>Faça sua inscrição</v-btn>
            </v-flex>
          -->
            <v-flex>
              <v-btn
                @click="goToSubmission"
                large
                class="btn-submission"
                color="primary"
                >Submeta seu artigo</v-btn
              >
            </v-flex>
          </v-layout>
          <v-layout class="line rights-reserved">
            <v-flex>
              <hr />
              <p>
                &copy; 1º Jornada Científica da Escola Politécnica - JCPOLI 2022
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import Carousel from "@/components/home/Carousel.vue";
import Speakers from "@/components/organization/Speakers.vue";
import About from "@/components/home/About.vue";
import Robot from "@/components/home/Robot.vue";
import Main from "@/components/organization/Main.vue";
import Paragraph from "@/components/organization/Paragraph.vue";
import Dates from "@/components/home/Dates.vue";
//import Supporters from '@/components/organization/Supporters.vue'

//import { speakers_list } from '@/storage/programacao/speakers'

@Component({
  components: {
    HelloWorld,
    Carousel,
    Speakers,
    About,
    Robot,
    Main,
    Paragraph,
    Dates,
    //Supporters
  },
})
export default class Home extends Vue {
  private speakersList: any = null;

  constructor() {
    super();
    this.speakersList = [
      {
        name: "Michael Machado",
        institution: "Senior Partner da FlexSim Brasil em Campinas-SP",
        speaking: "Tendências na Simulação: casos e oportunidades",
        description: `Engenheiro químico pela UEM (Universidade Estadual de Maringá) e consultor especializado em simulação dinâmica usando o FlexSim e otimização utilizando outros software específicos, com diversos modelos desenvolvidos para grandes empresas no Brasil como Vale, Harsco, Coca-Cola, Falcare, Fiat, DHL, Jabil, ViaStore, Ambev e outros. Capacitado pela FlexSim, USA, onde também participou de alguns projetos com clientes dos EUA. Pós-graduado em Gestão de Negócios & Operações pelo INSPER-SP (Ibmec-SP), mestrado pela UNICAMP em Pesquisa Operacional.  Pós-graduado em Marketing e Gestão de Negócios pelo INSPER-SP e MBA pela University of Denver (Colorado). 
`,
        subjectResume: `
    Simulação iniciou há alguns anos no Brasil como um assunto obscuro e que gerava um certo desconforto para as pessoas por se tratar de um hard skill que demandava muito conhecimento em programação para gerar soluções reativas no planejamento industrial, logístico e na área de saúde. Nos últimos anos, temos visto uma vertente bastante alterada com o surgimento de soluções modernas, que podem fazer com que métodos de Machine Learning e soluções de AI, quando trabalham em conjunto com simulação, podem desenvolver uma solução proativa e preventiva no planejamento operacional das empresas. 
`,
        img: "/assets/img/speakers/Michael_Machado.jpg",
        customSize: "100%",
        datentime: {
          date: "11/05",
          time: "19:00 - 20:30",
          place: "Online: Youtube",
        },
      },

      {
        name: "Tereza Cristina da Silva Paes Ferreira Del Papa",
        institution: "Paes Del Papa Arquitetura",
        speaking: "Arquitetura Hospitalar",
        description: `Formada pela FAMIH-BH/MG, possui especialização em Arquitetura Hospitalar pelo IAB-SP e Administração Hospitalar pela São Camilo, em São Paulo. Em seu escritório, desenvolve projetos relevantes em várias cidades do país, de diversas naturezas e escalas. Com passagem pela docência, hoje tem tido a oportunidade de dividir seu trabalho com estudantes de arquitetura por meio de palestras. Além disso, em seu escritório recebe eventualmente estagiários,  contribuindo assim também com a formação de futuros profissionais. 
`,
        subjectResume: `
  As práticas profissionais da Arquitetura Hospitalar – um campo de atuação e o mercado de trabalho segundo a experiência da arquiteta urbanista 
`,
        img: "/assets/img/speakers/Tereza_Cristina.jpg",
        customSize: "100%",
        datentime: {
          date: "11/05",
          time: "10:00 - 11:30",
          place: "Auditório 2, área II",
        },
      },

      {
        name: "Mateus Aparecido de Souza Gentile",
        institution: "GTMax",
        speaking: "Impressão 3D com a empresa nacional GTMax",
        description: `Atuo a 7 anos na empresa GTMAX3D líder nacional em fabricação de impressoras 3D, iniciei minha carreira na empresa como estagiário de técnico em eletrônica, durante meus primeiros 3 anos na empresa lidei diretamente com o setor de montagem dos equipamentos onde pude adquirir o máximo de conhecimento técnico possível.
  Com o reconhecimento da empresa ha 3 anos atuo como suporte técnico lidando diretamente com cliente e manutenções dos equipamentos comercializados pela empresa.
   
`,
        subjectResume: `
  Experiências da empresa com o mercado de impressão 3D, seus produtos, oportunidades e mercado de trabalho. 
`,
        img: "/assets/img/speakers/Mateus_Aparecido.jpg",
        customSize: "100%",
        datentime: {
          date: "11/05",
          time: "10:00 - 11:30",
          place: "Online: Youtube",
        },
      },

      {
        name: "Wanderlei Malaquias Pereira Junior",
        institution: "Universidade Federal de Catalão (UFCAT)",
        speaking: "Aplicações da otimização em problemas de engenharia",
        description: `Possui graduação em Engenharia Civil pela Universidade Estadual de Goiás (2010), mestrado em Geotecnia, Estruturas e Construção Civil pela Universidade Federal de Goiás (2014) e doutorado em Ciências Exatas e Tecnológicas pela Universidade Federal de Goiás (2020). Atualmente é professor assistente do Departamento de Engenharia Civil da Universidade Federal de Catalão (UFCAT). Tem experiência nas áreas de Engenharia Civil, com ênfase em mecânica das estruturas e matemática aplicada. Atua principalmente nos seguintes temas: otimização em engenharia, inteligência artificial, solução de problemas inversos para update/calibração de modelos.
   
`,
        subjectResume: `
  Quem nunca ouviu a palavra "otimização"?! Ou talvez a frase "vou otimizar o meu tempo!!!". Conceitos abstratos de otimização já são empregados na humanidade desde os tempos mais remotos, porém o advento da computação científica permitiu que estes métodos pudessem ser amplamente estudados e testados, inclusive em problemas reais. Portanto esta palestra tem como objetivo esclarecer alguns conceitos de otimização, apresentar algumas aplicações no campo da engenharia e apresentar ferramentas que permitem o uso destes métodos 
`,
        img: "/assets/img/speakers/Wanderlei_Malaquias.jpg",
        customSize: "100%",
        datentime: {
          date: "10/05",
          time: "17:00 - 18:30",
          place: "Online: Microsoft Teams",
        },
      },

      {
        name: "Henrique Sanábio Vilela",
        institution: "3D Fila",
        speaking: "A responsabilidade da Impressão 3D na humanidade",
        description: `Engenheiro + MBA - Trabalha com pesquisa e desenvolvimento há mais de 20 anos.   
`,
        subjectResume: `
  Abordaremos o potêncial da tecnologia, o que já foi feito e o que está sendo desenvolvido para o nosso benefício
`,
        img: "/assets/img/speakers/Henrique_Sanabio.jpg",
        customSize: "100%",
        datentime: {
          date: "10/05",
          time: "10:00 - 11:30",
          place: "Online: Microsoft Teams",
        },
      },

      {
        name: "Katiúscia Christiane Freitas ",
        institution: "Secretaria Estadual de Saúde",
        speaking: "Processo de Doação de Órgãos e Tecidos para Transplantes ",
        description: `Gerente de Transplantes da Secretaria Estadual de Saúde; e  Enfermeira do Sistema Integrado de Atendimento ao Trauma e Emergência da Secretaria Estadual de Saúde; Graduada em enfermagem pela Pontifícia Universidade Católica de Goiás (PUC-GO); Pós-graduada em enfermagem oncológica pela Universidade Federal de Goiás (UFG); Pós-graduada em Gestão de Clínicas nos Hospitais do SUS pelo Hospital Sírio Libanês e pós graduação em  Gestão de Sistemas e Serviço de Saúde com ênfase em hemoterapia  pela Universidade Federal da Bahia (UFBA).   
`,
        subjectResume: `
  Palestra sobre a situação atual dos transplantes no Brasil e em Goiás e sobre as etapas do processo de doação de órgãos e tecidos para transplantes.
`,
        img: "/assets/img/speakers/Katiuscia_Christiane.jpg",
        customSize: "100%",
        datentime: {
          date: "09/05",
          time: "10:00 - 12:00",
          place: "Auditório 2, área II",
        },
      },

      {
        name: "Maycon Silva",
        institution: "Head of Innovation Lab",
        speaking: "",
        description: `Maycon Silva é responsável pelo Innovation Lab e está focado em acompanhar as últimas tendências tecnológicas e promove a transferência de conhecimento para as equipes, parceiros e colaboradores de nossos clientes. Maycon tem e seu portifólio serviços de planejamento e criação de centros tecnológicos de excelência (CoEs), renovações tecnológicas, análise e definição de arquitetura, desenvolvimento de aplicativos, entre outros.   
`,
        subjectResume: `

`,
        img: "",
        customSize: "100%",
        datentime: {
          date: "10/05",
          time: "19:00 - 20:30",
          place: "Auditório 2, Área II",
        },
      },

      {
        name: "Ávinner Prado",
        institution: "NATO Arquitetura",
        speaking:
          "A importância da interdisciplinaridade nos projetos e nos negócios",
        description: `Ávinner Prado, arquiteto e urbanista pela UFG - Universidade Federal de Goiás, empreendedor desde quando se entende por gente, empresário com empresas na área de arquitetura, design, engenharia e tecnologia. Sócio-Diretor na NATO, com foco no desenvolvimento de processos e novos negócios. 
`,
        subjectResume: `A importância da interdisciplinaridade nos projetos e nos negócios. 

    Mais do que desenvolver projetos, solucionamos problemas, criamos oportunidades de negócios e impactamos a vida das pessoas. Quando temos um time com diferentes habilidades, trabalhando juntos em prol de um objetivo em comum, criamos mais possibilidades e diferenciais estratégicos.
`,
        img: "",
        customSize: "100%",
        datentime: {
          date: "10/05",
          time: "19:00 - 20:30",
          place: "Microsoft Teams",
        },
      },

      {
        name: "Paulo Gustavo Perini",
        institution: "NATO Arquitetura",
        speaking:
          "A importância da interdisciplinaridade nos projetos e nos negócios",
        description: `Paulo Gustavo Perini, arquiteto e urbanista pela UFG - Universidade Federal de Goiás, criativo e solucionador desde criança, empresário com empresas na área de arquitetura, design, engenharia e tecnologia. Sócio-Diretor na NATO, com foco na criação de atmosferas. 
`,
        subjectResume: `A importância da interdisciplinaridade nos projetos e nos negócios. 

    Mais do que desenvolver projetos, solucionamos problemas, criamos oportunidades de negócios e impactamos a vida das pessoas. Quando temos um time com diferentes habilidades, trabalhando juntos em prol de um objetivo em comum, criamos mais possibilidades e diferenciais estratégicos.
`,
        img: "",
        customSize: "100%",
        datentime: {
          date: "10/05",
          time: "19:00 - 20:30",
          place: "Microsoft Teams",
        },
      },

      {
        name: "Vitor Paulo David da Silva Filho",
        institution: "Hand Talk",
        speaking: "O que são e o que fazem os Ux/Ui Designers",
        description: `Ux Designer focado em acessibilidade, Bacharelado em Design e MBA em Mídia Sociais. Designer carioca com muita determinação em aprender e crescer. Busco no Ux a oportunidade de impactar de forma positiva a vida das pessoas. Atualmente foco em Acessibilidade para realmente poder focar nas pessoas e criar produtos inclusivos.
`,
        subjectResume: `Nesta palestra iremos conversar um pouco sobre a área de atuação do Ux/Ui Design. Como é o dia a dia desses profissionais e o que é necessário para se tornar um Ux/Ui Designer. 
`,
        img: "",
        customSize: "100%",
        datentime: {
          date: "10/05",
          time: "20:30 - 22:00",
          place: "YouTube",
        },
      },

      {
        name: "Alexandre Pontes de Queiroz",
        institution: "Invillia/Pagseguro",
        speaking: "O que são e o que fazem os Ux/Ui Designers",
        description: `Sou desenvolvedor back-end, com 2 anos de experiência em desenvolvimento web. Trabalho em algumas aplicações com grande tráfego (da ordem de milhões de visitas diárias). Possuo sólidos conhecimentos em programação orientada a objetos, containers (Docker, Kubernetes), Java (Spring Boot, Spring Data JPA, Spring Cloud, Spring Security), uso de tecnologias de Mensageria (RabbitMQ, Kafka) e de Observabilidade (New Relic, Splunk). Tenho interesse em escalabilidade de aplicações, infraestrutura, melhores práticas de desenvolvimento, bem como TDD e técnicas associadas como Clean Code e SOLID. 
              Trabalho há mais de 1 ano na Invillia em parceria com a Pagseguro. De outubro de 2019 a março de 2020 fui estagiário em documentação e testes de software na Siagri Software para o Agronegócio (hoje com o nome de Aliare). 
              Graduado na PUC GOIÁS no curso de Tecnologia em Análise e Desenvolvimento de Sistemas. 
              Cursando Especialização Lato-Sensu em Engenharia de Software com Java no Instituto INFNET/Rio de Janeiro.  
`,
        subjectResume: `O objetivo do tema a ser abordado é despertar nos discentes e docentes da academia a necessidade de estudo sistemático no que tange a modelagem de sistemas usando a metodologia Domain-Driven Design (DDD). Abordaremos as motivações do uso desta metodologia em contextos de manutenção de softwares legados e de projetos criados do zero. Falaremos também de como usar as ferramentas que as modelagens estratégica e tática oferecem para conceber softwares mais manuteníveis e com mais bem escritos.
`,
        img: "",
        customSize: "100%",
        datentime: {
          date: "10/05",
          time: "20:30 - 22:00",
          place: "Auditório 2, Área II",
        },
      },
    ]
  }

  private goToSubscription() {
    this.$router.push("/cadastro");
  }

  private goToSubmission() {
    this.$router.push("/submissao");
  }
}
</script>

<style>
li {
  list-style-type: none !important;
}

#sobre p {
  font-size: 24px;
}

#inscricoes span {
  font-size: 18px;
}

.line {
  margin-top: 42px;
  justify-content: center;
  z-index: 100;
}

.call p {
  text-transform: uppercase;
}

.call p {
  font-size: 32px;
  font-weight: bold;
  color: #ddd;
}

.subcall {
  justify-content: center;
  padding: 0 15px;
}

.subcall p {
  font-size: 14px;
  color: #ddd;
}

.button-actions {
  margin-top: 20px;
}

.subcall > div {
  max-width: 900px !important;
}

.btn-submission {
  background-color: transparent !important;
  color: #eee !important;
  border: 1px solid #eee;
}

.line > div {
  max-width: 1150px !important;
}

.line hr {
  border: 1px solid #4e6083;
}

.rights-reserved p {
  color: #eee;
  padding: 20px 0 5px;
  justify-content: start;
}

#quando {
  font-size: 32px;
  font-weight: 600 !important;
}

.onde {
  font-size: 24px;
}

@media screen and (max-width: 576px) {
  .onde {
    padding: 0 20px !important;
  }
}

div > hr {
  color: #cecece;
}

.footer-subscription {
  background-color: #13264a;
  /* background-color: white; */
}

div > span {
  color: white;
}

/* .v-parallax__image {
  transform: none !important;
  width: 100% !important;
} */

/* Higor's resources */

.banner .logo {
  position: absolute;
  width: auto;
  height: 480px;
  left: -50px;
  bottom: -80px;
  z-index: 101;
  filter: brightness(2);
}
.banner .back {
  z-index: 100;
  filter: blur(1px);
}
@media screen and (max-width: 768px) {
  .banner {
    padding: 30px 100px !important;
  }
  .banner .logo {
    display: none;
  }
}
@media screen and (max-width: 576px) {
  .banner {
    padding: 30px 5px !important;
  }
}

#sobre p {
  text-align: justify;
  font-size: 1.2em;
}

.icontitle {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
}
.icontitle > i {
  font-size: 18pt;
  margin-right: 15px;
}
.icontitle > h5 {
  margin: 0;
  margin-top: 4px;
}

#whenwhere {
  display: flex;
  align-items: center;
  text-align: center;
}
#whenwhere > div {
  max-width: 1170px;
  margin: 0 auto !important;
  display: inline-grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-template-areas: "t1 t2" "c1 c2" "nn cc2";
}
#whenwhere > div > .icontitle {
  grid-area: t1;
}
#whenwhere > div > .icontitle:nth-child(3) {
  grid-area: t2;
}
#whenwhere > div #onde-endereco {
  grid-area: cc2;
}
@media screen and (max-width: 768px) {
  #whenwhere > div {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto);
    grid-template-areas: unset;
  }
  #whenwhere > div > .icontitle {
    grid-area: unset !important;
  }
  #whenwhere > div > .icontitle:nth-child(3) {
    margin-top: 22px;
  }
  #whenwhere > div #onde-endereco {
    grid-area: unset !important;
  }
  #whenwhere > div > span:nth-child(5) {
    margin-top: 5px;
  }
}
@media screen and (max-width: 425px) {
  #whenwhere > div span:nth-child(2) {
    font-size: 28px;
  }
  #whenwhere > div > div:nth-child(4) {
    font-size: 18px;
  }
  #whenwhere > div > div:nth-child(4) > div {
    font-size: inherit;
  }
}
</style>
