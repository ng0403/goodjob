package com.crm.cp.standard.prod.vo;

import java.util.Date;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class ProdVO {
	
	// 상품 카테고리 //
	String prod_id;
	String prod_nm;
	String prod_div_cd;
	String prod_price;
	String prod_url;
	MultipartFile prod_img;
	String prod_img_nm;
	String prod_img_save_loc;
	MultipartFile prod_catal;
	String prod_catal_nm;
	String prod_catal_save_loc;
	String prod_dtl_cont;
	String fst_reg_id;       //등록자명
	Date fst_reg_dt;            //등록일자 
	String fin_mdfy_id;      //수정자명
	Date fin_mdfy_dt;           //수정일자
	String act_yn;              //활성화여부
	
	//카테고리테이블
	String cate_nm;
	String cate_id;
	String cate;
	String cate_dtl_cont;
	String cd_nm;      //코드명  
	
	//코드테이블
	String cd_grp_id;  //코드그룹ID 
	String code;       //코드
	
	String prod_seq;
	String img_seq;
	String catal_seq;
	
	String attach_id;
	String attach_img_id;
	String attach_catal_id;
	
	private String order_by;
	private String order_sc;
	
	
	public String getOrder_by() {
		return order_by;
	}
	public void setOrder_by(String order_by) {
		this.order_by = order_by;
	}
	public String getOrder_sc() {
		return order_sc;
	}
	public void setOrder_sc(String order_sc) {
		this.order_sc = order_sc;
	}
	public String getAttach_id() {
		return attach_id;
	}
	public void setAttach_id(String attach_id) {
		this.attach_id = attach_id;
	}
	public String getAttach_img_id() {
		return attach_img_id;
	}
	public void setAttach_img_id(String attach_img_id) {
		this.attach_img_id = attach_img_id;
	}
	public String getAttach_catal_id() {
		return attach_catal_id;
	}
	public void setAttach_catal_id(String attach_catal_id) {
		this.attach_catal_id = attach_catal_id;
	}
	public String getProd_seq() {
		return prod_seq;
	}
	public void setProd_seq(String prod_seq) {
		this.prod_seq = prod_seq;
	}

	public String getImg_seq() {
		return img_seq;
	}
	public void setImg_seq(String img_seq) {
		this.img_seq = img_seq;
	}
	public String getCatal_seq() {
		return catal_seq;
	}
	public void setCatal_seq(String catal_seq) {
		this.catal_seq = catal_seq;
	}
	public MultipartFile getProd_img() {
		return prod_img;
	}
	public void setProd_img(MultipartFile prod_img) {
		this.prod_img = prod_img;
	}
	public MultipartFile getProd_catal() {
		return prod_catal;
	}
	public void setProd_catal(MultipartFile prod_catal) {
		this.prod_catal = prod_catal;
	}
	public String getProd_id() {
		return prod_id;
	}
	public void setProd_id(String prod_id) {
		this.prod_id = prod_id;
	}
	public String getCate_id() {
		return cate_id;
	}
	public void setCate_id(String cate_id) {
		this.cate_id = cate_id;
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
	public String getProd_price() {
		return prod_price;
	}
	public void setProd_price(String prod_price) {
		this.prod_price = prod_price;
	}
	public String getProd_url() {
		return prod_url;
	}
	public void setProd_url(String prod_url) {
		this.prod_url = prod_url;
	}
	public String getProd_img_nm() {
		return prod_img_nm;
	}
	public void setProd_img_nm(String prod_img_nm) {
		this.prod_img_nm = prod_img_nm;
	}
	public String getProd_catal_nm() {
		return prod_catal_nm;
	}
	public void setProd_catal_nm(String prod_catal_nm) {
		this.prod_catal_nm = prod_catal_nm;
	}
	public String getProd_dtl_cont() {
		return prod_dtl_cont;
	}
	public void setProd_dtl_cont(String prod_dtl_cont) {
		this.prod_dtl_cont = prod_dtl_cont;
	}
	public String getFst_reg_id() {
		return fst_reg_id;
	}
	public void setFst_reg_id(String fst_reg_id) {
		this.fst_reg_id = fst_reg_id;
	}
	public Date getFst_reg_dt() {
		return fst_reg_dt;
	}
	public void setFst_reg_dt(Date fst_reg_dt) {
		this.fst_reg_dt = fst_reg_dt;
	}
	public String getFin_mdfy_id() {
		return fin_mdfy_id;
	}
	public void setFin_mdfy_id(String fin_mdfy_id) {
		this.fin_mdfy_id = fin_mdfy_id;
	}
	public Date getFin_mdfy_dt() {
		return fin_mdfy_dt;
	}
	public void setFin_mdfy_dt(Date fin_mdfy_dt) {
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
	public String getCate() {
		return cate;
	}
	public void setCate(String cate) {
		this.cate = cate;
	}
	public String getCate_nm() {
		return cate_nm;
	}
	public void setCate_nm(String cate_nm) {
		this.cate_nm = cate_nm;
	}
	public String getCate_dtl_cont() {
		return cate_dtl_cont;
	}
	public void setCate_dtl_cont(String cate_dtl_cont) {
		this.cate_dtl_cont = cate_dtl_cont;
	}
	public String getProd_img_save_loc() {
		return prod_img_save_loc;
	}
	public void setProd_img_save_loc(String prod_img_save_loc) {
		this.prod_img_save_loc = prod_img_save_loc;
	}
	public String getProd_catal_save_loc() {
		return prod_catal_save_loc;
	}
	public void setProd_catal_save_loc(String prod_catal_save_loc) {
		this.prod_catal_save_loc = prod_catal_save_loc;
	}
	@Override
	public String toString() {
		return "ProdVO [prod_id=" + prod_id + ", prod_nm=" + prod_nm
				+ ", prod_div_cd=" + prod_div_cd + ", prod_price="
				+ prod_price + ", prod_url=" + prod_url + ", prod_img="
				+ prod_img + ", prod_img_nm=" + prod_img_nm
				+ ", prod_img_save_loc=" + prod_img_save_loc + ", prod_catal="
				+ prod_catal + ", prod_catal_nm=" + prod_catal_nm
				+ ", prod_catal_save_loc=" + prod_catal_save_loc
				+ ", prod_dtl_cont=" + prod_dtl_cont + ", fst_reg_id="
				+ fst_reg_id + ", fst_reg_dt=" + fst_reg_dt
				+ ", fin_mdfy_id=" + fin_mdfy_id + ", fin_mdfy_dt="
				+ fin_mdfy_dt + ", act_yn=" + act_yn + ", cate_nm=" + cate_nm
				+ ", cate_id=" + cate_id + ", cate=" + cate
				+ ", cate_dtl_cont=" + cate_dtl_cont + ", cd_nm=" + cd_nm
				+ ", cd_grp_id=" + cd_grp_id + ", code=" + code + "]";
	}
	
	
	
	
	
}