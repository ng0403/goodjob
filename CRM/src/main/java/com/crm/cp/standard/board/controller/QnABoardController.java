package com.crm.cp.standard.board.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.standard.board.service.QnABoardService;
import com.crm.cp.standard.board.vo.BoardVO;
import com.crm.cp.utils.PagerVO;

@Controller
@RequestMapping("/board/*")
public class QnABoardController {
	
	@Autowired
	QnABoardService qnaService; 
	
/*	@Autowired
	SessionAuthService sessionAuthService;
*/	
	@RequestMapping(value="/QnAInqr", method={RequestMethod.GET, RequestMethod.POST} )
	public ModelAndView QnA_List(@RequestParam(value = "pageNum", defaultValue = "1") int pageNum, @RequestParam Map<String, Object> map,  HttpSession session ) {

		System.out.println("board_list Insert");
		
//		접속된 사용자 아이디 
		String sessionID = (String) session.getAttribute("user_id");
		System.out.println("접속된 계정 : " + sessionID);
		
		
		map.put("pageNum", pageNum);
		map.put("sessionID", sessionID);  

		PagerVO page= qnaService.getQnaListCount(map);
		map.put("page", page);
		
		if(page.getEndRow() == 1){
			page.setEndRow(0);
		}
/*		List<SessionAuthVO> session_auth_list = sessionAuthService.sessionInqr(map);
		System.out.println("session 정보 : " + session_auth_list); 
*/		
 		List<Object> boardlist = qnaService.list(map); 
 		
		ModelAndView mov = new ModelAndView("/board/QnA_List");
		mov.addObject("boardlist", boardlist);
		mov.addObject("page",  page);
		mov.addObject("pageNum",  pageNum);
/*		mov.addObject("session_auth_list",session_auth_list); */
		
		return mov; 
	}
	
	@RequestMapping(value="/QnA_detail", method= RequestMethod.GET)
	public void boardDetail(@RequestParam("BOARD_NO") int BOARD_NO, Model model, HttpSession session) throws Exception {
		
		System.out.println("hi detail" + BOARD_NO);
		
//		접속된 사용자 아이디 
		String sessionID = (String) session.getAttribute("user_id");
		System.out.println("접속된 계정 : " + sessionID);
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("sessionID", sessionID);  
		
		
		
		qnaService.viewadd(BOARD_NO);
		
		BoardVO vo = new BoardVO();
		vo = qnaService.detail(BOARD_NO);
		String QUESTION_TYPE_CD = vo.getQUESTION_TYPE_CD();
		String TITLE = vo.getTITLE();
		
		BoardVO vo1 = new BoardVO();
		vo1 = (BoardVO) qnaService.CODE(QUESTION_TYPE_CD);
		
		String CODE_TXT = vo1.getCODE_TXT();
		
		String QUESTION_TITLE = "[" + CODE_TXT + "] " + "    " + TITLE;
		
		
 		vo.setQUESTION_TITLE(QUESTION_TITLE);
		
  		model.addAttribute("boardlist", vo );
		 
	}
	 
	
	@RequestMapping(value="/QnA_insert", method=RequestMethod.GET)
	public void board_add() {
		  
	}
	
	@RequestMapping(value="/QnA_insert", method=RequestMethod.POST)
	public String  board_insert(BoardVO vo) { 
		System.out.println("QnA Insert Entering");
		qnaService.insert(vo);  
   
		System.out.println("board_insert success....");
 
	 
		return "redirect:/board/QnAInqr"; 
		 
	} 
	
	
	@RequestMapping(value="/QnA_modify", method=RequestMethod.GET)
	public void board_modifyPage(int BOARD_NO, Model model)
	{
		BoardVO vo = new BoardVO();
		vo = qnaService.read(BOARD_NO);
		String QUESTION_TYPE_CD = vo.getQUESTION_TYPE_CD();
		String TITLE = vo.getTITLE();
		
		String QUESTION_TITLE = "[" + QUESTION_TYPE_CD + "] " + "    " + TITLE;
		
		
		vo.setQUESTION_TITLE(QUESTION_TITLE);
		System.out.println("modify Page Entering");
		model.addAttribute( "boardVO", vo );
		System.out.println("modify string" + model.toString());
	}
	
	@RequestMapping(value="/QnA_modify", method=RequestMethod.POST)
	public String board_modify(BoardVO vo)
	{
		System.out.println("modify  Entering" + vo);
		
		qnaService.modify(vo);
		System.out.println("modify success" + vo.toString());
		
		return "redirect:/board/QnAInqr";
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
	
	

}
