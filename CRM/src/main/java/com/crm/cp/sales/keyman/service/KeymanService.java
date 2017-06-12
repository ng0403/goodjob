package com.crm.cp.sales.keyman.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.utils.PagerVO;

public interface KeymanService {
	
	public PagerVO keymanListCount(Map<String, Object> keymanMap); // 키맨 리스트갯수 
	public List<KeymanVO> keymanAllList(Map<String,Object> keymanMap); // 키맨 리스트.
	public KeymanVO keymanDetail(KeymanVO vo); //키맨 상세보기
	String keymanUpdate(KeymanVO keymanVO); // 키맨 수정하기.
	String insertKeyman(KeymanVO kVO); 	 // 키맨 추가하기.
	String KeymanDelete(KeymanVO kVO); 	 // 키맨 삭제
	
	public PagerVO KeymanSearchCount(Map<String, Object> kwMap); // 검색 리스트 갯수 
	public List<KeymanVO> keymanSearchAll(Map<String,Object> contactMap); // 검색
	
	List<Object> contactListPop(Map<String, Object> map); //연락처 리스트 팝업
   }
