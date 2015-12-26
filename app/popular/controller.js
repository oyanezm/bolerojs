define(function(){

    var Controller = function(){

        var popular = [
            {url : "http://1.bp.blogspot.com/-aQbumY6v5iE/UAiJd5VY_HI/AAAAAAAAAAg/-oCyO-0yuJ0/s1600/Joe_Vasconcellos-Vivo-Frontal.jpg"},
            {url : "http://www.twitsessions.com/wp-content/uploads/2011/05/nanostern.jpg"},
            {url : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSEBwV2v5465pMlRETzhzhi4OFTcNgE91huz8Pz4jpEHHgfSKeOuw"},
            {url : "http://revistaterminal.cl/web/wp-content/uploads/2012/02/violeta.jpg"},
            {url : "http://inti-illimani.cl/wp-content/uploads/2012/06/Inti-IllimaniAntologiaVol3_1989-1998Front-290x160.jpg"},
            {url : "http://inti-illimani.cl/wp-content/uploads/2012/06/Inti-Illimani-Inti-Illimani_Interpreta_A_Victor_Jara-Frontal-290x160.jpg"},
            {url : "https://capsuladelrock.files.wordpress.com/2013/01/los-prisioneros-1.jpg"},
            {url : "http://photos1.blogger.com/blogger/7182/2367/1600/CDRata2.jpg"},
            {url : "http://www.portaldisc.com/imagenes/pictures/9523_5016242.jpg"}
        ];

        var context = {
            artists: popular
        };

        View.render("popular",context);
    }

    return Controller;

});
