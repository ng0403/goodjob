package com.crm.cp.standard.code.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.crm.cp.standard.code.dao.CCodeDao;
import com.crm.cp.standard.code.vo.CodeVO;

@Service
public class CCodeServiceImpl implements CCodeService {

	@Resource
	CCodeDao codeDao;

	//코드 리스트
	@Override
	public List<CodeVO> codeList(String cd_grp_id) {
 		return codeDao.codeList(cd_grp_id);
	}

	//코드그룹 리스트
	@Override
	public List<Object> codegrpList() {
		// TODO Auto-generated method stub
		return codeDao.codegrpList();
	}
	
	//코드 그룹 검색
	@Override
	public List<Object> codegrpList(Map<String, Object> map) {
		
		 return codeDao.codegrpList(map);
		
	}
	
	
	//코드 그룹 등록
	@Override
	public void cdgrpInsert(CodeVO codevo) {
		codeDao.cdgrpInsert(codevo);
		
	}
	
	//코드 그룹 삭제
	@Override
	public void cdgrpDelete(CodeVO codevo) {
		codeDao.cdgrpDelete(codevo);
	}

	@Override
	public void codeInsert(CodeVO codevo) {
		codeDao.codeInsert(codevo);
	}
	
	@Override
	public void codeDelete(Object code) {
		codeDao.codeDelete(code);
 	}

	@Override
	public CodeVO codeDetail(Map map) {
		 
		return codeDao.codeDetail(map);
	}
	
	@Override
	public CodeVO cdgrpDetail(String cdgrp) {
		 
		return codeDao.cdgrpDetail(cdgrp);
	}
 
//코드 수정	
	@Override
	public String codeModify(CodeVO codeVo) {
		int codeUpdate = codeDao.codeModify(codeVo);// 여기서 가져온 값을 판별하여 
		String codeResult = null;
		if(codeUpdate == 1) {
			codeResult = "수정에 성공했습니다.";
		} else {
			codeResult = "수정에 실패했습니다.";
		}
		return codeResult;//요기서 반환한 값을 컨트롤이 받는다.
	}
	
	//코드 그룹 수정
	@Override
	public String cdgrpModify(CodeVO codeVo) {
		int cdgrpUpdate = codeDao.cdgrpModify(codeVo);// 여기서 가져온 값을 판별하여 
		String cdgrpResult = null;
		if(cdgrpUpdate == 1) {
			cdgrpResult = "수정에 성공했습니다.";
		} else {
			cdgrpResult = "수정에 실패했습니다.";
		}
		return cdgrpResult;//요기서 반환한 값을 컨트롤이 받는다.
	}
	
	
}
