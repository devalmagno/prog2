function asksTheUserAndIndicatesTheStation() {
    const subquestion = document.querySelector('.word_a .answer');
    console.log(subquestion)
    const station = Number(window.prompt("Digite um mês do ano [Numero] Ex.: 1 - Janeiro 2 - Fevereiro ... 12 - Dezembro", "11"));

    switch (station) {
        case 12:
            subquestion.innerHTML = `<span><b>R: </b>${station} - Dezembro: Verão</span>`;
            break;
        case 11:
            subquestion.innerHTML = `<span><b>R: </b>${station} - Novembro: Primavera</span>`;
            break;
        case 10:
            subquestion.innerHTML = `<span><b>R: </b>${station} - Outubro: Primavera</span>`;
            break;
        case 9:
            subquestion.innerHTML = `<span><b>R: </b>${station} - Setembro: Primavera</span>`;
            break;
        case 8:
            subquestion.innerHTML = `<span><b>R: </b>${station} - Agosto: Inverno</span>`;
            break;
        case 7:
            subquestion.innerHTML = `<span><b>R: </b>${station} - Julho: Inverno</span>`;
            break;
        case 6:
            subquestion.innerHTML = `<span><b>R: </b>${station} - Junho: Inverno</span>`;
            break;
        case 5:
            subquestion.innerHTML = `<span><b>R: </b>${station} - Maio: Outono</span>`;
            break;
        case 4:
            subquestion.innerHTML = `<span><b>R: </b>${station} - Abril: Outono</span>`;
            break;
        case 3:
            subquestion.innerHTML = `<span><b>R: </b>${station} - Março: Outono</span>`;
            break;
        case 2:
            subquestion.innerHTML = `<span><b>R: </b>${station} - Fevereiro: Verão</span>`;
            break;
        case 1:
            subquestion.innerHTML = `<span><b>R: </b>${station} - Janeiro: Verão</span>`;
            break;
        default:
            subquestion.innerHTML = `<span color="red"><b>Informação Incorreta.</b></span>`;
            break;
    }
}

function countToAThousand() {
    const subquestion = document.querySelector(".word_b .answer.limited_box");
    subquestion.style.height = '240px';
    subquestion.style.overflowY = "scroll";
    subquestion.style.border = "1px solid #000";
    subquestion.style.padding = "1rem";
    subquestion.innerHTML = "";

    for (let i = 1; i <= 1000; i++) {
        subquestion.innerHTML += `${i} `;
    }
}

function calculateTheGradePointAverage(e) {
    e.preventDefault();
    const grades = {
        one: Number(document.querySelector("form .grades #nota1").value),
        two: Number(document.querySelector("form .grades #nota2").value),
        three: Number(document.querySelector("form .grades #nota3").value),
        four: Number(document.querySelector("form .grades #nota4").value),
        five: Number(document.querySelector("form .grades #nota5").value),
    }
    const subquestion = document.querySelector(".sub_question.word_c .answer");
    const average = (grades.one + grades.two + grades.three + grades.five + grades.four) / 2;

    subquestion.innerHTML = `<span><b>R: </b>A média das notas é ${average}</span>`;
}

function calculateTheFatorialByGiveNumber(e) {
    e.preventDefault();
    const subquestion = document.querySelector('.sub_question.word_d .answer');
    const number = Number(document.querySelector('.sub_question.word_d form .input_box input').value);
    let fatorial = 1;

    for (let i = number; i >= 1;i--) {
        fatorial *= i; 
    }

    subquestion.innerHTML = `<span><b>R:</b>O fatorial é ${fatorial}</span>`;
}

