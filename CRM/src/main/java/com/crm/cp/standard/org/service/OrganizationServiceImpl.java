package com.crm.cp.standard.org.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.crm.cp.standard.org.dao.OrgDao;
import com.crm.cp.standard.org.vo.OrganizationVO;


@Service
public class OrganizationServiceImpl implements OrganizationService {
	@Autowired
	private OrgDao dao;

	@Override
	public List<Object> selectTreeOne() {
		List<Object> list=dao.selectAll("organization.orgTreeOne");
		
		return list;
	}
	
	@Override
	public List<Object> selectTreeTwo() {		
		List<Object> list=dao.selectAll("organization.orgTreeTwo");
		
		return list;
	}

	@Override
	public List<Object> selectTreeThird() {
		List<Object> list=dao.selectAll("organization.orgTreeThird");
		
		return list;
	}

	@Override
	public List<Object> selectTreeFourth() {
		List<Object> list=dao.selectAll("organization.orgTreeFourth");
		
		return list;
	}
	
	@Override
	public Object orgNameCount(Map<String, Object> obj) {
		Object result;
		if(obj.get("type").toString().equals("org_type")){
			result = dao.selectOne("organization.orgTypeNameCount", obj);
		}else{
			result = dao.selectOne("organization.orgNameCount", obj);
		}
		return result;
	}
	
	@Override
	public Object insertOrg(HttpSession session, Map<String,String> data) 
	{
		OrganizationVO dto = new OrganizationVO();
		dto.setFst_reg_id(session.getAttribute("user").toString());
		dto.setFin_mdfy_id(session.getAttribute("user").toString());
		Map<String,Object> result = new HashMap<String,Object>();
		
		System.out.println("insertOrg - dtoList : " + dto);
		System.out.println("insertOrg - dto : " + dto.getFst_reg_id());
		System.out.println("insertOrg - data : " + data.get("org_flag"));
		
		if(data.get("org_flag").toString().equals("org_type"))
		{
			System.out.println("insertOrg - if (org_flag == org_type)");
			
			dto.setOrg_type_nm(data.get("org_type_nm"));
			dto.setAct_yn(data.get("act_yn"));
			
			int ok = dao.insert("organization.typeinsert", dto);
			
			result.put("ok", ok);
			
			Map<String, Object> org_type = dao.selectOnes("organization.selectOrgTypeId",dto);
			result.put("org_type_id", org_type.get("ORG_TYPE_ID"));
		}
		else
		{
			System.out.println("insertOrg - else (org_flag != org_type)");
			
			dto.setOrg_nm(data.get("org_nm"));
			dto.setUp_org_id(data.get("up_org_id"));
			dto.setOrg_type_id(data.get("org_type_id"));
			dto.setRep_emp_id(data.get("rep_emp_id"));
			dto.setOrg_lev_cd(data.get("org_lev_cd"));
			dto.setPh1(data.get("phone_no1"));
			dto.setPh2(data.get("phone_no2"));
			dto.setPh3(data.get("phone_no3"));
			dto.setFax_ph1(data.get("fax_no1"));
			dto.setFax_ph2(data.get("fax_no2"));
			dto.setFax_ph3(data.get("fax_no3"));
			dto.setZip_cd(data.get("zip_cd"));
			dto.setZip_cd_sri_num(data.get("zip_cd_sri_num"));
			dto.setOrg_addr_dtl(data.get("org_addr_dtl"));
			dto.setAct_yn(data.get("act_yn"));
			
			if(dto.getUp_org_id().equals("G***"))
			{
				System.out.println("insertOrg - else (org_flag != org_type) - if");
				
				int ok = dao.insert("organization.pinsert", dto);
				result.put("ok", ok);
			}
			else
			{
				System.out.println("insertOrg - else (org_flag != org_type) - else");
				
				int ok = dao.insert("organization.insert", dto);
				result.put("ok", ok);
			}
			
			Map<String, Object> org = dao.selectOnes("organization.selectOrgId", dto);
			result.put("org_id", org.get("ORG_ID"));
		}
		
		return result;
	}
	
