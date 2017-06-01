package com.crm.cp.standard.iuser.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.crm.cp.standard.iuser.dao.IuserDao;
import com.crm.cp.standard.iuser.vo.IuserVO;
import com.crm.cp.utils.PagerVO;



@Service
public class IuserServiceImpl implements IuserService{
	
	@Resource
	IuserDao dao;

	@Override
	public List<Object> iuserList() {
		
		List<Object> list =dao.selectAll("user.userSelect");
		return list;
	}

	@Override
	public void insertUser(Object user) {
		System.out.println("insertUser user : " + user);
		dao.insert("user.iuserInsert", user);
	}

	@Override
	public Object iuserDetail(String temp) {
		Object iuser = (Object)dao.selectOne("user.iuserDetail",temp);
		return iuser;
	}
	
	//사용자리스트 삭제
	@Override
	public void removeIuser(String iuser_id) {
		System.out.println("삭제될 대상 iuser_id : " + iuser_id);
		dao.checkUpdate("user.iuserDelete", iuser_id);
		
	}

	@Override
	public void iuserEdit(Object obj) {
		dao.checkUpdate("user.iuserEdit", obj);
//		dao.checkUpdate("user.iuserAuthEdit", obj);
	}

	
	//사용자 리스트 조회
	@Override
	public List<Object> iuserList(Map<String, Object> map) {
       
		List<Object> list=null;
		
		try{
			list=dao.searchList("user.userSelect", map);
		} catch(Exception e) {
			System.out.println(e.toString());
		}
		
		return list;
	}

	@Override
	public List<Object> iuserType() {
		List<Object> typeList = dao.selectAll("user.iuserTypeSelect");
		return typeList;
	}

	@Override
	public List<Object> iuserOrgName() {
		List<Object> orgName = dao.selectAll("user.iuserOrgSelect");
		return orgName;
	}

	@Override
	public List<Object> iuserAuthName() {
		List<Object> authName = dao.selectAll("user.iuserAuthSelect");
		return authName;
	}
	
	@Override
	public Object iuserAuthDetail(String temp) {

		Object obj = dao.selectOne("iuserAuth.userAuthSelect", temp);
		return obj;
		
	}

	//사용자 리스트 사용자 상세정보 조회
	@Override
	public Object iuserSelectById(String userId) {
		System.out.println("iuserSelectById Service : " + userId);
		Object obj = dao.selectOne("user.iuserSelectById", userId);
		System.out.println("iuserSelectById Service result : " + obj);
		return obj;
	}
	
	@Override
	public List<Object> codeList(Map<String, Object> map) {
		List<Object> codeList = dao.selectAll("user.codeSelect", map);
		return codeList;
	}

	@Override
	public List<Object> orgList(Map<String, Object> map) {
		List<Object> orgList = dao.selectAll("user.orgSelect", map);
		return orgList;
	}

	@Override
	public Object iuserOneSelectById(Object userId) {
		System.out.println("사용자 상세정보 userId :  "+userId);
		Object obj = dao.selectOnes("user.userOneSelect", userId);
		System.out.println("사용자 상세정보 결과 :  "+obj);
		return obj;
	}

	//사용자 추가 후 리스트 호출
	@Override
	public Object iuserOneSelectByIdNM(Object id_nm) {
		System.out.println("iuserOneSelectByIdNM id_nm : " + id_nm);
		Object obj = dao.selectOnes("user.userIDOneSelect", id_nm);
		System.out.println("iuserOneSelectByIdNM result obj : " + obj);
		return obj;
	}
	
	//고객사 담당사원 추가
	@Override
	public int ccMngAdd(IuserVO iuserVo) {
		// TODO Auto-generated method stub
		System.out.println("iuserService 고객사 담당직원 : " + iuserVo);
		return dao.ccMngAdd(iuserVo);
	}

	@Override
	public List<IuserVO> ccMngList(Map<String, String> map) {
		System.out.println("고객사 담당사원 리스트 map : "+map);
		return dao.ccMngList(map);
	}

	@Override
	public int ccMngUpdate(IuserVO iuserVo) {
		// TODO Auto-generated method stub
		return dao.ccMngUpdate(iuserVo);
	}

	@Override
	public IuserVO ccMngDetail(Map<String, String> map) {
		// TODO Auto-generated method stub
		return dao.ccMngDetail(map);
	}

	@Override
	public int custMngDelete(IuserVO iuserVo) {
		// TODO Auto-generated method stub
		return dao.custMngDelete(iuserVo);
	}

	//사용자관리 삭제된 사용자 카운트
	@Override
	public PagerVO iUserPageCount(Map<String, String> map) {
		// TODO Auto-generated method stub
		int totalRowCount = dao.iuserDelPageCount(map);
		PagerVO page = new PagerVO(Integer.parseInt(map.get("pageNum")), totalRowCount, 10, 10);
		return page;
	}

	//사용자관리 삭제된 사용자 리스트
	@Override
	public List<IuserVO> iUserDelList(Map<String, String> map) {
		System.out.println("삭제된 사용자 리스트 검색어 : "+ map);
		return dao.iUserDelList(map);
	}
}
