package com.crm.cp.sales.act.controller;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
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
import com.crm.cp.sales.est.service.EstService;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.service.OpptService;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;
import com.crm.cp.standard.prod.vo.ProdVO;
import com.crm.cp.utils.PagerVO;

@Controller
public class ActController {
	
	@Autowired
	MenuService menuService;
	
	@Autowired
	ActService actService;
	
	@Autowired
	EstService estInter;
	
	@Autowired
	OpptService opptService;
	
	//전체리스트 출력
	@RequestMapping(value="/act" , method = {RequestMethod.GET, RequestMethod.POST})
	public @ResponseBody ModelAndView ActList(HttpSession session, @RequestParam(value = "actPageNum", defaultValue = "1") int actPageNum)
	{
		Map<String, Object> actMap = new HashMap<String, Object>();
		actMap.put("actPageNum", actPageNum);
		
		PagerVO page = actService.getActListCount(actMap);
		actMap.put("page", page);

		List<ActVO> actList = actService.actAllList(actMap);
		List<MenuVO> menuList = menuService.selectAll(session);
		List<ActVO> actDivCd = actService.actDivCdList();
		List<ActVO> actStatCd = actService.actStatCdList();

		ModelAndView mov = new ModelAndView("actSaleList");
		
		mov.addObject("menuList", menuList);
		mov.addObject("actPageNum", actPageNum);
		mov.addObject("page", page);
		mov.addObject("actList", actList);
		mov.addObject("actDivCd", actDivCd);
		mov.addObject("actStatCd", actStatCd);
		
		return mov;
	}
	
	//전체리스트 출력 페이징/검색 
	@RequestMapping(value="/actSchedule" , method = {RequestMethod.GET, RequestMethod.POST})
	public @ResponseBody Map<String,Object> ActSchedule(HttpSession session, @RequestParam(value = "actPageNum", defaultValue = "1") int actPageNum) throws ParseException
	{
		System.out.println("Schedule Test");
		
		Map<String, Object> test = new HashMap<String, Object>();
		
		List<Object> actSchList = actService.actSchList();
		//List<MenuVO> menuList = menuService.selectAll(session);
		//List<ActVO> actDivCd = actService.actDivCdList();
		//List<ActVO> actStatCd = actService.actStatCdList();
		
		System.out.println("actSchList : " + actSchList);
		
		test.put("actSchList", actSchList);
		//test.put("menuList", menuList);
		//test.put("actDivCd", actDivCd);
		//test.put("actStatCd", actStatCd);

		return test;
	}
	
