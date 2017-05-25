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
import com.crm.cp.sales.oppt.vo.OpptVO;
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
		
		map.put("ssales_oppt_nm", map.get("ssales_oppt_nm"));
		map.put("ssales_oppt_nm0", map.get("ssales_oppt_nm0"));
		map.put("ssales_oppt_nm1", map.get("ssales_oppt_nm1"));
		map.put("scust_nm", map.get("scust_nm"));
		map.put("scust_nm0", map.get("scust_nm0"));
		map.put("scust_nm1", map.get("scust_nm1"));
		map.put("ssales_lev_cd", map.get("ssales_lev_cd"));
		map.put("ssales_lev_cd0", map.get("ssales_lev_cd0"));
		map.put("ssales_lev_cd1", map.get("ssales_lev_cd1"));
		map.put("psblty_rate", map.get("psblty_rate"));
		map.put("psblty_rate0", map.get("psblty_rate0"));
		map.put("psblty_rate1", map.get("psblty_rate1"));

		map.put("pageNum", pageNum + "");
		PagerVO page = service.opptPageCount(map);
		map.put("startRow", page.getStartRow() + "");
		map.put("endRow", page.getEndRow() + "");

		//영업기회 리스트 가져오기
		List<OpptVO> list = service.opptList(map);

		System.out.println("page : " + page);
		mov.addObject("oplist", list);
		mov.addObject("osclist", osclist);
		mov.addObject("otllist", otllist);
		mov.addObject("page", page);
		mov.addObject("menuList", menuList);
		mov.addObject("searchInfo", map);
		return mov;
	}
	// 영업기회 리스트
	@RequestMapping(value = "/DelList", method = RequestMethod.GET)
	ModelAndView Dellist(HttpSession session,
			@RequestParam Map<String, String> map,
			@RequestParam(value = "pageNum", defaultValue = "1") int pageNum) {
		if (session.getAttribute("user") == null) {
			return new ModelAndView("redirect:/");
		}
		ModelAndView mov = new ModelAndView("opptDel");
		
		// 영업기회 상태 코드 가져오기
		List<OpptVO> osclist = service.opptOscList();
		
		// 영업단계 코드 가져오기
		List<OpptVO> otllist = service.opptOtlList();
		
		// 메뉴리스트 가져오기
		List<MenuVO> menuList = menuService.selectAll(session);
		
		map.put("ssales_oppt_nm", map.get("ssales_oppt_nm"));
		map.put("ssales_oppt_nm0", map.get("ssales_oppt_nm0"));
		map.put("ssales_oppt_nm1", map.get("ssales_oppt_nm1"));
		map.put("scust_nm", map.get("scust_nm"));
		map.put("scust_nm0", map.get("scust_nm0"));
		map.put("scust_nm1", map.get("scust_nm1"));
		map.put("ssales_lev_cd", map.get("ssales_lev_cd"));
		map.put("ssales_lev_cd0", map.get("ssales_lev_cd0"));
		map.put("ssales_lev_cd1", map.get("ssales_lev_cd1"));
		map.put("psblty_rate", map.get("psblty_rate"));
		map.put("psblty_rate0", map.get("psblty_rate0"));
		map.put("psblty_rate1", map.get("psblty_rate1"));
		
		map.put("pageNum", pageNum + "");
		PagerVO page = service.opptPageCount(map);
		map.put("startRow", page.getStartRow() + "");
		map.put("endRow", page.getEndRow() + "");
		
		//영업기회 리스트 가져오기
		List<OpptVO> list = service.DelopptList(map);
		
		System.out.println("page : " + page);
		mov.addObject("oplist", list);
		mov.addObject("osclist", osclist);
		mov.addObject("otllist", otllist);
		mov.addObject("page", page);
		mov.addObject("menuList", menuList);
		mov.addObject("searchInfo", map);
		return mov;
	}
	
	// 영업기회상태 차트 리스트
	@RequestMapping(value="/opptChartStatus", method={RequestMethod.GET,RequestMethod.POST})
	   public @ResponseBody Map<String, Object> opptChartStatus( ModelMap model, HttpServletRequest request) {
	      
		//영업기회상태 차트 데이터
	      List<OpptChartVO> C_oppt_status = service.C_oppt_status();
			System.out.println("C_oppt_status 차트 : " + C_oppt_status);
		
			model.addAttribute("C_oppt_status", C_oppt_status);
	
	      return model;
	   }
	
	// 영업기회 상세정보페이지
	@RequestMapping(value = "/opptDetail", method = RequestMethod.GET)
	ModelAndView listDetail(HttpSession session
			, @RequestParam Map<String, String> map
			, String opptId
			, String cust_id
			, String cust_nm
			, String flag) 
	{
		System.out.println("opptId : " + opptId);
		
		if (session.getAttribute("user") == null) {
			return new ModelAndView("redirect:/");
		}
		
		int addFlag = 0;
		
		if(opptId == null){
			System.out.println("신규추가컨트롤러");
			System.out.println("flag : "+flag );
			System.out.println("cust_id : "+cust_id);
			System.out.println("cust_nm : "+cust_nm);

			addFlag = 0;
			ModelAndView mov = new ModelAndView("openAdd");
			
			// 영업기회 상태 코드 가져오기
			List<OpptVO> osclist = service.opptOscList();
			// 영업단계 코드 가져오기
			List<OpptVO> otllist = service.opptOtlList();
			//메뉴리스트 가져오기
			List<MenuVO> menuList = menuService.selectAll(session);
			//견적단계코드 가져오기
			List<EstVO> elclist = estInter.elcList();
			//견적할인단위코드 가져오기
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
			mov.addObject("cust_id", cust_id);
			mov.addObject("cust_nm", cust_nm);
			mov.addObject("flag", flag);
			mov.addObject("menuList", menuList);
			mov.addObject("addFlag", addFlag);
			mov.addObject("flg", "add");
			System.out.println("Add Flag  " + addFlag);
			// 검색어, 페이지번호 전달
			mov.addObject("searchInfo", map);
			return mov;
			
		}else {
			System.out.println("상세정보컨트롤러");
			ModelAndView mov = new ModelAndView("opptDetail"); 
			addFlag = 1;
			
			map.put("opptId", opptId);
			OpptVO detail = service.opptDetail(opptId);
			//영업기회상세정보페이지-상품리스트 가져오기
			List<OpptVO> opptPrdt = service.opptPrdtDetail(opptId);
			System.out.println("opptPrdt : " + opptPrdt);
			System.out.println("detail : " + detail);
			List<ActVO> actList = service.actList(map);
			System.out.println("actList : " + actList);
			mov.addObject("actList", actList);
			
			// 영업기회 상태 코드 가져오기
			List<OpptVO> osclist = service.opptOscList();
			// 영업단계 코드 가져오기
			List<OpptVO> otllist = service.opptOtlList();
			//메뉴리스트 가져오기
			List<MenuVO> menuList = menuService.selectAll(session);
			//견적단계코드 가져오기
			List<EstVO> elclist = estInter.elcList();
			//견적할인단위코드 가져오기
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
			mov.addObject("opDetail", detail);
			mov.addObject("osclist", osclist);
			mov.addObject("eduList", eduList);
			mov.addObject("elclist", elclist);
			mov.addObject("eduCode", eduCode);
			mov.addObject("opptPrdt", opptPrdt);
			mov.addObject("otllist", otllist);
			mov.addObject("cust_id", cust_id);
			mov.addObject("cust_nm", cust_nm);
			mov.addObject("flag", flag);
			mov.addObject("menuList", menuList);
			mov.addObject("actList", actList);
			mov.addObject("addFlag", addFlag);
			System.out.println("Add Flag  " + addFlag);
			// 검색어, 페이지번호 전달
			mov.addObject("searchInfo", map);
			return mov;
		}
	}
	// 영업기회 상세정보페이지
	@RequestMapping(value = "/opptDelDetail", method = RequestMethod.GET)
	ModelAndView listDelDetail(HttpSession session
			, @RequestParam Map<String, String> map
			, String opptId
			, String cust_id
			, String cust_nm
			, String flag) 
	{
		System.out.println("opptId : " + opptId);
		
		if (session.getAttribute("user") == null) {
			return new ModelAndView("redirect:/");
		}
		
		int addFlag = 0;
		
			System.out.println("상세정보컨트롤러");
			ModelAndView mov = new ModelAndView("opptDelDetail"); 
			addFlag = 1;
			
			map.put("opptId", opptId);
			OpptVO detail = service.opptDelDetail(opptId);
			//영업기회상세정보페이지-상품리스트 가져오기
			List<OpptVO> opptPrdt = service.opptPrdtDetail(opptId);
			System.out.println("opptPrdt : " + opptPrdt);
			System.out.println("detail : " + detail);
			List<ActVO> actList = service.actList(map);
			System.out.println("actList : " + actList);
			mov.addObject("actList", actList);
			
			// 영업기회 상태 코드 가져오기
			List<OpptVO> osclist = service.opptOscList();
			// 영업단계 코드 가져오기
			List<OpptVO> otllist = service.opptOtlList();
			//메뉴리스트 가져오기
			List<MenuVO> menuList = menuService.selectAll(session);
			//견적단계코드 가져오기
			List<EstVO> elclist = estInter.elcList();
			//견적할인단위코드 가져오기
			List<EstVO> eduList = estInter.eduList();
			List<String> eduCode = new ArrayList<String>(0);
			for(EstVO est: eduList){
				eduCode.add(est.getCode());
				eduCode.add(est.getCd_nm());
			}
			
			map.put("ssales_oppt_nm", map.get("ssales_oppt_nm"));
			map.put("scust_nm", map.get("scust_nm"));
			
			//상세정보 출력
			mov.addObject("flg", "");
			mov.addObject("opDetail", detail);
			mov.addObject("osclist", osclist);
			mov.addObject("eduList", eduList);
			mov.addObject("elclist", elclist);
			mov.addObject("eduCode", eduCode);
			mov.addObject("opptPrdt", opptPrdt);
			mov.addObject("otllist", otllist);
			mov.addObject("cust_id", cust_id);
			mov.addObject("cust_nm", cust_nm);
			mov.addObject("flag", flag);
			mov.addObject("menuList", menuList);
			mov.addObject("actList", actList);
			mov.addObject("addFlag", addFlag);
			System.out.println("Add Flag  " + addFlag);
			// 검색어, 페이지번호 전달
			mov.addObject("searchInfo", map);
			return mov;
		}
	
	//영업기회-상품추가 팝업 open controller
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
			//상품리스트 가져오기
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

		System.out.println(map.get("ssales_lev_cd"));
		// 한글 검색 인코더 변환
		map.put("ssales_oppt_nm", map.get("ssales_oppt_nm"));
		map.put("ssales_oppt_nm0", map.get("ssales_oppt_nm0"));
		map.put("ssales_oppt_nm1", map.get("ssales_oppt_nm1"));
		map.put("scust_nm", map.get("scust_nm"));
		map.put("scust_nm0", map.get("scust_nm0"));
		map.put("scust_nm1", map.get("scust_nm1"));
		map.put("ssales_lev_cd", map.get("ssales_lev_cd"));
		map.put("ssales_lev_cd0", map.get("ssales_lev_cd0"));
		map.put("ssales_lev_cd1", map.get("ssales_lev_cd1"));
		map.put("spsblty_rate", map.get("spsblty_rate"));
		map.put("spsblty_rate0", map.get("spsblty_rate0"));
		map.put("spsblty_rate1", map.get("spsblty_rate1"));
		map.put("pageNum", pageNum + "");
		PagerVO page = service.opptPageCount(map);
		map.put("startRow", page.getStartRow() + "");
		map.put("endRow", page.getEndRow() + "");
		//영업기회 리스트 출력
		List<OpptVO> list = service.opptList(map);
		System.out.println("검색결과 list :"+ list);

		Map<String, Object> result = new HashMap<String, Object>();
		result.put("oplist", list);
		result.put("osclist", osclist);
		result.put("otllist", otllist);
		result.put("page", page);
		result.put("searchInfo", map);

		return result;
	}
	// otllist list ajax
	@RequestMapping(value = "/otllist", method = RequestMethod.POST)
	@ResponseBody
	Map<String, Object> otllist(@RequestParam Map<String, String> map) {
		System.out.println("otllist Controller enter ");
//		// 영업기회 상태 코드 가져오기
//		List<OpptVO> osclist = service.opptOscList();
		
		// 영업단계 코드 가져오기
		List<OpptVO> otllist = service.opptOtlList();
		System.out.println("otllist Controller : " + otllist);
		
		// 한글 검색 인코더 변환
		Map<String, Object> result = new HashMap<String, Object>();
//		result.put("osclist", osclist);
		result.put("otllist", otllist);
		
		return result;
	}

