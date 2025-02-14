function drawChart(hormone) {
    const ctx = document.getElementById('chartCanvas').getContext('2d');
    if (window.myChart) {
      window.myChart.destroy();
    }
  
    let data;
    let labels;
    let label;
  
    switch (hormone) {
      case 'TSH':
        label = 'تغير هرمون TSH بمرور الوقت';
        labels = ['الأسبوع 1', 'الأسبوع 2', 'الأسبوع 3', 'الأسبوع 4'];
        data = [2, 2.5, 3, 3.2];
        break;
      case 'GH':
        label = 'تغير هرمون النمو (GH) بمرور الوقت';
        labels = ['الشهر 1', 'الشهر 2', 'الشهر 3', 'الشهر 4'];
        data = [1.5, 2.0, 2.8, 3.5];
        break;
      case 'FSH':
        label = 'تغير هرمون FSH بمرور الوقت';
        labels = ['اليوم 1', 'اليوم 2', 'اليوم 3', 'اليوم 4'];
        data = [3, 3.5, 4, 4.5];
        break;
      case 'PRL':
        label = 'تغير هرمون البرولاكتين بمرور الوقت';
        labels = ['الأسبوع 1', 'الأسبوع 2', 'الأسبوع 3', 'الأسبوع 4'];
        data = [1, 1.2, 1.5, 2];
        break;
    }
  
    window.myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: label,
          data: data,
          backgroundColor: '#81c784',
          borderColor: '#388e3c',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  