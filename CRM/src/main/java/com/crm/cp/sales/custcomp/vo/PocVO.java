package com.crm.cp.sales.custcomp.vo;

public class PocVO {
	
	private String  cust_id	//고객사 ID
				, cust_nm
				, iuser_id	//사원 ID
				, iuser_nm	//사원 ID
				, key_part	//역할명
				, fst_reg_id // 등록자
				, fst_reg_dt // 등록일시
				, fin_mdfy_id // 최종변경자
				, fin_mdfy_dt; //최종변경일시 

	public String getCust_nm() {
		return cust_nm;
	}

	public void setCust_nm(String cust_nm) {
		this.cust_nm = cust_nm;
	}

	public String getIuser_nm() {
		return iuser_nm;
	}

	public void setIuser_nm(String iuser_nm) {
		this.iuser_nm = iuser_nm;
	}

	public String getCust_id() {
		return cust_id;
	}

	public void setCust_id(String cust_id) {
		this.cust_id = cust_id;
	}

	public String getIuser_id() {
		return iuser_id;
	}

	public void setIuser_id(String iuser_id) {
		this.iuser_id = iuser_id;
	}

	public String getKey_part() {
		return key_part;
	}

	public void setKey_part(String key_part) {
		this.key_part = key_part;
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

	public String getFin_mdfy_id() {
		return fin_mdfy_id;
	}

	public void setFin_mdfy_id(String fin_mdfy_id) {
		this.fin_mdfy_id = fin_mdfy_id;
	}

	public String getFin_mdfy_dt() {
		return fin_mdfy_dt;
	}

	public void setFin_mdfy_dt(String fin_mdfy_dt) {
		this.fin_mdfy_dt = fin_mdfy_dt;
	}

	@Override
	public String toString() {
		return "PocVO [cust_id=" + cust_id + ", iuser_id=" + iuser_id + ", key_part=" + key_part + ", fst_reg_id="
				+ fst_reg_id + ", fst_reg_dt=" + fst_reg_dt + ", fin_mdfy_id=" + fin_mdfy_id + ", fin_mdfy_dt="
				+ fin_mdfy_dt + "]";
	}

}
