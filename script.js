function converter(){
    let n = document.getElementById('n1').value
    
    let res = document.getElementById('resposta')
    let calculo

    const opcao = document.querySelector('input[name=medida]:checked').value;
    
   
    if(n == ''){
        
        alert("Por favor, insira um valor!")
    }else{
        let n1 = parseFloat(n)
        switch (Number(opcao)){
        case 1:
            calculo = n1 *1000
            res.innerHTML = `${n1} metros equivale a ${calculo} mm`
            break
        case 2:
            calculo = n1*100
            res.innerHTML = `${n1} metros equivale a ${calculo} cm`
            break
        case 3:
            calculo = n1*10
            res.innerHTML = `${n1} metros equivale a ${calculo} dm`
            break
        case 4:
            calculo = n1/10
            res.innerHTML = `${n1} metros equivale a ${calculo} dam`
            break
        case 5:
            calculo = n1/100
            res.innerHTML = `${n1} metros equivale a ${calculo} hm`
            break
        case 6:
            calculo = n1/1000
            res.innerHTML = `${n1} metros equivale a ${calculo} km`
            break
        default:
            alert("Por favor, selecione uma unidade de medida!")
            break
        }
    }
}

