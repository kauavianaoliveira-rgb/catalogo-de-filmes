const filmes = [
    { titulo: "Vingadores", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/A4kvp7vY1BDLrrQIagRCffLKj1t.jpg", descricao: "A trama se espalha pelo espaço e pela Terra, colocando os heróis (incluindo os Vingadores, Guardiões da Galáxia, Doutor Estranho e o exército de Wakanda) em batalhas simultâneas para proteger as joias. Apesar de seus esforços heroicos e sacrifícios pessoais, Thanos consegue reunir todas as joias na Manopla do Infinito e atinge seu objetivo com um estalar de dedos, trazendo consequências devastadoras" , breve: "Guerra Infinita" },
    { titulo: "Mortal Kombat 2", imagem: "https://www.themoviedb.org/movie/931285-mortal-kombat-ii?language=pt-BR#", descricao: "Os campeões favoritos dos fãs – agora acompanhados pelo próprio Johnny Cage – são colocados uns contra os outros numa sangrenta e derradeira batalha, sem regras ou limites, para derrotar o governo sombrio de Shao Kahn." },
    { titulo: "Minecraft", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/a227F8PnXDABR1JJTuasmJmxEhf.jpg", descricao: "A história acompanha quatro desajustados (interpretados por Jason Momoa, Sebastian Eugene Hansen, Emma Myers e Danielle Brooks) que são transportados para o Overworld (Mundo Superior). Nesse bizarro país das maravilhas cúbico, eles precisam aprender a sobreviver, usar a imaginação e embarcar em uma jornada mágica com o construtor Steve (Jack Black) para conseguir voltar para casa." , breve: "Um filme" },
    { titulo: "Motoqueira Fantasma", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/vVGVlwRrvVgLPE98rwo8jo3QC2b.jpg", descricao: "é um famoso super-herói/anti-herói sobrenatural da Marvel Comics que ganhou adaptações marcantes no cinema, sendo a mais conhecida a franquia estrelada por Nicolas Cage" , breve: "Ghost rider" },
    { titulo: "Todo mundo em Panico", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/1z9haN6yiYsuv9D93H8n5yaCk8I.jpg", descricao: "A premissa central de quase todos os filmes envolve uma heroína e seus amigos se deparando com situações clássicas de grandes sucessos do cinema (como Pânico, Eu Sei o que Vocês Fizeram no Verão Passado e O Chamado), mas quebrando todas as regras do medo com piadas ácidas, referências à cultura pop e muito non-sense.", breve: "Scary movie" },
    { titulo: "Deadpool e Wolverine", imagem: "https://www.themoviedb.org/movie/533535-deadpool-wolverine?language=pt-BR#", descricao: "Um apático Wade Wilson trabalha duro na vida civil. Seus dias como mercenário moralmente flexível, Deadpool, ficaram para trás. Quando seu planeta enfrenta uma ameaça, Wade deve relutantemente vestir-se novamente com um ainda mais relutante... relutante? Mais relutante? Ele deve convencer um Wolverine relutante em... Porra. As sinopses são tão estúpidas." },
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

