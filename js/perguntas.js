function showLoadingScreen() {
    // Cria os elementos HTML
    var loadingContainer = document.createElement('div');
    loadingContainer.className = 'loading-container';

    var spinner = document.createElement('div');
    spinner.className = 'spinner';

    var loadingText = document.createElement('p');
    loadingText.textContent = 'Gerando resultado...';

    // Adiciona os elementos ao container
    loadingContainer.appendChild(spinner);
    loadingContainer.appendChild(loadingText);

    // Adiciona o container ao corpo do documento
    document.body.appendChild(loadingContainer);

    // Espera 3 segundos e redireciona para outra página
    setTimeout(function() {
        window.location.href = 'resultado.html'; // Substitua "a.html" pela URL desejada
    }, 3000);
}



// JavaScript
window.onload = function() {
    // Obtenha o modal
    var modal = document.getElementById("myModal");

    // Obtenha o elemento <span> que fecha o modal
    var span = document.getElementsByClassName("close")[0];

    // Abra o modal
    modal.style.display = "block";

    // Quando o usuário clicar no <span> (x), feche o modal
    span.onclick = function() {
        modal.classList.add('fadeOut'); // Aplica a animação de fechamento
        setTimeout(function() {
            modal.style.display = "none"; // Remove o modal do DOM após a animação
            modal.classList.remove('fadeOut'); // Remove a classe de animação
        }, 500); // Tempo correspondente à duração da animação em milissegundos
    }

    // Quando o usuário clicar fora do modal, feche-o
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.add('fadeOut'); // Aplica a animação de fechamento
            setTimeout(function() {
                modal.style.display = "none"; // Remove o modal do DOM após a animação
                modal.classList.remove('fadeOut'); // Remove a classe de animação
            }, 500); // Tempo correspondente à duração da animação em milissegundos
        }
    }
}





document.getElementById('progressBar').style.width = '4.1667%';
        document.getElementById('progressBar').innerText = '1 / 24';

        function incrementProgress() {
            var progressBar = document.getElementById('progressBar');
            var currentValue = parseInt(progressBar.style.width) || 0;

            if (currentValue < 100) {
                currentValue += (100 / 24); // Incrementa a largura da barra de acordo com o número total de perguntas
                progressBar.style.width = currentValue + '%'; // Ajusta a largura da barra
                progressBar.innerText = `${Math.round(currentValue)}%`; // Atualiza o texto da barra
            }
        }
    
        let designVsDevelopment = 0;
        let networksVsData = 0;

    function ajustarMetricas(resposta, area) {
    let valor = 0;

    // Define valores baseados na resposta
    switch (resposta) {
        case "Concordo Plenamente":
            valor = 1;
            break;
        case "Concordo Parcialmente":
            valor = 0.5;
            break;
        case "Discordo Parcialmente":
            valor = -0.5;
            break;
        case "Discordo Plenamente":
            valor = -1;
            break;
    }

    // Ajusta a métrica conforme a área associada
    if (area === "design") {
        designVsDevelopment -= valor; // "design" é negativo
    } else if (area === "developers") {
        designVsDevelopment += valor; // "desenvolvimento" é positivo
    } else if (area === "redes") {
        networksVsData += valor; // "redes" é positivo
    } else if (area === "dados") {
        networksVsData -= valor; // "dados" é negativo
    }

    // Limita as métricas entre -12 e +12
    designVsDevelopment = Math.max(Math.min(designVsDevelopment, 12), -12);
    networksVsData = Math.max(Math.min(networksVsData, 12), -12);
}


        let dicionario = [
            `Você gosta de criar interfaces visualmente atraentes e intuitivas?`,

            `Você se interessa por tendências modernas de design e estética digital?`,

            `Você prefere trabalhar em projetos que envolvem criatividade e design gráfico?`,
            
             `Você se sente confortável usando ferramentas de design como Adobe Photoshop ou Figma?`,
            
             `Você gosta de melhorar a experiência do usuário por meio do design?`,
            
             `Você acha importante considerar a acessibilidade no design de interfaces?`,
            
             `Você gosta de escrever código e resolver problemas de programação?`,
            
             `Você prefere trabalhar em projetos de desenvolvimento de software?`,
            
             ` Você se sente confortável usando linguagens de programação como Python, Java ou JavaScript?`,
            
             `Você gosta de aprender novas tecnologias e frameworks de desenvolvimento?`,
            
             `Você gosta de trabalhar em equipe para criar soluções de software?`,
            
             `Você acha importante seguir boas práticas de desenvolvimento e padrões de código?`,
            
             `Você se interessa por configurar e gerenciar redes de computadores?`,
            
             ` Você gosta de trabalhar com equipamentos de rede como roteadores e switches?`,
            
             `Você acha interessante aprender sobre protocolos de rede como TCP/IP?`,
            
             `Você gosta de garantir a segurança e a estabilidade das redes de computadores?`,
            
             ` Você prefere trabalhar em projetos relacionados a redes e infraestrutura?`,
            
             `Você gosta de solucionar problemas de conectividade e comunicação em redes?`,
            
             ` Você se interessa por análise e interpretação de grandes conjuntos de dados?`,
            
             `Você gosta de trabalhar com ferramentas de análise de dados como Excel ou SQL?`,
            
             ` Você gosta de trabalhar em projetos de ciência de dados e engenharia de dados?`,
            
             `Você acha interessante criar relatórios e visualizações de dados?`,
            
             `Você gosta de estudar tendências e padrões em conjuntos de dados?`,
            
             `Você prefere projetos que envolvem aprendizado de máquina e inteligência artificial?`

        ];
        
		var respostas = [
        "Concordo plenamente",
        "Concordo parcialmente",
        "Discordo parcialmente",
        "Discordo plenamente"
        ];
        
    	var number = 1;

        var currentValue = 1;
        var maxValue = 24;

        function incrementProgress() {
            var progressBar = document.getElementById('progressBar');
        
            if (currentValue < maxValue) {
                currentValue++; // Incrementa o valor atual
                var percentage = (currentValue / maxValue) * 100; // Calcula a porcentagem
                progressBar.style.width = `${percentage}%`; // Ajusta a largura da barra
                progressBar.innerText = `${currentValue} / ${maxValue}`; // Atualiza o texto da barra
            }
        
            if (currentValue === maxValue) { // Verifica se é a última pergunta
                // Exibe o botão quando atinge o máximo
                // Chama a função para mostrar o resultado
                progressBar.style.borderRadius = "20px";
                mostrarResultado();
            }
        }
        
        function trocarConteudo(value) {
            const resposta = document.getElementById(`button${value}`).innerText;
            const currentArea = calcCurrentArea(currentValue);
        
            // Ajusta métricas com base na resposta do usuário e área atual
            ajustarMetricas(resposta, currentArea);
        
            // Atualiza métricas e incrementa progresso
            incrementProgress(); // Chamada para atualizar a barra de progresso
        
            document.querySelector("#titulo").innerText = "PERGUNTA " + currentValue;
            document.querySelector("#sinopse").innerHTML = dicionario[currentValue - 1];
        
            // Exibe o botão "Voltar" se não for a primeira pergunta
            if (currentValue > 1) {
                document.getElementById("voltarButton").style.display = "block";
            }
        }
        
        function voltarConteudo() {
            if (currentValue > 1) {
                // Decrementa o número da pergunta atual
                currentValue--;
                const respostaAnterior = respostas[currentValue - 1]; // Obtém a resposta anterior
                const currentArea = calcCurrentArea(currentValue);
        
                // Ajusta métricas removendo o efeito da resposta anterior
                ajustarMetricas(respostaAnterior, currentArea, false);
        
                // Atualiza a barra de progresso
                var progressBar = document.getElementById('progressBar');
                var percentage = (currentValue / maxValue) * 100;
                progressBar.style.width = `${percentage}%`;
                progressBar.innerText = `${currentValue} / ${maxValue}`;
        
                // Atualiza o conteúdo da pergunta
                document.querySelector("#titulo").innerText = "PERGUNTA " + currentValue;
                document.querySelector("#sinopse").innerHTML = dicionario[currentValue - 1];
        
                // Esconde o botão "Voltar" se for a primeira pergunta
                if (currentValue === 1) {
                    document.getElementById("voltarButton").style.display = "none";
                }
            }
        }
