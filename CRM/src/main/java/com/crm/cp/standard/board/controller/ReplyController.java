package com.crm.cp.standard.board.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.crm.cp.standard.board.service.BoardService;
import com.crm.cp.standard.board.service.ReplyService;
import com.crm.cp.standard.board.vo.ReplyVO;
import com.crm.cp.utils.PagerVO;

@Controller
/*@RequestMapping("/reply")*/
public class ReplyController {
	
	@Autowired
	ReplyService replyService;
	BoardService boardService;
	
	@RequestMapping(value="/reply_add", method=RequestMethod.POST) 
	public ResponseEntity<List<ReplyVO>> replyadd(@RequestBody ReplyVO vo, HttpSession session){
		int BOARD_NO = vo.getBOARD_NO();
		System.out.println("entering");
		vo.setCREATED_BY(session.getAttribute("user").toString());
		vo.setUPDATED_BY(session.getAttribute("user").toString());
		System.out.println("replyvo?" +vo.toString());
		
		//q&a 답변을 할 때에 answer flg 변환
  		
		if(vo.getBOARD_MNG_NO().equals("BMG1000003"))
		{
			replyService.AnswerFlg(BOARD_NO);
		}
		
		ResponseEntity<List<ReplyVO>> entity = null;
		    try {
 		      replyService.addReply(vo); 
		      entity = new ResponseEntity(replyService.listReply(BOARD_NO), HttpStatus.OK);
		    } catch (Exception e) {
		      e.printStackTrace();
		      entity = new ResponseEntity( HttpStatus.BAD_REQUEST);
		    }
		    return entity;
	}
	
	
	 @RequestMapping(value = "/reply_list/{BOARD_NO}", method = RequestMethod.GET)
	  public ResponseEntity<List<ReplyVO>> list(@PathVariable("BOARD_NO") Integer BOARD_NO, @RequestParam Map<String, Object> map) {
		System.out.println("board_no ajax " + map.toString()); 
 	    ResponseEntity<List<ReplyVO>> entity = null;
	    try {
	      
 	      entity = new ResponseEntity(replyService.replyAllList(map), HttpStatus.OK);

	    } catch (Exception e) {
	      e.printStackTrace();
	      entity = new ResponseEntity(HttpStatus.BAD_REQUEST);
	    }
	    
	    return entity;
	  }
	 
	 
	 @RequestMapping(value="/reply_remove", method=RequestMethod.POST) 
		public ResponseEntity<String> reply_remove(@RequestBody ReplyVO vo){
			
		 System.out.println("hello delete reply" + vo.toString());
			 
			ResponseEntity<String> entity = null;
			
			//q&a 답변을 할 때에 answer flg 변환
	  		Integer BOARD_NO = vo.getBOARD_NO();
	  		String REPLY_NO = vo.getREPLY_NO(); 
			
			    try {
	 		      replyService.removeReply(REPLY_NO); 
	 		      
	 		     if(vo.getBOARD_MNG_NO().equals("BMG1000003"))
	 			{
	 				int replyCount = replyService.replyCount(BOARD_NO);
	 				if(replyCount == 0){
	 				replyService.AnswerFlgN(BOARD_NO);
	 				}
	 			}
	 		      
			      entity = new ResponseEntity("success", HttpStatus.OK);
			    } catch (Exception e) {
			      e.printStackTrace();
			      entity = new ResponseEntity( HttpStatus.BAD_REQUEST);
			    }
			    return entity;
		}
	 
	 
	 @RequestMapping(value="/search_replyInqr", method={RequestMethod.GET,RequestMethod.POST})
		public @ResponseBody Map<String, Object> search_reply_list( ModelMap model, HttpServletRequest request,
														   @RequestParam(value = "replyPageNum", defaultValue = "1") int replyPageNum) {
			System.out.println("search entering1111");
	 		String BOARD_NO = request.getParameter("BOARD_NO");
 	 		System.out.println("replyPageNum ?? " + replyPageNum);
	 		System.out.println("REPLY_NO !" + BOARD_NO);
 		    Map<String,Object> map = new HashMap<String,Object>();
		    
 			map.put("replyPageNum", replyPageNum);
 			map.put("BOARD_NO", BOARD_NO);
 
			PagerVO page = replyService.replyListCount(map);
			System.out.println("reply page?" + page.toString());
			if(page.getEndRow()==1){
				page.setEndRow(0);
			}
			
			int startRow = page.getStartRow();
			int endRow = page.getEndRow();
			
			map.put("startRow", startRow);
			map.put("endRow", endRow);

			List<ReplyVO> list = replyService.SearchList(map);
			System.out.println("reply list?" + list.toString()); 
			
			model.addAttribute("page", page);
			model.addAttribute("pageNum", replyPageNum);
			model.addAttribute("reply_list", list);
			model.addAttribute("replyListSize", list.size());

			return model;
		}
	 
	 
	// 전체리스트 출력 페이징/검색
		@RequestMapping(value = "/replyPaging", method = RequestMethod.POST)
		public @ResponseBody Map<String, Object> ActListSearch(HttpSession session,
				@RequestParam(value = "replyPageNum", defaultValue = "1") int replyPageNum, @RequestParam(value= "BOARD_NO") String BOARD_NO) {
			
			System.out.println("reply paging entering" + BOARD_NO);
			Map<String, Object> replyMap = new HashMap<String, Object>();  
			 
			replyMap.put("replyPageNum", replyPageNum);
			replyMap.put("BOARD_NO", BOARD_NO);

			PagerVO page = replyService.replyListCount(replyMap);
			System.out.println("boardPage ? " + page.toString());
			replyMap.put("page", page);

			List<ReplyVO> replyList = replyService.replyAllList(replyMap);
			System.out.println("replyList? "  + replyList.toString());
			System.out.println("replyListSize? " + replyList.size());
			replyMap.put("replyList", replyList);
			replyMap.put("replyListSize", replyList.size());

			return replyMap;
		}
	 
	 
	 

}
