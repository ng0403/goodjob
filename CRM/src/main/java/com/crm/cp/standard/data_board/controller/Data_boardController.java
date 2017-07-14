package com.crm.cp.standard.data_board.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.MultipartRequest;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.standard.data_board.service.Data_boardService;
import com.crm.cp.standard.data_board.vo.AttachVO;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;
import com.crm.cp.utils.FileManager;
import com.crm.cp.utils.PagerVO;

@Controller
public class Data_boardController {

	@Autowired
	Data_boardService data_boardService;

	@Resource
	MenuService menuService;
	
	@Resource
	private FileManager fileManager;

	@RequestMapping(value = "/dboardlistpop", method = RequestMethod.GET)
	public ModelAndView dboardListPopPage() {

		List<Object> dboardList = data_boardService.searchListData_board();

		for(int i =0; i<dboardList.size();i++){
			Map<String, Object> dboard= (Map<String, Object>) dboardList.get(i);
			String dbTitle = dboard.get("TITLE").toString();
			if(dbTitle.length() > 21){
				dboard.replace("TITLE", dbTitle.toString().substring(0, 21)+"....");
			}
		}
		
		ModelAndView mov = new ModelAndView(
				"/standard/data_board/data_boardPopup");
		mov.addObject("dboard", dboardList);
		return mov;

	}

	@RequestMapping(value = "/dboard", method = RequestMethod.GET)
	public ModelAndView dboardListPage(
			HttpSession session,
			Locale locale,
			@RequestParam(value = "currentPageNum", defaultValue = "1") int currentPageNum,
			@RequestParam(value = "searchDboard", defaultValue = "") String searchDboard,
			@RequestParam(value = "code", defaultValue = "empty") String selectcode) {

		if (session.getAttribute("user") == null) {
			ModelAndView mov = new ModelAndView("redirect:/");
			return mov;
		}

		Map<String, Object> map = new HashMap<String, Object>();

		map.put("searchDboard", searchDboard);
		map.put("selectcode", selectcode);

		int totalCount = data_boardService.countData_board(map);
		PagerVO pagerVO = new PagerVO(currentPageNum, totalCount, 15, 5);

		map.put("PagerVO", pagerVO);

		List<Object> code = data_boardService.searchListCode();
		List<Object> dboardList = data_boardService.searchRowNumListData_board(map);

		for(int i =0; i<dboardList.size();i++){
			Map<String, Object> dboard= (Map<String, Object>) dboardList.get(i);
			String dbTitle = dboard.get("TITLE").toString();
			if(dbTitle.length() >30){
				dboard.replace("TITLE", dbTitle.toString().substring(0, 30)+"....");
			}
		}
		List<MenuVO> menuList = menuService.selectAll(session);

		ModelAndView mov = new ModelAndView("data_boardList");
		mov.addObject("dboard", dboardList);
		mov.addObject("pagerVO", pagerVO);
		mov.addObject("code", code);
		mov.addObject("searchDboard", searchDboard);
		mov.addObject("selectcode", selectcode);
		mov.addObject("menuList", menuList);
		return mov;

	}

	@RequestMapping(value = "/dboarddetail", method = RequestMethod.GET)
	public ModelAndView dboardDetailPage(HttpSession session,
			@RequestParam(value = "dboardId") String dboard_id) {

		if (session.getAttribute("user") == null) {
			ModelAndView mov = new ModelAndView("redirect:/");
			return mov;
		}

		Object dboard = data_boardService.searchOneData_board(dboard_id);
		
		List<MenuVO> menuList = menuService.selectAll(session);
		ArrayList<Map<String, Object>> file = (ArrayList) data_boardService.searchListFileById(dboard_id);

		for (int i = 0; i < file.size(); i++) {

			String[] temp = file.get(i).get("FILE_ROOT").toString().split("\\\\");
			String temp1 = temp[temp.length - 1];
			String filename = temp1.substring(10, temp1.length());

			file.get(i).put("filename", filename);

		}

		ModelAndView mov = new ModelAndView("data_boardDetail");
		mov.addObject("dboard", dboard);
		mov.addObject("file", file);
		mov.addObject("menuList", menuList);
		return mov;

	}

	@RequestMapping(value = "dboardwrite", method = RequestMethod.GET)
	public ModelAndView dboardWritePage(HttpSession session) {

		if (session.getAttribute("user") == null) {
			ModelAndView mov = new ModelAndView("redirect:/");
			return mov;
		}

		List<MenuVO> menuList = menuService.selectAll(session);
		List<Object> code = data_boardService.searchListCode();

		ModelAndView mov = new ModelAndView("data_boardWrite");
		mov.addObject("menuList", menuList);
		mov.addObject("code", code);
		return mov;

	}

