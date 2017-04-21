package com.crm.cp.standard.iuser.dao;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.standard.iuser.vo.IuserVO;

@Repository
public class IuserDaoImpl implements IuserDao {

	@Autowired
	private SqlSession sqlSession;

	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	@Override
	public int insert(String root, Object obj) {
		
		int result = sqlSession.insert(root, obj);
		return result;
	}

	@Override
	public Object selectOne(String root, Object obj) {

		try {

			Object result = sqlSession.selectOne(root, obj);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}

	}

	@Override
	public List<Object> selectAll(String root) {

		List<Object> obj = sqlSession.selectList(root);
		return obj;

	}

	@Override
	public int update(String root, Object obj) {

		int result = sqlSession.update(root, obj);
		return result;
	}

	@Override
	public int delete(String root, Object obj) {

		int result = sqlSession.delete(root, obj);
		return result;
	}

	@Override
	public Object checkUpdate(String root, Object obj) {
		
		Object arg = sqlSession.update(root, obj);
		
		return arg;
		
	}
	
	@Override
	public List<Object> searchList(String root, Map<String, Object> map)
			throws Exception {
		List<Object> lists = null;
		try {
			lists = (List<Object>)sqlSession.selectList(root, map);
		} catch (Exception e) {
			System.out.println(e.toString());
			
			throw e;
		}		
		return lists;
	}

	@Override
	public Map<String, Object> selectOne(String root) {
		try {

			Map<String, Object> result = sqlSession.selectOne(root);
			return result;
		} catch (Exception e) {
			return null;
		}
	}
	
	@Override
	public Map<String,Object> selectOnes(String root, Object obj) {
		try {

			Map<String,Object> result = sqlSession.selectOne(root, obj);
			return result;
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public List<Object> selectAll(String root, Object arg) {
		List<Object> obj = sqlSession.selectList(root, arg);
		return obj;
	}
	
	@Override
	public Object authUserDelete(String root, Object obj) {
		Object arg = sqlSession.delete(root, obj);
		return arg;
	}
	
	@Override
	public int ccMngAdd(IuserVO iuserVo) {
		int result =sqlSession.insert("user.ccMngAdd", iuserVo);
		return result;
	}

	@Override
	public List<IuserVO> ccMngList(Map<String, String> map) {
		return sqlSession.selectList("user.ccMngList", map);
	}

	@Override
	public int ccMngUpdate(IuserVO iuserVo) {
		// TODO Auto-generated method stub
		int result = sqlSession.update("user.ccMngUpdate", iuserVo);
		return result;
	}

	@Override
	public IuserVO ccMngDetail(Map<String, String> map) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("user.ccMngDetail", map);
	}

	@Override
	public int custMngDelete(IuserVO iuserVo) {
		// TODO Auto-generated method stub
		int result = sqlSession.delete("user.ccMngDelete", iuserVo);
		return result;
	}	


}
