package com.crm.cp.test.code.service;

import java.util.List;

import com.crm.cp.test.code.vo.CodeVo;

public interface CodeService {

	public List<CodeVo> codeListPage();

	public int codeinsert(CodeVo cvo);

}
