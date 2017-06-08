package com.crm.cp.sales.custcomp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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
import com.crm.cp.standard.iuser.vo.IuserVO;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.utils.PagerVO;

@Controller
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
	
	
	// 고객사담당자 -> 담당사원으로 수정
	// 170605_담당사원 추가 시 새로운 페이지로 페이지 이동
	// 담당사원 리스트(MaV)
	@RequestMapping(value = "/custcompMng", method = RequestMethod.GET)
	public ModelAndView custcompMngList(HttpSession session,
											@RequestParam(value = "ccPageNum", defaultValue = "1") int ccPageNum) {
		ModelAndView mov = null;
		if (session.getAttribute("user") == null) { // 로그인 페이지 이동
			mov = new ModelAndView("standard/home/session_expire");
		} else {

			mov = new ModelAndView("custcompMng");

			Map<String, Object> pMap = new HashMap<String, Object>();

			pMap.put("ccPageNum", ccPageNum);

			// 담당사원 리스트 전체 개수 조회(페이징에 사용)
			PagerVO page = ccService.custcompMngListCount(pMap);

			pMap.put("page", page);

			pMap.put("startRow", page.getStartPageNum() + "");
			pMap.put("endRow", page.getEndPageNum() + "");

			List<PocVO> custcompMngList = ccService.custcompMngAllList(pMap); 	// 기업고객 리스트
			
			List<OrganizationVO> OrgCd = ccService.orgCdList(); 	// 담당사원 부서 가져오기

			System.out.println("고객사 리스트 ccVOList : " + custcompMngList);
			System.out.println("고객사 리스트 page :  " + page);
			mov.addObject("ccPageNum", ccPageNum);
			mov.addObject("custcompMngList", custcompMngList);
			mov.addObject("OrgCd", OrgCd);
			mov.addObject("page", page);
			mov.addObject("flg", "add");
			
			System.out.println("custcompMngList mov: " + mov.toString());

		}
		return mov;
	}
	
	// 담당사원 리스트(ajax)
	@RequestMapping(value = "custMngAjax", method = {RequestMethod.GET, RequestMethod.POST})
	public @ResponseBody Map<String, Object> custcompMngAjaxList(HttpSession session,
			@RequestParam(value = "ccPageNum", defaultValue = "1") int ccPageNum, @RequestParam Map<String, String> map,
			@RequestParam(value = "sch_cust_nm", required = false) String sch_cust_nm,
			@RequestParam(value = "sch_cust_nm0", required = false) String sch_cust_nm0,
			@RequestParam(value = "sch_cust_nm1", required = false) String sch_cust_nm1,
			
			@RequestParam(value = "sch_iuser_nm", required = false) String sch_iuser_nm,
			@RequestParam(value = "sch_iuser_nm0", required = false) String sch_iuser_nm0,
			@RequestParam(value = "sch_iuser_nm1", required = false) String sch_iuser_nm1,
			
			@RequestParam(value = "sch_key_part", required = false) String sch_key_part,
			@RequestParam(value = "sch_key_part0", required = false) String sch_key_part0,
			@RequestParam(value = "sch_key_part1", required = false) String sch_key_part1,
			
			@RequestParam(value = "sch_email", required = false) String sch_email,
			@RequestParam(value = "sch_email0", required = false) String sch_email0,
			@RequestParam(value = "sch_email1", required = false) String sch_email1,
			
			@RequestParam(value = "act_yn", required = false) String act_yn) {
		
		System.out.println("담당사원 ccPageNum: " + ccPageNum);
		Map<String, Object> pMap = new HashMap<String, Object>();

		if (session.getAttribute("user") == null) { // 로그인 페이지 이동
			pMap.put("result", "standard/home/session_expire");
		} else {
			pMap.put("result", "Y");
			pMap.put("sch_cust_nm", sch_cust_nm);
			pMap.put("sch_cust_nm0", sch_cust_nm0);
			pMap.put("sch_cust_nm1", sch_cust_nm1);
			pMap.put("sch_iuser_nm", sch_iuser_nm);
			pMap.put("sch_iuser_nm0", sch_iuser_nm0);
			pMap.put("sch_iuser_nm1", sch_iuser_nm);
			pMap.put("sch_key_part", sch_key_part);
			pMap.put("sch_key_part0", sch_key_part0);
			pMap.put("sch_key_part1", sch_key_part1);
			pMap.put("sch_email", sch_email);
			pMap.put("sch_email0", sch_email0);
			pMap.put("sch_email1", sch_email1);
			pMap.put("ccPageNum", ccPageNum);


			// 담당사원 리스트 전체 개수 조회(페이징에 사용)
			PagerVO page = ccService.custcompMngListCount(pMap);
			pMap.put("startRow", page.getStartPageNum() + "");
			pMap.put("endRow", page.getEndPageNum() + "");
			pMap.put("page", page);
			System.out.println("담당사원 리스트 Ajaxpage :  " + page);

			System.out.println("검색 TEST : " + pMap.toString());
			System.out.println("검색 TEST : " + pMap);

			List<PocVO> pocVOList = ccService.custcompMngAllList(pMap); // 고객사 리스트
			pMap.put("ccVOList", pocVOList);
//			pMap.put("ccVOListSize", pocVOList.size());
				
		}
		return pMap;
	}
	
	// 담당사원 상세보기
	@RequestMapping(value = "/custcompMngDetail", method = RequestMethod.POST)
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
	
