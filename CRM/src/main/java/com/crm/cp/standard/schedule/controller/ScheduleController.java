package com.crm.cp.standard.schedule.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;
import com.crm.cp.standard.schedule.service.ScheduleService;

@Controller
public class ScheduleController {
	
	@Autowired
	ScheduleService scheduleService;
	
	@Resource
	MenuService menuService;
	
	@RequestMapping(value="sch", method=RequestMethod.GET)
	public ModelAndView scheduleListPage(HttpSession session){
		
		if(session.getAttribute("user")==null){
			return new ModelAndView("redirect:/");
		}
		List<MenuVO> menuList = menuService.selectAll(session);
		
		ModelAndView mov = new ModelAndView("scheduleList");
		mov.addObject("menuList", menuList);
		return mov;
		
	}
	
	@RequestMapping(value="/schedulelistpop", method=RequestMethod.GET)
	public ModelAndView scheduleListPopPage(HttpSession session){
		
		if(session.getAttribute("user")==null){
			return new ModelAndView("redirect:/");
		}
		
		String userId= session.getAttribute("user").toString();
		
		List<Object> scheduleList= scheduleService.searchListSchedule(userId);
		
		for(int i =0; i<scheduleList.size();i++){
			Map<String, Object> schedule= (Map<String, Object>) scheduleList.get(i);
			String SCHEDULE_CONT = schedule.get("SCHEDULE_CONT").toString();
			if(SCHEDULE_CONT.length() > 24){
				schedule.replace("SCHEDULE_CONT", SCHEDULE_CONT.toString().substring(0, 24)+"....");
			}
		}
		
		ModelAndView mov = new ModelAndView("/standard/schedule/schedulePopup");
		mov.addObject("schedule", scheduleList);
		return mov;
		
	}

