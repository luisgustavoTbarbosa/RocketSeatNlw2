//Procurar o botao
//Qaundo clicar no botao
    document.querySelector("#add-time").addEventListener('click', cloneField);


//Executar uma ação
    function cloneField() {
        //Duplicar os campos. Que campo?
        const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true); //boolean

        //pegar os campos input
        const fields = newFieldContainer.querySelectorAll('input')

        //Para cada campo limpar
        fields.forEach(function(fieldDoMomento) {
            //pegar o field do momento e limpa o mesmo
            fieldDoMomento.value = "";
        });
        
        //Colocar na pagina. onde?
        document.querySelector("#schedule-items").appendChild(newFieldContainer);
    }
   