package com.crm.cp.sales.oppt.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.est.service.EstService;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.service.OpptService;
import com.crm.cp.sales.oppt.vo.OpptChartVO;
import com.crm.cp.sales.oppt.vo.OpptPrdtVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.sales.oppt.vo.pipeLineVO;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;
import com.crm.cp.standard.prod.vo.ProdVO;
import com.crm.cp.utils.PagerVO;

@Controller
public class OpptController {

	@Resource
	OpptService service;
	
	@Resource
	EstService estInter;

	@Resource
	MenuService menuService;

	// 영업기회 리스트
	@RequestMapping(value = "/oppt", method = RequestMethod.GET)
	ModelAndView list(HttpSession session,
			@RequestParam Map<String, String> map,
			@RequestParam(value = "pageNum", defaultValue = "1") int pageNum) {
		if (session.getAttribute("user") == null) {
			return new ModelAndView("redirect:/");
		}
		ModelAndView mov = new ModelAndView("oppt");

		// 영업기회 상태 코드 가져오기
		List<OpptVO> osclist = service.opptOscList();

		// 영업단계 코드 가져오기
		List<OpptVO> otllist = service.opptOtlList();
		
		// 메뉴리스트 가져오기
		List<MenuVO> menuList = menuService.selectAll(session);
		// 영업기회 상태 정보 가져오기(차트)
//		List<OpptChartVO> C_oppt_status = service.C_oppt_status();
//		System.out.println("C_oppt_status : " + C_oppt_status);
		
		map.put("ssales_oppt_nm", map.get("ssales_oppt_nm"));
		map.put("scust_nm", map.get("scust_nm"));

		map.put("pageNum", pageNum + "");
		PagerVO page = service.opptPageCount(map);
		map.put("startRow", page.getStartRow() + "");
		map.put("endRow", page.getEndRow() + "");

		List<OpptVO> list = service.opptList(map);

		mov.addObject("oplist", list);
		mov.addObject("osclist", osclist);
		mov.addObject("otllist", otllist);
//		mov.addObject("C_oppt_status", C_oppt_status);
		mov.addObject("page", page);
		mov.addObject("menuList", menuList);
		mov.addObject("searchInfo", map);
		return mov;
	}
	
	// 영업기회상태 차트 리스트
	@RequestMapping(value="/opptChartStatus", method={RequestMethod.GET,RequestMethod.POST})
	   public @ResponseBody Map<String, Object> opptChartStatus( ModelMap model, HttpServletRequest request) {
	      
	      List<OpptChartVO> C_oppt_status = service.C_oppt_status();
			System.out.println("C_oppt_status 차트 : " + C_oppt_status);
		
			model.addAttribute("C_oppt_status", C_oppt_status);
	
	      return model;
	   }
	
