package com.crm.cp.sales.act.controller;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.sales.act.service.ActService;
import com.crm.cp.sales.act.vo.ActChartVO;
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
public class ActController {
	
	@Autowired
	MenuService menuService;
	
	@Autowired
	ActService actService;
	
	@Autowired
	EstService estInter;
	
	@Autowired
	OpptService opptService;
	
	// 달력 출력
	@RequestMapping(value="/act" , method = {RequestMethod.GET, RequestMethod.POST})
	public @ResponseBody ModelAndView ActSchList(HttpSession session, @RequestParam(value = "actPageNum", defaultValue = "1") int actPageNum)
	{
		Map<String, Object> actMap = new HashMap<String, Object>();
		actMap.put("actPageNum", actPageNum);
		
		PagerVO page = actService.getActListCount(actMap);
		actMap.put("page", page);

		List<ActVO> actList = actService.actAllList(actMap);
		List<MenuVO> menuList = menuService.selectAll(session);
		List<ActVO> actDivCd = actService.actDivCdList();
		List<ActVO> actStatCd = actService.actStatCdList();

		ModelAndView mov = new ModelAndView("actSaleSch");
		
		mov.addObject("menuList", menuList);
		mov.addObject("actPageNum", actPageNum);
		mov.addObject("page", page);
		mov.addObject("actList", actList);
		mov.addObject("actDivCd", actDivCd);
		mov.addObject("actStatCd", actStatCd);
		
		return mov;
	}
	// 영업활동상태 차트 리스트
	@RequestMapping(value="/actChartStatus", method={RequestMethod.GET,RequestMethod.POST})
	public @ResponseBody Map<String, Object> actChartStatus( ModelMap model, HttpServletRequest request)
	{
		//영업활동상태 차트 데이터
		List<ActChartVO> C_act_status = actService.C_act_status();
		System.out.println("C_act_status 차트 : " + C_act_status.toString());
		model.addAttribute("C_act_status", C_act_status);

		return model;
	}
		
	// 달력 리스트 출력
	@RequestMapping(value="/actSchedule" , method = {RequestMethod.GET, RequestMethod.POST})
	public @ResponseBody Map<String,Object> ActSchedule(HttpSession session, @RequestParam(value = "actPageNum", defaultValue = "1") int actPageNum) throws ParseException
	{
		System.out.println("Schedule Test");
		
		Map<String, Object> test = new HashMap<String, Object>();
		
		List<Object> actSchList = actService.actSchList();
		
		System.out.println("actSchList : " + actSchList);
		
		test.put("actSchList", actSchList);
			
		return test;
	}
	
	// 영업활동 관리 전체리스트 출력
	@RequestMapping(value="/actSaleList" , method = {RequestMethod.GET, RequestMethod.POST})
	public @ResponseBody ModelAndView ActList(HttpSession session, @RequestParam(value = "actPageNum", defaultValue = "1") int actPageNum)
	{
		int act_flg = 1;
		
		Map<String, Object> actMap = new HashMap<String, Object>();
		actMap.put("actPageNum", actPageNum);
		
		PagerVO page = actService.getActListCount(actMap);
		actMap.put("page", page);

		List<ActVO> actList = actService.actAllList(actMap);
		List<MenuVO> menuList = menuService.selectAll(session);
		List<ActVO> actTypeCd = actService.actTypeCdList();
		List<ActVO> actStatCd = actService.actStatCdList();
		
		ModelAndView mov = new ModelAndView("actSaleList");
		
		System.out.println("actList : " + actList);
		System.out.println("actTypeCd : " + actTypeCd);
		
		mov.addObject("menuList", menuList);
		mov.addObject("actPageNum", actPageNum);
		mov.addObject("page", page);
		mov.addObject("actList", actList);
		mov.addObject("actTypeCd", actTypeCd);
		mov.addObject("actStatCd", actStatCd);
		mov.addObject("act_flg", act_flg);
		
		return mov;
	}
	
