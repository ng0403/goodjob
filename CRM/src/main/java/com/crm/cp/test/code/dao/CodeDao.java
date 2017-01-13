package com.crm.cp.test.code.dao;

import java.util.List;

import com.crm.cp.test.code.vo.CodeVo;

public interface CodeDao {

	public List<CodeVo> codeListPage();

	public int codeinsert(CodeVo cvo);

}
