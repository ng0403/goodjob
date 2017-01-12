package com.crm.cp.standard.data_board.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.data_board.vo.AttachVO;
import com.crm.cp.standard.data_board.vo.Data_boardVO;

public interface Data_boardDAO {

	public Object searchOneRecentData_board(String root);
	public List<Object> searchListData_board(String root);
	public int countData_board(String root, Map<?, ?> map);
	public List<Object> searchRowNumListData_board(String root, Map<?, ?> map);
	public List<Object> searchListCode(String root);
	public Object searchOneData_board(String root, String dboard_id);
	public void increasechknumData_board(String root, String dboard_id);
	public void deleteOneData_board(String root, String data_board_id);
	public void modifyData_board(String root, Map<?, ?> json);
	public List<Object> searchListFileById(String root, String dboard_id);
	public Object searchOneFiledata(String root, String attach_id);
	public Object searchOneUser(String root, String userId);
	public void insertOneData_board(String root, Map json);
	public void insertAttachData(String root, AttachVO attach);
	public List<Object> searchFileList(String root, String boardId);

}
