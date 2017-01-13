package com.crm.cp.test.org.servise;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import com.crm.cp.test.org.vo.OrganVO;

public interface OrganService {

	public List<Object> searchOrganList();
	public void insertOrgan(OrganVO organVO);

}
