package com.crm.cp.standard.schedule.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.standard.schedule.vo.ScheduleVO;

@Repository("ScheduleDao")
public class ScheduleDaoImpl implements ScheduleDAO{
	
	@Autowired
	private SqlSession sqlSession;

	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	@Override
	public Object searchOneRecentSchedule(String root, String userId) {
		Object obj= sqlSession.selectOne(root, userId);
		return obj;
	}

	@Override
	public List<Object> searchListSchedule(String root, String userId) {
		List<Object> obj = sqlSession.selectList(root, userId);
		return obj;
	}

	@Override
	public List<Object> searchListScheduleCode(String root) {
		
		List<Object> obj = sqlSession.selectList(root);
		return obj;
	}

	@Override
	public void insertSchedule(String root, Map jSON) {
		
		sqlSession.insert(root, jSON);
		
	}

	@Override
	public Object searchIuserid(String root, String userId) {
		
		Object obj= sqlSession.selectOne(root, userId);
		return obj;
		
	}

	@Override
	public void modifySchedule(String root, Map jSON) {
		
		sqlSession.update(root, jSON);
		
	}

	@Override
	public void deleteSchedule(String root, String schedule_id) {
		
		sqlSession.update(root, schedule_id);
		
	}

	@Override
	public List<Object> searchListByDate(String root, Map map) {
		
		List<Object> obj= sqlSession.selectList(root, map);
		return obj;
		
	}

	@Override
	public List<Object> searchListSchedulebyOneday(String root, Map map) {
		List<Object> obj = sqlSession.selectList(root, map);
		return obj;
	}

	@Override
	public Object schedulesearchone(String root, String schedule_id) {
		Object obj = sqlSession.selectOne(root, schedule_id);
		return obj;
	}

	@Override
	public void scheduleModifyOne(String root, Map jSON) {
		sqlSession.update(root, jSON);
	}

	@Override
	public void scheduleDeleteOne(String root, Map jSON) {
		sqlSession.update(root, jSON);
	}

}
