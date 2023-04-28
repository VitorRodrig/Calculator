function insert(n){
    document.querySelector('.screen').innerHTML += n
}

function clean(){
    document.querySelector('.screen').innerHTML = ''
}

function back(){
    var screen = document.querySelector('.screen').innerHTML
    document.querySelector('.screen').innerHTML = screen.substring(0, screen.length - 1)
}

function add(){
    var screen = document.querySelector('.screen').innerHTML
    
    if(screen){
        document.querySelector('.screen').innerHTML = eval(screen)
    } else{
        alert('Nenhum comando digitado')
    }
}

