var angularData = [];
var emberData = [];
var reactData = [];
var vueData = [];

var chart = new CanvasJS.Chart("chartContainer",
  {
    zoomEnabled: false,
    animationEnabled: true,
    title:{ text: "Weekly Commit Count for Past Year"},
    axisY2:{
      title:"Commits",
      maximum: 140,
      minimum: 0,
      interval: 20,
      interlacedColor: "#F5F5F5",
      gridColor: "#D7D7D7",
      tickColor: "#D7D7D7"
    },
    axisX:{
      title:"Weeks",
    },
    theme: "theme2",
    toolTip:{shared: true},
    legend:{
      verticalAlign: "bottom",
      horizontalAlign: "center",
      fontSize: 15,
      fontFamily: "Lucida Sans Unicode"
    },
    data: [
      {
        type: "line",
        lineThickness:3,
        axisYType:"secondary",
        showInLegend: true,
        name: "Angular",
        dataPoints: angularData
      },
      {
        type: "line",
        lineThickness:3,
        showInLegend: true,
        name: "Ember",
        axisYType:"secondary",
        dataPoints: emberData
      },
      {
        type: "line",
        lineThickness:3,
        showInLegend: true,
        name: "React",
        axisYType:"secondary",
        dataPoints: reactData
      },
      {
        type: "line",
        lineThickness:3,
        showInLegend: true,
        name: "Vue",
        axisYType:"secondary",
        dataPoints: vueData
      }
    ],
    legend: {
      cursor:"pointer",
      verticalAlign: "top",
      horizontalAlign: "center",
      itemclick : function(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
        }
        else {
          e.dataSeries.visible = true;
        }
        chart.render();
      }
    }
  }
);
