package com.crm.cp.sales.keyman.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
 
@Repository
public class KeymanDaoImpl implements KeymanDao {
	
	@Autowired
	private SqlSession sqlSession;
	
	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	//전체리스트 개수
			@Override
			public int keymanListCount(Map<String, Object> keymanMap) {
				System.out.println("contact Map Dao "  + keymanMap.toString());
				int totalCount = 0;
				try {
					totalCount = sqlSession.selectOne("kman.selectTotalCount", keymanMap);
					 
				} catch (Exception e) {
					e.printStackTrace();
				}
				
				return totalCount;
			}
			//전체리스트 
			@Override
			public List<KeymanVO> keymanAllList(Map<String, Object> keymanMap) {
				List<KeymanVO> obj = sqlSession.selectList("kman.selectAll", keymanMap);
				return obj;
			}

			@Override
			public KeymanVO keymanDetail(KeymanVO vo) {
				 
				return sqlSession.selectOne("keymanDetail", vo);
			}

			@Override
			public int keymanUpdate(KeymanVO keymanVO) {
				 
				return sqlSession.update("kman.keymanUpdate", keymanVO);
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
			
			// 키맨 삭제
			@Override
			public int KeymanDelete(KeymanVO kVO) {
				int	deleteResultTemp = 0;
				int deleteResult = 0;
				try {
		/*			for (int i = 0; i < keyman_idList.size(); i++) {
						deleteResultTemp = sqlSession.update("keymanDelete", keyman_idList.get(i));
						deleteResult += deleteResultTemp;
					}*/
						deleteResultTemp = sqlSession.delete("kman.keymanDelete", kVO);
						deleteResult += deleteResultTemp;
				
					
				} catch (Exception e) {
					e.printStackTrace();
				}
				return deleteResult;
			}			
			
			//검색 갯수
			@Override
			public int keymanSearchCount(Map<String, Object> contactMap) {
				System.out.println("keyman Map Dao "  + contactMap.toString());
				int totalCount = 0;
				try {
					totalCount = sqlSession.selectOne("kman.selectSearchCount", contactMap);
					 
				} catch (Exception e) {
					e.printStackTrace();
				}
				
				return totalCount;
			}	 
			
			//초성검색
			@Override
			public List<KeymanVO> keymanSearchAll(Map<String, Object> contactMap) {
				System.out.println("초성 검색 dao");
				List<KeymanVO> obj = sqlSession.selectList("kman.selectAll", contactMap);
				System.out.println("초성 obj? " + obj.toString());
				return obj;
			}
			
			//연락처 리스트 팝업
			@Override
			public List<Object> contactListPop(Map<String, Object> map) {
				// TODO Auto-generated method stub
				return sqlSession.selectList("kman.contactListPopup", map);
			}
			
			
			
}
