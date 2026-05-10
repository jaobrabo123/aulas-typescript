// * generics

function buscarPrimeiro<T>(arr: T[]){
    return arr[0];
}

type TipoUsuario = 'comum' | 'empresa' | 'admin';

interface Usuario {
    nome: string;
    dataNascimento: Date;
    tipo: TipoUsuario;
    descricao?: string;
}

interface ApiResponse<T, U = never>{
    status: number;
    message: string;
    data: T;
    codigo?: U;
}

const lucas: Usuario = {
    nome: 'Lucas',
    tipo: "comum",
    dataNascimento: new Date(),
    descricao: '20',
};

const lista = [lucas, lucas, lucas]
const primeiro = buscarPrimeiro(lista);

console.log("Nome do primeiro usuário: "+primeiro.nome)

const resposta: ApiResponse<Usuario, number> = {
    message: 'usuario encontrado',
    status: 200,
    data: primeiro,
    codigo: 20
}