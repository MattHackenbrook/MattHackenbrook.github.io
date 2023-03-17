$(function(){

    var ImageLocs = new Array();
    var Index = 0;

    function SpaceOnCaps(str){
        str = str.replaceAll("A", " a");
        str = str.replaceAll("B", " b");
        str = str.replaceAll("C", " c");
        str = str.replaceAll("D", " d");
        str = str.replaceAll("E", " e");
        str = str.replaceAll("F", " f");
        str = str.replaceAll("G", " g");
        str = str.replaceAll("H", " h");
        str = str.replaceAll("I", " i");
        str = str.replaceAll("J", " j");
        str = str.replaceAll("K", " k");
        str = str.replaceAll("L", " l");
        str = str.replaceAll("M", " m");
        str = str.replaceAll("N", " n");
        str = str.replaceAll("O", " o");
        str = str.replaceAll("P", " p");
        str = str.replaceAll("Q", " q");
        str = str.replaceAll("R", " r");
        str = str.replaceAll("S", " s");
        str = str.replaceAll("T", " t");
        str = str.replaceAll("U", " u");
        str = str.replaceAll("V", " v");
        str = str.replaceAll("W", " w");
        str = str.replaceAll("X", " x");
        str = str.replaceAll("Y", " y");
        str = str.replaceAll("Z", " z");
        return str;
    }
    

    function CycleImage(){
        var imgVal = $("#FakePeople").find("img");
        var imgCap = $("#FakePeople").find("figcaption");
        imgVal.attr("src", ImageLocs[Index]);

        var urlComponents = ImageLocs[Index].split('/');
        var capText = "An image of a" + SpaceOnCaps(urlComponents[urlComponents.length - 1].split('.')[0]) + " who does not exist";
        imgCap.text(capText);

        Index = (Index + 1) % ImageLocs.length;
    }

    //$.get("FakePeople", function(data, status){
    //    $(data).find("a").each(function(){
    //        var fileName = $(this).attr("href");
    //        if(fileName != "/"){
    //            ImageLocs.push(fileName);
    //        }
    //    });
    //}).done(function(){
    //    CycleImage();
    //    setInterval(CycleImage, 20000);
    //});

    $.get("mercedes.json", function(data, status){
        console.log(data);
        var fig = $('#MercedesPic');
        fig.find('img').attr('src', data.imageURL);
        fig.find('figcaption').append(data.name + ", " + data.year);
        var engine = $('#MercedesEngine');
        var engineText = "<h4>Engine</h4>" +
        "<ul><li>Type: " + data.engine.type +
        "</li><li>Size: " + data.engine.size +
        "</li><li>Configuration: " + data.engine.configuration + "</li></ul>";
        console.log(engineText);
        engine.append(engineText);
        var brakes = $('#MercedesBrakes');
        var brakeText = "<h4>Brakes</h4>" +
        "<ul><li>Front: " + data.brakes.front +
        "</li><li>Back: " + data.brakes.back + "</li></ul>";
        console.log(brakeText)
        brakes.append(brakeText);
    });

});
