    
function translate(param){
    let x = 0;
    obj = {
        'kil'    : 1,
        'jin'    : 5,
        'pol'    : 10,
        'kilow'  : 50,
        'jij'    : 100,
        'jinjin' : 500,
        'polsx'  :  1000
    }

    param.forEach(function(i){
        (x += obj[i]);
    });

    if (isNaN(x)){
        return ('Erro, verifique os parâmetros passados!');
    } 
    return x;
}