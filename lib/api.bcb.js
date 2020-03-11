const axios = require("axios");

const getUrl = data =>
  `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${data}%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;

const getCotacaoAPI = async url => {
  return await axios.get(url);
};

const extractCotacao = res => res.data.value[0].cotacaoVenda;

const getToday = () => {
  const today = new Date();
  return (
    today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear()
  );
};

const getCotacao = async data => {
  try {
    const today = getToday();
    const url = getUrl(today);
    const res = await getCotacaoAPI(url);
    const cotacao = extractCotacao(res);
    return cotacao;
  } catch (err) {
    return "";
  }
};

module.exports = {
  getCotacao,
  getCotacaoAPI,
  getCotacao,
  extractCotacao
};
