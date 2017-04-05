package com.crm.cp.sales.act.controller;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
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
import com.crm.cp.sales.oppt.service.OpptService;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;
import com.crm.cp.utils.Encoder;
import com.crm.cp.utils.PagerVO;

@Controller
public class ActController {
	
	@Autowired
	MenuService menuService;
	
	@Autowired
	ActService actService;
	
	@Autowired
	OpptService service;
	
	//전체리스트 출력
	@RequestMapping(value="/act" , method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView ActList(HttpSession session, @RequestParam(value = "actPageNum", defaultValue = "1") int actPageNum){

		Map<String,Object> actMap = new HashMap<String,Object>();
		actMap.put("actPageNum", actPageNum);
		
		PagerVO page = actService.getActListCount(actMap);
		actMap.put("page", page);
		
		List<ActVO> actList = actService.actAllList(actMap);
		List<MenuVO> menuList = menuService.selectAll(session);
		List<ActVO> actDivCd = actService.actDivCdList();
		List<ActVO> actStatCd = actService.actStatCdList();

		System.out.println("actList : " + actList);
		
		ModelAndView mov = new ModelAndView("actSaleList");
		mov.addObject("menuList", menuList);
		mov.addObject("actPageNum", actPageNum);
		mov.addObject("page", page);
		mov.addObject("actList", actList);
		mov.addObject("actDivCd", actDivCd);
		mov.addObject("actStatCd", actStatCd);
		return mov;
	}
	
	// 영업활동 상세정보
	@RequestMapping(value="actDetail", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView companyCutomerDetail(String sales_actvy_id) 
	{
		int flg;
		sales_actvy_id = "SAT0000092";
		System.out.println("sales_actvy_id : " + sales_actvy_id);
		
		flg = 1;
		String[] htime = {"01", "02", "03", "04", "05", "06",
						 "07", "08", "09", "10", "11", "12",
						 "13", "14", "15", "16", "17", "18",
						 "19", "20", "21", "22", "23", "24"};
		String[] mtime = {"00", "10", "20", "30", "40", "50"};
		
		Map<String, Object> map = new HashMap<String, Object>();
		ActVO actVO = actService.actDetail(sales_actvy_id);
		
		String cust_id = actVO.getCust_id();
		
		List<ActVO> actTypeCd = actService.actTypeCdList();
		List<ActVO> actStatCd = actService.actStatCdList();
		List<OpptVO> opptList = actService.opptList(cust_id);
		
		ModelAndView mov = new ModelAndView("actSaleDetail");
		
		System.out.println("flg : " + flg);
		System.out.println(actVO.toString());
		System.out.println(actStatCd.toString());
		System.out.println("OPPT_LIST : " + opptList.toString());
		System.out.println("OPPT_LIST : " + opptList);
		
		mov.addObject("actDetail", actVO);
		mov.addObject("actStatCd", actStatCd);
		mov.addObject("actTypeCd", actTypeCd);
		mov.addObject("opptList", opptList);
		mov.addObject("htime", htime);
		mov.addObject("mtime", mtime);
		mov.addObject("flg", flg);
			
		return mov;
/*
		if(sales_actvy_id != null)
		{
			flg = 1;
			String[] htime = {"01", "02", "03", "04", "05", "06",
						 	"07", "08", "09", "10", "11", "12",
						 	"13", "14", "15", "16", "17", "18",
						 	"19", "20", "21", "22", "23", "24"};
			String[] mtime = {"00", "10", "20", "30", "40", "50"};
		
			ActVO actVO = actService.actDetail(sales_actvy_id);
		
			List<ActVO> actTypeCd = actService.actTypeCdList();
			List<ActVO> actStatCd = actService.actStatCdList();
		
			ModelAndView mov = new ModelAndView("actSaleDetail");
		
			System.out.println("flg : " + flg);
			System.out.println(actVO.toString());
			System.out.println(actStatCd.toString());
		
			mov.addObject("actDetail", actVO);
			mov.addObject("actStatCd", actStatCd);
			mov.addObject("actTypeCd", actTypeCd);
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
			
			System.out.println("flg : " + flg);
			
			mov.addObject("actStatCd", actStatCd);
			mov.addObject("actTypeCd", actTypeCd);
			mov.addObject("flg", flg);
			
			return mov;
		}
*/		
	}
	
	//영업활동등록
	@RequestMapping(value = "/actInsert", method = RequestMethod.POST)
	public String actInsert(@ModelAttribute ActVO actvo, HttpSession session, HttpServletRequest request)
	{
		actvo.setFst_reg_id(session.getAttribute("user").toString());
		//sales_actvy_div_cd=0001 할 일 일경우
		//sales_actvy_div_cd=0002 영업활동일 결우
		System.out.println(actvo.toString());
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
		
		System.out.println(actvo);
        actService.actEdit(actvo);
		
        return "redirect:/act";
	}
	
	//영업활동 삭제	
	@RequestMapping(value = "/actDelete", method = RequestMethod.POST)
	public String actDelete(String[] act_del) throws IOException
	{
		for (String sales_actvy_id : act_del) {
			actService.actDelete(sales_actvy_id);
		}
		
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
	public ModelAndView ActOpptList(HttpSession session){
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
	
	// 영업기회 추가 팝업창
	@RequestMapping(value = "/opptInsertPopup", method = RequestMethod.GET)
	public ModelAndView opptActivePopup(HttpSession session, String list_cust_id, String list_cust_nm, String list_sales_oppt_id) 
	{
		// 영업기회 상태 코드 가져오기
		List<OpptVO> osclist = service.opptOscList();
		// 영업단계 코드 가져오기
		List<OpptVO> otllist = service.opptOtlList();
		
		ModelAndView mov = new ModelAndView("/sales/act/actPop/opptInsertPopup");
		
		mov.addObject("popFlg", "add");
		mov.addObject("osclist", osclist);
		mov.addObject("otllist", otllist);
		
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
			
			List<Object> custcompList = service.opptCustComp(map);
			
			ModelAndView mov = new ModelAndView("/sales/act/actPop/custcomp_list_pop");

			mov.addObject("custcompList", custcompList);

			// javascript에서 상세정보에서의 고객 리스트인지 구분하기 위한 값 전달
			mov.addObject("custType", "normal");

			return mov;
		}
	
	//영업활동등록
	@RequestMapping(value = "/actInsertT", method = RequestMethod.POST)
	public @ResponseBody Object actInsertT(@RequestBody ActVO actvo, HttpSession session)
	{
		/*		actvo.setStrt_d(new java.sql.Date(actvo.getStrt_d().getTime()));
		actvo.setEnd_d(new java.sql.Date(actvo.getEnd_d().getTime()));*/
			
		actvo.setFst_reg_id(session.getAttribute("user").toString());
		System.out.println(actvo.toString());
		actService.actInsert(actvo);

		return actvo;
			
	}
}
