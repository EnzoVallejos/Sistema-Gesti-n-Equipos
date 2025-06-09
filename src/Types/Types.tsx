export type PC = {
  nroInventario: number;
  nroSerie: string;
  marca: string;
  modelo: string;
  ram: string;
  tipoRam: string;
  disco: string;
  procesador: string;
  fuente: string;
  oficina: string;
  oficinaId: number;
}

export type Monitor = {
  nroInventario: number;
  nroSerie: string;
  marca: string;
  modelo: string;
  resolucion: string;
  fuente: string;
  oficina: string;
  oficinaId: number;
}

export type AireAcondicionado = {
  nroInventario: number;
  nroSerie: string;
  marca: string;
  modelo: string;
  frigorias: string;
  potencia: string;
  tipo: string;
  oficina: string;
  oficinaId: number;
}


export type Impresora = {
  nroInventario: number;
  nroSerie: string;
  marca: string;
  modelo: string;
  tonnerModelo: string;
  tipo: string;
  consumible: string;
  oficina: string;
  oficinaId: number;
}

export type Audiovisual = {
  nroInventario: number;
  nroSerie: string;
  marca: string;
  modelo: string;
  accesorios: string;
  tipo: string;
  oficina: string;
  oficinaId: number;
}

export type Componente = {
  
  marca: string;
  modelo: string;
  detalle: string;
  tipo: string;
  cantidad: number;
}
