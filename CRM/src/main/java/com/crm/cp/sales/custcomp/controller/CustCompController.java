package com.crm.cp.sales.custcomp.controller;

import java.io.IOException;
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
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.service.OpptService;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;
import com.crm.cp.standard.prod.vo.ProdVO;
import com.crm.cp.utils.PagerVO;

@Controller
public class CustCompController {

	@Resource
	CustCompService ccService;
	
	@Autowired
	MenuService menuService;

	// 기존고객 리스트(MaV)
	@RequestMapping(value = "/custcomp", method = RequestMethod.GET)
	public ModelAndView custCompList(HttpSession session, @RequestParam(value = "ccPageNum", defaultValue = "1") int ccPageNum) {
		ModelAndView mov = null;
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			mov = new ModelAndView("standard/home/session_expire");
		} else {
			
			mov = new ModelAndView("custcomp");

			Map<String, Object> pMap = new HashMap<String, Object>();
			
			pMap.put("ccPageNum", ccPageNum);
			
			// 기업고객 리스트 전체 개수 조회(페이징에 사용)
			PagerVO page = ccService.getCCListCount(pMap);
			
			pMap.put("page", page);
			
			pMap.put("startRow", page.getStartPageNum() + "");
			pMap.put("endRow", page.getEndPageNum() + "");
			
			List<CustCompVO> ccVOList = ccService.getCCList(pMap); // 기업고객 리스트
			List<CustCompVO> SSCCodeList = ccService.selectSSC(); // 매출규모 코드 가져오기
			List<CustCompVO> IDCCodeList = ccService.selectIDC(); // 산업군 코드 가져오기
			List<CustCompVO> CCSCodeList = ccService.selectCCS(); // 기업 상태 코드 가져오기
			List<CustCompVO> CDCCodeList = ccService.selectCDC(); // 고객사 구분 코드 가져오기
			
			System.out.println("ccVOList : " + ccVOList);
			System.out.println("page :  "+ page);
			List<MenuVO> menuList = menuService.selectAll(session);
			mov.addObject("ccPageNum", ccPageNum);
			mov.addObject("menuList", menuList);
			mov.addObject("ccVOList", ccVOList);
			mov.addObject("SSCCodeList", SSCCodeList);
			mov.addObject("IDCCodeList", IDCCodeList);
			mov.addObject("CCSCodeList", CCSCodeList);
			mov.addObject("CDCCodeList", CDCCodeList);
			mov.addObject("page", page);
			
		}
		return mov;
	}

	// 기존고객 리스트(ajax)
	@RequestMapping(value = "custCompAjax", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> custCompPList(HttpSession session,
			@RequestParam(value = "pageNum", defaultValue = "1") int ccPageNum,
			String sch_cust_nm, String sch_comp_num, String sch_corp_num, String sch_iuser_nm) {
		System.out.println("111" + ccPageNum);
 		Map<String, Object> pMap = new HashMap<String, Object>();
		
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			pMap.put("result", "standard/home/session_expire");
		} else {
			pMap.put("result", "Y");
			pMap.put("sch_cust_nm", sch_cust_nm);
			pMap.put("sch_comp_num", sch_comp_num);
			pMap.put("sch_corp_num", sch_corp_num);
			pMap.put("sch_iuser_nm", sch_iuser_nm);
			pMap.put("ccPageNum", ccPageNum);
			
			// 기업고객 리스트 전체 개수 조회(페이징에 사용)
			PagerVO page = ccService.getCCListCount(pMap);
			pMap.put("startRow", page.getStartPageNum() + "");
			pMap.put("endRow", page.getEndPageNum() + "");
			pMap.put("page", page);
			System.out.println("page :  "+ page);
			
			List<CustCompVO> ccVOList = ccService.getCCList(pMap); // 기업고객 리스트
			System.out.println("dddd " + ccVOList.toString());
			pMap.put("ccVOList", ccVOList);
			pMap.put("ccVOListSize", ccVOList.size());
		}
		return pMap;
	}

	// 기업고객 상세정보
