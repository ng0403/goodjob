package com.crm.cp.sales.contact.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.sales.oppt.vo.OpptVO;

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
			System.out.println("초성 obj? " + obj.toString());
			return obj;
		}
		
		
		//연락처 삭제
		@Override
		public int contactDelete(String ke) {
			int delResult = 0;
			System.out.println( "ke??" + ke);
			try {
				delResult = sqlSession.update("contact.contactDelete", ke);
		
			} catch (Exception e) {
				e.printStackTrace();
			}
			return delResult;
		}
		
		// 회사명리스트
		@Override
		public List<Object> compList() {
			List<Object> obj = sqlSession.selectList("contact.custcompPopList");
			return obj;
		}
		
		
		// 키맨 추가
		@Override
		public int insertKeyman(KeymanVO kVO) {
			System.out.println("keyman add dao " + kVO.toString());
			int rstKm = 0;
			try {
				rstKm = sqlSession.insert("addKeymancontact", kVO);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return rstKm;
		}
		
		
		// 키맨 리스트 가져오기
		@Override
		public List<KeymanVO> getKeymanList(String cont_id) {
			List<KeymanVO> kmVOList = null;
			try {
				kmVOList = sqlSession.selectList("keymanListcontact", cont_id);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return kmVOList;
		}
		
		// 키맨 상세정보
		@Override
		public KeymanVO keymanDetail(String cust_id) {
			KeymanVO kmVO = null;
			try {
				kmVO = sqlSession.selectOne("kmDetailcontact", cust_id);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return kmVO;
		}
		
		// 키맨 수정
		@Override
		public int deleteKeyman(KeymanVO kVO) {
			int rstKm = 0;
			try {
				rstKm = sqlSession.update("contact.mdfyKeymancontact", kVO);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return rstKm;
		}

		
		// 키맨 삭제
		@Override
		public int deleteKeyman(List<String> keyman_idList) {
			int	deleteResultTemp = 0;
			int deleteResult = 0;
			try {
				for (int i = 0; i < keyman_idList.size(); i++) {
					deleteResultTemp = sqlSession.delete("keymanDeletecontact", keyman_idList.get(i));
					deleteResult += deleteResultTemp;
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
			return deleteResult;
		}
		
		// 영업기회 리스트 가져오기
		@Override
		public List<OpptVO> getOpptList(String cont_id) {
			List<OpptVO> opptVOList = null;
			try {
				opptVOList = sqlSession.selectList("ccOpptListcontact", cont_id);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return opptVOList;
		}
		
		//영업기회 상태코드 가져오기
		@Override
		public List<OpptVO> opptOscList() {
			// TODO Auto-generated method stub
			return sqlSession.selectList("contact.osclist");
		}
		
		 //영업기회단계 코드 가져오기
		@Override
		public List<OpptVO> opptOtlList() {
			// TODO Auto-generated method stub
			return sqlSession.selectList("contact.otllist");
		} 
		
		// 영업기회 고객정보 가져오기
		@Override
		public OpptVO ccOpptCustDetail(String cust_id) {
			OpptVO opptVO = null;
			try {
				opptVO = sqlSession.selectOne("contact.ccOpptCustDetail", cust_id);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return opptVO;
		}
		
		//영업기회 키맨 정보 가져오기
		@Override
		public List<KeymanVO> selectKeyman(String cont_id) {
			System.out.println("keyman hi dao " + cont_id);
			List<KeymanVO> kmVOList = null;
			try {
				kmVOList = sqlSession.selectList("selectKeyman", cont_id);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return kmVOList;
		}
		
		//영업기회 추가
		@Override
		public int opptAddcontact(OpptVO add) {
			// TODO Auto-generated method stub
			System.out.println("영업기회 add " + add.toString());
			int seq = sqlSession.insert("contact.opptAddcontact", add);
			return seq;
		}
		//영업기회단계 추가
		@Override
		public int addOpptStepcontact(OpptVO add) {
			System.out.println("add123 : " + add.toString());
			int seq = sqlSession.insert("contact.addOpptStepcontact", add);
			System.out.println("seq : " + seq);
			return seq;
		}
		
		//영업활동 리스트
		@Override
		public List<ActVO> actListcontact(String cont_id) {
			// TODO Auto-generated method stub
			System.out.println("enter actListcontact daoo");
			return sqlSession.selectList("contact.actListcontact", cont_id);
		}

		// 영업활동 삭제
				@Override
				public int deleteopptActivecontact(List<String> chked_val) {
					int	deleteResultTemp = 0;
					int deleteResult = 0;
					try {
						for (int i = 0; i < chked_val.size(); i++) {
							deleteResultTemp = sqlSession.update("deleteopptActivecontact", chked_val.get(i));
							deleteResult += deleteResultTemp;
						}
					} catch (Exception e) {
						e.printStackTrace();
					}
					return deleteResult;
				}

}
