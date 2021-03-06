package com.crm.cp.standard.board.controller;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.poi.xslf.usermodel.XMLSlideShow;
import org.apache.poi.xslf.usermodel.XSLFSlide;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.standard.board.service.BoardService;
import com.crm.cp.standard.board.service.ReplyService;
import com.crm.cp.standard.board.vo.BoardVO;
import com.crm.cp.utils.FileManager;
import com.crm.cp.utils.PagerVO;

@Controller
/*@RequestMapping("/board/*")
*/public class BoardController {
	
	private static final String[] filename = null;
	@Autowired
	BoardService boardService; 
	ReplyService replyService;
	/*@Autowired
	SessionAuthService sessionAuthService;*/
	 
	//보드 전체 리스트.
	@RequestMapping(value="/boardInqr", method={RequestMethod.GET, RequestMethod.POST})
	public ModelAndView boardList(@RequestParam(value = "pageNum", defaultValue = "1") int pageNum, @RequestParam Map<String, Object> map ,HttpSession session
			,@RequestParam("BOARD_MNG_NO") String BOARD_MNG_NO) throws Exception{
		 
		System.out.println("board_list Entering " + map.toString());
		
//		접속된 사용자 아이디 
		String sessionID = (String) session.getAttribute("user");
		System.out.println("접속된 계정 : " + sessionID);
		 
		if (session.getAttribute("user") == null) {
			return new ModelAndView("redirect:/");
		} 
		
		
		map.put("pageNum", pageNum);
		map.put("sessionID", sessionID); 
		map.put("BOARD_MNG_NO", BOARD_MNG_NO); 
		PagerVO page=boardService.getBoardListCount(map); 
		map.put("page", page);
		
 		
		if(page.getEndRow() == 1){
			page.setEndRow(0);
		}
  		List<Object> boardlist = boardService.list(map); 
 		System.out.println("list boardlist " + boardlist.toString());
 		System.out.println("map??" + map.toString());
		ModelAndView mov = new ModelAndView("board_list");
		mov.addObject("boardlist", boardlist);
		mov.addObject("page",  page);
		mov.addObject("pageNum",  pageNum);
/*		mov.addObject("session_auth_list",session_auth_list);*/
		mov.addObject("BOARD_MNG_NO", BOARD_MNG_NO);
		
		System.out.println("mov board_mng_no?" + mov.toString());
		return mov; 
	} 
	
	//보드 상세정보
	@RequestMapping(value="/boardDetail", method= RequestMethod.GET)
	public ModelAndView boardDetail(@RequestParam("BOARD_NO") int BOARD_NO, HttpSession session) throws Exception {
		System.out.println("detail entering");
		//		접속된 사용자 아이디 
		String sessionID = (String) session.getAttribute("user");
		System.out.println("접속된 계정 : " + sessionID);
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("sessionID", sessionID);   
 
		BoardVO vo = boardService.detail(BOARD_NO);
		System.out.println("vovo?" + vo);
		
		String BOARD_MNG_NO = vo.getBOARD_MNG_NO();
		
	 
		
		String FILE_CD = vo.getFILE_CD(); 
		
		boardService.viewadd(BOARD_NO);
		ModelAndView mov = new ModelAndView("board_detail");
 	    mov.addObject("sessionID",sessionID);
		if(FILE_CD == null)
		{ 
			mov.addObject("boardlist", boardService.detail(BOARD_NO));
		}
		else
		{ 
			 
			mov.addObject("boardlist",  boardService.ReadFilePage(BOARD_NO));
		}
		mov.addObject("boardmnglist",boardService.checkBoardMngNo(BOARD_MNG_NO));
		System.out.println("mov list? " + mov.toString());	
		
		return mov;
		 
	}
	
	
	//보드 추가.
	@RequestMapping(value="/boardInsert", method=RequestMethod.GET)
	public ModelAndView board_add(@RequestParam("BOARD_MNG_NO") String BOARD_MNG_NO) {
		  System.out.println("Entering"); 
 		  System.out.println(BOARD_MNG_NO);
		  ModelAndView mov = new ModelAndView("board_insert");
		  mov.addObject("board_mng" ,BOARD_MNG_NO);
		  mov.addObject("boardmnglist", boardService.checkBoardMngNo(BOARD_MNG_NO));
		  System.out.println("insert mov??" + mov.toString());

 		  return mov; 
	}
	
	//보드 추가.
	@RequestMapping(value="/boardInsert", method=RequestMethod.POST)
	public String  board_insert(MultipartHttpServletRequest multi, HttpServletRequest request, BoardVO attach, HttpSession session, @RequestParam Map<String, Object> map ) throws IOException { 
		
		System.out.println("reqeust content type ? " + request.getContentType().toString());
		String BOARD_MNG_NO = (String) map.get("BOARD_MNG_NO");
		
		String sessionID = (String) session.getAttribute("user");
		System.out.println("접속된 계정 : " + sessionID);
		attach.setCREATED_BY(sessionID);
 		
		
		MultipartHttpServletRequest multipartHttpServletRequest = (MultipartHttpServletRequest)request;
		
		Iterator<String> iterator = multipartHttpServletRequest.getFileNames();
	    MultipartFile multipartFile = null; 
 	      
	     while(iterator.hasNext()){
	        multipartFile = multipartHttpServletRequest.getFile(iterator.next());
	        System.out.println("multipartFile? " + multipartFile);
	        if(multipartFile.isEmpty() == false){
	        	
 	 		    attach.setFILE_NM(multipartFile.getOriginalFilename());
 	 		    String name = multipartFile.getOriginalFilename();
 	 		    System.out.println("name??" + name); 
 	 		    StringTokenizer toke = new StringTokenizer(name, ".");
 	 		    String[] filename = new String[2];
 	 		    
 	 		    for(int i= 0; toke.hasMoreElements() ; i++)
 	 		    {
  	 		     filename[i] = toke.nextToken(); 
   	 		    }
 	 		   
 	 		    attach.setFILE_NM(filename[0]);
 	 		    attach.setFILE_EXT(filename[1]);  
 	 		    
 	        }
	    } 
 
	    if(attach.getFILE_NM() != null){ 
		FileManager fileManager = new FileManager(); 
		
		List<MultipartFile> file = multi.getFiles("filedata");

		for(int i=0; i<file.size(); i++){
			
			String uploadpath = fileManager.doFileUpload(file.get(i), request);
		
			attach.setFILE_PATH(uploadpath);
			boardService.insertAttachData(attach);
			
		
		}
	 }
	    String file_nm = attach.getFILE_NM();
	    if(file_nm == null)
	    {
	    	attach.setFILE_NM("");
	    }
 		boardService.insert(attach);  
   
		System.out.println("board_insert success....");
 
	 
		return "redirect:/boardInqr?BOARD_MNG_NO=" + BOARD_MNG_NO; 
		 
	} 
	  
	//보드 수정
	@RequestMapping(value="/boardModify", method=RequestMethod.GET)
	public ModelAndView board_modifyPage(int BOARD_NO, Model model, HttpSession session)
	{ 
		System.out.println("hi MODIFY" + BOARD_NO);
		
		String sessionID = (String) session.getAttribute("user");
		System.out.println("접속된 계정 : " + sessionID);
 		
		BoardVO vo = boardService.detail(BOARD_NO);
		vo.setUPDATED_BY(sessionID);
		System.out.println("modify vo/" + vo);
		String FILE_CD = vo.getFILE_CD();
		
		ModelAndView mov = new ModelAndView("board_modify");

		if(FILE_CD != null){
			mov.addObject("boardVO", boardService.readFileModify(BOARD_NO));
			System.out.println("file has");
		}
		else{
			mov.addObject("boardVO", boardService.read(BOARD_NO));
			System.out.println("file not has");
		}
		String 	BOARD_MNG_NO = vo.getBOARD_MNG_NO();
		mov.addObject("boardmnglist",boardService.checkBoardMngNo(BOARD_MNG_NO)); 
		
		System.out.println("modivy vo? " + mov.toString());
		return mov;
		 
		
	}
	
	//보드 수정
	@RequestMapping(value="/board_modify", method=RequestMethod.POST)
	public String board_modify(BoardVO vo, HttpSession session, MultipartHttpServletRequest multi, HttpServletRequest request, BoardVO attach) throws IOException
	{
		String sessionID = (String) session.getAttribute("user");
		System.out.println("접속된 계정 : " + sessionID);

 		vo.setUPDATED_BY(sessionID);
		System.out.println("modify  Entering" + vo);
		
		
		MultipartHttpServletRequest multipartHttpServletRequest = (MultipartHttpServletRequest)request;
		Iterator<String> iterator = multipartHttpServletRequest.getFileNames();
	    MultipartFile multipartFile = null; 
 	      
	     while(iterator.hasNext()){
	        multipartFile = multipartHttpServletRequest.getFile(iterator.next());
	        System.out.println("multipartFile? " + multipartFile);
	        if(multipartFile.isEmpty() == false){
	        	
 	 		    attach.setFILE_NM(multipartFile.getOriginalFilename());
 	 		    String name = multipartFile.getOriginalFilename();
 	 		    
 	 		    System.out.println("file modify name? " + name.toString());
 	 		    StringTokenizer toke = new StringTokenizer(name, ".");
 	 		    String[] filename = new String[2];
 	 		    
 	 		    for(int i= 0; toke.hasMoreElements() ; i++)
 	 		    {
  	 		     filename[i] = toke.nextToken(); 
  	 		     System.out.println("modify filename ? " + filename[i].toString());
   	 		    }
 	 		   
 	 		    attach.setFILE_NM(filename[0]);
 	 		    attach.setFILE_EXT(filename[1]);  
 	 		    
 	        }
	    } 
		
	    if(attach.getFILE_NM() != null){ 
		FileManager fileManager = new FileManager(); 
		
		List<MultipartFile> file = multi.getFiles("filedata");
	
		for(int i=0; i<file.size(); i++){
			
			String uploadpath = fileManager.doFileUpload(file.get(i), request);
		
			attach.setFILE_PATH(uploadpath);
			System.out.println("modify file up load attach ? " + attach.toString());
			boardService.insertAttachData(attach);
		
		}
	 }
	    String file_nm = attach.getFILE_NM();
	    if(file_nm == null)
	    {
	    	attach.setFILE_NM("");
	    }
		
		 
		
		boardService.modify(vo);
		String BOARD_MNG_NO = vo.getBOARD_MNG_NO();
		return "redirect:/boardInqr?BOARD_MNG_NO=" + BOARD_MNG_NO;
	}
	
	//보드 삭제
	@RequestMapping(value="/board_remove", method=RequestMethod.POST) 
	 @ResponseBody
	public ResponseEntity<String> board_remove(@RequestBody String del_code){ 
		
		System.out.println("remove insert");

		String[] delcode = del_code.split(",");
		ResponseEntity<String> entity = null;
		System.out.println("delcode?" + delcode.toString());
		System.out.println("delcode length" + delcode.length);
		for(int i = 0; i < delcode.length; i++)
		{
			String dc = delcode[i];
			System.out.println("dc?" +  dc); 
			boardService.removeBoard(dc);
			System.out.println("success"); 
			
			if(i == delcode.length-1)
			{
		 	      entity = new ResponseEntity("success", HttpStatus.OK);
		 	      System.out.println(entity);
			}
		}  
	     
	    return entity;
	}
	
	//보드 삭제
	@RequestMapping(value="/detail_remove", method=RequestMethod.POST) 
	public String detailRemove(int BOARD_NO, String BOARD_MNG_NO){ 
		
		System.out.println("remove insert" + BOARD_NO + "," + BOARD_MNG_NO);

		 
			boardService.removeDetail(BOARD_NO); 
			
	    return "redirect:/boardInqr?BOARD_MNG_NO="+BOARD_MNG_NO;
	}
	
	//ajax 리스트
	/*@RequestMapping(value="/ajax_list", method=RequestMethod.POST) 
	 @ResponseBody
	public ResponseEntity<List<BoardVO>> ajax_list( ){ 
		
		System.out.println("ajax List Entering");
	  
		ResponseEntity<List<BoardVO>> entity = null;
	    try {
 	      entity = new ResponseEntity(boardService.ajaxlist(), HttpStatus.OK);
	      System.out.println("entity? "+ entity);
	      System.out.println("insert entity" + entity);
	    } catch (Exception e) {
	      e.printStackTrace();
	      entity = new ResponseEntity( HttpStatus.BAD_REQUEST);
	    }
	    return entity;
		 
	}*/
	
	
	@RequestMapping(value="/QnAajax_list", method=RequestMethod.POST) 
	 @ResponseBody
	public ResponseEntity<List<BoardVO>> QnAajax_list(){ 
		
		System.out.println("QnAajax List Entering");

		ResponseEntity<List<BoardVO>> entity = null;
	    try {
	      entity = new ResponseEntity(boardService.QnAajaxlist(), HttpStatus.OK);
	      System.out.println("entity? "+ entity);
	      System.out.println("insert entity" + entity);
	    } catch (Exception e) {
	      e.printStackTrace();
	      entity = new ResponseEntity( HttpStatus.BAD_REQUEST);
	    }
	    return entity; 
	    
	}
	
	
	@RequestMapping(value="/search_boardInqr", method={RequestMethod.GET,RequestMethod.POST})
	public @ResponseBody Map<String, Object> search_board_list( ModelMap model, HttpServletRequest request,
													   @RequestParam(value = "pageNum", defaultValue = "1") int pageNum) {
		System.out.println("search entering1111");
 		String keyword    = request.getParameter("keyword");
	    
	    Map<String,Object> map = new HashMap<String,Object>();
	    
 		map.put("keyword", keyword);
		map.put("pageNum", pageNum);

		PagerVO page = boardService.getBoardListCount(map);
		System.out.println("page?" + page.toString());
		if(page.getEndRow()==1){
			page.setEndRow(0);
		}
		
		int startRow = page.getStartRow();
		int endRow = page.getEndRow();
		
		map.put("startRow", startRow);
		map.put("endRow", endRow);

		List<BoardVO> list = boardService.SearchList(map);
		System.out.println("list?" + list.toString());
		
		model.addAttribute("page", page);
		model.addAttribute("pageNum", pageNum);
		model.addAttribute("qna_list", list);

		return model;
	}
	 
	
	@RequestMapping(value = "/file_down", method = RequestMethod.GET)
	public void downloadFile( @RequestParam(value = "FILE_CD") String FILE_CD, HttpServletResponse response, HttpServletRequest request) {
		
 		
		Map<?, ?> map = (Map<?, ?>) boardService.searchOneFiledata(FILE_CD); 
  		if (map != null) {

			String fileroot = map.get("FILE_PATH").toString();
			String[] temp = fileroot.split("\\\\");
			String fileName = temp[temp.length - 1];
			String root = "";
 			
			//"x`x`"
			for (int i = 0; i < (temp.length - 2); i++) {
				root += temp[i] + "\\";
 			}

			FileManager fileManager = new FileManager();

			//파일의 확장자를 구한다.
 			int index = fileName.lastIndexOf(".");
			String ext = null;
			if(index != -1) {
				ext = fileName.substring(index + 1);
				System.out.println("확장자 ? "  + ext);
			} 
			
			
			boolean existfile = fileManager.doFileDownload(fileName, root, response);
 
			
			if (!existfile) {
				try {
					response.setContentType("text/html; charset=utf-8");
					PrintWriter out = response.getWriter();
					out.print("<script>alert('다운로드에 실패하였습니다.');history.back();</script>");
				} catch (Exception e) {
				}
			}

		} else {
			response.setContentType("text/html; charset=utf-8");
			PrintWriter out;
			try {
				out = response.getWriter();
				out.print("<script>alert('파일이 없습니다.');history.back();</script>");
			} catch (IOException e) {
				e.printStackTrace();
			}

			return;
		}

	}
	 
	// 전체리스트 출력 페이징/검색
	@RequestMapping(value = "/boardPaging", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> ActListSearch(HttpSession session,
			@RequestParam(value = "boardPageNum", defaultValue = "1") int boardPageNum, @RequestParam Map<String, Object> boardMap) {
		
		System.out.println("board paging entering" + boardMap.toString());
  		boardMap.put("boardPageNum", boardPageNum);

		PagerVO page = boardService.boardListCount(boardMap);
		System.out.println("boardPage ? " + page.toString());
		boardMap.put("page", page);

		List<BoardVO> boardList = boardService.boardAllList(boardMap);
		System.out.println("boardLitst? "  + boardList.toString());
		System.out.println("boardListSize? " + boardList.size());
		boardMap.put("boardList", boardList);
		boardMap.put("boardListSize", boardList.size());

		return boardMap;
	}
 	
	@RequestMapping(value="/file_remove", method=RequestMethod.POST) 
	 @ResponseBody
	public ResponseEntity<String> file_remove(@RequestBody String FILE_CD){ 
		
		System.out.println("file_remove Entering" + FILE_CD);

		ResponseEntity<String> entity = null;
	    try {
	      boardService.file_remove(FILE_CD);
	      entity = new ResponseEntity("success", HttpStatus.OK);
	      
	      boardService.file_removeMd(FILE_CD);
	      
	      System.out.println("entity? "+ entity);
	      System.out.println("file_remove entity" + entity);
	    } catch (Exception e) {
	      e.printStackTrace();
	      entity = new ResponseEntity( HttpStatus.BAD_REQUEST);
	    }
	    return entity; 
	    
	}
	
	
	/** 표준 제안서 상세 **/
	@RequestMapping(value = "/standardDetailPop", method = RequestMethod.GET)
	public ModelAndView stdPrpsDetailPop( @RequestParam(value = "FILE_CD") String FILE_CD, HttpServletResponse response) throws IOException{
 		 String fileroot = null;
		 //파일 정보 가져오기.
		 Map<?, ?> map = (Map<?, ?>) boardService.searchOneFiledata(FILE_CD); 
  		if (map != null) {

			fileroot = map.get("FILE_PATH").toString();
 			String[] temp = fileroot.split("\\\\");
			String fileName = temp[temp.length - 1];
 			String root = ""; 
			//"x`x`"
			for (int i = 0; i < (temp.length - 2); i++) {
				root += temp[i] + "\\";
 			} 
  		}
		
  		File dir = new File("C:/Users/1234/git/goodjob/CRM/src/main/webapp/resources/image/pptx/");
  		File[] fileList = dir.listFiles();
  		//파일 갯수 구하기
  		int count = fileList.length;
   		List slide = new ArrayList();
  		
   		//슬라이드의 인덱스를 구한다.
   		for(int i = 0; i<count; i++) {
  			int index = i;
  			slide.add(index);
  		}
  		
  	/*	String savePath = "C:/Users/1234/Desktop/과제/image/";
		File dir = new File("C:/Users/1234/git/goodjob/CRM/src/main/webapp/resources/image/pptx"); 

		File[] fileList = dir.listFiles();  
 		
		FileInputStream is = new FileInputStream(fileroot);
		XMLSlideShow ppt = new XMLSlideShow(is);
		System.out.println("ppt??? " + is.toString());
		is.close();

		Dimension pgsize = ppt.getPageSize();
 		List<XSLFSlide> slide = ppt.getSlides();
		for (int i = 0; i < slide.size(); i++) {

			BufferedImage img = new BufferedImage(pgsize.width, pgsize.height, BufferedImage.SCALE_SMOOTH);
			Graphics2D graphics = img.createGraphics();
			  
 			
			// clear the drawing area
			graphics.setPaint(Color.white);
			graphics.fill(new Rectangle2D.Float(0, 0, pgsize.width,	pgsize.height));
			try{
				// render
				slide.get(i).draw(graphics);
				
				*//** 
				 * save the output
				 * 슬라이드 -> 이미지 파일(PNG)
				 *//*
				System.out.println("slide?? " + i);
				System.out.println("slide... ?"  + slide.toString());
				FileOutputStream out = new FileOutputStream(savePath + "AsposeThumbnail_Out" + (i+1) + ".jpg"); // 이미지 파일 저장 경로
				javax.imageio.ImageIO.write(img, "JPG", out);
				out.close();
			} catch (Exception e){
				System.out.println("에러 슬라이드 번호 : "+(i+1));
				continue;
			}
			
		} */
 		ModelAndView mov = new ModelAndView("/standard/board/boardPop/standardDetailPop");
 		mov.addObject("slide", slide);
		mov.addObject("FILE_CD", FILE_CD);
		return mov;
	}
	
	
	/** ppt download **/
	@RequestMapping(value = "/pptxDown", produces = "application/vnd.ms-powerpoint")
	public @ResponseBody byte[] downloadPPT(String[] checkSelect, HttpServletResponse response, String FILE_CD) throws IOException {
 		String savePath = "C:/Users/1234/Desktop/과제/image/";
	    String fileroot = null;
	    String[] temp  = null;
		String fileName = null;
		String root = "";
		
		//선택된 pptx 가져오기.
		Map<?, ?> map = (Map<?, ?>) boardService.searchOneFiledata(FILE_CD); 
  		if (map != null) {

			fileroot = map.get("FILE_PATH").toString();
 			temp = fileroot.split("\\\\");
			fileName = temp[temp.length - 1]; 
 			
			//"x`x`"
			for (int i = 0; i < (temp.length - 2); i++) {
				root += temp[i] + "\\";
 			} 
  		}
  		 
	    ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
	    byte[] bytes = null;
	    FileInputStream is = new FileInputStream(fileroot);
	    XMLSlideShow ppt = new XMLSlideShow(is);
 	    List<XSLFSlide> slide = ppt.getSlides(); 
	    
	    // 선택한 슬라이드로 새 슬라이드 생성
	    if(checkSelect == null) { // 선택한 값이 없을 경우
	    	for(int i = 0; i < slide.size(); i++) {
	    		System.out.println("체크박스 없음");
	    		FileManager fileManager = new FileManager(); 
	    		fileManager.doFileDownload(fileName, root, response);
	    		/*ppt2.createSlide().importContent(slide.get(i));*/ 
		    }
	    } else {
		    for(int i = 0; i < checkSelect.length; i++) {
		    	System.out.println("체크박스 있음" + checkSelect[i]);
		    	//체크한 체크박스를 상위로 재정렬
		    	ppt.setSlideOrder(slide.get(Integer.parseInt(checkSelect[i])), i);
 		    }
		    
		    int slide_size = slide.size();
		    
		    // 체크된 체크박스를 제외한 모든 슬라이드 삭제
		    for(int i = checkSelect.length ; i<slide_size ; i++)
		    {
 		    	ppt.removeSlide(checkSelect.length);
		    }
	    }
  		 
		is.close();
		
		// save changes in a file
	    //FileOutputStream out = new FileOutputStream("c:/POIPPT/Examples/example2.pptx");
		 ppt.write(outputStream);
	   /* ppt2.write(outputStream);*/
	    //out.close();
	    bytes = outputStream.toByteArray();

	    return bytes; 
  		}

}
