define(function(){

  var Tab = function(){}

  /**
   * Get Single Tab
   **/
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

  /**
   * Get recent uploaded tabs
   **/
  Tab.get_recent = function(limit){
    return [
      {
        id: 1,
        title : "el viejo comunista",
        user:{
          name:"oyanezm"
        },
        artist:{
          name:"manuel garcia",
          img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSEBwV2v5465pMlRETzhzhi4OFTcNgE91huz8Pz4jpEHHgfSKeOuw"
        }
      },
      {
        id: 2,
        title : "La funa",
        user:{
          name:"oyanezm"
        },
        artist:{
          name:"joe vasconcellos",
          img:"http://1.bp.blogspot.com/-aQbumY6v5iE/UAiJd5VY_HI/AAAAAAAAAAg/-oCyO-0yuJ0/s1600/Joe_Vasconcellos-Vivo-Frontal.jpg"
        }
      },
      {
        id: 3,
        title : "el gavilan",
        user:{
          name:"oyanezm"
        },
        artist:{
          name:"violeta parra",
          img:"http://revistaterminal.cl/web/wp-content/uploads/2012/02/violeta.jpg"
        }
      }
    ];
  }

  return Tab;

})
