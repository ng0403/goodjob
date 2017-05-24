package com.crm.cp.standard.board.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.standard.board.service.BoardService;
import com.crm.cp.standard.board.service.QnABoardService;
import com.crm.cp.standard.board.vo.BoardVO;
import com.crm.cp.utils.PagerVO;

@Controller
/*@RequestMapping("/board/*")*/
public class QnABoardController {
	
	@Autowired
	QnABoardService qnaService; 
	@Autowired
	BoardService boardService;
	
/*	@Autowired	
	SessionAuthService sessionAuthService;
*/	
	@RequestMapping(value="/QnAInqr", method={RequestMethod.GET, RequestMethod.POST} )
	public ModelAndView QnA_List(@RequestParam(value = "pageNum", defaultValue = "1") int pageNum, @RequestParam("BOARD_MNG_NO") String BOARD_MNG_NO, @RequestParam Map<String, Object> map,  HttpSession session ) {

		System.out.println("qna_list Entering" + map.toString());
		
//		접속된 사용자 아이디 
		String sessionID = (String) session.getAttribute("user");
		System.out.println("접속된 계정 : " + sessionID);
		
		if (session.getAttribute("user") == null) {
			return new ModelAndView("redirect:/");
		}
		
		map.put("pageNum", pageNum);
		map.put("sessionID", sessionID);   
 		PagerVO page= qnaService.getQnaListCount(map);
		System.out.println("qnaListCOunt? " + page.toString());
		map.put("page", page);
		
		if(page.getEndRow() == 1){
			page.setEndRow(0);
		}
  		List<Object> boardlist = qnaService.list(map); 
 		System.out.println("QnaList ? " + boardlist.toString());
 		System.out.println("map??" + map.toString()); 
		ModelAndView mov = new ModelAndView("QnA_List");
		mov.addObject("boardlist", boardlist);
		mov.addObject("page",  page);
		mov.addObject("pageNum",  pageNum);
		mov.addObject("BOARD_MNG_NO", BOARD_MNG_NO);
 		System.out.println("movvv??? " + mov.toString());
		return mov; 
	}
	
	@RequestMapping(value="/QnA_detail", method= RequestMethod.GET)
	public ModelAndView boardDetail(@RequestParam("BOARD_NO") int BOARD_NO, HttpSession session) throws Exception {
		
		System.out.println("qna detail" + BOARD_NO);
		
//		접속된 사용자 아이디 
		String sessionID = (String) session.getAttribute("user");
		System.out.println("접속된 계정 : " + sessionID);
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("sessionID", sessionID);  
		 
		
		qnaService.viewadd(BOARD_NO);
		
		BoardVO vo = new BoardVO();
		vo = qnaService.detail(BOARD_NO);
		System.out.println("qna detail? " + vo.toString());
		String QUESTION_TYPE_CD = vo.getQUESTION_TYPE_CD();
		String TITLE = vo.getTITLE();
		String BOARD_MNG_NO = vo.getBOARD_MNG_NO();
		
		BoardVO vo1 = new BoardVO();
		vo1 = (BoardVO) qnaService.CODE(QUESTION_TYPE_CD);
		
		String CODE_NM = vo1.getCD_NM();
		
		String QUESTION_TITLE = "[" + CODE_NM + "] " + "    " + TITLE;
		
		
 		vo.setQUESTION_TITLE(QUESTION_TITLE);
		
 		ModelAndView mov = new ModelAndView("QnA_detail");
 		mov.addObject("boardlist", vo);
 		mov.addObject("sessionID", sessionID);
 		mov.addObject("boardmnglist", boardService.checkBoardMngNo(BOARD_MNG_NO));
 		return mov;
		 
	}
	 
	//보드 추가
	@RequestMapping(value="/QnA_insert", method=RequestMethod.GET)
	public ModelAndView board_add(@RequestParam("BOARD_MNG_NO") String BOARD_MNG_NO) {
		
		System.out.println("BOARD_MNG_NO"+ BOARD_MNG_NO);
		
		  ModelAndView mov = new ModelAndView("QnA_insert");
		  mov.addObject("board_mng" ,BOARD_MNG_NO);
		  System.out.println("insert mov??" + mov.toString());

		  return mov;
	}
	
