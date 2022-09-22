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

const labels = ["Usaha Mikro", "Usaha Menengah", "Usaha Kecil"];

const data = {
  labels: labels,
  datasets: [
    {
      labels: ["My First dataset"],
      backgroundColor: ["#ECDBBA", "#C84B31", "#2D4263"],

      data: [4, 4, 4],
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text: "Grafik Kategori Usaha",
      },
    },
  },
};

const myChart = new Chart(document.getElementById("Usaha-Mikro-Chart"), config);
axios.get("/statistics/statistik/umkm").then((e) => {
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
