type DadosEstoque ={
    nome: string 
    codigoMaterial:string 
    loteMaterial: string
    ordem: string
    quantidade: string
    validade: string
}

type DadosListaEstoque ={
    dadosListaEstoque: DadosEstoque[]; // Certifique-se de que 'dadosListaEstoque' está corretamente definido como uma matriz de objetos do tipo DadosEstoque
}
