const receipe = [];

        function randomemoji(){
            const emojis = [
                '😋' ,'😍' ,'👌', '😉', '😒' , '😣' , '😏','😑', '😮‍💨', '😵‍💫'
            ];
            const min = 0; 
            const max = emojis.length - 1;

            const randomindex = Math.floor(Math.random() * (max - min + 1)) + min;
            return emojis[randomindex]
        }

        function loadreceipe(){
            const detail_box = document.getElementById('detail_box');
            
            detail_box.innerHTML= " ";
            for(i=0; i< receipe.length; i++){
                detail_box.innerHTML +=  `<div class= 'receipe_card'> ${randomemoji()} ${i+1} . ${receipe[i]}</div>`
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