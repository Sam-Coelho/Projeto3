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
    text:".",
    done: false,
    personagem: "space",
    scrlMoment: 52
}]
falas[1]=[{
    text:".",
    done: false,
    personagem: "space",
    scrlMoment: 10
},
{
    text:".",
    done: false,
    personagem: "space",
    scrlMoment: 20
},
{
    text:".",
    done: false,
    personagem: "space",
    scrlMoment: 30
},
{
    text:".",
    done: false,
    personagem: "space",
    scrlMoment: 35
},
{
    text:"Well...",
    done: false,
    personagem: "George",
    scrlMoment: 45
},
{
    text:"Nothing too good for our childreen",
    done: false,
    personagem: "George",
    scrlMoment: 55
},
{
    text:".",
    done: false,
    personagem: "space",
    scrlMoment: 60
}]
//adiicionar animações
let animat = [2];
animat[0]=[{
    src: "branco.mp4",
    scrllStart: 0,
    scrllTotal: 1100,
    dura: 10
}]
animat[1]=[{
    src: "portaabrindo.mp4",
    scrllStart: 0,
    scrllTotal: 350,
    dura: 5
},
{
    src: "branco.mp4",
    scrllStart: 380,
    scrllTotal: 1500,
    dura: 10
}
]

let abtCenas = [1100,5000];



let cena=0;
let maxScroll= falas[cena][falas[cena].length-1].scrlMoment * 10;
let ShowAnim;
let ScrAnim;
let VideoMoment=0.001;
let anim= document.getElementById("animat");
let lastscr = null;
anim.pause();

window.addEventListener("scroll", function () {
    let text = document.getElementById("text"); 
    //console.log(window.scrollY);
        for(let i = 0; i < animat[cena].length; i++){
            if(window.scrollY>animat[cena][i].scrllStart && window.scrollY<animat[cena][i].scrllStart+animat[cena][i].scrllTotal){
                //console.log("cena:", cena);
                ScrAnim = animat[cena][i].src;
                anim.load();
                console.log(animat[cena][i].src)
                let scrollFraction = (window.scrollY-animat[cena][i].scrllStart) / animat[cena][i].scrllTotal;
                //console.log("frac" + scrollFraction);
                VideoMoment = scrollFraction * animat[cena][i].dura;
                if(anim.src !== ScrAnim && ScrAnim !== anim.scr && lastscr !== ScrAnim && ScrAnim !== lastscr){
                anim.src = ScrAnim;
                lastscr = ScrAnim;
                console.log("scrAtualizado");
                }
                anim.currentTime = VideoMoment;
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

  let AddScroolToText = document.getElementById("toscroll");
  let but = document.getElementById("butao");
    but.addEventListener('click', function(e) {
        e.preventDefault(); // evita ir direto para a página
        console.log("Botão clicado!");
        cena=cena+1;
        console.log("cena"+cena);
        let tex= document.getElementById("text");
        maxScroll= falas[cena][falas[cena].length-1].scrlMoment * 10;
        tex.innerHTML="<p></p>";
        window.scrollTo(0, 0);
        but.style.display="none";
        console.log("scrlmax " + abtCenas[cena]);
        AddScroolToText.style.top = abtCenas[cena] + "px";
        console.log("scrlmax.Confirm " +  AddScroolToText.style.top);
        for(let i=0; i<falas[cena].length; i++){
            falas[cena][i].done=false;
        }
    });

/*
    let FundoAnimat = document.getElementById("animatFundo");
    const ctx = FundoAnimat.getContext("2d");
    const container = document.getElementById("frames");

    anim.addEventListener("play", () => {
        canvas.width = anim.videoWidth;
        canvas.height = anim.videoHeight;
        captureFrames();
        console.log("framesYayyy")
      });


    function captureFrames() {
        if (anim.paused || anim.ended) return;
      
        // desenha o frame atual
        ctx.drawImage(anim, 0, 0, canvas.width, canvas.height);
      
        // gera imagem
        const img = new Image();
        img.src = canvas.toDataURL("image/jpeg", 0.5);
      
        // adiciona na página
        container.appendChild(img);
      
        // chama novamente no próximo frame do navegador
        requestAnimationFrame(captureFrames);
      }
*/
