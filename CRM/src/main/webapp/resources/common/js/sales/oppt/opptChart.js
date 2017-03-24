/**
 * 함수 목록
 * chart()			: 영업기회상태 차트 
 */

$(function(){
	chart();
});
//데이터 불러오기 > 축과 척도 설정 > 틀 그리기 > 축 그리기 
//> 요소에 데이터 엮기 > 요소 속성 설정

//데이터 불러오기
     
function chart(){
 //$("#chart_oppt_status").empty();   //기존 내용 지우기
 //$("#chart_oppt_status").html("");  //기존 내용 지우기
  d3.json("opptChartStatus", function (error, data){
	  var dataSet = [];
	  var labelName = [];
	  for(var i in data.C_oppt_status[0][i]){
		  dataSet.push(data.C_oppt_status[0][i]);
		  labelName.push(i);
		  alert(dataSet);
	  }
	  //SVG 요소의 넓이와 높이를 구함.
  var svgEle = document.getElementById("myGraph");
  var svgWidth = window.getComputedStyle(svgEle, null).getPropertyValue("width");
  var svgHeight = window.getComputedStyle(svgEle, null).getPropertyValue("height");
  
  svgWidth = parseFloat(svgWidth);
  svgHeight = parseFloat(svgHeight);
  
 //그래프에 사용할 변수
  var offsetX = 30;
  var offsetY = 20;
  var barElements;
  var dataMax = 300;
  var barWidth = 20;
  var barMargin = 5;
  
  //그래프 그리기
  barElements = d3.select("#myGraph")
  				  .selectAll("rect")
  				  .data(dataSet)
  				  //데이터가 추가될 때
  barElements.enter()
  			 .attr("class", "bar")
  			 .attr("height", 0)
  			 .attr("width", barWidth)
  			 .attr("x", function(d, i){
  				 //x좌표를 표시 순서 *25+offSetX로 함.
  				 return i*(barWidth + barMargin)+offsetX;
  			 })
  			 .attr("y", svgHeight -offsetY)
  			 //이벤트 추가
  			 .on("mouseover", function(){
  				 d3.select(this)
  				   .style("fill", "red")
  			 })
  			 .on("mouseout", function(){
  				 d3.select(this)
  				   .style("fill", "orange")
  			 })	
  			 //애니메이션 처리
  			 .transition()
  			 .duration(1000)
  			 .delay(function(d, i){
  				 return i*500;
  			 })
  			.attr("y", function(d, i){
  				return svgHeight -d -offsetY;
  			})
  			.attr("height", function(d, i){
  				return d;
  			})
  			barElements.enter()
  					   .append("text")
  					   .attr("class", "barName")
  					   .attr("x", function(d, i){
  						   //막대그래프의 표시 간격을 맞춤
  						   return i*(barWidth + barMargin)+10+offsetX;
  					   })
  					   .attr("y", svgHeight -5 -offsetY)
  					   .text(function (d, i){
  						 return d;  
  					   })
  					   //눈금을 표시하기 위한 스케일 설정
  	var yScale = d3.scaleLinear()
  				   .domain([0, dataMax])
  				   .range([dataMax, 0])
  				   //세로 방향의 눈금을 설정하고 표시
  				 d3.select("#myGraph")
  				   .append("g")
  				   .attr("class", "axis")
  				   .attr("transform", "translate("+offsetX+", "+((svgHeight-300)-offsetY)+")")
  				   .call(d3.axisLeft()
  						   .scale(yScale)
  						   )
  	//가로 방향의 선을 표기
  	d3.select("#myGraph")
  	  .append("rect")
  	  .attr("class", "axis_x")
  	  .attr("width", svgWidth)
  	  .attr("height", "1")
  	  .attr("transform", "translate("+offsetX+", "+(svgHeight-offsetY)+")")
  	  //막대의 레이블을 표시
  	  barElements.enter()
  	  .append("text")
  	  .attr("class", "barName")
  	  .attr("x", function(d, i){
  		  return 1*25+10+offsetX;
  	  })
  	  .attr("y", svgHeight-offsetY+15)
  	  .text(function(d, i){
  		  return labelName[i];
  	  })
  		  
  	  });

	 //데이터 변환하기
//	 data.C_oppt_status.forEach(function(d){
//	      d.ing =+ d.ing; 
//	       d.cplt =+ d.cplt;
//	       d.fail =+ d.fail;
//	       console.log(d);
// });

  }