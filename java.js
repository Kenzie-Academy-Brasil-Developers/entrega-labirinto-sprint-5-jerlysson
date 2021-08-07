const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];
const base   = document.querySelector('section');
base.classList.add('base')
const winner = document.querySelector('.hidden');
let parede = document.createElement('div');
let bloco= document.createElement('div');

let clBloc = ''
for(let i =0; i<map.length; i++){
    parede.classList.add('line')
    let cl = parede.cloneNode(true)
    base.appendChild(cl)

    for(let j=0; j< map[i].length;j++){

        // bloco.classList.add('blocos')
        clBloc = bloco.cloneNode(true)
        if(map[i][j]===' '){
            clBloc.classList.add('blocosVazio')
        }else if(map[i][j]==='S'){
            clBloc.classList.add('inicio')
        }else if(map[i][j]==='F'){
            clBloc.classList.add('fim')
        }
        else{
            clBloc.classList.add('blocos')
        }
        cl.appendChild(clBloc)
    }
}
let colun = 10
let row = 0
let blc,clasBlock

blc = base.children[colun].children[row]
blc.classList.add('playing')
const removeCls =(elmt1,elmt2) => {
    base.children[elmt1].children[elmt2].classList.remove('playing');
}

document.addEventListener('keydown', (e) => {
    
    const keyName = e.key;

    if(keyName === 'ArrowRight'){
        row++;
        blc = base.children[colun].children[row]
        clasBlock = blc.className
        console.log(colun,row,clasBlock)
        if(clasBlock === 'blocosVazio'){
            blc.classList.add('playing')
            setTimeout(function(){
            base.children[colun].children[row-1].classList.remove('playing')
            },25)
        }
        else if(clasBlock === 'fim'){
            blc.classList.add('playing')
            winner.classList.remove('hidden')
            setTimeout(function(){
            winner.classList.add('hidden');
            alert("O jogo Sera Zerado!");
            colun = 10;
            row = 0;
        },1000)
            setTimeout(function(){
            base.children[colun].children[row-1].classList.remove('playing');
            base.children[colun].children[row].classList.remove('playing')
            },25)
        }
        else if(clasBlock === 'blocos'){
            row--
            console.log("Bateu na Parede!")
        }else{
            console.log("movimento invalido!")
        }
    }
    else if(keyName === 'ArrowLeft' && row > 0){
        row--;
        blc = base.children[colun].children[row]
        clasBlock = blc.className
        console.log(colun,row,clasBlock)
        if(clasBlock === 'blocosVazio'){
            blc.classList.add('playing')
            setTimeout(function(){
            base.children[colun].children[row+1].classList.remove('playing')
            },25)
        }else if(clasBlock === 'inicio'){
            row++;
            console.log("vc saiu daqui moço, é para o outro lado!")
        }else if(clasBlock === 'blocos'){
            row++
            console.log("Bateu na Parede!")
        }else{
            console.log("movimento invalido!")
        }
    }
    else if(keyName === 'ArrowUp'){
        colun--;
        blc = base.children[colun].children[row]
        clasBlock = blc.className
        console.log(colun,row,clasBlock)
        if(clasBlock === 'blocosVazio'){
            blc.classList.add('playing')
            setTimeout(function(){
            base.children[colun+1].children[row].classList.remove('playing')
            },25)
        }else if(clasBlock === 'blocos'){
            colun++
            console.log("Bateu na Parede!")
        }else{
            console.log("movimento invalido!")
        }
    }
    else if(keyName === 'ArrowDown'){
        colun++;
        blc = base.children[colun].children[row]
        clasBlock = blc.className
        console.log(colun,row,clasBlock)
        if(clasBlock === 'blocosVazio'){
            blc.classList.add('playing')
            setTimeout(function(){
            base.children[colun-1].children[row].classList.remove('playing')
            },25)
        }else if(clasBlock === 'blocos'){
            colun--

            console.log("Bateu na Parede!")
        }else{
            console.log("movimento invalido!")
        }
    }
    else{
        console.log("tecla invalida")
    }

    console.log(colun,row,clasBlock)
});

