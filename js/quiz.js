let listaPerguntas = [];

let perguntaAtual = 0;

let pontos = 0;

let respostaSelecionada = false;



const contador = document.getElementById("contador");

const progresso = document.getElementById("progresso");

const pergunta = document.getElementById("pergunta");

const opcoes = document.getElementById("opcoes");

const resultado = document.getElementById("resultado");

const botaoInicio = document.getElementById("iniciar");




// INICIAR QUIZ

botaoInicio.addEventListener("click", function(){


    listaPerguntas = [...perguntas]
    .sort(() => Math.random() - 0.5)
    .slice(0,10);



    perguntaAtual = 0;

    pontos = 0;



    botaoInicio.style.display="none";


    carregarPergunta();


});







function carregarPergunta(){


    respostaSelecionada = false;


    let atual = listaPerguntas[perguntaAtual];



    contador.innerHTML =
    `Pergunta ${perguntaAtual + 1} de 10`;



    progresso.style.width =
    `${((perguntaAtual)/10)*100}%`;



    pergunta.innerHTML =
    atual.texto;



    opcoes.innerHTML="";



    // EMBARALHA AS ALTERNATIVAS

    let alternativas = [...atual.opcoes];

    alternativas.sort(() => Math.random() - 0.5);





    alternativas.forEach(function(item){



        let botao=document.createElement("button");


        botao.className="opcao";


        botao.innerHTML=item[0];



        botao.dataset.pontos=item[1];



        botao.onclick=function(){



            if(respostaSelecionada)
            return;



            respostaSelecionada=true;



            verificarResposta(
                botao,
                item[1],
                alternativas
            );


        };



        opcoes.appendChild(botao);



    });


}







function verificarResposta(botao,valor,alternativas){



    let botoes=document.querySelectorAll(".opcao");



    botoes.forEach(function(btn){

        btn.disabled=true;

    });





    if(valor==10){


        botao.style.background="#2ecc71";

        botao.style.color="white";


        pontos+=1;



    }
    else{


        botao.style.background="#e74c3c";

        botao.style.color="white";



        botoes.forEach(function(btn){



            let correta = alternativas.find(
                item => item[1] == 10
            );



            if(btn.innerHTML == correta[0]){


                btn.style.background="#2ecc71";

                btn.style.color="white";


            }


        });



    }




    criarBotaoProximo();


}








function criarBotaoProximo(){



    let botao=document.createElement("button");


    botao.className="btn";


    botao.innerHTML="Próxima pergunta";



    botao.onclick=function(){



        perguntaAtual++;



        if(perguntaAtual < 10){


            carregarPergunta();


        }
        else{


            finalizarQuiz();


        }



        botao.remove();



    };



    opcoes.parentElement.appendChild(botao);



}







function finalizarQuiz(){



    document.querySelector(".quiz-box")
    .style.display="none";



    progresso.style.width="100%";



    let titulo="";

    let mensagem="";




    if(pontos >= 8){


        titulo="Excelente! Você tem perfil tecnológico!";


        mensagem=`

        <p>
        Você acertou <strong>${pontos} de 10 perguntas</strong>.
        </p>


        <p>
        Você já possui bons conhecimentos de informática e tecnologia.
        </p>


        <p>
        💻 Que tal continuar aprendendo mais tecnologia no IFTM?
        </p>

        `;



    }

    else if(pontos >=5){


        titulo="Nada mal! Seu resultado foi legal!";


        mensagem=`

        <p>
        Você acertou <strong>${pontos} de 10 perguntas</strong>.
        </p>


        <p>
        Venha descobrir mais sobre esse universo da tecnologia.
        </p>


        <p>
        📚 Vem ser IFTM!
        </p>

        `;



    }

    else{


        titulo="Toda jornada começa com uma descoberta!";


        mensagem=`

        <p>
        Você acertou <strong>${pontos} de 10 perguntas</strong>.
        </p>


        <p>
        A curiosidade é o primeiro passo para aprender tecnologia.
        </p>


        <p>
        🚀 O IFTM pode ajudar você nessa jornada!
        </p>

        `;


    }



resultado.style.display="block";

    resultado.innerHTML=`

    <h2>${titulo}</h2>

    ${mensagem}


    <button class="btn" onclick="reiniciarQuiz()">
    Fazer novamente
    </button>


    `;



}







function reiniciarQuiz(){



    document.querySelector(".quiz-box")
    .style.display="block";



    resultado.innerHTML="";



    perguntaAtual=0;

    pontos=0;



    botaoInicio.style.display="inline-block";



    contador.innerHTML=
    "Pergunta 1 de 10";



    progresso.style.width="10%";



    pergunta.innerHTML=
    "Clique em começar para iniciar o desafio";



    opcoes.innerHTML="";


}