	// 영업기회 상세정보페이지
	@RequestMapping(value = "/opptDetail", method = RequestMethod.GET)
	ModelAndView listDetail(HttpSession session
			, @RequestParam Map<String, String> map
			, String opptId) 
	{
		System.out.println("opptId : " + opptId);
		
		if (session.getAttribute("user") == null) {
			return new ModelAndView("redirect:/");
		}
		
		
		int addFlag = 0;
		
		if(opptId == null){
			addFlag = 0;
			ModelAndView mov = new ModelAndView("openAdd");
			
			// 영업기회 상태 코드 가져오기
			List<OpptVO> osclist = service.opptOscList();
			
			// 영업단계 코드 가져오기
			List<OpptVO> otllist = service.opptOtlList();
			List<MenuVO> menuList = menuService.selectAll(session);
//			List<EstVO> eduList = service.eduList();
//			List<String> eduCode = new ArrayList<String>();
			List<EstVO> elclist = estInter.elcList();
			List<EstVO> eduList = estInter.eduList();
			List<String> eduCode = new ArrayList<String>(0);
			for(EstVO est: eduList){
				eduCode.add(est.getCode());
				eduCode.add(est.getCd_nm());
			}

			map.put("ssales_oppt_nm", map.get("ssales_oppt_nm"));
			map.put("scust_nm", map.get("scust_nm"));
			map.put("scust_nm", map.get("scust_nm"));
			
			//상세정보 출력
			
			mov.addObject("eduList", eduList);
			mov.addObject("eduCode", eduCode);
			mov.addObject("elclist", elclist);
			mov.addObject("osclist", osclist);
			mov.addObject("otllist", otllist);
			mov.addObject("menuList", menuList);
			mov.addObject("addFlag", addFlag);
			mov.addObject("flg", "add");
			System.out.println("Add Flag  " + addFlag);
			// 검색어, 페이지번호 전달
			mov.addObject("searchInfo", map);
			return mov;
			
		}else {
			ModelAndView mov = new ModelAndView("opptDetail");
			addFlag = 1;
			
			map.put("opptId", opptId);
			OpptVO detail = service.opptDetail(opptId);
			System.out.println("detail : " + detail);
			mov.addObject("opDetail", detail);
			List<ActVO> actList = service.actList(map);
			System.out.println("actList : " + actList);
			mov.addObject("actList", actList);
			
			// 영업기회 상태 코드 가져오기
			List<OpptVO> osclist = service.opptOscList();
			
			// 영업단계 코드 가져오기
			List<OpptVO> otllist = service.opptOtlList();
			List<MenuVO> menuList = menuService.selectAll(session);
			
//			List<EstVO> eduList = service.eduList();
//			List<String> eduCode = new ArrayList<String>();
			List<EstVO> elclist = estInter.elcList();
			List<EstVO> eduList = estInter.eduList();
			List<String> eduCode = new ArrayList<String>(0);
			for(EstVO est: eduList){
				eduCode.add(est.getCode());
				eduCode.add(est.getCd_nm());
			}
			
			map.put("ssales_oppt_nm", map.get("ssales_oppt_nm"));
			map.put("scust_nm", map.get("scust_nm"));
			
			//상세정보 출력
			mov.addObject("flg", "detail");
			mov.addObject("osclist", osclist);
			mov.addObject("eduList", eduList);
			mov.addObject("elclist", elclist);
			mov.addObject("eduCode", eduCode);
			mov.addObject("detail", detail);
			mov.addObject("otllist", otllist);
			mov.addObject("menuList", menuList);
			mov.addObject("actList", actList);
			mov.addObject("addFlag", addFlag);
			System.out.println("Add Flag  " + addFlag);
			// 검색어, 페이지번호 전달
			mov.addObject("searchInfo", map);
			return mov;
		}
	}
	//영업기회상품추가 팝업 open controller
		@RequestMapping(value = "/opptPrdtOpen", method = RequestMethod.GET)
		public ModelAndView opptPrdtOpen(
				HttpSession session,
				@RequestParam(value = "keyfield", defaultValue = "pt_id") String keyfield,
				@RequestParam(value = "keyword", defaultValue = "") String keyword) {
			ModelAndView mov = new ModelAndView(
					"/sales/oppt/opptPop/opptProduct_list_pop");
			
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("keyfield", keyfield);
			map.put("keyword", keyword);
			List<ProdVO> prodList = service.prodList(map);
			mov.addObject("prodList", prodList);
			
			return mov;
		}
	// 영업기회 리스트 ajax
	@RequestMapping(value = "/opptajax", method = RequestMethod.POST)
	@ResponseBody
	Map<String, Object> listajax(@RequestParam Map<String, String> map,
			@RequestParam(value = "pageNum", defaultValue = "1") int pageNum) {

		// 영업기회 상태 코드 가져오기
		List<OpptVO> osclist = service.opptOscList();

		// 영업단계 코드 가져오기
		List<OpptVO> otllist = service.opptOtlList();

		// 한글 검색 인코더 변환
		map.put("ssales_oppt_nm", map.get("ssales_oppt_nm"));
		map.put("scust_nm", map.get("scust_nm"));
		map.put("pageNum", pageNum + "");
		PagerVO page = service.opptPageCount(map);
		map.put("startRow", page.getStartRow() + "");
		map.put("endRow", page.getEndRow() + "");

		List<OpptVO> list = service.opptList(map);
//		List<OpptChartVO> C_oppt_status = service.C_oppt_status();
//		System.out.println("C_oppt_status Ajax: " + C_oppt_status);

		Map<String, Object> result = new HashMap<String, Object>();
		result.put("oplist", list);
		result.put("osclist", osclist);
		result.put("otllist", otllist);
//		result.put("C_oppt_status", C_oppt_status);
		result.put("page", page);
		result.put("searchInfo", map);

		return result;
	}


//	// 영업기회 상세정보 ajax
//	@RequestMapping(value = "/opptDetail", method = RequestMethod.POST)
//	@ResponseBody
//	OpptVO detail(String opptId) {
//		OpptVO detail = service.opptDetail(opptId);
//		return detail;
//	}

