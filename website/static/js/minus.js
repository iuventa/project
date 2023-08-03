const pics = [
    'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/55.jpg', 'img/66.jpg'
];
const pic = document.querySelector('.kamateliimg');

var hours = 0;
var mins = 0;
var seconds = 0;

function startTimer() {
    timex = setTimeout(function () {
        seconds++;
        if (seconds > 59) {
            seconds = 0; mins++;
            if (mins > 59) {
                mins = 0; hours++;
                if (hours < 10) { document.getElementById("hours").innerHTML = '0' + hours + ':'; } else document.getElementById("hours").innerHTML = hours + ':';;
            }

            if (mins < 10) {
                document.getElementById("mins").innerHTML = '0' + mins + ':';
            }
            else document.getElementById("mins").innerHTML = mins + ':';
        }
        if (seconds < 10) {
            document.getElementById("seconds").innerHTML = '0' + seconds;
        } else {
            document.getElementById("seconds").innerHTML = seconds;;
        }


        startTimer();
    }, 1000);
}

// document.getElementById("gamravleba").addEventListener("click", () => {
//     document.getElementById("main").style.display = "flex";
//     document.getElementById("gamravlebaujra").style.display = "flex";
//     document.getElementById("moqmedebebi").style.display = "none";
// })


// document.getElementById("gamokleba").addEventListener("click", () => {
//     document.getElementById("main").style.display = "flex";
//     document.getElementById("gamoklebaujra").style.display = "flex";
//     document.getElementById("moqmedebebi").style.display = "none";
// })



let changecolor = (x) => {
    document.getElementById("gagoreba").style.pointerEvents = "none";
    document.getElementById("gagoreba").style.backgroundColor = "#f1f1f1";
    document.getElementById("gagoreba").style.opacity = "0.5";


    console.log(x.innerHTML);

    let clickedanswer = parseInt(x.innerHTML);
    x.style.backgroundColor = "#f7d6dc";

    let yviteliujra = document.querySelectorAll(".ujra");
    let yviteliujrainner, num1, num2, answer;

    for (i = 0; i < yviteliujra.length; i++) {
        // console.log(yviteliujra[i].style.backgroundColor);

        if (yviteliujra[i].style.backgroundColor == "rgb(250, 199, 72)" || yviteliujra[i].style.backgroundColor == "rgb(255, 31, 9)") {

            let yviteliujraid = yviteliujra[i].getAttribute("id");
            console.log(yviteliujraid);

            let pirveli4 = yviteliujraid.slice(4, yviteliujra.length);
            console.log(pirveli4);

            yviteliujrainner = document.getElementById("answer" + pirveli4).innerHTML;

            
                    let timessymbolid = parseInt(yviteliujrainner.indexOf("-"));
                    console.log(timessymbolid);
                    num1 = parseInt(yviteliujrainner.slice(0, timessymbolid));
                    num2 = parseInt(yviteliujrainner.slice(timessymbolid + 1, yviteliujrainner.length));
                    console.log(num1, num2);
                    answer = num1 - num2;
                    console.log(answer);
        

        }
    }
    console.log(clickedanswer, answer);



    if (answer == clickedanswer) {
        console.log("udris formde");
        for (i = 0; i < yviteliujra.length; i++) {
            console.log("udris");
            // console.log(yviteliujra[i].style.backgroundColor);
            if (yviteliujra[i].style.backgroundColor == "rgb(250, 199, 72)" || yviteliujra[i].style.backgroundColor == "rgb(255, 31, 9)") {
                yviteliujra[i].style.backgroundColor = "rgb(10, 204, 0)";

            }



        }
        let clickedanswerbuttons = document.querySelectorAll(".button");
        for (i = 0; i < clickedanswerbuttons.length; i++) {
            console.log(clickedanswerbuttons[i]);
            clickedanswerbuttons[i].style.backgroundColor = "#8390FA";
        }
        x.style.backgroundColor = "rgb(10, 204, 0)";

        document.getElementById("gagoreba").style.pointerEvents = "auto";
        document.getElementById("gagoreba").style.backgroundColor = "#F9E9EC";
        document.getElementById("gagoreba").style.opacity = "1";



    }
    else if (answer != clickedanswer) {
        for (i = 0; i < yviteliujra.length; i++) {
            console.log(yviteliujra[i].style.backgroundColor);
            if (yviteliujra[i].style.backgroundColor == "rgb(250, 199, 72)") {
                yviteliujra[i].style.backgroundColor = "rgb(255, 31, 9)";

            }

        }
    }






}




