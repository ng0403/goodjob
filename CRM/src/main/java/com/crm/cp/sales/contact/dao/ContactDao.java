package com.crm.cp.sales.contact.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO; 

public interface ContactDao {

	public List<ContactVO> contactAllList(Map<String, Object> actMap); 
	public int contactListCount(Map<String, Object> contactMap);
	public ContactVO contactDetail(String cont_id);
	int contactUpdate(ContactVO contactVO);
	int contactInsert(ContactVO contactVO);
	public List<ContactVO> contactSearchAll(Map<String, Object> actMap);
	public int contactDelete(String ke);
	public List<Object> compList();
	int insertKeyman(KeymanVO kVO); // 키맨 추가
	List<KeymanVO> getKeymanList(String cont_id); // 키맨 리스트
	KeymanVO keymanDetail(String cust_id); // 키맨 상세정보
	int deleteKeyman(KeymanVO kVO); // 키맨 수정
	int deleteKeyman(List<String> keyman_idList); // 키맨 삭제

}
