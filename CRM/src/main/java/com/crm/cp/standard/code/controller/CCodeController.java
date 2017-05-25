package com.crm.cp.standard.code.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.standard.auth.vo.AuthVO;
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
	public @ResponseBody List<CodeVO> codeList(@RequestBody String cd_grp_id, HttpSession session) {
 		
		System.out.println("cd_grp_id? " + cd_grp_id);
		
		List<CodeVO> codevo = codeService.codeList(cd_grp_id);
 		
		System.out.println("codevo list ? " + codevo.toString());
 		
		return codevo;

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
	public ModelAndView AuthMenuDetail(HttpSession session){
		
		ModelAndView mov = new ModelAndView("/standard/code/codePopup");
		
		return mov;
	}
	
}
