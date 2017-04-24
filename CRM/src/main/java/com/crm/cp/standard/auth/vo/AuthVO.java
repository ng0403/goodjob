package com.crm.cp.standard.auth.vo;

import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class AuthVO {
	
	private String auth_id;    
	private String auth_nm;
	private String act_yn;
	private String fst_reg_id;
	private Date fst_reg_dt;
	private String fin_mdfy_id;
	private Date fin_mdfy_dt;
	private String menu_nm;

	public AuthVO(){ }

	public AuthVO(String auth_id, String fin_mdfy_id) {
		super();
		this.auth_id = auth_id;
		this.fin_mdfy_id = fin_mdfy_id;
	}
	
	public AuthVO(String auth_id, String auth_nm, String act_yn,
			String fst_reg_id, Date fst_reg_dt, String fin_mdfy_id,
			Date fin_mdfy_dt, String menu_nm) {
		super();
		this.auth_id = auth_id;
		this.auth_nm = auth_nm;
		this.act_yn = act_yn;
		this.fst_reg_id = fst_reg_id;
		this.fst_reg_dt = fst_reg_dt;
		this.fin_mdfy_id = fin_mdfy_id;
		this.fin_mdfy_dt = fin_mdfy_dt;
		this.menu_nm = menu_nm;
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

	public String getFin_mdfy_id() {
		return fin_mdfy_id;
	}

	public void setFin_mdfy_id(String fin_mdfy_id) {
		this.fin_mdfy_id = fin_mdfy_id;
	}

	public Date getFin_mdfy_dt() {
		return fin_mdfy_dt;
	}

	public void setFin_mdfy_dt(Date fin_mdfy_dt) {
		this.fin_mdfy_dt = fin_mdfy_dt;
	}

	public String getMenu_nm() {
		return menu_nm;
	}

	public void setMenu_nm(String menu_nm) {
		this.menu_nm = menu_nm;
	}
}//class END
