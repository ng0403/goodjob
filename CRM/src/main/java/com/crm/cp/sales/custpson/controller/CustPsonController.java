package com.crm.cp.sales.custpson.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.cont.vo.contrVO;
import com.crm.cp.sales.custpson.service.CustPsonServiceImpl;
import com.crm.cp.sales.custpson.vo.CustPsonVO;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.addr.vo.AddressVo;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;
import com.crm.cp.utils.PagerVO;

@Controller
public class CustPsonController {

	@Resource
	CustPsonServiceImpl cpservice;

	@Autowired
	MenuService menuService;

	@RequestMapping(value = "/custpson", method = RequestMethod.GET)
	public ModelAndView custPson(HttpSession session,
			@RequestParam Map<String, Object> map,
			@RequestParam(value = "cpPageNum", defaultValue = "1") int cpPageNum) {
		ModelAndView mov = null;
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			mov = new ModelAndView("standard/home/session_expire");
		} else {
			map.put("cpPageNum", cpPageNum);
			PagerVO page = cpservice.getCPListCount(map);
			map.put("startRow", page.getStartRow() + "");
			map.put("endRow", page.getEndRow() + "");
			String stat_cd = "CPS"; // 개인고객 상태 코드
			List<CustPsonVO> cpvo = cpservice.list(map);
			List<CustPsonVO> code = cpservice.code(stat_cd);
			List<MenuVO> menuList = menuService.selectAll(session);
			mov = new ModelAndView("custpson");
			mov.addObject("menuList", menuList);
			mov.addObject("custpson", cpvo);
			mov.addObject("stat", code);
			mov.addObject("page", page);
			mov.addObject("cpPageNum", cpPageNum);
		}
		return mov;
	}
	
	// 개인고객 리스트 Ajax
	@RequestMapping(value = "/custpsonAjax", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> custPsonAjax(HttpSession session, @RequestParam(value = "cpPageNum", defaultValue = "1") int cpPageNum,
			String s_cust_nm, String s_email, String s_cell_ph, String s_iuser_nm) {
		Map<String, Object> cpsMap = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			cpsMap.put("result", "standard/home/session_expire");
		} else {
			cpsMap.put("cpPageNum", cpPageNum);
			cpsMap.put("s_cust_nm", s_cust_nm);
			cpsMap.put("s_email", s_email);
			cpsMap.put("s_cell_ph", s_cell_ph);
			cpsMap.put("s_iuser_nm", s_iuser_nm);
			
			PagerVO page = cpservice.getCPListCount(cpsMap);
			cpsMap.put("startRow", page.getStartRow());
			cpsMap.put("endRow", page.getEndRow());
			cpsMap.put("page", page);
			List<CustPsonVO> cpvo = cpservice.list(cpsMap);
			cpsMap.put("cpvo", cpvo);
		}
		
		return cpsMap;
	}

	// 상세보기
	@RequestMapping(value = "/custpsonDetail", method = RequestMethod.POST)
	public @ResponseBody CustPsonVO custInfo(String cust_id) {
		CustPsonVO cpvo = cpservice.custInfo(cust_id);
		return cpvo;
	}

	// 영업기회
	@RequestMapping(value = "/opptList", method = RequestMethod.POST)
	public @ResponseBody List<OpptVO> opptList(String cust_id) {
		List<OpptVO> opptList = cpservice.opptList(cust_id);
		return opptList;
	}

	// 영업활동
	@RequestMapping(value = "/actList", method = RequestMethod.POST)
	public @ResponseBody List<ActVO> actList(String cust_id) {
		List<ActVO> actList = cpservice.actList(cust_id);
		return actList;
	}

	// 견적
	@RequestMapping(value = "/estList", method = RequestMethod.POST)
	public @ResponseBody List<EstVO> estList(String cust_id) {
		List<EstVO> estList = cpservice.estList(cust_id);
		return estList;
	}

	// 계약
	@RequestMapping(value = "/contList", method = RequestMethod.POST)
	public @ResponseBody List<contrVO> contList(String cust_id) {
		List<contrVO> contList = cpservice.contList(cust_id);
		return contList;
	}

	// 직원검색 팝업
	@RequestMapping(value = "iuserSearchPop", method = RequestMethod.GET)
	public ModelAndView iuserSeachPopup() {
		ModelAndView mov = new ModelAndView("/sales/custpson/custpsonPop/employee_pop");
		return mov;
	}

	// 직원 검색
	@RequestMapping(value = "iuserSearch", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> iuserSearch(String iuser_nm,
			@RequestParam(value = "iuserPageNum", defaultValue = "1") int iuserPageNum) {
		Map<String, Object> iuserMap = new HashMap<String, Object>();

		// 우편번호 페이지 정보 얻기
		PagerVO page = cpservice.getEmpListNum(iuserPageNum, iuser_nm);
		iuserMap.put("iuser_nm", iuser_nm);

		// 리스트 가져오기
		List<CustPsonVO> empList = cpservice.getEmpList(iuserMap, page);

		iuserMap.put("iuserPageNum", iuserPageNum);
		iuserMap.put("page", page);
		iuserMap.put("empList", empList);

		return iuserMap;
	}

	// 우편번호 검색 팝업
	@RequestMapping(value = "zipCodePop", method = RequestMethod.GET)
	public ModelAndView zipCodePopup() {
		ModelAndView mov = new ModelAndView("/sales/custpson/custpsonPop/zip_pop");
		return mov;

	}

	// 우편번호 검색
	@RequestMapping(value = "zipCode", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> zipCodeSearch(
			String dong_nm,
			@RequestParam(value = "zipPageNum", defaultValue = "1") int zipPageNum) {
		Map<String, Object> zipMap = new HashMap<String, Object>();
		// 우편번호 페이지 정보 얻기
		PagerVO page = cpservice.getParcelPostListNum(zipPageNum, dong_nm);
		zipMap.put("dong_nm", dong_nm);

		// 리스트 가져오기
		List<AddressVo> ppVOList = cpservice.getParcelPostList(zipMap, page);

		zipMap.put("zipPageNum", zipPageNum);
		zipMap.put("page", page);
		zipMap.put("ppVOList", ppVOList);

		return zipMap;
	}

	// 개인고객 추가
	@RequestMapping(value = "insertCustPson", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> personalCutomerInput(
			HttpSession session, CustPsonVO cpvo) {
		Map<String, Object> rstMap = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			rstMap.put("inputResult", "standard/home/session_expire");
		} else {
			cpvo.setFst_reg_id_nm(session.getAttribute("user").toString());
			cpvo.setFin_mdfy_id_nm(session.getAttribute("user").toString());
			if(cpvo.getCust_info_yn() == null) {
				cpvo.setCust_info_yn("N");
			}
			if(cpvo.getMkt_app_yn() == null) {
				cpvo.setMkt_app_yn("N");
			}
			String inputResult = cpservice.insertCustPson(cpvo);
			rstMap.put("inputResult", inputResult);
		}
		return rstMap;
	}

	// 개인고객 수정
	@RequestMapping(value = "editCustPson", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> personalCutomerUpdate(
			HttpSession session, CustPsonVO cpvo) {
		Map<String, Object> rstMap = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			rstMap.put("updateResult", "standard/home/session_expire");
		} else {
			cpvo.setFin_mdfy_id_nm(session.getAttribute("user").toString());
			String updateResult = cpservice.updateCustPson(cpvo);
			cpvo = cpservice.custInfo(cpvo.getCust_id());
			rstMap.put("updateResult", updateResult);
			rstMap.put("cpvo", cpvo);
		}
		return rstMap;
	}

	// 개인고객 삭제
	@RequestMapping(value = "custPsonDelete", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> personalCutomerDelete(
			HttpSession session, @RequestBody List<String> cust_idList) {
		Map<String, Object> rstMap = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			rstMap.put("deleteResult", "standard/home/session_expire");
		} else {
			String deleteResult = cpservice.deleteCustPson(cust_idList);
			rstMap.put("deleteResult", deleteResult);
		}
		return rstMap;
	}

}
