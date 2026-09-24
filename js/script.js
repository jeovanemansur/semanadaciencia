const lista = document.getElementById("lista");


const todasCientistas = [
    ...cientistas,
    ...cientistas
];



todasCientistas.forEach(c => {


    lista.innerHTML += `


    <div class="card">


        <div class="foto">

            <img src="${c[4]}" 
                 alt="${c[0]}">

        </div>



        <h3>
            ${c[0]}
        </h3>



        <strong>
            ${c[1]}
        </strong>



        <small>
            ${c[2]}
        </small>



        <p>
            ${c[3]}
        </p>



    </div>


    `;


});