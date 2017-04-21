package com.crm.cp.sales.contact.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.apache.poi.util.SystemOutLogger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.sales.act.service.ActService;
import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.contact.service.ContactService;
import com.crm.cp.sales.contact.vo.ContactVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.sales.est.service.EstService;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.service.OpptService;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.prod.vo.ProdVO;
import com.crm.cp.utils.PagerVO;

@Controller
public class ContactController {

	@Resource
	MenuService menuService;
	@Resource
	OpptService service;
	@Autowired
	ActService actService;
	@Resource
	ContactService contactService;
	@Autowired
	EstService estInter;
	@Autowired
	OpptService opptService;
	
	// 연락처 전체 리스트
	@RequestMapping(value = "contact", method = RequestMethod.GET)
	public ModelAndView contactList(HttpSession session,
			@RequestParam(value = "contactPageNum", defaultValue = "1") int contactPageNum) {
		if (session.getAttribute("user") == null) {
			return new ModelAndView("redirect:/");
		}
		System.out.println("contact entering");
		System.out.println("contactPageNum" + contactPageNum);

		ModelAndView mov = null;
		if (session.getAttribute("user") == null) {
			mov = new ModelAndView("standard/home/session_expire");
		}
		System.out.println("step1");

		Map<String, Object> contactMap = new HashMap<String, Object>();
		contactMap.put("contactPageNum", contactPageNum);

		PagerVO page = contactService.ContactListCount(contactMap);
		System.out.println("page " + page.toString());
		contactMap.put("page", page);

		List<ContactVO> contactList = contactService.contactAllList(contactMap);
		System.out.println("contactList" + contactList.toString());

		mov = new ModelAndView("contact");
		mov.addObject("contactList", contactList);
		mov.addObject("contactPageNum", contactPageNum);
		mov.addObject("page", page);

		System.out.println("mov?????? " + mov.toString());

		return mov;
	}
	
	 
	// 연락처 상세정보
	/*
	 * @RequestMapping(value = "contactDetail", method = RequestMethod.POST)
	 * public @ResponseBody ContactVO companyCutomerDetail(String cont_id) {
	 * System.out.println("ajax detail contact "); ContactVO contactVO =
	 * contactService.contactDetail(cont_id); return contactVO; }
	 */

	@RequestMapping(value = "/contact_detail", method = RequestMethod.GET)
	public ModelAndView companyCutomerDetail(HttpSession session, @RequestParam("cont_id") String cont_id) {
		if (session.getAttribute("user") == null) {
			return new ModelAndView("redirect:/");
		}
		System.out.println("detail Entering");

		ContactVO contactVO = contactService.contactDetail(cont_id);
		System.out.println("contactDetail ????" + contactVO.toString());

		ModelAndView mov = new ModelAndView("contactDetail");
		mov.addObject("contactDetail", contactVO);
		return mov;
	}

	@RequestMapping(value = "/contactUpdate", method = { RequestMethod.GET, RequestMethod.POST })
	public String ContactUpdate(HttpSession session, ContactVO contactVO) {

		System.out.println("cont update entering");
		System.out.println("cont update vo? " + contactVO.toString());
		contactVO.setFin_mdfy_id(session.getAttribute("user").toString());// getParameter를
																			// 이름지정하듯
																			// 세션도
																			// 이름지정해서
																			// 설정된것을
																			// 가져오는
																			// 코드
		System.out.println(contactVO);

		contactService.contactUpdate(contactVO);

		return "redirect:/contact";
	}

	@RequestMapping(value = "/contactInsert", method = RequestMethod.GET)
	public void cont_add(HttpSession session, ContactVO contactVO) {
		System.out.println("add continsert");
		contactVO.setFst_reg_id(session.getAttribute("user").toString());
		contactVO.setFin_mdfy_id(session.getAttribute("user").toString());
		System.out.println("insert contrVO?" + contactVO.toString());

	}

