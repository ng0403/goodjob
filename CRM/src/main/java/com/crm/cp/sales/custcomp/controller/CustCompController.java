package com.crm.cp.sales.custcomp.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
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

import com.crm.cp.sales.act.service.ActService;
import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.cont.service.contrService;
import com.crm.cp.sales.cont.vo.contrVO;
import com.crm.cp.sales.custcomp.service.CustCompService;
import com.crm.cp.sales.custcomp.vo.CustCompVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.sales.custcomp.vo.PocVO;
import com.crm.cp.sales.custcomp.vo.PosVO;
import com.crm.cp.sales.est.service.EstService;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.service.OpptService;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.iuser.service.IuserService;
import com.crm.cp.standard.iuser.vo.IuserVO;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.prod.vo.ProdVO;
import com.crm.cp.utils.PagerVO;

@Controller
public class CustCompController {

	@Resource
	CustCompService ccService;

	@Autowired
	MenuService menuService;
	
	@Autowired
	EstService estInter;		//견적 서비스
	
	@Autowired
	OpptService opptService;	//영업기회 서비스
	
	@Autowired
	ActService actService;		//영업활동 서비스
	
	@Resource
	IuserService iuserService;	//사원 서비스
	
	// 고객사 리스트(MaV)
	@RequestMapping(value = "/custcomp", method = RequestMethod.GET)
	public ModelAndView custCompList(HttpSession session, @RequestParam(value = "ccPageNum", defaultValue = "1") int ccPageNum) {
		ModelAndView mov = null;
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			mov = new ModelAndView("standard/home/session_expire");
		} else {
			
			mov = new ModelAndView("custcomp");

			Map<String, Object> pMap = new HashMap<String, Object>();
			
			pMap.put("ccPageNum", ccPageNum);
			
			// 고객사 리스트 전체 개수 조회(페이징에 사용)
			PagerVO page = ccService.getCCListCount(pMap);
			
			pMap.put("page", page);
			
			pMap.put("startRow", page.getStartPageNum() + "");
			pMap.put("endRow", page.getEndPageNum() + "");
			
			List<CustCompVO> ccVOList = ccService.getCCList(pMap); // 기업고객 리스트
			List<CustCompVO> SSCCodeList = ccService.selectSSC(); // 매출규모 코드 가져오기
			List<CustCompVO> IDCCodeList = ccService.selectIDC(); // 산업군 코드 가져오기
			List<CustCompVO> CCSCodeList = ccService.selectCCS(); // 기업 상태 코드 가져오기
			List<CustCompVO> CDCCodeList = ccService.selectCDC(); // 고객사 구분 코드 가져오기
			
			System.out.println("고객사 리스트 ccVOList : " + ccVOList);
			System.out.println("고객사 리스트 page :  "+ page);
//			List<MenuVO> menuList = menuService.selectAll(session);
			mov.addObject("ccPageNum", ccPageNum);
//			mov.addObject("menuList", menuList);
			mov.addObject("ccVOList", ccVOList);
			mov.addObject("SSCCodeList", SSCCodeList);
			mov.addObject("IDCCodeList", IDCCodeList);
			mov.addObject("CCSCodeList", CCSCodeList);
			mov.addObject("CDCCodeList", CDCCodeList);
			mov.addObject("page", page);
			
		}
		return mov;
	}

	// 고객사 리스트(ajax)
	@RequestMapping(value = "custCompAjax", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> custCompPList(
							HttpSession session,
							@RequestParam(value = "pageNum", defaultValue = "1") int ccPageNum,
							@RequestParam Map<String, String> map,
							@RequestParam (value = "sch_cust_nm" , required = false) String sch_cust_nm,
							@RequestParam (value = "sch_cust_nm0" , required = false) String sch_cust_nm0,
							@RequestParam (value = "sch_cust_nm1" , required = false) String sch_cust_nm1,
							@RequestParam (value = "sch_comp_num" , required = false) String sch_comp_num,
							@RequestParam (value = "sch_comp_num0" , required = false) String sch_comp_num0,
							@RequestParam (value = "sch_comp_num1" , required = false) String sch_comp_num1,
							@RequestParam (value = "sch_corp_num" , required = false) String sch_corp_num,
							@RequestParam (value = "sch_corp_num0" , required = false) String sch_corp_num0,
							@RequestParam (value = "sch_corp_num1" , required = false) String sch_corp_num1,
							@RequestParam (value = "act_yn" , required = false) String act_yn
							) {
		System.out.println("111" + ccPageNum);
 		Map<String, Object> pMap = new HashMap<String, Object>();
		
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			pMap.put("result", "standard/home/session_expire");
		} else {
			pMap.put("result", "Y");
			pMap.put("sch_cust_nm", sch_cust_nm);
			pMap.put("sch_cust_nm0", sch_cust_nm0);
			pMap.put("sch_cust_nm1", sch_cust_nm1);
			pMap.put("sch_comp_num", sch_comp_num);
			pMap.put("sch_comp_num0", sch_comp_num0);
			pMap.put("sch_comp_num1", sch_comp_num1);
			pMap.put("sch_corp_num", sch_corp_num);
			pMap.put("sch_corp_num0", sch_corp_num0);
			pMap.put("sch_corp_num1", sch_corp_num1);
			pMap.put("ccPageNum", ccPageNum);
			
			if (act_yn.equals("Y")) {
				
				// 고객사 리스트 전체 개수 조회(페이징에 사용)
				PagerVO page = ccService.getCCListCount(pMap);
				pMap.put("startRow", page.getStartPageNum() + "");
				pMap.put("endRow", page.getEndPageNum() + "");
				pMap.put("page", page);
				System.out.println("고객사 리스트 Ajaxpage :  "+ page);
				
				System.out.println("검색 TEST : " + pMap.toString());
				System.out.println("검색 TEST : " + pMap);
				
				List<CustCompVO> ccVOList = ccService.getCCList(pMap); // 고객사 리스트
				pMap.put("ccVOList", ccVOList);
				pMap.put("ccVOListSize", ccVOList.size());
		
			} else {
				
				// 고객사 리스트 삭제된 데이터 개수 조회(페이징에 사용)
				PagerVO page = ccService.getCCDelListCount(pMap);
				pMap.put("startRow", page.getStartPageNum() + "");
				pMap.put("endRow", page.getEndPageNum() + "");
				pMap.put("page", page);
				
				List<CustCompVO> ccVOList = ccService.getCCDelList(pMap); // 고객사 삭제된 리스트
				System.out.println("dddd " + ccVOList.toString());
				pMap.put("ccVOList", ccVOList);
				pMap.put("ccVOListSize", ccVOList.size());
		
			}
			
		}
		return pMap;
	}
	
	//고객사 상세정보
	@RequestMapping(value="/custcompDetail", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView cutomerDetail(HttpSession session, @RequestParam Map<String, String> map
										, String cust_id, String tabValue) {
		
		System.out.println("cust_id : " + cust_id);
		System.out.println("tabValue : " + tabValue);
		
		if (session.getAttribute("user") == null) {
			return new ModelAndView("redirect:/");
		}
		
		int flg;
		
		if(cust_id == null) {
			flg = 0;
			
			ModelAndView mov = new ModelAndView("custcompAdd");

			List<CustCompVO> SSCCodeList = ccService.selectSSC(); // 매출규모 코드 가져오기
			List<CustCompVO> IDCCodeList = ccService.selectIDC(); // 산업군 코드 가져오기
			List<CustCompVO> CCSCodeList = ccService.selectCCS(); // 기업 상태 코드 가져오기
			List<CustCompVO> CDCCodeList = ccService.selectCDC(); // 고객사구분 코드 가져오기
			
			System.out.println("고객사 추가 flg : " + flg);
			
			mov.addObject("SSCCodeList", SSCCodeList);
			mov.addObject("IDCCodeList", IDCCodeList);
			mov.addObject("CCSCodeList", CCSCodeList);
			mov.addObject("CDCCodeList", CDCCodeList);
			mov.addObject("flg", flg);
			mov.addObject("tabValue", tabValue);
			// 검색어, 페이지번호 전달
			mov.addObject("searchInfo", map);
			
			return mov;
		} else {
			ModelAndView mov = new ModelAndView("custcompDetail");
			flg = 1;
			
			//map.put("cust_id", cust_id);
			CustCompVO ccVO = ccService.custcompDetail(cust_id);

			mov.addObject("custcompDetail", ccVO);
			
			List<CustCompVO> SSCCodeList = ccService.selectSSC(); // 매출규모 코드 가져오기
			List<CustCompVO> IDCCodeList = ccService.selectIDC(); // 산업군 코드 가져오기
			List<CustCompVO> CCSCodeList = ccService.selectCCS(); // 기업 상태 코드 가져오기
			List<CustCompVO> CDCCodeList = ccService.selectCDC(); // 고객사구분 코드 가져오기
			
			System.out.println("고객사 상세보기 flg : " + flg);
			System.out.println(ccVO.toString());
			
			mov.addObject("SSCCodeList", SSCCodeList);
			mov.addObject("IDCCodeList", IDCCodeList);
			mov.addObject("CCSCodeList", CCSCodeList);
			mov.addObject("CDCCodeList", CDCCodeList);
			mov.addObject("flg", flg);
			mov.addObject("tabValue", tabValue);
			
			// 검색어, 페이지번호 전달
			mov.addObject("searchInfo", map);
			return mov;
		}
	}
	
	//고객사 추가
	@RequestMapping(value = "/custcompAdd",  method = RequestMethod.POST)
	public String custcompAdd(@ModelAttribute CustCompVO ccVO, HttpSession session, HttpServletRequest request) {
		
		ccVO.setFst_reg_id(session.getAttribute("user").toString());
		ccVO.setFin_mdfy_id(session.getAttribute("user").toString());
		
		System.out.println("입력된 유저ID : "+ccVO.getFst_reg_id());
		System.out.println("수정된 유저ID : "+ccVO.getFin_mdfy_id());
//		System.out.println(ccVO.toString());
		ccService.custcompInsert(ccVO);
		
		return "redirect:/custcomp";
	}
	
	//고객사 수정 ajax
	@RequestMapping(value = "/custcompModify", method = RequestMethod.POST)
	public String  custcompModify(@ModelAttribute CustCompVO ccVO, HttpSession session) {
		System.out.println("Detail Edit Controller");
		
		ccVO.setFst_reg_id(session.getAttribute("user").toString());
		ccVO.setFin_mdfy_id(session.getAttribute("user").toString());
		
		System.out.println("입력된 유저ID : "+ccVO.getFst_reg_id());
		System.out.println("수정된 유저ID : "+ccVO.getFin_mdfy_id());
		
		System.out.println(ccVO);
		ccService.custcompEdit(ccVO);
		
        return "redirect:/custcomp";
	}
	
	// 고객사 삭제
	@RequestMapping(value = "/custcompDelete", method = RequestMethod.GET)
	@ResponseBody public int custcompDelete(HttpSession session,
								@RequestParam(value = "custcompList[]") List<String> custcompList, CustCompVO ccVO,
								@RequestParam(value = "pageNum", defaultValue = "1") String pageNum) {
		
		
		ccVO.setFst_reg_id(session.getAttribute("user").toString());
		ccVO.setFin_mdfy_id(session.getAttribute("user").toString());
		
		System.out.println("입력된 유저ID : "+ccVO.getFst_reg_id());
		System.out.println("수정된 유저ID : "+ccVO.getFin_mdfy_id());
		System.out.println("custcompList.get(i) : "+ custcompList.toString());
		
		int result = 0;
		// 모든 checked된 견적에 대해 삭제
		for (int i = 0; i < custcompList.size(); i++) {
			ccVO.setCust_id(custcompList.get(i));
			
			result += ccService.custcompDelete(ccVO);
		}
		return result;
	}
	
	// 고객사 삭제된 데이터 리스트(MaV)
	@RequestMapping(value = "/custcompDelList", method = RequestMethod.GET)
	public ModelAndView custCompDelList(HttpSession session, @RequestParam(value = "ccPageNum", defaultValue = "1") int ccPageNum) {
		ModelAndView mov = null;
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			mov = new ModelAndView("standard/home/session_expire");
		} else {
			
			mov = new ModelAndView("custcompDel");

			Map<String, Object> pMap = new HashMap<String, Object>();
			
			pMap.put("ccPageNum", ccPageNum);
			
			// 고객사 삭제된 리스트 전체 개수 조회(페이징에 사용)
			PagerVO page = ccService.getCCDelListCount(pMap);
			
			pMap.put("page", page);
			
			pMap.put("startRow", page.getStartPageNum() + "");
			pMap.put("endRow", page.getEndPageNum() + "");
			
			List<CustCompVO> ccVOList = ccService.getCCDelList(pMap); // 기업고객 리스트
			List<CustCompVO> SSCCodeList = ccService.selectSSC(); // 매출규모 코드 가져오기
			List<CustCompVO> IDCCodeList = ccService.selectIDC(); // 산업군 코드 가져오기
			List<CustCompVO> CCSCodeList = ccService.selectCCS(); // 기업 상태 코드 가져오기
			List<CustCompVO> CDCCodeList = ccService.selectCDC(); // 고객사 구분 코드 가져오기
			
			System.out.println("삭제된 데이터 ccVOList : " + ccVOList);
			System.out.println("삭제된 데이터 page :  "+ page);
//			List<MenuVO> menuList = menuService.selectAll(session);
			mov.addObject("ccPageNum", ccPageNum);
//			mov.addObject("menuList", menuList);
			mov.addObject("ccVOList", ccVOList);
			mov.addObject("SSCCodeList", SSCCodeList);
			mov.addObject("IDCCodeList", IDCCodeList);
			mov.addObject("CCSCodeList", CCSCodeList);
			mov.addObject("CDCCodeList", CDCCodeList);
			mov.addObject("page", page);
			
		}
		return mov;
	}
	
	// 고객사 삭제된 데이터 리스트(ajax)
	@RequestMapping(value = "custcompDelListAjax", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> custCompDelList(
							HttpSession session,
							@RequestParam(value = "pageNum", defaultValue = "1") int ccPageNum,
							@RequestParam Map<String, String> map,
							@RequestParam (value = "sch_cust_nm" , required = false) String sch_cust_nm,
							@RequestParam (value = "sch_cust_nm0" , required = false) String sch_cust_nm0,
							@RequestParam (value = "sch_cust_nm1" , required = false) String sch_cust_nm1,
							@RequestParam (value = "sch_comp_num" , required = false) String sch_comp_num,
							@RequestParam (value = "sch_comp_num0" , required = false) String sch_comp_num0,
							@RequestParam (value = "sch_comp_num1" , required = false) String sch_comp_num1,
							@RequestParam (value = "sch_corp_num" , required = false) String sch_corp_num,
							@RequestParam (value = "sch_corp_num0" , required = false) String sch_corp_num0,
							@RequestParam (value = "sch_corp_num1" , required = false) String sch_corp_num1 ) {
		
 		Map<String, Object> pMap = new HashMap<String, Object>();
		
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			pMap.put("result", "standard/home/session_expire");
		} else {
			pMap.put("result", "Y");
			pMap.put("sch_cust_nm", sch_cust_nm);
			pMap.put("sch_cust_nm0", sch_cust_nm0);
			pMap.put("sch_cust_nm1", sch_cust_nm1);
			pMap.put("sch_comp_num", sch_comp_num);
			pMap.put("sch_comp_num0", sch_comp_num0);
			pMap.put("sch_comp_num1", sch_comp_num1);
			pMap.put("sch_corp_num", sch_corp_num);
			pMap.put("sch_corp_num0", sch_corp_num0);
			pMap.put("sch_corp_num1", sch_corp_num1);
			pMap.put("ccPageNum", ccPageNum);
//			
			// 고객사 리스트 전체 개수 조회(페이징에 사용)
			PagerVO page = ccService.getCCListCount(pMap);
			pMap.put("startRow", page.getStartPageNum() + "");
			pMap.put("endRow", page.getEndPageNum() + "");
			pMap.put("page", page);
			System.out.println("삭제된 데이터 page :  "+ page);
			
			List<CustCompVO> ccVOList = ccService.getCCDelList(pMap); // 고객사 삭제된 리스트
			pMap.put("ccVOList", ccVOList);
			
			pMap.put("ccVOListSize", ccVOList.size());
			
		}
		return pMap;
	}

	//고객사 삭제된 데이터 상세정보
	@RequestMapping(value="/custcompDelDetail", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView cutomerDelDetail(HttpSession session, @RequestParam Map<String, String> map, CustCompVO ccVO 
										, String cust_id) {
		
		ccVO.setFst_reg_id(session.getAttribute("user").toString());
		ccVO.setFin_mdfy_id(session.getAttribute("user").toString());
		
		System.out.println("입력된 유저ID : "+ccVO.getFst_reg_id());
		System.out.println("수정된 유저ID : "+ccVO.getFin_mdfy_id());
		
		System.out.println("cust_id : " + cust_id);
		
		if (session.getAttribute("user") == null) {
			return new ModelAndView("redirect:/");
		}

		int flg;
		if(cust_id == null) {
			flg = 0;
			
			ModelAndView mov = new ModelAndView("custcompDelDetail");

			List<CustCompVO> SSCCodeList = ccService.selectSSC(); // 매출규모 코드 가져오기
			List<CustCompVO> IDCCodeList = ccService.selectIDC(); // 산업군 코드 가져오기
			List<CustCompVO> CCSCodeList = ccService.selectCCS(); // 기업 상태 코드 가져오기
			List<CustCompVO> CDCCodeList = ccService.selectCDC(); // 고객사구분 코드 가져오기
			
			System.out.println("삭제된 데이터 flg : " + flg);
			
			mov.addObject("SSCCodeList", SSCCodeList);
			mov.addObject("IDCCodeList", IDCCodeList);
			mov.addObject("CCSCodeList", CCSCodeList);
			mov.addObject("CDCCodeList", CDCCodeList);
			mov.addObject("flg", flg);
			
			// 검색어, 페이지번호 전달
			mov.addObject("searchInfo", map);
			
			return mov;
			
		} else {
			
			ModelAndView mov = new ModelAndView("custcompDelDetail");
			flg = 1;
			
			map.put("cust_id", cust_id);
			
			ccVO = ccService.custcompDelDetail(cust_id);

			mov.addObject("custcompDetail", ccVO);
			
			List<CustCompVO> SSCCodeList = ccService.selectSSC(); // 매출규모 코드 가져오기
			List<CustCompVO> IDCCodeList = ccService.selectIDC(); // 산업군 코드 가져오기
			List<CustCompVO> CCSCodeList = ccService.selectCCS(); // 기업 상태 코드 가져오기
			List<CustCompVO> CDCCodeList = ccService.selectCDC(); // 고객사구분 코드 가져오기
			
			System.out.println("삭제된 데이터 flg : " + flg);
//			System.out.println(ccVO.toString());
			
			mov.addObject("SSCCodeList", SSCCodeList);
			mov.addObject("IDCCodeList", IDCCodeList);
			mov.addObject("CCSCodeList", CCSCodeList);
			mov.addObject("CDCCodeList", CDCCodeList);
			mov.addObject("flg", flg);
				
			// 검색어, 페이지번호 전달
			mov.addObject("searchInfo", map);
			return mov;
		}
	}
	
	//고객사 삭제된 데이터 복원 ajax
	@RequestMapping(value = "/custcompDelModify", method = RequestMethod.POST)
	@ResponseBody ModelAndView custcompDelModify(@ModelAttribute CustCompVO ccVO, HttpSession session, 
													@RequestParam Map<String, String> map,
													@RequestParam(value = "pageNum", defaultValue = "1") int pageNum,
													String cust_id) {
		
		System.out.println("DelDetail Edit Controller : 고객사 삭제된 데이터 복원");
		
		ccVO.setFst_reg_id(session.getAttribute("user").toString());
		ccVO.setFin_mdfy_id(session.getAttribute("user").toString());
		
		System.out.println("입력된 유저ID : "+ccVO.getFst_reg_id());
		System.out.println("수정된 유저ID : "+ccVO.getFin_mdfy_id());
		
		ccVO.setAct_yn("Y");
		ccVO.setCust_id(cust_id);
		System.out.println("복원된 고객사ID : " + ccVO.getCust_id());
		
		System.out.println(ccVO);
		ccService.custcompDelEdit(ccVO);
		
		ModelAndView mov = new ModelAndView("custcomp");
		
		//고객사 상세정보
		ccVO = ccService.custcompDetail(ccVO.getCust_id());

		Map<String, Object> ccMap = new HashMap<String, Object>();
		ccMap.put("ccVO", ccVO);
		ccMap.put("pageNum", pageNum);
		mov.addObject("ccVO", ccVO);
		mov.addObject("pageNum", pageNum);
		
		return mov;
		
	}
	
	// 고객사 삭제된 데이터 완전 삭제
	@RequestMapping(value = "/custcompDelDelete", method = RequestMethod.POST)
	@ResponseBody public int custcompDelDelete(HttpSession session,
													@RequestParam(value = "pageNum", defaultValue = "1") String pageNum
													, String cust_id) {
		
		System.out.println("데이터 완전삭제 고객사 ID : " + cust_id );
		int result = 0;
		result += ccService.custcompDelDelete(cust_id);
		System.out.println("삭제결과 : " + result);
		return result;
	}
	
	// 직원검색 팝업
	@RequestMapping(value = "iuserSearchPop.do", method = RequestMethod.GET)
	public ModelAndView iuserSeachPopup() {
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/employee_pop");
		return mov;
	}
	
	// 직원 검색
	@RequestMapping(value = "iuserSearch.do", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> iuserSearch(String iuser_nm,
			@RequestParam(value = "iuserPageNum", defaultValue = "1") int iuserPageNum) {
		Map<String, Object> iuserMap = new HashMap<String, Object>();

		// 직원검색 페이지 정보 얻기
		PagerVO page = ccService.getEmpListNum(iuserPageNum, iuser_nm);
		iuserMap.put("iuser_nm", iuser_nm);

		// 리스트 가져오기
		List<CustCompVO> empList = ccService.getEmpList(iuserMap, page);

		iuserMap.put("iuserPageNum", iuserPageNum);
		iuserMap.put("page", page);
		iuserMap.put("empList", empList);

		return iuserMap;
	}
	
	//고객별 고객사 담당자// 
	//영업 당담자 리스트(고객사담당자에서 바뀐 이름)
	@RequestMapping(value = "/ccPocList", method = RequestMethod.POST)
	public @ResponseBody List<PocVO> pocList(String cust_id) {
		
		List<PocVO> pocVOList = ccService.getPocList(cust_id);
//		System.out.println("pocVOList : " + pocVOList.toString());
		
		return pocVOList;
	}
	
	//고객별 영업 담당자 //
	//영업 담당자 리스트 //사용하지 않음
	@RequestMapping(value = "/ccPosList", method = RequestMethod.POST)
	public @ResponseBody List<PosVO> posList(String cust_id) {

		List<PosVO> posVOList = ccService.getPosList(cust_id);
//		System.out.println("posVOList : " + posVOList.toString());
		
		return posVOList;
	}
	
	//영업 담당자 상세보기 팝업창
	@RequestMapping(value = "/custPosDetailPopup", method = RequestMethod.GET)
	public ModelAndView custPosDetailPopup(HttpSession session, 
			@RequestParam Map<String, String> map,
											String sales_actvy_id, String cust_id, 
											String iuser_id) {

		System.out.println("영업담당자 상세정보 팝업 sales_actvy_id : " + sales_actvy_id);
		//System.out.println("영업담당자 상세정보 팝업 sales_actvy_nm : " + sales_actvy_nm);
		
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_pos_pop");
		map.put("sales_actvy_id", sales_actvy_id);
		map.put("iuser_id", iuser_id);
		map.put("cust_id", cust_id);
		
		// 영업활동 유형코드 가져오기
		List<ActVO> actTypeCd = service.actTypeCdList();
		// 영업활동 상태코드 가져오기
		List<ActVO> actStatCd = service.actStatCdList();
		// 영업활동 구분코드 가져오기
		List<ActVO> actDivCd = service.actDivCdList();
		
		PosVO detail = ccService.posDetail(map);
		System.out.println("영업담당자 상세 페이지 detail : " + detail);
	
		
		mov.addObject("detail", detail);
		mov.addObject("actTypeCd", actTypeCd);
		mov.addObject("actStatCd", actStatCd);
		mov.addObject("actDivCd", actDivCd);
		//mov.addObject("cust_nm", detail.getCust_nm());
		mov.addObject("sales_actvy_id", sales_actvy_id);
		//mov.addObject("sales_actvy_nm", sales_actvy_nm);
		mov.addObject("flg", "detail");
		return mov;
	}
	
	// 영업담당자 추가 팝업창
	@RequestMapping(value = "/custPosPopup", method = RequestMethod.GET)
	public ModelAndView custPosPopup(HttpSession session, 
											String list_cust_id, String list_cust_nm, String list_sales_actvy_id) {
		
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_pos_pop");
		
		// 영업활동 유형코드 가져오기
		List<ActVO> actTypeCd = ccService.actTypeCdList();
		// 영업활동 상태코드 가져오기
		List<ActVO> actStatCd = ccService.actStatCdList();
		// 영업활동 구분코드 가져오기
		List<ActVO> actDivCd = ccService.actDivCdList();

		mov.addObject("actTypeCd", actTypeCd);
		mov.addObject("actStatCd", actStatCd);
		mov.addObject("actDivCd", actDivCd);

		System.out.println("영업담당자 추가 탭 list_cust_id : " +list_cust_id );
		System.out.println("list_cust_nm : " +list_cust_nm );
		System.out.println("list_sales_actvy_id : " + list_sales_actvy_id);
		// 영업담당자 추가 시에 들어갈 sales_oppt_id값 전달

		mov.addObject("cust_id", list_cust_id);
		mov.addObject("cust_nm", list_cust_nm);
		mov.addObject("sales_actvy_id", list_sales_actvy_id);
		mov.addObject("flg", "add");

		return mov;

	}
	
	// 영업담당자 추가
	@RequestMapping(value = "/custPosAdd", method = RequestMethod.POST)
	@ResponseBody
	public int custPosAdd(HttpSession session, PosVO pos) {
		pos.setFst_reg_id(session.getAttribute("user").toString());
		pos.setFin_mdfy_id(session.getAttribute("user").toString());
		
		// 영업담당자 추가
		int result = ccService.custPosAdd(pos);
		System.out.println("영업담당자 추가 : " + result);
		// return 1;
		return result;

	}
	
	//영업담당자 추가에서 영업활동 리스트 
	@RequestMapping(value="/custSaleActList" , method=RequestMethod.GET)
	public ModelAndView custSaleActList(HttpSession session,
											@RequestParam(value="keyfield", defaultValue="ct_id") String keyfield,
											@RequestParam(value="keyword", defaultValue="") String keyword,
											String cust_id){
		System.out.println("cust_id : " + cust_id);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("cust_id", cust_id);
		map.put("keyword", keyword);
		List<Object> slaeActOpptList = ccService.custSaleActList(map);
		System.out.println("slaeActOpptList : " + slaeActOpptList);
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/sale_act_list");
		
		mov.addObject("slaeActOpptList", slaeActOpptList);
		
		return mov;
	}
	// 고객사별 담당자 추가 팝업창
	@RequestMapping(value = "/custMngPopup", method = RequestMethod.GET)
	public ModelAndView custMngPopup(HttpSession session, 
			String list_cust_id, String list_cust_nm) {
		
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_mng_pop");
		
		
		System.out.println("영업활동 추가 탭 list_cust_id : " +list_cust_id );
		System.out.println("list_cust_nm : " +list_cust_nm );
		// 영업활동 추가 시에 들어갈 sales_oppt_id값 전달
		
		mov.addObject("cust_id", list_cust_id);
		mov.addObject("cust_nm", list_cust_nm);
		mov.addObject("flg", "add");
		
		return mov;
		
	}
		
	// 고객사별 담당자 추가 팝업창
	@RequestMapping(value = "/custMngDetailPopup", method = RequestMethod.GET)
	public ModelAndView custMngDetailPopup(HttpSession session,
											@RequestParam Map<String, String> map,
											String list_cust_id, String list_cust_nm,
											String list_iuser_id, String list_iuser_nm) {
		
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_mng_pop");
		map.put("cust_id", list_cust_id);
		map.put("iuser_id", list_iuser_id);
			
		IuserVO detail = iuserService.ccMngDetail(map);
		System.out.println("영어활동 추가 탭 list_cust_id : " +list_cust_id );
		System.out.println("list_cust_nm : " +detail );
		// 영업활동 추가 시에 들어갈 sales_oppt_id값 전달
			
		mov.addObject("cust_id", list_cust_id);
		mov.addObject("cust_nm", list_cust_nm);
		mov.addObject("detail", detail);
		mov.addObject("flg", "detail");
			
		return mov;
			
	}
	
	// 고객사 담당직원 추가
	@RequestMapping(value = "/ccMngAdd", method = RequestMethod.POST)
	@ResponseBody
	public int ccMngAdd(HttpSession session, IuserVO iuserVo) {
		iuserVo.setFst_reg_id(session.getAttribute("user").toString());
		iuserVo.setFin_mdfy_id(session.getAttribute("user").toString());
		
		// 고객사 담당직원 추가
		int result = iuserService.ccMngAdd(iuserVo);
		System.out.println("result : " + result);
		// return 1;
		return result;

	}
		
	// 고객사 담당직원 수정
	@RequestMapping(value = "/ccMngUpdate", method = RequestMethod.POST)
	@ResponseBody
	public int ccMngUpdate(HttpSession session, IuserVO iuserVo) {
		iuserVo.setFst_reg_id(session.getAttribute("user").toString());
		iuserVo.setFin_mdfy_id(session.getAttribute("user").toString());
		
		// 고객사 담당직원 수정
		System.out.println("영업담당자 수정");
		int result = iuserService.ccMngUpdate(iuserVo);
		System.out.println("result : " + result);
		// return 1;
		return result;
	}
	
	// 고객사 담당직원 삭제 
	@RequestMapping(value = "/custMngDelete", method = {RequestMethod.GET, RequestMethod.POST})
	@ResponseBody int custMngDelete(HttpSession session, IuserVO iuserVo,
			@RequestParam(value="ccMngDelList[]", required=false) List<String> ccMngDelList) 
	{
		System.out.println("opptidList : " + ccMngDelList);
		
		iuserVo.setFst_reg_id(session.getAttribute("user").toString());
		iuserVo.setFin_mdfy_id(session.getAttribute("user").toString());
			// 영업활동 삭제
		int result = 0;
		System.out.println(ccMngDelList);
		// 모든 checked된 견적에 대해 삭제
		for (int i = 0; i < ccMngDelList.size(); i++){
			String cust_id = ccMngDelList.get(i).split(":")[0];
			String iuser_id = ccMngDelList.get(i).split(":")[1];
			iuserVo.setCust_id(cust_id);
			iuserVo.setIuser_id(iuser_id);
			result += iuserService.custMngDelete(iuserVo);
		}
		
		return result;
	}
	
	// 영업 담당자 상세정보에서의 직원 리스트_직원검색버튼 클릭 시 팝업 오픈(사용)
	@RequestMapping(value = "/custSaleActIuserList", method = RequestMethod.GET)
	public ModelAndView custCompIuserList(
											HttpSession session,
											@RequestParam(value = "keyfield", defaultValue = "ct_id") String keyfield,
											@RequestParam(value = "keyword", defaultValue = "") String keyword) {

		System.out.println("영업담당자 상세페이지 직원검색 버튼 클릭 컨트롤러");
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);
		List<Object> iuserList = iuserService.iuserList(map);
		System.out.println("iuserList : " + iuserList);
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/sale_iuser_list");

		mov.addObject("iuserList", iuserList);

		// javascript에서 상세정보에서의 고객 리스트인지 구분하기 위한 값 전달
		mov.addObject("iuserType", "normal");

		return mov;
	}
	
	// 영업담당자 수정
	@RequestMapping(value = "/custSaleActUpdate", method = RequestMethod.POST)
	@ResponseBody
	public int custSaleActUpdate(HttpSession session, PosVO pos) {
		
		pos.setFin_mdfy_id(session.getAttribute("user").toString());
		int result = ccService.custSaleActUpdate(pos);

		
		return result;
	}

	// 영업담당자 삭제
	@RequestMapping(value = "/custSaleActDelete",  method = {RequestMethod.GET, RequestMethod.POST})
	public @ResponseBody Map<String, Object> custSaleActDelete(HttpSession session, String cust_id, PosVO pos,
																@RequestBody  List<String> chked_val) {
		System.out.println( "영업담당자 삭제 : " +chked_val);
		
		String sales_actvy_id = "";
		String iuser_id = "";
		
		Map<String, Object> rstMap = new HashMap<String, Object>();
		for(int i=0; i<chked_val.size(); i++)
		{
			String del[] = chked_val.get(i).split(":");

			
			sales_actvy_id = del[0];
			iuser_id = del[1];
			System.out.println("sales_actvy_id : " +sales_actvy_id);
			System.out.println("iuser_id : " + iuser_id);
			pos.setSales_actvy_id(sales_actvy_id);
			pos.setIuser_id(iuser_id); 
			
			if (session.getAttribute("user") == null) {		//로그인 페이지 이동
				rstMap.put("mdfyResult", "standard/home/session_expire");
			} else {
				String deleteResult = ccService.custSaleActDelete(pos);
				rstMap.put("deleteResult", deleteResult);
			}
		}
		
		return rstMap;
		
	}
	
	//고객별 키맨//
	// 키맨 리스트
	@RequestMapping(value = "ccKeymanList", method = RequestMethod.POST)
	public @ResponseBody List<KeymanVO> keymanList(String cust_id) {
//		System.out.println("keyman list entering" + cust_id);
		List<KeymanVO> kmVOList = ccService.getKeymanList(cust_id);
//		System.out.println("키맨 리스트 " + kmVOList.toString());
		return kmVOList;
	}
	
	// 키맨 팝업
	@RequestMapping(value = "/keymanPopup", method = RequestMethod.GET)
	public ModelAndView keymanPopup(HttpSession session, String cust_id, int flag) {
//		System.out.println("cust_id?? " + cust_id);
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_kmn_pop");
		mov.addObject("cust_id", cust_id);
		mov.addObject("flag", flag);
		return mov;
	}
	
	// 키맨 상세정보 추가할 것
	@RequestMapping(value = "/keymanDetailPopup", method = RequestMethod.GET)
	public ModelAndView keymanDetailPopup(HttpSession session, String cust_id, int flag, String cont_id) {
 
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("cust_id", cust_id);
		map.put("cont_id", cont_id);
		
		KeymanVO kmVO = ccService.keymanDetail(map);
		
		kmVO.setCell_ph(kmVO.getCell_ph1() + "-" + kmVO.getCell_ph2() + "-" + kmVO.getCell_ph3());
		kmVO.setEmail(kmVO.getEmail1() + "@" + kmVO.getEmail2());
		
//		System.out.println("key man who ? " +  kmVO.toString());
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_kmn_pop");
		mov.addObject("kmVO", kmVO);
		mov.addObject("cont_id", kmVO.getCust_id());
		mov.addObject("flag", flag);
		return mov;
	}
	
	// 키맨 추가
	@RequestMapping(value = "/addKeymancustcomp", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> callAddKeyman(HttpSession session, KeymanVO kVO) {
		
//		System.out.println("키맨 입성"  + kVO.toString());
		
		Map<String, Object> ccKeyMap = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			ccKeyMap.put("ccKey", "standard/home/session_expire");
		} else {
		kVO.setFst_reg_id(session.getAttribute("user").toString());
		kVO.setFin_mdfy_id(session.getAttribute("user").toString());
	
		String ccKey = ccService.insertKeyman(kVO);
		System.out.println("ccKey? " + ccKey);
		ccKeyMap.put("ccKey", ccKey);
		}
		return ccKeyMap;
	}
	
	// 키맨 수정
	@RequestMapping(value = "/ccmdfyKeyman", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> mdfyKeyman(HttpSession session, KeymanVO kVO) {
//		System.out.println("mdfy keyman entering" + kVO.toString());
		Map<String, Object> rstMap = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) { // 로그인 페이지 이동
			rstMap.put("mdfyResult", "standard/home/session_expire");
		} else {
			kVO.setFin_mdfy_id(session.getAttribute("user").toString());
			String kmMdfyRst = ccService.mdfyKeyman(kVO);
			rstMap.put("mdfyResult", kmMdfyRst);
		}
		return rstMap;
	}
	
	// 키맨 삭제
	@RequestMapping(value = "ccdelKeyman", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> keymanDelete(HttpSession session, @RequestBody List<String> keyman_idList) {
//		System.out.println("삭제 리스트??  " + keyman_idList.toString());
		
		String cont_id = "";
		String cust_id = "";
		KeymanVO kmVO = new KeymanVO();
		Map<String, Object> rstMap = new HashMap<String, Object>();
		for(int i=0; i<keyman_idList.size(); i++)
		{
			String del[] = keyman_idList.get(i).split(":");

			
			cont_id = del[0];
			cust_id = del[1];
			System.out.println("cont_id ? " +cont_id);
			System.out.println("cust_id? " + cust_id);
			kmVO.setCont_id(cont_id);
			kmVO.setCust_id(cust_id); 
			
			if (session.getAttribute("user") == null) {		//로그인 페이지 이동
				rstMap.put("mdfyResult", "standard/home/session_expire");
			} else {
				String deleteResult = ccService.deleteKeyman(kmVO);
				rstMap.put("deleteResult", deleteResult);
			}
		}
	
		return rstMap;
	}
	
	// 연락처 리스트 팝업창
	@RequestMapping(value = "/contactListPop", method = RequestMethod.GET)
	public ModelAndView CustcompList(HttpSession session) {
		System.out.println("연락처 리스트 팝업 enter");
		List<Object> contactList = ccService.contactList();
		System.out.println("연락처 리스트 팝업창 " + contactList.toString());
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/contact_list_pop");
		
		mov.addObject("contactList", contactList);

		return mov;
	}

	// 연락처 리스트 팝업창
	@RequestMapping(value = "/contactListPop", method = RequestMethod.POST)
	public ModelAndView CustcompListSearch(HttpSession session,
			@RequestParam(value = "keyfield", defaultValue = "ct_id") String keyfield,
			@RequestParam(value = "keyword", defaultValue = "") String keyword) {
		
//		System.out.println("연락처 리스트 팝업 성공");
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);

		List<Object> contactList = ccService.contactList(map);
//		System.out.println("contactList  " + contactList.toString());
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/contact_list_pop");

		mov.addObject("custcompList", contactList);

		return mov;
	}

	
	//고객별 영업기회//
	// 영업기회 서비스
	@Resource
	OpptService service;
	
	
	//고객사별 영업기회 탭
	// 영업기회 리스트 ajax
	@RequestMapping(value = "/opptTabajax", method = RequestMethod.POST)
	@ResponseBody Map<String, Object> listajax(OpptVO opptVo,
				@RequestParam(value = "pageNum", defaultValue = "1") int pageNum) 
	{
		System.out.println("opptTabajax cust_id : " + opptVo.getCust_id());
			
		List<OpptVO> opptList = actService.opptList(opptVo.getCust_id());
		
		System.out.println("opptTabajax 고객사 opptList : " + opptList);
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("opptList", opptList);

		return result;
	}
		
	// 영업기회 추가 ajax
	@RequestMapping(value = "/opptInsert", method = RequestMethod.POST)
	@ResponseBody int opptAdd(HttpSession session, OpptVO add, @RequestParam(value="est_list[]",required=false) List<String> est_list, String total_sup_price) 
	{
		System.out.println("est_list : " + est_list);
		List<OpptVO> estList = new ArrayList<OpptVO>(0);
		
		add.setFst_reg_id(session.getAttribute("user").toString());
		add.setFin_mdfy_id(session.getAttribute("user").toString());
		System.out.println("opptAdd - total_sup_price : " + total_sup_price);
		
		add.setTotal_sup_price(total_sup_price);
			
		int result = opptService.opptAdd(add);	// 기회 insert
		System.out.println("기회 insert 완료 : " + add);
		System.out.println("add.getSales_oppt_id() : " + add.getSales_oppt_id());
		int result2 = opptService.addOpptStep(add);//영업기회단계리스트추가
		
		//estList.add(add);
		
		for(int i=0 ; i< est_list.size(); i++)
		{
			OpptVO vo = new OpptVO();
			
			vo.setSales_oppt_id("");
			vo.setProd_id(est_list.get(i));
			vo.setProd_nm(est_list.get(++i));
			vo.setEstim_qty(est_list.get(++i));	// 수량 개수
			vo.setSales_price(est_list.get(++i));			
			vo.setSup_price(est_list.get(++i));
			vo.setDiscount(est_list.get(++i));
			vo.setDiscount_unit_cd(est_list.get(++i));
			vo.setOppt_seq(add.getOppt_seq());
			
			estList.add(vo);
			
		}
		
		int result1 = opptService.opptPrdtAdd(estList);
		
		System.out.println("영업기회 상품 추가 result : " + result1);
		
		System.out.println("영업기회 추가 result : " + result);
		System.out.println("영업기회 단계 이력 추가 result : " + result2);
		
		return result;
	}	
		
	//기회-상품추가 팝업 open controller
	@RequestMapping(value = "/prodList", method = RequestMethod.GET)
	public ModelAndView opptProdList(HttpSession session,
			@RequestParam(value = "keyfield", defaultValue = "pt_id") String keyfield,
			@RequestParam(value = "keyword", defaultValue = "") String keyword) 
	{
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/product_list_pop");
		Map<String, Object> map = new HashMap<String, Object>();
		
		System.out.println("actController");
		
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);
		
		List<ProdVO> prodList = opptService.prodList(map);
		mov.addObject("prodList", prodList);

		return mov;
	}
	
	//opptInsert
	// 영업기회 탭에서 insert POPUP
	@RequestMapping(value = "/opptInsertPopup", method = RequestMethod.GET)
	public ModelAndView opptInsertPop(HttpSession session, String list_cust_id, String list_cust_nm, String list_sales_oppt_id) 
	{
		// 영업기회 상태 코드 가져오기
		List<OpptVO> osclist = opptService.opptOscList();
		// 영업단계 코드 가져오기
		List<OpptVO> otllist = opptService.opptOtlList();
		List<EstVO> elclist = estInter.elcList();
		List<EstVO> eduList = estInter.eduList();
		List<String> eduCode = new ArrayList<String>(0);
		
		for(EstVO est: eduList)
		{
			eduCode.add(est.getCode());
			eduCode.add(est.getCd_nm());
		}
		
		System.out.println("actDetail - eduCode : " + eduCode.toString());
		
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/opptInsertPopup");
			
		mov.addObject("popFlg", "add");
		mov.addObject("osclist", osclist);
		mov.addObject("otllist", otllist);
		mov.addObject("eduList", eduList);
		mov.addObject("eduCode", eduCode);
		mov.addObject("elclist", elclist);
			
		return mov;
	}
		
	// opptDetailPop
	// 영업기회 탭에서 opptDetailPop
	@RequestMapping(value = "/opptDetailPop", method = RequestMethod.GET)
	public ModelAndView opptDetailPop(HttpSession session, String sales_oppt_id) 
	{
		// 영업기회 상태 코드 가져오기
		List<OpptVO> osclist = opptService.opptOscList();
		// 영업단계 코드 가져오기
		List<OpptVO> otllist = opptService.opptOtlList();
		// opptDetail -> sales_oppt_id
		OpptVO opDetail = opptService.opptDetail(sales_oppt_id);
			
		List<EstVO> elclist = estInter.elcList();
		List<EstVO> eduList = estInter.eduList();
		List<String> eduCode = new ArrayList<String>(0);
		
		for(EstVO est: eduList)
		{
			eduCode.add(est.getCode());
			eduCode.add(est.getCd_nm());
		}
		
		List<OpptVO> prodlist = opptService.opptPrdtDetail(sales_oppt_id);
		
		System.out.println("opptDetailPop - elclist : " + elclist);
		System.out.println("opptDetailPop - eduList : " + eduList);
		System.out.println("opptDetailPop - eduCode : " + eduCode);
		System.out.println("opptDetailPop - opDetail : " + opDetail);
		System.out.println("opptDetailPop - prod : " + prodlist);
		
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/opptInsertPopup");

		mov.addObject("popFlg", "popDetail");
		mov.addObject("prodlist", prodlist);
		mov.addObject("osclist", osclist);
		mov.addObject("otllist", otllist);
		mov.addObject("eduList", eduList);
		mov.addObject("eduCode", eduCode);
		mov.addObject("elclist", elclist);
		mov.addObject("opDetail", opDetail);
		
		return mov;
	}	
	
	// 영업기회 수정
	@RequestMapping(value = "/opptTabModfy", method = RequestMethod.POST)
	@ResponseBody int opptModfy(HttpSession session, OpptVO opptVo, @RequestParam(value="est_list[]",required=false) List<String> est_list, String total_sup_price) 
	{
		opptVo.setFst_reg_id(session.getAttribute("user").toString());
		opptVo.setFin_mdfy_id(session.getAttribute("user").toString());

		//OpptVO detail
		List<OpptVO> estList = new ArrayList<OpptVO>(0);

		opptVo.setTotal_sup_price(total_sup_price);
		
		int result = actService.opptTabModify(opptVo);
		System.out.println(result);
		int result2 = opptService.addOpptStep(opptVo);//영업기회단계리스트추가
		
		for(int i=0 ; i< est_list.size(); i++)
		{
			OpptVO vo = new OpptVO();
			
			vo.setSales_oppt_id(opptVo.getSales_oppt_id());
			vo.setProd_id(est_list.get(i));
			vo.setProd_nm(est_list.get(++i));
			vo.setEstim_qty(est_list.get(++i));	// 수량 개수
			vo.setSales_price(est_list.get(++i));			
			vo.setSup_price(est_list.get(++i));
			vo.setDiscount(est_list.get(++i));
			vo.setDiscount_unit_cd(est_list.get(++i));
			
			estList.add(vo);
			
		}
		
		int result1 = actService.opptTabPrdtModfy(estList);
		System.out.println(result1);
		System.out.println("영업기회 단계 이력 추가 result : " + result2);
		
		return result;
	}
		
	// 영업기회 삭제 / 영업기회별 상품 삭제
	@RequestMapping(value = "/opptTabDelete", method = {RequestMethod.GET, RequestMethod.POST})
	@ResponseBody int opptDelete(HttpSession session, OpptVO opptVo,
			@RequestParam(value="opptidList[]", required=false) List<String> opptidList) 
	{
		System.out.println("opptidList : " + opptidList);
		
		opptVo.setFst_reg_id(session.getAttribute("user").toString());
		opptVo.setFin_mdfy_id(session.getAttribute("user").toString());

		// 영업활동 삭제
		int result = 0;
			
		// 모든 checked된 견적에 대해 삭제
		for (int i = 0; i < opptidList.size(); i++) 
		{
			result += actService.opptProdDelete(opptidList.get(i));
		}
		
		return result;
	}	
	
	//고객사별 영영활동 탭
	// 영업활동 리스트
	@RequestMapping(value = "/ccActList", method = RequestMethod.POST)
	public @ResponseBody List<ActVO> actList(String cust_id) {
		List<ActVO> actVOList = ccService.getActList(cust_id);
		System.out.println("actVOList : " + actVOList.toString());
		return actVOList;
	}
	
	// 영업활동 추가 팝업창
	@RequestMapping(value = "/custActivePopup", method = RequestMethod.GET)
	public ModelAndView custActivePopup(HttpSession session, 
											String list_cust_id, String list_cust_nm, String list_sales_oppt_id) {
		
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_act_pop");
		
		// 영업활동 유형코드 가져오기
		List<ActVO> actTypeCd = ccService.actTypeCdList();
		// 영업활동 상태코드 가져오기
		List<ActVO> actStatCd = ccService.actStatCdList();
		// 영업활동 구분코드 가져오기
		List<ActVO> actDivCd = ccService.actDivCdList();

		mov.addObject("actTypeCd", actTypeCd);
		mov.addObject("actStatCd", actStatCd);
		mov.addObject("actDivCd", actDivCd);

		System.out.println("영어활동 추가 탭 list_cust_id : " +list_cust_id );
		System.out.println("list_cust_nm : " +list_cust_nm );
		System.out.println("list_sales_oppt_id : " + list_sales_oppt_id);
		// 영업활동 추가 시에 들어갈 sales_oppt_id값 전달

		mov.addObject("cust_id", list_cust_id);
		mov.addObject("cust_nm", list_cust_nm);
		mov.addObject("sales_oppt_id", list_sales_oppt_id);
		mov.addObject("flg", "add");

		return mov;

	}
	
	// 영업활동 추가
	@RequestMapping(value = "/custActiveAdd", method = RequestMethod.POST)
	@ResponseBody
	public int custActiveAdd(HttpSession session, ActVO act) {
		act.setFst_reg_id(session.getAttribute("user").toString());
		act.setFin_mdfy_id(session.getAttribute("user").toString());
		
		// 영업활동 추가
		int result = ccService.custActiveAdd(act);
		// return 1;
		return result;

	}
	
	// 영업활동 상세정보 팝업창
	@RequestMapping(value = "/custActiveDetailPopup", method = RequestMethod.GET)
	public ModelAndView opptActiveDetailPopup(HttpSession session, String sales_actvy_id, String sales_oppt_nm) {

		System.out.println("영업활동 상세정보 팝업 sales_actvy_id : " + sales_actvy_id);
		System.out.println("영업활동 상세정보 팝업 sales_oppt_nm : " + sales_oppt_nm);
		
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_act_pop");
		// 영업활동 유형코드 가져오기
		List<ActVO> actTypeCd = service.actTypeCdList();
		// 영업활동 상태코드 가져오기
		List<ActVO> actStatCd = service.actStatCdList();
		// 영업활동 구분코드 가져오기
		List<ActVO> actDivCd = service.actDivCdList();
		ActVO detail = ccService.actDetail(sales_actvy_id);
		System.out.println("영업활동 상세 페이지 detail : " + detail);
	
		
		mov.addObject("detail", detail);
		mov.addObject("actTypeCd", actTypeCd);
		mov.addObject("actStatCd", actStatCd);
		mov.addObject("actDivCd", actDivCd);
		mov.addObject("cust_nm", detail.getCust_nm());
		mov.addObject("sales_actvy_id", sales_actvy_id);
		mov.addObject("sales_oppt_nm", sales_oppt_nm);
		mov.addObject("flg", "detail");
		return mov;
	}
	
	// 영업활동 상세정보 입력
	@ResponseBody
	@RequestMapping(value = "/custActiveDetail", method = RequestMethod.GET)
	public Map<String, Object> custtActiveDetail(HttpSession session, String sales_actvy_id) {
		
		Map<String, Object> map = new HashMap<String, Object>(0);

		ActVO detail = ccService.actDetail(sales_actvy_id);

		map.put("detail", detail);
		map.put("cust_id", detail.getCust_id());
		map.put("cust_nm", detail.getCust_nm());
		map.put("sales_oppt_id", detail.getSales_oppt_id());
		map.put("flg", "detail");

		return map;
	}
	
	// 영업활동 수정
	@RequestMapping(value = "/custActiveUpdate", method = RequestMethod.POST)
	@ResponseBody
	public int custActiveUpdate(HttpSession session, ActVO act) {
		
		act.setFin_mdfy_id(session.getAttribute("user").toString());
		int result = ccService.custActiveUpdate(act);

		return result;
	}

	// 영업활동 삭제
	@RequestMapping(value = "/custActiveDelete",  method = {RequestMethod.GET, RequestMethod.POST})
	@ResponseBody
	public int custActiveDelete(HttpSession session, String cust_id,
									@RequestBody List<String> chked_val) {
		System.out.println("Dddd");
		System.out.println( "dkdkdkdkdkdk" +chked_val);
		int result = 0;
		// 모든 checked된 영업기회에 대해 삭제
		for (int i = 0; i < chked_val.size(); i++) {
			result += ccService.custtActiveDelete(chked_val.get(i));
		}
		return result;
	}
		
	//고객별 견적//
	// 견적 리스트
	@RequestMapping(value = "/ccEstimList", method = RequestMethod.POST)
	public @ResponseBody List<EstVO> EstimListList(String cust_id) {
		
		List<EstVO> estVOList = ccService.getEstimList(cust_id);
		System.out.println("estVOList : " + estVOList.toString());
		
		return estVOList;
	}
	
	// 견적 팝업
	@RequestMapping(value = "/estPopup", method = RequestMethod.GET)
	public ModelAndView estimatePopup(HttpSession session, String cust_id,
			String cust_nm, int flag) {
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_est_pop");

		List<EstVO> elcList = ccService.elcList();
		List<EstVO> eduList = ccService.eduList();
		List<String> eduCode = new ArrayList<String>();
		for (EstVO est : eduList) {
			eduCode.add(est.getCode());
			eduCode.add(est.getCd_nm());
		}
		mov.addObject("elcList", elcList);
		mov.addObject("cust_id", cust_id);
		mov.addObject("cust_nm", cust_nm);
		mov.addObject("flg", "add");
		mov.addObject("flag", flag);
		mov.addObject("eduList", eduList);
		mov.addObject("eduCode", eduCode);

		return mov;
	}
	
	// 견적 상세정보 팝업
	@RequestMapping(value = "/custEstimDetail", method = RequestMethod.GET)
	public ModelAndView custEstimDetail(HttpSession session,
			String list_cust_id, String list_cust_nm,
			String list_sales_oppt_nm, String list_sales_oppt_id, String estim_id, String flag) {
		
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_est_pop");
		
		List<EstVO> elcList = ccService.elcList();
		List<EstVO> eduList = ccService.eduList();
		List<String> eduCode = new ArrayList<String>();
		for (EstVO est : eduList) {
			eduCode.add(est.getCode());
			eduCode.add(est.getCd_nm());
		}

		System.out.println("controller : " + estim_id);
		List<EstVO> prod = ccService.custEstimDetail(estim_id);
		EstVO detail = prod.get(prod.size() - 1);
		System.out.println("222222. controller  : " +detail);
		System.out.println("1.++++++detail.getEstim_id(): " + detail.getEstim_id());
		prod.remove(prod.size() - 1);
		mov.addObject("elcList", elcList);
		mov.addObject("estim_id", detail.getEstim_id());
		mov.addObject("cust_id", detail.getCust_id());
		mov.addObject("cust_nm", detail.getCust_nm());
		mov.addObject("sales_oppt_id", detail.getSales_oppt_id());
		mov.addObject("sales_oppt_nm", detail.getSales_oppt_nm());
		mov.addObject("detail", detail);
		mov.addObject("prod", prod);
		mov.addObject("estim_lev_cd", detail.getEstim_lev_cd());
		mov.addObject("estim_nm", detail.getEstim_nm());
		mov.addObject("estim_valid_d", detail.getEstim_valid_d());
		mov.addObject("eduList", eduList);
		mov.addObject("eduCode", eduCode);
		mov.addObject("memo", detail.getMemo());
		mov.addObject("discount_unit_cd", detail.getDiscount_unit_cd());
		mov.addObject("flg", "detail");
		mov.addObject("flag", flag);
		
		return mov;
	}
	
	//견적추가 팝업
	@RequestMapping(value = "/custEstimatepopup", method = RequestMethod.GET)
	public ModelAndView estimatePopup(HttpSession session, 
										String list_cust_id,
										String list_cust_nm, String list_sales_oppt_nm,
										String list_sales_oppt_id,String pageNum,String flag) {
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_est_pop");
		
		List<EstVO> elcList = ccService.elcList();
		List<EstVO> eduList = ccService.eduList();
		List<String> eduCode = new ArrayList<String>();
		for (EstVO est : eduList) {
			eduCode.add(est.getCode());
			eduCode.add(est.getCd_nm());
		}
		mov.addObject("elcList", elcList);
		mov.addObject("cust_id", list_cust_id);
		mov.addObject("cust_nm", list_cust_nm);
		mov.addObject("sales_oppt_nm", list_sales_oppt_nm);
		mov.addObject("sales_oppt_id", list_sales_oppt_id);
		mov.addObject("flg", "add");
		mov.addObject("flag", flag);
		mov.addObject("eduList", eduList);
		mov.addObject("eduCode", eduCode);
		mov.addObject("pageNum",pageNum);
		return mov;
	}

	//견적_상품추가 팝업 
	@RequestMapping(value = "/custProdList", method = RequestMethod.GET)
	public ModelAndView prodList( HttpSession session,
								  @RequestParam(value = "keyfield", defaultValue = "pt_id") String keyfield,
								  @RequestParam(value = "keyword", defaultValue = "") String keyword) {
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/product_list_pop");

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);
		List<ProdVO> prodList = ccService.prodList(map);
		mov.addObject("prodList", prodList);

		return mov;
	}
		
	//고객사별 견적 추가
	@RequestMapping(value = "/custEstimAdd", method = RequestMethod.GET)
	@ResponseBody
	public int custEstimAdd( HttpSession session,
							 @RequestParam(value = "est_list[]", required = false) List<String> est_list,
							 EstVO est) {

		List<EstVO> estList = new ArrayList<EstVO>(0);
		estList.add(est);
		for (int i = 0; i < est_list.size(); i++) {
			EstVO vo = new EstVO();
			vo.setProd_id(est_list.get(i));
			vo.setProd_nm(est_list.get(++i));
			vo.setEstim_qty(est_list.get(++i));
			vo.setSales_price(est_list.get(++i));
			vo.setDiscount(est_list.get(++i));
			vo.setSup_price(est_list.get(++i));
			vo.setDiscount_unit_cd(est_list.get(++i));
			estList.add(vo);
		}
		int result = ccService.custEstimAdd(estList);
		return result;
	}
	
	//견적추가에서 영업기회 리스트
	@RequestMapping(value="/custEstActOpptList" , method=RequestMethod.GET)
	public ModelAndView custEstActOpptList(HttpSession session,
			@RequestParam(value="keyfield", defaultValue="ct_id") String keyfield,
			@RequestParam(value="keyword", defaultValue="") String keyword,
			String cust_id){
		System.out.println("cust_id : "+cust_id);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("cust_id", cust_id);
		map.put("keyword", keyword);
		List<Object> estActOpptList = ccService.custEestActOpptList(map);
		System.out.println("estActOpptList : " + estActOpptList);
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/act_oppt_list_pop");
		
		mov.addObject("estActOpptList", estActOpptList);
		
		return mov;
	}
	
	//견적 수정
	@RequestMapping(value = "/custEstimUpdate", method = RequestMethod.GET)
	@ResponseBody
	public int custEstimUpdate(
			HttpSession session,
			@RequestParam(value = "est_list[]", required = false) List<String> est_list,
			@RequestParam(value = "prodAddId[]", required = false) List<String> prodAddId,
			@RequestParam(value = "prodDeleteProdId[]", required = false) List<String> prodDeleteProdId,
			@RequestParam(value = "prodDeleteEstimId[]", required = false) List<String> prodDeleteEstimId,			
			EstVO est) {
		List<EstVO> estList = new ArrayList<EstVO>(0);
		estList.add(est);
		for (int i = 0; i < est_list.size(); i++) {
			EstVO vo = new EstVO();
			vo.setProd_id(est_list.get(i));
			vo.setProd_nm(est_list.get(++i));
			vo.setEstim_qty(est_list.get(++i));
			vo.setSales_price(est_list.get(++i));
			vo.setDiscount(est_list.get(++i));
			vo.setSup_price(est_list.get(++i));
			vo.setDiscount_unit_cd(est_list.get(++i));
			estList.add(vo);

		}
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("estList", estList);
		map.put("prodAddId", prodAddId);
		map.put("prodDeleteProdId", prodDeleteProdId);
		map.put("prodDeleteEstimId", prodDeleteEstimId);
		int result = ccService.custEstimUpdate(map);
		return result;

	}
	
	// 견적 삭제
	@RequestMapping(value = "/custEstimDelete", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> ccEstDelete(HttpSession session, @RequestBody List<String> est_idList) {
		
		Map<String, Object> rstMap = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			rstMap.put("deleteResult", "standard/home/session_expire");
		} else {
			String deleteResult = ccService.deleteEst(est_idList);
			rstMap.put("deleteResult", deleteResult);
		}
		return rstMap;
	}
	
	
	//계약
	@Resource
	contrService contrService;
	
	// 계약 리스트
	@RequestMapping(value = "/ccContList", method = RequestMethod.POST)
	public @ResponseBody List<contrVO> contList(String cust_id) {
		
		List<contrVO> contVOList = ccService.getContList(cust_id);
		System.out.println("contVOList : " + contVOList.toString());
		
		return contVOList;
	}
	
	// 계약 팝업
	@RequestMapping(value = "/contPopup", method = RequestMethod.GET)
	public ModelAndView contractPopup(String cust_id, int flag) {
		contrVO contVO = ccService.getContCust(cust_id);
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_cont_pop");
		mov.addObject("cust_id", cust_id);
		mov.addObject("contVO", contVO);
		mov.addObject("flag", flag);
		return mov;
	}
	
	// 계약 상세정보 팝업
	@RequestMapping(value = "/contDetailPopup", method = RequestMethod.GET)
	public ModelAndView contractDetailPopup(String contr_id, int flag) {
		contrVO contVO = contrService.getcContrInfo(contr_id);
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_cont_pop");
		mov.addObject("flag", flag);
		mov.addObject("cust_id", contVO.getCust_id());
		mov.addObject("contVO", contVO);
		return mov;
	}
	@RequestMapping(value="/custEstProdList", method=RequestMethod.GET)
	public ModelAndView estProdList(HttpSession session,
			@RequestParam(value="keyfield", defaultValue="pt_id") String keyfield,
			@RequestParam(value="keyword", defaultValue="") String keyword){
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/product_list_pop");
		
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);
		List<ProdVO> prodList = estInter.prodList(map);
	
		
		mov.addObject("prodList", prodList);
	
		return mov;
	}
	
}
