package com.crm.cp.sales.contact.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.sales.contact.service.ContactService;
import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.utils.PagerVO;

@Controller
public class ContactController {

	@Resource
	MenuService menuService;
	
	@Resource
	ContactService contactService;
	
	//연락처 전체 리스트
	@RequestMapping(value="contact" , method=RequestMethod.GET)
	public ModelAndView contactList(HttpSession session, @RequestParam(value = "contactPageNum", defaultValue = "1") int contactPageNum){
		if (session.getAttribute("user") == null) {
			return new ModelAndView("redirect:/");
		}
		System.out.println("contact entering");
		System.out.println("contactPageNum" + contactPageNum);
		
		ModelAndView mov = null;
		if (session.getAttribute("user") == null) {
			mov = new ModelAndView("standard/home/session_expire");
		}
		System.out.println("step1");
		
		Map<String,Object> contactMap = new HashMap<String,Object>();
		contactMap.put("contactPageNum", contactPageNum);
		
		PagerVO page  = contactService.ContactListCount(contactMap);
		System.out.println("page " + page.toString());
		contactMap.put("page", page);
		
		List<ContactVO> contactList = contactService.contactAllList(contactMap);
		System.out.println("contactList" + contactList.toString());
 		
		mov = new ModelAndView("contact");
		mov.addObject("contactList", contactList);
		mov.addObject("contactPageNum", contactPageNum);
		mov.addObject("page",page);
		
		System.out.println("mov?????? " + mov.toString());
 		
		return mov; 
	}
	
	
	// 연락처 상세정보
	/*@RequestMapping(value = "contactDetail", method = RequestMethod.POST)
	public @ResponseBody ContactVO companyCutomerDetail(String cont_id) {
		System.out.println("ajax detail contact ");
		ContactVO contactVO = contactService.contactDetail(cont_id);		
		return contactVO;
	}*/
	
	
	@RequestMapping(value="contact_detail", method=RequestMethod.GET)
	public ModelAndView companyCutomerDetail(HttpSession session, @RequestParam("cont_id") String cont_id){
		if (session.getAttribute("user") == null) {
			return new ModelAndView("redirect:/");
		}
		System.out.println("detail Entering");
		
		ContactVO contactVO = contactService.contactDetail(cont_id);
		System.out.println("contactDetail ????" + contactVO.toString());
		
		ModelAndView mov = new ModelAndView("contactDetail");
		mov.addObject("contactDetail", contactVO);
		return mov;
	}   
	
	@RequestMapping(value = "/contactUpdate", method={RequestMethod.GET,RequestMethod.POST})
	public String ContactUpdate(HttpSession session, ContactVO contactVO){

		System.out.println("cont update entering");
		System.out.println("cont update vo? " + contactVO.toString());
		contactVO.setFin_mdfy_id(session.getAttribute("user").toString());// getParameter를 이름지정하듯 세션도 이름지정해서 설정된것을 가져오는 코드
		System.out.println(contactVO);
		
		contactService.contactUpdate(contactVO);
		
		return "redirect:/contact";
	}
	
	
	@RequestMapping(value="/contactInsert", method=RequestMethod.GET)
	public void cont_add(HttpSession session, ContactVO contactVO){
		System.out.println("add continsert");
		contactVO.setFst_reg_id(session.getAttribute("user").toString());
		contactVO.setFin_mdfy_id(session.getAttribute("user").toString());
		System.out.println("insert contrVO?" + contactVO.toString());
	
	}
	
	@RequestMapping(value="/contactInsert", method=RequestMethod.POST)
	public String cont_addP(HttpSession session, ContactVO contactVO){
		System.out.println("add continsert");
		contactVO.setFst_reg_id(session.getAttribute("user").toString());
		contactVO.setFin_mdfy_id(session.getAttribute("user").toString());
		System.out.println("insert contactVO?" + contactVO.toString());
		contactService.contactInsert(contactVO);
		
		return "redirect:/contact";  
	}
	
	
	
