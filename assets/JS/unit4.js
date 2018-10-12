// 1 is obe 2 is sky 3 is maul 4 is sid
var obhp = 200;
var skhp = 80;
var mahp = 200;
var sdhp = 240;
var obat = 10;
var skat = 6;
var maat = 12;
var sdat =11;
var ob = true;
var sk =true;
var ma =true;
var sd = true;
var col5 =true;
var skmov =true;
var obmov =true;
var mamov =true;
var sdmov = true;

document.getElementById("obiscore").innerHTML = obhp;
document.getElementById("skyscore").innerHTML = skhp;
document.getElementById("maulscore").innerHTML =    mahp;
document.getElementById("sidscore").innerHTML = sdhp;

var divClone1 = $("#colum1").clone();
var divClone2= $("#colum2").clone();
var divClone3 = $("#colum3").clone();
var divClone4 = $("#colum4").clone();
var divClone5 = $("#colum5").clone();
var divClone6= $("#colum6").clone();
var divClone7 = $("#colum7").clone();
var divClone8 = $("#colum8").clone();
var divClone9 = $("#colum9").clone();
var divClone10 = $("#colum10").clone();

function reset(){
    obhp = 200;
    skhp = 80;
    mahp = 200;
    sdhp = 240;
    obat = 10;
    skat = 6;
    maat = 12;
    sdat =14;
    ob = true;
    sk =true;
    ma =true;
    sd = true;
    col5 =true;
    skmov =true;
    obmov =true;
    mamov =true;
    sdmov = true;
divClone1 = $("#colum1").clone();
divClone2= $("#colum2").clone();
divClone3 = $("#colum3").clone();
divClone4 = $("#colum4").clone();
divClone5 = $("#colum5").clone();
divClone6= $("#colum6").clone();
divClone7 = $("#colum7").clone();
divClone8 = $("#colum8").clone();
divClone9 = $("#colum9").clone();
divClone10 = $("#colum10").clone();
document.getElementById("obiscore").innerHTML = obhp;
document.getElementById("skyscore").innerHTML = skhp;
document.getElementById("maulscore").innerHTML = mahp;
document.getElementById("sidscore").innerHTML = sdhp;
};
    

$(document).ready(function () {

    //move one photo to one column 
    $("#colum1").on("click", function () {
        ob =false;
        $("#colum2").contents().appendTo("#colum5");
        $("#colum3").contents().appendTo("#colum6");
        $("#colum4").contents().appendTo("#colum7");
    });

    $("#colum2").on("click", function () {
        sk=false;
        $("#colum1").contents().appendTo("#colum5");
        $("#colum3").contents().appendTo("#colum6");
        $("#colum4").contents().appendTo("#colum7");
    });

    $("#colum3").on("click", function () {
        ma =false;
        $("#colum1").contents().appendTo("#colum5");
        $("#colum2").contents().appendTo("#colum6");
        $("#colum4").contents().appendTo("#colum7");
    });

    $("#colum4").on("click", function () {
        sd=false;
        $("#colum1").contents().appendTo("#colum5");
        $("#colum2").contents().appendTo("#colum6");
        $("#colum3").contents().appendTo("#colum7");
    });
// move to 8
    $("#colum5").on("click", function () {
        if ((col5)&& (!ob)){
        $("#colum5").contents().appendTo("#colum8");
        col5 =false;
        skmov = false;}
        if ((col5)&& (!sk)){
            $("#colum5").contents().appendTo("#colum8"); 
            col5 =false;
            obmov =false;}
        if ((col5)&& (!ma)){
                $("#colum5").contents().appendTo("#colum8"); 
                col5 =false;
                obmov =false}
        if ((col5)&& (!sd)){
         $("#colum5").contents().appendTo("#colum8"); 
               col5 =false;
                obmov =false;}    
    });
// move to 9
    $("#colum6").on("click", function () {
        if ((col5)&& (!ob)){
            $("#colum6").contents().appendTo("#colum9"); 
            col5 =false;
            mamov = false;}
            if ((col5)&& (!sk)){
                $("#colum6").contents().appendTo("#colum9"); 
                col5 =false;
                mamov =false;}
            if ((col5)&& (!ma)){
                    $("#colum6").contents().appendTo("#colum9"); 
                    col5 =false;
                    skmov =false}
            if ((col5)&& (!sd)){
             $("#colum6").contents().appendTo("#colum8"); 
                   col5 =false;
                    skmov =false;}
    });
    //move to 10
    $("#colum7").on("click", function () {
        if ((col5)&& (!ob)){
            $("#colum7").contents().appendTo("#colum10"); 
            
            col5 =false;
            sdmov = false;}
            if ((col5)&& (!sk)){
                $("#colum7").contents().appendTo("#colum10"); 
                col5 =false;
                sdmov =false;}
            if ((col5)&& (!ma)){
                    $("#colum7").contents().appendTo("#colum10"); 
                    col5 =false;
                    sdmov =false}
            if ((col5)&& (!sd)){
             $("#colum7").contents().appendTo("#colum10"); 
                   col5 =false;
                    mamov =false;}
    });


    

}); 

$.myupdate = function() {
    $("#colum1").replaceWith(divClone1.clone());
        $("#colum2").replaceWith(divClone2.clone());
        $("#colum3").replaceWith(divClone3.clone());
        $("#colum4").replaceWith(divClone4.clone());
        $("#colum5").replaceWith(divClone5.clone());
        $("#colum6").replaceWith(divClone6.clone());
        $("#colum7").replaceWith(divClone7.clone());
        $("#colum8").replaceWith(divClone8.clone());
        $("#colum9").replaceWith(divClone9.clone());
        $("#colum10").replaceWith(divClone10.clone());
        
 };



