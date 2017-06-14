package com.crm.cp.standard.authMenu.vo;

import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class AuthMenuVO {
	String auth_id;
	String auth_nm;
	String menu_id;
	String menu_nm;
	String act_yn;
	String fst_reg_id;
	Date fst_reg_dt;
	String creat_yn;
	String mdfy_yn;
	String del_yn;
	String retrv_yn;
	String deflt_yn;
	
	private String order_by;
	private String order_sc;
	
	public AuthMenuVO(){}

	public AuthMenuVO(String auth_id, String auth_nm, String menu_id,
			String menu_nm, String act_yn, String fst_reg_id,
			Date fst_reg_dt, String creat_yn, String mdfy_yn, String del_yn,
			String retrv_yn, String deflt_yn) {
		super();
		this.auth_id = auth_id;
		this.auth_nm = auth_nm;
		this.menu_id = menu_id;
		this.menu_nm = menu_nm;
		this.act_yn = act_yn;
		this.fst_reg_id = fst_reg_id;
		this.fst_reg_dt = fst_reg_dt;
		this.creat_yn = creat_yn;
		this.mdfy_yn = mdfy_yn;
		this.del_yn = del_yn;
		this.retrv_yn = retrv_yn;
		this.deflt_yn = deflt_yn;
	}

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

	public String getMenu_id() {
		return menu_id;
	}

	public void setMenu_id(String menu_id) {
		this.menu_id = menu_id;
	}

	public String getMenu_nm() {
		return menu_nm;
	}

	public void setMenu_nm(String menu_nm) {
		this.menu_nm = menu_nm;
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

	public Date getFst_reg_dt() {
		return fst_reg_dt;
	}

	public void setFst_reg_dt(Date fst_reg_dt) {
		this.fst_reg_dt = fst_reg_dt;
	}

	public String getCreat_yn() {
		return creat_yn;
	}

	public void setCreat_yn(String creat_yn) {
		this.creat_yn = creat_yn;
	}

	public String getMdfy_yn() {
		return mdfy_yn;
	}

	public void setMdfy_yn(String mdfy_yn) {
		this.mdfy_yn = mdfy_yn;
	}

	public String getDel_yn() {
		return del_yn;
	}

	public void setDel_yn(String del_yn) {
		this.del_yn = del_yn;
	}

	public String getRetrv_yn() {
		return retrv_yn;
	}

	public void setRetrv_yn(String retrv_yn) {
		this.retrv_yn = retrv_yn;
	}

	public String getDeflt_yn() {
		return deflt_yn;
	}

	public void setDeflt_yn(String deflt_yn) {
		this.deflt_yn = deflt_yn;
	}

	@Override
	public String toString() {
		return "AuthMenuVO [auth_id=" + auth_id + ", auth_nm=" + auth_nm
				+ ", menu_id=" + menu_id + ", menu_nm=" + menu_nm + ", act_yn="
				+ act_yn + ", fst_reg_id=" + fst_reg_id + ", fst_reg_dt="
				+ fst_reg_dt + ", creat_yn=" + creat_yn + ", mdfy_yn="
				+ mdfy_yn + ", del_yn=" + del_yn + ", retrv_yn=" + retrv_yn
				+ ", deflt_yn=" + deflt_yn + "]";
	}
	
	
	
}