	// 영업활동 tab list ajax
	@RequestMapping(value = "/opptSalesActiveList", method = RequestMethod.GET)
	@ResponseBody
	Map<String, Object> actList(
			@RequestParam Map<String, String> map,
			@RequestParam(value = "actPageNum", defaultValue = "1") String actPageNum) {

		map.put("actPageNum", actPageNum);
		PagerVO page = service.actCount(map);
		map.put("startRow", page.getStartRow() + "");
		map.put("endRow", page.getEndRow() + "");
		List<ActVO> actList = service.actList(map);
		Map<String, Object> map2 = new HashMap<String, Object>();

		map2.put("page2", page);
		map2.put("actPageNum", actPageNum);
		map2.put("actList", actList);

		return map2;
	}

	// 영업기회 수정 ajax
	@RequestMapping(value = "/opptModify", method = RequestMethod.POST)
	@ResponseBody ModelAndView opptModify(HttpSession session, OpptVO detail, int pageNum) {
		System.out.println("Detail Edit Controller");
		detail.setFin_mdfy_id(session.getAttribute("user").toString());
		System.out.println("detail : " + detail);
		int result = service.opptModify(detail);
		System.out.println("Detail Edit Result : " + result);
		ModelAndView mov = new ModelAndView("oppt");
		OpptVO opptVO = service.opptDetail(detail.getSales_oppt_id());
		int result2 = service.addOpptStep(detail);//영업기회단계리스트추가
		System.out.println("result2 : " + result2);
		Map<String, Object> opptMap = new HashMap<String, Object>();
		opptMap.put("opptVO", opptVO);
		opptMap.put("pageNum", pageNum);
		mov.addObject("opptVO", opptVO);
		mov.addObject("pageNum", pageNum);
		return mov;
	}

	// 영업기회 추가 ajax
	@RequestMapping(value = "/opptAdd", method = RequestMethod.POST)
	@ResponseBody
	int opptAdd(HttpSession session, OpptVO add) {
		add.setFst_reg_id(session.getAttribute("user").toString());
		add.setFin_mdfy_id(session.getAttribute("user").toString());
		int result = service.opptAdd(add);
		
		int result2 = service.addOpptStep(add);//영업기회단계리스트추가
		System.out.println("영업기회 추가 result : " + result);
		System.out.println("영업기회 단계 이력 추가 result : " + result2);
		
		return result;
	}
	// 영업기회상품 추가 ajax
	@RequestMapping(value = "/opptPrdtAdd", method = RequestMethod.POST)
	@ResponseBody
	int opptPrdtAdd(HttpSession session, OpptVO add) {
		add.setFst_reg_id(session.getAttribute("user").toString());
		add.setFin_mdfy_id(session.getAttribute("user").toString());
		System.out.println(add);
		int result = service.opptPrdtAdd(add);//영업기회별 상품 리스트 추가
		System.out.println("영업기회상품추가 result : " + result);
		
		return result;
	}

	// 상세정보에서의 고객 리스트
	@RequestMapping(value = "/opptCustcompList", method = RequestMethod.GET)
	public ModelAndView opptCustcompList(
			HttpSession session,
			@RequestParam(value = "keyfield", defaultValue = "ct_id") String keyfield,
			@RequestParam(value = "keyword", defaultValue = "") String keyword) {

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);
		List<Object> custcompList = service.opptCustComp(map);
		ModelAndView mov = new ModelAndView(
				"/sales/oppt/opptPop/custcomp_list_pop");

		mov.addObject("custcompList", custcompList);

		// javascript에서 상세정보에서의 고객 리스트인지 구분하기 위한 값 전달
		mov.addObject("custType", "normal");

