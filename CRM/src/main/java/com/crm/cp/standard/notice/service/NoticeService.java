package com.crm.cp.standard.notice.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.notice.vo.NoticeVO;

public interface NoticeService {

	public Object searchOneRecentNotice(String userId);
	public List<Object> searchListNotice();
	public List<Object> searchRowNumListNotice(Map<?, ?> map);
	public int countNotice(Map<?, ?> map);
	public Object searchOneNotice(String notice_id);
	public void increasechknumNotice(String notice_id);
	public void deleteOneNotice(String notice_id);
	public void insertOneNotice(NoticeVO noticeVO);
	public List<Object> searchListOrg();
	public void modifyNotice(Map<?, ?> json);

}
