Raphael.fn.donutChart = function (cx, cy, r, rin, extra, values, labels, stroke, colors) {
    var paper = this,
        rad = Math.PI / 180,
        chart = this.set();
    function sector(cx, cy, r, startAngle, endAngle, params) {
        //console.log(params.fill);
        var x1 = cx + r * Math.cos(-startAngle * rad),
            x2 = cx + r * Math.cos(-endAngle * rad),
            y1 = cy + r * Math.sin(-startAngle * rad),
            y2 = cy + r * Math.sin(-endAngle * rad),
            xx1 = cx + rin * Math.cos(-startAngle * rad),
            xx2 = cx + rin * Math.cos(-endAngle * rad),
            yy1 = cy + rin * Math.sin(-startAngle * rad),
            yy2 = cy + rin * Math.sin(-endAngle * rad);
        
        return paper.path(["M", xx1, yy1,
                           "L", x1, y1,
                           "A", r, r, 0, +(endAngle - startAngle > 180), 0, x2, y2,
                           "L", xx2, yy2,
                           "A", rin, rin, 0, +(endAngle - startAngle > 180), 1, xx1, yy1, "z"]
                         ).attr(params);
        
    }
    var angle = 0,
        total = 0,
        start = 0,
        process = function (j) {
            var value = values[j],
                angleplus = 360 * value / total,
                popangle = angle + (angleplus / 2),
                color = Raphael.hsb(start, .75, 1),
                ms = 500,
                delta = 30,
                bcolor = Raphael.hsb(start, 1, 1),
                txt = paper.text(cx + (r + delta + 55) * Math.cos(-popangle * rad), cy + (r + delta + 25) * Math.sin(-popangle * rad), labels[j]).attr({fill: bcolor, stroke: "none", opacity: 0, "font-size": 20}),
                p = sector(cx, cy, r, angle, angle + angleplus, {fill: colors[i], stroke: stroke, "stroke-width": 8});
            angle += angleplus;
            chart.push(p);
            chart.push(txt);
            circ = paper.circle(cx, cy, r * 0.70);
            chart.push(circ);
            circ = paper.circle(cx, cy, r+extra);
            chart.push(circ);
            var text = paper.text(cx, cy, "we");
            text.attr({ "font-size": r * 0.45, "font-family": "Arial, Helvetica, sans-serif", "font-weight": "bold" })
            chart.push(text);
            start += .1;
        };
    for (var i = 0, ii = values.length; i < ii; i++) {
        total += values[i];
    }
    for (i = 0; i < ii; i++) {
        process(i);
    }
    return chart;
};
function drawPie(element, radius, which, data, link) {
    innerradius = radius * 0.8;      
    var extra = 10;
    var fudge = 50;
    Raphael(element, (radius + extra)*2 + 50, (radius + extra)*2 + 50)
        .donutChart(radius + extra + (fudge/2), radius + extra + (fudge/2), radius, innerradius, extra, data, 
                ['paid', 'pay staff', 'donate', 're-invest', 'keep'],
                "#fff",
                //["red", "green", "blue", "yellow", "purple"])
                ["#709bd0", "#8179b7", "#56517f", "#378dcc", "#99989f"])
        .click(function() { window.location.href = link; });
};

