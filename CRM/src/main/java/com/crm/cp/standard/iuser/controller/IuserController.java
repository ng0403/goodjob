package com.crm.cp.standard.iuser.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.sales.oppt.service.OpptService;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.auth.service.AuthService;
import com.crm.cp.standard.authIuser.service.AuthIuserService;
import com.crm.cp.standard.iuser.service.IuserService;
import com.crm.cp.standard.iuser.vo.IuserVO;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;
import com.crm.cp.utils.PagerVO;

@Controller
public class IuserController {

	@Resource
	IuserService iuserService;
	
	@Resource
	MenuService menuService;
	
	@Resource
	AuthIuserService authIuserService;
	
	@Resource
	AuthService authService;
	
	//사용자 관리 리스트 출력
	@RequestMapping(value = "/user", method = RequestMethod.GET)
	public ModelAndView UserMain(HttpSession session,
			@RequestParam(value="keyfield", defaultValue="u_id") String keyfield,
			@RequestParam(value="keyword", defaultValue="") String keyword,
			@RequestParam(value = "order_by", defaultValue = "fin_mdfy_dt") String order_by,
			@RequestParam(value = "order_sc", defaultValue = "DESC") String order_sc
			) {
		if (session.getAttribute("user") == null) {

			return new ModelAndView("redirect:/");
		}

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);
		map.put("order_by", order_by);
		map.put("order_sc", order_sc);
		
		List<Object> list = iuserService.iuserList(map);
		System.out.println("사용자 리스트 출력 : " + list.size());
		List<Object> authName = iuserService.iuserAuthName();
				
		ModelAndView mov = new ModelAndView("user", "list", list);
		mov.addObject("authName", authName);
		mov.addObject("data", map);

		return mov;
	}
	
	// 영업기회 리스트
		@RequestMapping(value = "/iUserDelList", method = RequestMethod.GET)
		ModelAndView iUserDelList(HttpSession session,
				@RequestParam Map<String, String> map,
				@RequestParam(value = "ccPageNum", defaultValue = "1") int pageNum,
				@RequestParam(value = "order_by", defaultValue = "fin_mdfy_dt") String order_by,
				@RequestParam(value = "order_sc", defaultValue = "DESC") String order_sc) {
			if (session.getAttribute("user") == null) {
				return new ModelAndView("redirect:/");
			}
			ModelAndView mov = new ModelAndView("iUserDel");

			// 메뉴리스트 가져오기
			List<MenuVO> menuList = menuService.selectAll(session);
			
			map.put("pageNum", pageNum + "");
			PagerVO page = iuserService.iUserPageCount(map);
			System.out.println("page 정보 : " + page);
			map.put("startRow", page.getStartRow() + "");
			map.put("endRow", page.getEndRow() + "");
			map.put("order_by", order_by);
			map.put("order_sc", order_sc);

			//영업기회 리스트 가져오기
			List<IuserVO> list = iuserService.iUserDelList(map);

			System.out.println("list : " + list);
			System.out.println("page : " + page);
			mov.addObject("page", page);
			mov.addObject("list", list);
			mov.addObject("ccPageNum", pageNum);
			mov.addObject("menuList", menuList);
//			mov.addObject("searchInfo", map);
			mov.addObject("data", map);
			return mov;
		}
	
	/**
	 * 사용자권한 조회
	 * @return List<Object>
	 */
	@RequestMapping(value = "/userauth", method = RequestMethod.POST)
	public @ResponseBody List<Object> getUserAuth() {
		List<Object> authUserList = authIuserService.authUserList();
		return authUserList;
	}
	
	/**
	 * 사용자권한 검색
	 * @return List<Object>
	 */
	@RequestMapping(value = "/userAuthSearch", method = RequestMethod.POST)
	public @ResponseBody List<Object> getUserAuthSearch(HttpSession session, @RequestBody Map<String, Object> JSON){
		List<Object> authUserListSearch = authIuserService.authUserListSearch(JSON);

		return authUserListSearch;
	}
	
	//野껓옙占쎄퉳占쎈르?占쏙옙紐꾨퓠 POST
	@RequestMapping(value = "/user", method = RequestMethod.POST)
	public ModelAndView User(HttpSession session,
			@RequestParam(value="keyfield", defaultValue="u_id") String keyfield,
			@RequestParam(value="keyword", defaultValue="") String keyword,
			@RequestParam(value = "order_by", defaultValue = "fin_mdfy_dt") String order_by,
			@RequestParam(value = "order_sc", defaultValue = "DESC") String order_sc
			) {
		if (session.getAttribute("user") == null) {

			return new ModelAndView("redirect:/");
		}

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);
		map.put("order_by", order_by);
		map.put("order_sc", order_sc);
		
		List<Object> list = iuserService.iuserList(map);
		List<Object> authName = iuserService.iuserAuthName();
		ModelAndView mov = new ModelAndView("user", "list", list);
