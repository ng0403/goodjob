package com.crm.cp.standard.code.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.standard.code.service.CCodeService;
import com.crm.cp.standard.code.vo.CodeVO;
 
@Controller
public class CCodeController { 
	
@Resource
CCodeService codeService;
	
//코드 그룹 리스트
	@RequestMapping(value="/ccode", method=RequestMethod.GET)
	public ModelAndView AuthMain(HttpSession session){
		
		if (session.getAttribute("user") == null) {

			return new ModelAndView("redirect:/");
		}
		
 		List<Object> codegrpList = codeService.codegrpList();
 		
 		System.out.println("codegrpList/" + codegrpList.toString());
		
		ModelAndView mov = new ModelAndView ("code");
 		mov.addObject("codegrpList", codegrpList);
		
		System.out.println("mov??? " + mov.toString());
 		return mov;
		
	}
	
	//코드 리스트
	@RequestMapping(value = "/codeList", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> codeList(@RequestBody String cd_grp_id, HttpSession session) {
 		
		System.out.println("cd_grp_id? " + cd_grp_id);
		
		List<CodeVO> codevo = codeService.codeList(cd_grp_id);
 		
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("codevo", codevo);
		map.put("cd_grp_id", cd_grp_id);
		
		System.out.println("codevo list ? " + codevo.toString());
 		
		return map;

	}
	 
	
	//코드그룹 등록 팝업창
	@RequestMapping(value="/cdgrpWritePopup")
	public String authWritePopup(){	
		return "/standard/code/cdgrpPopup";
	}
	
	//코드그룹 등록
	@RequestMapping(value = "/cdgrpInsert", method = RequestMethod.POST)
	public @ResponseBody List<Object> authInsert(CodeVO JSON, HttpSession session) {
		JSON.setFst_reg_id(session.getAttribute("user").toString());
		JSON.setFin_mdfy_id(session.getAttribute("user").toString());
		
		System.out.println("cdgrp insert entering " + JSON.toString());
		 
		codeService.cdgrpInsert(JSON);
		
		List<Object> codegrpList= codeService.codegrpList();
		
		System.out.println("코드그룹 리스트 " + codegrpList.toString());
		return codegrpList;

	}
	
	//코드그룹 삭제
	@RequestMapping(value="/cdgrpDelete", method=RequestMethod.POST)
	 public @ResponseBody List<Object> AuthDelete(@RequestBody List<Object> JSON, HttpSession session){
		for (Object cd_grp_id : JSON) {
			System.out.println("코드그룹 삭제 " + cd_grp_id.toString());
			codeService.cdgrpDelete(new CodeVO(cd_grp_id.toString(), session.getAttribute("user").toString()));
		}
		List<Object> objList = codeService.codegrpList();
		System.out.println("objList?" +  objList.toString());
		return objList;
	 }
	//코드 추가 팝업
	@RequestMapping(value = "/codeWritePopup", method=RequestMethod.GET)
	public ModelAndView AuthMenuDetail(HttpSession session, String cd_grp_id){
		
		System.out.println("cd_grp_id ? " + cd_grp_id);
		ModelAndView mov = new ModelAndView("/standard/code/codePopup");
		mov.addObject("cd_grp_id", cd_grp_id);
		
		return mov;
	}
	
	
	//코드 추가
 		@RequestMapping(value = "/codeInsert", method = RequestMethod.POST)
		public @ResponseBody List<CodeVO> codeInsert(CodeVO JSON, HttpSession session) {
			JSON.setFst_reg_id(session.getAttribute("user").toString());
			JSON.setFin_mdfy_id(session.getAttribute("user").toString());
			
			System.out.println("code insert entering " + JSON.toString());
			
			codeService.codeInsert(JSON);
			
			String cd_grp_id = JSON.getCd_grp_id();
			
			List<CodeVO> codeList= codeService.codeList(cd_grp_id);
			
			System.out.println("코드 리스트 " + codeList.toString());
			return codeList;

		}
	
 	//코드 삭제	
 		@RequestMapping(value="/codeDelete", method=RequestMethod.POST)
		public @ResponseBody List<Object> AuthUserDelete(@RequestBody List<Object> list, HttpSession session){
		System.out.println("코드 삭제 list" + list.toString());
		
		for (Object code : list) {
  			System.out.println("code?" + code);
			codeService.codeDelete(code);
		}
		System.out.println("list ??? " + list.toString());
 		List<Object> obj= codeService.codegrpList();
		return obj;
	}
 		
 		
 		//코드그룹 디테일 팝업창
 		@RequestMapping(value="/cdgrpDetailPopup")
 		public ModelAndView cdgrpDetailPopup(String cd_grp_id){
 			System.out.println("hello cdgrp detail " + cd_grp_id);
  			
 			CodeVO codevo = new CodeVO();
  			codevo = codeService.cdgrpDetail(cd_grp_id);
  			System.out.println("코드 디테일 vo ? " + codevo.toString());
 			ModelAndView mov = new ModelAndView("/standard/code/cdgrpDetailPopup");
 			mov.addObject("cdgrpDetail", codevo);
 			return mov;
 		}
 		
 		
 		
 		//코드디테일 팝업창
 		@RequestMapping(value="/codeDetailPopup")
 		public ModelAndView codeDetailPopup(String code, String cd_grp_id){
 			System.out.println("hello code detail " + code);
 			System.out.println("cd_grp_id popup? " + cd_grp_id);
 			
 			Map map = new HashMap<String, String>();
 			map.put("code", code);
 			map.put("cd_grp_id", cd_grp_id);
 			System.out.println("code detail map? " + map.toString());
 			CodeVO codevo = new CodeVO();
 			codevo = codeService.codeDetail(map);
 			System.out.println("codevo? " + codevo.toString());
 			
 			ModelAndView mov = new ModelAndView("/standard/code/codeDetailPopup");
 			mov.addObject("codeDetail", codevo);
 			return mov;
 		}
 		
 		//코드그룹 수정
 		@RequestMapping(value = "/cdgrpModify", method = RequestMethod.POST)
 		public @ResponseBody Map<String, Object> cdgrpModify(HttpSession session, CodeVO codeVo) {
 			System.out.println("cdgrp update entering" + codeVo.toString());
 			
 			Map<String, Object> rstMap = new HashMap<String, Object>();
 			
 			if (session.getAttribute("user") == null) { // 로그인 페이지 이동
 				rstMap.put("mdfyResult", "standard/home/session_expire");
 			} else {
 				codeVo.setFin_mdfy_id(session.getAttribute("user").toString());
 	 			String contactRstRst = codeService.cdgrpModify(codeVo); 
 				rstMap.put("cdgrpList",  codeService.codegrpList());
 			}  
 			return rstMap;
 		}
 		
 		
 		//코드 수정
 		@RequestMapping(value = "/codeModify", method = RequestMethod.POST)
 		public @ResponseBody Map<String, Object> contactUpdate(HttpSession session, CodeVO codeVo) {
 			System.out.println("code update entering" + codeVo.toString());
 			
 			Map<String, Object> rstMap = new HashMap<String, Object>();
 			
 			if (session.getAttribute("user") == null) { // 로그인 페이지 이동
 				rstMap.put("mdfyResult", "standard/home/session_expire");
 			} else {
 				codeVo.setFin_mdfy_id(session.getAttribute("user").toString());
 	 			String contactRstRst = codeService.codeModify(codeVo); 
 				rstMap.put("mdfyResult", contactRstRst);
 			}  
 			return rstMap;
 		}
 		
	
}
