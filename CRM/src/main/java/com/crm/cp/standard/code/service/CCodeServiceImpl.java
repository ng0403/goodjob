package com.crm.cp.standard.code.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.crm.cp.standard.auth.vo.AuthVO;
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
}
