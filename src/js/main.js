/* # Exo 1 Boucles FOR
    ## - Creer une varaible de type array et inserez toutes les personnes de la classe
    ## - A l'aide d'une boucle for, dites `bonjour + prenom` à chaque personne du tableau
    
 */
/* let classe=["van","ali","jean","yassine","stan"];
for(let i = 0;i<=classe.length-1;i ++){
    console.log(`Bonjour ${classe[i]}`);
} */

/* - # Exo 2 Boucles FOR (let)
    ## - Dans un prompt inserés un nombre 
    ## - A l'aide d'une boucle for, affichez les nombres de 0 jusqu'au nombre que vous avez choisi. */
    /* let nombre=parseInt(prompt("inserz un nombre"));
    for(let i=0;i<=nombre;i++){
        console.log(i);
    } */

  /*   # Exercice 1 boucle FOR
- Avec une boucle for affichez le nombre de tours de la boucle entre 0 et 20 
- Affichez les chiffres et dites si c'est un nombre paire ou impaire */
/* for(let i=1;i<=20;i++){
    if(i%2==1){
        console.log(i + " est impair");
    }
    else{
        
            console.log(i + " est pair");
        }
    } */


    /* ## Exo 1 
    ## Déclarer une variable qui se nomme 'multiplicateur' valant 5
    ## Utiliser une boucle for pour créer une table de multiplication allant jusqu'a 9 et apparaissant dans la console sous le format 5 x 1 = 5 etc. (ex: 5x1 = ... 5x2 = ... 5x3 = ... jusqu'à 9) */

        let multiplicateur=5;
        for(let i=0;i<10;i++){
            console.log(multiplicateur +" x "+i +" = "+multiplicateur*i);
        }
/* - ## Exo 3
    ## Faire une boucle décendante pour les nombres pairs de 20 à 0
        ## Ex: 20-18-16, ect. */
        for(let i=20;i>=0;i=i-2){
            console.log(i);
        }

/* - ## Exo 4
    ## Créer un tableau avec les prénoms des gens de la classe
    ## Avec l'aide d'une boucle, mettre les prénoms ayant plus de 5 caractères dans un second tableau qui se nomme 'longPrenoms' */
    let tab=["Adil","Agim","Ali","Antoine","Chris","Elvis","Fanny","Haroune","Ilias D","Ilias El","Jean","Kevin","Lira","Mouna","Nasila","Nathan","Seif","Stan","Van Hoa","Yassine"];
    let tab2=[];
        for(let i=0;i<tab.length;i++){
            if(tab[i].length>5){
                tab2.push(tab[i]);
            }
        }
    console.log(tab2);
 /* - ## Exo 5
     ##  Créer un tableau qui se nomme 'sommes' avec une multitude de valeurs numérique
        let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
    ## créer un tableau qui se nomme 'grossesSommes'. Si la valeur excède 60, pousser les dans ce tableau et les retirer du tableau sommes */
    let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
    let grossesSommes=[];
   
    for(let i=0;i<sommes.length;i++){
        if(sommes[i]>60){
            grossesSommes.push(sommes[i]);
            
        }
        
    }
    for(let j=sommes.length-1;j>=0;j--){
        if(sommes[j]>60){
            sommes.splice(j,1);
        }
    }
    
    console.log(sommes);
    console.log(grossesSommes);



   /*  -  # Exo 1 Boucles FOREACH
    ## - Creer une varaible de type array et inserez toutes les personnes de la classe
    ## - A l'aide d'une boucle foreach, dites bonjour + prenom à chaque personne du tableau */
    let tab3=["Adil","Agim","Ali","Antoine","Chris","Elvis","Fanny","Haroune","Ilias D","Ilias El","Jean","Kevin","Lira","Mouna","Nasila","Nathan","Seif","Stan","Van Hoa","Yassine"];
    tab3.forEach(elemt =>{
        console.log("bonjour " +elemt);
    })

/* - # Exo 2 Boucle FOREACH
    - ## Créez un un array qui contient 5 éléments
    - ## Affichez touts les éléments a l'aide d'une boucle foreach */
let ra=["a","b","c","d","e"];
ra.forEach(element => {
    console.log(element);
});


