package com.crm.cp.sales.act.vo;

import org.springframework.stereotype.Component;

@Component
public class ActVO {
	
	//영업활동 테이블// 
	String sales_actvy_id;      //영업활동ID
	String sales_oppt_id;       //영업기회ID
	String cust_id;             //고객ID  
	String sales_actvy_nm;      //영업활동명
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
	String sales_actvy_loc;		//영업활동장소
	String sales_actvy_person;	//엽업활동대상자
	String sales_actvy_content;	//영업활동내용
	String sales_actvy_reason;	//비고
	String fst_reg_id;       	//등록자명
	String fst_reg_dt;          //등록일자 
	String fin_mdfy_id;      	//수정자명
	String fin_mdfy_dt;         //수정일자
	String act_yn;              //활성화여부
	
	//검색
	String ssale_actvy_strt; 
	String ssale_actvy_strt0;
	String ssale_actvy_strt1;
	String sactvy_type_select;
	String sactvy_type_select0;
	String sactvy_type_select1;
	String ssales_actvy_nm;
	String ssales_actvy_nm0;
	String ssales_actvy_nm1;
	String ssales_oppt_nm; 
	String ssales_oppt_nm0;
	String ssales_oppt_nm1;
	String scust_id;
	String scust_id0;
	String scust_id1;
	
	public String getSsale_actvy_strt() {
		return ssale_actvy_strt;
	}

	public void setSsale_actvy_strt(String ssale_actvy_strt) {
		this.ssale_actvy_strt = ssale_actvy_strt;
	}

	public String getSsale_actvy_strt0() {
		return ssale_actvy_strt0;
	}

	public void setSsale_actvy_strt0(String ssale_actvy_strt0) {
		this.ssale_actvy_strt0 = ssale_actvy_strt0;
	}

	public String getSsale_actvy_strt1() {
		return ssale_actvy_strt1;
	}

	public void setSsale_actvy_strt1(String ssale_actvy_strt1) {
		this.ssale_actvy_strt1 = ssale_actvy_strt1;
	}

	public String getSactvy_type_select() {
		return sactvy_type_select;
	}

	public void setSactvy_type_select(String sactvy_type_select) {
		this.sactvy_type_select = sactvy_type_select;
	}

	public String getSactvy_type_select0() {
		return sactvy_type_select0;
	}

	public void setSactvy_type_select0(String sactvy_type_select0) {
		this.sactvy_type_select0 = sactvy_type_select0;
	}

	public String getSactvy_type_select1() {
		return sactvy_type_select1;
	}

	public void setSactvy_type_select1(String sactvy_type_select1) {
		this.sactvy_type_select1 = sactvy_type_select1;
	}

	public String getSsales_actvy_nm() {
		return ssales_actvy_nm;
	}

	public void setSsales_actvy_nm(String ssales_actvy_nm) {
		this.ssales_actvy_nm = ssales_actvy_nm;
	}

	public String getSsales_actvy_nm0() {
		return ssales_actvy_nm0;
	}

	public void setSsales_actvy_nm0(String ssales_actvy_nm0) {
		this.ssales_actvy_nm0 = ssales_actvy_nm0;
	}

	public String getSsales_actvy_nm1() {
		return ssales_actvy_nm1;
	}

	public void setSsales_actvy_nm1(String ssales_actvy_nm1) {
		this.ssales_actvy_nm1 = ssales_actvy_nm1;
	}

	public String getSsales_oppt_nm() {
		return ssales_oppt_nm;
	}

	public void setSsales_oppt_nm(String ssales_oppt_nm) {
		this.ssales_oppt_nm = ssales_oppt_nm;
	}

	public String getSsales_oppt_nm0() {
		return ssales_oppt_nm0;
	}

	public void setSsales_oppt_nm0(String ssales_oppt_nm0) {
		this.ssales_oppt_nm0 = ssales_oppt_nm0;
	}

	public String getSsales_oppt_nm1() {
		return ssales_oppt_nm1;
	}

	public void setSsales_oppt_nm1(String ssales_oppt_nm1) {
		this.ssales_oppt_nm1 = ssales_oppt_nm1;
	}

	public String getScust_id() {
		return scust_id;
	}

	public void setScust_id(String scust_id) {
		this.scust_id = scust_id;
	}

	public String getScust_id0() {
		return scust_id0;
	}

