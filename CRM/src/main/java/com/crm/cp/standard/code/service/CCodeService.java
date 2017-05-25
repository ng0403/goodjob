package com.crm.cp.standard.code.service;

import java.util.List;

import com.crm.cp.standard.auth.vo.AuthVO;
import com.crm.cp.standard.code.vo.CodeVO;

public interface CCodeService {
	
	public List<CodeVO> codeList(String cd_grp_id); // 코드 리스트
	
	public List<Object> codegrpList(); // 코드그룹 리스튼
	
	public void cdgrpInsert(CodeVO codevo); // 코드그룹 등록

	public void cdgrpDelete(CodeVO codevo);//코드그룹 삭제
}
