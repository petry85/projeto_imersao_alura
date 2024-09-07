function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // se campoPesquisa for uma string vazia
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome personagem</p>"
      return;
    }
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      // Convertendo a string de tags para um array (se existir)
      const tagsArray = dado.tags && typeof dado.tags === 'string' ? dado.tags.split(' ') : [];
      const tagsLowerCase = tagsArray.map(tag => tag.toLowerCase());
  
      // Verifica se o termo pesquisado está presente em algum dos campos
      if (dado.personagem.toLowerCase().includes(campoPesquisa) ||
          dado.descricao.toLowerCase().includes(campoPesquisa) ||
          tagsLowerCase.includes(campoPesquisa)) {
        // Cria um novo elemento
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.personagem}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <img src="${dado.imagem}" alt="${dado.personagem}" width="300" height="400">
          </div>
        `;
      }
    }
  
    // Se não houver resultados, exibe uma mensagem
    if (!resultados) {
      resultados = "<p>Nada foi encontrado! Personagens sendo adicionados....</p>"
    }
  
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
  }