	public void setScust_id0(String scust_id0) {
		this.scust_id0 = scust_id0;
	}

	public String getScust_id1() {
		return scust_id1;
	}

	public void setScust_id1(String scust_id1) {
		this.scust_id1 = scust_id1;
	}

	//코드테이블
	String cd_grp_id;  //코드그룹ID 
	String cd_nm;      //코드명  
	String code;       //코드
	
	//영업기회테이블
	String sales_oppt_nm;  //영업기회명
	
	//고객테이블
	String cust_nm;
	
	public ActVO(){}

	public ActVO(String sales_actvy_id, String sales_oppt_id, String cust_id,
			String sales_actvy_nm, 
			String sales_actvy_type_cd, String sales_actvy_type_nm,
			String strt_d, String strt_t, String strt_t_h, String strt_t_m,
			String end_d, String end_t, String end_t_h, String end_t_m,
			String sales_actvy_stat_cd, String sales_actvy_stat_nm,
			String sales_actvy_loc, String sales_actvy_person,
			String sales_actvy_content, String sales_actvy_reason, 
			String fst_reg_id, String fst_reg_dt,
			String fin_mdfy_id, String fin_mdfy_dt, String act_yn,
			String cd_grp_id, String cd_nm, String code, String sales_oppt_nm, String cust_nm) {
		super();
		this.sales_actvy_id = sales_actvy_id;
		this.sales_oppt_id = sales_oppt_id;
		this.cust_id = cust_id;
		this.sales_actvy_nm = sales_actvy_nm;
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
		this.sales_actvy_loc = sales_actvy_loc;
		this.sales_actvy_person = sales_actvy_person;
		this.sales_actvy_content = sales_actvy_content;
		this.sales_actvy_reason = sales_actvy_reason;
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
	
	public String getSales_actvy_loc() {
		return sales_actvy_loc;
	}

	public void setSales_actvy_loc(String sales_actvy_loc) {
		this.sales_actvy_loc = sales_actvy_loc;
	}

	public String getSales_actvy_person() {
		return sales_actvy_person;
	}

	public void setSales_actvy_person(String sales_actvy_person) {
		this.sales_actvy_person = sales_actvy_person;
	}

	public String getSales_actvy_content() {
		return sales_actvy_content;
	}

	public void setSales_actvy_content(String sales_actvy_content) {
		this.sales_actvy_content = sales_actvy_content;
	}

	public String getSales_actvy_reason() {
		return sales_actvy_reason;
	}

	public void setSales_actvy_reason(String sales_actvy_reason) {
		this.sales_actvy_reason = sales_actvy_reason;
	}
	
	@Override
	public String toString() {
		return "ActVO [sales_actvy_id=" + sales_actvy_id + ", sales_oppt_id="
				+ sales_oppt_id + ", cust_id=" + cust_id + ", sales_actvy_nm="
				+ sales_actvy_nm
				+ ", sales_actvy_type_cd=" + sales_actvy_type_cd
				+ ", sales_actvy_type_nm=" + sales_actvy_type_nm + ", strt_d="
				+ strt_d + ", strt_t=" + strt_t + ", strt_t_h=" + strt_t_h + ", strt_t_m="+ strt_t_m 
				+ ", end_d=" + end_d + ", end_t=" + end_t +  ", end_t_h=" + end_t_h + ", end_t_m=" + end_t_m
				+ ", sales_actvy_stat_cd="
				+ sales_actvy_stat_cd + ", sales_actvy_stat_nm="+ sales_actvy_stat_nm 
				+ ", sales_actvy_loc=" +sales_actvy_loc + ", sales_actvy_person=" + sales_actvy_person
				+ ", sales_actvy_content=" + sales_actvy_content + ", sales_actvy_reason=" + sales_actvy_reason
				+ ", fst_reg_id="
				+ fst_reg_id + ", fst_reg_dt=" + fst_reg_dt
				+ ", fin_mdfy_id=" + fin_mdfy_id + ", fin_mdfy_dt="
				+ fin_mdfy_dt + ", act_yn=" + act_yn + ", cd_grp_id="
				+ cd_grp_id + ", cd_nm=" + cd_nm + ", code=" + code
				+ ", sales_oppt_nm=" + sales_oppt_nm + ", cust_nm=" + cust_nm
				+ "]";
	}
	
}