	//보드 추가
	@RequestMapping(value="/QnA_insert", method=RequestMethod.POST)
	public String  board_insert(BoardVO vo, HttpSession session, String BOARD_MNG_NO) { 
		System.out.println("QnA Insert Entering" + BOARD_MNG_NO);
		
		vo.setCREATED_BY(session.getAttribute("user").toString());
		vo.setUPDATED_BY(session.getAttribute("user").toString());
		qnaService.insert(vo);  
   
		System.out.println("board_insert success....");
 
	 
		return "redirect:/QnAInqr?BOARD_MNG_NO=" + BOARD_MNG_NO; 
		 
	} 
	
	
	@RequestMapping(value="/QnAmodify", method=RequestMethod.GET)
	public ModelAndView board_modifyPage(int BOARD_NO)
	{
		BoardVO vo = new BoardVO();
		vo = qnaService.read(BOARD_NO);
		String QUESTION_TYPE_CD = vo.getQUESTION_TYPE_CD();
		String TITLE = vo.getTITLE();
		
		String QUESTION_TITLE = "[" + QUESTION_TYPE_CD + "] " + "    " + TITLE;
		
		
		vo.setQUESTION_TITLE(QUESTION_TITLE);
		System.out.println("modify Page Entering" + vo.toString());
 		
		ModelAndView mov = new ModelAndView("QnA_modify");
		mov.addObject("boardVO", vo);
		
		
		return mov;
	}
	
	@RequestMapping(value="/QnA_modify", method=RequestMethod.POST)
	public String board_modify(BoardVO vo, HttpSession session)
	{

		vo.setUPDATED_BY(session.getAttribute("user").toString());
		System.out.println("modify  Entering" + vo);
		qnaService.modify(vo);
		System.out.println("modify success" + vo.toString());
		
		return "redirect:/QnAInqr?BOARD_MNG_NO=BMG1000003";
	}
	
	
	@RequestMapping(value="/search_QnAInqr", method={RequestMethod.GET,RequestMethod.POST})
	public @ResponseBody Map<String, Object> search_QnA_list( ModelMap model, HttpServletRequest request,
													   @RequestParam(value = "pageNum", defaultValue = "1") int pageNum) {
		System.out.println("search entering");
 		String keyword    = request.getParameter("keyword");
	    String qna_answer = request.getParameter("qna_answer");
	    
	    Map<String,Object> map = new HashMap<String,Object>();
	    
 		map.put("keyword", keyword);
		map.put("pageNum", pageNum);
		map.put("qna_answer" , qna_answer);
		
		PagerVO page = qnaService.getQnaListCount(map);
		System.out.println("page?" + page.toString());
		if(page.getEndRow()==1){
			page.setEndRow(0);
		}
		
		int startRow = page.getStartRow();
		int endRow = page.getEndRow();
		
		map.put("startRow", startRow);
		map.put("endRow", endRow);
		List<BoardVO> list = qnaService.QnAList(map); 
		String QUESTION_TYPE_CD = list.get(0).getQUESTION_TYPE_CD();
		map.put("QUESTION_TYPE_CD", QUESTION_TYPE_CD);
		
		
		List<BoardVO> list1 = qnaService.QnAList2(map); 

		model.addAttribute("page", page);
		model.addAttribute("pageNum", pageNum);
		model.addAttribute("qna_list", list1);

		return model;
	}
	
	
	
	// 전체리스트 출력 페이징/검색
		@RequestMapping(value = "/qnaPaging", method = RequestMethod.POST)
		public @ResponseBody Map<String, Object> ActListSearch(HttpSession session,
				@RequestParam(value = "boardPageNum", defaultValue = "1") int boardPageNum, @RequestParam Map<String, Object> boardMap) {
			System.out.println("boardPageNum " + boardMap.toString());
			System.out.println("qnaPaging entering"+ boardMap.toString()); 
			boardMap.put("boardPageNum", boardPageNum);

			PagerVO page = qnaService.boardListCount(boardMap);
			System.out.println("boardPage ? " + page.toString());
			boardMap.put("page", page);

			List<BoardVO> boardList = qnaService.boardAllList(boardMap);
			System.out.println("QnALIST? "  + boardList.toString());
			System.out.println("boardListSize? " + boardList.size());
			boardMap.put("boardList", boardList);
			boardMap.put("boardListSize", boardList.size());

			return boardMap;
		}
	
	

}