document.getElementById("dawyeba").addEventListener("click", () => {

    var a = Math.floor(Math.random() * pics.length);
    var img = pics[a];
    pic.src = "../static/"+img;

    console.log(img);

    startTimer();




    if (img == "img/1.jpg") {

        if (document.getElementById("ujra1").style.backgroundColor == "rgb(250, 199, 72)") {
            document.getElementById("ujra1").style.backgroundColor = "#F9E9EC";
        }
        else {
            let yviteliujra = document.querySelectorAll(".ujra");
            for (i = 0; i < yviteliujra.length; i++) {
                // console.log(yviteliujra[i].style.backgroundColor);

                yviteliujra[i].style.backgroundColor = "#F9E9EC";

            }

            document.getElementById("ujra1").style.backgroundColor = "#FAC748";
            document.getElementById("findanswer").style.display = "block";
        }











    }
    else if (img == "img/2.jpg") {
        let yviteliujra = document.querySelectorAll(".ujra");
        for (i = 0; i < yviteliujra.length; i++) {
            // console.log(yviteliujra[i].style.backgroundColor);

            yviteliujra[i].style.backgroundColor = "#F9E9EC";

        }
        document.getElementById("ujra2").style.backgroundColor = "#FAC748";
        document.getElementById("findanswer").style.display = "block";
    }
    else if (img == "img/3.jpg") {
        let yviteliujra = document.querySelectorAll(".ujra");
        for (i = 0; i < yviteliujra.length; i++) {
            // console.log(yviteliujra[i].style.backgroundColor);

            yviteliujra[i].style.backgroundColor = "#F9E9EC";

        }
        document.getElementById("ujra3").style.backgroundColor = "#FAC748";
        document.getElementById("findanswer").style.display = "block";
    }
    else if (img == "img/4.jpg") {
        let yviteliujra = document.querySelectorAll(".ujra");
        for (i = 0; i < yviteliujra.length; i++) {
            // console.log(yviteliujra[i].style.backgroundColor);

            yviteliujra[i].style.backgroundColor = "#F9E9EC";

        }
        document.getElementById("ujra4").style.backgroundColor = "#FAC748";
        document.getElementById("findanswer").style.display = "block";
    }
    else if (img == "img/55.jpg") {
        let yviteliujra = document.querySelectorAll(".ujra");
        for (i = 0; i < yviteliujra.length; i++) {
            // console.log(yviteliujra[i].style.backgroundColor);

            yviteliujra[i].style.backgroundColor = "#F9E9EC";

        }
        document.getElementById("ujra5").style.backgroundColor = "#FAC748";
        document.getElementById("findanswer").style.display = "block";
    }
    else if (img == "img/66.jpg") {
        let yviteliujra = document.querySelectorAll(".ujra");
        for (i = 0; i < yviteliujra.length; i++) {
            // console.log(yviteliujra[i].style.backgroundColor);

            yviteliujra[i].style.backgroundColor = "#F9E9EC";

        }
        document.getElementById("ujra6").style.backgroundColor = "#FAC748";
        document.getElementById("findanswer").style.display = "block";
    }

    let yviteliujra = document.querySelectorAll(".ujra");

    for (i = 0; i < yviteliujra.length; i++) {
        // console.log(yviteliujra[i].style.backgroundColor);

        if (yviteliujra[i].style.backgroundColor == "rgb(250, 199, 72)") {

            let yviteliujraid = yviteliujra[i].getAttribute("id");
            console.log(yviteliujraid);

            let pirveli4 = yviteliujraid.slice(4, yviteliujra.length);
            console.log(pirveli4);
        }

    }

    document.getElementById("dawyeba").style.display = "none";
    document.getElementById("gagoreba").style.display = "block";
    document.getElementById("gagoreba").style.pointerEvents = "none";
    document.getElementById("gagoreba").style.backgroundColor = "#f1f1f1";
    document.getElementById("gagoreba").style.opacity = "0.5";

})


