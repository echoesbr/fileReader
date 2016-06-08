var string = 's:723:"null({ \
  "total": 1, \
  "registro": [ \
    { \
      "desabilitarDataQuality": false, \
      "solicitarAcessoPortal": false, \
      "grauQualidade": 76, \
      "numeroCns": "201127875970008", \
      "nome": "MAXINIELE EDVANIA LOPES", \
      "nomeMae": "TANIA CRISTINA SILVA LOPES", \
      "nomePai": "EDVALDO DOS SANTOS LOPES", \
      "sexo": "F", \
      "dataNascimento": "11/06/2001", \
      "paisNascimento": "BRASIL", \
      "municipioNascimento": "TATUI - SP", \
      "emailPrincipalValidado": false, \
      "emailAlternativoValidado": false, \
      "nomade": false, \
      "telefone": [], \
      "certidao": [], \
      "fotografia": [], \
      "situacao": "ATIVO", \
      "cartoesAgregados": [], \
      "usuarioDistinto": false \
    } \
  ] \
})"; ';

var regex = /"(registro)":\s*(\[.*?\])\s*\}\)"/gm;
var match = regex.exec(string);
console.log(JSON.parse(match[2]));