	// 영업활동 상세정보
	@RequestMapping(value="actDetail", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView actDetail(String sales_actvy_id) 
	{
		int flg;

		if(sales_actvy_id != null)
		{
			flg = 1;
			String[] htime = {"01", "02", "03", "04", "05", "06",
					 "07", "08", "09", "10", "11", "12",
					 "13", "14", "15", "16", "17", "18",
					 "19", "20", "21", "22", "23", "24"};
			String[] mtime = {"00", "10", "20", "30", "40", "50"};
	
			ActVO actVO = actService.actDetail(sales_actvy_id);
			
			String cust_id = actVO.getCust_id();
			
			List<OpptVO> ottpList = actService.opptList(cust_id);
			List<ActVO> actTypeCd = actService.actTypeCdList();
			List<ActVO> actStatCd = actService.actStatCdList();
			
			
			ModelAndView mov = new ModelAndView("actSaleDetail");
			
			mov.addObject("actDetail", actVO);
			mov.addObject("actStatCd", actStatCd);
			mov.addObject("actTypeCd", actTypeCd);
			mov.addObject("opptList", ottpList);
			mov.addObject("htime", htime);
			mov.addObject("mtime", mtime);
			mov.addObject("flg", flg);
			
			return mov;
		}
		else
		{
			flg = 0;
			
			List<ActVO> actTypeCd = actService.actTypeCdList();
			List<ActVO> actStatCd = actService.actStatCdList();
			
			ModelAndView mov = new ModelAndView("actSaleAdd");
			
			mov.addObject("actStatCd", actStatCd);
			mov.addObject("actTypeCd", actTypeCd);
			mov.addObject("flg", flg);
			
			return mov;
		}
	}
	
	//영업활동등록
	@RequestMapping(value = "/actInsert", method = RequestMethod.POST)
	public String actInsert(@ModelAttribute ActVO actvo, HttpSession session, HttpServletRequest request)
	{
		actvo.setFst_reg_id(session.getAttribute("user").toString());
		actvo.setStrt_t(actvo.getStrt_t_h() + ":" + actvo.getStrt_t_m());
		actvo.setEnd_t(actvo.getEnd_t_h() + ":" + actvo.getEnd_t_m());
		
		System.out.println("actInsert : " + actvo.toString());
		actService.actInsert(actvo);

		return "redirect:/act";
	}

	//영업활동 수정	
	@RequestMapping(value="/actEdit", method= RequestMethod.POST)
	public String actEdit(@ModelAttribute ActVO actvo, HttpSession session)
	{
		actvo.setFin_mdfy_id(session.getAttribute("user").toString());
		actvo.setSales_actvy_div_cd(actvo.getSales_actvy_div_nm());
		actvo.setSales_actvy_type_cd(actvo.getSales_actvy_type_nm());
		actvo.setSales_actvy_stat_cd(actvo.getSales_actvy_stat_nm());
		actvo.setStrt_t(actvo.getStrt_t_h() + ":" + actvo.getStrt_t_m());
		actvo.setEnd_t(actvo.getEnd_t_h() + ":" + actvo.getEnd_t_m());
		
        actService.actEdit(actvo);
		
        return "redirect:/act";
	}
	
	//영업활동 삭제	
	@RequestMapping(value = "/actDelete", method = RequestMethod.POST)
	public String actDelete(@ModelAttribute ActVO actvo) throws IOException
	{
		System.out.println("actDelete - sales_actvy_id : " + actvo.getSales_actvy_id());
		
		actService.actDelete(actvo.getSales_actvy_id());
		
		return "redirect:/act";
	}
	
	//전체리스트 출력 페이징/검색 
	@RequestMapping(value="/actPaging" , method=RequestMethod.POST)
	public @ResponseBody Map<String,Object> ActListSearch(HttpSession session, @RequestParam(value = "actPageNum", defaultValue = "1") int actPageNum,
			String act_search_div_id, String act_search_txt) throws ParseException{
		
		/*SimpleDateFormat simpledate = new SimpleDateFormat();
		simpledate.applyLocalizedPattern("yyyy-MM-dd");
		java.util.Date date = simpledate.parse(sstart_day);*/
	
		Map<String,Object> actMap = new HashMap<String,Object>();
		
		if(act_search_div_id.equals("") || act_search_div_id.equals(null))
		{
			System.out.println(act_search_div_id);
		}
		else
		{
			if(act_search_div_id.equals("ssales_actvy_nm"))
			{
				actMap.put("ssales_actvy_nm", act_search_txt);
			}
			if(act_search_div_id.equals("sact_oppt_nm"))
			{
				actMap.put("sact_oppt_nm", act_search_txt);
			}
			if(act_search_div_id.equals("sstart_day"))
			{
				actMap.put("sstart_day", act_search_txt);
			}
		}
		
		actMap.put("actPageNum", actPageNum);
		
		System.out.println("MAP : " + actMap);
		
		PagerVO page = actService.getActListCount(actMap);
		actMap.put("page", page);
		
		List<ActVO> actList = actService.actAllList(actMap);
		
		System.out.println("List : " + actList);
		
		actMap.put("actList", actList);
		actMap.put("actListSize", actList.size());
		
		return actMap;
	}

	//영업기회리스트 팝업창 
	@RequestMapping(value="/actOpptList" , method=RequestMethod.GET)
	public ModelAndView ActOpptList(HttpSession session)
	{
		List<Object> actOpptList = actService.actOpptList();
		ModelAndView mov = new ModelAndView("/sales/act/actPop/act_oppt_list_pop");
		
		mov.addObject("actOpptList", actOpptList);
	
		return mov;
	}
	
	// 영업기회 리스트 검색부분 POST
	@RequestMapping(value="/actOpptList" , method=RequestMethod.POST)
	public ModelAndView ActOpptListSearch(HttpSession session,
			@RequestParam(value="keyfield", defaultValue="oppt_id") String keyfield,
			@RequestParam(value="keyword", defaultValue="") String keyword){
		
		System.out.println("검색" + keyfield + keyword);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);
		
		List<Object> actOpptList = actService.actOpptList(map);
		ModelAndView mov = new ModelAndView("/sales/act/actPop/act_oppt_list_pop");
		
		mov.addObject("actOpptList", actOpptList);
	
		return mov;
	}
	
