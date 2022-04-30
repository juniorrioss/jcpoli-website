<template>
  <div class="obs-page view">
    <PhotoHeader
      title="Escola"
      image="/assets/img/puc_sub.jpeg"
      description="Informações da Escola"
    ></PhotoHeader>

    <Main>
      <Paragraph title="Cursos">
        A Escola Politécnica da Pontifícia Universidade Católica de Goiás (PUC
        Goiás) foi criada em agosto de 2021 com a junção de três escolas: Escola
        de Artes e Arquitetura, Escola de Ciências Exatas e da Computação e
        Escola de Engenharia. Atualmente são oferecidos 18 cursos de graduação,
        sendo 12 presenciais, 4 semipresenciais e 2 ensino à distância

        <div class="list-container">
          <ul class="list-cursos">
            <h5>Presenciais</h5>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/agronomia/"
              target="_blank"
            >
              <li>
                Agronomia
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/analise-e-desenvolvimento-de-sistemas/"
              target="_blank"
            >
              <li>
                Análise e Desenvolvimento de Sistemas
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/arquitetura-e-urbanismo/"
              target="_blank"
            >
              <li>
                Arquitetura e Urbanismo
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/ciencias-aeronauticas/"
              target="_blank"
            >
              <li>
                Ciências Aeronáuticas
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/ciencia-da-computacao/"
              target="_blank"
            >
              <li>
                Ciência da Computação
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/design/"
              target="_blank"
            >
              <li>
                Design
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/engenharia-de-alimentos/"
              target="_blank"
            >
              <li>
                Engenharia de Alimentos
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/engenharia-civil/"
              target="_blank"
            >
              <li>
                Engenharia Civil
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/engenharia-de-controle-e-automacao/"
              target="_blank"
            >
              <li>
                Engenharia de Controle e Automação
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/engenharia-de-computacao/"
              target="_blank"
            >
              <li>
                Engenharia de Computação
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/engenharia-eletrica/"
              target="_blank"
            >
              <li>
                Engenharia Elétrica
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/engenharia-de-producao/"
              target="_blank"
            >
              <li>
                Engenharia de Produção
              </li>
            </a>
          </ul>
          <ul class="list-cursos">
            <h5>SemiPresenciais</h5>
            <a
              href="https://ead.pucgoias.edu.br/cursos-graduacao/engenharia-civil-ead"
              target="_blank"
            >
              <li>
                Engenharia Civil
              </li>
            </a>
            <a
              href="https://ead.pucgoias.edu.br/cursos-graduacao/engenharia-de-controle-e-automacao-ead"
              target="_blank"
            >
              <li>
                Engenharia de Controle e Automação
              </li>
            </a>
            <a
              href="https://ead.pucgoias.edu.br/cursos-graduacao/engenharia-mecanica-ead"
              target="_blank"
            >
              <li>
                Engenharia Mecânica
              </li>
            </a>
            <a
              href="https://ead.pucgoias.edu.br/cursos-graduacao/engenharia-de-producao-ead"
              target="_blank"
            >
              <li>
                Engenharia de Produção
              </li>
            </a>
          </ul>
          <ul class="list-cursos">
            <h5>Ensino à Distância</h5>
            <a
              href="https://ead.pucgoias.edu.br/cursos-graduacao/analise-e-desenvolvimento-de-sistemas-ead"
              target="_blank"
            >
              <li>
                Análise e Desenvolvimento de Sistemas
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/big-data-e-inteligencia-artificial-ead/"
              target="_blank"
            >
              <li>
                Big Data e Inteligência Artificial
              </li>
            </a>
          </ul>
        </div>
        Além de oferecer os seus próprios cursos, a Escola Politécnica também é
        responsável pela área de Física, Matemática e Química com a criação do
        Núcleo de Pesquisa, Ensino e Extensão de Ciências Exatas. A Escola
        Politécnica oferece o programa de pós-graduação intitulado Mestrado de
        Engenharia de Produção e Sistemas (MEPROS), criado em 2009. Atualmente
        oferece vários cursos de especializações e extensão.
        <br />
        Um dos principais objetivos da Escola é a qualificação da pesquisa e a
        Jornada Científica tem por objetivo oportunizar e estimular os
        discentes, egressos, docentes de graduação e pós-graduação a
        participarem da produção e divulgação do conhecimento científico.
      </Paragraph>
    </Main>

    <Organization />
    <Main>
      <Paragraph title="palestrantes">
        <Speakers :speakers="speakers" :paginate="1" />
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
          place: 'Auditório 2, Área II'
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
          place: 'Auditório 2, Área II'
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
               Foi membro da Comissão Assessora de Área do Exame Nacional de Desempenho dos Estudantes — Enade, de Tecnologia em Design Gráfico 2018 e 2019.
               Foi docente na UFG, PUC-GO e Faculdade Senac GO. Desenvolve pesquisas e trabalhos visuais a partir do resgate da imagem de povos originários do Brasil.
`,
        subjectResume: `A palestra aborda o mesmo tema da exposição que deve abrir na mesma data. Será uma mesa redonda com mediação feita pela coordenadora do curso de Design, Genilda Alexandria, sobre o trabalho de pesquisa, levantamento histórico e reprodução artística em carvão dos desenhos de Marcos Costa. A participação do IGPA fará o evento interdisciplinar, fortalecendo o vínculo com o fazer científico e com a conexão antropológica do tema.
`,
        img: '/assets/img/speakers/Marcos_Costa.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '10:30 - 12:00',
          place: 'Auditório Marisa Roriz, Área III'
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
          place: 'Auditório Marisa Roriz, Área III'
        }
      },
      {
        name: 'Sylvia Madeira',
        institution: 'Coordenadora de UX design na Gauge/Stefanini Group',
        speaking: 'Qual a função do UX design em uma empresa?',
        description: `Bacharel em Publicidade e propaganda-Comunicação Social, Pós Graduação Administração, Gama Academy UX Design; Voluntária: Ponto Focal do Medium LTUX – Redatora e Editora de Conteúdo (Ladies UX).
        `,
        subjectResume: `Apresentação de UX, da empresa e de vagas.
        `,
        img: '',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: 'YouTube'
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
        img: '',
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
          place: 'Laboratório 101, bloco C, Área II'
        }
      }
    ]
  }
}
</script>

<style scoped>
.list-container {
  /*position: relative;
  width: 70vw;
  left: calc(-15vw + 15%);
  */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-around;
  max-height: 50vh;

  padding: 0.5rem;
  margin: 2rem 0;

  text-align: center;
}

@media screen and (max-width: 576px) {
  .list-container {
    padding: 0;
    max-height: 100vh;
  }

  .list-cursos {
    padding: 0;
  }
}

.list-container h5 {
  margin: 2rem 0;
  color: black;
}

.list-cursos li {
  background-color: #006ca3;

  margin-bottom: 0.5rem;
  border-radius: 0.3rem;
  width: 25rem;

  transition: transform 0.4s;
}

.list-cursos li:hover {
  transform: scale(1.1);
}

.list-cursos a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
