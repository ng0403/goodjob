package com.crm.cp.standard.code.vo;

import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class CodeVO {
	String cd_grp_id;
	String code;
	String cd_nm;
	String cd_seq_num;
	String cd_dtl_cont;
	String fst_reg_id;
	Date fst_reg_dt;
	String fst_mdfy_id;
	Date fst_mdfy_dt;
	String act_yn;
	
	public CodeVO() {
		super();
	}
	
	public CodeVO(String cd_grp_id, String code, String cd_nm,
			String cd_seq_num, String cd_dtl_cont, String fst_reg_id,
			Date fst_reg_dt, String fst_mdfy_id, Date fst_mdfy_dt,
			String act_yn) {
		super();
		this.cd_grp_id = cd_grp_id;
		this.code = code;
		this.cd_nm = cd_nm;
		this.cd_seq_num = cd_seq_num;
		this.cd_dtl_cont = cd_dtl_cont;
		this.fst_reg_id = fst_reg_id;
		this.fst_reg_dt = fst_reg_dt;
		this.fst_mdfy_id = fst_mdfy_id;
		this.fst_mdfy_dt = fst_mdfy_dt;
		this.act_yn = act_yn;
	}

	public String getCd_grp_id() {
		return cd_grp_id;
	}

	public void setCd_grp_id(String cd_grp_id) {
		this.cd_grp_id = cd_grp_id;
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

	public String getCd_seq_num() {
		return cd_seq_num;
	}

	public void setCd_seq_num(String cd_seq_num) {
		this.cd_seq_num = cd_seq_num;
	}

	public String getCd_dtl_cont() {
		return cd_dtl_cont;
	}

	public void setCd_dtl_cont(String cd_dtl_cont) {
		this.cd_dtl_cont = cd_dtl_cont;
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

	public String getFst_mdfy_id() {
		return fst_mdfy_id;
	}

	public void setFst_mdfy_id(String fst_mdfy_id) {
		this.fst_mdfy_id = fst_mdfy_id;
	}

	public Date getFst_mdfy_dt() {
		return fst_mdfy_dt;
	}

	public void setFst_mdfy_dt(Date fst_mdfy_dt) {
		this.fst_mdfy_dt = fst_mdfy_dt;
	}

	public String getAct_yn() {
		return act_yn;
	}

	public void setAct_yn(String act_yn) {
		this.act_yn = act_yn;
	}
}
