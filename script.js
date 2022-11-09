import distance from './object.json' assert {type: 'json'}



(function(){

    const converter = document.querySelector('.q1__select');
    const converter2 = document.querySelector('.q1__select-2');
    const inputValue = document.querySelector('.input__value')
    const btnRes = document.querySelector('.result');
    const result = document.querySelector('.knowRes')

    for (let index = 0; index < distance.length; index++) {
        
        const namesValue = distance[index].value;
        const names = distance[index];
        let convOpt = document.createElement('option');
        converter.appendChild(convOpt);
        convOpt.classList.add('opt');
        convOpt.value = namesValue
        convOpt.innerHTML = names.unit;
        console.log(namesValue)
    }
    
    distance.forEach(names2 => {
    let convOpt = document.createElement('option');
    converter2.appendChild(convOpt);
    convOpt.value = names2.value
    convOpt.classList.add('opt');
    convOpt.innerHTML = names2.unit;
    });

    function getRes(){
        if(converter.value == 'm' && converter2.value == 'm'){
            result.innerHTML = inputValue.value * 1;
        }
        if(converter.value == 'cm' && converter2.value == 'cm'){
            result.innerHTML = inputValue.value * 1;
        }
        if(converter.value == 'in' && converter2.value == 'in'){
            result.innerHTML = inputValue.value * 1;
        }
        if(converter.value == 'ft' && converter2.value == 'ft'){
            result.innerHTML = inputValue.value * 1;
        }

        // конвертація самого на себе

        if(converter.value == 'm' && converter2.value == 'cm'){
            result.innerHTML = inputValue.value * 100;
        }
        if(converter.value == 'm' && converter2.value == 'in'){
            result.innerHTML = inputValue.value * 39.37;
        }
        if(converter.value == 'm' && converter2.value == 'ft'){
            result.innerHTML = inputValue.value * 3.28;
        }

        // -----------

        if(converter.value == 'cm' && converter2.value == 'm'){
            result.innerHTML = inputValue.value / 100;
        }
        if(converter.value == 'cm' && converter2.value == 'in'){
            result.innerHTML = inputValue.value * 0.393;
        }
        if(converter.value == 'cm' && converter2.value == 'ft'){
            result.innerHTML = inputValue.value * 0.032;
        }
        // ----------
        if(converter.value == 'in' && converter2.value == 'm'){
            result.innerHTML = inputValue.value * 0.0254;
        }
        if(converter.value == 'in' && converter2.value == 'cm'){
            result.innerHTML = inputValue.value * 2.54;
        }
        if(converter.value == 'in' && converter2.value == 'ft'){
            result.innerHTML = inputValue.value * 0.083;
        }
        
        // ---------

        if(converter.value == 'ft' && converter2.value == 'm'){
            result.innerHTML = inputValue.value * 0.304;
        }
        if(converter.value == 'ft' && converter2.value == 'cm'){
            result.innerHTML = inputValue.value * 30.48;
        }
        if(converter.value == 'ft' && converter2.value == 'in'){
            result.innerHTML = inputValue.value * 12;
        }
        
        

        
        
       
    }
    btnRes.addEventListener('click', getRes);
    

})();

