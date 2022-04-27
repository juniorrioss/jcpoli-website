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
    Organization
    //Supporters
  }
})
export default class Escola extends Vue {
  private speakers: any = null

  constructor() {
    super()
    this.speakers = [
      {
        name: 'Michael Machado',
        institution: 'Senior Partner da FlexSim Brasil em Campinas-SP',
        speaking: 'Tendências na Simulação: casos e oportunidades',
        description: `Engenheiro químico pela UEM (Universidade Estadual de Maringá) e consultor especializado em simulação dinâmica usando o FlexSim e otimização utilizando outros software específicos, com diversos modelos desenvolvidos para grandes empresas no Brasil como Vale, Harsco, Coca-Cola, Falcare, Fiat, DHL, Jabil, ViaStore, Ambev e outros. Capacitado pela FlexSim, USA, onde também participou de alguns projetos com clientes dos EUA. Pós-graduado em Gestão de Negócios & Operações pelo INSPER-SP (Ibmec-SP), mestrado pela UNICAMP em Pesquisa Operacional.  Pós-graduado em Marketing e Gestão de Negócios pelo INSPER-SP e MBA pela University of Denver (Colorado). 
`,
        subjectResume: `
    Simulação iniciou há alguns anos no Brasil como um assunto obscuro e que gerava um certo desconforto para as pessoas por se tratar de um hard skill que demandava muito conhecimento em programação para gerar soluções reativas no planejamento industrial, logístico e na área de saúde. Nos últimos anos, temos visto uma vertente bastante alterada com o surgimento de soluções modernas, que podem fazer com que métodos de Machine Learning e soluções de AI, quando trabalham em conjunto com simulação, podem desenvolver uma solução proativa e preventiva no planejamento operacional das empresas. 
`,
        img: '/assets/img/speakers/Michael_Machado.jpg',
        customSize: '100%',
        datentime: {
          date: '11/05',
          time: '19:00 - 20:30',
          place: 'Online: Youtube'
        }
      },

      {
        name: 'Tereza Cristina da Silva Paes Ferreira Del Papa',
        institution: 'Paes Del Papa Arquitetura',
        speaking: 'Arquitetura Hospitalar',
        description: `Formada pela FAMIH-BH/MG, possui especialização em Arquitetura Hospitalar pelo IAB-SP e Administração Hospitalar pela São Camilo, em São Paulo. Em seu escritório, desenvolve projetos relevantes em várias cidades do país, de diversas naturezas e escalas. Com passagem pela docência, hoje tem tido a oportunidade de dividir seu trabalho com estudantes de arquitetura por meio de palestras. Além disso, em seu escritório recebe eventualmente estagiários,  contribuindo assim também com a formação de futuros profissionais. 
`,
        subjectResume: `
  As práticas profissionais da Arquitetura Hospitalar – um campo de atuação e o mercado de trabalho segundo a experiência da arquiteta urbanista 
`,
        img: '/assets/img/speakers/Tereza_Cristina.jpg',
        customSize: '100%',
        datentime: {
          date: '11/05',
          time: '10:00 - 11:30',
          place: 'Auditório 2, área II'
        }
      },

      {
        name: 'Mateus Aparecido de Souza Gentile',
        institution: 'GTMax',
        speaking: 'Impressão 3D com a empresa nacional GTMax',
        description: `Atuo a 7 anos na empresa GTMAX3D líder nacional em fabricação de impressoras 3D, iniciei minha carreira na empresa como estagiário de técnico em eletrônica, durante meus primeiros 3 anos na empresa lidei diretamente com o setor de montagem dos equipamentos onde pude adquirir o máximo de conhecimento técnico possível.
  Com o reconhecimento da empresa ha 3 anos atuo como suporte técnico lidando diretamente com cliente e manutenções dos equipamentos comercializados pela empresa.
   
`,
        subjectResume: `
  Experiências da empresa com o mercado de impressão 3D, seus produtos, oportunidades e mercado de trabalho. 
`,
        img: '/assets/img/speakers/Mateus_Aparecido.jpg',
        customSize: '100%',
        datentime: {
          date: '11/05',
          time: '10:00 - 11:30',
          place: 'Online: Youtube'
        }
      },

      {
        name: 'Wanderlei Malaquias Pereira Junior',
        institution: 'Universidade Federal de Catalão (UFCAT)',
        speaking: 'Aplicações da otimização em problemas de engenharia',
        description: `Possui graduação em Engenharia Civil pela Universidade Estadual de Goiás (2010), mestrado em Geotecnia, Estruturas e Construção Civil pela Universidade Federal de Goiás (2014) e doutorado em Ciências Exatas e Tecnológicas pela Universidade Federal de Goiás (2020). Atualmente é professor assistente do Departamento de Engenharia Civil da Universidade Federal de Catalão (UFCAT). Tem experiência nas áreas de Engenharia Civil, com ênfase em mecânica das estruturas e matemática aplicada. Atua principalmente nos seguintes temas: otimização em engenharia, inteligência artificial, solução de problemas inversos para update/calibração de modelos.
   
`,
        subjectResume: `
  Quem nunca ouviu a palavra "otimização"?! Ou talvez a frase "vou otimizar o meu tempo!!!". Conceitos abstratos de otimização já são empregados na humanidade desde os tempos mais remotos, porém o advento da computação científica permitiu que estes métodos pudessem ser amplamente estudados e testados, inclusive em problemas reais. Portanto esta palestra tem como objetivo esclarecer alguns conceitos de otimização, apresentar algumas aplicações no campo da engenharia e apresentar ferramentas que permitem o uso destes métodos 
`,
        img: '/assets/img/speakers/Wanderlei_Malaquias.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '17:00 - 18:30',
          place: 'Online: Microsoft Teams'
        }
      },

      {
        name: 'Henrique Sanábio Vilela',
        institution: '3D Fila',
        speaking: 'A responsabilidade da Impressão 3D na humanidade',
        description: `Engenheiro + MBA - Trabalha com pesquisa e desenvolvimento há mais de 20 anos.   
`,
        subjectResume: `
  Abordaremos o potêncial da tecnologia, o que já foi feito e o que está sendo desenvolvido para o nosso benefício
`,
        img: '/assets/img/speakers/Henrique_Sanabio.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '10:00 - 11:30',
          place: 'Online: Microsoft Teams'
        }
      },

      {
        name: 'Katiúscia Christiane Freitas ',
        institution: 'Secretaria Estadual de Saúde',
        speaking: 'Processo de Doação de Órgãos e Tecidos para Transplantes ',
        description: `Gerente de Transplantes da Secretaria Estadual de Saúde; e  Enfermeira do Sistema Integrado de Atendimento ao Trauma e Emergência da Secretaria Estadual de Saúde; Graduada em enfermagem pela Pontifícia Universidade Católica de Goiás (PUC-GO); Pós-graduada em enfermagem oncológica pela Universidade Federal de Goiás (UFG); Pós-graduada em Gestão de Clínicas nos Hospitais do SUS pelo Hospital Sírio Libanês e pós graduação em  Gestão de Sistemas e Serviço de Saúde com ênfase em hemoterapia  pela Universidade Federal da Bahia (UFBA).   
`,
        subjectResume: `
  Palestra sobre a situação atual dos transplantes no Brasil e em Goiás e sobre as etapas do processo de doação de órgãos e tecidos para transplantes.
`,
        img: '/assets/img/speakers/Katiuscia_Christiane.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '10:00 - 12:00',
          place: 'Auditório 2, área II'
        }
      }
    ]
  }
}
</script>

<style scoped></style>
