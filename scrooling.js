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
}
]
//adiicionar animações
let animat =[1];
animat[0] =[];
    for (let i = 1; i < 42; i++) {
        let path = `animacoes/cena1/${i}.png`;
        fetch(path)
          .then(r => {
            if (r.ok) 
                animat[1].push({
                    src: path,   
                    mom: i 
                  });
          });
    }



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
        butt.href=`cena${cena}.html`;
        falas[cena][falas[cena].length-1].done=true;

    }
    if (animat[cena]) {
         for(let i = 0; i < animat[cena].length; i++){
            let scrolP = falas[cena][i].mom * 10;
                if(window.scrollY > scrolP){
                    anim.src= animat[cena][i].src;
                    console.log(animat[cena][i].src);
            }
        }
    }
    for(let i = 0; i<falas[cena].length; i++){
        let scrolP = 20 + falas[cena][i].scrlMoment * 10;
        if(window.scrollY > scrolP && falas[cena][i].done===false){
            const fala1 = document.createElement("p");
            text.appendChild(fala1);
            fala1.textContent = falas[cena][i].text;
            fala1.classList.add(falas[cena][i].personagem);
            falas[cena][i].done=true;
        }
    }

  });