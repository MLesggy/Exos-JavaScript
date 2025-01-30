// Exercice 1 

//Projet "Hello You"
let prenom=prompt("Saississez votre prénom")
console.log("Bonjour "+ prenom)


// Exercice 2

//Projet calculatrice
let calculette=prompt("entrez votre calcul")
let result=eval(calculette)
console.log(result)

// Exercice 3 

// Condition IF
let note=85
if (note >=90){
   console.log("A");
}else if(note >=80){
   console.log("B");
}else if (note>=70){
   console.log("C");
}else{
   console.log("D");
}

// Exercices 4 

// Condition SWITCH

let bunny="hollandlop"
switch(bunny){
    case "angora":
        console.log("je suis un lapin angora");
        break;
    case "belier":
        console.log('je suis un lapin belier');
        break;
    case "hollandlop":
        console.log("chouette, un holland lop!");
                break
    default:
        console.log("adopte un lapin plus mignon");
}

// Exercice 5

// Projet Calculette avec prompt

let nbr1=Number(prompt("entrez un chiffre"));
let operateur=prompt("entrez votre opérateur");
let nbr2= Number(prompt("entrez un deuxième nombre"));
let result=0 
switch(operateur){
    case "+": 
    result=nbr1+nbr2
    console.log("Resultat est: " + result)
    break
    case "-":
    result=nbr1-nbr2;
    console.log("Le resultat est: "+ result)
    break 
    case "*":
    result=nbr1*nbr2;
    console.log("Le resultat est: "+ result)
    case "/":
    if(nbr2/0){
        result=nbr1/nbr2;
        console.log("le resutlat est: "+ result)
    }else{
        alert("Attention nbr2<0")
    }
    break 
    default: 
    alert("attention, l'opérateur n'existe pas")
}

//Exercice 6 

// Ecrire un programme qui demande un nombre à l’utilisateur, puis qui calcule et affiche le carré de ce nombre.

let nbr=Number(prompt("Entrez un nombre"));
let carre=0
carre=nbr*nbr
console.log("Le resultat est:" + carre)

// Exercice 6 bis 
// Same exo avec switch 

let nbr=Number(prompt("Entrez un nombre"));
switch(nbr){
    case nbr==Number:
        console.log(nbr*nbr)
    case nbr !==Number:
        alert("Veuillez entrer un nombre")
}

// Exercice 7
//      Ecrire un algorithme qui demande un nombre à l’utilisateur, et l’informe ensuite si ce
//      nombre est positif ou négatif (on laisse de côté le cas où le nombre vaut zéro)
let nbr2=Number(prompt("Entrez un nombre"));
if (nbr2>0){
    document.write("positif");
}else{
    document.write("negatif");
}
