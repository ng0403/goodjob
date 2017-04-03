package com.crm.cp.sales.contact.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.crm.cp.sales.contact.dao.ContactDao;
import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.utils.PagerVO;


@Service
public class ContactServiceImpl implements ContactService {
	
	@Resource
	ContactDao contactDao;
	
	
	//전체리스트 
		@Override
		public List<ContactVO> contactAllList(Map<String,Object> contactMap) {
			return contactDao.contactAllList(contactMap);
		}
	 
	//전체리스트 개수 
		@Override
		public PagerVO ContactListCount(Map<String, Object> contactMap) {
			int actPageNum = (Integer) contactMap.get("contactPageNum");
			// 현재 페이지 얻어오기
			PagerVO page = new PagerVO(actPageNum, 0, 4, 10);
			// 전체 글의 갯수 구하기
			int totalRowCount = contactDao.contactListCount(contactMap);
					
			page = new PagerVO(actPageNum, totalRowCount, 4, 10);
		
			return page;
		}
 

}
