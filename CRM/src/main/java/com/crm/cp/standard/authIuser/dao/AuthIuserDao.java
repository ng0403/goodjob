package com.crm.cp.standard.authIuser.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.authIuser.vo.AuthIuserVO;

public interface AuthIuserDao {

	public int insert(String root, Object obj);

	public List<Object> selectAll(String root);

	public List<Object> selectAll(String root, Object arg);

	public List<Object> searchList(String root, Map<String, Object> map)
			throws Exception;

	public Map<String, Object> selectOne(String root);

	public int selectCount(String root, Object obj);
	public Object selectOne(String root, Object obj);

	public Map<String, Object> selectOnes(String root, Object obj);

	public int update(String root, Object obj);

	public int delete(String root, Object obj);
	
	public Object authUserDelete(String root, Object obj);

	public Object checkUpdate(String root, Object obj);

	public List<AuthIuserVO> userAuthList(String string, Map<String, Object> map);

	public List<AuthIuserVO> authList(String string, Map<String, Object> map);

}