	//고객사 리스트 팝업창
	@RequestMapping(value="/custcompList" , method=RequestMethod.GET)
	public ModelAndView CustcompList(HttpSession session){
		
		List<Object> custcompList = actService.custcompList();
		ModelAndView mov = new ModelAndView("/sales/act/actPop/custcomp_list_pop");
		
		mov.addObject("custcompList", custcompList);
	
		return mov;
	}
	
	//고객사 리스트 팝업창
	@RequestMapping(value="/custcompList" , method=RequestMethod.POST)
	public ModelAndView CustcompListSearch(HttpSession session,
		@RequestParam(value="keyfield", defaultValue="ct_id") String keyfield,
		@RequestParam(value="keyword", defaultValue="") String keyword){
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);
	
		List<Object> custcompList = actService.custcompList(map);
		ModelAndView mov = new ModelAndView("/sales/act/actPop/custcomp_list_pop");
		
		mov.addObject("custcompList", custcompList);
	
		return mov;
	}

	
	
	// 상세정보에서의 고객 리스트
	@RequestMapping(value = "/opptCustPopup", method = RequestMethod.GET)
	public ModelAndView opptCustcompList(HttpSession session, 
			@RequestParam(value = "keyfield", defaultValue = "ct_id") String keyfield, @RequestParam(value = "keyword", defaultValue = "") String keyword) 
	{
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("keyfield", keyfield);
			map.put("keyword", keyword);
			
			List<Object> custcompList = opptService.opptCustComp(map);
			
			ModelAndView mov = new ModelAndView("/sales/act/actPop/custcomp_list_pop");

			mov.addObject("custcompList", custcompList);

			// javascript에서 상세정보에서의 고객 리스트인지 구분하기 위한 값 전달
			mov.addObject("custType", "normal");

			return mov;
	}
	
	/**
	 * 영화씨
	 * */
	//기회-상품추가 팝업 open controller
	@RequestMapping(value = "/prodList", method = RequestMethod.GET)
	public ModelAndView prodList(HttpSession session,
			@RequestParam(value = "keyfield", defaultValue = "pt_id") String keyfield,
			@RequestParam(value = "keyword", defaultValue = "") String keyword) 
	{
		ModelAndView mov = new ModelAndView("/sales/act/actPop/product_list_pop");
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
		
		ModelAndView mov = new ModelAndView("/sales/act/actPop/opptInsertPopup");
			
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
		
		ModelAndView mov = new ModelAndView("/sales/act/actPop/opptInsertPopup");

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
		
	// 영업기회 리스트 ajax
	@RequestMapping(value = "/opptTabajax", method = RequestMethod.POST)
	@ResponseBody Map<String, Object> listajax(OpptVO opptVo,
				@RequestParam(value = "pageNum", defaultValue = "1") int pageNum) 
	{
		System.out.println("opptTabajax cust_id : " + opptVo.getCust_id());
			
		List<OpptVO> opptList = actService.opptList(opptVo.getCust_id());
		
		System.out.println("opptTabajax opptList : " + opptList);
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
			System.out.println("for문 처음");
			OpptVO vo = new OpptVO();
			
			vo.setSales_oppt_id("");
			vo.setProd_id(est_list.get(i));
			vo.setProd_nm(est_list.get(++i));
			//vo.setProd_price(est_list.get(++i));
			vo.setEstim_qty(est_list.get(++i));	// 수량 개수
			vo.setSales_price(est_list.get(++i));			
			vo.setSup_price(est_list.get(++i));
			vo.setDiscount(est_list.get(++i));
			vo.setDiscount_unit_cd(est_list.get(++i));
			vo.setOppt_seq(add.getOppt_seq());
			
			estList.add(vo);
			
			System.out.println("for문 estList : " + estList);
		}
		
		int result1 = opptService.opptPrdtAdd(estList);
		
		System.out.println("영업기회 상품 추가 result : " + result1);
		
		System.out.println("영업기회 추가 result : " + result);
		System.out.println("영업기회 단계 이력 추가 result : " + result2);
		
		return result;
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
}
