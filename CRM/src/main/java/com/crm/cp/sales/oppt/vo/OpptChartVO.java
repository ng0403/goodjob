package com.crm.cp.sales.oppt.vo;

public class OpptChartVO {
	
	//차트 영업기회상태
//	private String ing;
//	private String cplt;
//	private String fail;
	private String 진행중;
	private String 계약완료;
	private String 계약실패;
	
	
	
	public String get진행중() {
		return 진행중;
	}
	public void set진행중(String 진행중) {
		this.진행중 = 진행중;
	}
	public String get계약완료() {
		return 계약완료;
	}
	public void set계약완료(String 계약완료) {
		this.계약완료 = 계약완료;
	}
	public String get계약실패() {
		return 계약실패;
	}
	public void set계약실패(String 계약실패) {
		this.계약실패 = 계약실패;
	}
//	public String getIng() {
//		return ing;
//	}
//	public void setIng(String ing) {
//		this.ing = ing;
//	}
//	public String getCplt() {
//		return cplt;
//	}
//	public void setCplt(String cplt) {
//		this.cplt = cplt;
//	}
//	public String getFail() {
//		return fail;
//	}
//	public void setFail(String fail) {
//		this.fail = fail;
//	}
	@Override
	public String toString() {
		return "OpptChartVO [진행중=" + 진행중 + ", 계약완료=" + 계약완료 + ", 계약실패=" + 계약실패 + "]";
	}
	
	
	

	

}
