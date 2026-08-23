const { Router } = require('express');
const { buscaPessoas, buscaPessoaPorID, cadastraPessoa, atualizaPessoa, deletaPessoa} = require('./pessoa.controler');

const router = Router();



router.get('/', buscaPessoas);

router.get('/:id', buscaPessoaPorID);

router.post('/', cadastraPessoa);

router.put('/:id', atualizaPessoa);

router.delete('/:id', deletaPessoa);


module.exports = router;
