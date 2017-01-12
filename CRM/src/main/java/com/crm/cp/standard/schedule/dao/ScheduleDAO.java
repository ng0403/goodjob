package com.crm.cp.standard.schedule.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.schedule.vo.ScheduleVO;

public interface ScheduleDAO {

	public Object searchOneRecentSchedule(String root, String userId);
	public List<Object> searchListSchedule(String root, String userId);
	public List<Object> searchListScheduleCode(String root);
	public void insertSchedule(String root, Map jSON);
	public Object searchIuserid(String root, String userId);
	public void modifySchedule(String root, Map jSON);
	public void deleteSchedule(String root, String schedule_id);
	public List<Object> searchListByDate(String root, Map map);
	public List<Object> searchListSchedulebyOneday(String root, Map map);
	public Object schedulesearchone(String root, String schedule_id);
	public void scheduleModifyOne(String root, Map jSON);
	public void scheduleDeleteOne(String root, Map jSON);

}
