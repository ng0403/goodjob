package com.crm.cp.sales.contact.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.contact.vo.ContactVO; 

public interface ContactDao {

	public List<ContactVO> contactAllList(Map<String, Object> actMap); 
	public int contactListCount(Map<String, Object> contactMap);
	public ContactVO contactDetail(String cont_id);
	int contactUpdate(ContactVO contactVO);
	int contactInsert(ContactVO contactVO);
	public List<ContactVO> contactSearchAll(Map<String, Object> actMap);

}
