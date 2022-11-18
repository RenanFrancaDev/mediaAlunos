function calcularMedia(){                    
                    
    var total = 0;
    var qtd = arguments.length;
    var x = 0;
    
    console.log(arguments.length)
    //while(arguments[x]){
    while(typeof arguments[x] === 'number'){
        
        total += arguments[x];
        x++
    }                    

    return total / qtd;
}