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

