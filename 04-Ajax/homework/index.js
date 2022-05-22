const url = 'http://localhost:5000/amigos';

$('#boton').click(()=>{
    $.get(url, (data)=>{
        let lista = document.querySelector('#lista');
        for(let amigo of data){
            let itemAmigo = document.createElement('li');
            itemAmigo.innerText = amigo.name;
            lista.appendChild(itemAmigo);
        }
        
    })
})

$('#search').click(()=>{
    let value = document.querySelector('#input').value;
    $.get(`${url}/${value}`, (data)=>{
        let amigo = document.querySelector('#amigo');
        amigo.innerText = data.name;
    })
})

$('#delete').click(()=>{
    let value = document.querySelector('#inputDelete').value;
    $.ajax({
        method: "DELETE",
        url: `${url}/${value}`,
        succes: ()=>{
            let amigo = document.querySelector('#success');
            amigo.innerText = 'Tu amigo borrado con exito';
        }
    })
})