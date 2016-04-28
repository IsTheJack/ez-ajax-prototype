var ezAjax = require('./build/ez-ajax.js');

ezAjax({
  method: 'GET',
  uri: 'http://legis.senado.gov.br/dadosabertos/senador/lista/atual',
  headers: {
    'Accept': 'application/json; charset="UTF-8"',
  },
})
.then(function(data) {
  console.log('Logging the deputados name');
  const parlamentarList = data
    .ListaParlamentarEmExercicio.Parlamentares.Parlamentar;
  console.log(parlamentarList.map(function(p) { return p.IdentificacaoParlamentar.NomeParlamentar; }));
});
