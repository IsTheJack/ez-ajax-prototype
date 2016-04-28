const ezAjax = require('./../build/ez-ajax.js');

describe('The App Suit Tests', function() {
  it('GET request by object argument', function(done) {
    ezAjax({
      method: 'GET',
      uri: 'http://legis.senado.gov.br/dadosabertos/senador/lista/atual',
      headers: {
        'Accept': 'application/json; charset="UTF-8"',
      },
    })
    .then((data) => { 
      const parlamentarList = data
        .ListaParlamentarEmExercicio.Parlamentares.Parlamentar;
      const deputado = parlamentarList
        .find(p => p.IdentificacaoParlamentar.CodigoParlamentar == 5322);
      expect(deputado.IdentificacaoParlamentar.NomeCompletoParlamentar)
      .toBe('Romario de Souza Faria');
      done();
    })
    .catch((err) => { 
      fail("The request musn't fail");
      done();
    });
  });
});