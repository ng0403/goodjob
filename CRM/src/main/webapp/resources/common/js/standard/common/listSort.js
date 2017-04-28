//$(document).ready(function() {
//    $('table.tbl').each(function() {
//        var $table = $(this);
//        //플러그인 호출
//        $table.alternateRowColors();
// 
//        //테이블 헤더 정렬 : start table sort
//        $('th', $table).each(function(column) {
//            //해더의 CSS클래스가 sort-alpha로 설정되어있다면, ABC순으로 정렬
//            if ($(this).is('.sort-alpha')) {
//                var direction = -1;
//                //클릭시 정렬 실행 : 토글링으로 변경
//                $(this).click(function() {
//                direction = -direction;
//                var rows = $table.find('tbody > tr').get(); //현재 선택된 헤더관련 행 가져오기
//                    //자바스크립트의 sort 함수를 사용해서 오름차순 정렬
//                    rows.sort(function(a, b) {
//                        var keyA = $(a).children('td').eq(column).text().toUpperCase();
//                        var keyB = $(b).children('td').eq(column).text().toUpperCase();
// 
//                                if (keyA < keyB) return -direction;
//                                if (keyA > keyB) return direction;
//                                return 0;
//                            });
//                            //정렬된 행을 테이블에 추가
//                    $.each(rows, function(index, row) { 
//                            $table.children('tbody').append(row) });
//                    $table.alternateRowColors(); //재정렬
//                });
//            }
//        }); //end table sort
//    });
//});
//





//function convert(sValue, sDataType) {
//
//	switch(sDataType) {
//	
//		case "int":
//			return parseInt(sValue);
//		
//		case "float":
//			return parseFloat(sValue);
//		
//		case "date":
//			return new Date(Date.parse(sValue));
//		
//		default:
//			return sValue.toString();
//	}
//}
//
//function generateCompareTRs(iCol, sDataType) {
//
//	return function compareTRs(oTR1, oTR2) {
//	
//		var vValue1 = convert(oTR1.cells[iCol].firstChild.nodeValue, sDataType);
//		var vValue2 = convert(oTR2.cells[iCol].firstChild.nodeValue, sDataType);
//
//		if (vValue1 < vValue2) {
//			return -1;
//		} else if (vValue1 > vValue2) {
//			return 1;
//		
//		} else {
//			return 0;
//		}
//	};
//}
//
//function sortTable(sTableID, iCol, sDataType) {
//
//	var oTable = document.getElementById(sTableID);
//	var oTBody = oTable.tBodies[0];
//	var colDataRows = oTBody.rows;
//	var aTRs = new Array;
//
//	for (var i=0; i < colDataRows.length; i++) {
//
//		aTRs[i] = colDataRows[i];
//	}
//
//	if (oTable.sortCol == iCol) {
//		aTRs.reverse();
//	} else {
//		aTRs.sort(generateCompareTRs(iCol, sDataType));
//	}
//
//	var oFragment = document.createDocumentFragment();
//	
//	for (var i=0; i < aTRs.length; i++) {
//		oFragment.appendChild(aTRs[i]);
//	}
//
//	oTBody.appendChild(oFragment);
//	oTable.sortCol = iCol;
//
//}



