package com.crm.cp.sales.custcomp.vo;

public class OrganizationVO {

	private String  org_id;
	private String  org_type_id;
	private String  org_nm;
	private String  ph1;
	private String  ph2;
	private String  ph3;
	private String  act_yn;
	private String  fst_reg_id;
	private String  fst_reg_dt;
	private String  fin_mdfy_if;
	private String  fin_mdfy_id;
	
	public String getOrg_id() {
		return org_id;
	}
	public void setOrg_id(String org_id) {
		this.org_id = org_id;
	}
	public String getOrg_type_id() {
		return org_type_id;
	}
	public void setOrg_type_id(String org_type_id) {
		this.org_type_id = org_type_id;
	}
	public String getOrg_nm() {
		return org_nm;
	}
	public void setOrg_nm(String org_nm) {
		this.org_nm = org_nm;
	}
	public String getPh1() {
		return ph1;
	}
	public void setPh1(String ph1) {
		this.ph1 = ph1;
	}
	public String getPh2() {
		return ph2;
	}
	public void setPh2(String ph2) {
		this.ph2 = ph2;
	}
	public String getPh3() {
		return ph3;
	}
	public void setPh3(String ph3) {
		this.ph3 = ph3;
	}
	public String getAct_yn() {
		return act_yn;
	}
	public void setAct_yn(String act_yn) {
		this.act_yn = act_yn;
	}
	public String getFst_reg_id() {
		return fst_reg_id;
	}
	public void setFst_reg_id(String fst_reg_id) {
		this.fst_reg_id = fst_reg_id;
	}
	public String getFst_reg_dt() {
		return fst_reg_dt;
	}
	public void setFst_reg_dt(String fst_reg_dt) {
		this.fst_reg_dt = fst_reg_dt;
	}
	public String getFin_mdfy_if() {
		return fin_mdfy_if;
	}
	public void setFin_mdfy_if(String fin_mdfy_if) {
		this.fin_mdfy_if = fin_mdfy_if;
	}
	public String getFin_mdfy_id() {
		return fin_mdfy_id;
	}
	public void setFin_mdfy_id(String fin_mdfy_id) {
		this.fin_mdfy_id = fin_mdfy_id;
	}
	
	@Override
	public String toString() {
		return "OrganizationVO [org_id=" + org_id + ", org_type_id=" + org_type_id + ", org_nm=" + org_nm + ", ph1="
				+ ph1 + ", ph2=" + ph2 + ", ph3=" + ph3 + ", act_yn=" + act_yn + ", fst_reg_id=" + fst_reg_id
				+ ", fst_reg_dt=" + fst_reg_dt + ", fin_mdfy_if=" + fin_mdfy_if + ", fin_mdfy_id=" + fin_mdfy_id + "]";
	}
	
	
	
}