	@RequestMapping(value="/scheduleadd", method=RequestMethod.POST)
	public @ResponseBody List<Object> scheduleAddPreparedData(){
		
		List<Object> code=scheduleService.searchListScheduleCode();
		
		return code;
		
	}
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value="/scheduleInsert", method= RequestMethod.POST)
	public @ResponseBody List<Object> scheduleInsert(@RequestBody List<Object> JSON, HttpSession session) throws ParseException{
		
		String userId = session.getAttribute("user").toString();
		
		Map uid= (Map) scheduleService.searchIuserid(userId);
		String id=uid.get("IUSER_ID").toString();
		
		SimpleDateFormat simpledate = new SimpleDateFormat();
		simpledate.applyLocalizedPattern("yyyy-MM-dd HH:mm");
		
		for(int i=0; i<JSON.size();i++){
			Map map = (Map) JSON.get(i);
			String tdate= map.get("date").toString();
			java.util.Date date = simpledate.parse(tdate);
			
			map.put("fst_reg_id_nm", userId);
			map.put("fin_mdfy_id_nm",userId);
			map.put("iuser_id",id);
			map.put("schedule_dt", date);
			scheduleService.insertSchedule(map);
		}
		
		List<Object> schedule= scheduleService.searchListSchedule(userId);
		return schedule;
		
	}
	
	@RequestMapping(value="/schedulemodify", method=RequestMethod.POST)
	public @ResponseBody List<Object> scheduleModify(HttpSession session, @RequestBody List<Object> JSON) throws ParseException{
		
		String userId = session.getAttribute("user").toString();
		
		SimpleDateFormat simpledate = new SimpleDateFormat();
		simpledate.applyLocalizedPattern("yyyy-MM-dd HH:mm");
		
		for(int i=0; i<JSON.size(); i++){
			Map map= (Map) JSON.get(i);
			
			String tdate= map.get("date").toString();
			java.util.Date date = simpledate.parse(tdate);
			
			map.put("schedule_dt", date);
			map.put("userId", userId);
			scheduleService.modifySchedule(map);
		}
		
		List<Object> schedule= scheduleService.searchListSchedule(userId);
		return schedule;
		
	}
	
	@RequestMapping(value="/scheduledelete", method= RequestMethod.POST)
	public @ResponseBody List<Object> scheduleDelete(HttpSession session, @RequestBody List<Object> JSON){
		
		String userId = session.getAttribute("user").toString();
		
		for(int i=0; i<JSON.size(); i++){
			Map map=(Map) JSON.get(i);
			String schedule_id = map.get("scheduleId").toString();
			scheduleService.deleteSchedule(schedule_id);
		}
		
		List<Object> schedule= scheduleService.searchListSchedule(userId);
		return schedule;
	}
	
	@RequestMapping(value="scheduleCancel", method=RequestMethod.POST)
	public @ResponseBody List<Object> scheduleCancel(HttpSession session){
		
		String userId = session.getAttribute("user").toString();
		List<Object> schedule= scheduleService.searchListSchedule(userId);
		return schedule;
	}
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value="schedulelist", method=RequestMethod.POST)
	public @ResponseBody List<Object> scheduleList(HttpSession session, @RequestBody String tempdate) throws ParseException{
		
		String userId = session.getAttribute("user").toString();
		SimpleDateFormat simpledate = new SimpleDateFormat();
		simpledate.applyLocalizedPattern("yyyy-MM-dd");
		java.util.Date date = simpledate.parse(tempdate);
				
		@SuppressWarnings("rawtypes")
		Map map = new HashMap();
		map.put("date", date);
		map.put("userId", userId);
		
		List<Object> scheduledate = scheduleService.searchListByDate(map);
		return scheduledate;
		
	}
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value="schedulesearchoneday", method=RequestMethod.POST)
	public @ResponseBody Object scheduleSearchOne(@RequestBody String scheduledate, HttpSession session) throws ParseException{
		
		String userId = session.getAttribute("user").toString();
		SimpleDateFormat simpledate = new SimpleDateFormat();
		simpledate.applyLocalizedPattern("yyyy-MM-dd");
		java.util.Date date = simpledate.parse(scheduledate);
		
		@SuppressWarnings("rawtypes")
		Map map = new HashMap();
		map.put("date", date);
		map.put("userId", userId);
		
		List<Object> obj = scheduleService.searchListSchedulebyOneday(map);
		return obj;
	}
	
	@RequestMapping(value="scheduleInsertfromList", method=RequestMethod.POST)
	public @ResponseBody List<Object> scheduleInsertfromList(@RequestBody Map JSON, HttpSession session){
		
		String userId = session.getAttribute("user").toString();
		
		String fulldate = JSON.get("fulldate").toString();
		String fulltime1 = JSON.get("fulltime1").toString();
		String fulltime2 = JSON.get("fulltime2").toString();
		
		//System.out.println("controller : " + fulltime1 + " 시 "+ fulltime2 + " 분");
		
		SimpleDateFormat simpledate = new SimpleDateFormat();
		simpledate.applyLocalizedPattern("yyyy-MM-dd HH:mm");
		Map uid= (Map) scheduleService.searchIuserid(userId);
		String Iuserid=uid.get("IUSER_ID").toString();
			
		try {
			java.util.Date date = simpledate.parse(fulldate+" "+fulltime1 +":"+fulltime2);
			
			Map map = new HashMap();
			map.put("date", date);
			map.put("userId", userId);
			
			JSON.put("iuser_id", Iuserid);
			JSON.put("schedule_dt", date);
			JSON.put("fst_reg_id_nm", userId);
			JSON.put("fin_mdfy_id_nm", userId);
			
			scheduleService.insertSchedule(JSON);
			
			List<Object> obj = scheduleService.searchListByDate(map);
			return obj;
		} catch (ParseException e) {
			e.getStackTrace();
			System.out.println("오류나니?");
			return null;
		}
	}
	
	@RequestMapping(value="schedulesearchone", method=RequestMethod.POST)
	public @ResponseBody Object scheduleSelectOne(@RequestBody String schedule_id, HttpSession session){
		
		Object obj = scheduleService.scheduleSearchOne(schedule_id);
		return obj;
		
	}
	
	@RequestMapping(value="schedulemodifyone", method=RequestMethod.POST)
	public @ResponseBody List<Object> scheduleModifyOne(@RequestBody Map JSON, HttpSession session) throws ParseException{
		
		String userId = session.getAttribute("user").toString();
		
		String sdate= JSON.get("fulldate").toString()+" "+ JSON.get("fulltime1").toString().replace(" ", "")+":"+ JSON.get("fulltime2").toString().replace(" ", "");
		SimpleDateFormat simpledate = new SimpleDateFormat();
		simpledate.applyLocalizedPattern("yyyy-MM-dd HH:mm");
		java.util.Date date = simpledate.parse(sdate);
		
		JSON.put("userId", userId);
		JSON.put("date", date);
		
		scheduleService.scheduleModifyOne(JSON);
		
		List<Object> scheduledate = scheduleService.searchListByDate(JSON);
		return scheduledate;
		
	}
	
	@RequestMapping(value="scheduledeleteone", method=RequestMethod.POST)
	public @ResponseBody List<Object> scheduleDeleteOne(@RequestBody Map JSON, HttpSession session) throws ParseException{
		String userId = session.getAttribute("user").toString();
		
		scheduleService.scheduleDeleteOne(JSON);
		SimpleDateFormat simpledate = new SimpleDateFormat();
		simpledate.applyLocalizedPattern("yyyy-MM-dd");
		java.util.Date date = simpledate.parse(JSON.get("fulldate").toString());
		
		JSON.put("userId", userId);
		JSON.put("date", date);
		
		List<Object> scheduledate = scheduleService.searchListByDate(JSON);
		return scheduledate;
	}
}
