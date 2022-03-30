class Noticias{
  constructor( titulo, data_da_publicacao, resumo, texto ){   
      this.titulo = titulo;
      this.data_da_publicacao = data_da_publicacao;
      this.resumo = resumo;
      this.texto = texto;
}
  mostraNoticias(){
  return this.titulo +"\n"+  this.data_da_publicacao +"\n"+   this.resumo   +"\n\n"+   this.texto

  }
}
let mostra = new Noticias ("Com 88 mil doses, MS recebe primeiro lote de vacinas contra influenza" , "20/03/2022" , "Campanha de influenza e sarampo deve começar em 4 de abril em todo estado." , "Mato Grosso do Sul recebeu, nesta terça-feira (22), a primeira remessa com 88 mil doses de vacinas contra Influenza, vinda do Programa Nacional de Imunizações, do Ministério da Saúde.Com essas doses, a campanha de vacinação contra o vírus acontece no próximo dia 4 de abril e cerca de 1.030.630 pessoas estão aptas a se vacinar.Os imunizantes ficarão armazenados na sede da Coordenadoria Estadual de Vigilância Epidemiológica (CEVE) da Secretaria de Estado de Saúde (SES), até o próximo dia 31 de março, quando os municípios começam a receber as doses.No dia 4 de abril a campanha contra o sarampo se iniciará, com isso, segundo estimativa populacional do Ministério da Saúde de 2022, 193.439 crianças de seis meses a menores de cinco anos (4 anos 11 meses e 29 dias) estão aptas a se vacinarem.")

console.log(mostra.mostraNoticias())