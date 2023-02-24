// Apprentissgage
const barCanvasIntra = document.getElementById("barCanvasIntra");

let positive = document.getElementById("positive").innerHTML;
let ethique = document.getElementById("ethique").innerHTML;
let temps = document.getElementById("temps").innerHTML;
let pression = document.getElementById("pression").innerHTML;
let stress = document.getElementById("stress").innerHTML;
let presence = document.getElementById("presence").innerHTML;
let motivation = document.getElementById("motivation").innerHTML;
let confiance = document.getElementById("confiance").innerHTML;
let soi = document.getElementById("soi").innerHTML;
let resilience = document.getElementById("resilience").innerHTML;

const barChartIntra = new Chart(barCanvasIntra, {
    type: "doughnut",
    data: {
        labels: [
            "Attitude positive",
            "Éthique",
            "Gestion du temps",
            "Capacité à travailler sous pression",
            "Gestion du stress",
            "Présence",
            "Motivation intrinsèque",
            "Faire confiance",
            "Confiance en soi",
            "Résilience",

        ],

        datasets: [
            {
                label: "Compétences intrapersonnelles",
                data: [positive, ethique, temps, pression, stress, presence , motivation, confiance, soi, resilience],
                backgroundColor: [
                    "rgb(31, 153, 235)",
                    "rgb(0, 140, 235)",
                    "rgb(54, 162, 235)",
                    "rgb(78, 171, 235)",
                    "rgb(101, 181, 235)",
                    "rgb(124, 190, 235)",
                    "rgb(148, 200, 235)",
                    "rgb(171, 209, 235)",
                    "rgb(195, 219, 235)",
                    "rgb(219, 228, 235)",
                    
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
