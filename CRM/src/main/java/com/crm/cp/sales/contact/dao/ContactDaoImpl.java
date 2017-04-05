package com.crm.cp.sales.contact.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

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
		
		//연락처 상세정보
		@Override
		public ContactVO contactDetail(String cont_id) {
			ContactVO contactVO=null;
			contactVO =sqlSession.selectOne("contact.contactOneDetail", cont_id);
			return contactVO;
		}
		
		
		//연락처 수정
		@Override
		public int contactUpdate(ContactVO contactVO) {
			int contactUpdate = 0;
			try {
				contactUpdate = sqlSession.update("contactUpdate", contactVO);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return contactUpdate;
		}
		
		
		// 연락처 추가
		@Override
		public int contactInsert(ContactVO contactVO) {
 			System.out.println("contactInsertInsert Dao" + contactVO.toString());
 			int contactInsert = 0;
 			
 					try {
 			contactInsert = sqlSession.insert("contact.contactInsert", contactVO);
 					}
 			catch(Exception e){ 
				e.printStackTrace();

 			}
 			System.out.println("int" + contactInsert);
 			
 			return contactInsert;
			 
		}
		
		
		//초성검색
		@Override
		public List<ContactVO> contactSearchAll(Map<String, Object> contactMap) {
			List<ContactVO> obj = sqlSession.selectList("contact.selectAll", contactMap);
			return obj;
		}
	
}
