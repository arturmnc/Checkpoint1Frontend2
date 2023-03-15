let nomeInserido = document.getElementById("nome");
let botaoCapturado = document.getElementById("submit");
let urlInserido = document.getElementById("url");
let descricaoInserida = document.getElementById("descricao");

nomeInserido.addEventListener("focus", function (){
  nomeInserido.style.backgroundColor= "#ff9ea0";
})

nomeInserido.addEventListener("keyup", function (){
  nomeInserido.style.backgroundColor= "";

  let nomeValidacao = document.getElementById("nomeValidacao");

  if(nomeInserido.value.length >= 3){
    nomeValidacao.innerText = ""
    nomeInserido.style.backgroundColor = "#9ea1ff"
  
      botaoCapturado.removeAttribute("disabled");
    
  }else {
    nomeValidacao.innerText = "Campo obrigatório";
    nomeValidacao.style.color = "#171717";
    nomeValidacao.style.fontWeight = "bold";
    botaoCapturado.setAttribute("disabled", true);
  }
})



urlInserido.addEventListener("focus", function (){
  urlInserido.style.backgroundColor= "#ff9ea0";
})

urlInserido.addEventListener("keyup", function (){
  urlInserido.style.backgroundColor= "";

  let urlValidacao = document.getElementById("urlValidacao");

  if(urlInserido.value.length >= 10){
    urlValidacao.innerText = ""
    urlInserido.style.backgroundColor = "#9ea1ff"
  
      botaoCapturado.removeAttribute("disabled")

  }else {
    urlValidacao.innerText = "Campo obrigatório";
    urlValidacao.style.color = "#171717";
    urlValidacao.style.fontWeight = "bold";
    botaoCapturado.setAttribute("disabled", true);
  }
})



descricaoInserida.addEventListener("focus", function (){
  descricaoInserida.style.backgroundColor= "#ff9ea0";
})

descricaoInserida.addEventListener("keyup", function (){
  descricaoInserida.style.backgroundColor= "";

  let urlValidacao = document.getElementById("descricaoValidacao");

  if(descricaoInserida.value.length >= 10){
    urlValidacao.innerText = ""
    descricaoInserida.style.backgroundColor = "#9ea1ff"
  
      botaoCapturado.removeAttribute("disabled")

  }else {
    descricaoValidacao.innerText = "Campo obrigatório";
    descricaoValidacao.style.color = "#171717";
    descricaoValidacao.style.fontWeight = "bold";
    botaoCapturado.setAttribute("disabled", true);
  }
})


let submitBtn = document.getElementById('submit');
let cardContainer = document.getElementById('cardContainer');

  submitBtn.addEventListener('click', () => {
    let nome = document.getElementById('nome').value;
    let url = document.getElementById('url').value;
    let descricao = document.getElementById('descricao').value;
    let cardDiv = document.createElement('div');
      cardDiv.classList.add('column');
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h2>${nome}</h2>
          <img src="${url}">
          <p>${descricao}</p>
        `;

        cardDiv.appendChild(card);
        cardContainer.appendChild(cardDiv);
      });