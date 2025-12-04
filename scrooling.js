//adicionar falas
let falas = [1];
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
    scrlMoment: 51
}]
falas[1]=[{
    text:"Well...",
    done: false,
    personagem: "Lydia",
    scrlMoment: 51
}]
//adiicionar animações
let animat = [1];
animat[0]=[]
animat[1]=[{
    scr: "portaabrindo.mp4",
    scrllStart: 1,
    scrllTotal: 500
}

]



let cena=0;
let maxScroll= falas[cena][falas[cena].length-1].scrlMoment * 10;


window.addEventListener("scroll", function () {
    const text = document.getElementById("text");
    const anim= document.getElementById("animat");
    console.log(window.scrollY);
    if(window.scrollY>maxScroll && falas[cena][falas[cena].length-1].done === false){
        const butt = document.createElement("a");
        text.appendChild(butt);
        butt.textContent="Proxima cena";
        butt.classList.add("butao");
        cena=cena+1;
        console.log(cena);
        butt.href=`cena${cena}.html`;
        falas[cena][falas[cena].length-1].done=true;
    }
    if (animat[cena]) {
         for(let i = 0; i < animat[cena].length; i++){
            if(window.scrollY>animat[cena][i].scrllStart && window.scrollY<animat[cena][i].scrllStart+animat[cena][i].scrllTotal){
                anim.scr= animat[cena][i].scr;
                const scrollFraction = (window.scrollY-animat[cena][i].scrllStart) / animat[cena][i].scrllTotal;
                const videoDuration = anim.duration;
                anim.currentTime = scrollFraction * videoDuration;
            }else{
                anim.scr= "";
            }
        }
    }
    for(let i = 0; i<falas[cena].length; i++){
        let scrolP = 20 + falas[cena][i].scrlMoment * 10;
        if(window.scrollY > scrolP && falas[cena][i].done===false){
            const fala1 = document.createElement("p");
            fala1.textContent = falas[cena][i].text;
            fala1.classList.add(falas[cena][i].personagem);
            text.appendChild(fala1);
            falas[cena][i].done=true;
        }
    }

  });