function fightbut(){
    if ((!ob)){
        //ob is attacking
        if (obhp>0){
        if ((!skmov) && (skhp >0)){
            obhp =obhp-skat;
            skhp = skhp-obat;
            skat = skat+ 6;
            obat = obat + 10;

        }else if (skhp <= 0){
            col5 =true;
            $( "#colum8" ).empty();
        }

               
        if ((!sdmov) &&(sdhp >0)){
            obhp =obhp -sdat;
            sdhp = sdhp -obat;
            obat = obat + 10;
            sdat =  sdat + 11;
            
        }else if(sdhp <= 0){
            col5 = true;
            $( "#colum10" ).empty();
        }
        if ((!mamov) && (mahp>0)){
            obhp = obhp -maat;
            mahp =  mahp -obat;
            obat = obat +10;
            maat = maat +12;
            
            
        }else if(mahp <= 0){
            col5=true;
            $( "#colum9" ).empty();
        }
    }
    if (obhp <= 0){
        alert("you lost");
        $.myupdate();
        location.reload();
        

    }
    if ((obhp>0) && (mahp <= 0) && (sdhp<=0) && (skhp<=0)){
        alert("you won");
        $.myupdate();
        location.reload();
    }
    }
    if (!sd){
        //sd is attacking
        if((!obmov) && (obhp > 0)){
            sdhp = sdhp -obat;
            obhp = obhp -sdat;
            sdat = sdat + 11;
            obat = obat + 10;
        }else if (obhp<= 0){
            col5 = true;
            $( "#colum8" ).empty();
        }
        if ((!skmov)&& (skhp>0)){
            sdhp =sdhp-skat;
            skhp = skhp-sdat;
            skat = skat+ 6;
            sdat = sdat + 11;

        }else if (skhp <= 0){
            col5 =true;
            $( "#colum9" ).empty();
        }
        if ((!mamov) && (mahp>0)){
            sdhp = sdhp -maat;
            mahp =  mahp -sdat;
            sdat = sdat +11;
            maat = maat +12;
            
        }else if(mahp <= 0){
            col5=true;
            $( "#colum10" ).empty();
        }
        if (sdhp <= 0){
            alert("you lost");
            $.myupdate();
            location.reload();
    }
    if ((sdhp>0) && (mahp <= 0) && (obhp<=0) && (skhp<=0)){
        alert("you won");
        $.myupdate();
        location.reload();
    }
}
    if (!sk){
//sk attacking
        if((!obmov) && (obhp > 0)){
            skhp = skhp -obat;
            obhp = obhp -skat;
            skat = skat + 6;
            obat = obat + 10;
        }else if (obhp<= 0){
            col5 = true;
            $( "#colum8" ).empty();
        }
        if ((!sdmov)&& (sdhp>0)){
            sdhp =sdhp-skat;
            skhp = skhp-sdat;
            skat = skat+ 6;
            sdat = sdat + 11;

        }else if (sdhp <= 0){
            col5 =true;
            $( "#colum10" ).empty();
        }
        if ((!mamov) && (mahp>0)){
            skhp = skhp -maat;
            mahp =  mahp -skat;
            skat = skat +6;
            maat = maat +12;
            
            
        }else if(mahp <= 0){
            col5=true;
            $( "#colum9" ).empty();
        }
        if (skhp <= 0){
            alert("you lost");
            $.myupdate();
            location.reload();
    
        }
        if ((skhp>0) && (mahp <= 0) && (obhp<=0) && (sdhp<=0)){
            alert("you won");
            $.myupdate();
            location.reload();
        }
    
    }

        if (!ma){
//ma attacking
            if((!obmov) && (obhp > 0)){
                mahp = mahp -obat;
                obhp = obhp -maat;
                maat = maat + 12;
                obat = obat + 10;
            }else if (obhp<= 0){
                col5 = true;
                $( "#colum8" ).empty();
                console.log(skhp);
            }
            if ((!sdmov)&& (sdhp>0)){
                sdhp =sdhp-maat;
                mahp = mahp-sdat;
                maat = maat+ 12;
                sdat = sdat + 11;
    
            }else if (sdhp <= 0){
                col5 =true;
                $( "#colum10" ).empty();
                console.log(skhp);
            }
            if ((!skmov) && (skhp>0)){
                skhp = skhp -maat;
                
                mahp =  mahp -skat;
                skat = skat +6;
                maat = maat +12;
                console.log(skhp);
                
            }else if(skhp <= 0){
                col5=true;
                $( "#colum9" ).empty();
                console.log(skhp);
            }
    if (mahp <= 0){
        alert("you lost");
        $.myupdate();
        location.reload();

    }
    if ((mahp>0) && (skhp <= 0) && (obhp<=0) && (sdhp<=0)){
        alert("you won");
        $.myupdate();
        location.reload();
    }
}
if (obhp>0){
document.getElementById("obiscore").innerHTML = obhp;}
if (skhp>0){
document.getElementById("skyscore").innerHTML = skhp;}
if(mahp>0){
document.getElementById("maulscore").innerHTML = mahp;}
if(sdhp>0){
document.getElementById("sidscore").innerHTML = sdhp;}

}