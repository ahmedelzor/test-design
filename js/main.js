let div = document.querySelectorAll('div');
let btn = document.querySelectorAll('button');
let darkmood = document.getElementById('darkmood');
let addbtn = document.getElementById('addbtn');
let closevalidtionmasseg = document.getElementById('x');







darkmood.onclick =function(){
    if(div[0].classList.contains('kemo')){
        div[0].classList.toggle('layout');
        
    }
}

let showmodal = ()=>{
    div[4].classList.toggle('none');

}
btn[0].addEventListener('click' ,showmodal );

// let closevalidtionmassegfunc = ()=>{
//     div[0].classList.toggle('none')
// }