		return mov;
	}

	// 검색창에서의 고객 리스트
	@RequestMapping(value = "/opptSearchCustcompList", method = RequestMethod.GET)
	public ModelAndView opptSearchCustcompList(
			HttpSession session,
			@RequestParam(value = "keyfield", defaultValue = "ct_id") String keyfield,
			@RequestParam(value = "keyword", defaultValue = "") String keyword) {
		System.out.println("검색 창에서의 고객 검색 버튼 클릭");

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);
		List<Object> custcompList = service.opptSearchCustComp(map);
		ModelAndView mov = new ModelAndView(
				"/sales/oppt/opptPop/custcomp_list_pop");
		mov.addObject("custcompList", custcompList);

		// javascript에서 검색창에서의 고객 리스트인지 구분하기 위한 값 전달
		mov.addObject("custType", "search");

		return mov;
	}

	@RequestMapping(value = "/estimCustomList", method = RequestMethod.GET)
	public ModelAndView estimCustomList(
			HttpSession session,
			@RequestParam(value = "keyfield", defaultValue = "ct_id") String keyfield,
			@RequestParam(value = "keyword", defaultValue = "") String keyword) {

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);
		List<Object> custcompList = service.estimCustomList(map);
		ModelAndView mov = new ModelAndView(
				"/sales/oppt/opptPop/custcomp_list_pop");
		mov.addObject("custcompList", custcompList);

		// javascript에서 검색창에서의 고객 리스트인지 구분하기 위한 값 전달
		mov.addObject("custType", "estim");

		return mov;
	}

	// 영업활동 추가 팝업창
	@RequestMapping(value = "/opptActivePopup", method = RequestMethod.GET)
	public ModelAndView opptActivePopup(HttpSession session,
			String list_cust_id, String list_cust_nm, String list_sales_oppt_id) {
		ModelAndView mov = new ModelAndView(
				"/sales/oppt/opptPop/opptActivePopup");
		// 영업활동 유형코드 가져오기
		List<ActVO> actTypeCd = service.actTypeCdList();
		// 영업활동 상태코드 가져오기
		List<ActVO> actStatCd = service.actStatCdList();
		// 영업활동 구분코드 가져오기
		List<ActVO> actDivCd = service.actDivCdList();

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
	@RequestMapping(value = "/opptActiveAdd", method = RequestMethod.POST)
	@ResponseBody
	public int opptActiveAdd(HttpSession session, ActVO act) {
		act.setFst_reg_id(session.getAttribute("user").toString());
		act.setFin_mdfy_id(session.getAttribute("user").toString());
		// 영업활동 추가
		int result = service.opptActiveAdd(act);
		// return 1;
		return result;

	}

	// 영업활동 삭제
	@RequestMapping(value = "/opptActiveDelete", method = RequestMethod.GET)
	@ResponseBody
	public int opptActiveDelete(
			HttpSession session,
			@RequestParam(value = "sales_actvy_id[]") List<String> sales_actvy_id) {

		int result = 0;
		// 모든 checked된 영업기회에 대해 삭제
		for (int i = 0; i < sales_actvy_id.size(); i++) {
			result += service.opptActiveDelete(sales_actvy_id.get(i));
		}
		return result;
	}
	//////////////////////////////영업기회별 견적////////////////////////////////////////
	//영업기회 견적탭 리스트 출력 
	@RequestMapping(value = "/estimList", method = RequestMethod.GET)
	@ResponseBody
	public List<EstVO> estimList(String sales_oppt_id) {
		List<EstVO> estimList = service.estimList(sales_oppt_id);
		System.out.println("estimList : " + estimList);
		return estimList;
	}

	//견적추가 팝업 open Controller
	@RequestMapping(value = "/opptEstimatepopup", method = RequestMethod.GET)
	public ModelAndView estimatePopup(HttpSession session, String list_cust_id,
			String list_cust_nm, String list_sales_oppt_nm,
			String list_sales_oppt_id,String pageNum,String flag) {
		ModelAndView mov = new ModelAndView("/sales/oppt/opptPop/custcomp_est_pop");
		
		List<EstVO> elcList = service.elcList();
		List<EstVO> eduList = service.eduList();
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

	//견적-상품추가 팝업 open controller
	@RequestMapping(value = "/opptProdList", method = RequestMethod.GET)
	public ModelAndView prodList(
			HttpSession session,
			@RequestParam(value = "keyfield", defaultValue = "pt_id") String keyfield,
			@RequestParam(value = "keyword", defaultValue = "") String keyword) {
		ModelAndView mov = new ModelAndView(
				"/sales/oppt/opptPop/product_list_pop");

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);
		List<ProdVO> prodList = service.prodList(map);
		mov.addObject("prodList", prodList);

		return mov;
	}
	//영업기회별 견적 추가 
	@RequestMapping(value = "/opptEstimAdd", method = RequestMethod.GET)
	@ResponseBody
	public int opptEstimAdd(
			HttpSession session,
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
		int result = service.opptEstimAdd(estList);
		return result;
	}

	// 영업기회별 견적 삭제
	@RequestMapping(value = "/opptEstimDelete", method = RequestMethod.GET)
	public @ResponseBody int opptEstimDelete(HttpSession session,
			@RequestParam(value = "estim_id[]") List<String> estim_id) {
		int result = 0;
		// 모든 checked된 견적에 대해 삭제
		for (int i = 0; i < estim_id.size(); i++) {
			result += service.opptEstimDelete(estim_id.get(i));
		}
		return result;
	}
	//////////////////////////////////////////////////////////////////////


	@RequestMapping(value = "/opptDelete", method = RequestMethod.GET)
	@ResponseBody
	public int opptDelete(HttpSession session,
			@RequestParam(value = "opptidList[]") List<String> opptidList,
			@RequestParam(value = "pageNum", defaultValue = "1") String pageNum) {
		int result = 0;
		// 모든 checked된 견적에 대해 삭제
		for (int i = 0; i < opptidList.size(); i++) {
			result += service.opptDelete(opptidList.get(i));
		}
		return result;
	}

	// 영업활동 상세정보 팝업창
	@RequestMapping(value = "/opptActiveDetailPopup", method = RequestMethod.GET)
	public ModelAndView opptActiveDetailPopup(HttpSession session,
			String actvyId
			, String sales_oppt_nm) {

		System.out.println("영업활동 상세정보 팝업 actvyId" + actvyId);
		System.out.println("영업활동 상세정보 팝업 sales_oppt_nm" + sales_oppt_nm);
		ModelAndView mov = new ModelAndView("/sales/oppt/opptPop/opptActivePopup");
		// 영업활동 유형코드 가져오기
		List<ActVO> actTypeCd = service.actTypeCdList();
		// 영업활동 상태코드 가져오기
		List<ActVO> actStatCd = service.actStatCdList();
		// 영업활동 구분코드 가져오기
		List<ActVO> actDivCd = service.actDivCdList();
		ActVO detail = service.actDetail(actvyId);
		System.out.println("detail : " + detail);
	
		mov.addObject("actTypeCd", actTypeCd);
		mov.addObject("actStatCd", actStatCd);
		mov.addObject("actDivCd", actDivCd);
		mov.addObject("cust_nm", detail.getCust_nm());
		mov.addObject("sales_actvy_id", actvyId);
		mov.addObject("sales_oppt_nm", sales_oppt_nm);
		return mov;
	}

	// 영업활동 상세정보
	@ResponseBody
	@RequestMapping(value = "/opptActiveDetail", method = RequestMethod.GET)
	public Map<String, Object> opptActiveDetail(HttpSession session,
			String actvyId) {
		Map<String, Object> map = new HashMap<String, Object>(0);

		ActVO detail = service.actDetail(actvyId);

		map.put("detail", detail);
		map.put("cust_id", detail.getCust_id());
		map.put("cust_nm", detail.getCust_nm());
		map.put("sales_oppt_id", detail.getSales_oppt_id());
		map.put("flg", "detail");

		return map;
	}

	// 영업활동 변경
	@RequestMapping(value = "/opptActiveUpdate", method = RequestMethod.POST)
	@ResponseBody
	public int opptActiveUpdate(HttpSession session, ActVO act) {
		act.setFin_mdfy_id(session.getAttribute("user").toString());
		int result = service.opptActiveUpdate(act);

		return result;

	}

	//영업기회별 상품 상세
	@RequestMapping(value = "/opptPrdtDetail", method = RequestMethod.GET)
	public ModelAndView opptPrdtDetail(HttpSession session,
			String list_cust_id, String list_cust_nm,
			String list_sales_oppt_nm, String list_sales_oppt_id, String prdtId,String flag) {
		ModelAndView mov = new ModelAndView("/sales/oppt/opptPop/custcomp_opptPrdt_pop");
		
		List<EstVO> elcList = service.elcList();
		List<EstVO> eduList = service.eduList();
		// 영업단계 코드 가져오기
		List<OpptVO> otllist = service.opptOtlList();
		List<String> eduCode = new ArrayList<String>();
		for (EstVO est : eduList) {
			eduCode.add(est.getCode());
			eduCode.add(est.getCd_nm());
		}
		
		List<OpptPrdtVO> prod = service.opptPrdtDetail(prdtId);
		OpptPrdtVO detail = prod.get(prod.size() - 1);
		prod.remove(prod.size() - 1);
		mov.addObject("elcList", elcList);
		mov.addObject("prod_id", detail.getProd_id());
		mov.addObject("cust_id", list_cust_id);
		mov.addObject("cust_nm", list_cust_nm);
		mov.addObject("otllist", otllist);
		mov.addObject("sales_oppt_nm", list_sales_oppt_nm);
		mov.addObject("sales_oppt_id", list_sales_oppt_id);
		mov.addObject("detail", detail);
		mov.addObject("prod", prod);
		mov.addObject("sales_lev_cd", detail.getSales_lev_cd());
		mov.addObject("prod_nm", detail.getProd_nm());
//		mov.addObject("estim_valid_d", detail.getEstim_valid_d());
		mov.addObject("eduList", eduList);
		mov.addObject("eduCode", eduCode);
//		mov.addObject("memo", detail.getMemo());
		mov.addObject("discount_unit_cd", detail.getDiscount_unit_cd());
		mov.addObject("flg", "detail");
		mov.addObject("flag", flag);
		return mov;
	}
	//영업기회별 견적 상세
	@RequestMapping(value = "/opptEstimDetail", method = RequestMethod.GET)
	public ModelAndView opptEstimDetail(HttpSession session,
			String list_cust_id, String list_cust_nm,
			String list_sales_oppt_nm, String list_sales_oppt_id, String estimId,String flag) {
		ModelAndView mov = new ModelAndView("/sales/oppt/opptPop/custcomp_est_pop");

		List<EstVO> elcList = service.elcList();
		List<EstVO> eduList = service.eduList();
		List<String> eduCode = new ArrayList<String>();
		for (EstVO est : eduList) {
			eduCode.add(est.getCode());
			eduCode.add(est.getCd_nm());
		}

		List<EstVO> prod = service.opptEstimDetail(estimId);
		EstVO detail = prod.get(prod.size() - 1);
		System.out.println("detail.getDiscount_unit_cd() : " + detail.getDiscount_unit_cd());
		prod.remove(prod.size() - 1);
		mov.addObject("elcList", elcList);
		mov.addObject("estim_id", detail.getEstim_id());
		mov.addObject("cust_id", list_cust_id);
		mov.addObject("cust_nm", list_cust_nm);
		mov.addObject("sales_oppt_nm", list_sales_oppt_nm);
		mov.addObject("sales_oppt_id", list_sales_oppt_id);
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

	//영업기회별 견적 수정
	@RequestMapping(value = "/opptEstimUpdate", method = RequestMethod.GET)
	@ResponseBody
	public int opptEstimUpdate(
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
		int result = service.opptEstimUpdate(map);
		return result;

	}
	
	/*영업기회별 상품 업데이트*/
	@RequestMapping(value = "/opptPrdtUpdate", method = RequestMethod.GET)
	@ResponseBody
	public int opptPrdtUpdate(
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
		int result = service.opptEstimUpdate(map);
		return result;
		
	}
	
	@RequestMapping(value="/pipeLinePop" , method=RequestMethod.GET)
	public ModelAndView estimResultpop(HttpSession session){
			
			String userId = session.getAttribute("user").toString();
			String empcd = service.findEmpCd(userId);
			System.out.println(empcd);
			Map<String,String> map = new HashMap<String,String>(0);
			map.put("empcd", empcd);
			map.put("userId", userId);
			List<pipeLineVO> pipeLineList = service.pipeLineList(map);
			ModelAndView mov = new ModelAndView("/sales/oppt/opptPop/pipeLine_list_pop");
		
			mov.addObject("pipeLineList", pipeLineList);
	
		return mov;
	}
}
