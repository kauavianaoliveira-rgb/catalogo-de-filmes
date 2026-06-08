const serie = [
{ titulo: "THe boys", imagem: "https://www.themoviedb.org/tv/76479-the-boys", descricao: "Na trama, conhecemos um mundo em que super-heróis são as maiores celebridades do planeta, e rotineiramente abusam dos seus poderes ao invés de os usarem para o bem "}
    { titulo: "Spider Noir", imagem: "https://www.themoviedb.org/tv/220102-untitled-spider-man-noir-live-action-series", descricao: "O detetive particular Ben Reilly é contratado para casos simples... até que gângsteres, monstros e uma misteriosa femme fatale tecem uma teia que o obriga a confrontar seu passado como o único super-herói de Nova York: O Spider." },
    { titulo: "LA casa de papel", imagem: "https://www.themoviedb.org/tv/71446-la-casa-de-papel", descricao: "Um homem misterioso que atende pelo nome de El Profesor, está planejando o maior assalto do século. A fim de realizar o ambicioso plano ele recruta uma gangue de oito pessoas com certas habilidades que não tem nada a perder. O objetivo é infiltrar na Casa da Moeda, de modo que eles possam imprimir 2,4 bilhões de euros. Para fazer isso eles precisam de onze dias de reclusão, durante o qual eles vão ter que lidar com sessenta e sete reféns e as forças da Polícia de Elite, com cenas de muita ação e planos brilhantes de El Profesor." },
    { titulo: "Euphoria", imagem: "https://www.themoviedb.org/tv/85552-euphoria", descricao: "Um grupo de estudantes do ensino médio lida com diferentes situações típicas da idade como drogas, sexo, busca pela identidade, traumas, comportamento nas redes sociais e amizade.Sam Levinson" },
    { titulo: "Breaking Bad", imagem: "https://www.themoviedb.org/tv/1396-breaking-bad?language=pt-BR#", descricao: "Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos." },
    { titulo: "Peaky Blinders", imagem: "https://www.themoviedb.org/tv/60574-peaky-blinders?language=pt-BR#", descricao: "Thomas Shelby e seus irmãos retornam a Birmingham depois de servir no exército britânico durante a Primeira Guerra Mundial. Os Peaky Blinders, a gangue na qual Thomas é líder, controlam a cidade de Birmingham. Mas, como as ambições de Shelby se estendem para além de Birmingham, ele planeja construir o império de negócios que criou e impedir qualquer um que atrapalhar." },
]

const listarSeries = document.getElementById("listarSeries");

function mostrarSerie(lista) {
    listarSeries.innerHTML = ""
    lista.forEach(serie => {
        listarSeries.innerHTML += `
        <div class="col-md-4">
          <div class="card card-filme h-100">
            <img src="${serie.imagem}" class="card-img-top">
            <div class="card-body">
              <h3>${serie.titulo}</h3>
              <p>${serie.breve}</p>
              <button class="btn btn-dark" onclick="verDetalhes('${serie.titulo}', '${serie .descricao}')">Ver detalhes</button>
            </div>
          </div>
        </div>
        `
    })
}

mostrarSerie(serie)

function verDetalhes(titulo, descricao) {
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    })
}