//prototype.js와 같이 사용해야 함
//var TableSorter = Class.create({
//	initialize: function(element) {
//		this.element = $(element);
//		this.sortOrder = 'asc';
//		this.sortIndex = -1;
//		this.initColumns();
//	},
//	
//	initColumns: function() {
//		this.thead = this.element.down('thead');
//		var thead = this.element.down('thead');
//		var tbody = this.element.down('tbody');
//		if (!thead || !tbody) {
//			throw '테이블은 thead와 tbody 태그를 포함해야 합니다.';
//		}
//		this.headers = thead.down('tr').childElements();
//		
//		this.headers.each(function(e, i) {
//			e._headerIndex = i;
//			e.observe('click', this.onHeaderClick.bind(this));;
//			e.setStyle('cursor: hand;');
//		}.bind(this));
//		this.tbody = tbody;
//	},
//	
//	onHeaderClick: function(e) {
//	    var element = e.element();
//	    if (!('_headerIndex' in element)) {
//	    	element = element.ancestors().find(function(elt) { 
//	    		return '_headerIndex' in elt;
//		    });
//		    if (!((element) && '_headerIndex' in element))
//		        return;
//	    }
//		var rows = this.tbody.childElements();
//		var sortIndex = element._headerIndex;
//		
//		
//		if (this.sortIndex == sortIndex) {
//			this.sortOrder = (this.sortOrder == 'asc') ? 'desc' : 'asc';
//		} else {
//			this.sortIndex = sortIndex;
//		}
//		
//		var rows = rows.sortBy(function(row) {
//			alert(row.childElements().length);
//			var content = row.childElements()[this.sortIndex].innerHTML;
//			content = content.stripTags();
//			alert('[' + content + ']');
//			return content;
//		}.bind(this));
//		
//		if (this.sortOrder == 'desc') {
//			rows.reverse();
//		}
//		
//		rows.reverse().each(function(row, index) {
//			
//			var content = row.childElements()[this.sortIndex].innerHTML;
//			content = content.stripTags();
//			alert('[' + content + ']');
//			
//			if (index > 0) {
//				this.tbody.insertBefore(row, rows[index - 1]);
//			}
//	    }.bind(this));
//		
//		alert(e.element()._headerIndex);
//	}
//});

// tableSort.min.1.0.js
$(function() {
	$.fn.tableSort = function(viewSelector) {
	// 테이블 제목
	var columns = new Object();
	columns.name = new Array();
	columns.type = new Array();
	  
	// 테이블 내용
	var datas = new Array();
	  
	// 정렬할 테이블 칼럼 번호
	var index = 0;
	  
	// 출력할 부분 셀렉터 정의
	var selector = viewSelector;
	 
	// 테이블 컬럼 제목 
	for(i = 0; i < $("th").size(); i++) {
		columns.name[i] = $($("th").get(i));
	
		// 칼럼명 입력
		$(columns.name[i]).click(function(event) {
			selectColumn(event);
		});
	
	    // 칼럼 기본 소트 타입 입력, 내림차순 false, 오름차순 true
	    columns.type[i] = true;
	}
	
	// 테이블 내용, 행 기준.
	$(this).find("tr").each(function(n) {
		if(n > 0) datas[n - 1] = $(this);
	});
	  
	// 정렬 칼럼 선택
	var selectColumn = function(event) {
	for(j = 0; j < columns.name.length; j++) {
		if(columns.name[j].text() == $(event.target).text()) {
			sort(j);
			break;
	    }
	}
};
	  
	// 정렬 로직
	var sort = function(index) {
	/**/
		for(i = 0; i < datas.length - 1; i++) {
			for(j = 1; j < datas.length; j++) {
				// 오름차순 정렬
				if(columns.type[index]) {
					if(getData(datas[j - 1], index) > getData(datas[j], index)) {
						var tmp = datas[j - 1];
						datas[j - 1] = datas[j];
						datas[j] = tmp;
					}
					// 내림차순 정렬
				} else {
					if(getData(datas[j - 1], index) < getData(datas[j], index)) {
						var tmp = datas[j - 1];
						datas[j - 1] = datas[j];
						datas[j] = tmp;
					}
				}
			}
		}
	
		/**/
		if(columns.type[index]) columns.type[index] = false;
			else columns.type[index] = true;
		};
		
		// 비교할 값을 얻어 옴.
		var getData = function(data, index) {
			return $($(data).children().get(index)).text();
		};
		
		this.view = function(trStyle) {
			var result = "";
			for(i = 0; i < datas.length; i++) {
				if(trStyle) 
					result += trStyle + $(datas[i]).html() + "</tr>";
				else 
					result += "<tr>" + $(datas[i]).html() + "</tr>";
				}
		
				$(selector).html(result);
		};
		
		return this;
		};
	});

