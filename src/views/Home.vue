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
                <v-flex class="onde">Escola Politécnica</v-flex>
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
              <p class="text-justify text-center">
                A I JCPOLI será realizada de 9 a 11 de Maio de 2022, com tema:
                Cultura, Inovação e Empreendedorismo. É com alegria que o
                convidamos para enviar um artigo para o comitê científico.
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
                &copy; 1º Jornada Científica da Escola Politécnica - I JCPOLI 2022
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import Carousel from '@/components/home/Carousel.vue'
import Speakers from '@/components/organization/Speakers.vue'
import About from '@/components/home/About.vue'
import Robot from '@/components/home/Robot.vue'
import Main from '@/components/organization/Main.vue'
import Paragraph from '@/components/organization/Paragraph.vue'
import Dates from '@/components/home/Dates.vue'
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
    Dates
    //Supporters
  }
})
export default class Home extends Vue {
  private speakersList: any = null

  constructor() {
    super()
    this.speakersList = [
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
          place: 'Microsoft Teams'
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
          place: 'Microsoft Teams'
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
          place: 'Auditório 1, área II'
        }
      },

      {
        name: 'Filipe Fraga',
        institution: 'SENAI Ítalo Bologna',
        speaking:
          'O mercado de automação industrial e como conseguir oportunidades',
        description: `Mestre em Sistemas Mecatrônicos pela Universidade de Brasília (UnB), Graduação em Engenharia de Controle e Automação pela Pontifícia Universidade Católica de Goiás (PUC-GO). Atualmente como Coordenador de Pesquisa (Núcleo de Estudo, Pesquisa e Extensão - NEPE) e Docente de Nível Superior pela Faculdade SENAI Ítalo Bologna. Pesquisador no ramo de robótica, visão computacional, automação e IA. Experiência em Industria nos setores de Manutenção/Utilidades e projetos industriais voltados para automação.   
`,
        subjectResume: `

`,
        img: '/assets/img/speakers/Filipe_Fraga.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '09:00 - 10:00',
          place: 'YouTube'
        }
      },

      {
        name: 'Maycon Silva',
        institution: 'Head of Innovation Lab',
        speaking: '',
        description: `Maycon Silva é responsável pelo Innovation Lab e está focado em acompanhar as últimas tendências tecnológicas e promove a transferência de conhecimento para as equipes, parceiros e colaboradores de nossos clientes. Maycon tem e seu portifólio serviços de planejamento e criação de centros tecnológicos de excelência (CoEs), renovações tecnológicas, análise e definição de arquitetura, desenvolvimento de aplicativos, entre outros.   
`,
        subjectResume: `

`,
        img: '',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '19:00 - 20:30',
          place: 'Auditório 2, área II'
        }
      },

      {
        name: 'Ávinner Prado',
        institution: 'NATO Arquitetura',
        speaking:
          'A importância da interdisciplinaridade nos projetos e nos negócios',
        description: `Ávinner Prado, arquiteto e urbanista pela UFG - Universidade Federal de Goiás, empreendedor desde quando se entende por gente, empresário com empresas na área de arquitetura, design, engenharia e tecnologia. Sócio-Diretor na NATO, com foco no desenvolvimento de processos e novos negócios. 
`,
        subjectResume: `A importância da interdisciplinaridade nos projetos e nos negócios. 

    Mais do que desenvolver projetos, solucionamos problemas, criamos oportunidades de negócios e impactamos a vida das pessoas. Quando temos um time com diferentes habilidades, trabalhando juntos em prol de um objetivo em comum, criamos mais possibilidades e diferenciais estratégicos.
`,
        img: '/assets/img/speakers/Ávinner_Prado_Provisorio.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '19:00 - 20:30',
          place: 'Microsoft Teams'
        }
      },

      {
        name: 'Paulo Gustavo Perini',
        institution: 'NATO Arquitetura',
        speaking:
          'A importância da interdisciplinaridade nos projetos e nos negócios',
        description: `Paulo Gustavo Perini, arquiteto e urbanista pela UFG - Universidade Federal de Goiás, criativo e solucionador desde criança, empresário com empresas na área de arquitetura, design, engenharia e tecnologia. Sócio-Diretor na NATO, com foco na criação de atmosferas. 
`,
        subjectResume: `A importância da interdisciplinaridade nos projetos e nos negócios. 

    Mais do que desenvolver projetos, solucionamos problemas, criamos oportunidades de negócios e impactamos a vida das pessoas. Quando temos um time com diferentes habilidades, trabalhando juntos em prol de um objetivo em comum, criamos mais possibilidades e diferenciais estratégicos.
`,
        img: '/assets/img/speakers/Paulo_Gustavo_Provisorio.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '19:00 - 20:30',
          place: 'Microsoft Teams'
        }
      },

      {
        name: 'Vitor Paulo David da Silva Filho',
        institution: 'Hand Talk',
        speaking: 'O que são e o que fazem os Ux/Ui Designers',
        description: `Ux Designer focado em acessibilidade, Bacharelado em Design e MBA em Mídia Sociais. Designer carioca com muita determinação em aprender e crescer. Busco no Ux a oportunidade de impactar de forma positiva a vida das pessoas. Atualmente foco em Acessibilidade para realmente poder focar nas pessoas e criar produtos inclusivos.
`,
        subjectResume: `Nesta palestra iremos conversar um pouco sobre a área de atuação do Ux/Ui Design. Como é o dia a dia desses profissionais e o que é necessário para se tornar um Ux/Ui Designer. 
`,
        img: '',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '20:30 - 22:00',
          place: 'YouTube'
        }
      },

      {
        name: 'Alexandre Pontes de Queiroz',
        institution: 'Invillia/Pagseguro',
        speaking:
          'Domain-Driven Design - Principais Conceitos e algumas provocações',
        description: `Sou desenvolvedor back-end, com 2 anos de experiência em desenvolvimento web. Trabalho em algumas aplicações com grande tráfego (da ordem de milhões de visitas diárias). Possuo sólidos conhecimentos em programação orientada a objetos, containers (Docker, Kubernetes), Java (Spring Boot, Spring Data JPA, Spring Cloud, Spring Security), uso de tecnologias de Mensageria (RabbitMQ, Kafka) e de Observabilidade (New Relic, Splunk). Tenho interesse em escalabilidade de aplicações, infraestrutura, melhores práticas de desenvolvimento, bem como TDD e técnicas associadas como Clean Code e SOLID. 
              Trabalho há mais de 1 ano na Invillia em parceria com a Pagseguro. De outubro de 2019 a março de 2020 fui estagiário em documentação e testes de software na Siagri Software para o Agronegócio (hoje com o nome de Aliare). 
              Graduado na PUC GOIÁS no curso de Tecnologia em Análise e Desenvolvimento de Sistemas. 
              Cursando Especialização Lato-Sensu em Engenharia de Software com Java no Instituto INFNET/Rio de Janeiro.  
`,
        subjectResume: `O objetivo do tema a ser abordado é despertar nos discentes e docentes da academia a necessidade de estudo sistemático no que tange a modelagem de sistemas usando a metodologia Domain-Driven Design (DDD). Abordaremos as motivações do uso desta metodologia em contextos de manutenção de softwares legados e de projetos criados do zero. Falaremos também de como usar as ferramentas que as modelagens estratégica e tática oferecem para conceber softwares mais manuteníveis e com mais bem escritos.
`,
        img: '/assets/img/speakers/Alexandre_Queiroz_Provisorio.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '20:30 - 22:00',
          place: 'Auditório 2, área II'
        }
      },

      {
        name: 'Marcos Costa de Freitas',
        institution:
          'Marcos Costa – designer, artista e professor independente e PUC Goiás',
        speaking:
          'Povos primordiais – o resgate inédito da imagem de etnias desaparecidas',
        description: `Mestre em História pela PUC-GO na área de concentração de Cultura e Poder; Bacharel em Artes Visuais / Comunicação Visual,
               pela Universidade Federal de Goiás. Professor no ensino superior de design há 23 anos. Atuou como coordenador por 13 anos, 
               participou da elaboração de Planos de Desenvolvimento Institucional e Projetos Pedagógicos de vários cursos, atuou em CPA, CONSUP, CIPA e Conselho Técnico Científico de diversas IES. 
               Foi membro da Comissão Assessora de área do Exame Nacional de Desempenho dos Estudantes — Enade, de Tecnologia em Design Gráfico 2018 e 2019.
               Foi docente na UFG, PUC-GO e Faculdade Senac GO. Desenvolve pesquisas e trabalhos visuais a partir do resgate da imagem de povos originários do Brasil.   
`,
        subjectResume: `A palestra aborda o mesmo tema da exposição que deve abrir na mesma data. Será uma mesa redonda com mediação feita pela coordenadora do curso de Design, Genilda Alexandria, sobre o trabalho de pesquisa, levantamento histórico e reprodução artística em carvão dos desenhos de Marcos Costa. A participação do IGPA fará o evento interdisciplinar, fortalecendo o vínculo com o fazer científico e com a conexão antropológica do tema.
`,
        img: '/assets/img/speakers/Marcos_Costa.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '10:30 - 12:00',
          place: 'Auditório Marisa Roriz, área III'
        }
      },
      {
        name: 'Maria Cristina Nunes F. Neto',
        institution: '',
        speaking:
          'Povos primordiais – o resgate inédito da imagem de etnias desaparecidas',
        description: `Graduada em História pela Universidade Federal de Uberlândia (1995), Mestrado em História pela Universidade Estadual de Campinas (1998) e Doutorado em História pela Universidade Estadual de Campinas (2002). Atualmente é professora adjunto da Pontifícia Universidade Católica de Goiás (PUC-GO), no Mestrado de História, nos cursos de graduação de História e Relações Internacionais.   
`,
        subjectResume: `A palestra aborda o mesmo tema da exposição que deve abrir na mesma data. Será uma mesa redonda com mediação feita pela coordenadora do curso de Design, Genilda Alexandria, sobre o trabalho de pesquisa, levantamento histórico e reprodução artística em carvão dos desenhos de Marcos Costa. A participação do IGPA fará o evento interdisciplinar, fortalecendo o vínculo com o fazer científico e com a conexão antropológica do tema.
`,
        img: '/assets/img/speakers/Maria_Cristina.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '10:30 - 12:00',
          place: 'Auditório Marisa Roriz, área III'
        }
      },
      {
        name: 'José Assumpção Rodrigues de Almeida',
        institution: 'Superintendente de Tecnologia da Informação da ANAC',
        speaking: 'Agência Nacional de Aviação Civil',
        description: `Possui mestrado em Engenharia de Produção pela Universidade de São Paulo – USP (2009). Graduação em Engenharia de Produção pela Universidade de São Paulo – USP (2006). Atualmente é Gerente de Sistemas e Informações da Superintendência de Tecnologia da Informação da Agência Nacional de Aviação Civil - ANAC (2018-presente), e instrutor das disciplinas de Gestão de Processos com Foco em Inovação (2017-presente) e Análise e Melhoria de Processos (2012-presente) da Escola Nacional de Administração Pública - ENAP. Possui cargo efetivo de Especialista em Regulação de Aviação Civil da ANAC (2010-presente). Anteriormente foi Gerente Técnico de Escritório de Processos (2015-2018) e Gerente Técnico de Planejamento Institucional (2014-2015) da Superintendência de Planejamento Institucional da ANAC, Gerente Técnico de Processos e Capacitação (2012-2014) da Superintendência de Infraestrutura Aeroportuária da ANAC, Professor Substituto da Universidade Estadual Júlio de Mesquita Filho - UNESP (2008-2009), Gerente de Projetos de Manufatura Enxuta (2007-2009) da Proenx Consultoria e Treinamento Empresarial e Coordenador de Projetos de Manufatura Enxuta (2006-2007) da Hominiss Lean Consulting. Tem experiência na área de Gestão de Processos, Fluxos de Informação, Melhoria Organizacional, Desenvolvimento de Sistemas, Lean Office, Governança de Dados, Gestão por Competências e Regulação Pública.
        `,
        subjectResume: `
        `,
        img: '/assets/img/speakers/Jose_Assumpção.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '10:00 - 11:30 ',
          place: 'YouTube'
        }
      },
      {
        name: 'Luan Fernandes Barcelos',
        institution: 'Syncode Sistemas e Tecnologia',
        speaking: `"Na minha máquina funciona": Desenvolvendo em docker para nunca mais ter estes problemas.
        `,
        description: `Graduando em análise e desenvolvimento de sistemas na PUC-GO e Programador Backend Trainee com 2 anos de experiencia em desenvolvimento backend de aplicações web em python e infra. Experiencia em desenvolvimento e uso de linux.
        `,
        subjectResume: `Motivação de uso e introdução ao docker. Criando containers a partir de imagens oficiais. Criando suas próprias imágens. Comunicação de máquina local com docker e docker com docker. Encerramento com exemplo de uso real.
        `,
        img: '/assets/img/speakers/Luan_Fernandes_Provisorio.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '17:00 - 18:30',
          place: 'Laboratório 101, bloco C, área II'
        }
      },
      {
        name: 'Danielle Moreira',
        institution: 'GRUPO HAUS – Stefanini group',
        speaking: `Carreiras Digitais no grupo HAUS.
        `,
        description: `PEOPLE & CULTURE MANAGER, Professional & Self Coaching e Practitioner Programação Neurolinguística e Neurociência. 
        Mais de 10 anos ajudando as pessoas a se desenvolverem através do autoconhecimento. Experiência com Gestão de Talentos, HRBP, People Engagement, Performance Review, Employer Brand, Talent Acquisition e nos últimos 4 anos no processo de aquisições de novas empresas.
        `,
        subjectResume: `Se olharmos nos últimos 10 anos o quanto o consumidor evoluiu, procurando uma melhor experiência, buscando mais agilidade, bom atendimento e se tornando mais exigente, 
        e consequentemente os nossos clientes também. E aí que o Grupo Haus surge, a nossa missão é ajudar nossos clientes a se relacionarem melhor com seus consumidores. 
        E nosso DNA é composto por um amplo ecossistema de empresas, ventures e startups que oferecem as mais diversificadas soluções tecnológicas e inovadoras do mercado, investimos em transformação digital, 
        comunicação, cobertura de eventos, live commerce, gestão de branding, reputação da marca, gestão de crises, digital analytics e User Experience (UX).
        `,
        img: '/assets/img/speakers/Dani_Moreira_Provisorio.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '08:00 - 09:30',
          place: 'YouTube'
        }
      },
      {
        name: 'Hector Grecco',
        institution: 'CTO na Suney (@suneybr)',
        speaking: `Hackeando o transporte público: Como descobri uma falha de segurança que me deixaria andar de metrô de graça para sempre.
        `,
        description: `Engenheiro de Software com foco em Fintechs e Pesquisador de Segurança da Informação nas horas vagas com passagens por empresas como PagSeguro, 
                  Kovi e EBANX. Atualmente é co-fundador e CTO da Suney: uma fintech de crédito para energia solar. Formado em Análise de Sistemas (PUC/GO e UCB) e Pós-Graduando em Computação Forense e Perícia Digital (IPOG).
        `,
        subjectResume: `Os ouvintes aprenderão um pouco sobre como funciona a área de Segurança da Informação nas grandes empresas, alguns tipos de ataques hacker, como começar na área e por fim o caso de 
                  como hackeei o sistema de tickets de metrô de uma grande capital brasileira e quais seriam as consequências disso caso tivesse sido feito por um hacker malicioso.
        `,
        img: '',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '20:30 - 22:00',
          place: 'Auditório 1, área II'
        }
      },
      {
        name: 'Paulo Alexandre Bernardo dos Santos Nunes',
        institution: 'Manager, Junior Talent Unit (JTU)',
        speaking: `Palestra de Abertura
        `,
        description: `Paulo Nunes está focado nos mercados internacionais, nomeadamente norte da Europa, América e Médio Oriente. Paulo Nunes lidera também a Junior Talent Unit (JTU), gerindo a formação e programas de recrutamento. 
        `,
        subjectResume: `
        `,
        img: '/assets/img/speakers/Paulo_Nunes_Provisorio.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '19:00 - 20:30',
          place: 'Auditório 1, área II'
        }
      },
      {
        name: 'José Hosanan Inácio',
        institution: 'Megasoft Informática',
        speaking: `Automação Residencial Uma Realidade de Futuro.
        `,
        description: `Graduado em Engenharia de Computação, PUC-GO, desenvolvedor de Sistemas Senior, Diretor Técnico da Megasoft Informática, empresa especializada em desenvolvimento de Sistemas para gestão pública e 
                  integração das Prefeituras aos Tribunais de Contas, Pós Graduando em Growth Hacking & Agile Mindset pela HSM University.
        `,
        subjectResume: `Abordagem dos conceitos de automação, internet das coisas, algumas novidades atuais e a tendência do mercado.
        `,
        img: '/assets/img/speakers/Jose_Hosanan_Provisorio.png',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '10:00 - 11:30 ',
          place: 'Auditório 3, área II'
        }
      },
      {
        name: 'Paula Leocadio',
        institution: 'Universidade de Cork - Irlanda',
        speaking: `Internacionalização na área de Design – série Trajetórias, com Paula Leocadio.
        `,
        description: `Atualmente phd researcher at university college cork. 
                  Certificada com proficiência em Comunicação Visual e Design pela Assabet Valley Regional Technical High School de Marlborough, MA nos EUA e Bacharel com excelência em Design Gráfico, Produtos e Ambientes pela PUC Goiás. 
                  Destacando também por méritos na movimentação estudantil da cidade. Idealizadora e organizadora da Semana Integrada de Design - seintegra! 2013 e Comissão Organizadora do Encontro Nacional de Estudantes de Design, N_Design 2014. 
                  Selecionada pelo Edital Conexão Cultura Intercâmbios realizado pelo Ministério da Cultura para sua capacitação profissional no curso Design Contemporâneo Italiano e Tendências no Istituto Europeu di Design Milano.
        `,
        subjectResume: `A palestra aborda a trajetória da egressa do curso de Design da PUC Goiás e suas experiências exitosas em atividades profissionais e acadêmicas internacionalmente.
        `,
        img: '/assets/img/speakers/Paula_Leocadio_Provisorio.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '10:30 - 12:00',
          place: 'YouTube'
        }
      },
      {
        name: 'Nivia Barboza Ferreira',
        institution: 'Auckland University of Technology - Aotearoa/New Zealand',
        speaking: `Internacionalização na área de Design – série Trajetórias, com Nivia Boz
        `,
        description: `Nivia Ferreira, designer de UX/UI, pesquisadora e palestrante com interesse particular em Artes e Design. Possuo mestrado, com dissertação sobre game design e experiência do jogador, e sou doutorando, 
                  com tese sobre game design e neurociência, ambos em Design pela Universidade Anhembi Morumbi (UAM-SP), Brasil. Sou bacharel em Design de Comunicação pela Pontifícia Universidade Católica de Goiás (PUC-GO) com pesquisa prática sobre interfaces para plataformas de e-learning. 
        `,
        subjectResume: `A palestra aborda a trajetória da egressa do curso de Design da PUC Goiás e suas experiências exitosas em atividades profissionais e acadêmicas internacionalmente. 
        `,
        img: '/assets/img/speakers/user-vector-woman.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '08:30 - 10:00',
          place: 'YouTube'
        }
      },
      {
        name: 'Faos Pereira Lopes',
        institution: 'Head de Experiência do Cliente (Cofundador iCrop)',
        speaking: `Irrigação de Alta Performance
        `,
        description: ``,
        subjectResume: ``,
        img: '/assets/img/speakers/Faos_Pereira.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '08:00 - 09:30',
          place: 'Microsoft Teams'
        }
      },
      {
        name: 'Roberto Márcio dos Santos',
        institution: 'PUC Goiás',
        speaking: `Navegação Aérea
        `,
        description: `Capitão RF Especialista em Aeronáutica - Controlador de Tráfego Aéreo - pela Força Aérea Brasileira (1981). Psicopedagogo, pela PUC-GOIÁS (2019). Possui experiência na área de Educação, 
                com ênfase em Métodos e Técnicas de Ensino para o ensino regular e para a educação especial, em particular, para autistas e outros problemas do desenvolvimento, e na área da Aviação, com ênfase em Formação de Pessoal, 
                Controle do Espaço Aéreo, Segurança Operacional, Segurança da Aviação Contra Atos de Interferência Ilícita (AESEC) Novas Tecnologias Satelitais (CNS-ATM), História da Aviação e Medicina Aeroespacial. `,
        subjectResume: `Planejamento de voo, procedimentos de saída, TOC, voo em rota, efeitos do vento, TOD, procedimentos de aproximação. Cálculos de razão de subida, descida, velocidades e estimados.`,
        img: '/assets/img/speakers/Roberto_Márcio.png',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '13:30 - 17:00',
          place: 'Auditório 3, área II'
        }
      },
      {
        name: 'Salmen Chaquip Bukzem',
        institution: 'PUC Goiás',
        speaking: `Planejamento de Voo
        `,
        speaking2:'Estrutura do Espaço Aéreo Brasileiro',
        description: `Graduado em Desenvolvimento de Sistemas de Informação, Especialista em Docência do Ensino Superior e em Gestão de Segurança da Informação e Comunicações pela Universidade de Brasília. Militar da reserva da Força Aérea onde exerceu a função de Supervisor e Instrutor de órgãos de controle de tráfego aéreo, com atuação na Prevenção e Investigação de Acidentes Aeronáuticos, Gerenciamento de Sistemas de Segurança Operacional, Inspeção em Prestadores de Serviço de Navegação Aérea e instrução em diversos cursos do SISCEAB. Atualmente é Coordenador do Curso de Ciências Aeronáuticas da Pontifícia Universidade Católica de Goiás. `,
        subjectResume: `Interpretação de cartas, ROTAER, análise e escolha dos aeródromos; escolha da rota a ser percorrida; análise da meteorologia atual e prevista; cálculos de performance da aeronave; preenchimento e envio do formulário de plano de voo, conferência da documentação necessária ao voo. `,
        img: '/assets/img/speakers/Salmen_Chaquip.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '13:30 - 17:00',
          place: 'Auditório 2, área II'
        }
      },
    ]
  }

  private goToSubscription() {
    this.$router.push('/cadastro')
  }

  private goToSubmission() {
    this.$router.push('/orientacoes')
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
  grid-template-areas: 't1 t2' 'c1 c2' 'nn cc2';
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
