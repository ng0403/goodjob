package com.crm.cp.standard.iuser.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.iuser.vo.IuserVO;

public interface IuserDao {

	public int insert(String root, Object obj);

	public List<Object> selectAll(String root);

	public List<Object> selectAll(String root, Object arg);

	public List<Object> searchList(String root, Map<String, Object> map)
			throws Exception;

	public Map<String, Object> selectOne(String root);

	public Object selectOne(String root, Object obj);

	public Map<String,Object> selectOnes(String root, Object obj);

	public int update(String root, Object obj);

	public int delete(String root, Object obj);
	
	public Object authUserDelete(String root, Object obj);

	public Object checkUpdate(String root, Object obj);
	
	//고객사 담당직원 추가
	public int ccMngAdd(IuserVO iuserVo);

	//고객사 담당사원 리스트
	public List<IuserVO> ccMngList(Map<String, String> map);

	public int ccMngUpdate(IuserVO iuserVo);

	public IuserVO ccMngDetail(Map<String, String> map);

	public int custMngDelete(IuserVO iuserVo);

	//삭제된 사용자 리스트 페이지 카운트
	public int iuserDelPageCount(Map<String, String> map);

	//삭제된 사용자 리스트
	public List<IuserVO> iUserDelList(Map<String, String> map);

}
