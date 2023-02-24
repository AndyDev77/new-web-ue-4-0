// Apprentissgage
const barCanvasRef = document.getElementById("barCanvasRef");

let resolution = document.getElementById("resolution").innerHTML;
let analytique = document.getElementById("analytique").innerHTML;
let critique = document.getElementById("critique").innerHTML;
let creativite = document.getElementById("creativite").innerHTML;
let ouverture = document.getElementById("ouverture").innerHTML;
let intuition = document.getElementById("intuition").innerHTML;


const barChartRef = new Chart(barCanvasRef, {
    type: "doughnut",
    data: {
        labels: [
            "Résolution de problème",
            "Compétence analytique",
            "Esprit Critique",
            "Créativité",
            "Ouverture à la nouveauté",
            "Intuition",

        ],

        datasets: [
            {
                label: "Réfléxion et imagination ",
                data: [resolution, analytique, critique, creativite, ouverture, intuition],
                backgroundColor: [
                    "rgb(255, 205, 86)",
                    "rgb(255, 197, 61)",
                    "rgb(255, 190, 35)",
                    "rgb(255, 220, 137)",
                    "rgb(255, 180, 0)",
                    "rgb(255, 213, 112)",
                ],
                borderColor: [
                    "rgb(236, 240, 241)",
                    "rgb(236, 240, 241)",
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