	@Override
	public Object orgDetailOne(HttpSession session, Map<String,String> data){
		OrganizationVO dto = new OrganizationVO();
		dto.setFst_reg_id(session.getAttribute("user").toString());
		dto.setFin_mdfy_id(session.getAttribute("user").toString());
		Object result;
		if(data.get("org_flag").toString().equals("org_type")){
			dto.setOrg_type_id(data.get("org_id"));
			result = dao.selectOne("organization.orgtypeDetailOne", dto);
		}else{
			dto.setOrg_id(data.get("org_id"));
			result = dao.selectOne("organization.orgDetailOne", dto);
		}
		
		return result;
	}
	
	@Override
	public List<Object> selectOAll(Map<String,Object> map) {
		List<Object> list = dao.selectAll("organization.orgOlist", map);
		return list;
	}
	
	@Override
	public int orgUpdate(HttpSession session, Map<String, String> data) {
		int result = 0;
		OrganizationVO dto = new OrganizationVO();
		dto.setFin_mdfy_id(session.getAttribute("user").toString());
		if(data.get("org_flag").toString().equals("org_type")){
			dto.setOrg_type_id(data.get("org_type_id"));
			dto.setOrg_type_nm(data.get("org_type_nm"));
			dto.setAct_yn(data.get("act_yn"));
			result = dao.update("organization.typeUpdate", dto);
		}else{
			dto.setOrg_id(data.get("org_id"));
			dto.setOrg_nm(data.get("org_nm"));
			dto.setUp_org_id(data.get("up_org_id"));
			dto.setOrg_type_id(data.get("org_type_id"));
			dto.setRep_emp_id(data.get("rep_emp_id"));
			dto.setOrg_lev_cd(data.get("org_lev_cd"));
			dto.setPh1(data.get("phone_no1"));
			dto.setPh2(data.get("phone_no2"));
			dto.setPh3(data.get("phone_no3"));
			dto.setFax_ph1(data.get("fax_no1"));
			dto.setFax_ph2(data.get("fax_no2"));
			dto.setFax_ph3(data.get("fax_no3"));
			dto.setZip_cd(data.get("zip_cd"));
			dto.setZip_cd_sri_num(data.get("zip_cd_sri_num"));
			dto.setOrg_addr_dtl(data.get("org_addr_dtl"));
			dto.setAct_yn(data.get("act_yn"));
			result = dao.update("organization.update", dto);
		}
		return result;
	}
	
	@Override
	public int orgDelete(Map<String, Object> data) {
		int result=0;
		
		@SuppressWarnings("unchecked")
		List<String> sssub = (List<String>) data.get("sssub");
		for (String org_id : sssub) {
			result = dao.update("organization.orgDelete", org_id);
		}
		
		@SuppressWarnings("unchecked")
		List<String> ssub = (List<String>) data.get("ssub");
		for (String org_id : ssub) {
			result = dao.update("organization.orgDelete", org_id);
		}
		
		@SuppressWarnings("unchecked")
		List<String> sub = (List<String>) data.get("sub");
		for (String p_org_id : sub) {
			result = dao.update("organization.p_orgDelete", p_org_id);
		}
		
		@SuppressWarnings("unchecked")
		List<String> master = (List<String>) data.get("master");
		for (String org_type_id : master) {
			result = dao.update("organization.orgtypeDelete", org_type_id);
		}
		
		return result;
	}

	@Override
	public List<Object> selectOrgUser() {
		List<Object> list = dao.selectAll("organization.selectOrgUser"); 
		return list;
	}
	
	@Override
	public List<Object> selectOrgUser(Map<String,Object> map) {
		List<Object> list = dao.selectAll("organization.selectOrgUser",map); 
		return list;
	}
}