	@RequestMapping(value = "/dboardDelete", method = RequestMethod.GET)
	public ModelAndView dboardDeletePage(HttpSession session,
			@RequestParam(value = "dboardId") String dboard_id) {

		data_boardService.deleteOneData_board(dboard_id);

		ModelAndView mov = new ModelAndView("redirect:/dboard");
		return mov;
	}

	@RequestMapping(value = "/dboardModify", method = RequestMethod.POST)
	public @ResponseBody Object dboardModify(@RequestBody Map<?, ?> json) {

		data_boardService.modifyData_board(json);

		Object dboard = data_boardService.searchOneData_board(json.get("data_board_id").toString());
		return dboard;

	}

	@RequestMapping(value = "/updatefile", method = RequestMethod.POST)
	public String updateFile() {

		return "redirect:/";

	}

	@RequestMapping(value = "/uploadPopup", method = RequestMethod.GET)
	public ModelAndView dboardUploadPopup(HttpSession session) {

		if (session.getAttribute("user") == null) {
			ModelAndView mov = new ModelAndView("redirect:/");
			return mov;
		}

		ModelAndView mov = new ModelAndView("/standard/data_board/uploadPopup");
		return mov;

	}

	@RequestMapping(value = "/fileinsert", method = RequestMethod.POST)
	public ModelAndView fileInsert(@RequestParam(value="data_board_id") String data_board_id, MultipartHttpServletRequest multi, HttpServletRequest request, AttachVO attach) throws IOException
	{
		
		FileManager fileManager = new FileManager();
		attach.setData_board_id(data_board_id);
		
		List<MultipartFile> file = multi.getFiles("filedata");
	
		for(int i=0; i<file.size(); i++){
			
			String uploadpath = fileManager.doFileUpload(file.get(i), request);
		
			attach.setFile_root(uploadpath);
			data_boardService.insertAttachData(attach);
			
		}
		
		ModelAndView mov = new ModelAndView("redirect:/dboard");
		return mov;

	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@RequestMapping(value = "/dboardinsert", method = RequestMethod.POST)
	public @ResponseBody String dboardInsert(@RequestBody Map json, HttpSession session, AttachVO attach, HttpServletRequest request) {

		String userId = session.getAttribute("user").toString();

		Map map = (Map) data_boardService.searchOneUser(userId);
		String org_id = map.get("ORG_ID").toString();

		json.put("org_id", org_id);
		json.put("fst_reg_id_nm", userId);
		json.put("fin_mdfy_id_nm", userId);

		data_boardService.insertOneData_board(json);

		String data_board_id = json.get("data_board_id").toString();

		return data_board_id;

	}

	@RequestMapping(value = "/downfile", method = RequestMethod.GET)
	public void downloadFile(
			@RequestParam(value = "attachId") String attach_id,
			HttpServletResponse response, HttpServletRequest request) {
			
		Map<?, ?> map = (Map<?, ?>) data_boardService.searchOneFiledata(attach_id);

		if (map != null) {

			String fileroot = map.get("FILE_ROOT").toString();
			String[] temp = fileroot.split("\\\\");
			String fileName = temp[temp.length - 1];
			String root = "x`x`";

			for (int i = 0; i < (temp.length - 2); i++) {
				root += temp[i] + "\\";
			}

			FileManager fileManager = new FileManager();
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

	@RequestMapping(value = "/downAllfile", method = RequestMethod.GET)
	public void downloadAllFile(
			@RequestParam(value = "boardId") String boardId,
			HttpServletResponse response, HttpServletRequest request) {

		ArrayList<Map<String, Object>> map = (ArrayList) data_boardService.searchFileList(boardId);
		String[] source = new String[map.size()];
		FileManager fileManager = new FileManager();
		for (int i = 0; i < map.size(); i++) {

			source[i] = map.get(i).get("FILE_ROOT").toString();

		}

		boolean fileYN = fileManager.doCompressFile(source, response);

		if (fileYN == false) {
			response.setContentType("text/html; charset=utf-8");
			PrintWriter out;
			try {
				out = response.getWriter();
				out.print("<script>alert('파일이 없습니다.');history.back();</script>");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

	}
	
	@RequestMapping(value="dboardclickNum", method=RequestMethod.POST)
	public @ResponseBody boolean dboardClickNum(@RequestBody String dboard_id){
		
		data_boardService.increasechknumData_board(dboard_id); //수정합시다!
		
		return true;
		
	}

	
}