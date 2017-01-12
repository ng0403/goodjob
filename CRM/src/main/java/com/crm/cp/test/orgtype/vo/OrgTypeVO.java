package com.crm.cp.test.orgtype.vo;

import java.util.Date;

public class OrgTypeVO {
	private String org_type_id, org_type_name, p_org_type_id, active_flg, c_user_id, u_user_id;
	private Date cdate, udate;
	
	public String getOrg_type_id() {
		return org_type_id;
	}
	
	public void setOrg_type_id(String org_type_id) {
		this.org_type_id = org_type_id;
	}
	
	public String getOrg_type_name() {
		return org_type_name;
	}
	
	public void setOrg_type_name(String org_type_name) {
		this.org_type_name = org_type_name;
	}
	
	public String getP_org_type_id() {
		return p_org_type_id;
	}
	
	public void setP_org_type_id(String p_org_type_id) {
		this.p_org_type_id = p_org_type_id;
	}
	
	public String getActive_flg() {
		return active_flg;
	}
	
	public void setActive_flg(String active_flg) {
		this.active_flg = active_flg;
	}
	
	public String getC_user_id() {
		return c_user_id;
	}
	
	public void setC_user_id(String c_user_id) {
		this.c_user_id = c_user_id;
	}
	
	public String getU_user_id() {
		return u_user_id;
	}
	
	public void setU_user_id(String u_user_id) {
		this.u_user_id = u_user_id;
	}
	
	public Date getCdate() {
		return cdate;
	}
	
	public void setCdate(Date cdate) {
		this.cdate = cdate;
	}
	
	public Date getUdate() {
		return udate;
	}
	
	public void setUdate(Date udate) {
		this.udate = udate;
	}
}