document.getElementById("gagoreba").addEventListener("click", () => {
    let clickedanswerbuttons = document.querySelectorAll(".button");
    for (i = 0; i < clickedanswerbuttons.length; i++) {
        console.log(clickedanswerbuttons[i]);
        clickedanswerbuttons[i].style.backgroundColor = "#8390FA";
    }

    //shemtxvevit surati gamochndes - code start
    var a = Math.floor(Math.random() * pics.length);
    var img = pics[a];
    pic.src = "../static/"+img;

    console.log(img);

    //shemtxvevit surati gamochndes - code end






    if (img == "img/1.jpg") {
        let yviteliujra = document.querySelectorAll(".ujra");
        for (i = 0; i < yviteliujra.length; i++) {
            // console.log(yviteliujra[i].style.backgroundColor);

            if (yviteliujra[i].style.backgroundColor == "rgb(250, 199, 72)" || yviteliujra[i].style.backgroundColor == "rgb(10, 204, 0)") {

                let yviteliujraid = yviteliujra[i].getAttribute("id");
                console.log(yviteliujraid);

                let boloricxvi = parseInt(yviteliujraid.slice(4, yviteliujra.length));
                console.log(boloricxvi);

                let gasaferadebeliujrisricxvi = boloricxvi + 1;


                for (i = 0; i < yviteliujra.length; i++) {
                    // console.log(yviteliujra[i].style.backgroundColor);



                    yviteliujra[i].style.backgroundColor = "#F9E9EC";

                }

                if (gasaferadebeliujrisricxvi >= 44) {
                    document.getElementById("ujra" + 44).style.backgroundColor = "#FAC748";
                    document.getElementById("endtime").value = (hours * 3600) + (mins * 60) + seconds;
                    document.getElementById("fullendtime").value = hours + "H : " + mins + "M : " + seconds + "S";

                    document.getElementById("pasuxebi").style.display = "none";

                    document.getElementById("end").style.display = "block";

                    clearTimeout(timex);
                }
                else {
                    document.getElementById("ujra" + gasaferadebeliujrisricxvi).style.backgroundColor = "#FAC748";
                }





                document.getElementById("gagoreba").style.pointerEvents = "none";
                document.getElementById("gagoreba").style.backgroundColor = "#f1f1f1";
                document.getElementById("gagoreba").style.opacity = "0.5";
                document.getElementById("findanswer").style.display = "block";

            }



        }



    }
    else if (img == "img/2.jpg") {
        let yviteliujra = document.querySelectorAll(".ujra");
        for (i = 0; i < yviteliujra.length; i++) {
            // console.log(yviteliujra[i].style.backgroundColor);

            if (yviteliujra[i].style.backgroundColor == "rgb(250, 199, 72)" || yviteliujra[i].style.backgroundColor == "rgb(10, 204, 0)") {

                let yviteliujraid = yviteliujra[i].getAttribute("id");
                console.log(yviteliujraid);

                let boloricxvi = parseInt(yviteliujraid.slice(4, yviteliujra.length));
                console.log(boloricxvi);

                let gasaferadebeliujrisricxvi = boloricxvi + 2;


                for (i = 0; i < yviteliujra.length; i++) {
                    // console.log(yviteliujra[i].style.backgroundColor);

                    yviteliujra[i].style.backgroundColor = "#F9E9EC";

                }



                if (gasaferadebeliujrisricxvi >= 44) {
                    document.getElementById("ujra" + 44).style.backgroundColor = "#FAC748";
                    document.getElementById("endtime").value = (hours * 3600) + (mins * 60) + seconds;
                    document.getElementById("fullendtime").value = hours + "H : " + mins + "M : " + seconds + "S";

                    document.getElementById("pasuxebi").style.display = "none";

                    document.getElementById("end").style.display = "block";

                    clearTimeout(timex);
                }
                else {
                    document.getElementById("ujra" + gasaferadebeliujrisricxvi).style.backgroundColor = "#FAC748";
                }



            }

        }
    }
    else if (img == "img/3.jpg") {
        let yviteliujra = document.querySelectorAll(".ujra");
        for (i = 0; i < yviteliujra.length; i++) {
            // console.log(yviteliujra[i].style.backgroundColor);

            if (yviteliujra[i].style.backgroundColor == "rgb(250, 199, 72)" || yviteliujra[i].style.backgroundColor == "rgb(10, 204, 0)") {

                let yviteliujraid = yviteliujra[i].getAttribute("id");
                console.log(yviteliujraid);

                let boloricxvi = parseInt(yviteliujraid.slice(4, yviteliujra.length));
                console.log(boloricxvi);

                let gasaferadebeliujrisricxvi = boloricxvi + 3;


                for (i = 0; i < yviteliujra.length; i++) {
                    // console.log(yviteliujra[i].style.backgroundColor);

                    yviteliujra[i].style.backgroundColor = "#F9E9EC";

                }



                if (gasaferadebeliujrisricxvi >= 44) {
                    document.getElementById("ujra" + 44).style.backgroundColor = "#FAC748";
                    document.getElementById("endtime").value = (hours * 3600) + (mins * 60) + seconds;
                    document.getElementById("fullendtime").value = hours + "H : " + mins + "M : " + seconds + "S";

                    document.getElementById("pasuxebi").style.display = "none";

                    document.getElementById("end").style.display = "block";

                    clearTimeout(timex);
                }
                else {
                    document.getElementById("ujra" + gasaferadebeliujrisricxvi).style.backgroundColor = "#FAC748";
                }



            }

        }
    }
    else if (img == "img/4.jpg") {
        let yviteliujra = document.querySelectorAll(".ujra");
        for (i = 0; i < yviteliujra.length; i++) {
            // console.log(yviteliujra[i].style.backgroundColor);

            if (yviteliujra[i].style.backgroundColor == "rgb(250, 199, 72)" || yviteliujra[i].style.backgroundColor == "rgb(10, 204, 0)") {

                let yviteliujraid = yviteliujra[i].getAttribute("id");
                console.log(yviteliujraid);

                let boloricxvi = parseInt(yviteliujraid.slice(4, yviteliujra.length));
                console.log(boloricxvi);

                let gasaferadebeliujrisricxvi = boloricxvi + 4;


                for (i = 0; i < yviteliujra.length; i++) {
                    // console.log(yviteliujra[i].style.backgroundColor);

                    yviteliujra[i].style.backgroundColor = "#F9E9EC";

                }



                if (gasaferadebeliujrisricxvi >= 44) {
                    document.getElementById("ujra" + 44).style.backgroundColor = "#FAC748";
                    document.getElementById("endtime").value = (hours * 3600) + (mins * 60) + seconds;
                    document.getElementById("fullendtime").value = hours + "H : " + mins + "M : " + seconds + "S";

                    document.getElementById("pasuxebi").style.display = "none";

                    document.getElementById("end").style.display = "block";

                    clearTimeout(timex);
                }
                else {
                    document.getElementById("ujra" + gasaferadebeliujrisricxvi).style.backgroundColor = "#FAC748";
                }



            }

        }
    }
    else if (img == "img/55.jpg") {
        let yviteliujra = document.querySelectorAll(".ujra");
        for (i = 0; i < yviteliujra.length; i++) {
            // console.log(yviteliujra[i].style.backgroundColor);

            if (yviteliujra[i].style.backgroundColor == "rgb(250, 199, 72)" || yviteliujra[i].style.backgroundColor == "rgb(10, 204, 0)") {

                let yviteliujraid = yviteliujra[i].getAttribute("id");
                console.log(yviteliujraid);

                let boloricxvi = parseInt(yviteliujraid.slice(4, yviteliujra.length));
                console.log(boloricxvi);

                let gasaferadebeliujrisricxvi = boloricxvi + 5;


                for (i = 0; i < yviteliujra.length; i++) {
                    // console.log(yviteliujra[i].style.backgroundColor);

                    yviteliujra[i].style.backgroundColor = "#F9E9EC";

                }



                if (gasaferadebeliujrisricxvi >= 44) {
                    document.getElementById("ujra" + 44).style.backgroundColor = "#FAC748";
                    document.getElementById("endtime").value = (hours * 3600) + (mins * 60) + seconds;
                    document.getElementById("fullendtime").value = hours + "H : " + mins + "M : " + seconds + "S";

                    document.getElementById("pasuxebi").style.display = "none";

                    document.getElementById("end").style.display = "block";

                    clearTimeout(timex);
                }
                else {
                    document.getElementById("ujra" + gasaferadebeliujrisricxvi).style.backgroundColor = "#FAC748";
                }



            }

        }
    }
    else if (img == "img/66.jpg") {
        let yviteliujra = document.querySelectorAll(".ujra");
        for (i = 0; i < yviteliujra.length; i++) {
            // console.log(yviteliujra[i].style.backgroundColor);

            if (yviteliujra[i].style.backgroundColor == "rgb(250, 199, 72)" || yviteliujra[i].style.backgroundColor == "rgb(10, 204, 0)") {

                let yviteliujraid = yviteliujra[i].getAttribute("id");
                console.log(yviteliujraid);

                let boloricxvi = parseInt(yviteliujraid.slice(4, yviteliujra.length));
                console.log(boloricxvi);

                let gasaferadebeliujrisricxvi = boloricxvi + 6;


                for (i = 0; i < yviteliujra.length; i++) {
                    // console.log(yviteliujra[i].style.backgroundColor);

                    yviteliujra[i].style.backgroundColor = "#F9E9EC";

                }



                if (gasaferadebeliujrisricxvi >= 44) {
                    document.getElementById("ujra" + 44).style.backgroundColor = "#FAC748";
                    document.getElementById("endtime").value = (hours * 3600) + (mins * 60) + seconds;
                    document.getElementById("fullendtime").value = hours + "H : " + mins + "M : " + seconds + "S";

                    document.getElementById("pasuxebi").style.display = "none";

                    document.getElementById("end").style.display = "block";

                    clearTimeout(timex);

                }
                else {
                    document.getElementById("ujra" + gasaferadebeliujrisricxvi).style.backgroundColor = "#FAC748";
                }



            }

        }
    }

    let yviteliujra = document.querySelectorAll(".ujra");

    for (i = 0; i < yviteliujra.length; i++) {
        // console.log(yviteliujra[i].style.backgroundColor);

        if (yviteliujra[i].style.backgroundColor == "rgb(250, 199, 72)" || yviteliujra[i].style.backgroundColor == "rgb(10, 204, 0)") {

            let yviteliujraid = yviteliujra[i].getAttribute("id");
            console.log(yviteliujraid);

            let pirveli4 = yviteliujraid.slice(4, yviteliujra.length);
            console.log(pirveli4);
        }

    }

    document.getElementById("gagoreba").style.pointerEvents = "none";
    document.getElementById("gagoreba").style.backgroundColor = "#f1f1f1";
    document.getElementById("gagoreba").style.opacity = "0.5";
})


// document.getElementById("startagain").addEventListener("click", (event) => {
//     document.getElementById("reload").onclick = function() {
//         window.location.reload();
// }

// });


document.getElementById("startagain").addEventListener("click", () => {

    window.location.reload();

});

