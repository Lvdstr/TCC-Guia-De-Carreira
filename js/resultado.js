var profissoes = {
  DevOps_Engineer: {
    chave1: "Engenheiro DevOps",
    chave2: "DevOps engloba práticas que automatizam e aceleram o desenvolvimento, teste e entrega de software, facilitando a integração entre equipes de desenvolvimento, operações de TI e engenharia de segurança para oferecer produtos de alta qualidade e confiabilidade. As responsabilidades incluem planejamento de projetos, desenvolvimento, distribuição e operação de software, promovendo a colaboração para alinhar estratégias organizacionais.",
    chave3: `
    <ul>
        <li>Afinidade com matemática e tecnologia</li>
        <li>Capacidade de se adaptar rapidamente e gerenciar crises</li>
        <li>Manter-se atualizado com tendências tecnológicas</li>
        <li>Criatividade e espírito empreendedor</li>
    </ul>`,
    chave4: "A remuneração total mensal estimada para o cargo de Devops é de R$ 6.875, com uma média salarial mensal de R$ 6.000. Esses números representam a mediana, que é o ponto médio dos intervalos do nosso modelo proprietário de Estimativa de Pagamento Total e é baseado nos salários coletados de nossos usuários. A remuneração variável mensal estimada é de R$ 875,",
    chave5: "A graduação em DevOps, com duração de 4 semestres, oferece uma formação profissional sob medida para quem busca se capacitar rapidamente em uma das áreas mais promissoras do mercado de trabalho. É um curso que prepara os estudantes com habilidades essenciais em desenvolvimento e operações de software, atendendo à demanda crescente por profissionais especializados nesse campo dinâmico e inovador."
  },

  Data_Engineer: {
    chave1: "Engenheiro de Dados",
    chave2: "O papel do engenheiro de dados é crucial na organização e análise de dados, verificando a qualidade e o comportamento dos dados, otimizando processos e integrando novas ferramentas para melhorar a eficiência. Em empresas menores, ele geralmente é um generalista, responsável pela manutenção e distribuição de dados. Em médias empresas, especializa-se em pipelines específicos, enquanto em grandes empresas foca em bancos de dados analíticos, colaborando diretamente com analistas de dados para resultados precisos.",
    chave3: `
    <ul>
        <li>Conhecimento em linguagens como Python e JavaScript.</li>
        <li>Familiaridade com conceitos e ferramentas de big data.</li>
        <li>Domínio da Linguagem de Consulta Estruturada.</li>
        <li>Graduação em ciência da computação, engenharia, matemática ou áreas relacionadas.</li>
        <li>Experiência com Apache Spark, Hadoop, Git e certificações relevantes.</li>
        <li>Habilidade para comunicar-se claramente.</li>
        <li>Capacidade de trabalhar efetivamente em equipe.</li>
        <li>Iniciativa para buscar novas ferramentas e antecipar problemas.</li>
        <li>Organização para lidar com prazos e demandas intensas.</li>
    </ul>
 
`,
    chave4: "A média salarial de um engenheiro de dados é de R$ 10.900, podendo variar entre R$ 5.975 e R$ 20.000 dependendo da região, empresa e qualificação profissional.",
    chave5: "O caminho para se tornar um Engenheiro de Dados pode levar cerca de 4 anos na graduação, variando conforme a instituição. Pós-graduações costumam durar de 1 a 2 anos, enquanto especializações ou MBAs oferecem um aprofundamento rápido em habilidades específicas em 6 a 12 meses." 
  },

  Software_Developer: {
    chave1: "Desenvolvedor de Software",
    chave2: "O desenvolvedor de software é o profissional responsável por conceber, projetar e desenvolver programas, como softwares, sites ou aplicativos, permitindo que os usuários realizem tarefas específicas em diversos dispositivos, como computadores e celulares.",
    chave3: `
    <ul>
        <li>Dominar pelo menos uma linguagem de programação é fundamental. Exemplos comuns incluem Java, Python, JavaScript, C#, e Ruby.</li>
        <li>Saber como manipular e armazenar dados em bancos de dados relacionais (SQL) ou não relacionais (NoSQL) é essencial.</li>
        <li>Utilizar frameworks pré-existentes, como React, Angular, Django, ou Spring, facilita o desenvolvimento de software, oferecendo estrutura e funcionalidades comuns.</li>
    </ul> `,
    chave4:"Os salários de desenvolvedores de software podem variar amplamente, dependendo da experiência, localização e tipo de indústria. Em média, no Brasil, desenvolvedores de software podem esperar ganhar um salário competitivo que reflete a alta demanda por suas habilidades.",
    chave5:"Para se tornar desenvolvedor de software, uma alternativa viável é o curso de Análise e Desenvolvimento de Sistemas, um diploma tecnológico de nível superior. Esta formação acadêmica capacita os alunos para trabalhar no desenvolvimento e na manutenção de sistemas computacionais. O curso tem uma duração média de 2 a 3 anos."
  },

  Web_Designer: {
    chave1: "Web Designer",
    chave2: "Um web designer é um profissional responsável por criar e projetar elementos visuais para websites, abrangendo o layout, a aparência e a usabilidade de uma página na internet. O trabalho envolve a seleção de cores, tipografia, imagens e outros elementos gráficos para criar uma experiência atraente e funcional para os usuários.",
    chave3: `
    <ul>
        <li>Conhecimento robusto dessas linguagens é fundamental para criar sites visualmente impressionantes e funcionalmente integrados.</li>
        <li> Olhar aguçado para estética e princípios de design.</li>
        <li>Seleção cuidadosa de tipografia, paletas de cores e composição do layout.</li>
        <li>Compreensão da experiência do usuário e da hierarquia visual.</li>
    </ul>`,
    chave4:"Os salários para web designers podem variar bastante dependendo da experiência, localização e setor. No Brasil, um web designer pode esperar um salário competitivo que reflete a demanda crescente por habilidades de design digital.",
    chave5: "O curso para a formação de web designers geralmente é tecnológico e tem uma duração média de dois anos. Durante o curso, os alunos aprendem tanto os fundamentos do design quanto as habilidades técnicas necessárias para implementar seus designs na web."
  },

  Graphic_Designer: {
    chave1: "Designer Gráfico",
    chave2: "Um Designer Gráfico é um profissional altamente criativo e técnico, incumbido da criação de identidades visuais, peças gráficas e materiais para uma ampla gama de mídias, abrangendo desde plataformas digitais até materiais impressos. Este profissional combina habilidades artísticas com conhecimentos técnicos em softwares de design para desenvolver layouts, logotipos, ilustrações, embalagens, infográficos e outros elementos visuais que comunicam mensagens claras e impactantes. Além disso, o Designer Gráfico desempenha um papel essencial na construção da identidade visual de marcas e na criação de experiências visuais memoráveis que conectam empresas com seu público-alvo.",
    chave3: `
    <ul>
        <li>Domínio de softwares de design gráfico como Adobe Creative Suite.</li>
        <li>Criatividade e capacidade de desenvolver conceitos visuais inovadores.</li>
        <li> Conhecimento em tipografia, composição visual e técnicas de ilustração.</li>
        <li> Habilidades de comunicação visual para transmitir mensagens eficazes através de designs.</li>
        <li>Capacidade de trabalhar sob prazos e em colaboração com equipes multidisciplinares.</li>
    </ul> `,
    chave4: "O salário médio de um Designer Gráfico no Brasil é aproximadamente R$ 2.606,38 por mês. Esse valor pode variar dependendo da localização, experiência e porte da empresa.",
    chave5: "O curso de Design Gráfico tem duração média de 4 anos, durante os quais os estudantes são expostos a disciplinas como arte, design, comunicação visual, tecnologia digital, tipografia e ilustração. Além das aulas teóricas, os alunos participam de projetos práticos, estágios e atividades extracurriculares para desenvolver suas habilidades na área.",
  },

  Creative_Designer: {
    chave1: "Designer Criativo",
    chave2: "Um designer criativo é um profissional versátil que combina habilidades técnicas com uma mente inovadora para conceber soluções visuais impactantes em áreas como design gráfico, produtos, interiores e moda. Eles criam layouts, imagens e elementos visuais que comunicam mensagens específicas de forma harmoniosa e eficaz. Com uma sólida formação em arte e design, dominam ferramentas como Adobe Photoshop, Illustrator e InDesign, explorando novas ideias para resolver problemas de design de maneira original. Trabalham em equipe para alinhar a mensagem visual com os objetivos estratégicos do projeto ou empresa.",
    chave3: `
        <ul>
        <li>Desenvolver habilidades avançadas em softwares essenciais como Photoshop, Illustrator, InDesign, e mantenha-se atualizado com as últimas tendências do mercado.</li>
        <li>Cultivar uma abordagem inovadora para enfrentar desafios, buscando inspiração em diversas fontes e explorando novas perspectivas para criar soluções originais.</li>
        <li>Constrir um portfólio visualmente atraente que destaque seus melhores trabalhos e demonstre sua versatilidade e capacidade como designer criativo.</li>
        <li>Aprimorar suas habilidades de comunicação para transmitir ideias e conceitos de maneira clara e precisa, compreendendo as necessidades dos clientes e colaboradores.</li>
        <li>Estar preparado para receber críticas construtivas e feedbacks, utilizando-os para aprimorar continuamente seu trabalho e crescer profissionalmente.</li>
        </ul>`,

    chave4: "O salário total mensal estimado para o cargo de Designer Criativo é de aproximadamente R$ 8.050, com uma média salarial mensal de R$ 6.000. Esses valores refletem a mediana, calculada a partir dos dados coletados pelo nosso modelo proprietário de Estimativa de Pagamento Total. A remuneração variável mensal estimada é de R$ 2.050, que pode incluir bônus, comissões, gorjetas e participações nos lucros.",
    chave5: "Na área de Design Criativo, existem duas modalidades de cursos superiores: Bacharelado, com duração de aproximadamente 4 anos, oferecendo uma formação ampla e generalista; e Tecnológico, com duração de cerca de 2 anos, focado nas demandas específicas e nas necessidades do mercado de trabalho."
  },

  Network_Engineer: {
    chave1: "Engenheiro de Redes",
    chave2: "O engenheiro de redes é um profissional altamente qualificado, responsável por projetar, implementar, monitorar, atualizar, gerenciar e solucionar problemas relacionados a redes de computadores. A sólida formação acadêmica e técnica adquirida por esses profissionais abrange diversos aspectos essenciais para garantir a eficiência e a segurança das redes.",
    chave3: `
    <ul>
        <li>Configuração avançada de roteadores e switches</li>
        <li>Administração de servidores DNS e DHCP</li>
        <li>implementação e manutenção de firewalls e sistemas de segurança</li>
        <li>Gerenciamento de redes sem fio</li>
        <li>Conhecimento avançado em protocolos de rede, como TCP/IP e VPN</li>
    </ul>`,
    chave4:"Os salários dos engenheiros de redes variam conforme a região, o porte da empresa, o nível de experiência e as habilidades específicas do profissional. De acordo com dados do site de empregos Catho, o salário médio no Brasil varia entre R$ 8.000 e R$ 15.000 por mês.",
    chave5:"Para se tornar um engenheiro de redes, é necessário concluir um curso de Engenharia de Redes, que tem duração média de cinco anos (dez semestres) e é de grau bacharelado. Durante a formação, os alunos adquirem conhecimentos teóricos e práticos que os capacitam a desempenhar todas as funções mencionadas, garantindo uma rede de computadores eficiente e segura."
  },

  Network_Administrator: {
    chave1: "Administrador de Redes",
    chave2: "O administrador de redes desempenha um papel fundamental na manutenção e segurança das redes de computadores de uma organização. Suas responsabilidades abrangem desde implementar medidas de segurança cibernética até garantir o desempenho eficiente da rede.",
    chave3: `
    <ul>
    <li>Administradores de rede precisam explicar questões técnicas de forma compreensível para não especialistas.</li>
    <li>Habilidades para identificar e resolver rapidamente problemas na rede sem prejudicar o desempenho geral.</li>
    <li>Capacidade de trabalhar sob pressão e cumprir prazos, especialmente em situações de emergência.</li>
    <li>Capacidade de ajustar-se a mudanças nos processos e técnicas de administração de rede.</li>
    <li>Colaboração eficaz com outros profissionais de TI para resolver problemas complexos na organização.</li>
    </ul>
    `,
    chave4: "O salário de um administrador de redes pode variar significativamente dependendo da localização geográfica, nível de experiência, porte da empresa e setor de atuação. No Brasil, em média, administradores de redes iniciantes podem receber entre R$ 3.000 e R$ 6.000 por mês, dependendo da região.",
    chave5: "Para se tornar um administrador de redes, é comum completar um curso técnico específico na área, com duração média de 18 meses. Esses cursos são oferecidos de forma presencial, semipresencial ou a distância (EAD), permitindo aos alunos adquirir habilidades práticas e teóricas essenciais para o trabalho na administração de redes de computadores."
  },

  Network_Specialist: {
    chave1: "Especialista em Segurança de Redes",
    chave2: "Um especialista em segurança de rede desempenha um papel crucial na proteção e manutenção da segurança dos sistemas de uma organização. Este profissional adquire, configura e mantém tanto hardware quanto software para garantir a integridade e a segurança da rede. Trabalhando tanto em ambientes de escritório quanto remotamente, suas responsabilidades abrangem diversas áreas essenciais",
    chave3: ` - Instalação de Software de Seguranç Implementação de antivírus, firewalls e criptografia para prevenir explorações maliciosas.
   <ul>
        <li>Auditorias de Segurança Regulare Realização de auditorias periódicas para identificar vulnerabilidades na rede.</li>
        <li>Recuperação de Desastre Planejamento e execução de estratégias para recuperar sistemas comprometidos.</li>
        <li>Coleta de Evidências de Crimes Cibernético Preservação e análise forense de dados para coletar evidências de atividades criminosas.</li>
        <li>Implantação e Teste de Sistemas de Seguranç Avaliação e correção de brechas de segurança.</li>
        <li>Manutenção Contínu Monitoramento do desempenho do firewall, atualização de software, implementação de patches de segurança.</li>
        <li>Relatórios de Desempenho e Recomendaçõe Geração de relatórios sobre a segurança da rede e recomendações para melhorias.</li>
    </ul>`,
    
    chave4: "A média salarial para Especialista de Redes no Brasil é de R$ 7.611,00, com variação entre R$ 5.565,00 a R$ 10.527,00, dependendo da localização e qualificação profissional.",
    chave5: "Para se tornar um especialista em segurança de rede, é comum passar de 2 a 4 anos em uma graduação em segurança da informação, ciência da computação ou áreas afins, seguido de cerca de 1 ano em uma pós-graduação. Esses programas fornecem uma base sólida em segurança da informação e habilidades técnicas necessárias para proteger redes contra ameaças digitais."
  },

  Data_Scientist: {
    chave1: "Cientista de Dados",
    chave2: "Um Cientista de Dados é responsável por aplicar conhecimentos em ciência da computação, modelagem preditiva, estatísticas, matemática e análise de negócios. Este profissional representa uma progressão dos papéis de Analista de Negócios ou Analista de Dados, contribuindo significativamente para projetos estratégicos de análise de dados e decisões empresariais.",
    chave3: `
    <ul>
    <li>Aptidão por Matemática e Estatística: Fundamental para dominar as ferramentas da profissão.<li>
    <li>Adaptabilidade: Importante para responder rapidamente a diferentes cenários e antecipar crises.<li>
    <li>Atualização constante: Crucial para acompanhar as novas tendências tecnológicas.<li>
    <li>Criatividade e Empreendedorismo: Valorizados para solucionar problemas de forma inovadora.<li>
    </ul>`,
    chave4: "A média salarial do cargo de Cientista de Dados no Brasil é de R$ 10.250 por mês. A remuneração pode variar entre R$ 583 e R$ 2.500 adicionais, dependendo da localização e qualificação profissional.",
    chave5: "O curso de Ciência de Dados tem duração média de seis semestres. Durante esse período, os estudantes são preparados com habilidades robustas em matemática, estatística, tecnologia da informação e ciência de dados aplicada, capacitando-os para desenvolver modelos matemáticos, realizar análises estratégicas e se manter atualizados com as novas tecnologias."
  },

  Data_Analyst: {
    chave1: "Analista de Dados",
    chave2: "Os Analistas de Dados são profissionais que traduzem dados em informações úteis para ajudar empresas a tomar melhores decisões de negócios. Utilizando diversas técnicas e ferramentas, um Analista de Dados pode determinar o preço de novos materiais, reduzir custos de transporte, detectar padrões e anomalias, agregar dados e apresentar seus resultados de forma clara e objetiva.",
    chave3: `
    <ul>
    <li>Proficiência em análise de dados e interpretação estatística.</li>
    <li>Conhecimento em ferramentas de análise de dados como Python, R, SQL, entre outras.</li>
    <li>Capacidade de comunicação clara e eficaz para explicar insights complexos de dados.</li>
    <li>Habilidade para trabalhar em equipe e colaborar com diferentes departamentos.</li>
    <li>Capacidade de identificar e resolver problemas de forma criativa.</li>
    </ul>`,
    chave4: "A média salarial do cargo de Analista de Dados no Brasil é de aproximadamente R$ 7.500 por mês. A remuneração pode variar dependendo da localização, experiência e qualificação profissional, com um adicional variável que pode chegar até R$ 2.000, variando entre R$ 500 e R$ 3.000 adicionais.",
    chave5: "Muitos analistas de dados têm pelo menos um diploma de graduação em áreas como Ciência da Computação, Estatística, Matemática, Engenharia ou áreas relacionadas. Um curso de graduação geralmente leva de 3 a 4 anos para ser concluído."
},

  Data_Technician: {
    chave1: "Técnico de Dados",
    chave2: "Um Técnico em Processamento de Dados desenvolve e documenta aplicações para desktop com acesso à web e bancos de dados. Esse profissional é especializado em projetar e desenvolver softwares aplicativos para empresas, utilizando computadores para processar informações administrativas.",
    chave3: 
`<ul>
<li>Desenvolver e documentar aplicações de software.</li>
<li>Projetar softwares aplicativos para empresas.</li>
<li>Utilizar computadores no processamento de informações para fins administrativos.</li>
<li>Conhecer hardware e software para trabalhar com programas e linguagens computacionais.</li>
<li>Ensinar a máquina a trabalhar de acordo com as necessidades dos usuários.</li>
<li>Trabalhar na operação de sistemas, instalando software e administrando o computador e seus periféricos.</li>
<li>Programar aplicações para implementar os projetos dos analistas.</li>
 </ul>`,
 chave4: "Atualmente, um Técnico de Dados no Brasil ganha, em média, R$ 2.081,00 por mês. A carreira pode evoluir, e muitos profissionais que começam como Técnicos de ADSL ou em outras funções técnicas podem se tornar Técnicos em Telecomunicações ou ocupar outras posições avançadas na área de tecnologia.",
 chave5: "Para se formar como Técnico de Dados, é necessário completar um curso que geralmente tem uma carga horária total de aproximadamente 3.000 horas, o que normalmente equivale a um período médio de estudo de 3 anos. Durante esse tempo, os estudantes aprendem a operar sistemas, instalar software, administrar computadores e seus periféricos, além de desenvolver habilidades avançadas em programação de aplicações e manipulação de dados."
}
};

