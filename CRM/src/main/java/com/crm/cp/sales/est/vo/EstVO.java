package com.crm.cp.sales.est.vo;


public class EstVO {

	private String estim_id;
	private String cust_id;
	private String estim_nm;
	private String estim_lev_cd;
	private String estim_lev_cd_nm;
	private String estim_valid_d;
	private String fst_reg_id;
	private String fst_reg_dt;
	private String fin_mdfy_id;
	private String fin_mdfy_dt;
	private String act_yn;
	
	private String memo;
	private String discount_unit_cd;
	private String discount_unit_cd_nm;
	private String prod_id;
	private String prod_nm;
	private String estim_qty;
	private String prod_price;
	private String sales_price_1;
	private String sales_price_2;
	private String sales_price;
	private String discount;
	private String sup_price;
	private String el_act_yn;
	private String cd_grp_id;
	private String sales_oppt_id;
	private String sales_oppt_nm;
	
	private String code;
	private String cd_nm;
	private String estim_seq;
	
	private String cust_nm;
	private String sales_lev_cd_nm;
	private String total_estim_qty;
	private String total_sales_price;
	private String total_discount;
	private String total_sup_price;
	
	private String estim_nm1;
	private String estim_nm2;
	private String estim_lev_cd1;
	private String estim_lev_cd2;
	private String sales_price_11;
	private String sales_price_12;
	private String sales_price_21;
	private String sales_price_22;
	private String sales_price1;
	private String sales_price2;
	private String estim_valid_d1;
	private String estim_valid_d2;
	
	private String hsales_oppt_id;
	private String hsales_oppt_nm;
	private String hcust_id;
	private String hcust_nm;
	
	public EstVO(String estim_id, String cust_id, String estim_nm,
			String estim_lev_cd, String estim_lev_cd_nm, String estim_valid_d,
			String fst_reg_id, String fst_reg_dt, String fin_mdfy_id,
			String fin_mdfy_dt, String act_yn, String prod_id, String prod_nm,
			String estim_qty, String sales_price_1, String sales_price_2,
			String sales_price, String discount, String sup_price,
			String el_act_yn, String cd_grp_id, String sales_oppt_id,
			String sales_oppt_nm, String code, String cd_nm, String estim_seq,
			String cust_nm, String sales_lev_cd_nm, String total_estim_qty,
			String total_sales_price, String total_discount,
			String total_sup_price) {
		super();
		this.estim_id = estim_id;
		this.cust_id = cust_id;
		this.estim_nm = estim_nm;
		this.estim_lev_cd = estim_lev_cd;
		this.estim_lev_cd_nm = estim_lev_cd_nm;
		this.estim_valid_d = estim_valid_d;
		this.fst_reg_id = fst_reg_id;
		this.fst_reg_dt = fst_reg_dt;
		this.fin_mdfy_id = fin_mdfy_id;
		this.fin_mdfy_dt = fin_mdfy_dt;
		this.act_yn = act_yn;
		this.prod_id = prod_id;
		this.prod_nm = prod_nm;
		this.estim_qty = estim_qty;
		this.sales_price_1 = sales_price_1;
		this.sales_price_2 = sales_price_2;
		this.sales_price = sales_price;
		this.discount = discount;
		this.sup_price = sup_price;
		this.el_act_yn = el_act_yn;
		this.cd_grp_id = cd_grp_id;
		this.sales_oppt_id = sales_oppt_id;
		this.sales_oppt_nm = sales_oppt_nm;
		this.code = code;
		this.cd_nm = cd_nm;
		this.estim_seq = estim_seq;
		this.cust_nm = cust_nm;
		this.sales_lev_cd_nm = sales_lev_cd_nm;
		this.total_estim_qty = total_estim_qty;
		this.total_sales_price = total_sales_price;
		this.total_discount = total_discount;
		this.total_sup_price = total_sup_price;
	}
	
	public String getHsales_oppt_id() {
		return hsales_oppt_id;
	}

	public void setHsales_oppt_id(String hsales_oppt_id) {
		this.hsales_oppt_id = hsales_oppt_id;
	}

	public String getHsales_oppt_nm() {
		return hsales_oppt_nm;
	}

	public void setHsales_oppt_nm(String hsales_oppt_nm) {
		this.hsales_oppt_nm = hsales_oppt_nm;
	}

	public String getHcust_id() {
		return hcust_id;
	}

	public void setHcust_id(String hcust_id) {
		this.hcust_id = hcust_id;
	}

