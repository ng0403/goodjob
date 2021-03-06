package com.crm.cp.standard.notice.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crm.cp.standard.notice.dao.NoticeDAO;
import com.crm.cp.standard.notice.vo.NoticeVO;

@Service
public class NoticeServiceImpl implements NoticeService{
	
	@Autowired
	NoticeDAO noticeDao;

	@Override
	public Object searchOneRecentNotice(String userId) {
		
		Object obj = noticeDao.searchOneRecentNotice("notice.searchOneRecentNotice", userId);
		return obj;
	}

	@Override
	public List<Object> searchListNotice() {
		
		List<Object> obj = noticeDao.searchListNotice();
		return obj;
	}

	@Override
	public List<Object> searchRowNumListNotice(Map<?, ?> map) {
		
		List<Object> obj = noticeDao.searchRowNumListNotice("notice.searchRowNumListNotice", map);
		return obj;
	}

	@Override
	public int countNotice(Map<?, ?> map) {
		
		int totalCount = noticeDao.countNotice("notice.countNotice", map);
		return totalCount;
	}

	@Override
	public Object searchOneNotice(String notice_id) {
		
		Object obj = noticeDao.searchOneNotice("notice.searchOneNotice", notice_id);
		return obj;
	}

	@Override
	public void increasechknumNotice(String notice_id) {
		
		noticeDao.increasechknumNotice("notice.increasechknumNotice", notice_id);
		
	}

	@Override
	public void deleteOneNotice(String notice_id) {
		
		noticeDao.deleteOneNotice("notice.deleteOneNotice", notice_id);
		
	}

	@Override
	public void insertOneNotice(NoticeVO noticeVO) {
		
		noticeDao.insertOneNotice("notice.insertOneNotice", noticeVO);
		
	}

	@Override
	public List<Object> searchListOrg() {
		
		List<Object> obj= noticeDao.searchListOrg("notice.searchListOrg");
		return obj;
		
	}

	@Override
	public void modifyNotice(Map<?, ?> json) {
		
		noticeDao.modifyNotice("notice.modifyNotice", json);
		
	}

}
