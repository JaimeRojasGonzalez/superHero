

$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();

        let valorInput = $("#idSuperHero").val();

        $.ajax({
            url: "https://www.superheroapi.com/api.php/4905856019427443/" + valorInput,
            success: function (data) {

                let nombre = data.name;
                let biografia = data.biography.aliases;
                let imagen = data.image.url;
                let genero = data.appearance.gender;
                let altura = data.appearance.height;
                let peso = data.appearance.weight;

                $("#superHeroInfo").html(`
                <div class="card" style="width: 18rem; heigth: 20rem">
                <img src="${imagen}" class="card-img-top .container-fluid">
                <div class="card-body">
                  <h5 class="card-title text-center">${nombre}</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">biografía: ${biografia}</</li>
                  <li class="list-group-item">genero: ${genero}</li>
                  <li class="list-group-item">altura: ${altura}</li>
                  <li class="list-group-item">peso ${peso}</li>
                </ul>
            </div>`)

                var chart = new CanvasJS.Chart("superHeroInfoDos", {
                    theme: "light2", // "light1", "light2", "dark1", "dark2"
                    animationEnabled: true,
                    title: {
                        text: "Power Stats"
                    },
                    data: [{
                        type: "pie",
                        startAngle: 25,
                        toolTipContent: "<b>{label}</b>: {y}",
                        showInLegend: "true",
                        legendText: "{label}",
                        indexLabelFontSize: 16,
                        indexLabel: "{label} - {y}",
                        dataPoints: [
                            { y: data.powerstats.intelligence, label: "intelligence" },
                            { y: data.powerstats.strength, label: "strength" },
                            { y: data.powerstats.speed, label: "speed" },
                            { y: data.powerstats.durability, label: "durability" },
                            { y: data.powerstats.power, label: "power" },
                            { y: data.powerstats.combat, label: "combat" },

                        ]
                    }]
                });
                chart.render();










                /*let estadisticas = [];

                data.powerstats.forEach(function (s) {
                    estadisticas.push({
                        label: s.powerstats.,
                        y: s.powerstats,
                    });
                });

                let config = {
                    animationEnabled: true,
                    title: {
                        text: "Power stats"
                    },

                    data: [
                        {
                            type: "pie",
                            dataPoints: estadisticas,
                        }
                    ],

                }

                let chart = new CanvasJS.Chart("superHeroInfoDos", config);

                chart.render();*/
            },
        });
    });
});


