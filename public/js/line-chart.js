
var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 600 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


  function updateChart(data){
      //d3.selectAll("#chart svg g").remove();

      var parseDate = d3.time.format("%Y").parse;

      var x = d3.time.scale()
          .range([0, width]);

      var y = d3.scale.linear()
          .range([height, 0]);

      var xAxis = d3.svg.axis()
          .scale(x)
          .ticks(10)
        //  .tickFormat(function(d) { console.log(d); return "dasd"; })
          .orient("bottom");

      var yAxis = d3.svg.axis()
          .scale(y)
          .orient("left");

      var line = d3.svg.line()
          .interpolate("basis")
          .x(function(d) { return x(d.year); })
          .y(function(d) { return y(d.ratio); });



      var svg = d3.select("body #chart").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      data.forEach(function(d) {
        d.year = parseDate(d.year);
        d.ratio = +d.ratio;
      });

      svg.selectAll(".x.axis text")  // select all the text elements for the xaxis
          .attr("transform", function(d) {
              return "translate(" + this.getBBox().height*-2 + "," + this.getBBox().height + ")rotate(-45)";
        });

      x.domain(d3.extent(data, function(d) { return d.year; }));
      y.domain(d3.extent(data, function(d) { return d.ratio; }));

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Incidence(persons per 100K)");

      svg.append("path")
          .datum(data)
          .attr("class", "line")

          .attr("d", line);
  }
