package com.crm.cp.sales.keyman.controller;

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

import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.sales.keyman.service.KeymanService;
import com.crm.cp.utils.PagerVO;

@Controller
public class KeymanController {

	@Resource
	KeymanService keymanService;

	@RequestMapping("keyman")
	public ModelAndView KeymanList(HttpSession session,
			@RequestParam(value = "keymanPageNum", defaultValue = "1") int keymanPageNum) {

		System.out.println("keyman page enter");

		if (session.getAttribute("user") == null) {
			return new ModelAndView("redirect:/");
		}
		System.out.println("keymanPageNum" + keymanPageNum);

		ModelAndView mov = null;
		if (session.getAttribute("user") == null) {
			mov = new ModelAndView("standard/home/session_expire");
		}
		System.out.println("step1");

		Map<String, Object> keymanMap = new HashMap<String, Object>();
		keymanMap.put("keymanPageNum", keymanPageNum);

		PagerVO page = keymanService.keymanListCount(keymanMap);
		System.out.println("page " + page.toString());
		keymanMap.put("page", page);

		List<KeymanVO> keymanList = keymanService.keymanAllList(keymanMap);
		System.out.println("keymanList" + keymanList.toString());

		mov = new ModelAndView("keyman");
		mov.addObject("keymanList", keymanList);
		mov.addObject("keymanPageNum", keymanPageNum);
		mov.addObject("page", page);

		System.out.println("mov?????? " + mov.toString());

		return mov;
	}

