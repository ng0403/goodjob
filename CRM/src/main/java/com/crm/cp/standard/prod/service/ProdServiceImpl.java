package com.crm.cp.standard.prod.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.crm.cp.standard.prod.dao.ProdDao;
import com.crm.cp.standard.prod.vo.ProdVO;
import com.crm.cp.utils.PagerVO;

@Service("ProdService")
public class ProdServiceImpl implements ProdService{
	
	@Resource
	ProdDao prodDao;

	
	@Override
	public void prodUpdate(ProdVO dto) {
		int result = prodDao.prodUpdateData(dto);
		String imgFilename = dto.getProd_img_save_loc();
		String catalFilename = dto.getProd_catal_save_loc();
		if(imgFilename != null){
			result += prodDao.imgFileUpdateData(dto);
			if(result >= 2){
				result += prodDao.prodImgFileDelete(dto);
				if(result >= 3){
					result += prodDao.prodImgFileInsert(dto);
					result = 1;
				}
			}
		}
		if(catalFilename != null){
			result += prodDao.catalFileUpdateData(dto);
			if(result >= 2){
				result += prodDao.prodCatalFileDelete(dto);
				if(result >= 3){
					result += prodDao.prodCatalFileInsert(dto);
					result = 0;
				}
			}
		}
	}
	
	@Override
	public List<ProdVO> prodAllList(Map<String, Object> prodMap) {		
		return prodDao.prodList(prodMap);
	}

	@Override
	public PagerVO getProdListCount(Map<String, Object> prodMap) {
		int prodPageNum = (Integer) prodMap.get("prodPageNum");
				
		// 현재 페이지 얻어오기
//		PagerVO page = new PagerVO(prodPageNum, 0, 3, 10);
		// 전체 글의 갯수 구하기
		int totalRowCount = prodDao.getProdListCount();
				
		PagerVO page = new PagerVO(prodPageNum, totalRowCount, 10, 10);
	
		return page;
	}
	
	@Override
	public ProdVO prodRead(String prod_id) {
		return prodDao.prodRead(prod_id);
	}
	
	@Override
	public void prodInsert(ProdVO dto){	
		int result = prodDao.prodInsert(dto);
		String imgFilename = dto.getProd_img_save_loc();
		String catalFilename = dto.getProd_catal_save_loc();
		if(imgFilename != null){
			result += prodDao.imgFileInsert(dto);
			if(result >= 2){
				result += prodDao.prodImgFileInsert(dto);
				result = 1;
			}
		}
		if(catalFilename != null){
			result += prodDao.catalFileInsert(dto);
			if(result >= 2){
				result += prodDao.prodCatalFileInsert(dto);
				result = 0;
			}
		}
//		if(result == 1){
//			result += prodDao.fileInsert(dto);
//		}
//		if(result >= 2){
//			result += prodDao.prodFileInsert(dto);
//			result = 0;
//		}
	}
	
	@Override
	public List<ProdVO> prodCateList() {
		return prodDao.prodCateList();
	}
	
	
	@Override
	public List<ProdVO> prodServiceCodeList() {		
		return prodDao.prodServiceCodeList();
	}
	

	@Override
	public List<ProdVO> prodTypeCdList() {
		return prodDao.prodTypeCdList();
	}

	@Override
	public List<ProdVO> prodStatCdList() {
		return prodDao.prodStatCdList();
	}

	@Override
	public List<ProdVO> prodDivCdList() {
		return prodDao.prodDivCdList();
	}

	@Override
	public List<Object> prodOpptList() {
		return prodDao.prodOpptList();
	}
	
	@Override
	public List<Object> prodOpptList(Map<String, Object> map) {
		return prodDao.prodOpptList(map);
	}

	@Override
	public List<Object> custcompList() {
		return prodDao.custcompList();
	}

	@Override
	public List<Object> custcompList(Map<String, Object> map) {
		return prodDao.custcompList(map);
	}

	@Override
	public ProdVO imgList(String prod_id) {
		// TODO Auto-generated method stub
		return prodDao.imgList(prod_id);
	}

	@Override
	public ProdVO catalList(String prod_id) {
		// TODO Auto-generated method stub
		return prodDao.catalList(prod_id);
	}

	@Override
	public int prodDelete(String prod_id) {
		// TODO Auto-generated method stub
		int result = prodDao.prodDelete(prod_id);
		if(result == 1){
			int result2 = 0;
			List<ProdVO> attList = fileList(prod_id);
			for(int i = 0;i<attList.size();i++){
				String attach_id = attList.get(i).getAttach_id();
				result2 += prodDao.fileDelete(attach_id);
			}
			if(result2 >= 1){
				prodDao.prodFileDelete(prod_id);
			}
		}
		return result;
	}

	@Override
	public List<ProdVO> fileList(String prod_id) {
		// TODO Auto-generated method stub
		return prodDao.fileList(prod_id);
	}
}
