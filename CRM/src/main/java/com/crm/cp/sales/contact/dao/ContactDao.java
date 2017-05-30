package com.crm.cp.sales.contact.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.utils.PagerVO; 

public interface ContactDao {

	public List<ContactVO> contactAllList(Map<String, Object> actMap); //연락처 리스트
	
	public List<ContactVO> contactDeleteList(Map<String, Object> actMap); //삭제된 리스트
	
	List<ContactVO> getList(Map<String,String> map);
 	int selectCompany(String COMPANY_NM);
	

	public int contactListCount(Map<String, Object> contactMap); 	//연락처 리스트 갯수 구하기.
	public int ContactDeleteListCount(Map<String, Object> contactMap);
	
	
	
	public ContactVO contactDetail(String cont_id); //연락처 상세보기
	public void contactRecovery(ContactVO co); // 연락처 복구
	
	int contactDelete(ContactVO vo); // 연락처 삭제
	
	
	int contactUpdate(ContactVO contactVO);
	int contactInsert(ContactVO contactVO);
	public List<ContactVO> contactSearchAll(Map<String, Object> actMap);
/*	public int contactDelete(String ke);*/
	public List<Object> compList();
	int insertKeyman(KeymanVO kVO); // 키맨 추가
	List<KeymanVO> getKeymanList(String cont_id); // 키맨 리스트
	/*KeymanVO keymanDetail(String cust_id);*/ // 키맨 상세정보
	KeymanVO keymanDetail(Map<String, Object> map); // 키맨 상세정보 
	int mdfyKeyman(KeymanVO kVO); // 키맨 수정
	/*int deleteKeyman(List<String> keyman_idList);*/ // 키맨 삭제
	int deleteKeyman(KeymanVO kVO); 	// 키맨 삭제

	List<OpptVO> getOpptList(String cont_id); // 영업기회 리스트
	OpptVO ccOpptDetail(String sales_oppt_id); // 영업기회 상세정보
	List<OpptVO> opptOscList(); 	//영업기회 상태코드 가져오기 
	List<OpptVO> opptOtlList();		//영업기회단계 코드 가져오기
	OpptVO ccOpptCustDetail(String cust_id); // 영업기회 팝업 고객정보 가져오기
	List<KeymanVO> selectKeyman(String cont_id);		 // 영업기회 키맨팝업 정보 가져오기
	List<OpptVO> selectOppt(String cont_id);		 // 영업활동 영업기회팝업 정보 가져오기
	int opptAddcontact(OpptVO add);							//영업기회 추가
 	int opptModifycontact(OpptVO detail); 	//영업기회 수정 
	int deleteOpptcontact(List<String> oppt_idList); // 영업기회 삭제
    int addOpptStepcontact(OpptVO add);		//영업기회단계 추가
	List<ActVO> actListcontact(String cont_id); //영업활동 리스트 
	int actEditcontact(ActVO actvo);// 영업활동 수정
 	int deleteopptActivecontact(List<String> keyman_idList); // 키맨 삭제
	int opptAdd(OpptVO add);	//영업기회 추가
	 List<OpptVO> opptPrdtDetail(String sales_oppt_id);	//영업기회별 상품 상세정보 출력


	 ContactVO getContid(ContactVO contactVO);
	 ContactVO getCustid(String COMPANY_NM);

}
