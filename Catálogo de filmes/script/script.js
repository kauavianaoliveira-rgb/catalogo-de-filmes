const filmes = [
    { titulo: "Vingadores", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/A4kvp7vY1BDLrrQIagRCffLKj1t.jpg", descricao: "A trama se espalha pelo espaço e pela Terra, colocando os heróis (incluindo os Vingadores, Guardiões da Galáxia, Doutor Estranho e o exército de Wakanda) em batalhas simultâneas para proteger as joias. Apesar de seus esforços heroicos e sacrifícios pessoais, Thanos consegue reunir todas as joias na Manopla do Infinito e atinge seu objetivo com um estalar de dedos, trazendo consequências devastadoras" , breve: "Guerra Infinita" },
    { titulo: "Backrooms", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/a1pgQeEge47xrS4jGlDwIHiieVK.jpg", descricao: "uma adaptação de terror psicológico e ficção científica baseada na famosa lenda urbana da internet creepypasta sobre uma dimensão labiríntica e desolada." ,breve: "Um Não-lugar" },
    { titulo: "Minecraft", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/a227F8PnXDABR1JJTuasmJmxEhf.jpg", descricao: "A história acompanha quatro desajustados (interpretados por Jason Momoa, Sebastian Eugene Hansen, Emma Myers e Danielle Brooks) que são transportados para o Overworld (Mundo Superior). Nesse bizarro país das maravilhas cúbico, eles precisam aprender a sobreviver, usar a imaginação e embarcar em uma jornada mágica com o construtor Steve (Jack Black) para conseguir voltar para casa." , breve: "Um filme" },
    { titulo: "Motoqueira Fantasma", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/vVGVlwRrvVgLPE98rwo8jo3QC2b.jpg", descricao: "é um famoso super-herói/anti-herói sobrenatural da Marvel Comics que ganhou adaptações marcantes no cinema, sendo a mais conhecida a franquia estrelada por Nicolas Cage" , breve: "Ghost rider" },
    { titulo: "Todo mundo em Panico", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/1z9haN6yiYsuv9D93H8n5yaCk8I.jpg", descricao: "A premissa central de quase todos os filmes envolve uma heroína e seus amigos se deparando com situações clássicas de grandes sucessos do cinema (como Pânico, Eu Sei o que Vocês Fizeram no Verão Passado e O Chamado), mas quebrando todas as regras do medo com piadas ácidas, referências à cultura pop e muito non-sense.", breve: "Scary movie" },
    { titulo: "Gente Grande", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/ppU2xJnlKdW3F01AtC9wMuXRZCg.jpg", descricao: "é uma famosa comédia americana estrelada por Adam Sandler, Kevin James, Chris Rock, David Spade e Rob Schneider" , breve: "Grown ups" },
]

const listarFilmes = document.getElementById("listarFilmes");

function mostrarFilmes(lista) {
    listarFilmes.innerHTML = ""
    lista.forEach(filme => {
        listarFilmes.innerHTML += `
        <div class="col-md-4">
          <div class="card card-filme h-100">
            <img src="${filme.imagem}" class="card-img-top">
            <div class="card-body">
              <h3>${filme.titulo}</h3>
              <p>${filme.breve}</p>
              <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}', '${filme.descricao}')">Ver detalhes</button>
            </div>
          </div>
        </div>
        `
    })
}

mostrarFilmes(filmes)

function verDetalhes(titulo, descricao) {
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    })
}

const serie = [
{ titulo: "THe boys", imagem: "https://www.themoviedb.org/tv/76479-the-boys", descricao: "Na trama, conhecemos um mundo em que super-heróis são as maiores celebridades do planeta, e rotineiramente abusam dos seus poderes ao invés de os usarem para o bem "}
    { titulo: "Spider Noir", imagem: "https://www.themoviedb.org/tv/220102-untitled-spider-man-noir-live-action-series", descricao: "O detetive particular Ben Reilly é contratado para casos simples... até que gângsteres, monstros e uma misteriosa femme fatale tecem uma teia que o obriga a confrontar seu passado como o único super-herói de Nova York: O Spider." },
    { titulo: "LA casa de papel", imagem: "https://www.themoviedb.org/tv/71446-la-casa-de-papel", descricao: "Um homem misterioso que atende pelo nome de El Profesor, está planejando o maior assalto do século. A fim de realizar o ambicioso plano ele recruta uma gangue de oito pessoas com certas habilidades que não tem nada a perder. O objetivo é infiltrar na Casa da Moeda, de modo que eles possam imprimir 2,4 bilhões de euros. Para fazer isso eles precisam de onze dias de reclusão, durante o qual eles vão ter que lidar com sessenta e sete reféns e as forças da Polícia de Elite, com cenas de muita ação e planos brilhantes de El Profesor." },
    { titulo: "Euphoria", imagem: "https://www.themoviedb.org/tv/85552-euphoria", descricao: "Um grupo de estudantes do ensino médio lida com diferentes situações típicas da idade como drogas, sexo, busca pela identidade, traumas, comportamento nas redes sociais e amizade.Sam Levinson" },
    { titulo: "Todo mundo em Panico", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/1z9haN6yiYsuv9D93H8n5yaCk8I.jpg", descricao: "A premissa central de quase todos os filmes envolve uma heroína e seus amigos se deparando com situações clássicas de grandes sucessos do cinema (como Pânico, Eu Sei o que Vocês Fizeram no Verão Passado e O Chamado), mas quebrando todas as regras do medo com piadas ácidas, referências à cultura pop e muito non-sense.", breve: "Scary movie" },
    { titulo: "Gente Grande", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/ppU2xJnlKdW3F01AtC9wMuXRZCg.jpg", descricao: "é uma famosa comédia americana estrelada por Adam Sandler, Kevin James, Chris Rock, David Spade e Rob Schneider" , breve: "Grown ups" },
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