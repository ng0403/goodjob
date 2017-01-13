package com.crm.cp.test.code.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crm.cp.test.code.dao.CodeDao;
import com.crm.cp.test.code.vo.CodeVo;

@Service
public class CodeServiceImpl implements CodeService{
	
	@Autowired
	CodeDao codeDao;

	@Override
	public List<CodeVo> codeListPage() {
		// TODO Auto-generated method stub
		List<CodeVo> list = codeDao.codeListPage();
		return list;
	}

	@Override
	public int codeinsert(CodeVo cvo) {
		// TODO Auto-generated method stub
		int result = 0;
		result = codeDao.codeinsert(cvo);
		
		return result;
	}

}
