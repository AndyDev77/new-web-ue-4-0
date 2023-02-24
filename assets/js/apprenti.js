// Apprentissgage
const barCanvasApp = document.getElementById("barCanvasApp");

let volonte = document.getElementById("volonte").innerHTML;
let apprendre = document.getElementById("apprendre").innerHTML;
let evaluation = document.getElementById("evaluation").innerHTML;
let controle = document.getElementById("controle").innerHTML;
let auto = document.getElementById("auto").innerHTML;
let esprit = document.getElementById("esprit").innerHTML;
let curiosite = document.getElementById("curiosite").innerHTML;
let methodologie = document.getElementById("methodologie").innerHTML;

const barChartApp = new Chart(barCanvasApp, {
    type: "doughnut",
    data: {
        labels: [
            "Volonté d'apprendre",
            "Apprendre à apprendre",
            "Auto-évaluation",
            "Contrôle de qualité",
            "Autonomie",
            "Esprit d'entreprendre",
            "Curiosité",
            "Compétence méthodologique",

        ],

        datasets: [
            {
                label: "Apprentissages",
                data: [volonte, apprendre, evaluation, controle, auto, esprit, curiosite, methodologie],
                backgroundColor: [
                    "rgb(224, 70, 107)",
                    "rgb(255, 99, 132)",
                    "rgb(255, 127, 158)",
                    "rgb(255, 156, 185)",
                    "rgb(255, 185, 212)",
                    "rgb(255, 201, 212)",
                    "rgb(255, 227, 233)",
                    "rgb(255, 214, 241)",
                ],
                borderColor: [
                    "rgb(236, 240, 241)",
                    "rgb(236, 240, 241)",
                    "rgb(236, 240, 241)",
                    "rgb(236, 240, 241)",
                    "rgb(236, 240, 241)",
                    "rgb(236, 240, 241)",
                    "rgb(236, 240, 241)",
                    "rgb(236, 240, 241)",
                ],
                borderWidth: 3,
                hoverOffset: 4,
            },
        ],
    },
})