	// 영업활동 관리 전체리스트 출력
	@RequestMapping(value="/delActSaleList" , method = {RequestMethod.GET, RequestMethod.POST})
	public @ResponseBody ModelAndView delActList(HttpSession session, @RequestParam(value = "actPageNum", defaultValue = "1") int actPageNum)
	{
		int act_flg = 1;
		
		Map<String, Object> actMap = new HashMap<String, Object>();
		actMap.put("actPageNum", actPageNum);
		
		PagerVO page = actService.getActListCount(actMap);
		actMap.put("page", page);

		List<ActVO> delActList = actService.delActAllList(actMap);
		List<MenuVO> menuList = menuService.selectAll(session);
		List<ActVO> actTypeCd = actService.actTypeCdList();
		List<ActVO> actStatCd = actService.actStatCdList();
			
		ModelAndView mov = new ModelAndView("delActSaleList");
			
		System.out.println("actList : " + delActList);
		System.out.println("actTypeCd : " + actTypeCd);
			
		mov.addObject("menuList", menuList);
		mov.addObject("actPageNum", actPageNum);
		mov.addObject("page", page);
		mov.addObject("actList", delActList);
		mov.addObject("actTypeCd", actTypeCd);
		mov.addObject("actStatCd", actStatCd);
		mov.addObject("act_flg", act_flg);
		
		return mov;
	}
	
