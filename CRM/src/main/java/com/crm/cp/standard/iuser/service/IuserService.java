package com.crm.cp.standard.iuser.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.iuser.vo.IuserVO;
import com.crm.cp.utils.PagerVO;

public interface IuserService {
	
	public List<Object> iuserList();
	public Object iuserOneSelectById(Object userId);
	public Object iuserOneSelectByIdNM(Object id_nm);
	public Object iuserSelectById(String userId);
	public void insertUser(Object user);
	public Object iuserDetail(String temp);
	public void removeIuser(String iuser_id);
	public void iuserEdit(Object obj);
	public List<Object> iuserList(Map<String, Object> map);
	public List<Object> iuserType();
	public List<Object> iuserOrgName();
	public List<Object> iuserAuthName();
	public Object iuserAuthDetail(String temp);
	public List<Object> codeList(Map<String, Object> map);
	public List<Object> orgList(Map<String, Object> map);
	
	//고객사 담당사원 추가
	public int ccMngAdd(IuserVO iuserVo);
	//고객사 담당사원 리스트
	public List<IuserVO> ccMngList(Map<String, String> map);
	public int ccMngUpdate(IuserVO iuserVo);
	public IuserVO ccMngDetail(Map<String, String> map);
	public int custMngDelete(IuserVO iuserVo);
	//사용자관리 삭제된 데이터 리스트 페이지 카운트
	public PagerVO iUserPageCount(Map<String, String> map);
	//사용자관리 삭제된 데이터 리스트 출력
	public List<IuserVO> iUserDelList(Map<String, String> map);
	
}
