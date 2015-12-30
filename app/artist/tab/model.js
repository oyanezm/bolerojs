define(function(){

  var Tab = function(){}

  Tab.get = function(){

    var tab = {
      id : 134,
      title: "El vino y el destino",
      content: "" +
        "Quisiera tomar veneno\n" +
        "dice la vieja canción\n" +
        "En una copa de vino\n" +
        "vencer el destino.\n" +
        "\n" +
        "Pero yo prefiero el vino\n" +
        "que es una vieja poción\n" +
        "que a todos nos vuelve finos\n" +
        "y nos enseña a cantar\n" +
        "\n" +
        "Ahora que canto del vino\n" +
        "como no voy a nombrar\n" +
        "a mi tierra y sus caminos...\n" +
        "yo no los voy a olvidar.\n" +
        "\n" +
        "Cerca se quedo muy lejos,\n" +
        "Lejos lo cerca.\n" +
        "Yo me vine porque quise,\n" +
        "Ahora me vuelvo.\n" +
        "\n" +
        "Y entremedio están las aguas\n" +
        "que otra vez voy a cruzar,\n" +
        "contra el viento y la marea\n" +
        "de esta pálida ciudad\n" +
        "que no te deja ni un rato\n" +
        "que no te quiere soltar...\n" +
        "\n" +
        "Yo me vine porque quise,\n" +
        "Ahora ya vuelvo!",

      artist : {
        id: 12,
        name: "nano stern"
      }
    };

    tab.content = tab.content.replace(/\n/g , "<br>");

    return tab;
  }

  return Tab;

})
