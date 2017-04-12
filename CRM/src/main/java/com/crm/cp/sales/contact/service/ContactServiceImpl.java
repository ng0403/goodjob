package com.crm.cp.sales.contact.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.contact.dao.ContactDao;
import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
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
			System.out.println("초성 service");
			return contactDao.contactSearchAll(contactMap);
		}
		
		
	
		
		//연락처  삭제
		@Override
		public String deleteContact(List<String> contact_idList) {
			System.out.println("contact_idList : " + contact_idList.get(0));
			
			int deleteResult=0;
			System.out.println("contact_idsize" + contact_idList.size());
			
			for(int i=0; i<contact_idList.size(); i++){
				String cont_id = contact_idList.get(i).substring(0,2);
				System.out.println("cont_id service?" + cont_id.toString());
				if(cont_id.equalsIgnoreCase("CO")){
					deleteResult += contactDao.contactDelete(contact_idList.get(i)); 
			}
			}
			String resultStr = null;
			if(deleteResult == contact_idList.size()){
				resultStr = "연락처 삭제가 완료 되었습니다.";
			} else {
				resultStr = "연락처 삭제가 실패 했습니다.";
			}
			return resultStr;
		}
	  
		// 회사명리스트
		@Override
		public List<Object> compList() {
			return contactDao.compList();
		}
		
		// 키맨 추가
		@Override
		public String insertKeyman(KeymanVO kVO) {
			int kmRst = contactDao.insertKeyman(kVO);
			
			String kmRstStr = null;
			if(kmRst == 1){
				kmRstStr = "새로운 키맨 등록이 완료되었습니다.";
			}else {
				kmRstStr = "키맨 등록에 실패했습니다.";
			}
			return kmRstStr;
		}
		
		// 키맨 리스트
		@Override
		public List<KeymanVO> getKeymanList(String cont_id) {
			List<KeymanVO> kmVOList = contactDao.getKeymanList(cont_id);
			return kmVOList;
		}
		
		// 키맨 상세정보
		@Override
		public KeymanVO keymanDetail(String cust_id) {
			KeymanVO kmVO = contactDao.keymanDetail(cust_id);
			return kmVO;
		}
		// 키맨 수정
		@Override
		public String mdfyKeyman(KeymanVO kVO) {
			int mdfyResult = contactDao.deleteKeyman(kVO);
			String resultStr = null;
			if(mdfyResult == 1){
				resultStr = "키맨 수정이 완료 되었습니다.";
			} else {
				resultStr = "키맨 수정에 실패 했습니다.";
			}
			return resultStr;
		}
		
		// 키맨 삭제
		@Override
		public String deleteKeyman(List<String> keyman_idList) {
			int deleteResult = contactDao.deleteKeyman(keyman_idList);
			String resultStr = null;
			if(deleteResult == keyman_idList.size()){
				resultStr = "키맨 삭제가 완료 되었습니다.";
			} else {
				resultStr = "키맨 삭제에 실패 했습니다.";
			}
			return resultStr;
		}
		
		// 영업기회 리스트
		@Override
		public List<OpptVO> getOpptList(String cont_id) {
			List<OpptVO> opptVOList = contactDao.getOpptList(cont_id);
			return opptVOList;
		}
		
		// 영업기회 상세정보
		@Override
		public OpptVO ccOpptDetail(String sales_oppt_id) {
			OpptVO opptVO = contactDao.ccOpptDetail(sales_oppt_id);
			return opptVO;
		}
		
		//영업기회 상태코드 가져오기 
		@Override
		public List<OpptVO> opptOscList() {
			// TODO Auto-generated method stub
			return contactDao.opptOscList();
		}
		
		 //영업기회단계 코드 가져오기 
		@Override
		public List<OpptVO> opptOtlList() {
			// TODO Auto-generated method stub
			return contactDao.opptOtlList();
		}

		// 영업기회 팝업 고객정보 가져오기
		@Override
		public OpptVO ccOpptCustDetail(String cust_id) {
			OpptVO opptVO = contactDao.ccOpptCustDetail(cust_id);
			return opptVO;
		}

		@Override
		public List<KeymanVO> selectKeyman(String cont_id) {
			List<KeymanVO> kmVOList = contactDao.selectKeyman(cont_id);
			
			return kmVOList;
		}
		
		//영업기회 추가
		@Override
		public int opptAddcontact(OpptVO add) {
			// TODO Auto-generated method stub
			return contactDao.opptAddcontact(add);
		}
		//영업기회단계 추가
		@Override
		public int addOpptStepcontact(OpptVO add) {
			System.out.println("add : " + add);
			return contactDao.addOpptStepcontact(add);
		}
		//영업기회 수정
		@Override
		public int opptModifycontact(OpptVO detail) {
			// TODO Auto-generated method stub
			return contactDao.opptModifycontact(detail);
		}
		
		// 영업기회 삭제
		@Override
		public String deleteOpptcontact(List<String> oppt_idList) {
			int deleteResult = contactDao.deleteOpptcontact(oppt_idList);
			String resultStr = null;
			if(deleteResult == oppt_idList.size()){
				resultStr = "영업기회 삭제가 완료 되었습니다.";
			} else {
				resultStr = "영업기회 삭제에 실패 했습니다.";
			}
			return resultStr;
		}
		
		
		//영업활동 리스트
		@Override
		public List<ActVO> actListcontact(String cont_id) {
			// TODO Auto-generated method stub
			return contactDao.actListcontact(cont_id);
		}
		
		//영업활동 수정
		@Override
		public String actEditcontact(ActVO actvo) {
			int mdfyResult = contactDao.actEditcontact(actvo); 
			String resultStr = null;
			if(mdfyResult == 1){
				resultStr = "키맨 수정이 완료 되었습니다.";
			} else {
				resultStr = "키맨 수정에 실패 했습니다.";
			}
			return resultStr;
		}
		
		@Override
		public String deleteopptActivecontact(List<String> chked_val) {
			int deleteResult = contactDao.deleteopptActivecontact(chked_val);
			String resultStr = null;
			if(deleteResult == chked_val.size()){
				resultStr = "키맨 삭제가 완료 되었습니다.";
			} else {
				resultStr = "키맨 삭제에 실패 했습니다.";
			}
			return resultStr;
		}

}
