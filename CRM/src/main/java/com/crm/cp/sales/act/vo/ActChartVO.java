package com.crm.cp.sales.act.vo;

import org.springframework.stereotype.Component;

@Component
public class ActChartVO {
	private String 진행중;	// ing
	private String 보류;	// defer
	private String 예정;	// schedule
	private String 완료;	// complete
	
	public String get진행중() {
		return 진행중;
	}
	
	public void set진행중(String 진행중) {
		this.진행중 = 진행중;
	}
	
	public String get보류() {
		return 보류;
	}
	
	public void set보류(String 보류) {
		this.보류 = 보류;
	}
	
	public String get예정() {
		return 예정;
	}
	
	public void set예정(String 예정) {
		this.예정 = 예정;
	}
	
	public String get완료() {
		return 완료;
	}
	
	public void set완료(String 완료) {
		this.완료 = 완료;
	}
	
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "ActChartVO [진행중=" + 진행중 + ", 보류=" + 보류 + ", 예정=" + 예정 + ", 완료=" + 완료 + "]";
	}

}