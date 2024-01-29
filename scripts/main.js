let myButton = document.querySelector('.button');
let userInput1 = document.querySelector('.input_1');
let userInput2 = document.querySelector('.input_2');

function calculateBMI(nbr1, nbr2) {
    let bmi = Math.round((nbr1 / (nbr2 ** 2)) * 100) / 100
    console.log(bmi);
    if (bmi < 18.5) {
        document.querySelector(".result").innerHTML = `Votre BMI vaut ${bmi}<br>Vous êtes trop maigre! Pensez à consulter un psychiatre pour traiter votre anorexie.`
    }
    else if (bmi < 25) {
        document.querySelector(".result").innerHTML = `Votre BMI vaut ${bmi}<br>Vous êtes dans la norme.`
    }
    else if (bmi < 30) {
        document.querySelector(".result").innerHTML = `Votre BMI vaut ${bmi}<br>Vous avez quelques kilos en trop... Un régime et du sport vous feraient le plus grand bien.`
    }
    else if (bmi < 40) {
        document.querySelector(".result").innerHTML = `Votre BMI vaut ${bmi}<br>Vous êtes obèse. Pensez à consulter une diététicienne`
    }
    else {
        document.querySelector(".result").innerHTML = `Votre BMI vaut ${bmi}<br> Vous souffrez d'obésité morbide. Consultez un médecin au plus vite!`
    }
    
}

myButton.addEventListener('click', function() {
    if (userInput1.value != "" && userInput2.value != "") {
        calculateBMI(parseInt(userInput1.value) , parseFloat(userInput2.value));
    }
    else {
        document.querySelector(".result").innerHTML = "Veuillez entrer votre poids et votre taille svp"
    }
    
    userInput1.value = "";
    userInput2.value = "";
})

