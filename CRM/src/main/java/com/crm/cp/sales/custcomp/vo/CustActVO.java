package com.crm.cp.sales.custcomp.vo;

import org.springframework.stereotype.Component;

@Component
public class CustActVO {
	
	//영업활동 테이블// 
	String sales_actvy_id;      //영업활동ID
	String sales_oppt_id;       //영업기회ID
	String cust_id;             //고객ID  
	String sales_actvy_nm;      //영업활동명
	String sales_actvy_div_cd;  //영업활동구분코드
	String sales_actvy_div_nm;  //영업활동구분
	String sales_actvy_type_cd; //영업활동유형코드 
	String sales_actvy_type_nm; //영업활동유형명
	String strt_d;              //시작일자
	String strt_t;              //시작시간
	String strt_t_h;
	String strt_t_m;
	String end_d;               //종료일자
	String end_t;               //종료시간
	String end_t_h;
	String end_t_m;
	String sales_actvy_stat_cd; //영업활동상태코드
	String sales_actvy_stat_nm; //영업활동상태명
	String memo;                //메모
	String fst_reg_id;       //등록자명
	String fst_reg_dt;          //등록일자 
	String fin_mdfy_id;      //수정자명
	String fin_mdfy_dt;         //수정일자
	String act_yn;              //활성화여부
	
	//코드테이블
	String cd_grp_id;  //코드그룹ID 
	String cd_nm;      //코드명  
	String code;       //코드
	
	//영업기회테이블
	String sales_oppt_nm;  //영업기회명
	
	//고객테이블
	String cust_nm;
	
	String estim_nm;
	
	
	public String getEstim_nm() {
		return estim_nm;
	}

	public void setEstim_nm(String estim_nm) {
		this.estim_nm = estim_nm;
	}

	public CustActVO(){}

	public CustActVO(String sales_actvy_id, String sales_oppt_id, String cust_id,
			String sales_actvy_nm, String sales_actvy_div_cd, String sales_actvy_div_nm,
			String sales_actvy_type_cd, String sales_actvy_type_nm,
			String strt_d, String strt_t, String strt_t_h, String strt_t_m,
			String end_d, String end_t, String end_t_h, String end_t_m,
			String sales_actvy_stat_cd, String sales_actvy_stat_nm,
			String memo, String fst_reg_id, String fst_reg_dt,
			String fin_mdfy_id, String fin_mdfy_dt, String act_yn,
			String cd_grp_id, String cd_nm, String code, String sales_oppt_nm, String cust_nm) {
		super();
		this.sales_actvy_id = sales_actvy_id;
		this.sales_oppt_id = sales_oppt_id;
		this.cust_id = cust_id;
		this.sales_actvy_nm = sales_actvy_nm;
		this.sales_actvy_div_cd = sales_actvy_div_cd;
		this.sales_actvy_div_nm = sales_actvy_div_nm;
		this.sales_actvy_type_cd = sales_actvy_type_cd;
		this.sales_actvy_type_nm = sales_actvy_type_nm;
		this.strt_d = strt_d;
		this.strt_t = strt_t;
		this.strt_t_h = strt_t_h;
		this.strt_t_m = strt_t_m;
		this.end_d = end_d;
		this.end_t = end_t;
		this.end_t_h = end_t_h;
		this.end_t_m = end_t_m;
		this.sales_actvy_stat_cd = sales_actvy_stat_cd;
		this.sales_actvy_stat_nm = sales_actvy_stat_nm;
		this.memo = memo;
		this.fst_reg_id = fst_reg_id;
		this.fst_reg_dt = fst_reg_dt;
		this.fin_mdfy_id = fin_mdfy_id;
		this.fin_mdfy_dt = fin_mdfy_dt;
		this.act_yn = act_yn;
		this.cd_grp_id = cd_grp_id;
		this.cd_nm = cd_nm;
		this.code = code;
		this.sales_oppt_nm = sales_oppt_nm;
		this.cust_nm = cust_nm;
	}

	public String getSales_actvy_id() {
		return sales_actvy_id;
	}

	public void setSales_actvy_id(String sales_actvy_id) {
		this.sales_actvy_id = sales_actvy_id;
	}

	public String getSales_oppt_id() {
		return sales_oppt_id;
	}

