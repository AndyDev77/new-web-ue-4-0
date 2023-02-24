// Apprentissgage
const barCanvasLead = document.getElementById("barCanvasLead");

let responsabilite = document.getElementById("responsabilite").innerHTML;
let incertitude = document.getElementById("incertitude").innerHTML;
let vision = document.getElementById("vision").innerHTML;
let strategique = document.getElementById("strategique").innerHTML;
let decision = document.getElementById("decision").innerHTML;
let integrite = document.getElementById("integrite").innerHTML;
let audace = document.getElementById("audace").innerHTML;
let negociation= document.getElementById("negociation").innerHTML;
let emotionnelle = document.getElementById("emotionnelle").innerHTML;
let professionnalisme = document.getElementById("professionnalisme").innerHTML;

const barChartLead = new Chart(barCanvasLead, {
    type: "doughnut",
    data: {
        labels: [
            "Responsabilité",
            "Capacité à faire face à l'incertitude",
            "Vision, visualisation",
            "Pensée stratégique",
            "Jugement et prise de décision",
            "Intégrité",
            "Audace",
            "Négociation",
            "Intelligence émotionnelle",
            "Professionnalisme",

        ],

        datasets: [
            {
                label: "Leadership",
                data: [responsabilite, incertitude, vision, strategique, decision, integrite , audace, negociation, emotionnelle, professionnalisme],
                backgroundColor: [
                    "rgb(46, 204, 113)",
                    "rgb(66, 204, 125)",
                    "rgb(87, 204, 136)",
                    "rgb(107, 204, 148)",
                    "rgb(128, 204, 160)",
                    "rgb(148, 204, 172)",
                    "rgb(168, 204, 183)",
                    "rgb(189, 204, 195)",
                    "rgb(0, 176, 88)",
                    "rgb(0, 148, 63)",
                    
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