	@RequestMapping(value = "/contactInsert", method = RequestMethod.POST)
	public String cont_addP(HttpSession session, ContactVO contactVO) {
		System.out.println("add continsert");
		contactVO.setFst_reg_id(session.getAttribute("user").toString());
		contactVO.setFin_mdfy_id(session.getAttribute("user").toString());
		System.out.println("insert contactVO?" + contactVO.toString());
		contactService.contactInsert(contactVO);

		return "redirect:/contact";
	}

	// 전체리스트 출력 페이징/검색
	@RequestMapping(value = "/contactPaging", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> ActListSearch(HttpSession session,
			@RequestParam(value = "contactPageNum", defaultValue = "1") int contactPageNum, String cont_nm,
			String email, String ph) {
		System.out.println("contact paging entering");
		Map<String, Object> contactMap = new HashMap<String, Object>();

		/*
		 * if (session.getAttribute("user") == null) { //로그인 페이지 이동
		 * callMap.put("result", "standard/home/session_expire"); } else {
		 * callMap.put("call_name",call_name);
		 * callMap.put("call_email",call_email); callMap.put("call_tel",
		 * call_tel); callMap.put("call_iuser_nm", call_iuser_nm);
		 * callMap.put("callPageNum", callPageNum);
		 * 
		 * PagerVO page = callService.CallListCount(callMap);
		 * callMap.put("startRow", page.getStartRow()); callMap.put("endRow",
		 * page.getEndRow()); callMap.put("page", page); List<CallVO> callList =
		 * callService.callAllList(callMap); callMap.put("callList", callList);
		 * callMap.put("callListSize", callList.size()); }
		 */

		contactMap.put("cont_nm", cont_nm);
		contactMap.put("email", email);
		contactMap.put("ph", ph);
		contactMap.put("contactPageNum", contactPageNum);

		PagerVO page = contactService.ContactListCount(contactMap);
		contactMap.put("page", page);

		List<ContactVO> contactList = contactService.contactAllList(contactMap);
		contactMap.put("contactList", contactList);
		contactMap.put("contactListSize", contactList.size());

		return contactMap;
	}

	// 연락처 리스트 초성검색 / 그냥검색 페이징
	@RequestMapping(value = "/searchKeyword", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> searchKeyword(HttpSession session, String keyword,
			@RequestParam(value = "contactPageNum", defaultValue = "1") int contactPageNum, String cont_nm, String email, String ph) {
		System.out.println("초성검색 enter");
		System.out.println("초성?" + keyword);
		Map<String, Object> kwMap = new HashMap<String, Object>();
		/*
		 * if (session.getAttribute("user") == null) { //로그인 페이지 이동
		 * kwMap.put("result", "standard/home/session_expire"); } else {
		 * kwMap.put("call_name",call_name); kwMap.put("call_email",call_email);
		 * kwMap.put("call_tel", call_tel); kwMap.put("call_iuser_nm",
		 * call_iuser_nm); kwMap.put("keyword", keyword);
		 * kwMap.put("callPageNum", callPageNum);
		 * 
		 * PagerVO page = callService.CallListCount(kwMap); kwMap.put("page",
		 * page);
		 * 
		 * List<CallVO> callList = callService.callSearchAll(kwMap);
		 * kwMap.put("callList", callList); kwMap.put("callListSize",
		 * callList.size()); }
		 */

		kwMap.put("cont_nm", cont_nm);
		kwMap.put("email", email);
		kwMap.put("ph", ph);
		kwMap.put("keyword", keyword);
		kwMap.put("contactPageNum", contactPageNum);
		System.out.println("kwMap?? " + kwMap.toString());
		PagerVO page = contactService.ContactListCount(kwMap);
		System.out.println("page? " + page.toString());
		kwMap.put("page", page);

		
		List<ContactVO> contactList = contactService.contactSearchAll(kwMap);
		kwMap.put("contactList", contactList);
		System.out.println("contactList " + contactList.toString());
		kwMap.put("contactListSize", contactList.size());
		System.out.println("contactListSize " +contactList.size());
		return kwMap;
	}

	// 연락처 삭제
	@RequestMapping(value = "contactDelete", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> contactDelete(HttpSession session, @RequestBody List<String> cont_idList) {
		System.out.println("delete entering" + cont_idList.toString());

		Map<String, Object> rstMap = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) { // 로그인 페이지 이동
			rstMap.put("deleteResult", "standard/home/session_expire");
		} else {
			String deleteResult = contactService.deleteContact(cont_idList);
			rstMap.put("deleteResult", deleteResult);
		}
		return rstMap;
	}

	// 회사명리스트 팝업창
	@RequestMapping(value = "/compList", method = RequestMethod.GET)
	public ModelAndView ActOpptList(HttpSession session) {
		System.out.println("회사팝업");
		List<Object> compList = contactService.compList();
		System.out.println("compList??" + compList.toString());
		ModelAndView mov = new ModelAndView("/sales/contact/contactPop/comp_list_pop");
		mov.addObject("compList", compList);

		return mov;
	}

	// 키맨 팝업
	@RequestMapping(value = "/keymanPopupcont", method = RequestMethod.GET)
	public ModelAndView keymanPopup(HttpSession session, String cont_id, int flag) {
		System.out.println("keyman cont_id" + cont_id);
		ModelAndView mov = new ModelAndView("/sales/contact/contactPop/custcomp_kmn_pop");
		mov.addObject("cont_id", cont_id);
		mov.addObject("flag", flag);
		return mov;
	}

	// 키맨 추가
	@RequestMapping(value = "/addKeyman", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> addKeyman(HttpSession session, KeymanVO kVO) {
		System.out.println("hi keyman" + kVO.toString());
		Map<String, Object> rstMap = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) { // 로그인 페이지 이동
			rstMap.put("addResult", "standard/home/session_expire");
		} else {
			kVO.setFst_reg_id(session.getAttribute("user").toString());
			kVO.setFin_mdfy_id(session.getAttribute("user").toString());
			String kmAddRst = contactService.insertKeyman(kVO);
			System.out.println("kmaddrst?" + kmAddRst.toString());
			rstMap.put("addResult", kmAddRst);
		}
		return rstMap;
	}

	// 키맨 리스트
	@RequestMapping(value = "keymanList", method = RequestMethod.POST)
	public @ResponseBody List<KeymanVO> keymanList(String cont_id) {
		System.out.println("keyman list entering" + cont_id);
		List<KeymanVO> kmVOList = contactService.getKeymanList(cont_id);
		System.out.println("키맨 리스트 " + kmVOList.toString());
		return kmVOList;
	}

	// 키맨 상세정보
	@RequestMapping(value = "/keymanDetailPopupcontact", method = RequestMethod.GET)
	public ModelAndView keymanDetailPopup(HttpSession session, String cust_id, int flag) {
		KeymanVO kmVO = contactService.keymanDetail(cust_id);
		System.out.println("key man who ? " +  kmVO.toString());
		ModelAndView mov = new ModelAndView("/sales/contact/contactPop/custcomp_kmn_pop");
		mov.addObject("kmVO", kmVO);
		mov.addObject("cont_id", kmVO.getCust_id());
		mov.addObject("flag", flag);
		return mov;
	}

	// 키맨 수정
	@RequestMapping(value = "/mdfyKeyman", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> mdfyKeyman(HttpSession session, KeymanVO kVO) {
		System.out.println("mdfy keyman entering" + kVO.toString());
		Map<String, Object> rstMap = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) { // 로그인 페이지 이동
			rstMap.put("mdfyResult", "standard/home/session_expire");
		} else {
			kVO.setFin_mdfy_id(session.getAttribute("user").toString());
			String kmMdfyRst = contactService.mdfyKeyman(kVO);
			rstMap.put("mdfyResult", kmMdfyRst);
		}
		return rstMap;
	}

	// 키맨 삭제
/*	@RequestMapping(value = "delKeyman", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> keymanDelete(HttpSession session,
			@RequestBody List<String> keyman_idList) {
		Map<String, Object> rstMap = new HashMap<String, Object>();
		System.out.println("delete keyman " + keyman_idList.toString());
		if (session.getAttribute("user") == null) { // 로그인 페이지 이동
			rstMap.put("mdfyResult", "standard/home/session_expire");
		} else {
			String deleteResult = contactService.deleteKeyman(keyman_idList);
			rstMap.put("deleteResult", deleteResult);
		}
		return rstMap;
	}*/
	// 키맨 삭제
		@RequestMapping(value = "delKeyman", method = RequestMethod.POST)
		public @ResponseBody Map<String, Object> keymanDelete(HttpSession session, @RequestBody List<String> keyman_idList) {
			System.out.println("삭제 리스트??  " + keyman_idList.toString());
			
			String cont_id = "";
			String cust_id = "";
			KeymanVO kmVO = new KeymanVO();
			Map<String, Object> rstMap = new HashMap<String, Object>();
			for(int i=0; i<keyman_idList.size(); i++)
			{
				String del[] = keyman_idList.get(i).split(":");

				
				cont_id = del[0];
				cust_id = del[1];
				System.out.println("cont_id ? " +cont_id);
				System.out.println("cust_id? " + cust_id);
				kmVO.setCont_id(cont_id);
				kmVO.setCust_id(cust_id); 
				
				if (session.getAttribute("user") == null) {		//로그인 페이지 이동
					rstMap.put("mdfyResult", "standard/home/session_expire");
				} else {
					String deleteResult = contactService.deleteKeyman(kmVO);
					rstMap.put("deleteResult", deleteResult);
				}
				
			}
			 
		
			return rstMap;
		}
	

	// 영업기회 상세정보
	@RequestMapping(value = "/opptDetailPopupcontact", method = RequestMethod.GET)
	public ModelAndView saleschanceDetailPopup(HttpSession session, String sales_oppt_id, int flag) {
		System.out.println("contact oppt detail enter" + sales_oppt_id);
		ModelAndView mov = new ModelAndView("/sales/contact/contactPop/custcomp_oppt_pop");
		OpptVO opptVO = contactService.ccOpptDetail(sales_oppt_id);
		System.out.println("영업기회 상세정보?? " + opptVO.toString());
/*		opptVO.setSales_lev_cd(opptVO.getSales_lev_cd().substring(3, 4));
		opptVO.setSales_oppt_stat_cd(opptVO.getSales_oppt_stat_cd().substring(3, 4));
*/		
		// 영업기회 상태 코드 가져오기
		List<OpptVO> osclist = contactService.opptOscList();
		System.out.println("osclist?? " + osclist.toString());
		// 영업단계 코드 가져오기
		List<OpptVO> otllist = contactService.opptOtlList();
		System.out.println("otllist??? " + otllist.toString());
		
		//상품 리스트
		List<OpptVO> prod = contactService.opptPrdtDetail(sales_oppt_id);
		System.out.println("prod?? " + prod.toString());
		OpptVO detail = prod.get(prod.size() - 1);
		System.out.println("detail??? " + detail);
		
		
		mov.addObject("cust_id", opptVO.getCust_id());
		mov.addObject("opptVO", opptVO);
		mov.addObject("osclist", osclist);
		mov.addObject("otllist", otllist);
		mov.addObject("flag", flag);
		mov.addObject("prod", prod);
		mov.addObject("detail", detail);
		return mov;
	}

	// 영업기회 팝업
	@RequestMapping(value = "/contactopptInsertPopup", method = RequestMethod.GET)
	public ModelAndView saleschancePopup(HttpSession session, String cust_id, int flag) {
		System.out.println("contactopptpopup entering" + cust_id + flag);
/*		ModelAndView mov = new ModelAndView("/sales/contact/contactPop/custcomp_oppt_pop");*/
		ModelAndView mov = new ModelAndView("/sales/contact/contactPop/opptInsertPopup");
		
		System.out.println("여기yo");
		OpptVO opptVO = contactService.ccOpptCustDetail(cust_id);
		
		List<EstVO> eduList = estInter.eduList();
		System.out.println("eduList Insert" + eduList.toString());
		// 영업기회 상태 코드 가져오기
		List<OpptVO> osclist = contactService.opptOscList();

		// 영업단계 코드 가져오기
		List<OpptVO> otllist = contactService.opptOtlList();
	 
		
		List<String> eduCode = new ArrayList<String>(0); 
		
		for(EstVO est: eduList){
			eduCode.add(est.getCode());
			eduCode.add(est.getCd_nm());
		}
		
		mov.addObject("cust_id", cust_id);
		mov.addObject("opptVO", opptVO);
		mov.addObject("osclist", osclist);
		mov.addObject("otllist", otllist);
		mov.addObject("eduList", eduList); 
		mov.addObject("eduCode", eduCode);
		mov.addObject("popFlg", "add");
		return mov;
	}
	 
	// 영업기회 리스트
	@RequestMapping(value = "ccOpptListcontact", method = RequestMethod.POST)
	public @ResponseBody List<OpptVO> opptList(String cont_id) {
		System.out.println("ccopptlist entering ");
		List<OpptVO> opptVOList = contactService.getOpptList(cont_id);
		return opptVOList;
	}

	// 영업기회 키맨 리스트 팝업
	@RequestMapping(value = "/keymancompList", method = RequestMethod.GET)
	public ModelAndView keymancompList(HttpSession session, String cont_id) {

		System.out.println("pop enter" + cont_id);
		List<KeymanVO> kmVOList = contactService.selectKeyman(cont_id); // 키맨 선택
		System.out.println("	??? " + kmVOList.toString());
		Map<String, Object> map = new HashMap<String, Object>();
		ModelAndView mov = new ModelAndView("/sales/contact/contactPop/keyman_pop");
		mov.addObject("kmVOList", kmVOList);
		return mov;
	}
	
	//영업활동 영업기회 리스트 팝업
	@RequestMapping(value = "/opptListPop", method = RequestMethod.GET)
	public ModelAndView opptListPop(HttpSession session, String cont_id) {

		System.out.println("영업기회 pop enter" + cont_id);
		List<OpptVO> opptVOList = contactService.selectOppt(cont_id); // 키맨 선택
		System.out.println("	??? " + opptVOList.toString());
		Map<String, Object> map = new HashMap<String, Object>();
		ModelAndView mov = new ModelAndView("/sales/contact/contactPop/opptActive_OpptList_Pop");
		mov.addObject("opptVOList", opptVOList);
		return mov;
	}

	// 영업기회 추가 ajax
	@RequestMapping(value = "opptAddcontact", method = RequestMethod.POST)
	@ResponseBody
	int opptAdd(HttpSession session, OpptVO add) {

		System.out.println("oppt list?" + add.toString());

		add.setFst_reg_id(session.getAttribute("user").toString());
		add.setFin_mdfy_id(session.getAttribute("user").toString());
		int result = contactService.opptAddcontact(add);
		/* int result2 = contactService.addOpptStepcontact(add); */// 영업기회단계리스트추가
		System.out.println("result1 : " + result);
		/*
		 * System.out.println("result2 : " + result2);
		 */
		return result;
	}

	// 영업기회 수정 ajax
	@RequestMapping(value = "/opptModifycontact", method = RequestMethod.POST)
	@ResponseBody
	ModelAndView opptModify(HttpSession session, OpptVO detail) {
		System.out.println("Detail Edit Controller");
		detail.setFin_mdfy_id(session.getAttribute("user").toString());
		System.out.println("detail : " + detail);
		int result = contactService.opptModifycontact(detail);
		System.out.println("Detail Edit Result : " + result);
		ModelAndView mov = new ModelAndView("oppt");
		System.out.println("step1");
		OpptVO opptVO = service.opptDetail(detail.getSales_oppt_id());
		System.out.println("setp2");
		int result2 = contactService.addOpptStepcontact(detail);// 영업기회단계리스트추가
		System.out.println("result2 : " + result2);
		Map<String, Object> opptMap = new HashMap<String, Object>();
		opptMap.put("opptVO", opptVO);
		mov.addObject("opptVO", opptVO);
		return mov;
	}

	// 영업기회 삭제
	@RequestMapping(value = "ccOpptDelete", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> ccActDelete(HttpSession session, @RequestBody List<String> act_idList) {
		System.out.println("영업기회 삭제 enter" + act_idList.toString());

		Map<String, Object> rstMap = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) { // 로그인 페이지 이동
			rstMap.put("deleteResult", "standard/home/session_expire");
		} else {
			String deleteResult = contactService.deleteOpptcontact(act_idList);
			rstMap.put("deleteResult", deleteResult);
		}
		return rstMap;
	}

	// 영업활동 tab list ajax
	/*
	 * @RequestMapping(value = "/ccActListcontact", method = RequestMethod.POST)
	 * 
	 * @ResponseBody Map<String, Object> actList(String cont_id) {
	 * System.out.println("영업활동 enter" + map.toString()); List<ActVO> actList =
	 * contactService.actListcontact(map); System.out.println("actList??? " +
	 * actList.toString()); Map<String, Object> map2 = new HashMap<String,
	 * Object>(); map2.put("actList", actList);
	 * 
	 * return map2; }
	 */

	// 영업활동 리스트
	@RequestMapping(value = "/ccActListcontact", method = RequestMethod.POST)
	public @ResponseBody List<ActVO> actList(String cont_id) {
		System.out.println("영업활동 enter" + cont_id);
		List<ActVO> actList = contactService.actListcontact(cont_id);
		System.out.println("영업활동 리스트 " + actList.toString());
		return actList;
	}
	
	// 영업활동 상세정보 팝업
		@RequestMapping(value = "/actDetailPopupcontact", method = RequestMethod.GET)
		public ModelAndView ccActDeatailPopup(HttpSession session, String sales_actvy_id, int flag) {
			System.out.println("영업활동 enter");
			ActVO ccActVO = actService.actDetail(sales_actvy_id);
			System.out.println("ccactVO ?? " + ccActVO.toString());
			String strt_t_h = "";
			String strt_t_m = "";
			if(ccActVO.getStrt_t() != null){
				strt_t_h = ccActVO.getStrt_t().substring(0, 2);
				strt_t_m = ccActVO.getStrt_t().substring(3, 5);
			}
			String end_t_h = "";
			String end_t_m = "";
			if(ccActVO.getEnd_t() != null){
				end_t_h = ccActVO.getEnd_t().substring(0, 2);
				end_t_m = ccActVO.getEnd_t().substring(3, 5);
			}
			
			List<ActVO> actTypeCd = actService.actTypeCdList();
			List<ActVO> actStatCd = actService.actStatCdList();
			
			ModelAndView mov = new ModelAndView("/sales/contact/contactPop/custcomp_act_pop");
			mov.addObject("flag", flag);
			mov.addObject("ccActVO", ccActVO);
			mov.addObject("actTypeCd", actTypeCd);
			mov.addObject("actStatCd", actStatCd);
			mov.addObject("strt_t_h", strt_t_h);
			mov.addObject("strt_t_m", strt_t_m);
			mov.addObject("end_t_h", end_t_h);
			mov.addObject("end_t_m", end_t_m);
			
			return mov;
			
		}
		
		// 영업활동 추가 팝업창
		@RequestMapping(value = "/opptActivePopupcontact", method = RequestMethod.GET)
		public ModelAndView opptActivePopup(HttpSession session,
				String list_cust_id, String list_cust_nm, String list_sales_oppt_id) {
			System.out.println("hino");
			ModelAndView mov = new ModelAndView(
					"/sales/contact/contactPop/opptActivePopup");
			// 영업활동 유형코드 가져오기
			List<ActVO> actTypeCd = service.actTypeCdList();
			// 영업활동 상태코드 가져오기
			List<ActVO> actStatCd = service.actStatCdList();
			// 영업활동 구분코드 가져오기
			List<ActVO> actDivCd = service.actDivCdList();

			mov.addObject("actTypeCd", actTypeCd);
			mov.addObject("actStatCd", actStatCd);
			mov.addObject("actDivCd", actDivCd);

			System.out.println("list_cust_nm : " +list_cust_nm );
			System.out.println("list_cust_nm : " +list_cust_nm );
			// 영업활동 추가 시에 들어갈 sales_oppt_id값 전달

			mov.addObject("cust_id", list_cust_id);
			mov.addObject("cust_nm", list_cust_nm);
			mov.addObject("sales_oppt_id", list_sales_oppt_id);
			mov.addObject("flg", "add");

			return mov;

		}
		
		
 
	//영업활동 수정	
		@RequestMapping(value="/actEditcontact", method= RequestMethod.POST)
		public @ResponseBody Map<String, Object> actEdit(@RequestBody ActVO actvo, HttpSession session)
		{
			System.out.println("actedit entering" + actvo.toString());
			System.out.println("user" + session.getAttribute("user").toString());
/*			
			System.out.println(actvo);
	        contactService.actEditcontact(actvo);
*/	        
	        Map<String, Object> rstMap = new HashMap<String, Object>();
			if (session.getAttribute("user") == null) { // 로그인 페이지 이동
				rstMap.put("mdfyResult", "standard/home/session_expire");
			} else {
				actvo.setFin_mdfy_id(session.getAttribute("user").toString());
/* 				actvo.setSales_actvy_div_cd(actvo.getSales_actvy_div_nm());
				actvo.setSales_actvy_type_cd(actvo.getSales_actvy_type_nm());
				actvo.setSales_actvy_stat_cd(actvo.getSales_actvy_stat_nm());
*/				String kmMdfyRst = contactService.actEditcontact(actvo);
				rstMap.put("mdfyResult", kmMdfyRst);
			}
			return rstMap;
			
	      /*  return "redirect:/act";*/
		}
  

	// 영업활동 삭제
	@RequestMapping(value = "opptActiveDeletecontact", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> opptActiveDeletecontact(HttpSession session,
			@RequestBody List<String> chked_val) {

		System.out.println("delete opptActive_idList " + chked_val.toString());

		Map<String, Object> rstMap = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) { // 로그인 페이지 이동
			rstMap.put("mdfyResult", "standard/home/session_expire");
		} else {
			String deleteResult = contactService.deleteopptActivecontact(chked_val);
			rstMap.put("deleteResult", deleteResult);
		}
		return rstMap;
	}
	
	
	
	// 영업기회 추가 ajax
		@RequestMapping(value = "/contactopptInsert", method = RequestMethod.POST)
		@ResponseBody int opptAdd(HttpSession session, OpptVO add, @RequestParam(value="est_list[]",required=false) List<String> est_list, String total_sup_price) 
		{
			System.out.println("insert est_list "+ est_list.toString());
 			List<OpptVO> estList = new ArrayList<OpptVO>(0);
		
			add.setFst_reg_id(session.getAttribute("user").toString());
			add.setFin_mdfy_id(session.getAttribute("user").toString());
			System.out.println(total_sup_price);
			
			add.setTotal_sup_price(total_sup_price);
				
			int result = contactService.opptAdd(add);	// 기회 insert
			System.out.println("기회 insert 완료 : " + add);
			System.out.println("add.getSales_oppt_id() : " + add.getSales_oppt_id());
			//int result2 = opptService.addOpptStep(add);//영업기회단계리스트추가
			
			for(int i=0 ; i< est_list.size(); i++)
			{
 				OpptVO vo = new OpptVO();
				
				vo.setSales_oppt_id("");
				vo.setProd_id(est_list.get(i));
				vo.setProd_nm(est_list.get(++i));
				//vo.setProd_price(est_list.get(++i));
				vo.setEstim_qty(est_list.get(++i));	// 수량 개수
				vo.setSales_price(est_list.get(++i));			
				vo.setSup_price(est_list.get(++i));
				vo.setDiscount(est_list.get(++i));
				vo.setDiscount_unit_cd(est_list.get(++i));
				vo.setOppt_seq(add.getOppt_seq());
				
				estList.add(vo);
				
				System.out.println("for문 estList : " + estList);
			}
			
			int result1 = opptService.opptPrdtAdd(estList);
			
			System.out.println("영업기회 상품 추가 result : " + result1);
			
			System.out.println("영업기회 추가 result : " + result);
			//System.out.println("영업기회 단계 이력 추가 result : " + result2);
			
			return result;
		}
		
		//opptInsert
		// 영업기회 탭에서 insert POPUP
		@RequestMapping(value = "/contactopptDetailPop", method = RequestMethod.GET)
		public ModelAndView opptDetailPop(HttpSession session, String sales_oppt_id) 
		{
			System.out.println("hello?" + sales_oppt_id);
			// 영업기회 상태 코드 가져오기
			List<OpptVO> osclist = opptService.opptOscList();
			// 영업단계 코드 가져오기
			List<OpptVO> otllist = opptService.opptOtlList();
			// opptDetail -> sales_oppt_id
			OpptVO opDetail = opptService.opptDetail(sales_oppt_id);
			System.out.println("op detail??? " + opDetail.toString());
			
			//상품 리스트
			List<OpptVO> prod = contactService.opptPrdtDetail(sales_oppt_id);
 			OpptVO detail = prod.get(prod.size() - 1);
 			
			List<EstVO> elclist = estInter.elcList();
			List<EstVO> eduList = estInter.eduList();
 			List<String> eduCode = new ArrayList<String>(0);
			
			for(EstVO est: eduList){
				eduCode.add(est.getCode());
				eduCode.add(est.getCd_nm());
			}
		 
			
			ModelAndView mov = new ModelAndView("/sales/contact/contactPop/opptInsertPopup");
			//mov.addObject("popFlg", "add");
			mov.addObject("popFlg", "popDetail");
			mov.addObject("osclist", osclist);
			mov.addObject("otllist", otllist);
			mov.addObject("eduList", eduList);
			mov.addObject("eduCode", eduCode);
			mov.addObject("elclist", elclist);
			mov.addObject("opDetail", opDetail);
			mov.addObject("prod", prod);
			mov.addObject("detail", detail);
			return mov;
		}	
		
		@RequestMapping(value = "/contactopptModfy", method = RequestMethod.POST)
		@ResponseBody int opptModfy1(HttpSession session, OpptVO opptVo, @RequestParam(value="est_list[]",required=false) List<String> est_list, String total_sup_price) 
		{
			System.out.println("contactopptmodify " + opptVo.toString());
			opptVo.setFst_reg_id(session.getAttribute("user").toString());
			opptVo.setFin_mdfy_id(session.getAttribute("user").toString());

			
			//OpptVO detail
			List<OpptVO> estList = new ArrayList<OpptVO>(0);

			System.out.println(opptVo.getSales_oppt_id());
			System.out.println("estList ?? " + estList.toString());
			// 영업활동 편집
			int result = opptService.opptModify(opptVo);
			
			
			for(int i=0 ; i< est_list.size(); i++)
			{
				OpptVO vo = new OpptVO();
				
				vo.setSales_oppt_id(opptVo.getSales_oppt_id());
				vo.setProd_id(est_list.get(i));
				vo.setProd_nm(est_list.get(++i));
				vo.setEstim_qty(est_list.get(++i));	// 수량 개수
				vo.setSales_price(est_list.get(++i));			
				vo.setSup_price(est_list.get(++i));
				vo.setDiscount(est_list.get(++i));
				vo.setDiscount_unit_cd(est_list.get(++i));
				
				estList.add(vo);
				
				System.out.println("for문 estList : " + estList);
			}
			
			int result1 = actService.opptTabPrdtModfy(estList);
			System.out.println(result1);
			
			
			
			return result;
		}
		
		 
		
		
		//기회-상품추가 팝업 open controller
		@RequestMapping(value = "/contactprodList", method = RequestMethod.GET)
		public ModelAndView prodList(HttpSession session,
				@RequestParam(value = "keyfield", defaultValue = "pt_id") String keyfield,
				@RequestParam(value = "keyword", defaultValue = "") String keyword) 
		{
			ModelAndView mov = new ModelAndView("/sales/custcomp/custcompPop/product_list_pop");
			Map<String, Object> map = new HashMap<String, Object>();
			
			System.out.println("actController1111");
			
			map.put("keyfield", keyfield);
			map.put("keyword", keyword);
			
			List<ProdVO> prodList = opptService.prodList(map);
			mov.addObject("prodList", prodList);

			return mov;
		}
	

}
