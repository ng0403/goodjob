<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>공지사항</title>
<script type="text/javascript">
	
</script>
<style type="text/css">
#title .caption{
  	color:#484848;
  	font-weight:bold;
  	border-bottom: 1px solid #dddddd;
  	padding-bottom: 10px;
  	text-align: left;
  	padding-bottom: 10px;
  }
</style>
</head>
<body>

	<div id="title">
		<div class="caption">■ 영업정보 > 공지사항</div>
	</div>

	<div id="noticebody">
		<div>
			<select id="noticeselectbox" class="noticeselectbox">

				<option>공지</option>
				<option value="empty">전체 공지</option>
				<option value="0001">부서 공지</option>
				<option value="0002">실 공지</option>
				<option value="0003">팀 공지</option>
			</select> <input type="button" id="searchnoticebtn"
				class="searchbtn btn-default" value="검색"> <input type="text"
				id="searchnoticeinput" name="searchnoticeinput"
				placeholder="검색어를 입력해주세요">
		</div>

		<table id="noticetable">
			<thead>
				<tr>
					<td style="width: 50%;">제목</td>
					<td style="width: 10%;">시작일자</td>
					<td style="width: 10%; text-align: center;">조회수</td>
					<td style="width: 10%;">종료일자</td>
					<td style="width: 10%;">담당부서</td>
					<td style="width: 10%;">게시자</td>
				</tr>
			</thead>

			<tbody>

			</tbody>
		</table>
	</div>
</body>
</html>