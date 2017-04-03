package com.crm.cp.sales.contact.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.utils.PagerVO;


public interface ContactService {
	public List<ContactVO> contactAllList(Map<String,Object> contactMap); 
	public PagerVO ContactListCount(Map<String, Object> contactMap);

}
