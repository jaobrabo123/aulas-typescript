// * generics
type Profissao = "Motorista" | "Médico" | "Programador";

interface Usuario {
    nome: string;
    dataNascimento: Date;
    saldo: number | `R$${number}`;
    profissao?: Profissao;
}

interface Admin extends Usuario {
    setor: string;
}

interface RepostaAPI<T = undefined> {
    data: T;
    status: number;
    mesasge: string;
}

function ultimoDado<T extends Usuario>(dados: T[]): T {
    return dados[dados.length - 1];
}

function enviarResposta<T>(resposta: RepostaAPI<T>) {
    console.log(resposta);
}

function retornar<T>(data: object) {
    return data as T;
}

const usuarios: Admin[] = [{
    nome: "Jose",
    dataNascimento: new Date(),
    saldo: `R$${2000}`,
    profissao: "Motorista",
    setor: "RH"
}, {
    nome: "Pedro",
    dataNascimento: new Date(),
    saldo: 500,
    profissao: "Médico",
    setor: "tecnologia"
}];

const numeros = [10, 20, 40];

// const ultimoNumero = ultimoDado(numeros);

const ultimoUsuario = ultimoDado(usuarios);

enviarResposta<Usuario>({
    data: {
        nome: "Jose",
        dataNascimento: new Date(),
        saldo: `R$${2000}`,
        profissao: "Motorista"
    },
    mesasge: "Succeso",
    status: 200
})

const retorno = retornar<Usuario>({});

