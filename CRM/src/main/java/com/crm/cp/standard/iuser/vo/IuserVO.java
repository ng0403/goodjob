package com.crm.cp.standard.iuser.vo;

import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class IuserVO {
	String iuser_id;
	String org_id;
	String iuser_nm;
	String id_nm;
	String pwd;
	String email1;
	String email2;
	String cell_ph1;
	String cell_ph2;
	String cell_ph3;
	String ph1;
	String ph2;
	String ph3;
	String comp_ph1;
	String comp_ph2;
	String comp_ph3;
	String zip_cd;
	String zip_cd_sri_num;
	String iuser_dtl_addr;
	String iuser_div_cd;
	String iuser_div_nm;
	String fst_reg_id;
	
	private String order_by;
	private String order_sc;
	
	public String getOrder_by() {
		return order_by;
	}

	public void setOrder_by(String order_by) {
		this.order_by = order_by;
	}

	public String getOrder_sc() {
		return order_sc;
	}

	public void setOrder_sc(String order_sc) {
		this.order_sc = order_sc;
	}

	public String getIuser_div_nm() {
		return iuser_div_nm;
	}

	public void setIuser_div_nm(String iuser_div_nm) {
		this.iuser_div_nm = iuser_div_nm;
	}

	public String getFst_reg_id() {
		return fst_reg_id;
	}

	public void setFst_reg_id(String fst_reg_id) {
		this.fst_reg_id = fst_reg_id;
	}

	public String getFin_mdfy_id() {
		return fin_mdfy_id;
	}

	public void setFin_mdfy_id(String fin_mdfy_id) {
		this.fin_mdfy_id = fin_mdfy_id;
	}

	public String getCust_nm() {
		return cust_nm;
	}

	public void setCust_nm(String cust_nm) {
		this.cust_nm = cust_nm;
	}

	public String getCust_id() {
		return cust_id;
	}

	public void setCust_id(String cust_id) {
		this.cust_id = cust_id;
	}

	public String getKey_part() {
		return key_part;
	}

	public void setKey_part(String key_part) {
		this.key_part = key_part;
	}
	
	




	Date fst_reg_dt;
	String fin_mdfy_id;
	Date fin_mdfy_dt;
	String act_yn;
	String auth_id;
	String auth_nm;
	String org_nm;
	String code;
	String cust_nm;
	String cust_id;
	String key_part;
	String cd_nm;
	
	public IuserVO(){}

	public IuserVO(String iuser_id, String org_id, String iuser_nm,
			String id_nm, String pwd, String email1, String email2,
			String cell_ph1, String cell_ph2, String cell_ph3, String ph1,
			String ph2, String ph3, String comp_ph1, String comp_ph2,
			String comp_ph3, String zip_cd, String zip_cd_sri_num,
			String iuser_dtl_addr, String iuser_div_cd, String fst_reg_id,
			Date fst_reg_dt, String fin_mdfy_id, Date fin_mdfy_dt,
			String act_yn, String auth_id, String auth_nm, String org_nm,
			String code, String cd_nm) {
		super();
		this.iuser_id = iuser_id;
		this.org_id = org_id;
		this.iuser_nm = iuser_nm;
		this.id_nm = id_nm;
		this.pwd = pwd;
		this.email1 = email1;
		this.email2 = email2;
		this.cell_ph1 = cell_ph1;
		this.cell_ph2 = cell_ph2;
		this.cell_ph3 = cell_ph3;
		this.ph1 = ph1;
		this.ph2 = ph2;
		this.ph3 = ph3;
		this.comp_ph1 = comp_ph1;
		this.comp_ph2 = comp_ph2;
		this.comp_ph3 = comp_ph3;
		this.zip_cd = zip_cd;
		this.zip_cd_sri_num = zip_cd_sri_num;
		this.iuser_dtl_addr = iuser_dtl_addr;
		this.iuser_div_cd = iuser_div_cd;
		this.fst_reg_id = fst_reg_id;
		this.fst_reg_dt = fst_reg_dt;
		this.fin_mdfy_id = fin_mdfy_id;
		this.fin_mdfy_dt = fin_mdfy_dt;
		this.act_yn = act_yn;
		this.auth_id = auth_id;
		this.auth_nm = auth_nm;
		this.org_nm = org_nm;
		this.code = code;
		this.cd_nm = cd_nm;
	}

	public String getIuser_id() {
		return iuser_id;
	}

	public void setIuser_id(String iuser_id) {
		this.iuser_id = iuser_id;
	}

	public String getOrg_id() {
		return org_id;
	}

	public void setOrg_id(String org_id) {
		this.org_id = org_id;
	}

	public String getIuser_nm() {
		return iuser_nm;
	}

	public void setIuser_nm(String iuser_nm) {
		this.iuser_nm = iuser_nm;
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

	public String getZip_cd() {
		return zip_cd;
	}

	public void setZip_cd(String zip_cd) {
		this.zip_cd = zip_cd;
	}

	public String getZip_cd_sri_num() {
		return zip_cd_sri_num;
	}

	public void setZip_cd_sri_num(String zip_cd_sri_num) {
		this.zip_cd_sri_num = zip_cd_sri_num;
	}

	public String getIuser_dtl_addr() {
		return iuser_dtl_addr;
	}

	public void setIuser_dtl_addr(String iuser_dtl_addr) {
		this.iuser_dtl_addr = iuser_dtl_addr;
	}

	public String getIuser_div_cd() {
		return iuser_div_cd;
	}

	public void setIuser_div_cd(String iuser_div_cd) {
		this.iuser_div_cd = iuser_div_cd;
	}

	public Date getFst_reg_dt() {
		return fst_reg_dt;
	}

	public void setFst_reg_dt(Date fst_reg_dt) {
		this.fst_reg_dt = fst_reg_dt;
	}

	public Date getFin_mdfy_dt() {
		return fin_mdfy_dt;
	}

	public void setFin_mdfy_dt(Date fin_mdfy_dt) {
		this.fin_mdfy_dt = fin_mdfy_dt;
	}

	public String getAct_yn() {
		return act_yn;
	}

	public void setAct_yn(String act_yn) {
		this.act_yn = act_yn;
	}

	public String getAuth_id() {
		return auth_id;
	}

	public void setAuth_id(String auth_id) {
		this.auth_id = auth_id;
	}

	public String getAuth_nm() {
		return auth_nm;
	}

	public void setAuth_nm(String auth_nm) {
		this.auth_nm = auth_nm;
	}

	public String getOrg_nm() {
		return org_nm;
	}

	public void setOrg_nm(String org_nm) {
		this.org_nm = org_nm;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getCd_nm() {
		return cd_nm;
	}

	public void setCd_nm(String cd_nm) {
		this.cd_nm = cd_nm;
	}

	@Override
	public String toString() {
		return "IuserVO [iuser_id=" + iuser_id
				+ ", org_id=" + org_id
				+ ", org_nm=" + org_nm
				+ ", iuser_div_cd=" + iuser_div_cd
				+ ", iuser_div_nm=" + iuser_div_nm
				+ ", iuser_nm=" + iuser_nm + ", id_nm=" + id_nm + ", pwd="
				+ pwd + ", email1=" + email1 + ", email2=" + email2
				+ ", cell_ph1=" + cell_ph1 + ", cell_ph2=" + cell_ph2
				+ ", cell_ph3=" + cell_ph3 + ", ph1=" + ph1 + ", ph2=" + ph2
				+ ", ph3=" + ph3 + ", comp_ph1=" + comp_ph1 + ", comp_ph2="
				+ comp_ph2 + ", comp_ph3=" + comp_ph3 + ", zip_cd=" + zip_cd
				+ ", zip_cd_sri_num=" + zip_cd_sri_num + ", iuser_dtl_addr="
				+ iuser_dtl_addr + ", iuser_div_cd=" + iuser_div_cd
				+ ", fst_reg_id=" + fst_reg_id + ", fst_reg_dt="
				+ fst_reg_dt + ", fin_mdfy_id=" + fin_mdfy_id
				+ ", fin_mdfy_dt=" + fin_mdfy_dt + ", act_yn=" + act_yn
				+ ", auth_id=" + auth_id + ", auth_nm=" + auth_nm + ", org_nm="
				+ org_nm + ", code=" + code + ", cd_nm=" + cd_nm + "]";
	}
	
}