//	// 담당사원 등록
//	@RequestMapping(value = "/custcompMngAdd", method = RequestMethod.POST)
//	public String custcompMngAdd(@ModelAttribute PocVO pocVO, HttpSession session, HttpServletRequest request) {
//
//		pocVO.setFst_reg_id(session.getAttribute("user").toString());
//		pocVO.setFin_mdfy_id(session.getAttribute("user").toString());
//
//		System.out.println("입력된 유저ID : " + pocVO.getFst_reg_id());
//		System.out.println("수정된 유저ID : " + pocVO.getFin_mdfy_id());
//		// System.out.println(ccVO.toString());
//		
//		ccService.custcompMngInsert(pocVO);
//
//		return "redirect:/custcompMng";
//	}
	
	// 담당사원 등록
	@RequestMapping(value = "/ccMngAdd", method = {RequestMethod.GET, RequestMethod.POST})
	@ResponseBody
	public int ccMngAdd(HttpSession session, IuserVO iuserVo) {
		
		iuserVo.setFst_reg_id(session.getAttribute("user").toString());
		iuserVo.setFin_mdfy_id(session.getAttribute("user").toString());

		// 고객사 담당사원 등록
		int result = iuserService.ccMngAdd(iuserVo);
		System.out.println("result : " + result);
		// return 1;
		return result;

	}

	// 담당사원 수정
	@RequestMapping(value = "/ccMngUpdate", method = RequestMethod.POST)
	@ResponseBody
	public int ccMngUpdate(HttpSession session, IuserVO iuserVo) {
		
		iuserVo.setFst_reg_id(session.getAttribute("user").toString());
		iuserVo.setFin_mdfy_id(session.getAttribute("user").toString());

		// 고객사 담당사원 수정
		System.out.println("담당사원 수정");
		int result = iuserService.ccMngUpdate(iuserVo);
		System.out.println("result : " + result);
		// return 1;
		return result;
	}
	
	 // 고객사 담당직원 삭제
	@RequestMapping(value = "/custMngDelete", method = { RequestMethod.GET, RequestMethod.POST })
	@ResponseBody
	int custMngDelete(HttpSession session, IuserVO iuserVo,
			@RequestParam(value = "ccMngDelList[]", required = false) List<String> ccMngDelList) {
		System.out.println("ccMngDelList : " + ccMngDelList);

		iuserVo.setFst_reg_id(session.getAttribute("user").toString());
		iuserVo.setFin_mdfy_id(session.getAttribute("user").toString());
		// 영업활동 삭제
		int result = 0;
		System.out.println(ccMngDelList);
		// 모든 checked된 견적에 대해 삭제
		for (int i = 0; i < ccMngDelList.size(); i++) {
			String cust_id = ccMngDelList.get(i).split(":")[0];
			String iuser_id = ccMngDelList.get(i).split(":")[1];
			iuserVo.setCust_id(cust_id);
			iuserVo.setIuser_id(iuser_id);
			result += iuserService.custMngDelete(iuserVo);
		}

		return result;
	}
	
	
	
	
	
	
	

}
