<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style>

/* 블로그메뉴 */
div, ul, li { margin:0; padding:0; }

#blogMenu {
	float:right;
	margin:0px 5px 3px 5px;
	padding:0 0 3px 0;
	-moz-border-radius: 3px;
	-khtml-border-radius: 3px;
	-webkit-border-radius: 3px;
	border-radius: 3px;
}

#blogMenu, ul ul {
	box-shadow: 0px 0px 15px rgba(0,0,0,.3);
	-moz-box-shadow: 0px 0px 15px rgba(0,0,0,.3);
	-webkit-box-shadow: 0px 0px 15px rgba(0,0,0,.3);
	-o-box-shadow: 0px 0px 15px rgba(0,0,0,.3);
	background-color:#5c5c5c;
}

#blogMenu ul li {
	float:left;
	list-style-type:none;
}

#blogMenu a {
	height:16px;
	color:#f1f1f1;
	font-family:arial;
	font-size:12px;
	padding:0 10px 0 10px;
	text-decoration:none;
}

#blogMenu a:hover {
	color:#D4F4FA;
	border-bottom:3px solid #FAED7D;
}

#blogMenu ul ul {
	margin-top:3px;
	display:none;
	position:absolute;
	-moz-border-radius-bottom-left: 3px;
	 -khtml-border-bottom-left-radius: 3px;
	 -webkit-border-bottom-left-radius: 3px;
	 border-bottom-left-radius: 3px;
	-moz-border-radius-bottom-right: 3px;
	 -khtml-border-bottom-right-radius: 3px;
	 -webkit-border-bottom-right-radius: 3px;
	 border-bottom-right-radius: 3px;
}

#blogMenu ul li:hover ul {
	display: block;
}

#blogMenu ul ul li {
	float:none;
}

</style>

</head>
<body>

<div id="blogMenu">
<ul>
	<li><a href="#">Menu 1</a></li>
	
	<li><a href="#">Menu 2</a>
	
		<ul>
			<li><a href="#">Sub Menu 1</a></li>
			<li><a href="#">Sub Menu 2</a></li>
			<li><a href="#">Sub Menu 3</a></li>
		</ul>

	</li>

	<li><a href="#">Menu 3</a>
	
		<ul>
			<li><a href="#">Sub Menu 1</a></li>
			<li><a href="#">Sub Menu 2</a></li>
			<li><a href="#">Sub Menu 3</a></li>
		</ul>
	
	</li>

	<li><a href="#">Menu 4</a></li>
	<li><a href="#">Menu 5</a></li>
</ul>
</div>

</body>
</html>