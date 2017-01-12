package com.crm.cp.standard.schedule.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crm.cp.standard.schedule.dao.ScheduleDAO;
import com.crm.cp.standard.schedule.vo.ScheduleVO;

@Service("ScheduleService")
public class ScheduleServiceImpl implements ScheduleService{
	
	@Autowired
	ScheduleDAO scheduleDAO;

	@Override
	public Object searchOneRecentSchedule(String userId) {
		Object obj= scheduleDAO.searchOneRecentSchedule("schedule.searchOneRecentSchedule", userId);
		return obj;
	}

	@Override
	public List<Object> searchListSchedule(String userId) {
		
		List<Object> obj = scheduleDAO.searchListSchedule("schedule.searchListSchedule", userId);
		return obj;
		
	}

	@Override
	public List<Object> searchListScheduleCode() {
		
		List<Object> obj = scheduleDAO.searchListScheduleCode("schedule.searchListScheduleCode");
		return obj;
	}

	@Override
	public void insertSchedule(Map jSON) {
		
		scheduleDAO.insertSchedule("schedule.insertSchedule" , jSON);
	}

	@Override
	public Object searchIuserid(String userId) {
		
		Object obj = scheduleDAO.searchIuserid("schedule.searchIuserid", userId);
		return obj;
	}

	@Override
	public void modifySchedule(Map jSON) {
		
		scheduleDAO.modifySchedule("schedule.modifySchedule", jSON);
		
	}

	@Override
	public void deleteSchedule(String schedule_id) {
		
		scheduleDAO.deleteSchedule("schedule.deleteSchedule", schedule_id);
		
	}

	@Override
	public List<Object> searchListByDate(Map map) {
		
		List<Object> obj = scheduleDAO.searchListByDate("schedule.searchListByDate", map);
		return obj;
	}

	@Override
	public List<Object> searchListSchedulebyOneday(Map map) {
		
		List<Object> obj = scheduleDAO.searchListSchedulebyOneday("schedule.searchListSchedulebyOneday", map);
		return obj;
	}

	@Override
	public Object scheduleSearchOne(String schedule_id) {
		
		Object obj = scheduleDAO.schedulesearchone("schedule.schedulesearchone", schedule_id);
		return obj;
	}

	@Override
	public void scheduleModifyOne(Map jSON) {
		scheduleDAO.scheduleModifyOne("schedule.scheduleModifyOne", jSON);
	}

	@Override
	public void scheduleDeleteOne(Map jSON) {
		scheduleDAO.scheduleDeleteOne("schedule.scheduleDeleteOne", jSON);
	}

}
