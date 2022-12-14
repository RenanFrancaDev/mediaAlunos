const $nomeAluno = document.getElementById('name');
const $nota1 = document.getElementById('n1');
const $nota2 = document.getElementById('n2');
const $nota3 = document.getElementById('n3');
const $nota4 = document.getElementById('n4');
const $table = document.getElementById('table-body');
const arrAlunos = getAlunosLocalStorage();



     function addAluno(nome, n1, n2, n3, n4, save = 1){
    
    
        if ($nota1.value > 10 || $nota2.value > 10 || $nota3.value > 10 || $nota4.value > 10 ){
            alert("Verificar entrada de Notas")
            return;
        }
    
    

        const alunoNotas = document.createElement("tr")
        alunoNotas.classList.add("aluno");

        const alunoNome = document.createElement("td");
        alunoNome.classList.add("aluno-n1")
        alunoNome.textContent = nome || $nomeAluno.value;
        alunoNotas.appendChild(alunoNome);

    

        const nota1 = document.createElement("td");
        nota1.classList.add("aluno-n1")
        nota1.textContent = n1 || $nota1.value;
        alunoNotas.appendChild(nota1);

        const nota2 = document.createElement("td");
        nota2.classList.add("aluno-n2")
        nota2.textContent = n2 || $nota2.value;
        alunoNotas.appendChild(nota2);

        const nota3 = document.createElement("td");
        nota3.classList.add("aluno-n3")
        nota3.textContent = n3 || $nota3.value;
        alunoNotas.appendChild(nota3);

        const nota4 = document.createElement("td");
        nota4.classList.add("aluno-n4")
        nota4.textContent = n4 || $nota4.value;
        alunoNotas.appendChild(nota4);

        const media = document.createElement("td");
        media.classList.add("aluno-m")
        media.textContent = "";
        alunoNotas.appendChild(media);

        const resultadoFinal = document.createElement("td");
        resultadoFinal.classList.add("aluno-resultado")
        resultadoFinal.textContent = "";
        alunoNotas.appendChild(resultadoFinal);

        if(save > 0){

        arrAlunos.push({
            nome: alunoNome.textContent,
            nota1: nota1.textContent,
            nota2: nota2.textContent,
            nota3: nota3.textContent,
            nota4: nota4.textContent,
        });
    }

        setAlunosData(arrAlunos);

        $table.appendChild(alunoNotas);


    
        select();
        $nomeAluno.value = ""
        $nota1.value = ""
        $nota2.value = ""
        $nota3.value = ""
        $nota4.value = ""

    }



   
    

function select() {
        'use strict'
        var trs = document.getElementsByClassName('aluno');

        
        for(var i = 0; i < trs.length; i++){
            var linhaAluno = trs[i];
            var tds = linhaAluno.querySelectorAll('td');
            var notas = agrupaNota(tds);
            
            var media = calcularMedia.apply(this, notas);
            
            linhaAluno.querySelector('.aluno-m').textContent = media.toFixed(2);

            if(media >= 6){
                linhaAluno.querySelector('.aluno-resultado').textContent = "Aprovado"
            }else{
                linhaAluno.querySelector('.aluno-resultado').textContent = "Reprovado"
            }
            
        }

        function pegaNota(td){
            return parseFloat(td.textContent);

        }

        function agrupaNota(tds){
            var x = 0;
            var arr = []
            while(tds[x]){
                if( !isNaN(tds[x].textContent) && tds[x].textContent !== ''){
                    arr.push(parseFloat(tds[x].textContent));
                }

                x++;
            }
           
            return arr;
        }
}

//  Local Storage
function getAlunosLocalStorage (){
    const alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    
    return alunos;
  };

  function loadAlunos(){
    const alunos = getAlunosLocalStorage();

    if (alunos.length > 0){

    alunos.forEach(aluno => {
        addAluno(aluno.nome, aluno.nota1, aluno.nota2, aluno.nota3, aluno.nota4, 0)
    });

    }
    return;
  }

  loadAlunos()

    function setAlunosData(){
       localStorage.setItem('alunos', JSON.stringify(arrAlunos));
    }
    




        
       


