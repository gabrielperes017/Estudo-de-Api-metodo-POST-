const { findAll, findById } = require('./pessoa.service');

const buscaPessoas = async (req, res) => {
    try {
        const pessoas = await findAll();
        res.send(pessoas);
    } catch (error) {
        res.status(500).send({ error: 'Erro ao buscar pessoas' });
    }
};

const buscaPessoaPorID = async (req, res)=> {
    const id = req?.params?.id;
    if (!id) {
        res.status(400).send("id não fornecido");
        return;
    }
    try {
        const pessoa = await findById(id);
        if (!pessoa) {
            res.status(404).send("Pessoa não encontrada");
            return;
        }
        res.send(pessoa);
} catch (error) {
    res.status(500).send({ error: 'Erro ao buscar pessoa por ID' });    

}}




const cadastraPessoa = (req, res) =>{
    res.send("Cadastra uma nova pessoa");
}

const atualizaPessoa = (req, res) => {
    res.send("Atualiza os dados de uma pessoa");
}

const deletaPessoa = (req, res) => {
    res.send("Deleta uma pessoa existente");
}

module.exports = {
    buscaPessoas,
    buscaPessoaPorID,
    cadastraPessoa,
    atualizaPessoa,
    deletaPessoa
}


