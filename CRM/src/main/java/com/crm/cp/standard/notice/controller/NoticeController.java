package com.crm.cp.standard.notice.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;
import com.crm.cp.standard.notice.service.NoticeService;
import com.crm.cp.standard.notice.vo.NoticeVO;
import com.crm.cp.utils.PagerVO;

@Controller
public class NoticeController {
	
	@Autowired
	NoticeService noticeService;
	
	@Resource
	MenuService menuService;
	
	@RequestMapping(value="/noticelistpop", method=RequestMethod.GET)
	public ModelAndView noticeListPopPage(HttpSession session, Locale locale){
		
//		if(session.getAttribute("user") == null){
//			ModelAndView mov = new ModelAndView("redirect:/");
//			return mov;
//		}
//		
//		String userId = session.getAttribute("user").toString();
//		
//		List<Object> noticelist= noticeService.searchListNotice(userId);
//		
//		for(int i =0; i<noticelist.size();i++){
//			Map<String, Object> notice= (Map<String, Object>) noticelist.get(i);
//			String nTitle = notice.get("TITLE").toString();
//			if(nTitle.length() > 24){
//				notice.replace("TITLE", nTitle.toString().substring(0, 24)+"....");
//			}
//		}
//		
		ModelAndView mov = new ModelAndView("/standard/notice/noticePopup");
//		mov.addObject("notice", noticelist);
		return mov;
		
	}
	
	@RequestMapping(value="/notice", method=RequestMethod.GET)
	public ModelAndView noticeListPage(HttpSession session, Locale locale,
			@RequestParam(value = "currentPageNum", defaultValue="1") int currentPageNum,
			@RequestParam(value = "searchnotice", defaultValue="") String searchnotice,
			@RequestParam(value = "code", defaultValue="empty") String selectcode)
	{
		System.out.println("노티스 진입");
		
		if(session.getAttribute("user") == null){
			ModelAndView mov = new ModelAndView("redirect:/");
			return mov;
		}
		
		noticeService.searchListNotice();
		
		ModelAndView mov = new ModelAndView("notice");
		
		return mov;
		
	}
	
	@RequestMapping(value="noticecode", method=RequestMethod.POST)
	public @ResponseBody List<Object> callOrgCode(){
		
		List<Object> code = noticeService.searchListOrg();
		return code;
		
	}
	
	@RequestMapping(value="noticedetail", method=RequestMethod.GET)
	public ModelAndView noticeDetailPage(HttpSession session, @RequestParam(value="noticeId") String notice_id){
		
		if(session.getAttribute("user") == null){
			ModelAndView mov = new ModelAndView("redirect:/");
			return mov;
		}
		
		Object notice= noticeService.searchOneNotice(notice_id);
		
		List<MenuVO> menuList = menuService.selectAll(session);
		
		ModelAndView mov = new ModelAndView("noticeDetail");
		mov.addObject("notice", notice);
		mov.addObject("menuList", menuList);
		return mov;
		
	}
	
	@RequestMapping(value="noticeclickNum", method=RequestMethod.POST)
	public @ResponseBody boolean noticeClickNum(@RequestBody String notice_id){
		
		noticeService.increasechknumNotice(notice_id);
		
		return true;
		
	}
	
	
	@RequestMapping(value="noticewrite", method=RequestMethod.GET)
	public ModelAndView noticeInsertPage(HttpSession session){
		
		if(session.getAttribute("user") == null){
			ModelAndView mov = new ModelAndView("redirect:/");
			return mov;
		}
		
		List<Object> org= noticeService.searchListOrg();
		List<MenuVO> menuList = menuService.selectAll(session);
		
		ModelAndView mov = new ModelAndView("noticeWrite");
		mov.addObject("org", org);
		mov.addObject("menuList", menuList);
		return mov;
	}
	
	@RequestMapping(value="noticewriteconfirm", method=RequestMethod.POST)
	public ModelAndView noticeInsertConfirm(@ModelAttribute NoticeVO noticeVO, HttpSession session){
		
		if(session.getAttribute("user") == null){
			ModelAndView mov = new ModelAndView("redirect:/");
			return mov;
		}
		
		noticeVO.setFst_reg_id_nm(session.getAttribute("user").toString());
		noticeVO.setFin_mdfy_id_nm(session.getAttribute("user").toString());
		
		SimpleDateFormat format = new SimpleDateFormat();
		format.applyLocalizedPattern("yyyy-MM-dd");
		
		if(noticeVO.getStart_date()!=null||noticeVO.getStart_date()!=""){
			try {
				java.util.Date sdate = format.parse(noticeVO.getStart_date());
				noticeVO.setStrd_d(sdate);
				
			} catch (ParseException e) {
			}
			
		}
		
		if(noticeVO.getEnd_date()!=""||noticeVO.getEnd_date()!=null){
			
			try {
				java.util.Date edate = format.parse(noticeVO.getEnd_date());
				noticeVO.setEnd_d(edate);
				
			} catch (ParseException e) {
			}
			
		}
		
		noticeService.insertOneNotice(noticeVO);
		ModelAndView mov = new ModelAndView("redirect:/notice");
		return mov;
		
	}
	
	@RequestMapping(value="noticedelete", method=RequestMethod.GET)
	public ModelAndView noticeDeletePage(HttpSession session, @RequestParam(value="noticeId") String notice_id){
		
		noticeService.deleteOneNotice(notice_id);
		
		ModelAndView mov = new ModelAndView("redirect:/notice");
		return mov;
		
	}
	
	@RequestMapping(value="noticeModify", method=RequestMethod.POST)
	public @ResponseBody Object noticeModify(@RequestBody Map json){
		
		SimpleDateFormat format = new SimpleDateFormat();
		format.applyLocalizedPattern("yyyy-MM-dd");
		
		if((json.get("strd"))!=null){
			try {
				java.util.Date strd_d = format.parse(json.get("strd").toString());
				json.put("strd_d", strd_d);
			} catch (ParseException e) {
				json.put("strd_d", null);
			}
			
		}
		if((json.get("end"))!=null){
			try {
				java.util.Date end_d = format.parse(json.get("end").toString());
				json.put("end_d", end_d);
			} catch (ParseException e) {
				json.put("end_d", null);
			}
			
		}
		noticeService.modifyNotice(json);
		
		Object notice = noticeService.searchOneNotice(json.get("notice_id").toString());
		return notice;
		
	}

}
