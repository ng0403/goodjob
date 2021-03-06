package com.crm.cp.sales.contact.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
 import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.utils.PagerVO;


public interface ContactService {
	public List<ContactVO> contactAllList(Map<String,Object> contactMap); //연락처 리스트.

	public List<ContactVO> contactDeleteList(Map<String,Object> contactMap); //연락처 삭제된 리스트 

	
	public PagerVO ContactListCount(Map<String, Object> contactMap); // 연락처 리스트갯수 
	public PagerVO ContactSearchCount(Map<String, Object> kwMap); // 검색 리스트 갯수 
	public PagerVO ContactDeleteListCount(Map<String, Object> contactMap); // 연락처 삭제 리스트 갯수
	
    List<ContactVO> getList(Map<String,String> map); //기업의 전체 리스트가져오기
     
 	int selectCompany(String COMPANY_NM);
 	
	public ContactVO contactDetail(String cont_id); //연락처 상세보기
	
	public void contactRecovery(ContactVO co); //연락처 복구
	
	int contactDelete(ContactVO vo); // 연락처 삭제
	
	
	String contactUpdate(ContactVO contactVO);
	int contactInsert(ContactVO contactVO);
	public List<ContactVO> contactSearchAll(Map<String,Object> contactMap); 
	/*public String deleteContact(List<String> contact_idList);*/
	public List<Object> compList();
	String insertKeyman(KeymanVO kVO); 	
	List<KeymanVO> getKeymanList(String cust_id);
	/*KeymanVO keymanDetail(String cust_id); */										// 키맨 상세정보
	KeymanVO keymanDetail(Map<String, Object> map); 								//키맨 상세정보
	String mdfyKeyman(KeymanVO kVO);											// 키맨 수정
/*	String deleteKeyman(List<String> keyman_idList); 							// 키맨 삭제
*/	String deleteKeyman(KeymanVO kVO); 							// 키맨 삭제

	List<OpptVO> getOpptList(String cont_id);									// 영업기회 리스트 
	OpptVO ccOpptDetail(String sales_oppt_id); 									// 영업기회 상세정보 
	List<OpptVO> opptOscList(); 												//영업기회 상태코드 가져오기
	List<OpptVO> opptOtlList();													//영업기회단계 코드 가져오기
	OpptVO ccOpptCustDetail(String cust_id); 									// 영업기회 팝업 고객정보 가져오기
	List<KeymanVO> selectKeyman(String cont_id);								// 영업기회 키맨팝업 정보 가져오기
	int opptAddcontact(OpptVO add);												//영업기회 추가
	int opptModifycontact(OpptVO detail);										//영업기회 수정 
	String deleteOpptcontact(List<String> oppt_idList); 						// 영업기회 삭제
	int addOpptStepcontact(OpptVO add);											//영업기회 단계 리스트 추가
	List<ActVO> actListcontact(String cont_id);								    //영업활동 리스트
	String actEditcontact(ActVO actvo);											//영업활동 수정
	String deleteopptActivecontact(List<String> chked_val); 				    // 영업활동 삭제
	List<OpptVO> selectOppt(String cont_id);								// 영업활동 영업기회 팝업 정보 가져오기. 
	int opptAdd(OpptVO add);	//영업기회 추가
    List<OpptVO> opptPrdtDetail(String sales_oppt_id);                    	//영업기회별 상품 상세정보

    
    ContactVO getContid(ContactVO contactVO);
    ContactVO getCustid(String COMPANY_NM);

	public void removeAbsol(String cont_id); // 연락처 완전삭제

	
    
    
    
     
}
