package com.crm.cp.sales.keyman.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.sales.keyman.dao.KeymanDao;
 import com.crm.cp.utils.PagerVO;

@Service
public class KeymanServiceImpl implements KeymanService {
	@Resource KeymanDao keymanDao;

	//전체리스트 
			@Override
			public List<KeymanVO> keymanAllList(Map<String,Object> keymanMap) {
				System.out.println("키맨 전체 리스트 " + keymanMap.toString());
				return keymanDao.keymanAllList(keymanMap);
			}
			
			//전체리스트 개수 
			@Override
			public PagerVO keymanListCount(Map<String, Object> keymanMap) {
				System.out.println("KeymanListCount service " +  keymanMap.toString());
				int actPageNum = (Integer) keymanMap.get("keymanPageNum");
				// 현재 페이지 얻어오기
				PagerVO page = new PagerVO(actPageNum, 0, 6, 6);
				// 전체 글의 갯수 구하기
				System.out.println("actPage Num " + actPageNum);
				int totalRowCount = keymanDao.keymanListCount(keymanMap);
				System.out.println("totalRowCount ? " + totalRowCount);		
				page = new PagerVO(actPageNum, totalRowCount, 6, 6);
				
				return page;
			}
			
			//키맨 상세보기
			@Override
			public KeymanVO keymanDetail(KeymanVO vo) {
				 
				return keymanDao.keymanDetail(vo);
			}
			//키맨 수정하기
			@Override
			public String keymanUpdate(KeymanVO keymanVO) {
				int keymanUpdate = keymanDao.keymanUpdate(keymanVO);// 여기서 가져온 값을 판별하여 
				String contResult = null;
				if(keymanUpdate == 1) {
					contResult = "계약 수정에 성공했습니다.";
				} else {
					contResult = "계약 수정에 실패했습니다.";
				}
				return contResult;//요기서 반환한 값을 컨트롤이 받는다.
			}		 
					
			// 키맨 추가
			@Override
			public String insertKeyman(KeymanVO kVO) {
				int kmRst = keymanDao.insertKeyman(kVO);
				
				String kmRstStr = null;
				if(kmRst == 1){
					kmRstStr = "새로운 키맨 등록이 완료되었습니다.";
				}else {
					kmRstStr = "키맨 등록에 실패했습니다.";
				}
				return kmRstStr;
			}
			
			// 키맨 삭제
			@Override
			public String KeymanDelete(KeymanVO kVO) {
				int deleteResult = keymanDao.KeymanDelete(kVO);
				System.out.println("과연 무엇일까" + deleteResult);
				String resultStr = null;
				/*if(deleteResult == keyman_idList.size()){
					resultStr = "키맨 삭제가 완료 되었습니다.";
				} else {
					resultStr = "키맨 삭제에 실패 했습니다.";
				}*/
				if(deleteResult == 1)
				{
					resultStr = "키맨 삭제가 완료 되었습니다.";
				}
				else{
					resultStr = "키맨 삭제에 실패 했습니다.";
							
				}
				return resultStr;
			}

			//검색 페이지 갯수
			@Override
			public PagerVO KeymanSearchCount(Map<String, Object> contactMap) {
				System.out.println("Keyman ListCount service " +  contactMap.toString());
				int actPageNum = (Integer) contactMap.get("keymanPageNum");
				// 현재 페이지 얻어오기
				PagerVO page = new PagerVO(actPageNum, 0, 6, 6);
				// 전체 글의 갯수 구하기
				System.out.println("actPage Num " + actPageNum);
				int totalRowCount = keymanDao.keymanSearchCount(contactMap);
				System.out.println("totalRowCount ? " + totalRowCount);		
				page = new PagerVO(actPageNum, totalRowCount, 6, 6);
				
				return page;
			}			
		
			
			//초성검색
			@Override
			public List<KeymanVO> keymanSearchAll(Map<String,Object> contactMap){
				System.out.println("초성 service" + contactMap.toString());
				return keymanDao.keymanSearchAll(contactMap);
			}
			
			//연락처 리스트 팝업
			@Override
			public List<Object> contactListPop(Map<String, Object> map) {
				// TODO Auto-generated method stub
				return keymanDao.contactListPop(map);
			}
			
}