	public void setSales_oppt_id(String sales_oppt_id) {
		this.sales_oppt_id = sales_oppt_id;
	}

	public String getCust_id() {
		return cust_id;
	}

	public void setCust_id(String cust_id) {
		this.cust_id = cust_id;
	}

	public String getSales_actvy_nm() {
		return sales_actvy_nm;
	}

	public void setSales_actvy_nm(String sales_actvy_nm) {
		this.sales_actvy_nm = sales_actvy_nm;
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

	public String getStrt_d() {
		return strt_d;
	}

	public void setStrt_d(String strt_d) {
		this.strt_d = strt_d;
	}

	public String getStrt_t() {
		return strt_t;
	}

	public void setStrt_t(String strt_t) {
		this.strt_t = strt_t;
	}

	public String getEnd_d() {
		return end_d;
	}

	public void setEnd_d(String end_d) {
		this.end_d = end_d;
	}

	public String getEnd_t() {
		return end_t;
	}

	public void setEnd_t(String end_t) {
		this.end_t = end_t;
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

	public String getCd_grp_id() {
		return cd_grp_id;
	}

	public void setCd_grp_id(String cd_grp_id) {
		this.cd_grp_id = cd_grp_id;
	}

	public String getCd_nm() {
		return cd_nm;
	}

	public void setCd_nm(String cd_nm) {
		this.cd_nm = cd_nm;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getSales_oppt_nm() {
		return sales_oppt_nm;
	}

	public void setSales_oppt_nm(String sales_oppt_nm) {
		this.sales_oppt_nm = sales_oppt_nm;
	}

	public String getSales_actvy_div_cd() {
		return sales_actvy_div_cd;
	}

	public void setSales_actvy_div_cd(String sales_actvy_div_cd) {
		this.sales_actvy_div_cd = sales_actvy_div_cd;
	}

	public String getCust_nm() {
		return cust_nm;
	}

	public void setCust_nm(String cust_nm) {
		this.cust_nm = cust_nm;
	}
	
	public String getStrt_t_h() {
		return strt_t_h;
	}

	public void setStrt_t_h(String strt_t_h) {
		this.strt_t_h = strt_t_h;
	}

	public String getStrt_t_m() {
		return strt_t_m;
	}

	public void setStrt_t_m(String strt_t_m) {
		this.strt_t_m = strt_t_m;
	}

	public String getEnd_t_h() {
		return end_t_h;
	}

	public void setEnd_t_h(String end_t_h) {
		this.end_t_h = end_t_h;
	}

	public String getEnd_t_m() {
		return end_t_m;
	}

	public void setEnd_t_m(String end_t_m) {
		this.end_t_m = end_t_m;
	}

	@Override
	public String toString() {
		return "ActVO [sales_actvy_id=" + sales_actvy_id + ", sales_oppt_id="
				+ sales_oppt_id + ", cust_id=" + cust_id + ", sales_actvy_nm="
				+ sales_actvy_nm + ", sales_actvy_div_cd=" + sales_actvy_div_cd
				+ ", sales_actvy_div_nm=" + sales_actvy_div_nm
				+ ", sales_actvy_type_cd=" + sales_actvy_type_cd
				+ ", sales_actvy_type_nm=" + sales_actvy_type_nm + ", strt_d="
				+ strt_d + ", strt_t=" + strt_t + ", strt_t_h=" + strt_t_h + ", strt_t_m="+ strt_t_m 
				+ ", end_d=" + end_d + ", end_t=" + end_t +  ", end_t_h=" + end_t_h + ", end_t_m=" + end_t_m
				+ ", sales_actvy_stat_cd="
				+ sales_actvy_stat_cd + ", sales_actvy_stat_nm="
				+ sales_actvy_stat_nm + ", memo=" + memo + ", fst_reg_id="
				+ fst_reg_id + ", fst_reg_dt=" + fst_reg_dt
				+ ", fin_mdfy_id=" + fin_mdfy_id + ", fin_mdfy_dt="
				+ fin_mdfy_dt + ", act_yn=" + act_yn + ", cd_grp_id="
				+ cd_grp_id + ", cd_nm=" + cd_nm + ", code=" + code
				+ ", sales_oppt_nm=" + sales_oppt_nm + ", cust_nm=" + cust_nm
				+ "]";
	}
	
}