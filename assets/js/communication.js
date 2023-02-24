// Apprentissgage
const barCanvasCom = document.getElementById("barCanvasCom");

let orale = document.getElementById("orale").innerHTML;
let ecrite = document.getElementById("ecrite").innerHTML;
let nonverbale = document.getElementById("nonverbale").innerHTML;
let active = document.getElementById("active").innerHTML;



const barChartCom = new Chart(barCanvasCom, {
    type: "doughnut",
    data: {
        labels: [
            "Communication orale",
            "Communication écrite",
            "Communication non verbale",
            "Écoute active",

        ],

        datasets: [
            {
                label: "Communication ",
                data: [orale, ecrite, nonverbale, active],
                backgroundColor: [
                    "rgb(108, 92, 231)",
                    "rgb(138, 117, 255)",
                    "rgb(168, 143, 255)",
                    "rgb(198, 170, 255)",
                    
                ],
                borderColor: [
                    "rgb(236, 240, 241)",
                    "rgb(236, 240, 241)",
                    "rgb(236, 240, 241)",
                    "rgb(236, 240, 241)",
                    
                ],
                borderWidth: 1,
                hoverOffset: 4,
            },
        ],
    },
})