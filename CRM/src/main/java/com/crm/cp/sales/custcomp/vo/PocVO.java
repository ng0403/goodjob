package com.crm.cp.sales.custcomp.vo;

public class PocVO {
	
	private String  cust_id;			//고객사ID
	private String cust_nm;
	private String iuser_id;			//사원 ID
	private String iuser_nm;			//사원 이름
	private String org_id;				//조직 ID
	private String org_nm;				//조직명(부서명)
	private String key_part;			//역할명
	private String id_nm;				//아이디명
	private String pwd;       			//비밀번호
	private String email1;    			//이메일1
	private String email2;    			//이메일2
	private String cell_ph1;			//이동전화번호1
	private String cell_ph2;			//이동전화번호2
	private String cell_ph3;			//이동전화번호3
	private String comp_ph1;			//회사전화1
	private String comp_ph2;			//회사전화2
	private String comp_ph3;			//회사전화3
	private String fst_reg_id; 			//등록자
	private String fst_reg_dt; 			//등록일시
	private String fin_mdfy_id; 		//최종변경자
	private String fin_mdfy_dt; 		//최종변경일시 
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
	public String getIuser_id() {
		return iuser_id;
	}
	public void setIuser_id(String iuser_id) {
		this.iuser_id = iuser_id;
	}
	public String getIuser_nm() {
		return iuser_nm;
	}
	public void setIuser_nm(String iuser_nm) {
		this.iuser_nm = iuser_nm;
	}
	public String getOrg_id() {
		return org_id;
	}
	public void setOrg_id(String org_id) {
		this.org_id = org_id;
	}
	public String getOrg_nm() {
		return org_nm;
	}
	public void setOrg_nm(String org_nm) {
		this.org_nm = org_nm;
	}
	public String getKey_part() {
		return key_part;
	}
	public void setKey_part(String key_part) {
		this.key_part = key_part;
	}
	public String getId_nm() {
		return id_nm;
	}
	public void setId_nm(String id_nm) {
		this.id_nm = id_nm;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
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
	public String getComp_ph1() {
		return comp_ph1;
	}
	public void setComp_ph1(String comp_ph1) {
		this.comp_ph1 = comp_ph1;
	}
	public String getComp_ph2() {
		return comp_ph2;
	}
	public void setComp_ph2(String comp_ph2) {
		this.comp_ph2 = comp_ph2;
	}
	public String getComp_ph3() {
		return comp_ph3;
	}
	public void setComp_ph3(String comp_ph3) {
		this.comp_ph3 = comp_ph3;
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
		return "PocVO [cust_id=" + cust_id + ", cust_nm=" + cust_nm + ", iuser_id=" + iuser_id + ", iuser_nm="
				+ iuser_nm + ", org_id=" + org_id + ", org_nm=" + org_nm + ", key_part=" + key_part + ", id_nm=" + id_nm
				+ ", pwd=" + pwd + ", email1=" + email1 + ", email2=" + email2 + ", cell_ph1=" + cell_ph1
				+ ", cell_ph2=" + cell_ph2 + ", cell_ph3=" + cell_ph3 + ", comp_ph1=" + comp_ph1 + ", comp_ph2="
				+ comp_ph2 + ", comp_ph3=" + comp_ph3 + ", fst_reg_id=" + fst_reg_id + ", fst_reg_dt=" + fst_reg_dt
				+ ", fin_mdfy_id=" + fin_mdfy_id + ", fin_mdfy_dt=" + fin_mdfy_dt + "]";
	}
}