	//전체리스트 출력 페이징/검색 
		@RequestMapping(value="/contactPaging" , method=RequestMethod.POST)
		public @ResponseBody Map<String,Object> ActListSearch(HttpSession session, @RequestParam(value = "contactPageNum", defaultValue = "1") int contactPageNum,
				String cont_nm, String email, String ph){
			System.out.println("contact paging entering");
			Map<String,Object> contactMap = new HashMap<String,Object>();
			
			/*if (session.getAttribute("user") == null) {		//로그인 페이지 이동
				callMap.put("result", "standard/home/session_expire");
			} else {
				callMap.put("call_name",call_name);
				callMap.put("call_email",call_email);
				callMap.put("call_tel", call_tel);
				callMap.put("call_iuser_nm", call_iuser_nm);
				callMap.put("callPageNum", callPageNum);
				
				PagerVO page = callService.CallListCount(callMap);
				callMap.put("startRow", page.getStartRow());
				callMap.put("endRow", page.getEndRow());
				callMap.put("page", page);
				List<CallVO> callList = callService.callAllList(callMap);
				callMap.put("callList", callList);
				callMap.put("callListSize", callList.size());
			}*/
			
			contactMap.put("cont_nm", cont_nm);
			contactMap.put("email", email);
			contactMap.put("ph", ph);
 			contactMap.put("contactPageNum", contactPageNum);
				
			PagerVO page = contactService.ContactListCount(contactMap);
			contactMap.put("page", page);
			
			List<ContactVO> contactList = contactService.contactAllList(contactMap);
			contactMap.put("contactList", contactList);
			contactMap.put("contactListSize", contactList.size());
			
			return contactMap;
		}
			
		// 연락처 리스트 초성검색 / 그냥검색 페이징		
		@RequestMapping(value="/searchKeyword" , method=RequestMethod.POST)
		public @ResponseBody Map<String,Object> searchKeyword(HttpSession session, int contactPageNum,
				String keyword, String cont_nm, String email, String ph){
			System.out.println("초성검색 enter");
			System.out.println("초성?"  + keyword);
			Map<String,Object> kwMap = new HashMap<String, Object>();
			/*if (session.getAttribute("user") == null) {		//로그인 페이지 이동
				kwMap.put("result", "standard/home/session_expire");
			} else {
			kwMap.put("call_name",call_name);
			kwMap.put("call_email",call_email);
			kwMap.put("call_tel", call_tel);
			kwMap.put("call_iuser_nm", call_iuser_nm);
			kwMap.put("keyword", keyword);
			kwMap.put("callPageNum", callPageNum);
			
			PagerVO page = callService.CallListCount(kwMap);
			kwMap.put("page", page);
			
			List<CallVO> callList = callService.callSearchAll(kwMap);
			kwMap.put("callList", callList);
			kwMap.put("callListSize", callList.size());
			}*/
			
			kwMap.put("cont_nm", cont_nm);
			kwMap.put("email",email);
			kwMap.put("ph", ph);
 			kwMap.put("keyword", keyword);
			kwMap.put("contactPageNum", contactPageNum);
			
			PagerVO page = contactService.ContactListCount(kwMap);
			kwMap.put("page", page);
			
			List<ContactVO> contactList = contactService.contactSearchAll(kwMap);
			kwMap.put("contactList", contactList);
			kwMap.put("contactListSize", contactList.size());
			
			return kwMap;
		}
		
		
		// 연락처 삭제
		@RequestMapping(value = "contactDelete", method = RequestMethod.POST)
		public @ResponseBody Map<String, Object> contactDelete(HttpSession session, @RequestBody List<String> cont_idList) {
			System.out.println("delete entering" + cont_idList.toString());
			
			Map<String, Object> rstMap = new HashMap<String, Object>();
			if (session.getAttribute("user") == null) {		//로그인 페이지 이동
				rstMap.put("deleteResult", "standard/home/session_expire");
			} else {
			String deleteResult = contactService.deleteContact(cont_idList);
			rstMap.put("deleteResult", deleteResult);
			}
			return rstMap;
		}
		
		
		//회사명리스트 팝업창 
		@RequestMapping(value="/compList" , method=RequestMethod.GET)
		public ModelAndView ActOpptList(HttpSession session){
			System.out.println("회사팝업");
			List<Object> compList = contactService.compList();
			System.out.println("compList??" + compList.toString());
			ModelAndView mov = new ModelAndView("/sales/contact/contactPop/comp_list_pop"); 
			mov.addObject("compList", compList);
			
			return mov;
		}
		