//	영업기회삭제
	@RequestMapping(value = "/opptDelete", method = RequestMethod.GET)
	@ResponseBody
	public int opptDelete(HttpSession session,
			@RequestParam(value = "opptidList[]") List<String> opptidList,
			@RequestParam(value = "pageNum", defaultValue = "1") String pageNum) {
		int result = 0;
		// 모든 checked된 견적에 대해 삭제
		for (int i = 0; i < opptidList.size(); i++) {
			int delOppt = service.opptPrdtDel(opptidList.get(i));
			System.out.println("영업기회상품 삭제 결과 : " + delOppt);
			//영업기회 삭제 
			result += service.opptDelete(opptidList.get(i));
		}
		return result;
	}
//	영업기회삭제
	@RequestMapping(value = "/opptDelDelete", method = RequestMethod.POST)
	@ResponseBody
	public int opptDelDelete(HttpSession session,
//			@RequestParam(value = "opptidList[]") List<String> opptidList,
			@RequestParam(value = "pageNum", defaultValue = "1") String pageNum
			, String sales_oppt_id) {
		System.out.println("영업기회 완전 삭제 컨트롤러 삭제될 영업기회 ID : " + sales_oppt_id);
		int result = 0;
		// 모든 checked된 견적에 대해 삭제
//		for (int i = 0; i < opptidList.size(); i++) {
//			int delOppt = service.opptPrdtDel(opptidList.get(i));
//			System.out.println("영업기회상품 삭제 결과 : " + delOppt);
//			//영업기회 삭제 
//			result += service.opptDelete(opptidList.get(i));
//		}
		result += service.opptDelDelete(sales_oppt_id);
		System.out.println("삭제결과 : " + result);
		return result;
	}

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
		//영업활동 리스트 가져오기
		List<ActVO> actList = service.actList(map);
		Map<String, Object> map2 = new HashMap<String, Object>();

		map2.put("page2", page);
		map2.put("actPageNum", actPageNum);
		map2.put("actList", actList);

		return map2;
	}

	// 영업기회수정 함수 컨트롤러 (ajax)
	@RequestMapping(value = "/opptModify", method = RequestMethod.POST)
	@ResponseBody ModelAndView opptModify(HttpSession session, OpptVO detail, int pageNum
			, @RequestParam(value="est_list[]",required=false) List<String> est_list
			, String total_sup_price
			, String sales_oppt_id) {
		//영업기회상품리스트 삭제
		int delOppt = service.opptPrdtDel(sales_oppt_id);
		System.out.println("영업기회상품 삭제 결과 : " + delOppt);
		System.out.println("Detail Edit Controller");
		
		List<OpptVO> estList = new ArrayList<OpptVO>(0);
		detail.setFin_mdfy_id(session.getAttribute("user").toString());
		detail.setTotal_sup_price(total_sup_price);
		System.out.println(total_sup_price);
		System.out.println("detail : " + detail);
		
		int result = service.opptModify(detail);
		System.out.println("Detail Edit Result : " + result);
		
		ModelAndView mov = new ModelAndView("oppt");
		//영업기회 상세정보
		OpptVO opptVO = service.opptDetail(detail.getSales_oppt_id());
		//영업기회단계이력추가
		int result2 = service.addOpptStep(detail);
		if(est_list != null){
		for(int i=0 ; i< est_list.size(); i++){
			OpptVO vo = new OpptVO();
			vo.setSales_oppt_id(detail.getSales_oppt_id());
			vo.setProd_id(est_list.get(i));
			vo.setProd_nm(est_list.get(++i));
			vo.setEstim_qty(est_list.get(++i));
			vo.setSales_price(est_list.get(++i));
			vo.setDiscount(est_list.get(++i));
			vo.setSup_price(est_list.get(++i));
			vo.setDiscount_unit_cd(est_list.get(++i));
			vo.setOppt_seq(detail.getOppt_seq());
			estList.add(vo);
		}
		//영업기회-상품리스트 추가
		int result1 = service.opptPrdtAdd(estList);
		System.out.println("영업기회상품 편집추가 result : " + result1);
		}
		
		System.out.println("영업기회단계리스트수정추가 result : " + result2);
		Map<String, Object> opptMap = new HashMap<String, Object>();
		opptMap.put("opptVO", opptVO);
		opptMap.put("pageNum", pageNum);
		mov.addObject("opptVO", opptVO);
		mov.addObject("pageNum", pageNum);
		return mov;
	}
	// 영업기회수정 함수 컨트롤러 (ajax)
	@RequestMapping(value = "/opptDelModify", method = RequestMethod.POST)
	@ResponseBody ModelAndView opptDelModify(HttpSession session, OpptVO detail, int pageNum
			, @RequestParam(value="est_list[]",required=false) List<String> est_list
			, String total_sup_price
			, String sales_oppt_id) {
		System.out.println("삭제된 영업기회 데이터 복원 컨트롤러");
		List<OpptVO> estList = new ArrayList<OpptVO>(0);
		
		detail.setFin_mdfy_id(session.getAttribute("user").toString());
		detail.setAct_yn("Y");
		detail.setSales_oppt_id(sales_oppt_id);
		System.out.println("복구될 영업기회 ID : " + detail.getSales_oppt_id());
		
		System.out.println(total_sup_price);
		System.out.println("detail : " + detail);
		
		int result = service.opptDelModify(detail);
		System.out.println("Detail Edit Result : " + result);
		
		ModelAndView mov = new ModelAndView("oppt");
		//영업기회 상세정보
		OpptVO opptVO = service.opptDetail(detail.getSales_oppt_id());
//		//영업기회단계이력추가
//		int result2 = service.addOpptStep(detail);
//		
//		System.out.println("영업기회단계리스트수정추가 result : " + result2);
		Map<String, Object> opptMap = new HashMap<String, Object>();
		opptMap.put("opptVO", opptVO);
		opptMap.put("pageNum", pageNum);
		mov.addObject("opptVO", opptVO);
		mov.addObject("pageNum", pageNum);
		return mov;
	}

	// 영업기회추가함수 컨트롤러 (ajax)
	@RequestMapping(value = "/opptAdd", method = RequestMethod.POST)
	@ResponseBody
	int opptAdd(HttpSession session, OpptVO add
			, @RequestParam(value="est_list[]",required=false) List<String> est_list
			, String total_sup_price) {
		if(est_list != null)
		{
			System.out.println("est_list : " + est_list);
		}
		List<OpptVO> estList = new ArrayList<OpptVO>(0);
		add.setFst_reg_id(session.getAttribute("user").toString());
		add.setFin_mdfy_id(session.getAttribute("user").toString());
		System.out.println(total_sup_price);
		add.setTotal_sup_price(total_sup_price);
		
		//영업기회 추가 함수
		int result = service.opptAdd(add);
		
		//영업기회단계이력 추가 함수
		int result2 = service.addOpptStep(add);
		
		if(est_list != null){
			//상품 배열 데이터 추가 (Mapper에 넘겨야 할 값들...)
			for(int i=0 ; i< est_list.size(); i++){
				OpptVO vo = new OpptVO();
				vo.setSales_oppt_id("");
				vo.setProd_id(est_list.get(i));
				vo.setProd_nm(est_list.get(++i));
				vo.setEstim_qty(est_list.get(++i));
				vo.setSales_price(est_list.get(++i));
				vo.setDiscount(est_list.get(++i));
				vo.setSup_price(est_list.get(++i));
				vo.setDiscount_unit_cd(est_list.get(++i));
				vo.setOppt_seq(add.getOppt_seq());
				estList.add(vo);
			}
			//영업기회상품 테이블 추가 함수
			int result1 = service.opptPrdtAdd(estList);
			System.out.println("영업기회 상품 추가 result : " + result1);
		}
		
		System.out.println("영업기회 추가 result : " + result);
		System.out.println("영업기회 단계 이력 추가 result : " + result2);
		
		return result;
	}
	

	// 상세정보에서의 고객 리스트_고객버튼 클릭 시 팝업 오픈(사용)
	@RequestMapping(value = "/opptCustcompList", method = RequestMethod.GET)
	public ModelAndView opptCustcompList(
			HttpSession session,
			String pop_flg,
			@RequestParam(value = "keyfield", defaultValue = "ct_id") String keyfield,
			@RequestParam(value = "keyword", defaultValue = "") String keyword) {

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);
		List<Object> custcompList = service.opptCustComp(map);
		
		System.out.println("opptCustcompList pop_flg : " + pop_flg);
		ModelAndView mov = new ModelAndView(
				"/sales/oppt/opptPop/custcomp_list_pop");

		mov.addObject("custcompList", custcompList);

		// javascript에서 상세정보에서의 고객 리스트인지 구분하기 위한 값 전달
		mov.addObject("custType", "normal");
		mov.addObject("pop_flg", pop_flg);

		return mov;
	}

	// 검색창에서의 고객 리스트
	@RequestMapping(value = "/opptSearchCustcompList", method = RequestMethod.GET)
	public ModelAndView opptSearchCustcompList(
			HttpSession session,
			String pop_flg,
			@RequestParam(value = "keyfield", defaultValue = "ct_id") String keyfield,
			@RequestParam(value = "keyword", defaultValue = "") String keyword) {
		
		System.out.println("검색조건 입력 flg : " + pop_flg);
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
		mov.addObject("pop_flg", pop_flg);

		return mov;
	}

	// 영업활동 추가 팝업창 오픈
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

	//영업기회별 견적-상품추가 팝업 open controller
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

	// 영업활동 상세정보 팝업창 오픈
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

	// 영업활동 상세정보 입력
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

	//영업기회별 견적 상세
	@RequestMapping(value = "/opptEstimDetail", method = RequestMethod.GET)
	public ModelAndView opptEstimDetail(HttpSession session,
			String list_cust_id, String list_cust_nm,
			String list_sales_oppt_nm, String list_sales_oppt_id, String estimId,String flag) {
		ModelAndView mov = new ModelAndView("/sales/oppt/opptPop/custcomp_est_pop");

		//견적단계코드 가져오기
		List<EstVO> elcList = estInter.elcList();
		//견적할인단위코드 가져오기
		List<EstVO> eduList = estInter.eduList();
		List<String> eduCode = new ArrayList<String>();
		for (EstVO est : eduList) {
			eduCode.add(est.getCode());
			eduCode.add(est.getCd_nm());
		}

		List<EstVO> prod = service.opptEstimDetail(estimId);
		EstVO detail = prod.get(prod.size() - 1);
		
		System.out.println("controller prod detail : " + prod);
		System.out.println("controller detail : " + detail);
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
	
	//영업기회 상세페이지 견적 탭 견적추가 상품 추가 상품 리스트 출력
	@RequestMapping(value="/opptEstProdList", method=RequestMethod.GET)
	public ModelAndView estProdList(HttpSession session,
			@RequestParam(value="keyfield", defaultValue="pt_id") String keyfield,
			@RequestParam(value="keyword", defaultValue="") String keyword){
		ModelAndView mov = new ModelAndView("/sales/oppt/opptPop/product_list_pop");
		
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);
		List<ProdVO> prodList = estInter.prodList(map);
	
		
		mov.addObject("prodList", prodList);
	
		return mov;
	}
	
}
