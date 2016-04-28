const ezAjax = require('./ez-ajax.js');

ezAjax({
  method: 'GET',
  uri: 'http://legis.senado.gov.br/dadosabertos/senador/lista/atual',
  headers: {
    'Accept': 'application/json; charset="UTF-8"',
  },
})
.then((data) => { console.log('FOI', data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar.map(p => p.IdentificacaoParlamentar.NomeParlamentar)) })
.catch((err) => { console.log('ERRO', err) });

console.log('Esse texto será mostrado primeiro!');