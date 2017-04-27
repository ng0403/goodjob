/**
 * 함수 목록
 * chart()			: 영업기회상태 차트 
 */

$(function(){
	chart();
//	CircleChart();
});
//데이터 불러오기 > 축과 척도 설정 > 틀 그리기 > 축 그리기 
//> 요소에 데이터 엮기 > 요소 속성 설정

//데이터 불러오기
     
function chart(){
    d3.json("opptChartStatus", function (error, data){
		  var dataSet = [];
		  var labelName = [];
		  for(var i in data.C_oppt_status[0]){
			  dataSet.push(data.C_oppt_status[0][i]);
			  labelName.push(i);
	  };
	var width = 960,
	            height = 500,
	            radius = Math.min(width, height) / 2;
	 
	    var color = d3.scaleOrdinal()
	            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
	 
	    var arc = d3.arc()
	            .outerRadius(radius - 10)
	            .innerRadius(0);
	 
	    var pie = d3.pie()
	            .sort(null)
	            .value(function(d) { return d.population; });
	 
	    var svg = d3.select("#myGraph").append("svg")
	            .attr("width", width)
	            .attr("height", height)
	            .append("g")
	            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  

	  var g = svg.selectAll(".arc")
	                  .data(pie(dataSet))
	                  .enter().append("g")
	                  .attr("class", "arc");
	   
	          g.append("path")
	                  .attr("d", arc)
	                  .style("fill", function(d) { return color(d.data.age); });
	   
	          g.append("text")
	                  .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
	                  .attr("dy", ".35em")
	                  .style("text-anchor", "middle")
	                  .text(function(d, i){
			  		  return labelName[i]; });


  });
	
}
