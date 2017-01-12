package com.crm.cp.standard.data_board.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crm.cp.standard.data_board.dao.Data_boardDAO;
import com.crm.cp.standard.data_board.vo.AttachVO;
import com.crm.cp.standard.data_board.vo.Data_boardVO;

@Service
public class Data_boardServiceImpl implements Data_boardService{
	
	@Autowired
	Data_boardDAO data_boardDAO;

	@Override
	public Object searchOneRecentData_board() {
		
		Object obj = data_boardDAO.searchOneRecentData_board("dboard.searchOneRecentdboard");
		return obj;
	}

	@Override
	public List<Object> searchListData_board() {
		
		List<Object> obj = data_boardDAO.searchListData_board("dboard.searchListdboard");
		return obj;
	}

	@Override
	public int countData_board(Map<?, ?> map) {
		
		int obj = data_boardDAO.countData_board("dboard.countdboard", map);
		return obj;
	}

	@Override
	public List<Object> searchRowNumListData_board(Map<?, ?> map) {
		
		List<Object> obj = data_boardDAO.searchRowNumListData_board("dboard.searchRowNumListdboard", map);
		return obj;
	}

	@Override
	public List<Object> searchListCode() {
		
		List<Object> obj = data_boardDAO.searchListCode("dboard.searchListCode");
		return obj;
	}

	@Override
	public Object searchOneData_board(String dboard_id) {
		
		Object obj = data_boardDAO.searchOneData_board("dboard.searchOnedboard", dboard_id);
		return obj;
	}

	@Override
	public void increasechknumData_board(String dboard_id) {
		
		data_boardDAO.increasechknumData_board("dboard.increasechknumdboard", dboard_id);
		
	}

	@Override
	public void deleteOneData_board(String data_board_id) {
		
		data_boardDAO.deleteOneData_board("dboard.deleteOnedboard", data_board_id);
		
	}

	@Override
	public void modifyData_board(Map<?, ?> json) {

		data_boardDAO.modifyData_board("dboard.modifydboard", json);
		
	}

	@Override
	public List<Object> searchListFileById(String dboard_id) {
		
		List<Object> obj= data_boardDAO.searchListFileById("dboard.searchListFileById", dboard_id);
		return obj;
		
	}

	@Override
	public Object searchOneFiledata(String attach_id) {
		
		Object obj = data_boardDAO.searchOneFiledata("dboard.searchOneFiledata", attach_id);
		return obj;
		
	}

	@Override
	public Object searchOneUser(String userId) {
		
		Object obj = data_boardDAO.searchOneUser("dboard.searchOneUser", userId);
		return obj;
	}

	@Override
	public void insertOneData_board(Map json) {

		data_boardDAO.insertOneData_board("dboard.insertOnedboard", json);
		
	}

	@Override
	public void insertAttachData(AttachVO attach) {
		
		data_boardDAO.insertAttachData("dboard.insertAttachData", attach);
		
	}

	@Override
	public List<Object> searchFileList(String boardId) {

		List<Object> obj= data_boardDAO.searchFileList("dboard.searchFileList", boardId);
		return obj;
	}
}
