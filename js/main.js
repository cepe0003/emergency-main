// HOVER + KLIK PÅ CIRKLER VED POPCORN

document.querySelector("#circle").addEventListener("mouseover", highlight);
document.querySelector("#circle").addEventListener("mouseout", unhighlight);
document.querySelector("#circle").addEventListener("click", info);
document.querySelector("#circle1").addEventListener("mouseover", highlight);
document.querySelector("#circle1").addEventListener("mouseout", unhighlight);
document.querySelector("#circle1").addEventListener("click", info1);
document.querySelector("#circle2").addEventListener("mouseover", highlight);
document.querySelector("#circle2").addEventListener("mouseout", unhighlight);
document.querySelector("#circle2").addEventListener("click", info2);

function highlight(){
    console.log("highlight");
    this.style.fill =" #FCEB94";
}
function unhighlight(){
    console.log("unhighlight");
    this.style.fill = "#DEF5DB";
}
function info(){
    console.log("info");
    
    animateBoxes();

    document.querySelector(".info-text > h2").textContent = "Proteinpopcorn";
    document.querySelector(".info-text > article > p").innerHTML = "<h3>Ingredienser</h3><ul><li>Popcorn</li><li>Proteinpulver</li></ul><br></br><h3>Fremgangsmåde</h3><ol><li>Mix popcorn med proteinpulver</li></ol>";
    document.querySelector("#efficiency").innerHTML = "<h3>Mængde af popcorn brugt</h3><p>Proteinpopcorn er et godt valg, hvis du gerne vil af med mange popcorn der skal spises her og nu.</p>";
    document.querySelector("#requirement").innerHTML = "<h3>Sundhedsfaktor</h3><p>Proteinpopcorn scorer højt på sundhedsfaktoren, da der ikke er mange yderligere kalorier i.</p>";

}

function info1(){
    console.log("info1");
    
    animateBoxes();

    document.querySelector(".info-text > h2").textContent = "Popcornbar";
    document.querySelector(".info-text > article > p").innerHTML = "<h3>Ingredienser</h3><ul><li>Popcorn</li><li>Skumfiduser</li><li>Proteinpulver</li></ul><br></br><h3>Fremgangsmåde</h3><ol><li>Smelt dine skumfiduser</li><li>Mix popcorn med proteinpulver</li><li>Bland dine proteinpopcorn i den smeltede skumfidus</li><li>form til små barer<li>Put køleskabet eller fryseren</li></ol>";
    document.querySelector("#efficiency").innerHTML = "<h3>Mængde af popcorn brugt</h3><p>Popcornbaren er er godt valg for dig, der gange vil kunne tage din bar med på farten og kan lide at mealpreppe. Hvis du gør det, kan du komme afmed rigtig mange popcorn.</p>";
    document.querySelector("#requirement").innerHTML = "<h3>Sundhedsfaktor</h3><p>Popcornbaren scorer også højt på sundhedsfaktoren. Der er lidt flere kalorier i end proteinpopcornene, men du kan til gengæld tage dem med ned i fitnesscenteret, hvor du kan forbrænde det hele.</p>";

}

function info2(){
    console.log("info2");
    
    animateBoxes();

    document.querySelector(".info-text > h2").textContent = "Popcornbites";
    document.querySelector(".info-text > article > p").innerHTML = "<h3>Ingredienser</h3><ul><li>Popcorn</li><li>Skumfiduser</li><li>Proteinpulver</li><li>90% mørk chokolade</li><li>Havsalt</li></ul><br></br><h3>Fremgangsmåde</h3><ol><li>Smelt din mørke chokolade</li><li>Smelt dine skumfiduser</li><li>Mix popcorn med proteinpulver</li><li>Bland dine proteinpopcorn i den smeltede skumfidus</li><li>form små kugler og vend dem i den smeltede chokolade</li><li>Drys med flagesalt</li><li>Put køleskabet eller fryseren</li></ol>";
    document.querySelector("#efficiency").innerHTML = "<h3>Mængde af popcorn brugt</h3><p>Popcornbites er lidt mere tidskrævende at lave, så hvis du ikke kan lide at stå længe i køkkenet, så skal de ikke være dit valg, hvis du gerne vil af med mange popcorn. Protip! De kan opbevares i fryseren.</p>";
    document.querySelector("#requirement").innerHTML = "<h3>Sundhedsfaktor</h3><p>Popcornbites scorer lidt lavere på sundhedsfaktoren, da de er dækkes i chokolade og derfor er sværere, at tage med til træning. Til gengæld er de et rigtig godt alternativ til andre søde og langt mere kalorieholdige snacks.</p>";

}

function animateBoxes(){
    document.querySelector("#efficiency").classList.remove("hide");
    document.querySelector("#efficiency").classList.add("fadeIn");
    document.querySelector("#requirement").classList.remove("hide");
    document.querySelector("#requirement").classList.add("fadeIn");
    document.querySelector("#requirement").addEventListener("animationend", cleanup);
}

function cleanup (){
    console.log("cleanup");
    document.querySelector("#requirement").removeEventListener("animationend", cleanup);
    document.querySelector("#efficiency").classList.remove("fadeIn");
    document.querySelector("#requirement").classList.remove("fadeIn");
}