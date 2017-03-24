package com.crm.cp.sales.oppt.vo;

public class OpptChartVO {
	
	//차트 영업기회상태
	private String ing;
	private String cplt;
	private String fail;
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
	@Override
	public String toString() {
		return "OpptChartVO [ing=" + ing + ", cplt=" + cplt + ", fail=" + fail + "]";
	}
	
	

	

}
