$(document).ready(function(){
    var ImageArr = new Array("BlondeWoman.jpg",
    "BrunetteWomanWithEarrings.jpg",
    "BusinessWoman.jpg",
    "ManOnBoatWithApe.jpg",
    "Professor.jpg");
    var Index = 0;

    function CycleImage(){
        var imgVal = $("#FakePeople").find("img");
        // Make an AJAX call to get the image file
        $.ajax({
            url: "C:\\Users\\Matthew\\Desktop\\CCPS530_Lab4\\FakePeople\\" + ImageArr[Index],
            dataType: "binary",
            responseType: "arraybuffer",
            success: function (data) {
                const base64Image = btoa(String.fromCharCode.apply(null, new Uint8Array(data)));

                imgVal.attr("src", "data:image/jpeg;base64," + base64Image);
            },
            error: function (xhr, status, error) {
            console.log("Error: " + error);
            }
        });
  
        //imgVal.attr("src", "C:\\Users\\Matthew\\Desktop\\CCPS530_Lab4\\FakePeople\\" + ImageArr[Index]);
        
        var imgCap = $("#FakePeople").find("figcaption");
        imgCap.text(ImageArr[Index]);

        Index = (Index + 1) % ImageArr.length ;
    }

    CycleImage()
    setInterval(CycleImage, 2000);
});