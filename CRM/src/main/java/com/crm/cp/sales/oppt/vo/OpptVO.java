package com.crm.cp.sales.oppt.vo;

public class OpptVO {

	private String sales_oppt_id; // 영업기회ID
	private String sales_oppt_nm; // 영업기회명
	private String lead_id; // 리드ID
	private String cust_id; // 고객ID
	private String sales_lev_cd; // 영업단계코드
	private String sales_lev_cd_nm; // 영업단계코드명
	private String expt_sales_amt; // 예상매출액
	private String expt_fin_d; // 예상마감일자
	private String psblty_rate; // 가능성
	private String sales_oppt_stat_cd; // 영업기회상태코드
	private String sales_oppt_stat_cd_nm; // 영업기회상태코드명
	private String cust_nm; // 고객명
	private String memo; // 메모
	private String fst_reg_id; // 최초등록자ID명
	private String fst_reg_dt; // 최초등록일시
	private String fin_mdfy_id; // 최종변경자ID명
	private String fin_mdfy_dt; // 최종변경일시
	private String act_yn; // 활성화여부
	private String estim_id; // 견적ID
	private String estim_nm; // 견적명
	private String org_nm; // 부서명
	private int idx; // index값

	// 코드 정보
	private String cd_grp_id; // 코드그룹ID
	private String code; // 코드
	private String cd_nm; // 코드명
	private String estim_qty;
	private String sales_price;
	
	//차트 영업기회상태
	private String ing;
	private String cplt;
	private String fail;
	
	//영업기회별 상품
	private String estim_lev_cd;
	private String estim_lev_cd_nm;
	private String estim_valid_d;
	private String discount_unit_cd;
	private String discount_unit_cd_nm;
	private String prod_id;
	private String prod_nm;
	private String prod_price;
	private String sales_price_1;
	private String sales_price_2;
	private String discount;
	private String sup_price;
	private String el_act_yn;
	
	private String estim_seq;
	
	private String total_estim_qty;
	private String total_sales_price;
	private String total_discount;
	private String total_sup_price;
	
	

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

	public String getProd_price() {
		return prod_price;
	}