		// 키맨 팝업
		@RequestMapping(value = "/keymanPopupcont", method = RequestMethod.GET)
		public ModelAndView keymanPopup(HttpSession session, String cont_id, int flag) {
			System.out.println("keyman cont_id" + cont_id);
			ModelAndView mov = new ModelAndView("/sales/contact/contactPop/custcomp_kmn_pop");
			mov.addObject("cont_id", cont_id);
			mov.addObject("flag", flag);	
			return mov;
		}
	
		// 키맨 추가
		@RequestMapping(value = "/addKeyman", method = RequestMethod.POST)
		public @ResponseBody Map<String, Object> addKeyman(HttpSession session, KeymanVO kVO) {
			System.out.println("hi keyman" + kVO.toString());
			
			Map<String, Object> rstMap = new HashMap<String, Object>();
			if (session.getAttribute("user") == null) {		//로그인 페이지 이동
				rstMap.put("addResult", "standard/home/session_expire");
			} else {
				kVO.setFst_reg_id(session.getAttribute("user").toString());
				kVO.setFin_mdfy_id(session.getAttribute("user").toString());
				String kmAddRst = contactService.insertKeyman(kVO);
				System.out.println("kmaddrst?" + kmAddRst.toString());
				rstMap.put("addResult", kmAddRst);
			}
			return rstMap;
		}
		
		// 키맨 리스트
		@RequestMapping(value = "keymanList", method = RequestMethod.POST)
		public @ResponseBody List<KeymanVO> keymanList(String cont_id) {
			System.out.println("keyman list entering" + cont_id);
			List<KeymanVO> kmVOList = contactService.getKeymanList(cont_id);
			
			return kmVOList;
		}
		
		
		// 키맨 상세정보
		@RequestMapping(value = "/keymanDetailPopupcontact", method = RequestMethod.GET)
		public ModelAndView keymanDetailPopup(HttpSession session, String cust_id, int flag) {
			KeymanVO kmVO = contactService.keymanDetail(cust_id);
			
			ModelAndView mov = new ModelAndView("/sales/contact/contactPop/custcomp_kmn_pop");
			mov.addObject("kmVO", kmVO);      
			mov.addObject("cont_id", kmVO.getCust_id());
			mov.addObject("flag", flag);
			return mov;
		}
		
		// 키맨 수정
		@RequestMapping(value = "/mdfyKeyman", method = RequestMethod.POST)
		public @ResponseBody Map<String, Object> mdfyKeyman(HttpSession session, KeymanVO kVO) {
			System.out.println("mdfy keyman entering" + kVO.toString());
			Map<String, Object> rstMap = new HashMap<String, Object>();
			if (session.getAttribute("user") == null) {		//로그인 페이지 이동
				rstMap.put("mdfyResult", "standard/home/session_expire");
			} else {
				kVO.setFin_mdfy_id(session.getAttribute("user").toString());
				String kmMdfyRst = contactService.mdfyKeyman(kVO);
				rstMap.put("mdfyResult", kmMdfyRst);
			}
			return rstMap;
		}
		
		// 키맨 삭제
		@RequestMapping(value = "delKeyman", method = RequestMethod.POST)
		public @ResponseBody Map<String, Object> keymanDelete(HttpSession session, @RequestBody List<String> keyman_idList) {
			Map<String, Object> rstMap = new HashMap<String, Object>();
			System.out.println("delete keyman " + keyman_idList.toString());
			if (session.getAttribute("user") == null) {		//로그인 페이지 이동
				rstMap.put("mdfyResult", "standard/home/session_expire");
			} else {
				String deleteResult = contactService.deleteKeyman(keyman_idList);
				rstMap.put("deleteResult", deleteResult);
			}
			return rstMap;
		}
	
	
}
