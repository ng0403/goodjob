package com.crm.cp.sales.contact.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.sales.call.vo.CallVO;
import com.crm.cp.sales.contact.vo.ContactVO;

@Repository
public class ContactDaoImpl implements ContactDao {
	@Autowired
	private SqlSession sqlSession;
	
	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	//전체리스트 개수
		@Override
		public int contactListCount(Map<String, Object> contactMap) {
			int totalCount = 0;
			try {
				totalCount = sqlSession.selectOne("contact.selectTotalCount", contactMap);
			} catch (Exception e) {
				e.printStackTrace();
			}
			
			return totalCount;
		}
	
		//전체리스트 
		@Override
		public List<ContactVO> contactAllList(Map<String, Object> contactMap) {
			List<ContactVO> obj = sqlSession.selectList("contact.selectAll", contactMap);
			return obj;
		}
	
}
