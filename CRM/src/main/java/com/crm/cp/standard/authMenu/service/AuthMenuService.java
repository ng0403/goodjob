package com.crm.cp.standard.authMenu.service;

import java.util.List;
import java.util.Map;

public interface AuthMenuService {
	public List<Object> authMenuList();
	public List<Object> authMenuList(Map<String,Object> JSON);
	public List<Object> authMenuSearchList(Map<String,Object> map);
	public List<Object> menuList();
	public Object authMenuDetail(Object obj);
	public void authMenuPopUpdate(Object obj);
	public void authMenuInsert(Object obj);
	public void authMenuDelete(Object obj);
}
