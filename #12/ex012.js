var agora = new Date()
var hora = agora.getHours()

if(hora < 12){
    console.log('Bom dia! Agora são exatamente ' + hora + ' horas.')
} else if (hora < 18){
    console.log('Boa tarde! Agora são exatamente ' + hora + ' horas.')  
} else{
    console.log('Boa noite! Agora são exatamente ' + hora + ' horas.')
}

