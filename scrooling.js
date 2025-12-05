//adicionar falas
let falas = [2];
falas[0]=[{
    text:"I wish you’d look at the nursery.",
    done: false,
    personagem: "Lydia",
    scrlMoment: 10
},
{
    text:"Whats wrong with it?",
    done: false,
    personagem: "George",
    scrlMoment: 20
},
{
    text:"I don't know... Its just",
    done: false,
    personagem: "Lydia",
    scrlMoment: 30
},
{
    text:"Different then what it was",
    done: false,
    personagem: "Lydia",
    scrlMoment: 40
},
{
    text:"Alright, lets have a look",
    done: false,
    personagem: "George",
    scrlMoment: 50
},
{
    text:"",
    done: false,
    personagem: "George",
    scrlMoment: 52
}]
falas[1]=[{
    text:"Well...",
    done: false,
    personagem: "George",
    scrlMoment: 51
},
{
    text:"Nothing too good for our childreen",
    done: false,
    personagem: "George",
    scrlMoment: 60
}]
//adiicionar animações
let animat = [1];
animat[0]=[]
animat[1]=[{
    src: "portaabrindo.mp4",
    scrllStart: 0,
    scrllTotal: 200,
    dura: 5
}

]



let cena=0;
let maxScroll= falas[cena][falas[cena].length-1].scrlMoment * 10;

window.addEventListener("scroll", function () {
    let text = document.getElementById("text");
    let anim= document.getElementById("animat");
    //console.log(window.scrollY);
    if (animat[cena]) {
         for(let i = 0; i < animat[cena].length; i++){
            if(window.scrollY>animat[cena][i].scrllStart && window.scrollY<animat[cena][i].scrllStart+animat[cena][i].scrllTotal){
                console.log("cena:", cena);
                anim.style.display= "block";
                anim.src = animat[cena][i].src;
                console.log(animat[cena][i].src)
                anim.currentTime = 0.5;
                anim.pause();
                let scrollFraction = (window.scrollY-animat[cena][i].scrllStart) / animat[cena][i].scrllTotal;
                console.log("frac" + scrollFraction);
                anim.currentTime = scrollFraction * animat[cena][i].dura;
            }else{
                /*anim.style.display= "none";*/
                console.log("no video");
            }
        }
    }
    if(window.scrollY>maxScroll && falas[cena][falas[cena].length-1].done === false){
        let butt = document.createElement("p");
        let abutt= document.getElementById("butao");
        butt.textContent="Proxima cena";
        butt.id="butao";
        abutt.style.display="block";
        falas[cena][falas[cena].length-1].done=true;
        abutt.appendChild(butt);
        console.log("button added");
    }
    for(let i = 0; i<falas[cena].length; i++){
        let scrolP = 20 + falas[cena][i].scrlMoment * 10;
        if(window.scrollY > scrolP && falas[cena][i].done===false){
            let fala1 = document.createElement("p");
            fala1.textContent = falas[cena][i].text;
            fala1.classList.add(falas[cena][i].personagem);
            text.appendChild(fala1);
            falas[cena][i].done=true;
            console.log("fala"+i + "cena" + cena);
        }
    }
    
  });


  let but = document.getElementById("butao");
    but.addEventListener('click', function(e) {
        e.preventDefault(); // evita ir direto para a página
        console.log("Botão clicado!");
        cena=cena+1;
        console.log("cena"+cena);
        let tex= document.getElementById("text");
        tex.innerHTML="";
        window.scrollTo(0, 0);
        but.style.display="none";
    })
