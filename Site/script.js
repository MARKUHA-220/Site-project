'use strict'

var params = {"appName": "graphing", "width": 800, "height": 600, "showToolBar": true, "showAlgebraInput": true, "showMenuBar": true };
var applet = new GGBApplet(params, true);
window.addEventListener("load", function() {
    applet.inject('ggb-element');
});

function draw() {
try {
    const expression = document.getElementById('eq').value
    const expr = math.compile(expression)

    const xValues = math.range(-10, 10, 0.5).toArray()
    const yValues = xValues.map(function (x) {
    return expr.evaluate({x: x})
    })

    const trace1 = {
    x: xValues,
    y: yValues,
    type: 'scatter'
    }
    const data = [trace1]
    Plotly.newPlot('plot', data)
}
catch (err) {
    console.error(err)
    alert(err)
}
}

document.getElementById('form').onsubmit = function (event) {
event.preventDefault()
draw()
}

draw()

  let currentFontSize = 16;

  function changeTextSize(step) {
    currentFontSize += step;
    if (currentFontSize < 12) currentFontSize = 12;
    if (currentFontSize > 24) currentFontSize = 24;

    document.body.style.fontSize = currentFontSize + "px";
  }

  function toggleTheme() {
    document.body.classList.toggle("dark-theme");
  }




