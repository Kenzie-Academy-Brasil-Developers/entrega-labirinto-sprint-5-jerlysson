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
let colun = 9
let row = 0
let blc,clasBlock

document.addEventListener('keydown', (e) => {
    
    const keyName = e.key;
    blc = base.children[colun].children[row]
    blc.classList.add('playing')
    clasBlock = blc.className
    console.log(clasBlock)
    if(keyName === 'ArrowUp'){
        if(clasBlock === 'blocoVazio'){
            colun--;
            blc.classList.add('playing')
            console.log('inicio+++')
        }else{
            console.log('movimento invalido')
        }
    }
    else if(keyName === 'ArrowDown'){

        if(clasBlock === 'blocoVazio'){
            colun++
            console.log('bloco Vazio!')
            blc.classList.add('playing')
        }else{
            console.log('movimento invalido')
        }
    }
    else if(keyName === 'ArrowLeft'){
        if(clasBlock === 'blocoVazio'){
            row--
            console.log('bloco Vazio!')
            blc.classList.add('playing')
        }else{
            console.log('movimento invalido')
        }
    }else if(keyName === 'ArrowRight'){
        if(clasBlock === 'blocoVazio'){
            row++
            console.log('bloco Vazio!')
            blc.classList.add('playing')
        }else{
            console.log('movimento invalido')
        }
    }else{
        console.log("tecla invalida")
    }
});

