const receipe = [];

        function loadreceipe(){
            const detail_box = document.getElementById('detail_box');
            
            detail_box.innerHTML= " ";
            for(i=0; i< receipe.length; i++){
                detail_box.innerHTML +=  `<div class= 'receipe_card'> ${i+1} . ${receipe[i]}</div>`
            }
        }
    
        function add_receipe(){
            const receipeinput = document.getElementById('receipe_name');
            receipe.push(receipeinput.value);

            receipeinput.value = " ";
        }