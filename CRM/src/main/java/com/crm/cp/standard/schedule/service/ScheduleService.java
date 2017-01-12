package com.crm.cp.standard.schedule.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.schedule.vo.ScheduleVO;

public interface ScheduleService {

	public Object searchOneRecentSchedule(String userId);
	public List<Object> searchListSchedule(String userId);
	public List<Object> searchListScheduleCode();
	public void insertSchedule(Map jSON);
	public Object searchIuserid(String userId);
	public void modifySchedule(Map map);
	public void deleteSchedule(String schedule_id);
	public List<Object> searchListByDate(Map map);
	public List<Object> searchListSchedulebyOneday(Map map);
	public Object scheduleSearchOne(String schedule_id);
	public void scheduleModifyOne(Map jSON);
	public void scheduleDeleteOne(Map jSON);

}
