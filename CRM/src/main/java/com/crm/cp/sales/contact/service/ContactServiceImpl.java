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
		
		//상세정보
		@Override
		public ContactVO contactDetail(String cont_id) {
			return contactDao.contactDetail(cont_id);
		}
 
		
		@Override
		public String contactUpdate(ContactVO contactVO) {
			int contactUpdate = contactDao.contactUpdate(contactVO);// 여기서 가져온 값을 판별하여 
			String contResult = null;
			if(contactUpdate == 1) {
				contResult = "계약 수정에 성공했습니다.";
			} else {
				contResult = "계약 수정에 실패했습니다.";
			}
			return contResult;//요기서 반환한 값을 컨트롤이 받는다.
		}
		
		@Override
		public int contactInsert(ContactVO contactVO) {
			System.out.println("cont insert entering service " + contactVO.toString());
			int contactInsert = contactDao.contactInsert(contactVO);// 여기서 가져온 값을 판별하여
  			
			 return contactInsert;
		}
		
		
		//초성검색
		@Override
		public List<ContactVO> contactSearchAll(Map<String,Object> contactMap){
			return contactDao.contactSearchAll(contactMap);
		}

}
