package com.crm.cp.sales.cont.controller;

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

import com.crm.cp.sales.cont.service.contrService;
import com.crm.cp.sales.cont.vo.contrResultVO;
import com.crm.cp.sales.cont.vo.contrVO;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;
import com.crm.cp.utils.PagerVO;

@Controller
public class contrController {

	@Resource
	contrService contrService;

	@Resource
	MenuService menuService;

	// 계약 리스트
	@RequestMapping(value = "/cont")
	public ModelAndView ContSearchPage(HttpSession session,
			@RequestParam HashMap<String, Object> map,
			@RequestParam(value = "pageNum", defaultValue = "1") int pageNum) {
		System.out.println("cont list entering");
		
		map.put("pageNum", pageNum + "");
		
		PagerVO page = contrService.contPageCount(map);
		map.put("startRow", page.getStartRow() + "");
		map.put("endRow", page.getEndRow() + "");

		List<contrVO> contrSearchMap = contrService.getcContrMap(map);
		ModelAndView mov = new ModelAndView("cont");
		System.out.println("contrSearchMap" + contrSearchMap.toString());
		List<MenuVO> menuList = menuService.selectAll(session);
		System.out.println("menuList " + menuList.toString());
		mov.addObject("menuList", menuList);
		mov.addObject("contrList", contrSearchMap);
		mov.addObject("page", page);
		mov.addObject("pageNum", pageNum);
		mov.addObject("search", map);
		mov.addObject("endPageNum", map.get("endPageNum"));
		
		System.out.println("page 테스트 " + page.toString());
		System.out.println("mov 테스트 " + mov.toString());
		return mov;
	}
	
	// 계약 리스트(Ajax)
	@RequestMapping(value = "/contPaging")
	public @ResponseBody Map<String, Object> ContPaging(@RequestParam(value = "pageNum", defaultValue = "1") int pageNum,
			String sch_cont_nm , String sch_cont_num, String sch_cont_amt, String sch_contr_d) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("pageNum", pageNum);
		map.put("sch_cont_nm", sch_cont_nm);
		map.put("sch_cont_num", sch_cont_num);
		map.put("sch_cont_amt", sch_cont_amt);
		map.put("sch_contr_d", sch_contr_d);
		
		PagerVO page = contrService.contPageCount(map);
		map.put("page", page);
		map.put("startRow", page.getStartRow() + "");
		map.put("endRow", page.getEndRow() + "");
		
		List<contrVO> contList = contrService.getcContrMap(map);
		System.out.println("contList??" + contList);
		map.put("contList", contList);	
		
		return map;
	}

	
 	@RequestMapping(value="/cont_Detail")
	public ModelAndView ContDetailPage(@RequestParam("contr_id") String contr_id ){
		
		System.out.println("detail Entering");
		
		contrVO getcContrInfo = contrService.getcContrInfo(contr_id);
		System.out.println("getcContrinfo ????" + getcContrInfo.toString());
		
		ModelAndView mov = new ModelAndView("cont_detail");
		mov.addObject("contDetail", getcContrInfo);
		return mov;
	}  
	
	// 계약 상세정보 출력
	// ajax를 사용하여 데이터 받는 경우 써줘야한다.
/*	@RequestMapping(value = "/cont_detail")
	public @ResponseBody contrVO ContDetailPage(String contr_id) {
		contrVO getcContrInfo = contrService.getcContrInfo(contr_id);

		return getcContrInfo;
	}
*/
	// 계약 수정
	/*@RequestMapping(value = "/contUpdate")
	public @ResponseBody Map<String, String> ContUpdate(HttpSession session, contrVO contVO) {
		contVO.setFin_mdfy_id_nm(session.getAttribute("user").toString());// getParameter를 이름지정하듯 세션도 이름지정해서 설정된것을 가져오는 코드
		System.out.println(contVO);
		String updateCheck = contrService.contUpdate(contVO);
		Map<String, String> rstStr = new HashMap<String, String>();
		rstStr.put("updateResult", updateCheck);
		return rstStr;
	}*/
	
	@RequestMapping(value="/contUpdate", method={RequestMethod.GET,RequestMethod.POST})
	public String ContUpdate(HttpSession session, contrVO contVO){
		System.out.println("cont update entering");
		System.out.println("cont update vo? " + contVO.toString());
		contVO.setFin_mdfy_id(session.getAttribute("user").toString());// getParameter를 이름지정하듯 세션도 이름지정해서 설정된것을 가져오는 코드
		System.out.println(contVO);
		
		contrService.contUpdate(contVO);
		
		return "redirect:/cont";
	}
	
	
	
	
	
	

	// 계약 추가
	 @RequestMapping(value = "/contInsert")
	public @ResponseBody Map<String, String> ContInsert(HttpSession session, contrVO contVO) {
		contVO.setFst_reg_id(session.getAttribute("user").toString());// session에서 로그인한 아이디를 가져오는 코드
		contVO.setFin_mdfy_id(session.getAttribute("user").toString());// getParameter를 이름지정하듯 세션도 이름지정해서 설정된것을 가져오는 코드
		String insertCheck = contrService.contInsert(contVO);
		Map<String, String> rstStr = new HashMap<String, String>();
		rstStr.put("insertResult", insertCheck);
		return rstStr;
	} 
	
