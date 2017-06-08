package com.crm.cp.sales.custcomp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.sales.act.service.ActService;
import com.crm.cp.sales.custcomp.service.CustCompService;
import com.crm.cp.sales.custcomp.vo.OrganizationVO;
import com.crm.cp.sales.custcomp.vo.PocVO;
import com.crm.cp.sales.est.service.EstService;
import com.crm.cp.sales.oppt.service.OpptService;
import com.crm.cp.standard.iuser.service.IuserService;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.utils.PagerVO;

public class CustcompMngController {
	
	@Resource
	CustCompService ccService;
	@Autowired
	MenuService menuService;	// 메뉴 서비스
	@Autowired
	EstService estInter; 		// 견적 서비스
	@Autowired
	OpptService opptService; 	// 영업기회 서비스
	@Autowired
	ActService actService; 		// 영업활동 서비스
	@Resource
	IuserService iuserService; 	// 사원 서비스
	@Resource
	OpptService service;		// 영업기회 서비스
	
	
	// 고객별 고객사 담당자//
	// 영업 당담자 리스트
	// 170605_담당사원
	@RequestMapping(value = "/ccPocList", method = RequestMethod.POST)
	public @ResponseBody List<PocVO> pocList(String cust_id) {

		List<PocVO> pocVOList = ccService.getPocList(cust_id);
		 System.out.println("pocVOList : " + pocVOList.toString());

		return pocVOList;
	}
	
	// 고객사담당자 -> 담당사원으로 수정
	// 170605_담당사원 추가 시 새로운 페이지로 페이지 이동
	// 담당사원 전체 리스트
	@RequestMapping(value = "custcompMng", method = RequestMethod.GET)
	public ModelAndView custcompMngList(HttpSession session, 
									@RequestParam(value = "ccPageNum", defaultValue = "1") int ccPageNum) {
		
		if (session.getAttribute("user") == null) {
			return new ModelAndView("redirect:/");
		}
		
		System.out.println("custcomp mng");
		System.out.println("ccPageNum" + ccPageNum);

		ModelAndView mov = null;
		if (session.getAttribute("user") == null) {
			mov = new ModelAndView("standard/home/session_expire");
		}
		System.out.println("step1");
		
		Map<String, Object> ccMngMap = new HashMap<String, Object>();
		ccMngMap.put("ccPageNum", ccPageNum);
		
		// 담당사원 부서 가져오기
		List<OrganizationVO> OrgCd = ccService.orgCdList();
		
		PagerVO page = ccService.custcompMngListCount(ccMngMap);
		System.out.println("page " + page.toString());
		ccMngMap.put("page", page);

		List<PocVO> custcompMngList = ccService.custcompMngAllList(ccMngMap);
		System.out.println("custcompMngList: " + custcompMngList.toString());

		mov = new ModelAndView("custcompMng");
		mov.addObject("custcompMngList", custcompMngList);
		mov.addObject("ccPageNum", ccPageNum);
		mov.addObject("page", page);
		mov.addObject("OrgCd", OrgCd);
		mov.addObject("flg", "add");

		System.out.println("custcompMngList mov: " + mov.toString());

		return mov;
	}
	
	// 담당사원 상세보기
	@RequestMapping(value = "custcompMngDetail", method = RequestMethod.POST)
	public @ResponseBody PocVO custcompMngDetail(PocVO pocVO) {
 
		System.out.println("ajax detail custcompMng: " + pocVO );
		
		PocVO pocVOList =  ccService.custcompMngDetail(pocVO); 
		System.out.println("pocVO :" + pocVOList);
		
		return pocVOList; 
		
	}
	
	// 담당사원 상세보기에서_고객사 검색 버튼 클릭 시 팝업 오픈(사용)
	@RequestMapping(value = "/custcompCustnmList", method = RequestMethod.GET)
	public ModelAndView custcompCustnmList(
			HttpSession session,
			String pop_flg,
			@RequestParam(value = "keyfield", defaultValue = "ct_id") String keyfield,
			@RequestParam(value = "keyword", defaultValue = "") String keyword) {
	
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);
		List<Object> custcompList = service.opptCustComp(map);
		
		System.out.println("custcompList pop_flg : " + pop_flg);
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_list_pop");
	
		mov.addObject("custcompList", custcompList);
	
		// javascript에서 상세정보에서의 고객 리스트인지 구분하기 위한 값 전달
		mov.addObject("custType", "normal");
		mov.addObject("pop_flg", pop_flg);
	
		return mov;
	}
	
	
	// 담당사원 추가
	@RequestMapping(value = "/custcompMngAdd", method = RequestMethod.POST)
	public String custcompMngAdd(@ModelAttribute PocVO pocVO, HttpSession session, HttpServletRequest request) {

		pocVO.setFst_reg_id(session.getAttribute("user").toString());
		pocVO.setFin_mdfy_id(session.getAttribute("user").toString());

		System.out.println("입력된 유저ID : " + pocVO.getFst_reg_id());
		System.out.println("수정된 유저ID : " + pocVO.getFin_mdfy_id());
		// System.out.println(ccVO.toString());
		
		ccService.custcompMngInsert(pocVO);

		return "redirect:/custcompMng";
	}
	
	
	
	
	
	
	
	
	
	

}
