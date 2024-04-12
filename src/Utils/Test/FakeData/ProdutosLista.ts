export const fetchProdutos = async (page: number): Promise<RequestDadosEstoque[]> => {
    // Simulando atraso de 3 segundos
    await new Promise(resolve => setTimeout(resolve, 3000));
  
    // Mock data para três páginas
    const fakeData = [
      {
        id: 1,
        nome: "Produto 1 - Página 1",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 2,
        nome: "Produto 2 - Página 2",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 3,
        nome: "Produto 1 - Página 1",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 4,
        nome: "Produto 2 - Página 2",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 5,
        nome: "Produto 1 - Página 1",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 6,
        nome: "Produto 2 - Página 2",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 7,
        nome: "Produto 1 - Página 1",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 8,
        nome: "Produto 2 - Página 2",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 9,
        nome: "Produto 1 - Página 1",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 10,
        nome: "Produto 2 - Página 2",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 11,
        nome: "Produto 1 - Página 1",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 12,
        nome: "test ",
        codigoMaterial: "test",
        loteMaterial: "test",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 13,
        nome: "Produto 1 - Página 1",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 14,
        nome: "Produto 2 - Página 2",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 15,
        nome: "Produto 1 - Página 1",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 16,
        nome: "Produto 2 - Página 2",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 17,
        nome: "Produto 1 - Página 1",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 18,
        nome: "Produto 2 - Página 2",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 19,
        nome: "Produto 1 - Página 1",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 20,
        nome: "Produto 2 - Página 2",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 1,
        nome: "Produto 1 - Página 1",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 2,
        nome: "Produto 2 - Página 2",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 3,
        nome: "Produto 1 - Página 1",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 4,
        nome: "Produto 2 - Página 2",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 5,
        nome: "Produto 1 - Página 1",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 6,
        nome: "Produto 2 - Página 2",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 7,
        nome: "Produto 1 - Página 1",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 8,
        nome: "Produto 2 - Página 2",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 9,
        nome: "Produto 1 - Página 1",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 10,
        nome: "Produto 2 - Página 2",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 11,
        nome: "Produto 1 - Página 1",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 12,
        nome: "test ",
        codigoMaterial: "test",
        loteMaterial: "test",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 13,
        nome: "Produto 1 - Página 1",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 14,
        nome: "Produto 2 - Página 2",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 15,
        nome: "Produto 1 - Página 1",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 16,
        nome: "Produto 2 - Página 2",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 17,
        nome: "Produto 1 - Página 1",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 18,
        nome: "Produto 2 - Página 2",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 19,
        nome: "Produto 1 - Página 1",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      {
        id: 20,
        nome: "Produto 2 - Página 2",
        codigoMaterial: "4d5e6f7g1",
        loteMaterial: "9012341",
        ordem: "D1.04.05",
        quantidade: "567",
        validade: "01/01/2022"
      },
      
    ];
    
    if (page === 1) {
      return fakeData.slice(0, 10); // Corta os primeiros 6 itens e retorna o resto
    } else if (page > 1) {
      const startIndex = (page - 1) * 10; // Calcula o índice inicial com base no número da página
      const endIndex = startIndex + 10; // Calcula o índice final
      return fakeData.slice(startIndex, endIndex); // Corta a matriz com base nos índices calculados
    } else {
      return []; // Retorna uma mensagem de erro para página inválida
    }
    
    
  };
  
  export type RequestDadosEstoque = {
    id: number,
    nome: string,
    codigoMaterial: string,
    loteMaterial: string,
    ordem: string,
    quantidade: string,
    validade: string
  };