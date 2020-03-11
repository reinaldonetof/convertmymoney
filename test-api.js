const axios = require("axios");

// const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%2703-10-2020%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;
// // `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${data}%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`

// axios.get(url).then(res => console.log(res.data.value[0].cotacaoVenda));

const getCotacaoAPI = async data => {
  return await axios.get(
    `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${data}%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`
  );
};

const extractCotacao = res => res.data.value[0].cotacaoVenda;

const getCotacao = async (data) => {
  const res = await getCotacaoAPI(data);
  const cotacao = extractCotacao(res);
  return console.log(cotacao);
};

console.log(getCotacao("03-10-2020"))
console.log(getCotacaoAPI("03-10-2020"))