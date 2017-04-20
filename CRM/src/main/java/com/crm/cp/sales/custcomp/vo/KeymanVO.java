package com.crm.cp.sales.custcomp.vo;

public class KeymanVO {
	private String cust_id // 고객 아이디
					 , cont_id // 연락처 아이디
					 , cust_nm // 연락처 이름
					 , key_part// 키맨명
					 , key_pos // 직급
					 , key_job // 직무
					 , memo // 메모
					 , fst_reg_id // 등록자
					 , fst_reg_dt // 등록일시
					 , fin_mdfy_id // 최종변경자
					 , fin_mdfy_dt //최종변경일시
					 , cont_nm;	 //연락처 이름
	
	 

	public String getCont_nm() {
		return cont_nm;
	}

	public void setCont_nm(String cont_nm) {
		this.cont_nm = cont_nm;
	}

	public String getCust_nm() {
		return cust_nm;
	}

	public void setCust_nm(String cust_nm) {
		this.cust_nm = cust_nm;
	}

	public void setFin_mdfy_dt(String fin_mdfy_dt) {
		this.fin_mdfy_dt = fin_mdfy_dt;
	}

	public String getKey_job() {
		return key_job;
	}

	public void setKey_job(String key_job) {
		this.key_job = key_job;
	}

	public String getCust_id() {
		return cust_id;
	}

	public void setCust_id(String cust_id) {
		this.cust_id = cust_id;
	}

	public String getCont_id() {
		return cont_id;
	}

	public void setCont_id(String cont_id) {
		this.cont_id = cont_id;
	}

	public String getKey_part() {
		return key_part;
	}

	public void setKey_part(String key_part) {
		this.key_part = key_part;
	}

	public String getKey_pos() {
		return key_pos;
	}

	public void setKey_pos(String key_pos) {
		this.key_pos = key_pos;
	}
	public String getMemo() {
		return memo;
	}

	public void setMemo(String memo) {
		this.memo = memo;
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

	@Override
	public String toString() {
		return "KeymanVO [cust_id=" + cust_id + ", cont_id=" + cont_id + ", cust_nm=" + cust_nm + ", key_part="
				+ key_part + ", key_pos=" + key_pos + ", key_job=" + key_job + ", memo=" + memo + ", fst_reg_id="
				+ fst_reg_id + ", fst_reg_dt=" + fst_reg_dt + ", fin_mdfy_id=" + fin_mdfy_id + ", fin_mdfy_dt="
				+ fin_mdfy_dt + "]";
	}

	
	
}