var resultado = localStorage.getItem("chave");
switch(resultado){
    case "DevOps Engineer":
        document.getElementById("name").innerHTML = profissoes.DevOps_Engineer.chave1;
        document.getElementById('descrição').innerHTML = profissoes.DevOps_Engineer.chave2;
        document.getElementById('habilidades').innerHTML = profissoes.DevOps_Engineer.chave3;
        document.getElementById('salario').innerHTML = profissoes.DevOps_Engineer.chave4;
        document.getElementById('formacao').innerHTML = profissoes.DevOps_Engineer.chave5;


        break;

    case "Data Engineer":
        document.getElementById("name").innerHTML = profissoes.Data_Engineer.chave1;
        document.getElementById('descrição').innerHTML = profissoes.Data_Engineer.chave2;
        document.getElementById('habilidades').innerHTML = profissoes.Data_Engineer.chave3;
        document.getElementById('salario').innerHTML = profissoes.Data_Engineer.chave4;
        document.getElementById('formacao').innerHTML = profissoes.Data_Engineer.chave5;


        break;

    case "Software Developer":
        console.log(resultado)
        document.getElementById("name").innerHTML = profissoes.Software_Developer.chave1;
        document.getElementById('descrição').innerHTML = profissoes.Software_Developer.chave2;
        document.getElementById('habilidades').innerHTML = profissoes.Software_Developer.chave3;
        document.getElementById('salario').innerHTML = profissoes.Software_Developer.chave4;
        document.getElementById('formacao').innerHTML = profissoes.Software_Developer.chave5;


        break;

    case "Web Designer":
        document.getElementById("name").innerHTML = profissoes.Web_Designer.chave1;
        document.getElementById('descrição').innerHTML = profissoes.Web_Designer.chave2;
        document.getElementById('habilidades').innerHTML = profissoes.Web_Designer.chave3;
        document.getElementById('salario').innerHTML = profissoes.Web_Designer.chave4;
        document.getElementById('formacao').innerHTML = profissoes.Web_Designer.chave5;


        break;

    case "Graphic Designer":
        document.getElementById("name").innerHTML = profissoes.Graphic_Designer.chave1;
        document.getElementById('descrição').innerHTML = profissoes.Graphic_Designer.chave2;
        document.getElementById('habilidades').innerHTML = profissoes.Graphic_Designer.chave3;
        document.getElementById('salario').innerHTML = profissoes.Graphic_Designer.chave4;
        document.getElementById('formacao').innerHTML = profissoes.Graphic_Designer.chave5;


        break;

    case "Creative Designer":
        document.getElementById("name").innerHTML = profissoes.Creative_Designer.chave1;
        document.getElementById('descrição').innerHTML = profissoes.Creative_Designer.chave2;
        document.getElementById('habilidades').innerHTML = profissoes.Creative_Designer.chave3;
        document.getElementById('salario').innerHTML = profissoes.Creative_Designer.chave4;
        document.getElementById('formacao').innerHTML = profissoes.Creative_Designer.chave5;


        break;

    case "Network Engineer":
        document.getElementById("name").innerHTML = profissoes.Network_Engineer.chave1;
        document.getElementById('descrição').innerHTML = profissoes.Network_Engineer.chave2;
        document.getElementById('habilidades').innerHTML = profissoes.Network_Engineer.chave3;
        document.getElementById('salario').innerHTML = profissoes.Network_Engineer.chave4;
        document.getElementById('formacao').innerHTML = profissoes.Network_Engineer.chave4;


        break;

    case " Network Administrator":
        document.getElementById("name").innerHTML = profissoes.Network_Administrator.chave1;
        document.getElementById('descrição').innerHTML = profissoes.Network_Administrator.chave2;
        document.getElementById('habilidades').innerHTML = profissoes.Network_Administrator.chave3;
        document.getElementById('salario').innerHTML = profissoes.Network_Administrator.chave4;
        document.getElementById('formacao').innerHTML = profissoes.Network_Administrator.chave5;


        break;

    case "Network Specialist":
        document.getElementById("name").innerHTML = profissoes.Network_Specialist.chave1;
        document.getElementById('descrição').innerHTML = profissoes.Network_Specialist.chave2;
        document.getElementById('habilidades').innerHTML = profissoes.Network_Specialist.chave3;
        document.getElementById('salario').innerHTML = profissoes.Network_Specialist.chave4;
        document.getElementById('formacao').innerHTML = profissoes.Network_Specialist.chave5;


        break;

    case "Data Scientist":
        document.getElementById("name").innerHTML = profissoes.Data_Scientist.chave1;
        document.getElementById('descrição').innerHTML = profissoes.Data_Scientist.chave2;
        document.getElementById('habilidades').innerHTML = profissoes.Data_Scientist.chave3;
        document.getElementById('salario').innerHTML = profissoes.Data_Scientist.chave4;
        document.getElementById('formacao').innerHTML = profissoes.Data_Scientist.chave5;


        break;

    case "Data Analyst":
        document.getElementById("name").innerHTML = profissoes.Data_Analyst.chave1;
        document.getElementById('descrição').innerHTML = profissoes.Data_Analyst.chave2;
        document.getElementById('habilidades').innerHTML = profissoes.Data_Analyst.chave3;
        document.getElementById('salario').innerHTML = profissoes.Data_Analyst.chave4;
        document.getElementById('formacao').innerHTML = profissoes.Data_Analyst.chave5;


        break;

    case "Data Technician":
        document.getElementById("name").innerHTML = profissoes.Data_Technician.chave1;
        document.getElementById('descrição').innerHTML = profissoes.Data_Technician.chave2;
        document.getElementById('habilidades').innerHTML = profissoes.Data_Technician.chave3; 
        document.getElementById('salario').innerHTML = profissoes.Data_Technician.chave4; 
        document.getElementById('formacao').innerHTML = profissoes.Data_Technician.chave5; 


        break;
}
// Seleciona o elemento do botão hambúrguer
const hamburger = document.querySelector(".hamburger"); 

