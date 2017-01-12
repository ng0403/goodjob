package com.crm.cp.standard.notice.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.notice.vo.NoticeVO;

public interface NoticeDAO {

	public Object searchOneRecentNotice(String string, String userId);
	public List<Object> searchListNotice();
	public List<Object> searchRowNumListNotice(String root, Map<?, ?> map);
	public int countNotice(String root, Map<?, ?> map);
	public Object searchOneNotice(String root, String notice_id);
	public void increasechknumNotice(String root, String notice_id);
	public void deleteOneNotice(String root, String notice_id);
	public void insertOneNotice(String root, NoticeVO noticeVO);
	public List<Object> searchListOrg(String root);
	public void modifyNotice(String root, Map<?, ?> json);

}
