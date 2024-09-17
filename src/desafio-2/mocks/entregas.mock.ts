import Entrega from "../models/entrega.model";

const entregasMock: Entrega[] = [
    {
      produtos: [
        { altura: 10, largura: 15, comprimento: 30 },
        { altura: 20, largura: 10, comprimento: 20 },
      ],
    },
    {
      produtos: [
        { altura: 10, largura: 10, comprimento: 10 },
        { altura: 20, largura: 20, comprimento: 20 },
        { altura: 30, largura: 10, comprimento: 10 },
      ],
    },
    {
      produtos: [
        { altura: 10, largura: 10, comprimento: 10 },
        { altura: 20, largura: 10, comprimento: 20 },
      ],
    },
  ];
export default entregasMock;