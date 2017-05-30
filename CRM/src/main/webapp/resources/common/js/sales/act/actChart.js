/**
 * 함수 목록
 * chart()			: 영업기회상태 차트 
 */

$(function(){
	CircleChart();
});
//데이터 불러오기 > 축과 척도 설정 > 틀 그리기 > 축 그리기 
//> 요소에 데이터 엮기 > 요소 속성 설정

//데이터 불러오기
     

//원그래프 데이터 차트
function CircleChart(){
	  d3.json("actChartStatus", function (error, data){
		  var dataSet1 = [];
		  for(var i in data.C_act_status[0]){
			  dataSet1.push(data.C_act_status[0][i]);
		  }
		  //SVG 요소의 넓이와 높이를 구함.
		  // svg 사이즈 틀 잡아줌.
	  var svgEle = document.getElementById("myActGraph");
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
	  var pieElements = d3.select("#myActGraph")
	  					  .selectAll("g")		//g 요소 지정
	  					  .data(pie(dataSet1))	//데이터를 요소에 연결
	  					  .enter()
	  					  .append("g")			//무게 중심 계산을 위해 그룹과하기
	  					  .attr("transform", "translate("+svgWidth/2+", "+svgHeight/2+")")	//원 그래프의 중심으로 함.
	
	  var ps=d3.select("#myActGraph")
		  .append("rect")
		  .attr("class", "second")
		  .attr("width", "25px")
		  .attr("height", "25px")
		  .attr("x", "0")
		  .attr("y", "20")
		  .attr("fill", "rgb(255, 51, 68)")
	
	  var psLabel=d3.select("#myActGraph").append("text")
				    .attr("x", "40")
				    .attr("y", "40")
				    .attr("fill", "black")
				    .attr("font-family", "sans-serif")
				    .attr("font-size","15")
				    .text("진행중")
    
	  var ps2=d3.select("#myActGraph")
			    .append("rect")
			    .attr("class", "ps2")
			    .attr("width", "25px")
			    .attr("height", "25px")
			    .attr("fill", "rgb(255, 115, 40)")
			    .attr("x", "0")
			    .attr("y", "60")
			    
	  var psLabel2=d3.select("#myActGraph").append("text")
			    .attr("x", "40")
			    .attr("y", "80")
			    .attr("fill", "black")
			    .attr("font-family", "sans-serif")
			    .attr("font-size","15")
			    .text("보류")
          
	  var ps3=d3.select("#myActGraph")
			    .append("rect")
			    .attr("class", "ps3")
			    .attr("width", "25px")
			    .attr("height", "25px")
			    .attr("fill", "rgb(211, 212, 213)")
			    .attr("x", "0")
			    .attr("y", "100")
    
	  var psLabel3=d3.select("#myActGraph")
    			.append("text")
			    .attr("x", "40")
			    .attr("y", "120")
			    .attr("fill", "black")
			    .attr("font-family", "sans-serif")
			    .attr("font-size","15")
			    .text("예정")
		    
	  var ps4=d3.select("#myActGraph")
			    .append("rect")
			    .attr("class", "ps4")
			    .attr("width", "25px")
			    .attr("height", "25px")
			    .attr("fill", "rgb(211, 212, 213)")
			    .attr("x", "0")
			    .attr("y", "100")
			    
	  var psLabel4=d3.select("#myActGraph")
			    .append("text")
			    .attr("x", "40")
			    .attr("y", "120")
			    .attr("fill", "black")
			    .attr("font-family", "sans-serif")
			    .attr("font-size","15")
			    .text("완료")

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
	  			 var textElements = d3.select("#myActGraph")
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
