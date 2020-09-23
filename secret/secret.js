google.charts.load('current', {
  'packages': ['sankey']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'From');
  data.addColumn('string', 'To');
  data.addColumn('number', 'Weight');
  data.addRows([
    ['LinkedIn', 'Nike', 1],
    ['LinkedIn', 'Igus', 1],
    ['LinkedIn', 'IKEA', 1],
    ['LinkedIn', 'Reiman', 1],
    ['LinkedIn', 'empregos.org', 3],
    ['empregos.org', 'ESTRATEGOR', 1],
    ['empregos.org', 'EQUIPLEVA', 1],
    ['empregos.org', 'Universal Portugal SGPS', 1],
    ['NetEmpregos', 'Viva Digital Marketing', 1],
    ['NetEmpregos', 'Protokol', 1],
    ['NetEmpregos', 'LIGATU', 1],
    ['NetEmpregos', '7Skin', 1],
    ['NetEmpregos', 'Elegantenario', 1],
    ['NetEmpregos', 'KontrolSatelite', 1],
    ['NetEmpregos', 'Beyond Fresh', 1],
    ['NetEmpregos', 'Sector Interativo', 1],
    ['NetEmpregos', 'A Temporária', 1],
    ['NetEmpregos', 'Flexibeos', 1],
    ['NetEmpregos', 'Lareira Baixa', 1],
    ['NetEmpregos', 'Grupo Lima', 2],
    ['NetEmpregos', 'Manpower Portugal', 1],
    ['NetEmpregos', 'Print Criativa', 1],
    ['NetEmpregos', 'Predibisa', 1],
    ['Manpower Portugal', 'Distance Interview', 1],
    ['Olegario', 'Distance Interview', 1],
    ['Nike', 'Refused', 1],
    ['Igus', 'Waiting for response', 1],
    ['ESTRATEGOR', 'Waiting for response', 1],
    ['EQUIPLEVA', 'Waiting for response', 1],
    ['Universal Portugal SGPS', 'Waiting for response', 1],
    ['Viva Digital Marketing', 'Waiting for response', 1],
    ['Protokol', 'Waiting for response', 1],
    ['LIGATU', 'Waiting for response', 1],
    ['7Skin', 'Waiting for response', 1],
    ['Elegantenario', 'Waiting for response', 1],
    ['KontrolSatelite', 'Waiting for response', 1],
    ['Beyond Fresh', 'Waiting for response', 1],
    ['Sector Interativo', 'Waiting for response', 1],
    ['A Temporária', 'Ana Sancheira', 1],
    ['Ana Sancheira', 'Waiting for response', 1],
    ['Flexibeos', 'Waiting for response', 1],
    ['Lareira Baixa', 'Waiting for response', 1],
    ['Grupo Lima', 'Waiting for response', 1],
    ['Reiman', 'Waiting for response', 1],
    ['Print Criativa', 'Waiting for response', 1],
    ['IKEA', 'Email Response', 1],
    ['Predibisa', 'Email Response', 1],
    ['Grupo Lima', 'Email Response', 1]
  ]);

  // Sets chart options.
  var options = {
    width: 600,
  };

  // Instantiates and draws our chart, passing in some options.
  var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
  chart.draw(data, options);
}
