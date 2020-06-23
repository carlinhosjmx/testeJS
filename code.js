var selec = document.getElementById("select");

var itens = [];



for( i = 0; i < selec.options.length; i++){
      console.log("imprime", i);
}

selec.addEventListener("change",()=>{

    console.log(selec.options.selectedIndex);

})




