package com.crm.cp.sales.keyman.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
 
public interface KeymanDao {

	public List<KeymanVO> keymanAllList(Map<String, Object> keymanMap); //키맨 리스트
	public int keymanListCount(Map<String, Object> keymanMap); 	//키맨 리스트 갯수 구하기.
	public KeymanVO keymanDetail(KeymanVO vo); //키맨 상세보기
	int keymanUpdate(KeymanVO keymanVO); //키맨 수정하기.
	int insertKeyman(KeymanVO kVO); // 키맨 추가
	int KeymanDelete(KeymanVO kVO); 	// 키맨 삭제
	
	
	public int keymanSearchCount(Map<String, Object> contactMap); //검색 리스트 갯수
	public List<KeymanVO> keymanSearchAll(Map<String, Object> actMap); // 초성 검색
	
	List<Object> contactListPop(Map<String, Object> map); 	//연락처 리스트 팝업


}
