/* jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', () => {

  // Notifications
  const bell = document.querySelector('.notification');
  const badge = document.querySelector('.circle');
  const notifications = document.getElementById('notifications');

  bell.addEventListener('click' , () => {
    notifications.style.display = 'flex';
    badge.style.display = 'none';
  });

  // Close the alert box
   const close = document.querySelectorAll('.close');

   for (var i=0; i < close.length; i++) {
     const closeBtn = close[i];
     closeBtn.addEventListener('click', () => {
        closeBtn.parentElement.style.display = 'none';
        //notifications.style.background = 'none';
        // if (parent.is("#notification") ) {
        //
        //   notifications.style.background = 'none';
        //
        // }

     });
   }

  const messageSection = document.querySelector('#message-users');
  const searchUser = document.querySelector('#search-user');
  const messageUser = document.querySelector('#message-user');
  const sendBtn = document.querySelector('#send');

  function alertBox(title, message, color) {
    const div = document.createElement('div');
    div.className = 'alert center';
    div.style.backgroundColor = color;

    const button = document.createElement('button');
    const close = document.createTextNode('x');

    button.className = 'close';
    button.appendChild(close);
    div.appendChild(button);

    const header = document.createElement('h3');
    const headerContent = document.createTextNode(title);
    header.appendChild(headerContent);
    div.appendChild(header);

    const p = document.createElement('p');
    const pContent = document.createTextNode(message);
    p.appendChild(pContent);
    div.appendChild(p);
    messageSection.insertBefore(div, messageSection.childNodes[0]);
  }


  // INTERACTIVE SEARCH BOX
  let members = $('#new-members .member-info p');
  const autocompleate = document.querySelector('#autocompleate');
  $( "#search-user" ).keyup(function() {
    const $input = $(this).val().toLowerCase();
    let options = '';
    $.each(members ,function(index, member){
         if (member.innerHTML.toLowerCase().includes($input)) {
          autocompleate.style.display = 'block';
          options +=`<option>${member.innerHTML}</option>`;
        }
    });
    autocompleate.innerHTML = options;
    $("#autocompleate option").click(function() {
      searchUser.value = $(this).text();
      autocompleate.style.display = 'none';
    });
  });


  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const alert = messageSection.firstElementChild;
    if (alert.tagName === "DIV") {
      alert.style.display = "none";
    }
    if(searchUser.value === '') {
      alertBox("Oh!", "User Name cannot be empty!", "rgb(196, 24, 60)");
    } else if (messageUser.value === '') {
      alertBox("Oh!", "The message field cannot be empty!", "rgb(196, 24, 60)");
    } else {
      alertBox("Thank you!", "Your message has been sent!", "#55E6C1");
    }
  });

  /* Traffic section */

  // dynamic labels
  const hourlyLabels = ['1-2', '3-4', '5-6', '7-8', '9-10', '11-12', '13-14', '15-16', '17-18', '19-20', '21-22', '23-24'];
  const hourlyData = [10, 5, 25, 30, 40, 15, 20, 10, 50, 30, 50, 40, 3];
  const dailyLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dailyData = [75, 100, 170, 50, 225, 200, 100];
  const weeklyLabels = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"];
  const weeklyData = [750, 1250, 1000, 1500, 2000, 1500, 1700, 1250, 1700, 2250, 1700, 2250];
  const monthlyLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthlyData = [12500, 10000, 15000, 20000, 15000, 17500, 10500, 15000, 10000, 11500, 10950, 12300, 10200];


  // Total Traffic
  var ctx = document.getElementById('totalTraffic').getContext('2d');
  var totalTraffic = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
      datasets: [{
        backgroundColor: '#e2e3f6',
        borderColor: '#b8bae9',
        pointBackgroundColor: '#fff',
        pointRadius: 5,
        lineTension: 0,
        data: [750, 1250, 1000, 1500, 2000, 1500, 1700, 1250, 1700, 2250, 1700, 2250],
      }]
    },

    // Configuration options go here
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            max: 2500,
            min: 500,
            stepSize: 500
          }
        }]
      }
    }
  });

  // Daily Traffic
  var ctx = document.getElementById('dailyTraffic').getContext('2d');
  var dailyTraffic = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [{
        backgroundColor: '#e2e3f6',
        borderColor: '#b8bae9',
        pointBackgroundColor: '#fff',
        pointRadius: 5,
        lineTension: 0,
        data: [75, 100, 175, 125, 225, 200, 100],
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            max: 250,
            min: 50,
            stepSize: 50
          }
        }]
      }
    }
  });


  // Mobile Users
  var ctx = document.getElementById('mobileUsers').getContext('2d');
  var mobileUsers = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
      labels: ["Phones", "Tablets", "Desktop"],
      datasets: [{
        data: [15, 15, 75],
        backgroundColor: [
          '#6099AF',
          '#78C9A6',
          '#65619E',
        ],
        borderColor: [
          '#6099AF',
          '#78C9A6',
          '#65619E',
      ],
      borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: true,
        position: 'right',
      },
    }
  });


  // INTERACTIVE CHARTS
  function updateChart(chart, labels, data, max, min, step) {

    // remove old labels
    let labelLength = chart.data.labels.length;
    for(let i = 0; i < labelLength; i++) {
      chart.data.labels.pop();
    }

    // remove old data
    let dataLength = chart.data.datasets[0].data.length;
    for(let i = 0; i < dataLength; i++) {
      chart.data.datasets[0].data.pop();
    }

    // add new data
    dataLength = data.length;
    for(let i = 0; i < dataLength; i++) {
      chart.data.datasets[0].data.push(data[i]);
    }

    // add new labels
    labelLength = labels.length;
    for(let i = 0; i < labelLength; i++) {
      chart.data.labels.push(labels[i]);
    }

    // yAxes
    let select = chart.options.scales.yAxes[0].ticks;
    select.max = max;
    select.min = min;
    select.stepSize = step;

    // for chart to re-render
    chart.update();
  }

  $("#filter li").click(function() {
    $("#filter li").removeClass('selected');
    $(this).addClass('selected');
    if ($(this).text() === 'Hourly') {
      updateChart(totalTraffic, hourlyLabels, hourlyData, 50, 0, 5);
    } else if($(this).text() === 'Daily') {
      updateChart(totalTraffic, dailyLabels, dailyData, 250, 0, 25);
    } else if($(this).text() === 'Weekly') {
      updateChart(totalTraffic, weeklyLabels, weeklyData, 2500, 500, 500);
    } else if($(this).text() === 'Monthly') {
      updateChart(totalTraffic, monthlyLabels, monthlyData, 20000, 5000, 5000);
    }
  });
});
