/**
 * 함수 목록
 * chart()			: 영업기회상태 차트 
 */

$(function(){
//	chart();
	CircleChart();
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
  var ps;
  var dataMax = 300;
  var barWidth = 25;
  var barMargin = 40;
  
  //그래프 그리기
  barElements = d3.select("#myGraph")
  				  .selectAll("rect")
  				  .data(dataSet)
  				  //데이터가 추가될 때
  barElements.enter()
  			 .append("rect")
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
  					   .attr("class", "barNum")
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
			  		  return i*65+10+offsetX;
			  	  })
			  	  .attr("y", svgHeight-offsetY+10)
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


//원그래프 데이터 차트
function CircleChart(){
	  d3.json("opptChartStatus", function (error, data){
		  var dataSet = [];
		  for(var i in data.C_oppt_status[0]){
			  dataSet.push(data.C_oppt_status[0][i]);
		  }
		  //SVG 요소의 넓이와 높이를 구함.
	  var svgEle = document.getElementById("myGraph");
	  var svgWidth = window.getComputedStyle(svgEle, null).getPropertyValue("width");
	  var svgHeight = window.getComputedStyle(svgEle, null).getPropertyValue("height");
	  
	  //값에는 단위가 붙어 있으므로 높이를 구함.
	  svgWidth = "450";//parseFloat(svgWidth);
	  svgHeight = "220";//parseFloat(svgHeight);
	  
	  //원 그래프의 좌표값을 계산하는 메서드
	  var pie = d3.pie()	//원그래프 레이아웃
	  
	  //원 그래프의 안쪽 반지름, 바깥쪽 반지름 설정
	  var arc = d3.arc().innerRadius(30).outerRadius(100)
	  
	  //원 그래프 그리기
	  var pieElements = d3.select("#myGraph")
	  					  .selectAll("g")		//g 요소 지정
	  					  .data(pie(dataSet))	//데이터를 요소에 연결
	  					  .enter()
	  					  .append("g")			//무게 중심 계산을 위해 그룹과하기
	  					  
	 //원 그래프의 중심으로 함.
	  					  .attr("transform", "translate("+svgWidth/2+", "+svgHeight/2+")")
	var ps=d3.select("#myGraph")
		  .append("rect")
		  .attr("class", "ps")
		  .attr("width", "25px")
		  .attr("height", "25px")
		  .attr("x", "0")
		  .attr("y", "20")
		  .attr("fill", "rgb(255, 51, 68)")
	var psLabel=d3.select("#myGraph").append("text")
				    .attr("x", "40")
				    .attr("y", "40")
				    .attr("fill", "black")
				    .attr("font-family", "sans-serif")
				    .attr("font-size","15")
				    .text("진행중")
    var ps2=d3.select("#myGraph")
			    .append("rect")
			    .attr("class", "ps2")
			    .attr("width", "25px")
			    .attr("height", "25px")
			    .attr("fill", "rgb(255, 115, 40)")
			    .attr("x", "0")
			    .attr("y", "60")
    var psLabel2=d3.select("#myGraph").append("text")
			    .attr("x", "40")
			    .attr("y", "80")
			    .attr("fill", "black")
			    .attr("font-family", "sans-serif")
			    .attr("font-size","15")
			    .text("계약완료")
    var ps3=d3.select("#myGraph")
			    .append("rect")
			    .attr("class", "ps3")
			    .attr("width", "25px")
			    .attr("height", "25px")
			    .attr("fill", "rgb(211, 212, 213)")
			    .attr("x", "0")
			    .attr("y", "100")
    var psLabel3=d3.select("#myGraph")
    			.append("text")
			    .attr("x", "40")
			    .attr("y", "120")
			    .attr("fill", "black")
			    .attr("font-family", "sans-serif")
			    .attr("font-size","15")
			    .text("계약실패")
		    

	 //데이터 추가
	  pieElements.append("path")		//데이터 수만큼 path 요소가 추가됨.
	  			 .attr("class", "pie")	//CSS 클래스 설정
	  			 .style("fill", function(d, i){
	  				 //색을 반환
	  				 return ["#ff3344","#ff7328","#d3d4d5","#dfd"][i]	//표준 20색중 색을 반환
	  			 })
	  			 .transition()
	  			 .duration(200)
	  			 .delay(function(d, i){		//그릴 원 그래프의 시간을 어긋나게 표시
	  				 return i*200
	  			 })
	  			 .ease(d3.scaleLinear)			//직선적인 움직임으로 변경
//	  			 .ease("linear")			//직선적인 움직임으로 변경
	  			 .attrTween("d", function(d, i){	//보간 처리
	  				 var interpolate = d3.interpolate(
	  						 //각 부분의 시작 각도
	  						 {startAngle : d.startAngle, endAngle : d.startAngle}, 
	  						 //각 부분의 종료 각도
	  						 {startAngle : d.startAngle, endAngle : d.endAngle} 
	  				 );
	  				 return function(t){
	  					 return arc(interpolate(t));		//시간에 따라 처리
	  				 }
	  			 })
	  			 //합계의 수와 문자를 표시
	  			 var textElements = d3.select("#myGraph")
	  			 					  .append("text")		//텍스트 요소 추가
	  			 					  .attr("class", "total")		//CSS 클래스 설정
	  			 					  //가운데 표시
	  			 					  .attr("transform", "translate("+svgWidth/2+", "+(svgHeight/2+5)+")")
//	  			 					  .text("영업기회상태")	//문자표시
	  			 					  //숫자를 부채꼴의 가운데에 표시
	  			 					  pieElements.append("text")		//데이터 수만큼 text 요소가 추가됨
	  			 					  			 .attr("class", "pieNum")	//CSS 클래스 설정
	  			 					  			 .attr("transform", function(d, i){
	  			 					  				 //부채꼴의 중심으로 함.
	  			 					  				 return "translate("+arc.centroid(d)+")";
	  			 					  			 })
	  			 					  			 .text(function(d, i){
	  			 					  				 return d.value;		//값 표시
	  			 					  			 })
	  	  });
}
