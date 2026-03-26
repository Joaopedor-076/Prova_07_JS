import * as rd from "readline-sync"

let lista = ["João","Emanuel","Jonathan","Igor"]
let opcao = ""

while (opcao !== "6"){
    console.log("-----Menu-----")
    console.log("1 - Adicionar nome")
    console.log("2 - Filtra nome pela inicial")
    console.log("3 - Encontrar o primeiro nome corresponde a incial")
    console.log("4 - Transformar nomes em maisculos")
    console.log("5 - Verificar noma acima de 3 caracteris")
    console.log("6 - sair")

    opcao = rd.question("Digite a opcao -> ")

    switch (opcao) {

        case"1":
        let adiciorNome = rd.question("Digite o nome que gostaria de adicionar a lista -> ")
        lista.push(adiciorNome)
        console.log(adiciorNome + " Adicionado")
        break

        case"2":
        let inicial = rd.question("Digite apenas a inicial do nome que deseja ver -> ").toUpperCase()
        let InicialDoNome = lista.filter(lista => lista.startsWith(inicial))
        console.log("Nome:", InicialDoNome || "Nao encontrado")
        break


        case"3":
        let encrontarI = rd.question("Digite a inicial do nome que queira encontrar -> ").toUpperCase()
        let encontrarInicial = lista.find(lista => lista.startsWith(encrontarI))
        console.log("Nome:", encontrarInicial || "Nao encontrado")
        break

        case"4":
        let mapear = lista.map(nome => nome.toUpperCase())
        console.log("Nome em maiusculo -> " + mapear)
        break


        case"5":
        let maisQue3Caracteris = lista.every(nome => nome.length > 3)
        console.log("Todos os nomes tem mais de 3 caracteris? " + maisQue3Caracteris)
        break

        case"6":
        console.log("Encerrando programa")
        break

        default:
            console.log("opcao nao encontrda")
            break

    }

}
