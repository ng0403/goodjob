package com.crm.cp.sales.oppt.vo;

import org.springframework.stereotype.Component;

@Component
public class OpptPrdtVO {
	
	// 상품 카테고리 //
	String sales_oppt_id;
	String prod_id;
	String prod_nm;
	String prod_div_cd;
//	String prod_sales_amt;
	String sales_lev_cd;
	String prod_price;
	String fst_reg_dt;
	String fst_reg_id;
	String fin_mdfy_dt;
	String fin_mdfy_id;
	
	
	
	public String getFin_mdfy_dt() {
		return fin_mdfy_dt;
	}
	public void setFin_mdfy_dt(String fin_mdfy_dt) {
		this.fin_mdfy_dt = fin_mdfy_dt;
	}
	public String getFin_mdfy_id() {
		return fin_mdfy_id;
	}
	public void setFin_mdfy_id(String fin_mdfy_id) {
		this.fin_mdfy_id = fin_mdfy_id;
	}
	public String getSales_oppt_id() {
		return sales_oppt_id;
	}
	public void setSales_oppt_id(String sales_oppt_id) {
		this.sales_oppt_id = sales_oppt_id;
	}
	public String getSales_lev_cd() {
		return sales_lev_cd;
	}
	public void setSales_lev_cd(String sales_lev_cd) {
		this.sales_lev_cd = sales_lev_cd;
	}
	public String getProd_price() {
		return prod_price;
	}
	public void setProd_price(String prod_price) {
		this.prod_price = prod_price;
	}
	public String getFst_reg_dt() {
		return fst_reg_dt;
	}
	public void setFst_reg_dt(String fst_reg_dt) {
		this.fst_reg_dt = fst_reg_dt;
	}
	public String getFst_reg_id() {
		return fst_reg_id;
	}
	public void setFst_reg_id(String fst_reg_id) {
		this.fst_reg_id = fst_reg_id;
	}
	public String getProd_id() {
		return prod_id;
	}
	public void setProd_id(String prod_id) {
		this.prod_id = prod_id;
	}
	public String getProd_nm() {
		return prod_nm;
	}
	public void setProd_nm(String prod_nm) {
		this.prod_nm = prod_nm;
	}
	public String getProd_div_cd() {
		return prod_div_cd;
	}
	public void setProd_div_cd(String prod_div_cd) {
		this.prod_div_cd = prod_div_cd;
	}
//	public String getProd_sales_amt() {
//		return prod_sales_amt;
//	}
//	public void setProd_sales_amt(String prod_sales_amt) {
//		this.prod_sales_amt = prod_sales_amt;
//	}
	@Override
	public String toString() {
		return "OpptPrdtVO [sales_oppt_id=" + sales_oppt_id 
				+ ", prod_id=" + prod_id 
				+ ", prod_nm=" + prod_nm
				+ ", prod_div_cd=" + prod_div_cd 
//				+ ", prod_sales_amt=" + prod_sales_amt 
				+ ", sales_lev_cd="	+ sales_lev_cd 
				+ ", prod_price=" + prod_price 
				+ ", fst_reg_dt=" + fst_reg_dt 
				+ ", fst_reg_id="+ fst_reg_id 
				+ ", fin_mdfy_dt=" + fin_mdfy_dt 
				+ ", fin_mdfy_id=" + fin_mdfy_id + "]";
	}
	
	
	
	
	
	
}