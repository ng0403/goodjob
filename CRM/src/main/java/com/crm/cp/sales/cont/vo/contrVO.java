package com.crm.cp.sales.cont.vo;

public class contrVO {

	String contr_id; // 계약 ID
	String sales_oppt_id; // 영업기회 ID
	String sales_oppt_nm; // 영업기회명
	String cust_id; // 고객ID
	String cust_nm; //고객명
	String estim_id; // 견적ID
	String contr_nm; // 계약명
	String contr_num; // 계약번호
	String contr_qty; // 계약 수량
	String contr_amt; // 계약 금액
	String contr_d; // 계약 일자
	String memo; // 메모
	String fst_reg_id; // 최초등록자
	String fst_reg_dt; // 최초등록일
	String fin_mdfy_id; // 최종변경자
	String fin_mdfy_dt; //최종변경일
	String act_yn; // 활성화여부
	String sales_lev_cd; // 영업단계
	String estim_nm; // 견적명
	String estim_lev_cd; // 견적단계
 	String sales_oppt_stat_cd; // 영업기회상태

	public String getContr_id() {
		return contr_id;
	}

	public void setContr_id(String contr_id) {
		this.contr_id = contr_id;
	}

	public String getSales_oppt_id() {
		return sales_oppt_id;
	}

	public void setSales_oppt_id(String sales_oppty_id) {
		this.sales_oppt_id = sales_oppty_id;
	}

	public String getCust_id() {
		return cust_id;
	}

	public void setCust_id(String cust_id) {
		this.cust_id = cust_id;
	}

	public String getEstim_id() {
		return estim_id;
	}

	public void setEstim_id(String estim_id) {
		this.estim_id = estim_id;
	}

	public String getContr_nm() {
		return contr_nm;
	}

	public void setContr_nm(String contr_nm) {
		this.contr_nm = contr_nm;
	}

	public String getContr_num() {
		return contr_num;
	}

	public void setContr_num(String contr_num) {
		this.contr_num = contr_num;
	}

	public String getContr_qty() {
		return contr_qty;
	}

	public void setContr_qty(String contr_qty) {
		this.contr_qty = contr_qty;
	}

	public String getContr_amt() {
		return contr_amt;
	}

	public void setContr_amt(String contr_amt) {
		this.contr_amt = contr_amt;
	}

	public String getContr_d() {
		return contr_d;
	}

	public void setContr_d(String contr_d) {
		this.contr_d = contr_d;
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

	
	public String getAct_yn() {
		return act_yn;
	}

	public void setAct_yn(String act_yn) {
		this.act_yn = act_yn;
	}

	public String getSales_oppt_nm() {
		return sales_oppt_nm;
	}

	public void setSales_oppt_nm(String sales_oppt_nm) {
		this.sales_oppt_nm = sales_oppt_nm;
	}

	public String getCust_nm() {
		return cust_nm;
	}

	public void setCust_nm(String cust_nm) {
		this.cust_nm = cust_nm;
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

	public String getSales_lev_cd() {
		return sales_lev_cd;
	}

	public void setSales_lev_cd(String sales_lev_cd) {
		this.sales_lev_cd = sales_lev_cd;
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

 
	public String getSales_oppt_stat_cd() {
		return sales_oppt_stat_cd;
	}

	public void setSales_oppt_stat_cd(String sales_oppt_stat_cd) {
		this.sales_oppt_stat_cd = sales_oppt_stat_cd;
	}
	

	@Override
	public String toString() {
		return "contrVO [contr_id=" + contr_id + ", sales_oppt_id="
				+ sales_oppt_id + ", sales_oppt_nm=" + sales_oppt_nm
				+ ", cust_id=" + cust_id + ", cust_nm=" + cust_nm
				+ ", estim_id=" + estim_id + ", contr_nm=" + contr_nm
				+ ", contr_num=" + contr_num + ", contr_qty=" + contr_qty
				+ ", contr_amt=" + contr_amt + ", contr_d=" + contr_d
				+ ", memo=" + memo + ", fst_reg_id=" + fst_reg_id
				+ ", fst_reg_dt=" + fst_reg_dt + ", fin_mdfy_id="
				+ fin_mdfy_id + ", fin_mdfy_dt=" + fin_mdfy_dt + ", act_yn="
				+ act_yn + ", sales_lev_cd=" + sales_lev_cd + ", estim_nm="
				+ estim_nm + ", estim_lev_cd=" + estim_lev_cd  
				+ ", sales_oppt_stat_cd=" + sales_oppt_stat_cd
				+ "]";
	}

	
	
	
	

	

	
	
	
	

}
