define(function(){

  var Artist = function(){}

  Artist.get_videos = function(total){
    return [
      {
        id: 1,
        url: "",
        img: "http://www.24horas.cl/incoming/joe_vasconcellos_youtube-1695748/ALTERNATES/w620h350/JOE_VASCONCELLOS_YOUTUBE"
      },
      {
        id: 2,
        url: "",
        img: "https://i.ytimg.com/vi/epKVC3YFwp0/hqdefault.jpg"
      },
      {
        id: 3,
        url: "",
        img: "http://www.katalogo.cl/wp-content/uploads/2015/07/Joe-Copiar.jpg"
      }
    ];
  }

  Artist.get = function(id){

    return {
      id : 1,
      name: "Joe Vasconcellos",
      img : "http://1.bp.blogspot.com/-aQbumY6v5iE/UAiJd5VY_HI/AAAAAAAAAAg/-oCyO-0yuJ0/s1600/Joe_Vasconcellos-Vivo-Frontal.jpg",
      followers: 241,
      total: 200,
      videos:45,
      tabs: [
        {
          id: 1,
          name: "La Funa",
          rating: 3.8,
          fav: 134
        },
        {
          id: 2,
          name: "Las Seis",
          rating: 4.2,
          fav: 34
        },
        {
          id: 3,
          name: "Hijo del sol luminoso",
          rating: 4.6,
          fav: 322,
        },
        {
          id: 4,
          name: "Toque",
          rating: 4.9,
          fav: 43
        },
        {
          id: 5,
          name: "Sed de Gol",
          rating: 2.6,
          fav: 45
        },
        {
          id: 6,
          name: "ciudad traicionera",
          rating: 1.3,
          fav: 54
        }
      ]
    };
  }

  Artist.get_popular = function(){

    var popular = [
      {
        id: 1,
        url : "http://1.bp.blogspot.com/-aQbumY6v5iE/UAiJd5VY_HI/AAAAAAAAAAg/-oCyO-0yuJ0/s1600/Joe_Vasconcellos-Vivo-Frontal.jpg",
        name : "joe vasconcellos"
      },
      {
        id: 2,
        url : "http://www.twitsessions.com/wp-content/uploads/2011/05/nanostern.jpg",
        name : "nano stern"
      },
      {
        id: 3,
        url : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSEBwV2v5465pMlRETzhzhi4OFTcNgE91huz8Pz4jpEHHgfSKeOuw",
        name: "manuel garcia"
      },
      {
        id: 4,
        url : "http://revistaterminal.cl/web/wp-content/uploads/2012/02/violeta.jpg",
        name: "violeta parra"
      },
      {
        id: 5,
        url : "http://inti-illimani.cl/wp-content/uploads/2012/06/Inti-IllimaniAntologiaVol3_1989-1998Front-290x160.jpg",
        name: "inti illimani"
      },
      {
        id: 6,
        url : "http://inti-illimani.cl/wp-content/uploads/2012/06/Inti-Illimani-Inti-Illimani_Interpreta_A_Victor_Jara-Frontal-290x160.jpg",
        name:"victor jara"
      },
      {
        id: 7,
        url : "https://capsuladelrock.files.wordpress.com/2013/01/los-prisioneros-1.jpg",
        name: "los prisioneros"
      },
      {
        id: 8,
        url : "http://photos1.blogger.com/blogger/7182/2367/1600/CDRata2.jpg",
        name: "la rata bluesera"
      },
      {
        id: 9,
        url : "http://www.portaldisc.com/imagenes/pictures/9523_5016242.jpg",
        name: "illapu"
      }
    ];

    return popular;
  }

  return Artist;
})
