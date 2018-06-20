function buscar(){
    let input, filter, cadastradas, cards, a, i;
    input = document.getElementById("busca");
    filter = input.value.toUpperCase();
    cadastradas = document.getElementsByClassName("cadastradas");
    cards = document.getElementsByClassName("cards");

    for(i=0; i < cards.length; i++){
        a = cards[i].getElementsByClassName("descricao")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            cards[i].style.display = "";
        }else{
            cards[i].style.display = "none";
        }    
    }
}


// function buscaMobile(){
//     document.getElementById("busca").style.position = "fixed";  
// }