/*	@RequestMapping(value="/contInsert", method={RequestMethod.GET,RequestMethod.POST})
	public String ContInsert(HttpSession session, contrVO contVO){
		System.out.println("insert continsert");
		contVO.setFst_reg_id_nm(session.getAttribute("user").toString());
		contVO.setFin_mdfy_id_nm(session.getAttribute("user").toString());
		System.out.println("insert contrVO?" + contVO.toString());
		contrService.contInsert(contVO);
		
		return "redirect:/cont";
	}*/
	
	@RequestMapping(value="/cont_add", method=RequestMethod.GET)
	public void cont_add(HttpSession session, contrVO contVO){
		System.out.println("add continsert");
		contVO.setFst_reg_id(session.getAttribute("user").toString());
		contVO.setFin_mdfy_id(session.getAttribute("user").toString());
		System.out.println("insert contrVO?" + contVO.toString());
	
	}
	
	@RequestMapping(value="/cont_add", method=RequestMethod.POST)
	public String cont_addP(HttpSession session, contrVO contVO){
		System.out.println("add continsert");
		contVO.setFst_reg_id(session.getAttribute("user").toString());
		contVO.setFin_mdfy_id(session.getAttribute("user").toString());
		System.out.println("insert contrVO?" + contVO.toString());
		contrService.contInsert(contVO);
		
		return "redirect:/cont";
	 
		 
	}
	
	

	// 계약내역 삭제
	@RequestMapping(value = "contListDelete", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> ContListDelete(
			HttpSession session, @RequestBody List<String> cont_id_list) {
		String deleteResult = contrService.deleteCont(cont_id_list);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("deleteResult", deleteResult);
		return map;
	}

	// 영업기회리스트 팝업창
	@RequestMapping(value = "/contActOpptList", method = RequestMethod.GET)
	public ModelAndView ActOpptList(HttpSession session, String cust_id) {
		List<Object> actOpptList = contrService.contActOpptList(cust_id);
		ModelAndView mov = new ModelAndView("/sales/cont/cont_act_oppt_list_pop");
		System.out.println("actOppTlist" + actOpptList.toString());
		mov.addObject("actOpptList", actOpptList);

		return mov;
	}

	// 영업기회 리스트 검색부분 POST
	@RequestMapping(value = "/contActOpptList", method = RequestMethod.POST)
	public ModelAndView ActOpptListSearch(HttpSession session, 	String cust_id,
			@RequestParam(value = "keyfield", defaultValue = "oppt_id") String keyfield,
			@RequestParam(value = "keyword", defaultValue = "") String keyword) {

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);

		List<Object> actOpptList = contrService.contActOpptList(map);
		ModelAndView mov = new ModelAndView("/sales/cont/cont_act_oppt_list_pop");

		mov.addObject("actOpptList", actOpptList);

		return mov;
	}

	// 고객사 리스트 팝업창
	@RequestMapping(value = "/contCustcompList", method = RequestMethod.GET)
	public ModelAndView CustcompList(HttpSession session) {
		List<Object> custcompList = contrService.contCustcompList();
		ModelAndView mov = new ModelAndView("/sales/cont/cont_custcomp_list_pop");

		mov.addObject("custcompList", custcompList);

		return mov;
	}

	// 고객사 리스트 팝업창
	@RequestMapping(value = "/contCustcompList", method = RequestMethod.POST)
	public ModelAndView CustcompListSearch(HttpSession session,
			@RequestParam(value = "keyfield", defaultValue = "ct_id") String keyfield,
			@RequestParam(value = "keyword", defaultValue = "") String keyword) {

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);

		List<Object> custcompList = contrService.contCustcompList(map);
		ModelAndView mov = new ModelAndView("/sales/cont/cont_custcomp_list_pop");

		mov.addObject("custcompList", custcompList);

		return mov;
	}
	
	
	@RequestMapping(value="/contrResultpop" , method=RequestMethod.GET)
	public ModelAndView estimResultpop(HttpSession session){
			
			String userId = session.getAttribute("user").toString();
			contrResultVO vo = contrService.findEmpCd(userId);
			Map<String,String> map = new HashMap<String,String>(0);
			map.put("empcd", vo.getEmp_cd());
			map.put("userId", userId);
			List<Object> contrResultList = contrService.contrResult(map);
			ModelAndView mov = new ModelAndView("/sales/cont/contrResult_list_pop");
		
			mov.addObject("contrResultList", contrResultList);
	
		return mov;
	}

}
