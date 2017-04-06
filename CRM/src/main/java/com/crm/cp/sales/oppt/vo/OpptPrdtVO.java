package com.crm.cp.sales.oppt.vo;

import org.springframework.stereotype.Component;

@Component
public class OpptPrdtVO {
	
	// 상품 카테고리 //
	String sales_oppt_id;
	String sales_oppt_nm;
	String prod_id;
	String prod_nm;
	String prod_price;
	String prod_qty;
	String prod_div_cd;
	String sales_lev_cd;
	String discount;
	String discount_unit_cd;
	String sup_price;
	String fst_reg_dt;
	String fst_reg_id;
	String fin_mdfy_dt;
	String fin_mdfy_id;
    String cust_id;
    String cust_nm;
    String opptprdt_seq;
//	String prod_sales_amt;
    
	
	
	
	public String getOpptprdt_seq() {
		return opptprdt_seq;
	}
	public void setOpptprdt_seq(String opptprdt_seq) {
		this.opptprdt_seq = opptprdt_seq;
	}
	public String getDiscount() {
		return discount;
	}
	public void setDiscount(String discount) {
		this.discount = discount;
	}
	public String getSup_price() {
		return sup_price;
	}
	public void setSup_price(String sup_price) {
		this.sup_price = sup_price;
	}
	public String getSales_oppt_nm() {
		return sales_oppt_nm;
	}
	public void setSales_oppt_nm(String sales_oppt_nm) {
		this.sales_oppt_nm = sales_oppt_nm;
	}
	public String getProd_qty() {
		return prod_qty;
	}
	public void setProd_qty(String prod_qty) {
		this.prod_qty = prod_qty;
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
	public String getDiscount_unit_cd() {
		return discount_unit_cd;
	}
	public void setDiscount_unit_cd(String discount_unit_cd) {
		this.discount_unit_cd = discount_unit_cd;
	}
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
	
	public OpptPrdtVO(String sales_oppt_id,
						String sales_oppt_nm,
						String prod_id,
						String prod_nm,
						String prod_price,
						String prod_qty,
						String prod_div_cd,
						String sales_lev_cd,
						String discount,
						String discount_unit_cd,
						String sup_price,
						String fst_reg_dt,
						String fst_reg_id,
						String fin_mdfy_dt,
						String fin_mdfy_id,
					    String cust_id,
					    String cust_nm,
					    String opptprdt_seq) {
		super();
		this.sales_oppt_id=sales_oppt_id;
		this.sales_oppt_nm=sales_oppt_nm;
		this.prod_id=prod_id;
		this.prod_nm=prod_nm;
		this.prod_price=prod_price;
		this.prod_qty=prod_qty;
		this.prod_div_cd=prod_div_cd;
		this.sales_lev_cd=sales_lev_cd;
		this.discount=discount;
		this.discount_unit_cd=discount_unit_cd;
		this.sup_price=sup_price;
		this.fst_reg_dt=fst_reg_dt;
		this.fst_reg_id=fst_reg_id;
		this.fin_mdfy_dt=fin_mdfy_dt;
		this.fin_mdfy_id=fin_mdfy_id;
	    this.cust_id=cust_id;
	    this.cust_nm=cust_nm;
	    this.opptprdt_seq=opptprdt_seq;
	}
	public OpptPrdtVO() {
		super();
	}
	
	@Override
	public String toString() {
		return "OpptPrdtVO [sales_oppt_id=" + sales_oppt_id 
				+ ", sales_oppt_nm=" + sales_oppt_nm 
				+ ", prod_id=" + prod_id 
				+ ", prod_nm=" + prod_nm 
				+ ", prod_div_cd=" + prod_div_cd 
				+ ", sales_lev_cd=" + sales_lev_cd
				+ ", discount_unit_cd=" + discount_unit_cd 
				+ ", discount=" + discount 
				+ ", prod_price=" + prod_price 
				+ ", sup_price=" + sup_price 
				+ ", prod_qty=" + prod_qty
				+ ", fst_reg_dt=" + fst_reg_dt 
				+ ", fst_reg_id=" + fst_reg_id 
				+ ", fin_mdfy_dt=" + fin_mdfy_dt
				+ ", fin_mdfy_id=" + fin_mdfy_id 
				+ ", cust_id=" + cust_id 
				+ ", cust_nm=" + cust_nm 
				+ ", opptprdt_seq=" + opptprdt_seq 
				+ "]";
	}

	
	
	
	
	
	
	
}