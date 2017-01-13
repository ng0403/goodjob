package com.crm.cp.test.employee.vo;

public class EmployeeVO {
	
	private String USER_ID;
	private String EMP_NO;
	private String POSITION_CD;
	private String WORK_PHONE_NO;
	private String JOIN_DAY;
	private String RETIRE_DAY;
	private String EMP_STATUS_CD;
	private String C_USER_ID;
 
	public String getUSER_ID() {
		return USER_ID;
	}
	public void setUSER_ID(String uSER_ID) {
		USER_ID = uSER_ID;
	}
	public String getEMP_NO() {
		return EMP_NO;
	}
	public void setEMP_NO(String eMP_NO) {
		EMP_NO = eMP_NO;
	}
	public String getPOSITION_CD() {
		return POSITION_CD;
	}
	public void setPOSITION_CD(String pOSITION_CD) {
		POSITION_CD = pOSITION_CD;
	}
	public String getWORK_PHONE_NO() {
		return WORK_PHONE_NO;
	}
	public void setWORK_PHONE_NO(String wORK_PHONE_NO) {
		WORK_PHONE_NO = wORK_PHONE_NO;
	}
	public String getJOIN_DAY() {
		return JOIN_DAY;
	}
	public void setJOIN_DAY(String jOIN_DAY) {
		JOIN_DAY = jOIN_DAY;
	}
	public String getRETIRE_DAY() {
		return RETIRE_DAY;
	}
	public void setRETIRE_DAY(String rETIRE_DAY) {
		RETIRE_DAY = rETIRE_DAY;
	}
	public String getEMP_STATUS_CD() {
		return EMP_STATUS_CD;
	}
	public void setEMP_STATUS_CD(String eMP_STATUS_CD) {
		EMP_STATUS_CD = eMP_STATUS_CD;
	}
	public String getC_USER_ID() {
		return C_USER_ID;
	}
	public void setC_USER_ID(String c_USER_ID) {
		C_USER_ID = c_USER_ID;
	}
	
	@Override
	public String toString() {
		return "EmployeeVO [USER_ID=" + USER_ID + ", EMP_NO=" + EMP_NO + ", POSITION_CD=" + POSITION_CD
				+ ", WORK_PHONE_NO=" + WORK_PHONE_NO + ", JOIN_DAY=" + JOIN_DAY + ", RETIRE_DAY=" + RETIRE_DAY
				+ ", EMP_STATUS_CD=" + EMP_STATUS_CD + ", C_USER_ID=" + C_USER_ID + "]";
	}
 
	

}
