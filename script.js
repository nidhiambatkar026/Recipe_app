const receipe = [];

        function loadreceipe(){
            const detail_box = document.getElementById('detail_box');
            
            detail_box.innerHTML= " ";
            for(i=0; i< receipe.length; i++){
                detail_box.innerHTML +=  `<div class= 'receipe_card'> ${i+1} . ${receipe[i]}</div>`
            }
        }

        const receipeinput = document.getElementById('receipe_name');
        function add_receipe(){
            receipe.push(receipeinput.value);

            receipeinput.value = " ";
            loadreceipe()
        }

        function remove_receipe(){
            const receipeindex = receipe.indexOf(receipeinput.value);
            receipe.splice(receipeindex , 1);
            loadreceipe();
        }