package com.crm.cp.standard.code.dao;

import java.util.List;

import com.crm.cp.standard.auth.vo.AuthVO;
import com.crm.cp.standard.code.vo.CodeVO;

public interface CCodeDao {
	
	List<Object> codegrpList();  //코드 그룹 리스트
	List<CodeVO> codeList(String cd_grp_id); // 코드 리스트
	public void cdgrpInsert(CodeVO codevo); // 코드 그룹 등록
	public void cdgrpDelete(CodeVO codevo);//코드그룹 삭제
}
