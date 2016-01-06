define(function(){

  var Tab = function(){}

  /**
   * Get Single Tab
   **/
  Tab.get = function(){

    var tab = {
      id : 134,
      name: "El vino y el destino",
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
        name : "el viejo comunista",
        video: "youtube",
        rating: 5.0,
        favorite: 120,
        comments: 2,
        user:{
          name:"oyanezm"
        },
        artist:{
          id: 1,
          name:"manuel garcia",
          img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSEBwV2v5465pMlRETzhzhi4OFTcNgE91huz8Pz4jpEHHgfSKeOuw"
        }
      },
      {
        id: 2,
        name : "La funa",
        video : "yutube",
        rating: 4.0,
        favorite: 26,
        comments: 2,
        user:{
          name:"oyanezm"
        },
        artist:{
          id: 2,
          name:"joe vasconcellos",
          img:"http://1.bp.blogspot.com/-aQbumY6v5iE/UAiJd5VY_HI/AAAAAAAAAAg/-oCyO-0yuJ0/s1600/Joe_Vasconcellos-Vivo-Frontal.jpg"
        }
      },
      {
        id: 3,
        name : "el gavilan",
        video: "",
        rating: 2.0,
        favorite: 178,
        comments: 3,
        user:{
          name:"oyanezm"
        },
        artist:{
          id: 3,
          name:"violeta parra",
          img:"http://revistaterminal.cl/web/wp-content/uploads/2012/02/violeta.jpg"
        }
      }
    ];
  }

  /**
   * Search tabs based on keyword
   * @param string {keyword}
   **/
  Tab.search = function(keyword){
    return Tab.get_recent();
  }

  return Tab;

})