	public String getHcust_nm() {
		return hcust_nm;
	}

	public void setHcust_nm(String hcust_nm) {
		this.hcust_nm = hcust_nm;
	}

	public String getEstim_nm1() {
		return estim_nm1;
	}
	public void setEstim_nm1(String estim_nm1) {
		this.estim_nm1 = estim_nm1;
	}
	public String getEstim_nm2() {
		return estim_nm2;
	}
	public void setEstim_nm2(String estim_nm2) {
		this.estim_nm2 = estim_nm2;
	}
	public String getEstim_lev_cd1() {
		return estim_lev_cd1;
	}
	public void setEstim_lev_cd1(String estim_lev_cd1) {
		this.estim_lev_cd1 = estim_lev_cd1;
	}
	public String getEstim_lev_cd2() {
		return estim_lev_cd2;
	}
	public void setEstim_lev_cd2(String estim_lev_cd2) {
		this.estim_lev_cd2 = estim_lev_cd2;
	}
	public String getSales_price_11() {
		return sales_price_11;
	}
	public void setSales_price_11(String sales_price_11) {
		this.sales_price_11 = sales_price_11;
	}
	public String getSales_price_12() {
		return sales_price_12;
	}
	public void setSales_price_12(String sales_price_12) {
		this.sales_price_12 = sales_price_12;
	}
	public String getSales_price_21() {
		return sales_price_21;
	}
	public void setSales_price_21(String sales_price_21) {
		this.sales_price_21 = sales_price_21;
	}
	public String getSales_price_22() {
		return sales_price_22;
	}
	public void setSales_price_22(String sales_price_22) {
		this.sales_price_22 = sales_price_22;
	}
	public String getSales_price1() {
		return sales_price1;
	}
	public void setSales_price1(String sales_price1) {
		this.sales_price1 = sales_price1;
	}
	public String getSales_price2() {
		return sales_price2;
	}
	public void setSales_price2(String sales_price2) {
		this.sales_price2 = sales_price2;
	}
	public String getEstim_valid_d1() {
		return estim_valid_d1;
	}
	public void setEstim_valid_d1(String estim_valid_d1) {
		this.estim_valid_d1 = estim_valid_d1;
	}
	public String getEstim_valid_d2() {
		return estim_valid_d2;
	}
	public void setEstim_valid_d2(String estim_valid_d2) {
		this.estim_valid_d2 = estim_valid_d2;
	}
	public EstVO() {
		super();
	}
	public String getEstim_id() {
		return estim_id;
	}
	public void setEstim_id(String estim_id) {
		this.estim_id = estim_id;
	}
	public String getCust_id() {
		return cust_id;
	}
	public void setCust_id(String cust_id) {
		this.cust_id = cust_id;
	}
	public String getEstim_nm() {
		return estim_nm;
	}
	public void setEstim_nm(String estim_nm) {
		this.estim_nm = estim_nm;
	}
	public String getEstim_lev_cd() {
		return estim_lev_cd;
	}
	public void setEstim_lev_cd(String estim_lev_cd) {
		this.estim_lev_cd = estim_lev_cd;
	}
	public String getEstim_lev_cd_nm() {
		return estim_lev_cd_nm;
	}
	public void setEstim_lev_cd_nm(String estim_lev_cd_nm) {
		this.estim_lev_cd_nm = estim_lev_cd_nm;
	}
	public String getEstim_valid_d() {
		return estim_valid_d;
	}
	public void setEstim_valid_d(String estim_valid_d) {
		this.estim_valid_d = estim_valid_d;
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
	public String getAct_yn() {
		return act_yn;
	}
	public void setAct_yn(String act_yn) {
		this.act_yn = act_yn;
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
	public String getEstim_qty() {
		return estim_qty;
	}
	public void setEstim_qty(String estim_qty) {
		this.estim_qty = estim_qty;
	}
	public String getSales_price_1() {
		return sales_price_1;
	}
	public void setSales_price_1(String sales_price_1) {
		this.sales_price_1 = sales_price_1;
	}
	public String getSales_price_2() {
		return sales_price_2;
	}
	public void setSales_price_2(String sales_price_2) {
		this.sales_price_2 = sales_price_2;
	}
	public String getSales_price() {
		return sales_price;
	}
	public void setSales_price(String sales_price) {
		this.sales_price = sales_price;
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
	public String getEl_act_yn() {
		return el_act_yn;
	}
	public void setEl_act_yn(String el_act_yn) {
		this.el_act_yn = el_act_yn;
	}
	public String getCd_grp_id() {
		return cd_grp_id;
	}
	public void setCd_grp_id(String cd_grp_id) {
		this.cd_grp_id = cd_grp_id;
	}
	public String getSales_oppt_id() {
		return sales_oppt_id;
	}
	public void setSales_oppt_id(String sales_oppt_id) {
		this.sales_oppt_id = sales_oppt_id;
	}
	public String getSales_oppt_nm() {
		return sales_oppt_nm;
	}
	public void setSales_oppt_nm(String sales_oppt_nm) {
		this.sales_oppt_nm = sales_oppt_nm;
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
	public String getEstim_seq() {
		return estim_seq;
	}
	public void setEstim_seq(String estim_seq) {
		this.estim_seq = estim_seq;
	}
	public String getCust_nm() {
		return cust_nm;
	}
	public void setCust_nm(String cust_nm) {
		this.cust_nm = cust_nm;
	}
	public String getSales_lev_cd_nm() {
		return sales_lev_cd_nm;
	}
	public void setSales_lev_cd_nm(String sales_lev_cd_nm) {
		this.sales_lev_cd_nm = sales_lev_cd_nm;
	}
	public String getTotal_estim_qty() {
		return total_estim_qty;
	}
	public void setTotal_estim_qty(String total_estim_qty) {
		this.total_estim_qty = total_estim_qty;
	}
	public String getTotal_sales_price() {
		return total_sales_price;
	}
	public void setTotal_sales_price(String total_sales_price) {
		this.total_sales_price = total_sales_price;
	}
	public String getTotal_discount() {
		return total_discount;
	}
	public void setTotal_discount(String total_discount) {
		this.total_discount = total_discount;
	}
	public String getTotal_sup_price() {
		return total_sup_price;
	}
	public void setTotal_sup_price(String total_sup_price) {
		this.total_sup_price = total_sup_price;
	}
	public String getMemo() {
		return memo;
	}
	public void setMemo(String memo) {
		this.memo = memo;
	}
	public String getDiscount_unit_cd() {
		return discount_unit_cd;
	}
	public void setDiscount_unit_cd(String discount_unit_cd) {
		this.discount_unit_cd = discount_unit_cd;
	}
	public String getDiscount_unit_cd_nm() {
		return discount_unit_cd_nm;
	}
	public void setDiscount_unit_cd_nm(String discount_unit_cd_nm) {
		this.discount_unit_cd_nm = discount_unit_cd_nm;
	}
	
	public String getProd_price() {
		return prod_price;
	}
	public void setProd_price(String prod_price) {
		this.prod_price = prod_price;
	}
	@Override
	public String toString() {
		return "EstVO [estim_id=" + estim_id + ", cust_id=" + cust_id
				+ ", estim_nm=" + estim_nm + ", estim_lev_cd=" + estim_lev_cd
				+ ", estim_lev_cd_nm=" + estim_lev_cd_nm + ", estim_valid_d="
				+ estim_valid_d + ", fst_reg_id=" + fst_reg_id
				+ ", fst_reg_dt=" + fst_reg_dt + ", fin_mdfy_id="
				+ fin_mdfy_id + ", fin_mdfy_dt=" + fin_mdfy_dt + ", act_yn="
				+ act_yn + ", memo=" + memo + ", discount_unit_cd="
				+ discount_unit_cd + ", discount_unit_cd_nm="
				+ discount_unit_cd_nm + ", prod_id=" + prod_id + ", prod_nm="
				+ prod_nm + ", estim_qty=" + estim_qty + ", prod_price="
				+ prod_price + ", sales_price_1=" + sales_price_1
				+ ", sales_price_2=" + sales_price_2 + ", sales_price="
				+ sales_price + ", discount=" + discount + ", sup_price="
				+ sup_price + ", el_act_yn=" + el_act_yn + ", cd_grp_id="
				+ cd_grp_id + ", sales_oppt_id=" + sales_oppt_id
				+ ", sales_oppt_nm=" + sales_oppt_nm + ", code=" + code
				+ ", cd_nm=" + cd_nm + ", estim_seq=" + estim_seq
				+ ", cust_nm=" + cust_nm + ", sales_lev_cd_nm="
				+ sales_lev_cd_nm + ", total_estim_qty=" + total_estim_qty
				+ ", total_sales_price=" + total_sales_price
				+ ", total_discount=" + total_discount + ", total_sup_price="
				+ total_sup_price + "]";
	}
	
	
	
	
}
