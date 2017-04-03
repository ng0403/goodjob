package com.crm.cp.sales.contact.vo;

import java.util.Date;

public class ContactVO {
	
	private String cont_id;
	private String cont_nm;
	private String company_nm;
	private String ph1;
	private String ph2;
	private String ph3;
	private String cell_ph1;
	private String cell_ph2;
	private String cell_ph3;
	private String email1;
	private String email2;
	private String itrt_cd;
	private String fst_reg_id;
	private Date fst_reg_dt;
	private String fin_mdfy_id;
	private Date fin_mdfy_dt;
	private String act_yn;
	
	
	@Override
	public String toString() {
		return "ContactVO [cont_id=" + cont_id + ", cont_nm=" + cont_nm + ", company_nm=" + company_nm + ", ph1=" + ph1
				+ ", ph2=" + ph2 + ", ph3=" + ph3 + ", cell_ph1=" + cell_ph1 + ", cell_ph2=" + cell_ph2 + ", cell_ph3="
				+ cell_ph3 + ", email1=" + email1 + ", email2=" + email2 + ", itrt_cd=" + itrt_cd + ", fst_reg_id="
				+ fst_reg_id + ", fst_reg_dt=" + fst_reg_dt + ", fin_mdfy_id=" + fin_mdfy_id + ", fin_mdfy_dt="
				+ fin_mdfy_dt + ", act_yn=" + act_yn + "]";
	}
	
	
}
