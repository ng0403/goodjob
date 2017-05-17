package com.crm.cp.standard.board.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crm.cp.standard.board.dao.BNoticeDao;
import com.crm.cp.standard.board.vo.BoardVO;
import com.crm.cp.utils.PagerVO;

@Service
public class BNoticeServiceImpl implements BNoticeService {
	
	@Autowired
	BNoticeDao noticeDao;
	
	
	//전체리스트 개수 
		@Override
		public PagerVO getNoticeListCount(Map<String, Object> boardMap) {
			System.out.println("BoardListCount service " +  boardMap.toString());
			int pageNum = (Integer) boardMap.get("pageNum");
			// 현재 페이지 얻어오기
			PagerVO page = new PagerVO(pageNum, 0, 10, 10);
			// 전체 글의 갯수 구하기
			System.out.println("actPage Num " + pageNum);
			int totalRowCount = noticeDao.getNoticeListCount(boardMap);
			System.out.println("totalRowCount ? " + totalRowCount);		
			page = new PagerVO(pageNum, totalRowCount, 10, 10);
		
			return page;
		}
		
		//전체 리스트
		@Override
		public List<Object> list(Map map) {
			System.out.println("boardList Service " + map.toString());
	 		return noticeDao.list(map);
		}

		@Override
		public List<BoardVO> noticeList() {
 			return noticeDao.noticeList();
		}

}
