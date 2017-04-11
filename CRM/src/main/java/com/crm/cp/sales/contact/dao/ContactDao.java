package com.crm.cp.sales.contact.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.sales.oppt.vo.OpptVO; 

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
	List<OpptVO> getOpptList(String cont_id); // 영업기회 리스트
	List<OpptVO> opptOscList(); 	//영업기회 상태코드 가져오기 
	List<OpptVO> opptOtlList();		//영업기회단계 코드 가져오기
	OpptVO ccOpptCustDetail(String cust_id); // 영업기회 팝업 고객정보 가져오기
	List<KeymanVO> selectKeyman(String cont_id);		 // 영업기회 키맨팝업 정보 가져오기
	int opptAddcontact(OpptVO add);							//영업기회 추가
    int addOpptStepcontact(OpptVO add);		//영업기회단계 추가
	List<ActVO> actListcontact(String cont_id); //영업활동 리스트 
 	int deleteopptActivecontact(List<String> keyman_idList); // 키맨 삭제


}