	// 전체리스트 출력 페이징/검색
	@RequestMapping(value = "/keymanPaging", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> ActListSearch(HttpSession session,
			@RequestParam(value = "keymanPageNum", defaultValue = "1") int keymanPageNum) {
		System.out.println("keyman paging entering");
		Map<String, Object> keymanMap = new HashMap<String, Object>();
		keymanMap.put("keymanPageNum", keymanPageNum);

		PagerVO page = keymanService.keymanListCount(keymanMap);
		keymanMap.put("page", page);

		List<KeymanVO> keymanList = keymanService.keymanAllList(keymanMap);

		System.out.println("키맨 ajax list ?" + keymanList.toString());
		keymanMap.put("keymanList", keymanList);
		keymanMap.put("keymanListSize", keymanList.size());

		return keymanMap;
	}

	// 키맨 상세정보
	@RequestMapping(value = "keymanDetail", method = RequestMethod.POST)
	public @ResponseBody KeymanVO companyCutomerDetail(KeymanVO vo) {

		System.out.println("ajax detail keyman" + vo.toString());

		KeymanVO keymanVO = keymanService.keymanDetail(vo);
		System.out.println("keymanVO " + keymanVO.toString());
		return keymanVO;
	}

	// 키맨 수정
	@RequestMapping(value = "/keymanInsert", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> keymanInsert(HttpSession session, KeymanVO keymanVO) {

		System.out.println("keyman insert entering" + keymanVO.toString());

		Map<String, Object> rstMap = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) { // 로그인 페이지 이동
			rstMap.put("mdfyResult", "standard/home/session_expire");
		} else {
			keymanVO.setFin_mdfy_id(session.getAttribute("user").toString());
			keymanVO.setFst_reg_id(session.getAttribute("user").toString());

			String contactRstRst = keymanService.insertKeyman(keymanVO);
			rstMap.put("mdfyResult", contactRstRst);

		}
		return rstMap;
	}

	// 키맨 수정
	@RequestMapping(value = "/keymanUpdate", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> keymanUpdate(HttpSession session, KeymanVO keymanVO) {
		System.out.println("keyman update entering" + keymanVO.toString());
		Map<String, Object> rstMap = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) { // 로그인 페이지 이동
			rstMap.put("mdfyResult", "standard/home/session_expire");
		} else {
			keymanVO.setFin_mdfy_id(session.getAttribute("user").toString());
			String keymanRstRst = keymanService.keymanUpdate(keymanVO);
			rstMap.put("mdfyResult", keymanRstRst);
		}
		return rstMap;
	}

	// 키맨 삭제
	@RequestMapping(value = "KeymanDelete", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> keymanDelete(HttpSession session, @RequestBody List<String> keyman_idList) {
		
		System.out.println("Keyman delete Entering??  " + keyman_idList.toString());

		String cont_id = "";
		String cust_id = "";
		KeymanVO kmVO = new KeymanVO();
		Map<String, Object> rstMap = new HashMap<String, Object>();
		for (int i = 0; i < keyman_idList.size(); i++) {
			String del[] = keyman_idList.get(i).split(":");

			cont_id = del[0];
			cust_id = del[1];
			System.out.println("cont_id ? " + cont_id);
			System.out.println("cust_id? " + cust_id);
			kmVO.setCont_id(cont_id);
			kmVO.setCust_id(cust_id);

			if (session.getAttribute("user") == null) { // 로그인 페이지 이동
				rstMap.put("mdfyResult", "standard/home/session_expire");
			} else {
				String deleteResult = keymanService.KeymanDelete(kmVO);
				rstMap.put("deleteResult", deleteResult);
			}

		}

		return rstMap;
	}
	
	// 키맨 리스트 초성검색 / 그냥검색 페이징
		@RequestMapping(value = "/searchKeywordKM", method = RequestMethod.POST)
		public @ResponseBody Map<String, Object> searchKeyword(HttpSession session, String keyword, String cont_nm, String cust_nm,
				String cont_nm0, String cust_nm0, String cont_nm1 , String cust_nm1 ,
				@RequestParam(value = "keymanPageNum", defaultValue = "1") 	int keymanPageNum ) {
			
			System.out.println("key man 초성 enter" + keyword);
 
			Map<String, Object> kwMap = new HashMap<String, Object>(); 

 			kwMap.put("keyword", keyword);
			kwMap.put("keymanPageNum", keymanPageNum);
			kwMap.put("cust_nm", cust_nm);
			kwMap.put("cont_nm", cont_nm);
			kwMap.put("cust_nm0", cust_nm0);
			kwMap.put("cont_nm0", cont_nm0);
			kwMap.put("cust_nm1", cust_nm1);
			kwMap.put("cont_nm1", cont_nm1);
			System.out.println("kwMap?? " + kwMap.toString());
 			
			
 			PagerVO page = keymanService.KeymanSearchCount(kwMap);
			System.out.println("page? " + page.toString());
			kwMap.put("page", page); 
			
			List<KeymanVO> keymanList = keymanService.keymanSearchAll(kwMap);
			kwMap.put("keymanList", keymanList);
			System.out.println("keymanList " + keymanList.toString());
			kwMap.put("keymanListSize", keymanList.size());
			System.out.println("keymanListSize " +keymanList.size());
		 
			 
			return kwMap;
		} 
	
	
		// 연락처 팝업 리스트
		@RequestMapping(value = "/ContactList", method = RequestMethod.GET)
		public ModelAndView opptCustcompList(
				HttpSession session,
				String pop_flg,
				@RequestParam(value = "cust_id", defaultValue = "cust_id") String cust_id,
				@RequestParam(value = "keyword", defaultValue = "") String keyword) {

			Map<String, Object> map = new HashMap<String, Object>();
			map.put("cust_id", cust_id);
			map.put("keyword", keyword);
			
			List<Object> contactList = keymanService.contactListPop(map);
			
			System.out.println("contact pop up list " + contactList.toString());
			
			System.out.println("opptCustcompList pop_flg : " + pop_flg);
			ModelAndView mov = new ModelAndView(
					"/sales/keyman/keymanPop/contact_list_pop");

			mov.addObject("contactList", contactList);

			// javascript에서 상세정보에서의 고객 리스트인지 구분하기 위한 값 전달
			mov.addObject("custType", "normal");
			mov.addObject("pop_flg", pop_flg);

			return mov;
		}
	

}
