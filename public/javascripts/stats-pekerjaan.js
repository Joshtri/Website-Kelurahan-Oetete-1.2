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

const labels = [
  "Belum/Tidak Bekerja",
  "Mengurus Rumah Tangga",
  "Pelajar/Mahasiswa",
  "Pensiunan",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: ["My First dataset"],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(255, 25, 86)",
      ],
      data: [2, 10, 50, 20],
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
        text: "Grafik Pekerjaan",
      },
    },
  },
};
const myChart = new Chart(document.getElementById("PekerjaanChart"), config);
axios.get("/statistics/statistik/pekerjaan").then((e) => {
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