//		List<MenuVO> menuList = menuService.selectAll(session);
//		mov.addObject("menuList", menuList);
		mov.addObject("authName", authName);
		mov.addObject("data", map);
		
		return mov;

	}
	
	//사용자등록
	@RequestMapping(value = "/insertuser", method = RequestMethod.POST)
	public @ResponseBody Object userInsert(@RequestBody IuserVO vo, HttpSession session) {
		vo.setFst_reg_id(session.getAttribute("user").toString());
		vo.setIuser_id(vo.getId_nm());
		System.out.println("사용자 등록 시 넘어가는 값 : " + vo.toString());
		iuserService.insertUser(vo);
//		authIuserService.authUserInsert(vo);
		System.out.println("vo.getId_nm() : " + vo.getId_nm());
		Object obj= iuserService.iuserOneSelectByIdNM(vo.getId_nm());

		return obj;
		
		
	}
	
	
	//사용자편집
	@RequestMapping(value = "/iuserEdit", method = RequestMethod.POST)
	public @ResponseBody Object iuserEdit (@RequestBody IuserVO vo, HttpSession session) {
		vo.setFin_mdfy_id(session.getAttribute("user").toString());	
		System.out.println("사용자 상세정보 조회 ID정보 : " + vo.toString());
		iuserService.iuserEdit(vo);
		System.out.println("사용자 상세정보 편집 후 조회할 ID정보 : " + vo.getIuser_id());
	    Object data = iuserService.iuserOneSelectById(vo.getIuser_id());
	    System.out.println("편집을 마친 사용자 정보 : " + data);
		return data;
	}
	
	//사용자리스트에서 사용자ID 클릭했을 때 
	@RequestMapping(value = "/iuserDetail", method = RequestMethod.POST)
	public @ResponseBody Object iuserDetail(@RequestBody String userId, HttpSession session) throws IOException {
		System.out.println("사용자 상세정보 조회 ID : " + userId);
		Object user = iuserService.iuserSelectById(userId);
		return user;
		
	}

	//데이터 삭제
	@RequestMapping(value = "/iuserDelete", method = RequestMethod.POST)
	public String bankDelete(String[] del_code) throws IOException {
		System.out.println("삭제될 데이터 반복문 들어가기전  : " + del_code);
		for (String iuser_id : del_code) {
			System.out.println("삭제될 데이터  : " + del_code);
			iuserService.removeIuser(iuser_id);
		}
		return "redirect:/user";
	}
	//삭제된 데이터 완전 삭제
	@RequestMapping(value = "/iuserDelDelete", method = RequestMethod.POST)
	public String iuserDelDelete(String[] del_code) throws IOException {
		System.out.println("완전히 삭제될 데이터 반복문 들어가기전  : " + del_code);
		for (String iuser_id : del_code) {
			System.out.println("삭제될 데이터  : " + del_code);
			System.out.println("삭제될 데이터  : " + iuser_id);
			iuserService.removeDelIuser(iuser_id);
		}
		return "redirect:/iUserDelList";
	}
	//삭제된 데이터 복원
	@RequestMapping(value = "/iuserDelRollBack", method = {RequestMethod.POST,RequestMethod.GET})
	public String iuserDeleteRollBack(String[] del_code) throws IOException {
		System.out.println("복원될 데이터 반복문 들어가기전  : " + del_code);
		for (String iuser_id : del_code) {
			System.out.println("복원될 데이터  : " + del_code);
			iuserService.removeIuserRollback(iuser_id);
		}
		return "redirect:/user";
	}
	
	//사용자 상세부분에서 구분 검색 팝업 GET
	@RequestMapping(value = "/userTypePopup", method = RequestMethod.GET)
	public ModelAndView userTypePopup(String[] del_code, HttpSession session,
			@RequestParam(value="keyfield", defaultValue="c_name") String keyfield,
			@RequestParam(value="keyword", defaultValue="") String keyword) throws IOException {
		
		if (session.getAttribute("user") == null) {

			return new ModelAndView("redirect:/");
		}
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);

		List<Object> codeList = iuserService.codeList(map);		
		ModelAndView mov = new ModelAndView("/standard/iuser/userTypePopup","codeList",codeList);
		
		return mov;
	}
	
	//사용자 상세부분에서 구분 검색 팝업 POST 검색
	@RequestMapping(value = "/userTypePopup", method = RequestMethod.POST)
	public ModelAndView userTypePopupSearch(String[] del_code, HttpSession session,
			@RequestParam(value="keyfield", defaultValue="c_name") String keyfield,
			@RequestParam(value="keyword", defaultValue="") String keyword) throws IOException {
		
		if (session.getAttribute("user") == null) {

			return new ModelAndView("redirect:/");
		}
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);
		
		List<Object> codeList = iuserService.codeList(map);
		ModelAndView mov = new ModelAndView("/standard/iuser/userTypePopup","codeList",codeList);
		
		return mov;
	}

	//사용자 상세부분에서 조직 검색 팝업 GET
	@RequestMapping(value = "/orgNamePopup", method = RequestMethod.GET)
	public ModelAndView orgNamePopup(String[] del_code, HttpSession session,
			@RequestParam(value="keyfield", defaultValue="o_name") String keyfield,
			@RequestParam(value="keyword", defaultValue="") String keyword) throws IOException {
		
		if (session.getAttribute("user") == null) {

			return new ModelAndView("redirect:/");
		}
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);

		List<Object> orgList = iuserService.orgList(map);
		ModelAndView mov = new ModelAndView("/standard/iuser/orgNamePopup","orgList",orgList);
		
		return mov;
	}
	
	//사용자 상세부분에서 구분 검색 팝업 POST 검색
	@RequestMapping(value = "/orgNamePopup", method = RequestMethod.POST)
	public ModelAndView orgNamePopupSearch(HttpSession session, 
			@RequestParam(value="keyfield", defaultValue="o_name") String keyfield,
			@RequestParam(value="keyword", defaultValue="") String keyword) throws IOException {
		
		if (session.getAttribute("user") == null) {

			return new ModelAndView("redirect:/");
		}
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);

		List<Object> orgList = iuserService.orgList(map);
		ModelAndView mov = new ModelAndView("/standard/iuser/orgNamePopup","orgList",orgList);		
		
		return mov;
	}
}
