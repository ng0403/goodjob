package com.crm.cp.sales.custcomp.vo;

public class PosVO {

	private String 
					  sales_actvy_id //영업담당자 ID
					, sales_actvy_nm //영업당당자 이름
					, cust_id	//고객사 ID
					, cust_nm	//고객사 이름
					, iuser_id	//사원 ID
					, iuser_nm  //사원 이름
					, key_part	//역할명
					, fst_reg_id // 등록자
					, fst_reg_dt // 등록일시
					, fin_mdfy_id // 최종변경자
					, fin_mdfy_dt //최종변경일시 
					, sales_actvy_div_cd  //영업활동구분코드
					, sales_actvy_div_nm  //영업활동구분
					, sales_actvy_type_cd //영업활동유형코드 
					, sales_actvy_type_nm //영업활동유형명
					, sales_actvy_stat_cd //영업활동상태코드
					, sales_actvy_stat_nm //영업활동상태명
					, memo                //메모
					, act_yn;
	
	public String getSales_actvy_div_cd() {
		return sales_actvy_div_cd;
	}

	public void setSales_actvy_div_cd(String sales_actvy_div_cd) {
		this.sales_actvy_div_cd = sales_actvy_div_cd;
	}

	public String getSales_actvy_div_nm() {
		return sales_actvy_div_nm;
	}

	public void setSales_actvy_div_nm(String sales_actvy_div_nm) {
		this.sales_actvy_div_nm = sales_actvy_div_nm;
	}

	public String getSales_actvy_type_cd() {
		return sales_actvy_type_cd;
	}

	public void setSales_actvy_type_cd(String sales_actvy_type_cd) {
		this.sales_actvy_type_cd = sales_actvy_type_cd;
	}

	public String getSales_actvy_type_nm() {
		return sales_actvy_type_nm;
	}

	public void setSales_actvy_type_nm(String sales_actvy_type_nm) {
		this.sales_actvy_type_nm = sales_actvy_type_nm;
	}

	public String getSales_actvy_stat_cd() {
		return sales_actvy_stat_cd;
	}

	public void setSales_actvy_stat_cd(String sales_actvy_stat_cd) {
		this.sales_actvy_stat_cd = sales_actvy_stat_cd;
	}

	public String getSales_actvy_stat_nm() {
		return sales_actvy_stat_nm;
	}

	public void setSales_actvy_stat_nm(String sales_actvy_stat_nm) {
		this.sales_actvy_stat_nm = sales_actvy_stat_nm;
	}

	public String getMemo() {
		return memo;
	}

	public void setMemo(String memo) {
		this.memo = memo;
	}

	public String getAct_yn() {
		return act_yn;
	}

	public void setAct_yn(String act_yn) {
		this.act_yn = act_yn;
	}

	public String getSales_actvy_id() {
		return sales_actvy_id;
	}

	public String getSales_actvy_nm() {
		return sales_actvy_nm;
	}

	public void setSales_actvy_nm(String sales_actvy_nm) {
		this.sales_actvy_nm = sales_actvy_nm;
	}

	public String getCust_nm() {
		return cust_nm;
	}

	public void setCust_nm(String cust_nm) {
		this.cust_nm = cust_nm;
	}

	public String getIuser_nm() {
		return iuser_nm;
	}

	public void setIuser_nm(String iuser_nm) {
		this.iuser_nm = iuser_nm;
	}

	public void setSales_actvy_id(String sales_actvy_id) {
		this.sales_actvy_id = sales_actvy_id;
	}

	public String getCust_id() {
		return cust_id;
	}

	public void setCust_id(String cust_id) {
		this.cust_id = cust_id;
	}

	public String getIuser_id() {
		return iuser_id;
	}

	public void setIuser_id(String iuser_id) {
		this.iuser_id = iuser_id;
	}

	public String getKey_part() {
		return key_part;
	}

	public void setKey_part(String key_part) {
		this.key_part = key_part;
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

	@Override
	public String toString() {
		return "PosVO [sales_actvy_id=" + sales_actvy_id + ", sales_actvy_nm=" + sales_actvy_nm + ", cust_id=" + cust_id
				+ ", cust_nm=" + cust_nm + ", iuser_id=" + iuser_id + ", iuser_nm=" + iuser_nm + ", key_part="
				+ key_part + ", fst_reg_id=" + fst_reg_id + ", fst_reg_dt=" + fst_reg_dt + ", fin_mdfy_id="
				+ fin_mdfy_id + ", fin_mdfy_dt=" + fin_mdfy_dt + ", sales_actvy_div_cd=" + sales_actvy_div_cd
				+ ", sales_actvy_div_nm=" + sales_actvy_div_nm + ", sales_actvy_type_cd=" + sales_actvy_type_cd
				+ ", sales_actvy_type_nm=" + sales_actvy_type_nm + ", sales_actvy_stat_cd=" + sales_actvy_stat_cd
				+ ", sales_actvy_stat_nm=" + sales_actvy_stat_nm + ", memo=" + memo + ", act_yn=" + act_yn + "]";
	}

	


}