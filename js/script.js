

function cadastrar() {
    var titulo = document.getElementById("titulo").value
    var qtd = document.getElementById("qtd").value
    var desc = document.getElementById("desc").value
    var autor = document.getElementById("autor").value

    alert("Cadastro realizado com sucesso! \n\nTítulo: " + titulo + "\nQuantidade: " + qtd + "\nDescrição: " + desc + "\nAutor: " + autor);
}