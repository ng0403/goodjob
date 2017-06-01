package com.crm.cp.standard.code.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.standard.code.vo.CodeVO;

public interface CCodeService {
	
	public List<CodeVO> codeList(String cd_grp_id); // 코드 리스트
	
	public List<Object> codeList(Map<String, Object> map); // 코드 검색

	
	public List<Object> codegrpList(); // 코드그룹 리스튼
	
	public List<Object> codegrpList(Map<String, Object> map); //코드 그룹 검색

	
	public void cdgrpInsert(CodeVO codevo); // 코드그룹 등록

	public void cdgrpDelete(CodeVO codevo);//코드그룹 삭제
	
	public void codeInsert(CodeVO codevo); // 코드그룹 등록
	
	void codeDelete(Object code); //코드 삭제
	
	public CodeVO codeDetail(Map map); // 코드 디테일
	
	public CodeVO cdgrpDetail(String cdgrp); // 코드그룹 디테일

	
	String codeModify(CodeVO codeVo); // 코드 수정
	
	String cdgrpModify(CodeVO codeVo); // 코드그룹 수정
	
	int cdgrpChk(String cd_grp_id);


}
