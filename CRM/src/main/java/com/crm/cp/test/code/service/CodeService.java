package com.crm.cp.test.code.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.test.code.vo.CodeVo;

public interface CodeService {

	public List<CodeVo> codeListPage();

	public int codeinsert(CodeVo cvo);

	public List<CodeVo> codeUpdatePage(Map<String, Object> map);

	public int codeupdate(CodeVo cvo);

}
