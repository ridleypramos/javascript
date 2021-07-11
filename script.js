var verificar = window.document.getElementById('verificar')
verificar.addEventListener('click', Verificar)
function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno > ano){
        window.alert('[ERRO]: Verifique os dados e tente novamente!')
    } else{
        var fSexo = document.getElementsByName('radsexo')
        var idade = ano - Number(fAno.value)
        var genero = ''
        //var genero = sexo[0].checked ? 'Masculino':'Feminino'
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //var sexo = document.querySelector('input[name="radsexo"]:checked').value

        if (fSexo[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 3){
                // bebe
                img.setAttribute('src', 'img/bebe_m.jpg')

            } else if ( idade >= 3 && idade <= 14){
                img.src = 'img/crianca_m.jpg'

            } else if( idade > 14 && idade <= 24){
                // adolescente
                img.setAttribute('src', 'img/adolescente_m.jpg')

            }else if( idade > 24 && idade <= 55){
                // adulto
                img.setAttribute('src', 'img/adulto_m.jpg')

            } else{
                // idoso
                img.setAttribute('src', 'img/idoso_m.jpg')
            }
        } else if (fSexo[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 3){
                // bebe
                img.setAttribute('src', 'img/bebe_f.jpg')

            } else if ( idade >= 3 && idade <= 14){
                img.setAttribute('src', 'img/crianca_f.jpg')

            } else if( idade > 14 && idade <= 24){
                // adolescente
                img.setAttribute('src', 'img/adolescente_f.jpg')

            }else if( idade > 24 && idade <= 55){
                // adulto
                img.setAttribute('src', 'img/adulto_f.jpg')

            } else{
                // idoso
                img.setAttribute('src', 'img/idoso_f.jpg')
            }

        }
        res.style.textAlign = 'center'
        //res.innerHTML = 'Detectamos ' + genero + ' com ' + idade + ' anos.'
        res.appendChild(img)


        
    }
}

