const bar1 = document.getElementById("bar1");
const pie1 = document.getElementById("pie1");
const doughnut1 = document.getElementById("doughnut1");

bar1.addEventListener("click", changebar);
pie1.addEventListener("click", changepie);
doughnut1.addEventListener("click", changedoughnut);

function changebar() {
  console.log("changebar function");
}

function changepie() {
  console.log("changepie function");
}

function changedoughnut() {
  console.log("changedoughnut function");
}

const labels1 = ["Usaha Mikro", "Usaha Menengah", "Usaha Kecil"];

const data1 = {
  labels: labels1,
  datasets: [
    {
      labels: ["My First dataset"],
      backgroundColor: ["#ECDBBA", "#C84B31", "#2D4263"],

      data: [4, 4, 4],
      hoverOffset: 4,
    },
  ],
};

const config1 = {
  type: "bar",
  data: data1,
  options: {
    plugins: {
      title: {
        display: true,
        text: "Grafik Kategori Usaha",
      },
    },
  },
};

const myChart1 = new Chart(document.getElementById("Usaha-Mikro-Chart"), config1);
axios.get("/statistics/statistik/umkm").then((e) => {
  console.log(e);
  myChart1.data.datasets[0].data = e.data.data;
  myChart1.update();
});

function changebar() {
  const updatetype = "bar";
  myChart1.config.type = updatetype;
  myChart1.update();
}

function changepie() {
  const updatetype = "pie";
  myChart1.config.type = updatetype;
  myChart1.update();
}

function changedoughnut() {
  const updatetype = "doughnut";
  myChart1.config.type = updatetype;
  myChart1.update();
}