// Seleciona o elemento da barra de navegação
const nav = document.querySelector(".nav"); 

// Adiciona um evento de clique ao hambúrguer para abrir/fechar o menu
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active"); // Alterna a classe 'active' para abrir/fechar
});

// Obter os dados das áreas do localStorage
const designVsDevelopment = parseFloat(localStorage.getItem('designVsDevelopment') || 0);
const networksVsData = parseFloat(localStorage.getItem('networksVsData') || 0);

// Calcular o total das áreas
const totalAreas = Math.abs(designVsDevelopment) + Math.abs(networksVsData);

// Calcular as porcentagens para cada área
const percentages = {
    "Design": Math.abs(designVsDevelopment) / totalAreas * 100,
    "Desenvolvimento": Math.abs(-designVsDevelopment) / totalAreas * 100,
    "Redes": Math.abs(networksVsData) / totalAreas * 100,
    "Dados": Math.abs(-networksVsData) / totalAreas * 100
};

// Dados do gráfico radial
const series = Object.values(percentages);
const labels = Object.keys(percentages);

// Configuração do gráfico radial
const options = {
    series: series,
    chart: {
        height: 350,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: '30%',
                background: 'transparent',
                image: undefined,
            },
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    show: false,
                }
            },
            barLabels: {
                enabled: true,
                useSeriesColors: true,
                fontSize: '16px',
                formatter: function (seriesName, opts) {
                    return seriesName + ":  " + series[opts.seriesIndex].toFixed(2) + "%";
                },
            },
        }
    },
    labels: labels,
    colors: [
        '#008FFB',
        '#00E396',
        '#FEB019',
        '#FF4560',
        '#775DD0'
    ],
    yaxis: {
        max: 100 // Limita a escala do eixo y para um máximo de 12 pontos
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom'
            }
        }
    }]
};

// Renderizar o gráfico radial
const chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