/* - ## Exo 6
    ##  Voici un tableau : 
    let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

    ## Triez le contenu du tableau donnees en verifiant le type de chaque donnée
    ## Creez 4 Tableaux : 'typeString' , 'typeNumber' , 'typeObject' , 'typeAutre.
    ## Videz le tableau "donnees" en redistribuant avec l'aide de condition et d'une function prédéfinie trouvée sur internet dans les bons tableaux. */
    let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];
    let typeString=[];
    let typeNumber=[];
    let typeObject=[];
    let typeAutre=[];
    let stringg="a";
    let donneeslength= donnees.length;
    let compteur=0;
    donnees.forEach(elemt =>{
        if(typeof elemt==="string"){
            typeString.push(elemt);
            /* donnees.splice(compteur,compteur+1); */
            
        }
        else if(typeof elemt==="number"){
            typeNumber.push(elemt);
            /* donnees.splice(compteur,compteur+1); */
            
        }
        else if(typeof elemt==="object"){
            typeObject.push(elemt);
            /* donnees.splice(compteur,compteur+1); */
        }
        else{
            typeAutre.push(elemt);
            /* donnees.splice(compteur,compteur+1); */
        }
        compteur++;
    })
    donnees.splice(0,donneeslength);
    console.log(donnees);
    console.log(typeString);
    console.log(typeNumber);
    console.log(typeObject);
    console.log(typeAutre);
    console.log(typeof 14);
    

  /*   ## Exercice - Boucles (Foreach)

## Créer un tableau dans le quel vous devez avoir les prenoms de chaque student de la Coding School 19
## A l'aide l'un foreach, affichez les prenom des students qui commenecent par (A, F, G, I, H, L, M) en majuscule, les autres en minuscule */
let tab4=["Adil","Agim","Ali","Antoine","Chris","Elvis","Fanny","Haroune","Ilias D","Ilias El","Jean","Kevin","Lira","Mouna","Nasila","Nathan","Seif","Stan","Van Hoa","Yassine"];
tab4.forEach(element => {
    if((element.charAt(0)==("a"||"A")) || (element.charAt(0)==("f"||"F") )||(element.charAt(0)==("g"||"G")) ||(element.charAt(0)==("i"||"I")) ||(element.charAt(0)==("h"||"H")) ||(element.charAt(0)==("l"||"L"))|| (element.charAt(0)==("m"||"M") )){
        element.toUpperCase;
    }
})
console.log(tab4);

/* # Exercice 1 boucle while
- A l'aide d'un prompt, choisissez un chiffre et enregistrez la valeur dans une variable
- Déclarez une variable compteur qui commence par 0
- A l'aide d'une boucle while, incrémentez de 1 la variable compteur à chaque boucle et affichez touts les chiffres de 0 jusqu'au nombre choisis au debut dans le prompt */

let chiff=Number(prompt("donne un chiffre de 1 a 10"));
 compteur=0;

while(compteur<chiff){
    
    console.log(compteur);
    compteur++;
}

/* - # Exo 2 Boucles WHILE
    - ## Créez une variable classe avec un array
    - ## A l'aide d'un prompt, choisissez le nombre max d'étudiants dans la classe
    - ## A l'aide d'une boucle while, inserez des étudiants dans la classe tant que la classe n'est pas remplie
    - ## Après avoir rempli la classe, affichez tous les etudiants */
    let classe1=[];
    let nbremaxet=Number(prompt("quel est le nbre max detudiants"));
    compteur=1;
    while(classe1.length<nbremaxet){
        classe1.push("etudiant"+compteur);
        compteur++;
    }
    console.log(classe1);
/* - ##  Ex 03
    ## Créer un tableau de 9 prénoms 
    ## Faire une boucle sur les prénoms précédé de Bonjour tant que 9 n'est pas atteint et les affiché dans la console
    ## Astuce : let i = 0;
    ## Astuce 2 : (i < 9) */
    let class2=["a","b","c","d","e","f","g","h","i"];
    let i=0;
    while(i<9){
        console.log("bonjour "+class2[i]);
        i++;
    }

/* - ##  Exo 04
    ## Créer un tableau de 6 fruits
    ## Avec l'aide d'une boucle while vider le tableau.
    ## Utilisez fruits.length */
    let fruits=["pomme","poire","fraise","tomate","melon","dragon"];
    let longueur=fruits.length;
    console.log(fruits);
    while(longueur>0){
        fruits.shift();
        longueur--;
    }
    console.log(fruits);

/* - ##  Exo 05
    ## Créer un tableau de 4 légumes du nom de 'panierLegumes'
    ## Stocker la longueur du tableau dans une variable du nom de 'longeur'
    # Vider le tableau panierLegumes pour mettre son contenu dans un second tableau du nom de 'caisseLegumes' */
    let legum=["salade","tomate","pdt","brocoli"];
    let caisseLegumes=[];
    longueur=legum.length;
    console.log(legum);
    while(longueur>0){
        caisseLegumes.push(legum[0]);
        legum.shift();
        longueur--;
    }
    console.log(legum);
    console.log(caisseLegumes);


/* - ##  Exo6
    ##  Préparer une énigme, et faites une boucle WHILE qui va vérifier si l'utilisateur répond correctement à l'énigme via un prompt, tant qu'il se trompe, vous lui reposer la question. S'il a juste, faites une alerte qui le félicite */
    let uti=prompt("Il faut combien de dragon balls pour invoquer shenron");
    let reponse=7;
    while(uti!=reponse){
         uti=prompt("Faux, Il faut combien de dragon balls pour invoquer shenron");
    }
    alert("GG");