	// 영업활동 상세정보
	@RequestMapping(value="actDetail", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView actDetail(String sales_actvy_id, String act_flg, 
								  String sales_oppt_id, String sales_oppt_nm, String otab_check,
								  String cust_id, String cust_nm, String tabValue, 
								  String date, String hour, String min)
	{
		int flg;
		
		System.out.println("Detail : " + sales_actvy_id);
		System.out.println("act_flg : " + act_flg);
		System.err.println("tabValue : " + tabValue);
		
		String[] htime = {"01", "02", "03", "04", "05", "06",
				 "07", "08", "09", "10", "11", "12",
				 "13", "14", "15", "16", "17", "18",
				 "19", "20", "21", "22", "23", "24"};
		String[] mtime = {"00", "10", "20", "30", "40", "50"};


		if(sales_actvy_id != null)	// 상세보기
		{
			System.out.println("Detail - if : " + sales_actvy_id);
			
			flg = 1;
			
			ActVO actVO = actService.actDetail(sales_actvy_id);
			
			List<ActVO> actTypeCd = actService.actTypeCdList();
			List<ActVO> actStatCd = actService.actStatCdList();
			
			ModelAndView mov = new ModelAndView("actSaleDetail");
			//ModelAndView mov = new ModelAndView("/sales/act/act_detail");
			
			mov.addObject("actDetail", actVO);
			mov.addObject("actStatCd", actStatCd);
			mov.addObject("actTypeCd", actTypeCd);
			mov.addObject("htime", htime);
			mov.addObject("mtime", mtime);
			mov.addObject("sales_oppt_id", sales_oppt_id);
			mov.addObject("sales_oppt_nm", sales_oppt_nm);
			mov.addObject("cust_id", cust_id);
			mov.addObject("cust_nm", cust_nm);
			mov.addObject("act_flg", act_flg);
			mov.addObject("tabValue", tabValue);
			mov.addObject("flg", flg);
			
			return mov;
		}
		else
		{
			flg = 0;
			
			List<ActVO> actTypeCd = actService.actTypeCdList();
			List<ActVO> actStatCd = actService.actStatCdList();
			
			ModelAndView mov = new ModelAndView("actSaleDetail");
			
			if(date == null)
			{
				Date dt = new Date();
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd, HH:mm:ss");
				
				String time = sdf.format(dt).toString();
				String[] tmp = time.split(", ");		// 날짜
				String[] tmp1 = tmp[1].split(":"); 		// 시간을 담는 배열
				int minute = Integer.parseInt(tmp1[1])/10;
				
				date = tmp[0];
				hour = tmp1[0];
				
				min  = String.valueOf(minute+"0");
				
			}
			else
			{
				if(hour.length() == 1)	 // 시간이 1자리일 경우에 앞에 0을 붙여준다.
				{
					String tmp = "0" + hour;
					
					hour = tmp;
					
					System.out.println("Date : " + date);
					System.out.println("HOUR : " + hour);
					System.out.println("HOUR : " + tmp);
				}
			}
			
			System.out.println("act_flg : " + act_flg);
			
			mov.addObject("actStatCd", actStatCd);
			mov.addObject("actTypeCd", actTypeCd);
			mov.addObject("sales_oppt_id", sales_oppt_id);
			mov.addObject("sales_oppt_nm", sales_oppt_nm);
			mov.addObject("cust_id", cust_id);
			mov.addObject("cust_nm", cust_nm);
			mov.addObject("act_flg", act_flg);
			mov.addObject("htime", htime);
			mov.addObject("mtime", mtime);
			mov.addObject("date", date);
			mov.addObject("hour", hour);
			mov.addObject("min", min);
			mov.addObject("tabValue", tabValue);
			mov.addObject("flg", flg);
			
			return mov;
		}
	}

	// 영업활동 상세정보
	@RequestMapping(value="delActDetail", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView delActDetail(String sales_actvy_id)
	{
		int flg;
		
		System.out.println("Detail : " + sales_actvy_id);

		String[] htime = {"01", "02", "03", "04", "05", "06",
				 		  "07", "08", "09", "10", "11", "12",
				 		  "13", "14", "15", "16", "17", "18",
				 		  "19", "20", "21", "22", "23", "24"};
		String[] mtime = {"00", "10", "20", "30", "40", "50"};
	
		ActVO actVO = actService.delActDetail(sales_actvy_id);
				
		List<ActVO> actTypeCd = actService.actTypeCdList();
		List<ActVO> actStatCd = actService.actStatCdList();
			
		ModelAndView mov = new ModelAndView("delActSaleDetail");
				
		mov.addObject("actDetail", actVO);
		mov.addObject("actStatCd", actStatCd);
		mov.addObject("actTypeCd", actTypeCd);
		mov.addObject("htime", htime);
		mov.addObject("mtime", mtime);
		
		return mov;
	
	}	
	
	@RequestMapping(value = "/actTypeCode", method = RequestMethod.POST)
	@ResponseBody Map<String, Object> actTypeCode(@RequestParam Map<String, String> map) 
	{
		System.out.println("actTypeCode Controller enter ");
		
		List<ActVO> actTypeCd = actService.actTypeCdList();
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("actTypeCd", actTypeCd);
		
		System.out.println("actTypeCode : " + result);
		
		return result;
	}	
	
	@RequestMapping(value = "/actInsert", method = RequestMethod.POST)
	public @ResponseBody int actInsert(ActVO actvo, HttpSession session, HttpServletRequest request)
	{
		actvo.setFst_reg_id(session.getAttribute("user").toString());
		actvo.setStrt_t(actvo.getStrt_t_h() + ":" + actvo.getStrt_t_m());
		actvo.setEnd_t(actvo.getEnd_t_h() + ":" + actvo.getEnd_t_m());
		int result = 0;
		
		System.out.println("actInsert : " + actvo.toString());
		
		result = actService.actInsert(actvo);

		System.out.println("result : " + result);
		
		return result;
		
//		return "redirect:/act";
	}
	
	//영업활동 수정	
	@RequestMapping(value="/actEdit", method= RequestMethod.POST)
	public @ResponseBody int actEdit(ActVO actvo, HttpSession session)
	{
		int result = 0;
		
		System.out.println("actEdit : " + actvo.toString());
		
		actvo.setFin_mdfy_id(session.getAttribute("user").toString());
		
		result = actService.actEdit(actvo);
		
        return result;
	}
	
	//영업활동 수정	
	@RequestMapping(value="/actSchEdit", method= RequestMethod.POST)
	public @ResponseBody int actSchEdit(ActVO actvo, HttpSession session)
	{
		int result = 0;
		
		System.out.println("actSchEdit : " + actvo.toString());
		System.out.println("actSchEdit : " + actvo.getEnd_d());
		
		if(actvo.getEnd_d().equals("undefined-undefined-undefined"))
		{
			actvo.setEnd_d(actvo.getStrt_d()); 
			System.out.println("actSchEdit : " + actvo.getEnd_d());
		}
		actvo.setFin_mdfy_id(session.getAttribute("user").toString());
		
		result = actService.actSchEdit(actvo);
		
		return result;
	}
	
	//삭제된 영업활동 복원
	@RequestMapping(value="/delActRestore", method= RequestMethod.POST)
	public @ResponseBody int delActRestore(ActVO actvo, HttpSession session)
	{
		int result = 0;
		
		System.out.println("delActRestore : " + actvo.toString());
		
		actvo.setFin_mdfy_id(session.getAttribute("user").toString());
		
		result = actService.delActRestore(actvo);
		
        return result;
	}	
	
	//영업활동 삭제	
	@RequestMapping(value = "/actDelete", method = RequestMethod.POST)
	public @ResponseBody int actDelete(HttpSession session, ActVO actvo,
			@RequestParam(value = "actDeleteIdList[]") List<String> actDeleteIdList,
			@RequestParam(value = "pageNum", defaultValue = "1") String pageNum) throws IOException
	{
		int result = 0;
		actvo.setFin_mdfy_id(session.getAttribute("user").toString());
		
		System.out.println("actDelete - sales_actvy_id : " + actDeleteIdList.toString());
		
		for(int i=0; i<actDeleteIdList.size(); i++)
		{
			actvo.setSales_actvy_id(actDeleteIdList.get(i));
			result += actService.actDelete(actvo);
		}
		
		return result;
	}
	
	//삭제된 영업활동 삭제
	@RequestMapping(value = "/delActDelete", method = RequestMethod.POST)
	public @ResponseBody int delActDelete(HttpSession session, ActVO actvo) throws IOException
	{
		int result = 0;
			
		result = actService.delActDelete(actvo);
		
		return result;
	}
	
	//전체리스트 출력 페이징/검색 
	@RequestMapping(value="/actPaging" , method = {RequestMethod.GET, RequestMethod.POST})
	public @ResponseBody Map<String,Object> ActListSearch(HttpSession session, @RequestParam(value = "pageNum", defaultValue = "1") int pageNum,
			String ssale_actvy_strt, String ssale_actvy_strt0, String ssale_actvy_strt1,
			String sactvy_type_select, String sactvy_type_select0, String sactvy_type_select1,
			String ssales_actvy_nm, String ssales_actvy_nm0, String ssales_actvy_nm1,
			String ssales_oppt_nm, String ssales_oppt_nm0, String ssales_oppt_nm1,
			String scust_id, String scust_id0, String scust_id1) throws ParseException{

		Map<String,Object> actMap = new HashMap<String, Object>();
		
		actMap.put("actPageNum", pageNum);
		
		actMap.put("ssale_actvy_strt", ssale_actvy_strt);
		actMap.put("ssale_actvy_strt0", ssale_actvy_strt0);
		actMap.put("ssale_actvy_strt1", ssale_actvy_strt1);
		
		actMap.put("sactvy_type_select", sactvy_type_select);
		actMap.put("sactvy_type_select0", sactvy_type_select0);
		actMap.put("sactvy_type_select1", sactvy_type_select1);
		
		actMap.put("ssales_actvy_nm", ssales_actvy_nm);
		actMap.put("ssales_actvy_nm0", ssales_actvy_nm0);
		actMap.put("ssales_actvy_nm1", ssales_actvy_nm1);
		
		actMap.put("ssales_oppt_nm", ssales_oppt_nm);
		actMap.put("ssales_oppt_nm0", ssales_oppt_nm0);
		actMap.put("ssales_oppt_nm1", ssales_oppt_nm1);

		actMap.put("scust_id", scust_id);
		actMap.put("scust_id0", scust_id0);
		actMap.put("scust_id1", scust_id1);
		
		System.out.println("MAP : " + actMap);
		
		PagerVO page = actService.getActListCount(actMap);
		actMap.put("page", page);
		
		List<ActVO> actList = actService.actAllList(actMap);
		
		System.out.println("List : " + actList);
		
		actMap.put("actList", actList);
		actMap.put("actListSize", actList.size());
		
		return actMap;
	}
	
	//전체리스트 출력 페이징/검색 
	@RequestMapping(value="/delactPaging" , method = {RequestMethod.GET, RequestMethod.POST})
	public @ResponseBody Map<String,Object> delActListSearch(HttpSession session, @RequestParam(value = "pageNum", defaultValue = "1") int pageNum,
			String ssale_actvy_strt, String ssale_actvy_strt0, String ssale_actvy_strt1,
			String sactvy_type_select, String sactvy_type_select0, String sactvy_type_select1,
			String ssales_actvy_nm, String ssales_actvy_nm0, String ssales_actvy_nm1,
			String ssales_oppt_nm, String ssales_oppt_nm0, String ssales_oppt_nm1,
			String scust_id, String scust_id0, String scust_id1) throws ParseException{
		
		Map<String,Object> actMap = new HashMap<String, Object>();
		
		actMap.put("actPageNum", pageNum);
		
//		actMap.put("ssale_actvy_strt", ssale_actvy_strt);
//		actMap.put("ssale_actvy_strt0", ssale_actvy_strt0);
//		actMap.put("ssale_actvy_strt1", ssale_actvy_strt1);
//		
//		actMap.put("sactvy_type_select", sactvy_type_select);
//		actMap.put("sactvy_type_select0", sactvy_type_select0);
//		actMap.put("sactvy_type_select1", sactvy_type_select1);
		
		actMap.put("ssales_actvy_nm", ssales_actvy_nm);
		actMap.put("ssales_actvy_nm0", ssales_actvy_nm0);
		actMap.put("ssales_actvy_nm1", ssales_actvy_nm1);
		
//		actMap.put("ssales_oppt_nm", ssales_oppt_nm);
//		actMap.put("ssales_oppt_nm0", ssales_oppt_nm0);
//		actMap.put("ssales_oppt_nm1", ssales_oppt_nm1);
//		
//		actMap.put("scust_id", scust_id);
//		actMap.put("scust_id0", scust_id0);
//		actMap.put("scust_id1", scust_id1);
		
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
	@RequestMapping(value="/actOpptList" , method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView ActOpptList(HttpSession session, OpptVO opptvo, String cust_id)
	{
		System.out.println("ActOpptList : " + cust_id);
		opptvo.setCust_id(cust_id);
		
		List<OpptVO> actOpptList = actService.actOpptList(opptvo);
		ModelAndView mov = new ModelAndView("/sales/act/actPop/act_oppt_list_pop");
		
		System.out.println("LIST : " + actOpptList);
		System.out.println("LIST : " + actOpptList.toString());
		
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
	
}

//영업활동등록
//@RequestMapping(value = "/actInsert", method = RequestMethod.POST)
//public int actInsert(@ModelAttribute ActVO actvo, HttpSession session, HttpServletRequest request)
//{
//	actvo.setFst_reg_id(session.getAttribute("user").toString());
//	actvo.setStrt_t(actvo.getStrt_t_h() + ":" + actvo.getStrt_t_m());
//	actvo.setEnd_t(actvo.getEnd_t_h() + ":" + actvo.getEnd_t_m());
//	int result = 0;
//	
//	System.out.println("actInsert : " + actvo.toString());
//	
//	if(actvo.getSales_actvy_div_cd().equals("0001"))
//	{
//		result = actService.actInsert(actvo);
//	}
//	if(actvo.getSales_actvy_div_cd().equals("0002"))
//	{
//		result = actService.actInsert(actvo);
//	}
//	
//	System.out.println("result : " + result);
//	
//	return result;
//	
////	return "redirect:/act";
//}

