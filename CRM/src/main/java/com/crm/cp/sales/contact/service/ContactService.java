package com.crm.cp.sales.contact.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.utils.PagerVO;


public interface ContactService {
	public List<ContactVO> contactAllList(Map<String,Object> contactMap); 
	public PagerVO ContactListCount(Map<String, Object> contactMap);
	public ContactVO contactDetail(String cont_id);
	String contactUpdate(ContactVO contactVO);
	int contactInsert(ContactVO contactVO);
	public List<ContactVO> contactSearchAll(Map<String,Object> contactMap); 
	public String deleteContact(List<String> contact_idList);
	public List<Object> compList();
	String insertKeyman(KeymanVO kVO); 	
	List<KeymanVO> getKeymanList(String cust_id);
	KeymanVO keymanDetail(String cust_id); 										// 키맨 상세정보
	String mdfyKeyman(KeymanVO kVO);											// 키맨 수정
	String deleteKeyman(List<String> keyman_idList); 							// 키맨 삭제

}
