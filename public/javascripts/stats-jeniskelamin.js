const labels = ["Laki-Laki", "Perempuan"];

                        const data = {
                            labels: labels,
                            datasets: [
                                {
                                    label: ["My First dataset"],
                                    backgroundColor: [
                                    "#2D4263",    
                                    "#C84B31",
                                        
                                    ],

                                    data: [2, 10,50,20],
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
                                        text: 'Grafik Status'
                                    }
                                }
                            },
                        };

                        const myChart = new Chart(document.getElementById("jeniskelamin-Chart"), config);
                        axios.get('/statistics/statistik/jeniskelamin').then(e => {
                            console.log(e);
                            myChart.data.datasets[0].data = e.data.data;
                            myChart.update();
                        });