	public void setProd_price(String prod_price) {
		this.prod_price = prod_price;
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

	public String getEstim_seq() {
		return estim_seq;
	}

	public void setEstim_seq(String estim_seq) {
		this.estim_seq = estim_seq;
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

	public String getIng() {
		return ing;
	}

	public void setIng(String ing) {
		this.ing = ing;
	}

	public String getCplt() {
		return cplt;
	}

	public void setCplt(String cplt) {
		this.cplt = cplt;
	}

	public String getFail() {
		return fail;
	}

	public void setFail(String fail) {
		this.fail = fail;
	}

	public String getSales_price() {
		return sales_price;
	}

	public void setSales_price(String sales_price) {
		this.sales_price = sales_price;
	}

	public String getEstim_qty() {
		return estim_qty;
	}

	public void setEstim_qty(String estim_qty) {
		this.estim_qty = estim_qty;
	}

	public String getEstim_nm() {
		return estim_nm;
	}

	public void setEstim_nm(String estim_nm) {
		this.estim_nm = estim_nm;
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

	public String getSales_oppt_stat_cd() {
		return sales_oppt_stat_cd;
	}

	public void setSales_oppt_stat_cd(String sales_oppt_stat_cd) {
		this.sales_oppt_stat_cd = sales_oppt_stat_cd;
	}

	public String getSales_oppt_stat_cd_nm() {
		return sales_oppt_stat_cd_nm;
	}

	public void setSales_oppt_stat_cd_nm(String sales_oppt_stat_cd_nm) {
		this.sales_oppt_stat_cd_nm = sales_oppt_stat_cd_nm;
	}

	public String getSales_lev_cd_nm() {
		return sales_lev_cd_nm;
	}

	public void setSales_lev_cd_nm(String sales_lev_cd_nm) {
		this.sales_lev_cd_nm = sales_lev_cd_nm;
	}

	public String getLead_id() {
		return lead_id;
	}

	public void setLead_id(String lead_id) {
		this.lead_id = lead_id;
	}

	public String getCust_id() {
		return cust_id;
	}

	public void setCust_id(String cust_id) {
		this.cust_id = cust_id;
	}

	public String getSales_lev_cd() {
		return sales_lev_cd;
	}

	public void setSales_lev_cd(String sales_lev_cd) {
		this.sales_lev_cd = sales_lev_cd;
	}

	public String getExpt_sales_amt() {
		return expt_sales_amt;
	}

	public void setExpt_sales_amt(String expt_sales_amt) {
		this.expt_sales_amt = expt_sales_amt;
	}

	public String getExpt_fin_d() {
		return expt_fin_d;
	}

	public void setExpt_fin_d(String expt_fin_d) {
		this.expt_fin_d = expt_fin_d;
	}

	public String getPsblty_rate() {
		return psblty_rate;
	}

	public void setPsblty_rate(String psblty_rate) {
		this.psblty_rate = psblty_rate;
	}

	public String getMemo() {
		return memo;
	}

	public void setMemo(String memo) {
		this.memo = memo;
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

	public String getCust_nm() {
		return cust_nm;
	}

	public void setCust_nm(String cust_nm) {
		this.cust_nm = cust_nm;
	}

	public String getEstim_id() {
		return estim_id;
	}

	public void setEstim_id(String estim_id) {
		this.estim_id = estim_id;
	}



	public int getIdx() {
		return idx;
	}

	public void setIdx(int idx) {
		this.idx = idx;
	}

	public String getOrg_nm() {
		return org_nm;
	}

	public void setOrg_nm(String org_nm) {
		this.org_nm = org_nm;
	}


	
	@Override
	public String toString() {
		return "OpptVO [sales_oppt_id=" + sales_oppt_id 
				+ ", sales_oppt_nm=" + sales_oppt_nm 
				+ ", lead_id=" + lead_id
				+ ", cust_id=" + cust_id 
				+ ", sales_lev_cd=" + sales_lev_cd 
				+ ", sales_lev_cd_nm=" + sales_lev_cd_nm
				+ ", expt_sales_amt=" + expt_sales_amt 
				+ ", expt_fin_d=" + expt_fin_d 
				+ ", psblty_rate=" + psblty_rate
				+ ", sales_oppt_stat_cd=" + sales_oppt_stat_cd 
				+ ", sales_oppt_stat_cd_nm=" + sales_oppt_stat_cd_nm
				+ ", cust_nm=" + cust_nm 
				+ ", memo=" + memo 
				+ ", fst_reg_id=" + fst_reg_id 
				+ ", fst_reg_dt=" + fst_reg_dt 
				+ ", fin_mdfy_id=" + fin_mdfy_id 
				+ ", fin_mdfy_dt=" + fin_mdfy_dt 
				+ ", act_yn=" + act_yn
				+ ", estim_id=" + estim_id 
				+ ", estim_nm=" + estim_nm 
				+ ", org_nm=" + org_nm 
				+ ", idx=" + idx
				+ ", cd_grp_id=" + cd_grp_id 
				+ ", code=" + code 
				+ ", cd_nm=" + cd_nm 
				+ ", estim_qty=" + estim_qty
				+ ", sales_price=" + sales_price 
				+ ", ing=" + ing 
				+ ", cplt=" + cplt 
				+ ", fail=" + fail
				+ ", estim_lev_cd=" + estim_lev_cd 
				+ ", estim_lev_cd_nm=" + estim_lev_cd_nm 
				+ ", estim_valid_d=" + estim_valid_d 
				+ ", discount_unit_cd=" + discount_unit_cd 
				+ ", discount_unit_cd_nm=" + discount_unit_cd_nm 
				+ ", prod_id=" + prod_id 
				+ ", prod_nm=" + prod_nm 
				+ ", prod_price=" + prod_price
				+ ", sales_price_1=" + sales_price_1 
				+ ", sales_price_2=" + sales_price_2 
				+ ", discount=" + discount
				+ ", sup_price=" + sup_price 
				+ ", el_act_yn=" + el_act_yn 
				+ ", estim_seq=" + estim_seq
				+ ", total_estim_qty=" + total_estim_qty 
				+ ", total_sales_price=" + total_sales_price
				+ ", total_discount=" + total_discount 
				+ ", total_sup_price=" + total_sup_price 
				+ "]";
	}

	public String toStringOpptStatus(){
		return "OpptVO-Sales_oppt_status [ing=" + ing + ", cplt=" + cplt + ", fail=" + fail + "]";
	}

}
