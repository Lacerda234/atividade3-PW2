// Questão 1
export function mesmoConteudo(a: string[], b: string[]): boolean {
  if (a.length !== b.length) {
    return false;
  }

  const aOrdenado = a.slice().sort();
  const bOrdenado = b.slice().sort();

  for (let i = 0; i < aOrdenado.length; i++) {
    if (aOrdenado[i] !== bOrdenado[i]) {
      return false;
    }
  }

  return true;
}

// Questão 2
export function compararArrays(
  a: string[],
  b: string[]
): (string | undefined)[] | undefined {
  if (a.length !== b.length) {
    return undefined;
  }

  const resultado: (string | undefined)[] = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      resultado.push(a[i]);
    } else {
      resultado.push(undefined);
    }
  }

  return resultado;
}

// Questão 3
export function mesmoConteudoMatriz(a: string[][], b: string[][]): boolean {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (!mesmoConteudo(a[i], b[i])) {
      return false;
    }
  }

  return true;
}

// Questão 4
export function compararMatrizes(
  a: string[][],
  b: string[][]
): (string | undefined)[][] {
  const resultado: (string | undefined)[][] = [];

  for (let i = 0; i < a.length && i < b.length; i++) {
    if (a[i].length !== b[i].length) {
      resultado.push([]);
    } else {
      const arrayResultado: (string | undefined)[] = [];

      for (let j = 0; j < a[i].length; j++) {
        if (a[i][j] === b[i][j]) {
          arrayResultado.push(a[i][j]);
        } else {
          arrayResultado.push(undefined);
        }
      }

      resultado.push(arrayResultado);
    }
  }

  return resultado;
}

// Questão 5
export interface Coordenadas {
  latitude: number[];
  longitude: number[];
}

export interface Cidade {
  alcunha: string;
  coordenadas: Coordenadas;
  nome: string;
}

export function descreverCidade(cidade: Cidade): string {
  const latitude = `${cidade.coordenadas.latitude[0]}°${cidade.coordenadas.latitude[1]}'${cidade.coordenadas.latitude[2]}" S`;
  const longitude = `${cidade.coordenadas.longitude[0]}°${cidade.coordenadas.longitude[1]}'${cidade.coordenadas.longitude[2]}" O`;
  return `${cidade.nome}, Paraíba\n* ${cidade.alcunha}.\n* Localizada em ${latitude}, ${longitude}.`;
}

// Questão 6
export interface Restaurante {
  nome: string;
  cidade: string;
}

interface RestaurantesPorCidade {
  [cidade: string]: Restaurante[];
}

export function agruparRestaurantesPorCidade(
  restaurantes: Restaurante[]
): RestaurantesPorCidade {
  return restaurantes.reduce(
    (acc: RestaurantesPorCidade, restaurante: Restaurante) => {
      if (!acc[restaurante.cidade]) {
        acc[restaurante.cidade] = [];
      }
      acc[restaurante.cidade].push(restaurante);
      return acc;
    },
    {}
  );
}