//	@RequestMapping(value = "custCompDetail.do", method = {RequestMethod.GET, RequestMethod.POST})
//	public @ResponseBody CustCompVO companyCutomerDetail(String cust_id) {
//		CustCompVO ccVO = ccService.getCCDetail(cust_id);
//
//		return ccVO;
//	}
	
	//기존고객 상세정보
	@RequestMapping(value="/custcompDetail", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView cutomerDetail(HttpSession session
						, @RequestParam Map<String, String> map
						, String cust_id) {
		
		System.out.println("cust_id : " + cust_id);
		
		if (session.getAttribute("user") == null) {
			return new ModelAndView("redirect:/");
		}
		
		int flg;
		
		if(cust_id == null) {
			flg = 0;
			
			ModelAndView mov = new ModelAndView("custcompDetail");

			List<CustCompVO> SSCCodeList = ccService.selectSSC(); // 매출규모 코드 가져오기
			List<CustCompVO> IDCCodeList = ccService.selectIDC(); // 산업군 코드 가져오기
			List<CustCompVO> CCSCodeList = ccService.selectCCS(); // 기업 상태 코드 가져오기
			List<CustCompVO> CDCCodeList = ccService.selectCDC(); // 고객사구분 코드 가져오기
			
			System.out.println("flg : " + flg);
			
			mov.addObject("SSCCodeList", SSCCodeList);
			mov.addObject("IDCCodeList", IDCCodeList);
			mov.addObject("CCSCodeList", CCSCodeList);
			mov.addObject("CDCCodeList", CDCCodeList);
			mov.addObject("flg", flg);
			// 검색어, 페이지번호 전달
			mov.addObject("searchInfo", map);
			
			return mov;
		} else {
			ModelAndView mov = new ModelAndView("custcompDetail");
			flg = 1;
			
			map.put("cust_id", cust_id);
			CustCompVO ccVO = ccService.custcompDetail(cust_id);

			mov.addObject("custcompDetail", ccVO);
			
			List<CustCompVO> SSCCodeList = ccService.selectSSC(); // 매출규모 코드 가져오기
			List<CustCompVO> IDCCodeList = ccService.selectIDC(); // 산업군 코드 가져오기
			List<CustCompVO> CCSCodeList = ccService.selectCCS(); // 기업 상태 코드 가져오기
			List<CustCompVO> CDCCodeList = ccService.selectCDC(); // 고객사구분 코드 가져오기
			
			System.out.println("flg : " + flg);
			System.out.println(ccVO.toString());
			
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
	
	
//	// 기업고객 추가
//	@RequestMapping(value = "custCompInsert.do", method = RequestMethod.POST)
//	public @ResponseBody Map<String, String> companyCutomerInput(HttpSession session, CustCompVO ccVO) {
//		Map<String, String> rstMap = new HashMap<String, String>();
//		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
//			rstMap.put("inputResult", "standard/home/session_expire");
//		} else {
//			ccVO.setFst_reg_id_nm(session.getAttribute("user").toString());
//			ccVO.setFin_mdfy_id_nm(session.getAttribute("user").toString());
//			String inputResult = ccService.insertCustComp(ccVO);
//			rstMap.put("inputResult", inputResult);
//		}
//		return rstMap;
//	}
	
	//기존고객 추가
	@RequestMapping(value = "/custcompAdd",  method = RequestMethod.POST)
	public String custcompAdd(@ModelAttribute CustCompVO ccVO, HttpSession session, HttpServletRequest request) {
		
		ccVO.setFst_reg_id(session.getAttribute("user").toString());
		
//		ccVO.setFin_mdfy_id(session.getAttribute("user").toString());
		//int result = ccService.custcompAdd(ccVO);
		//System.out.println("result : " + result);
		
		System.out.println(ccVO.toString());
		ccService.custcompInsert(ccVO);
		
		return "redirect:/custcomp";
	}
	
	// 기업고객 수정
//	@RequestMapping(value = "custCompUpdate.do", method = RequestMethod.POST)
//	public @ResponseBody Map<String, Object> companyCutomerUpdate(HttpSession session, CustCompVO ccVO, String ccPageNum) {
//		Map<String, Object> rstMap = new HashMap<String, Object>();
//		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
//			rstMap.put("updateResult", "standard/home/session_expire");
//		} else {
//			ccVO.setFin_mdfy_id_nm(session.getAttribute("user").toString());
//			String updateResult = ccService.updateCustComp(ccVO);
//			ccVO = ccService.getCCDetail(ccVO.getCust_id());
//			rstMap.put("updateResult", updateResult);
//			rstMap.put("ccVO", ccVO);
//			rstMap.put("ccPageNum", ccPageNum);
//		}
//		return rstMap;
//	}
	
	//기존고객 수정 ajax
	@RequestMapping(value = "/custcompModify", method = RequestMethod.POST)
	public String  custcompModify(@ModelAttribute CustCompVO ccVO, HttpSession session) {
		System.out.println("Detail Edit Controller");
//		int result = ccService.custcompModify(ccVO);
//		System.out.println("Detail Edit Result : " + result);
//		ModelAndView mov = new ModelAndView("custcomp");
//		CustCompVO cVO = ccService.custcompDetail(ccVO.getCust_id());
//		Map<String, Object> ccMap = new HashMap<String, Object>();
//		ccMap.put("cVO", cVO);
//		ccMap.put("pageNum", pageNum);
//		mov.addObject("cVO", cVO);
//		mov.addObject("pageNum", pageNum);
		
		ccVO.setFin_mdfy_id(session.getAttribute("user").toString());
		
		System.out.println(ccVO);
		ccService.custcompEdit(ccVO);
		
        return "redirect:/custcomp";
	}
	
	// 기존고객 삭제
	@RequestMapping(value = "/custcompDelete", method = RequestMethod.POST)
	public String custcompDelete(String[] custcomp_del) throws IOException {
		
		for (String cust_id : custcomp_del) {
			ccService.custcompDelete(cust_id);
		}
		return "redirect:/custcomp";
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
	
	//고객별 고객사 담당자 
	//고객사 당담자 리스트
	@RequestMapping(value = "/ccPocList", method = RequestMethod.POST)
	public @ResponseBody List<PocVO> pocList(String cust_id) {
		
		List<PocVO> pocVOList = ccService.getPocList(cust_id);
		System.out.println("pocVOList : " + pocVOList.toString());
		
		return pocVOList;
	}
	
	
	//고객별 영업 담당자 
	//영업 담당자 리스트
	@RequestMapping(value = "/ccPosList", method = RequestMethod.POST)
	public @ResponseBody List<PosVO> posList(String cust_id) {

		List<PosVO> posVOList = ccService.getPosList(cust_id);
		System.out.println("posVOList : " + posVOList.toString());
		
		return posVOList;
	}
	
	
	//고객별 키맨
	// 키맨 리스트
	@RequestMapping(value = "/ccKeymanList", method = RequestMethod.POST)
	public @ResponseBody List<KeymanVO> keymanList(String cust_id) {
		
		List<KeymanVO> kmVOList = ccService.getKeymanList(cust_id);
		System.out.println("kmVOList : " + kmVOList.toString());
		
		return kmVOList;
	}
	
	// 키맨 팝업
	@RequestMapping(value = "/keymanPopup", method = RequestMethod.GET)
	public ModelAndView keymanPopup(HttpSession session, String cust_id, int flag) {
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_kmn_pop");
		mov.addObject("cust_id", cust_id);
		mov.addObject("flag", flag);
		return mov;
	}
	
	// 키맨 추가
//	@RequestMapping(value = "/addKeyman.do", method = RequestMethod.POST)
//	public @ResponseBody Map<String, Object> addKeyman(HttpSession session, KeymanVO kVO) {
//		Map<String, Object> rstMap = new HashMap<String, Object>();
//		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
//			rstMap.put("addResult", "standard/home/session_expire");
//		} else {
//			kVO.setFst_reg_id_nm(session.getAttribute("user").toString());
//			kVO.setFin_mdfy_id_nm(session.getAttribute("user").toString());
//			String kmAddRst = ccService.insertKeyman(kVO);
//			rstMap.put("addResult", kmAddRst);
//		}
//		return rstMap;
//	}
	
	// 키맨 상세정보
	@RequestMapping(value = "/keymanDetailPopup", method = RequestMethod.GET)
	public ModelAndView keymanDetailPopup(HttpSession session, String cust_id, int flag) {
		KeymanVO kmVO = ccService.keymanDetail(cust_id);
		
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_kmn_pop");
		mov.addObject("kmVO", kmVO);
		mov.addObject("cust_id", kmVO.getCust_id());
		mov.addObject("flag", flag);
		return mov;
	}
	
	// 키맨 수정
//	@RequestMapping(value = "/mdfyKeyman.do", method = RequestMethod.POST)
//	public @ResponseBody Map<String, Object> mdfyKeyman(HttpSession session, KeymanVO kVO) {
//		Map<String, Object> rstMap = new HashMap<String, Object>();
//		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
//			rstMap.put("mdfyResult", "standard/home/session_expire");
//		} else {
//			kVO.setFin_mdfy_id_nm(session.getAttribute("user").toString());
//			String kmMdfyRst = ccService.mdfyKeyman(kVO);
//			rstMap.put("mdfyResult", kmMdfyRst);
//		}
//		return rstMap;
//	}
	
	// 키맨 삭제
	@RequestMapping(value = "delKeyman.do", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> keymanDelete(HttpSession session, @RequestBody List<String> keyman_idList) {
		Map<String, Object> rstMap = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			rstMap.put("mdfyResult", "standard/home/session_expire");
		} else {
			String deleteResult = ccService.deleteKeyman(keyman_idList);
			rstMap.put("deleteResult", deleteResult);
		}
		return rstMap;
	}
	
	
	//고객별 영업기회
	// 영업기회 서비스
	@Resource
	OpptService service;
	
	// 영업기회 리스트
	@RequestMapping(value = "/ccOpptList",  method = RequestMethod.POST)
	public @ResponseBody List<OpptVO> opptList(String cust_id) {
		
		List<OpptVO> opptVOList = ccService.getOpptList(cust_id);
		System.out.println("opptVOList : " + opptVOList.toString());
		
		return opptVOList;
	}
	
	// 영업기회 팝업
	@RequestMapping(value = "/opptPopup", method = RequestMethod.GET)
	public ModelAndView saleschancePopup(HttpSession session, String cust_id, int flag) {
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_oppt_pop");
		OpptVO opptVO = ccService.ccOpptCustDetail(cust_id);
		//영업기회 상태 코드 가져오기
		List<OpptVO> osclist = service.opptOscList();
				
		//영업단계 코드 가져오기
		List<OpptVO> otllist = service.opptOtlList();
		mov.addObject("cust_id", cust_id);
		mov.addObject("opptVO", opptVO);
		mov.addObject("osclist", osclist);
		mov.addObject("otllist", otllist);
		mov.addObject("flag", flag);
		return mov;
	}
	
	// 영업기회 상세정보
	@RequestMapping(value = "/opptDetailPopup", method = RequestMethod.GET)
	public ModelAndView saleschanceDetailPopup(HttpSession session, String sales_oppt_id, int flag) {
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_oppt_pop");
		OpptVO opptVO = ccService.ccOpptDetail(sales_oppt_id);
		opptVO.setSales_lev_cd(opptVO.getSales_lev_cd().substring(3, 4));
		opptVO.setSales_oppt_stat_cd(opptVO.getSales_oppt_stat_cd().substring(3, 4));
		//영업기회 상태 코드 가져오기
		List<OpptVO> osclist = service.opptOscList();
				
		//영업단계 코드 가져오기
		List<OpptVO> otllist = service.opptOtlList();
		mov.addObject("cust_id", opptVO.getCust_id());
		mov.addObject("opptVO", opptVO);
		mov.addObject("osclist", osclist);
		mov.addObject("otllist", otllist);
		mov.addObject("flag", flag);
		return mov;
	}
	
	// 영업기회 삭제
	@RequestMapping(value = "ccOpptDelete.do", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> ccOpptDelete(HttpSession session, @RequestBody List<String> oppt_idList) {
		Map<String, Object> rstMap = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			rstMap.put("deleteResult", "standard/home/session_expire");
		} else {
			String deleteResult = ccService.deleteOppt(oppt_idList);
			rstMap.put("deleteResult", deleteResult);
		}
		return rstMap;
	}

	// 영업기회리스트 팝업창
	@RequestMapping(value = "/ccOpptPopList", method = RequestMethod.GET)
	public ModelAndView ccOpptPopList(HttpSession session, String cust_id) {
		List<OpptVO> ccOpptPopList = ccService.ccOpptPopList(cust_id);
		
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_oppt_list_pop");
		mov.addObject("ccOpptPopList", ccOpptPopList);
		return mov;
	}
	
	// 영업기회 삭제
	@RequestMapping(value = "ccActDelete.do", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> ccActDelete(HttpSession session, @RequestBody List<String> act_idList) {
		Map<String, Object> rstMap = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			rstMap.put("deleteResult", "standard/home/session_expire");
		} else {
			String deleteResult = ccService.deleteAct(act_idList);
			rstMap.put("deleteResult", deleteResult);
		}
		return rstMap;
	}
		
	
	//고객별 영업 활동
	@Autowired
	ActService actService;
	
	// 영업활동 리스트
	@RequestMapping(value = "/ccActList", method = RequestMethod.POST)
	public @ResponseBody List<ActVO> actList(String cust_id) {
		List<ActVO> actVOList = ccService.getActList(cust_id);
		System.out.println("actVOList : " + actVOList.toString());
		return actVOList;
	}
		
//	// 영업활동 팝업
//	@RequestMapping(value = "/actPopup", method = RequestMethod.GET)
//	public ModelAndView ccActPopup(HttpSession session, String cust_id, int flag) {
//		ActVO ccActVO = ccService.ccActCustDetail(cust_id);
//		List<ActVO> actTypeCd = actService.actTypeCdList();
//		List<ActVO> actStatCd = actService.actStatCdList();
////		List<ActVO> actDivCd = ccService.actDivCdList();
//		
//		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_act_pop");
//		mov.addObject("cust_id", cust_id);
//		mov.addObject("flag", flag);
//		mov.addObject("ccActVO", ccActVO);
//		mov.addObject("actTypeCd", actTypeCd);
//		mov.addObject("actStatCd", actStatCd);
//		
//		return mov;
//
//	}
	
	// 영업활동 상세정보 팝업
//	@RequestMapping(value = "/actDetailPopup", method = RequestMethod.GET)
//	public ModelAndView ccActDeatailPopup(HttpSession session, String sales_actvy_id, int flag) {
//		
//		ActVO ccActVO = actService.actDetail(sales_actvy_id);
//		
//		String strt_t_h = "";
//		String strt_t_m = "";
//		if(ccActVO.getStrt_t() != null){
//			strt_t_h = ccActVO.getStrt_t().substring(0, 2);
//			strt_t_m = ccActVO.getStrt_t().substring(3, 5);
//		}
//		String end_t_h = "";
//		String end_t_m = "";
//		if(ccActVO.getEnd_t() != null){
//			end_t_h = ccActVO.getEnd_t().substring(0, 2);
//			end_t_m = ccActVO.getEnd_t().substring(3, 5);
//		}
//		
//		List<ActVO> actTypeCd = actService.actTypeCdList();
//		List<ActVO> actStatCd = actService.actStatCdList();
//		
//		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_act_pop");
//		mov.addObject("flag", flag);
//		mov.addObject("ccActVO", ccActVO);
//		mov.addObject("actTypeCd", actTypeCd);
//		mov.addObject("actStatCd", actStatCd);
//		mov.addObject("strt_t_h", strt_t_h);
//		mov.addObject("strt_t_m", strt_t_m);
//		mov.addObject("end_t_h", end_t_h);
//		mov.addObject("end_t_m", end_t_m);
//		
//		return mov;
//		
//	}
//	
	
//	@RequestMapping(value="/custActAddForm", method = RequestMethod.GET)
//	public ModelAndView custActmWrite(HttpSession session){
//		String id = session.getAttribute("user").toString();
//		ModelAndView mov = new ModelAndView();
//		List<EstVO> elclist = ccService.elcList();
//		List<EstVO> eduList = ccService.eduList();
//		List<String> eduCode = new ArrayList<String>(0);
//		for(EstVO est: eduList){
//			eduCode.add(est.getCode());
//			eduCode.add(est.getCd_nm());
//		}
//		mov.setViewName("custActAdd");
//		mov.addObject("elclist", elclist);
//		mov.addObject("eduCode", eduCode);
//		return mov;
//	}
	
	//고객사별 영업활동 추가 팝업
//	@RequestMapping(value = "/custActAdd", method={RequestMethod.GET,RequestMethod.POST})
////	@ResponseBody
//	public ModelAndView custActAdd( HttpSession session,
//							@RequestParam(value="act_list",required=false) List<String> act_list,
//							@ModelAttribute ActVO act){
//		
//		String id = session.getAttribute("user").toString();
//		act.setFin_mdfy_id(id);
//		act.setFst_reg_id(id);
//		System.out.println("act : "+act.toString());
//		System.out.println("size : " + act_list);
//		System.out.println("size : " + act_list.size());
//		
//		List<ActVO> actList = new ArrayList<ActVO>(0);
//		actList.add(act);
//		//System.out.println("act_list : " + act_list.get(0));
//		for(int i=0 ; i< act_list.size(); i++){
//			ActVO vo = new ActVO();
//			vo.setSales_actvy_nm(act_list.get(i));
//			vo.setSales_actvy_div_cd(act_list.get(++i));
//			vo.setSales_actvy_type_cd(act_list.get(++i));
//			vo.setSales_oppt_id(act_list.get(++i));
//			vo.setCust_id(act_list.get(++i));
//			vo.setSales_actvy_stat_cd(act_list.get(++i));
//			vo.setStrt_d(act_list.get(++i));
//			vo.setStrt_t_h(act_list.get(++i));
//			vo.setStrt_t_m(act_list.get(++i));
//			vo.setEnd_d(act_list.get(++i));
//			vo.setEnd_t_h(act_list.get(++i));
//			vo.setEnd_t_m(act_list.get(++i));
//			
//			vo.setMemo(act_list.get(++i));
//			actList.add(vo);
//		}
//		ModelAndView mov = new ModelAndView();
//		System.out.println(actList);
//		
//		int result = ccService.custActAdd(actList);
//		if(result > 1){
//			mov.setViewName("redirect:/ccActList");
//		}
//		return mov;	
//		
////		 @RequestParam(value = "act_list[]", required = false) List<String> act_list, ActVO act) {
////		
////		System.out.println("act_list :"+ act_list);
////		List<ActVO> actList = new ArrayList<ActVO>(0);
////		actList.add(act);
////		
////		
////		int result = ccService.custActAdd(actList);
////		return result;
//	}
	
	// 영업활동 추가 팝업창
	@RequestMapping(value = "/custActivePopup", method = RequestMethod.GET)
	public ModelAndView custActivePopup(HttpSession session, String list_cust_id, String list_cust_nm, String list_sales_oppt_id) {
		
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

		System.out.println("list_cust_nm : " +list_cust_nm );
		System.out.println("list_cust_nm : " +list_cust_nm );
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
	
	// 영업활동 수정
	@RequestMapping(value = "/custActiveUpdate", method = RequestMethod.POST)
	@ResponseBody
	public int custActiveUpdate(HttpSession session, ActVO act) {
		
		act.setFin_mdfy_id(session.getAttribute("user").toString());
		int result = ccService.custActiveUpdate(act);

		return result;
	}

	// 영업활동 삭제
	@RequestMapping(value = "/custActiveDelete", method = RequestMethod.GET)
	@ResponseBody
	public int custActiveDelete(HttpSession session, String cust_id,
									@RequestParam(value = "sales_actvy_id[]") List<String> sales_actvy_id) {

		int result = 0;
		// 모든 checked된 영업기회에 대해 삭제
		for (int i = 0; i < sales_actvy_id.size(); i++) {
			result += service.opptActiveDelete(sales_actvy_id.get(i));
		}
		return result;
	}
		
	
	// 영업활동 상세정보 팝업창
	@RequestMapping(value = "/custActiveDetailPopup", method = RequestMethod.GET)
	public ModelAndView custActiveDetailPopup(HttpSession session, String sales_actvy_id , String sales_oppt_nm) {

		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/custcomp_act_pop");
		// 영업활동 유형코드 가져오기
		List<ActVO> actTypeCd = service.actTypeCdList();
		// 영업활동 상태코드 가져오기
		List<ActVO> actStatCd = service.actStatCdList();
		// 영업활동 구분코드 가져오기
		List<ActVO> actDivCd = service.actDivCdList();
		ActVO detail = ccService.actDetail(sales_actvy_id);
		System.out.println("detail : " + detail);
	
		
		mov.addObject("detail", detail);
		mov.addObject("actTypeCd", actTypeCd);
		mov.addObject("actStatCd", actStatCd);
		mov.addObject("actDivCd", actDivCd);
		mov.addObject("cust_nm", detail.getCust_nm());
		mov.addObject("sales_actvy_id", sales_actvy_id);
		mov.addObject("sales_oppt_nm", sales_oppt_nm);
		return mov;
	}
		
	// 영업활동 상세정보
	@ResponseBody
	@RequestMapping(value = "/custActiveDetail", method = RequestMethod.GET)
	public Map<String, Object> custActiveDetail(HttpSession session, String sales_actvy_id) {
		Map<String, Object> map = new HashMap<String, Object>(0);

		ActVO detail = ccService.actDetail(sales_actvy_id);

		map.put("detail", detail);
		map.put("cust_id", detail.getCust_id());
		map.put("cust_nm", detail.getCust_nm());
		map.put("sales_oppt_id", detail.getSales_oppt_id());
		map.put("flg", "detail");

		return map;
	}
		
	
	//고객별 견적
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
		ModelAndView mov = new ModelAndView("/sales/cust/custcompPop/product_list_pop");

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
		ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/act_oppt_list_pop");
		
		mov.addObject("actOpptList", estActOpptList);
		
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
//	@RequestMapping(value = "/custEstimDelete", method = RequestMethod.GET)
//	public @ResponseBody int custEstimDelete(HttpSession session,
//		   @RequestParam(value = "estim_id[]") List<String> estim_id) {
//		int result = 0;
//		// 모든 checked된 견적에 대해 삭제
//		for (int i = 0; i < estim_id.size(); i++) {
//			result += ccService.custEstimDelete(estim_id.get(i));
//		}
//		return result;
//	}
	
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

}
