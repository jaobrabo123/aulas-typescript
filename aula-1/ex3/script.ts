// * interfaces (com optional fields) e types (com or)

type TipoUsuario = 'comum' | 'empresa' | 'admin';

interface Usuario {
    nome: string;
    dataNascimento: Date;
    tipo: TipoUsuario;
    descricao?: string;
}

const lucas: Usuario = {
    nome: 'Lucas',
    tipo: "comum",
    dataNascimento: new Date(),
    descricao: '20',
};



