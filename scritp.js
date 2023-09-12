



const question =[
    {
        questao:'1) - Qual das alternativas representar uma conjunção adversativa?',
        letraA:' uma , quando , desde que, porque, porquanto',
        letraB:' entretanto, todavia, mas, porém, contudo, não obstante',
        letraC:' ele , nos , quem, pois, porquanto',
        correct:' entretanto, todavia, mas, porém, contudo, não obstante'
     
                  },
    {
        questao:'2) - Quais das opções é alternativa?',
        letraA:' uma , quando , desde que, no entanto',
        letraB:' ou, ora ,uma , quer...quer , seja...seja',
        letraC:'uma vez que , sempre que, por isso ',
        correct:' ou, ora ,uma , quer...quer , seja...seja'
        
     
                  },
    {
        questao:'3) - Marque a alternativa que apresenta uma conjunção comparativa?',
        letraA:' como, assim como, tal qual , tal como, mais que, menos',
        letraB:'  todavia, entretanto , pois , assim que, porque, logo que',
        letraC:'  à medida que, à proporção que, ao passo que, quanto',
        correct:' como, assim como, tal qual , tal como, mais que, menos'
     
                  },
    {
        questao:'4) - Marque a alternativa que apresente uma conjunção final',
        letraA:' como, assim como, tal qual, tal como',
        letraB:' que, para que, afim de que , do modo que, de sorte que, porque',
        letraC:' logo que , entretanto , todavia, mas porém',
        correct:' que, para que, afim de que , do modo que, de sorte que, porque'
     
                  },
    {
        questao:'5) - Indique a alternativa que apresente conjunções proporcional',
        letraA:' à medida que, à proporção que, ao passo que, quanto',
        letraB:' embora, assim como, tal qual , tal',
        letraC:' em vez de , para que , entretanto',
        correct:' à medida que, à proporção que, ao passo que, quanto'
     
                  },
    {
        questao:'6) -Qual das alternativa apresenta conjunções consecutivas?',
        letraA:' mas, entretanto, todavia, ou ,ora, tal que ',
        letraB:' logo que, de sorte, porque, a fim de que',
        letraC:' de modo que, de maneira que, de sorte que, de forma que',
        correct:' de modo que, de maneira que, de sorte que, de forma que'
     
                  },
]


let questionIndex = 0;
let score = 0;

const questaoElement = document.querySelector('.questao');
const altElements = document.querySelectorAll('.alt');
const colocar_Nome= document.querySelector('.colocar_nome')
const mostrarCaixScore = document.querySelector('.mostr_score')

const containerIniciar= document.querySelector('.container_botao_iniciar')



function exibirPergunta() {
    
  

    const currentQuestion = question[questionIndex];
    questaoElement.textContent = currentQuestion.questao;
    altElements[0].textContent = currentQuestion.letraA;
    altElements[1].textContent = currentQuestion.letraB;
    altElements[2].textContent = currentQuestion.letraC;

    altElements.forEach((element) => {
        element.classList.remove('selected');

       
    });
   
   
 

}

function verificarResposta(respostaSelecionada) {
    const currentQuestion = question[questionIndex];
    if (respostaSelecionada === currentQuestion.correct) {
        console.log('parabens resposta correta')
        score++;
    }
    else{
        console.log('resposta incorreta')
    }

    questionIndex++;

    if (questionIndex < question.length) {
        exibirPergunta();
    } else {
        // scoreElement.textContent = `Pontuação final: ${score}`;
        console.log(score)
        verificarRespostaButton.style.display='none'
        comecarButton.style.display='block'
        mostrarScore(score)
    }
}

exibirPergunta();

const verificarRespostaButton = document.querySelector('.verificar_res');
verificarRespostaButton.addEventListener('click', () => {
    const selectedAnswer = document.querySelector('.alt.selected');
    if (selectedAnswer) {
        verificarResposta(selectedAnswer.textContent);
    }
});

const comecarButton = document.querySelector('.comecar');
comecarButton.addEventListener('click', comerçarQuestion);

function comerçarQuestion(){
   
    // const comecarButton = document.querySelector('.comecar');


    containerIniciar.style.display='none'
   const containerElementos = document.querySelector('.container').style.display='flex'
   comecarButton.style.display='none'
//    mostrarCaixScore.style.display='none'
   
   verificarRespostaButton.style.display='block'



   questionIndex = 0;
   score = 0;
   mostrarCaixScore.textContent = '';
   exibirPergunta();
  
}

const voltarButton = document.querySelector('.volt_btn');
voltarButton.addEventListener('click', () => {
    if (questionIndex > 0) {
        questionIndex--;
        
        exibirPergunta();
        scoreElement.textContent = '';
    }
});

altElements.forEach((altElement) => {
    altElement.addEventListener('click', () => {
        altElements.forEach((element) => {
            element.classList.remove('selected');
        });
        altElement.classList.add('selected');
    });

    
});



function mostrarScore(score){
    
    mostrarCaixScore.style.display='block'
    containerIniciar.style.display='flex'
    colocar_Nome.style.display='none'
    const pegarNome = document.querySelector('.name_Person').value
    // const containerElementos = document.querySelector('.container').style.display='none'
    console.log(pegarNome)
    // mostrarCaixScore.innerHTML=`Você acertou ${score}`

    if(score>=4){
       
        console.log('você estar na média parabéns')
        mostrarCaixScore.setAttribute('class','otimo')
        mostrarCaixScore.innerHTML=`excelente  ${pegarNome} você acertou "${score}"  `
    }
    
    else if(score>=2){
        
        mostrarCaixScore.setAttribute('class','media')
        mostrarCaixScore.innerHTML=`parabéns ${pegarNome} você acertou "${score}" `
    }
    
    
    else if (score<=1){
       
        mostrarCaixScore.setAttribute('class','ruim')
        mostrarCaixScore.innerHTML=`péssimo ${pegarNome} você acertou "${score}" `
    }
}