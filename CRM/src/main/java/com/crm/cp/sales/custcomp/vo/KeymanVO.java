package com.crm.cp.sales.custcomp.vo;

public class KeymanVO {
	private String  cust_id; 				// 고객 아이디
	private String  cust_nm; 				// 고객명
	private String  cont_id; 				// 연락처 아이디
	private String  cont_nm;	 			// 연락처명
	private String  cdept_nm; 	 			// 부서명
	private String  key_part;				// 역할명
	private String  key_pos; 				// 직급
	private String  key_job; 				// 직무
	private String  memo; 					// 메모
	private String  fst_reg_id; 			// 등록자
	private String  fst_reg_dt; 			// 등록일시
	private String  fin_mdfy_id; 			// 최종변경자
	private String  fin_mdfy_dt; 			// 최종변경일시
	
	
	private String  cell_ph;				// 이동전화번호1 + 2 + 3
	private String  cell_ph1;				// 이동전화번호1
	private String  cell_ph2;				// 이동전화번호2
	private String  cell_ph3;				// 이동전화번호3
	private String  email;					// 이메일 + 도메인
	private String  email1;					// 이메일
	private String  email2;					// 이메일 도메인
 	
	public String getCell_ph() {
		return cell_ph;
	}
	public void setCell_ph(String cell_ph) {
		this.cell_ph = cell_ph;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCell_ph1() {
		return cell_ph1;
	}
	public void setCell_ph1(String cell_ph1) {
		this.cell_ph1 = cell_ph1;
	}
	public String getCell_ph2() {
		return cell_ph2;
	}
	public void setCell_ph2(String cell_ph2) {
		this.cell_ph2 = cell_ph2;
	}
	public String getCell_ph3() {
		return cell_ph3;
	}
	public void setCell_ph3(String cell_ph3) {
		this.cell_ph3 = cell_ph3;
	}
	public String getEmail1() {
		return email1;
	}
	public void setEmail1(String email1) {
		this.email1 = email1;
	}
	public String getEmail2() {
		return email2;
	}
	public void setEmail2(String email2) {
		this.email2 = email2;
	}
	public String getCust_id() {
		return cust_id;
	}
	public void setCust_id(String cust_id) {
		this.cust_id = cust_id;
	}
	public String getCust_nm() {
		return cust_nm;
	}
	public void setCust_nm(String cust_nm) {
		this.cust_nm = cust_nm;
	}
	public String getCont_id() {
		return cont_id;
	}
	public void setCont_id(String cont_id) {
		this.cont_id = cont_id;
	}
	public String getCont_nm() {
		return cont_nm;
	}
	public void setCont_nm(String cont_nm) {
		this.cont_nm = cont_nm;
	}
	public String getCdept_nm() {
		return cdept_nm;
	}
	public void setCdept_nm(String cdept_nm) {
		this.cdept_nm = cdept_nm;
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
	public String getKey_job() {
		return key_job;
	}
	public void setKey_job(String key_job) {
		this.key_job = key_job;
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
	public void setFin_mdfy_dt(String fin_mdfy_dt) {
		this.fin_mdfy_dt = fin_mdfy_dt;
	}
	@Override
	public String toString() {
		return "KeymanVO [cust_id=" + cust_id + ", cust_nm=" + cust_nm + ", cont_id=" + cont_id + ", cont_nm=" + cont_nm
				+ ", cdept_nm=" + cdept_nm + ", key_part=" + key_part + ", key_pos=" + key_pos + ", key_job=" + key_job
				+ ", memo=" + memo + ", fst_reg_id=" + fst_reg_id + ", fst_reg_dt=" + fst_reg_dt + ", fin_mdfy_id="
				+ fin_mdfy_id + ", fin_mdfy_dt=" + fin_mdfy_dt + ", cell_ph=" + cell_ph + ", cell_ph1=" + cell_ph1
				+ ", cell_ph2=" + cell_ph2 + ", cell_ph3=" + cell_ph3 + ", email=" + email + ", email1=" + email1
				+ ", email2=" + email2 + ", getCell_ph()=" + getCell_ph() + ", getEmail()=" + getEmail()
				+ ", getCell_ph1()=" + getCell_ph1() + ", getCell_ph2()=" + getCell_ph2() + ", getCell_ph3()="
				+ getCell_ph3() + ", getEmail1()=" + getEmail1() + ", getEmail2()=" + getEmail2() + ", getCust_id()="
				+ getCust_id() + ", getCust_nm()=" + getCust_nm() + ", getCont_id()=" + getCont_id() + ", getCont_nm()="
				+ getCont_nm() + ", getCdept_nm()=" + getCdept_nm() + ", getKey_part()=" + getKey_part()
				+ ", getKey_pos()=" + getKey_pos() + ", getKey_job()=" + getKey_job() + ", getMemo()=" + getMemo()
				+ ", getFst_reg_id()=" + getFst_reg_id() + ", getFst_reg_dt()=" + getFst_reg_dt()
				+ ", getFin_mdfy_id()=" + getFin_mdfy_id() + ", getFin_mdfy_dt()=" + getFin_mdfy_dt() + ", getClass()="
				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	
	
	
}