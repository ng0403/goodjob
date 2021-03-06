package com.crm.cp.standard.authIuser.vo;

import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class AuthIuserVO {
	
	String auth_id;
	String iuser_id;
	String fst_reg_id;
	Date fst_reg_d;
	String id_nm;
	String iuser_nm;
	String auth_nm;
	String count;
	
	private String order_by;
	private String order_sc;
	
	public String getCount() {
		return count;
	}

	public void setCount(String count) {
		this.count = count;
	}

	public AuthIuserVO(){ }

	public AuthIuserVO(String auth_id, String fst_reg_id, Date fst_reg_d,
			String id_nm) {
		super();
		this.auth_id = auth_id;
		this.fst_reg_id = fst_reg_id;
		this.fst_reg_d = fst_reg_d;
		this.id_nm = id_nm;
	}
	
	public AuthIuserVO(String auth_id, String iuser_id, String fst_reg_id,
			Date fst_reg_d, String id_nm) {
		super();
		this.auth_id = auth_id;
		this.iuser_id = iuser_id;
		this.fst_reg_id = fst_reg_id;
		this.fst_reg_d = fst_reg_d;
		this.id_nm = id_nm;
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

	public String getIuser_nm() {
		return iuser_nm;
	}

	public void setIuser_nm(String iuser_nm) {
		this.iuser_nm = iuser_nm;
	}

	public String getAuth_nm() {
		return auth_nm;
	}

	public void setAuth_nm(String auth_nm) {
		this.auth_nm = auth_nm;
	}

	public String getAuth_id() {
		return auth_id;
	}

	public void setAuth_id(String auth_id) {
		this.auth_id = auth_id;
	}

	public String getFst_reg_id() {
		return fst_reg_id;
	}

	public void setFst_reg_id(String fst_reg_id) {
		this.fst_reg_id = fst_reg_id;
	}

	public Date getFst_reg_d() {
		return fst_reg_d;
	}

	public void setFst_reg_d(Date fst_reg_d) {
		this.fst_reg_d = fst_reg_d;
	}

	public String getId_nm() {
		return id_nm;
	}

	public void setId_nm(String id_nm) {
		this.id_nm = id_nm;
	}

	public String getIuser_id() {
		return iuser_id;
	}

	public void setIuser_id(String iuser_id) {
		this.iuser_id = iuser_id;
	}
}
