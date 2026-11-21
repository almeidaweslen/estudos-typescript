// 1. Variáveis tipadas
const nome: string = "João";
const idade: number = 30;
let ativo: boolean = true;

// 2. Funções tipadas
function somar(a: number, b: number): number {
    return a + b;
}

//3. Parâmetros opcionais
function saudar(nome: string, sobrenome?: string): string {
    sobrenome = sobrenome || "NADA";  
    if (sobrenome) {
    return `${nome} ${sobrenome}`;
  }
  return `${nome}!`;
}

// 4. Arrow functions
const dobro = (n: number): number => n * 2;

// 5. chamadas
console.log(somar(2, 3));
console.log(saudar("Weslen"));
console.log(saudar("Weslen", "Almeida"));
console.log(dobro(5));