function calcularAreaPrincipalESecundaria() {
    const absDesignVsDevelopment = Math.abs(designVsDevelopment);
    const absNetworksVsData = Math.abs(networksVsData);

    let primaryArea, secondaryArea;

    // Determina a área principal com base na métrica dominante
    if (absDesignVsDevelopment >= absNetworksVsData) {
        primaryArea = designVsDevelopment >= 0 ? "development" : "design";

        // Se a métrica oposta está perto do neutro, define uma área neutra
        if (absNetworksVsData < 0.85) {
            secondaryArea = "neutral"; // Opção neutra para carreiras
        } else {
            secondaryArea = networksVsData >= 0 ? "networks" : "data";
        }
    } else {
        primaryArea = networksVsData >= 0 ? "networks" : "data";

        // Se a métrica oposta está perto do neutro, define uma área neutra
        if (absDesignVsDevelopment < 0.85) {
            secondaryArea = "neutral"; // Opção neutra para carreiras
        } else {
            secondaryArea = designVsDevelopment >= 0 ? "development" : "design";
        }
    }

    return { primaryArea, secondaryArea };
}

function mostrarResultado() {
    const { primaryArea, secondaryArea } = calcularAreaPrincipalESecundaria();

    const careerMatrix = {
        "development": {
            "networks": "DevOps Engineer",
            "data": "Data Engineer",
            "neutral": "Software Developer"
        },
        "design": {
            "networks": "Web Designer",
            "data": "Graphic Designer",
            "neutral": "Creative Designer"
        },
        "networks": {
            "development": "Network Engineer",
            "design": "Network Designer",
            "neutral": "Network Specialist"
        },
        "data": {
            "development": "Data Scientist",
            "design": "Data Analyst",
            "neutral": "Data Technician"
        }
    };

    const carreira = careerMatrix[primaryArea][secondaryArea] || careerMatrix[primaryArea]["neutral"];
    
    if (!carreira) {
        alert('Ops, profissão não encontrada. Por favor, tente novamente.');
        return;
    }
    
    // Salva os resultados no localStorage
    localStorage.setItem("chave", carreira);
    localStorage.setItem("designVsDevelopment", designVsDevelopment);
    localStorage.setItem("networksVsData", networksVsData);

    showLoadingScreen();
}

document.getElementById("resultadoButton").onclick = mostrarResultado;

// funções vini

function calcCurrentArea(currentQuestion){

    let areas = [
    "design",
    "developers",
    "redes",
    "dados"
    ];

    let indexArea = (""+(currentQuestion/6)).split(".")[0];
    return areas[indexArea];
}

