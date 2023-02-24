// Apprentissgage
const barCanvasInter = document.getElementById("barCanvasInter");

let travailequipe = document.getElementById("travailequipe").innerHTML;
let collectif = document.getElementById("collectif").innerHTML;
let coordination = document.getElementById("coordination").innerHTML;
let conflit = document.getElementById("conflit").innerHTML;
let fiabilite = document.getElementById("fiabilite").innerHTML;
let flexibilite = document.getElementById("flexibilite").innerHTML;
let respect = document.getElementById("respect").innerHTML;
let assertivite = document.getElementById("assertivite").innerHTML;
let feedback = document.getElementById("feedback").innerHTML;
let politesse = document.getElementById("politesse").innerHTML;

const barChartInter = new Chart(barCanvasInter, {
    type: "doughnut",
    data: {
        labels: [
            "Travail en équipe",
            "Sens du collectif",
            "Coordination",
            "Gestion de conflit",
            "Fiabilité",
            "Flexibilité et adaptabilité",
            "Respect",
            "Assertivité",
            "Acceptation du feedback",
            "Politesse",

        ],

        datasets: [
            {
                label: "Compétences interpersonnelles",
                data: [travailequipe, collectif, coordination, conflit, fiabilite, flexibilite , respect, assertivite, feedback, politesse],
                backgroundColor: [
                    "rgb(243, 156, 18)",
                    "rgb(243, 165, 42)",
                    "rgb(243, 175, 67)",
                    "rgb(243, 184, 91)",
                    "rgb(243, 194, 115)",
                    "rgb(243, 203, 139)",
                    "rgb(243, 212, 164)",
                    "rgb(243, 222, 188)",
                    "rgb(243, 231, 212)",
                    "rgb(212, 130, 0)",
                    
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
                    "rgb(236, 240, 241)",
                    
                    
                ],
                borderWidth: 2,
                hoverOffset: 4,
            },
        ],
    },
})
