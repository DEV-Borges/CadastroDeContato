class Contato {
    constructor(nome, cnpj, telefone) {
        this.nome = nome
        this.cnpj = cnpj
        this.telefone = telefone

    }
}

class Bd{

    constructor() {
		let id = localStorage.getItem('id')

		if(id === null) {
			localStorage.setItem('id', 0)
		}
	}


    getProximoId() {
		let proximoId = localStorage.getItem('id')
		return parseInt(proximoId) + 1
	}

    gravar(d) {
		let id = this.getProximoId()

		localStorage.setItem(id, JSON.stringify(d))

		localStorage.setItem('id', id)
	}

    recuperarTodosRegistros() {

		//array de despesas
		let contatos = Array()

		let id = localStorage.getItem('id')

		//recuperar todas as despesas cadastradas em localStorage
		for(let i = 1; i <= id; i++) {

			//recuperar a contato
			let contato = JSON.parse(localStorage.getItem(i))

			//existe a possibilidade de haver índices que foram pulados/removidos
			//nestes casos nós vamos pular esses índices
			if(contato === null) {
				continue
			}
			contato.id = i
			contato.push(despesa)
		}

		return contatos
	}

}

let bd = new Bd(); 

function cadastrarContato() {

    let nome = document.getElementById('nome')
    let cnpj = document.getElementById('cnpj')
    let telefone = document.getElementById('telefone')


    let contato = new Contato(
        nome.value,
        cnpj.value,
        telefone.value
    )

   bd.gravar(contato)
}

/*function carregaContatos(){
    let contatos = Array()

    contatos  = bd.recuperarTodosRegistros()

    var listaContatos = document.getElementById('listaContatos')

    contatos.forEach(function(d){
        console.log(d)
    })

}*/
