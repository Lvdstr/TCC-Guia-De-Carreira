// Seleciona o elemento do botão hambúrguer
const hamburger = document.querySelector(".hamburger"); 

// Seleciona o elemento da barra de navegação
const nav = document.querySelector(".nav"); 

// Adiciona um evento de clique ao hambúrguer para abrir/fechar o menu
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active"); // Alterna a classe 'active' para abrir/fechar
});

(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();

var profissoes = {
  DevOps_Engineer: {
    chave1: "Engenheiro DevOps",
    chave2: `DevOps é um modelo de pensamento que busca harmonizar desenvolvimento e operações para otimizar a construção e entrega de software. O objetivo é eliminar obstáculos na entrega de sistemas através de um fluxo equilibrado entre todas as áreas envolvidas. Apesar de não ser algo novo, a popularização de DevOps tem transformado a maneira como empresas abordam o desenvolvimento e entrega de software.`,
    chave3: `Um Desenvolvedor DevOps de sucesso combina habilidades técnicas avançadas, como desenvolvimento de software, gerenciamento de infraestrutura e automação de processos com o domínio de ferramentas essenciais como Git, Jenkins e Docker. Além disso, é crucial possuir habilidades interpessoais fortes, incluindo comunicação eficaz, trabalho em equipe, resolução de conflitos e capacidade analítica para solucionar problemas complexos. Essa combinação permite otimizar processos, reduzir erros e promover uma cultura colaborativa e inovadora no desenvolvimento e entrega de software.`,
    chave4: "../img/b.jpeg",
  },

  Data_Engineer: {
    chave1: "Engenheiro de Dados",
    chave2: "Um Engenheiro de Dados é responsável por coletar, analisar e interpretar dados para gerar insights que guiam decisões estratégicas de negócio. Utilizando técnicas avançadas de análise e ferramentas como inteligência artificial e aprendizado de máquina, eles transformam dados brutos em informações acionáveis. Esses profissionais identificam padrões, oportunidades de otimização e constroem modelos preditivos para impulsionar o crescimento das empresas. Além disso, comunicam resultados complexos de maneira clara para diversas áreas e tomadores de decisão.",
    chave3: "Um Engenheiro de Dados precisa de habilidades técnicas em programação (Python, Java, Scala), bancos de dados (relacionais e NoSQL), e ferramentas de Big Data (Hadoop, Spark, Kafka, Elasticsearch). Domínio em engenharia de software (controle de versão, testes unitários, boas práticas de programação) e experiência com serviços de nuvem (AWS, Azure, GCP) são fundamentais para suportar operações escaláveis de processamento e armazenamento de dados.",
    chave4: "../img/e.jpg",
  },

  Software_Developer: {
    chave1: "Desenvolvedor de software",
    chave2: "Um Desenvolvedor de Software é responsável por escrever códigos e criar soluções para desenvolver, aprimorar e testar softwares. Esses profissionais trabalham em diferentes tipos de programas e sistemas, como aplicativos, sistemas operacionais, páginas da web e jogos, utilizando informações sobre o público-alvo e os objetivos da empresa para criar soluções eficazes. Eles colaboram em equipe para escrever código, realizar testes e implementar correções e melhorias conforme necessário.",
    chave3: "Para ser um Desenvolvedor de Software eficiente, é essencial dominar pelo menos uma linguagem de programação e ter conhecimento em bancos de dados (relacionais e não relacionais). Familiaridade com frameworks é importante para facilitar o desenvolvimento. Habilidades em resolução de problemas são cruciais para identificar e corrigir falhas no software. Conhecimento de metodologias ágeis como Scrum e Kanban é fundamental para o gerenciamento eficaz de projetos de desenvolvimento de software.",
    chave4: "../img/c.jpeg",

  },

  Web_Designer: {
    chave1: "Web Designer",
    chave2: "Um Web Designer cria e desenvolve layouts e interfaces para sites e plataformas digitais, adaptando-se às mudanças tecnológicas e de internet. Além de preocupar-se com a estética dos sites, eles consideram o impacto de seus projetos nas mídias digitais e sua aplicação em diferentes plataformas.",
    chave3: "Um Web Designer front-end precisa dominar HTML, CSS e Javascript para traduzir designs visuais em código funcional, responsivo e esteticamente agradável. Conhecimentos em design gráfico e usabilidade são essenciais para criar experiências intuitivas de usuário. Familiaridade com frameworks como Bootstrap e bibliotecas como jQuery é crucial para desenvolvimento eficiente e criação de sites responsivos e compatíveis com diversos dispositivos.",
    chave4: "../img/f.jpg",
  },

  Graphic_Designer: {
    chave1: "Designer Gráfico",
    chave2: "Um Designer Gráfico é responsável pela criação de elementos visuais como logotipos, layouts e imagens, tanto para mídia impressa quanto digital. Ele desenvolve identidades visuais, cria layouts para materiais impressos e digitais, como embalagens, anúncios, websites e aplicativos, garantindo uma comunicação visual eficiente e atraente.",
    chave3: `Um Designer Gráfico deve ser altamente criativo, capaz de pensar de forma original e resolver problemas de design de maneira inovadora. É essencial dominar ferramentas como Adobe Photoshop, Illustrator e InDesign. Ter conhecimento profundo de tipografia para escolher fontes e estilos adequados é crucial. Habilidades em comunicação visual, incluindo o uso eficaz de cores, formas e imagens, são fundamentais para transmitir mensagens de forma clara e impactante. Compreender os princípios de design de interface (UI) e experiência do usuário (UX) é cada vez mais importante. Ser capaz de adaptar-se às mudanças no mercado e estar atualizado com as tendências e evoluções no campo do design gráfico são habilidades essenciais para o sucesso nesta área competitiva.`,
    chave4: "../img/h.jpg",

  },

  Creative_Designer: {
    chave1: "Designer Criativo",
    chave2: "Um Designer Criativo é especializado em conceber e produzir soluções visuais inovadoras em diversas áreas do design, como gráfico, produtos, interiores, moda, entre outras. Eles criam layouts, conceitos, imagens e elementos visuais que comunicam mensagens específicas, atendendo às necessidades dos clientes ou público-alvo. Utilizam habilidades técnicas e criativas para resolver problemas de design de maneira original e impactante, colaborando frequentemente com equipes multidisciplinares.",
    chave3: `Um Designer Criativo deve possuir uma combinação única de habilidades técnicas e criativas. A criatividade é essencial para gerar ideias originais e inovadoras. Dominar ferramentas de design gráfico como Adobe Photoshop, Illustrator e InDesign é crucial para criar layouts e elementos visuais impactantes. Conhecimento profundo dos princípios do design, incluindo composição, tipografia, cor e espaço, é fundamental para garantir a eficácia visual. Capacidade de comunicação visual para transmitir mensagens de forma clara e impactante. Adaptabilidade para trabalhar com diferentes estilos de design e requisitos de projeto. Atenção aos detalhes para garantir coesão e precisão em cada elemento visual. Habilidades de colaboração para trabalhar efetivamente em equipe. Gerenciamento de tempo para cumprir prazos de projeto. Habilidade em resolver problemas de forma criativa e conhecimento das tendências atuais do design para criar trabalhos visuais de alta qualidade.`,
    chave4: "../img/i.jpg",
  },

  Network_Engineer: {
    chave1: "Engenheiro de Redes",
    chave2: "Um engenheiro de redes de computadores projeta, implementa, mantém e otimiza redes de computadores. Eles garantem a eficiência, segurança e confiabilidade das redes, lidando com a instalação de equipamentos, configuração de protocolos, monitoramento do desempenho e resolução de problemas. Também implementam políticas de segurança para proteger os dados.",
    chave3: "Um engenheiro de redes de computadores precisa ter conhecimentos técnicos em instalação e configuração de equipamentos de rede, projetar arquiteturas de rede, monitorar desempenho e resolver problemas. Devem implementar políticas de segurança, atualizar-se com novas tecnologias como SDN e computação em nuvem, e possuir habilidades analíticas, de solução de problemas, comunicação e colaboração.",
    chave4: "../img/a.jpeg",

  },

  Network_Administrator: {
    chave1: "Administrador de Redes",
    chave2: "Um administrador de redes gerencia e mantém a infraestrutura de TI, especialmente redes de computadores. Suas tarefas incluem monitoramento, configuração, atualização de equipamentos de rede, implementação de segurança, resolução de problemas de conectividade, gestão de contas de usuário e realização de backups.",
    chave3: "Um administrador de redes precisa de conhecimentos em configuração de equipamentos de rede, protocolos, administração de servidores e segurança de rede. Habilidades de diagnóstico e solução de problemas são essenciais. Formação em TI e certificações como CompTIA Network+ e CCNA são importantes, assim como conhecimentos em sistemas operacionais como Windows e Linux.",
    chave4: "../img/g.jpg",

  },

  Network_Specialist: {
    chave1: "Especialista de Redes",
    chave2: "Um Especialista em Redes é responsável por projetar, implementar, manter e otimizar redes de computadores. Isso inclui configurar e gerenciar dispositivos como roteadores, switches e firewalls para garantir a conectividade e segurança da rede. Eles resolvem problemas de rede, implementam tecnologias emergentes e elaboram políticas de segurança e procedimentos operacionais para manter a infraestrutura de rede funcionando de maneira eficiente e segura.",
    chave3: `Um Especialista em Redes deve possuir habilidades técnicas avançadas, incluindo configuração de dispositivos de rede e resolução de problemas. Eles são responsáveis pela instalação e configuração de software de segurança como antivírus, firewalls e criptografia para prevenir ataques cibernéticos. Realizam auditorias de segurança regularmente, monitoram o tráfego de rede e identificam possíveis ameaças. Em situações de desastre, como ataques de ransomware, ajudam na recuperação e na elaboração de planos de restauração para garantir a continuidade das operações da organização.`,
    chave4: "../img/k.jpg",

 
  },

  Data_Scientist: {
    chave1: "Cientista de Dados",
    chave2: "Um Cientista de Dados é especializado em analisar e interpretar grandes volumes de dados para extrair insights valiosos que auxiliam na tomada de decisões estratégicas nas empresas. Ele coleta dados de diversas fontes, os transforma em formatos úteis e aplica técnicas estatísticas avançadas para identificar padrões e tendências. Além disso, desenvolve sistemas de coleta de dados e colabora com equipes de TI e gerência para otimizar processos e melhorar a eficiência operacional.",
    chave3: `Um Cientista de Dados deve possuir um conjunto diversificado de habilidades técnicas e analíticas. Dominar linguagens de programação como Python, R ou SQL para manipular e analisar dados é essencial. Conhecimento em técnicas avançadas de análise estatística e machine learning para resolver problemas complexos de negócios. Capacidade de interpretar dados e comunicar insights de forma clara e eficaz para diferentes públicos. Habilidade de trabalhar em equipe e colaborar com profissionais de diversas áreas. Flexibilidade para se adaptar a novas tecnologias e metodologias analíticas. Foco em detalhes para garantir a precisão dos resultados. Capacidade de lidar com grandes volumes de dados e identificar oportunidades para melhorar o desempenho empresarial.`,
    chave4: "../img/j.jpg",
  },

  Data_Analyst: {
    chave1: "Analista de Dados",
    chave2: "Um Analista de Dados desempenha um papel fundamental na coleta, limpeza e análise de dados para transformá-los em insights acionáveis. Isso inclui utilizar evidências matemáticas para mensurar indicadores de negócios, como o desempenho de vendas em diferentes regiões, e utilizar esses insights para orientar estratégias de negócios, como o envio de cupons de desconto para estimular o consumo.",
    chave3: `Para ter sucesso como Analista de Dados, é essencial possuir habilidades técnicas em ferramentas como Python, SQL e planilhas eletrônicas, que são fundamentais para conduzir análises detalhadas e criar visualizações eficazes. Além disso, compreender conceitos matemáticos e estatísticos é crucial para interpretar corretamente os dados e aplicar metodologias analíticas adequadas. A capacidade de programação, especialmente em Python ou R, é essencial para desenvolver dashboards interativos e realizar análises estatísticas complexas. Conhecimentos em ferramentas de banco de dados como MySQL são necessários para armazenar e gerenciar grandes volumes de dados de forma eficiente.`,
    chave4: "../img/g.jpg",
  },

  Data_Technician: {
    chave1: "Técnico de Dados",
    chave2: "Um Técnico de Dados é responsável por gerenciar, manter e analisar dados para garantir sua precisão e qualidade. Isso inclui o desenvolvimento e manutenção de bancos de dados e sistemas de dados, além da análise para identificar padrões e tendências. Eles oferecem suporte técnico para atividades como design de bancos de dados, integração e mineração de dados, combinando habilidades de programação, design de banco de dados e análise de dados.",
    chave3: "Para ser eficaz, um Técnico de Dados precisa de habilidades sólidas em análise de dados utilizando ferramentas como SQL, Python, R ou outras linguagens relevantes. É crucial ter conhecimentos em bancos de dados e armazenamento de dados para gerenciar grandes volumes de informações de maneira eficiente. Habilidades em ferramentas de visualização como Tableau ou Power BI são essenciais para comunicar insights de forma clara. Além disso, habilidades comportamentais como comunicação clara, pensamento analítico e resolução de problemas são fundamentais para explicar resultados e enfrentar desafios analíticos.",
    chave4: "../img/ol.jpg",
  }
};

var modal = document.getElementById('myModal');
var btns = document.getElementsByClassName("openModal");
var span = document.getElementsByClassName("close")[0];

// Verifique se o modal existe
if (modal) {
  console.log("Modal encontrado:", modal);
} else {
  console.error("Modal não encontrado!");
}

// Verifique se os botões para abrir o modal existem
if (btns.length > 0) {
  console.log("Botões openModal encontrados:", btns);
} else {
  console.error("Botões openModal não encontrados!");
}

// Verifique se o botão de fechar o modal existe
if (span) {
  console.log("Botão close encontrado:", span);
} else {
  console.error("Botão close não encontrado!");
}

// Função para abrir o modal com o valor da função modalContent
function openModal(valor) {
  console.log("Abrindo modal com valor:", valor);
  modal.style.display = "block";
  modalContent(valor);
}

// Função para fechar o modal
span.onclick = function() {
  closeModal();
};

// Função para fechar o modal ao clicar fora dele
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
};

// Função para exibir informações da profissão no modal
function modalContent(valor) {
  const profissao = profissoes[Object.keys(profissoes)[valor - 1]];
  console.log("Conteúdo do modal:", profissao);
  document.getElementById("name").innerHTML = profissao.chave1;
  document.getElementById('descrição').innerHTML = profissao.chave2;
  document.getElementById('habilidades').innerHTML = profissao.chave3;
  document.getElementById('image').src = profissao.chave4;
}

// Adicionar eventos de clique aos botões para abrir o modal com informações da profissão correspondente
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var valor = this.getAttribute("data-valor");
    openModal(valor);
  });
}

function closeModal() {
  modal.classList.add('fadeOut'); // Adiciona a classe 'fadeOut' para iniciar a animação reversa
  setTimeout(function() {
    modal.style.display = "none"; // Após a animação, oculta o modal
    modal.classList.remove('fadeOut'); // Remove a classe 'fadeOut' para que a animação possa ser aplicada novamente quando o modal for reaberto
  }, 800); // Tempo da animação em milissegundos (corresponde ao tempo definido na animação CSS)
}

// Evento de clique no botão de fechar
span.onclick = function() {
  closeModal();
};