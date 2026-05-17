// * interfaces (com optional fields) e types (com or)

type Profissao = "Motorista" | "Médico" | "Programador";

interface Usuario {
    nome: string;
    dataNascimento: Date;
    saldo: number | `R$${number}`;
    profissao?: Profissao;
}

function cadastrarUsuario(usuario?: Usuario | null) {
    console.log("Novo usuário:", usuario);
}

cadastrarUsuario({
    nome: "Jose",
    dataNascimento: new Date(),
    saldo: `R$${2000}`,
    profissao: "Motorista"
});