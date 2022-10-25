var elPasport = document.querySelector('.pasport')
var elNumber = document.querySelector('.tel')
var elAvto = document.querySelector('.avto')



elPasport.addEventListener('keyup', (e)=>{
    if(e.target.value.length == 9){
        elPasport.classList.add('yetarli')
        elPasport.classList.remove('kam')
    }else{
        elPasport.classList.add('kam')
        elPasport.classList.remove('yetarli')
    }
})
elNumber.addEventListener('keyup', (e)=>{
    if(e.target.value.length == 9 || e.target.value.length == 12){
        elNumber.classList.add('yetarli')
        elNumber.classList.remove('kam')
    }else{
        elNumber.classList.add('kam')
        elNumber.classList.remove('yetarli')
    }
})
elAvto.addEventListener('keyup', (e)=>{
    if(e.target.value.length == 3){
        elAvto.classList.add('yetarli')
        elAvto.classList.remove('kam')
    }else{
        elAvto.classList.add('kam')
        elAvto.classList.remove('yetarli')
    }
})