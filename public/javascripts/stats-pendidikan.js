const bar = document.getElementById("bar");
const pie = document.getElementById("pie");
const doughnut = document.getElementById("doughnut");

bar.addEventListener("click", changebar);
pie.addEventListener("click", changepie);
doughnut.addEventListener("click", changedoughnut);

function changebar() {
  console.log("changebar function");
}

function changepie() {
  console.log("changepie function");
}

function changedoughnut() {
  console.log("changedoughnut function");
}


const labels = ["Belum/Tidak Pernah Sekolah", "Belum/Tidak Tamat SD/SDLB/MI/Paket A", "SD/SDLB/MI/Paket A",
    "SMP/SMPLB/MTs/Paket B", "SMA/SMLB/MA/SMK/MAK/Paket C", "DI/DII/DIII",
    "DIV/S1", "S2", "S3"];

const data = {
    labels: labels,
    datasets: [
        {
            label: ["My First dataset"],
            backgroundColor: [
                "#DBFFFF",
                "#F5F0BB",
                "#E9DCFF",
                "#C4DFAA",
                "#FFD2FB",
                "#E0E0F3",
                "#7882A4",
                "#BBBBBB",
                "#CFC5A5",
                "#F8E7F8",
            ],

            data: [2, 10, 3, 5, 6, 7, 8, 5, 2, 2],
            hoverOffset: 4,
        },
    ],
};

const config = {
    type: "pie",
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Grafik Pendidikan'
            }
        }
    },
};

const myChart = new Chart(document.getElementById("Pendidikan-Chart"), config);
axios.get('/statistics/statistik/pendidikan').then(e => {
    console.log(e);
    myChart.data.datasets[0].data = e.data.data;
    myChart.update();
});


function changebar() {
    const updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
  }
  
  function changepie() {
    const updatetype = "pie";
    myChart.config.type = updatetype;
    myChart.update();
  }
  
  function changedoughnut() {
    const updatetype = "doughnut";
    myChart.config.type = updatetype;
    myChart.update();
  }
  
