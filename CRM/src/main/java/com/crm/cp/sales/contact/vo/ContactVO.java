package com.crm.cp.sales.contact.vo;

import java.util.Date;

public class ContactVO {
	
	public String cont_id;
	public String cont_nm;
	public String company_nm;
	public String ph1;
	public String ph2;
	public String ph3;
	public String cell_ph1;
	public String cell_ph2;
	public String cell_ph3;
	public String email1;
	public String email2;
	public String itrt_cd;
	public String fst_reg_id;
	public Date fst_reg_dt;
	public String fin_mdfy_id;
	public Date fin_mdfy_dt;
	public String act_yn;
	
	
	@Override
	public String toString() {
		return "ContactVO [cont_id=" + cont_id + ", cont_nm=" + cont_nm + ", company_nm=" + company_nm + ", ph1=" + ph1
				+ ", ph2=" + ph2 + ", ph3=" + ph3 + ", cell_ph1=" + cell_ph1 + ", cell_ph2=" + cell_ph2 + ", cell_ph3="
				+ cell_ph3 + ", email1=" + email1 + ", email2=" + email2 + ", itrt_cd=" + itrt_cd + ", fst_reg_id="
				+ fst_reg_id + ", fst_reg_dt=" + fst_reg_dt + ", fin_mdfy_id=" + fin_mdfy_id + ", fin_mdfy_dt="
				+ fin_mdfy_dt + ", act_yn=" + act_yn + "]";
	}
	
	
}
