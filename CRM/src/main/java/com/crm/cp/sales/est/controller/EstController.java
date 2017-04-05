package com.crm.cp.sales.est.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.est.service.EstService;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.service.OpptService;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;
import com.crm.cp.standard.prod.vo.ProdVO;
import com.crm.cp.utils.Encoder;
import com.crm.cp.utils.PagerVO;

//@RequestMapping("/est")
@Controller
public class EstController {

	@Resource
	EstService estInter;
	
	@Resource
	OpptService opptService;
	
	@Resource
	MenuService menuService;
	
	//전체 리스트가져오기
	@RequestMapping(value = "/estInqr", method = RequestMethod.GET)
	public ModelAndView EstimeteList(HttpSession session,
		@RequestParam(value = "ccPageNum", defaultValue = "1") int ccPageNum,
		@RequestParam Map<String, String> map,
		@RequestParam (value = "sales_price_1" , required = false) String sales_price_1,
		@RequestParam (value = "sales_price_2" , required = false) String sales_price_2,
		@RequestParam (value = "estim_nm" , required = false) String estim_nm,
		@RequestParam (value = "estim_lev_cd" , required = false) String estim_lev_cd,
		@RequestParam (value = "estim_valid_d" , required = false) String estim_valid_d) {

		if (session.getAttribute("user") == null) {

			return new ModelAndView("redirect:/");
		}
		

	    
		// 페이지 정보를 얻어옴
		//한글 검색 인코더 변환
		map.put("estim_nm", Encoder.isoToUtf(map.get("estim_nm")));
		map.put("pageNum", ccPageNum+"");
		PagerVO page = estInter.getCCListCount(map);
		map.put("startRow", page.getStartRow()+"");
		map.put("endRow", page.getEndRow()+"");
		if( (sales_price_1 != ""  && sales_price_2 !="") && (sales_price_1 != null  && sales_price_2 != null)){
		map.put("sales_price", Integer.parseInt(sales_price_1)  * Integer.parseInt(sales_price_2) + "");
		}
		if(estim_nm != null){
			map.put("estim_nm", estim_nm + "");
			}
		if(estim_lev_cd != null ){
			map.put("estim_lev_cd", estim_lev_cd + "");
			}
		if(estim_valid_d != null ){
			map.put("estim_valid_d", estim_valid_d  + "");
			}
		
		
		List<EstVO> list = estInter.getList(map);
		
		List<EstVO> elclist = estInter.elcList();
		
		//List<MenuVO> menuList = menuService.selectAll(session);
		List<EstVO> eduList = estInter.eduList();
		List<String> eduCode = new ArrayList<String>(0);
		for(EstVO est: eduList){
			eduCode.add(est.getCode());
			eduCode.add(est.getCd_nm());
		}
		
		ModelAndView mov = new ModelAndView("estList"/*<-타일즈에list&detail=>공통명칭*/);
		
		mov.addObject("list", list);
		
		mov.addObject("page", page);
		mov.addObject("ccPageNum", ccPageNum);
		//mov.addObject("menuList", menuList);
		mov.addObject("elclist", elclist);
		mov.addObject("eduCode", eduCode);
		
		return mov;
	}
	
	
	//전체 리스트가져오기
	@RequestMapping(value = "/estListAjax", method = RequestMethod.GET)
	@ResponseBody
	public Map<String,Object> estListAjax(HttpSession session,
		@RequestParam(value = "ccPageNum", defaultValue = "1") int ccPageNum,
		@RequestParam Map<String, String> map,
		@RequestParam (value = "sales_price_1" , required = false) String sales_price_1,
		@RequestParam (value = "sales_price_2" , required = false) String sales_price_2,
		@RequestParam (value = "estim_nm" , required = false) String estim_nm,
		@RequestParam (value = "estim_lev_cd" , required = false) String estim_lev_cd,
		@RequestParam (value = "estim_valid_d" , required = false) String estim_valid_d) {
			
		Map<String,Object> result = new HashMap<String,Object>(0);
		map.put("pageNum", ccPageNum+"");
		System.out.println(ccPageNum);
	
		
		System.out.println("sales_price_1 : " + sales_price_1);
		System.out.println("sales_price_2 : " + sales_price_2);
		if( (sales_price_1 != ""  && sales_price_2 !="") && (sales_price_1 != null  && sales_price_2 != null)){
		map.put("sales_price", Integer.parseInt(sales_price_1)  * Integer.parseInt(sales_price_2) + "");
		System.out.println("in");
		}
		
		System.out.println("sales_price : " + map.get("sales_price"));
		
		
		map.put("estim_nm", estim_nm + "");				
		map.put("estim_lev_cd", estim_lev_cd + "");
		map.put("estim_valid_d", estim_valid_d  + "");
		PagerVO page = estInter.getCCListCount(map);
		map.put("startRow", page.getStartRow()+"");
		map.put("endRow", page.getEndRow()+"");
		List<EstVO> list = estInter.getList(map);
		result.put("list", list);
		result.put("page", page);
		result.put("ccPageNum", ccPageNum);
		result.put("searchInfo", map);
	
		return result;
	}
	
	// 기업에서 기업명을 눌렀을 때
	@RequestMapping(value = "/prodDetail", method = RequestMethod.GET)
	public ModelAndView EstimateDetail(HttpServletRequest request,
			HttpSession session,
			@RequestParam(value = "ccPageNum", defaultValue = "1") int ccPageNum,
			@RequestParam Map<String, String> map,
			@RequestParam (value = "estim_qty" , required = false) String estim_qty,
			@RequestParam (value = "sales_price" , required = false) String sales_price,
			@RequestParam (value = "discount" , required = false) String discount,
			@RequestParam (value = "sup_price" , required = false) String sup_price,
			@RequestParam (value = "estim_id" , required = false) String estim_id) {

			
		if (session.getAttribute("user") == null) {

			return new ModelAndView("redirect:/");
		}
		// 페이지 정보를 얻어옴
		
		/*map.put("pageNum", ccPageNum+"");
		PageUtil page = estInter.getCCListCount(map);
		map.put("startRow", page.getStartRow()+"");
		map.put("endRow", page.getEndRow()+"");*/
		if(estim_qty != null ){
		map.put("total_estim_qty", + Integer.parseInt(estim_qty) + "");
		}
		if(sales_price != null){
			map.put("total_sales_price", + Integer.parseInt(estim_qty) + "");
			}
		if(discount != null ){
			map.put("total_discount", + Integer.parseInt(estim_qty) + "");
			}
		if(sup_price != null ){
			map.put("total_sup_price", + Integer.parseInt(estim_qty) + "");
			}
		

		/*List<EstVO> list = estInter.getList(map);*/
		/*List<EstVO> elclist = estInter.elcList();*/
		//List<MenuVO> menuList = menuService.selectAll(session);

		List<EstVO> prodlist = estInter.getProdList(map);

		ModelAndView mov = new ModelAndView("estimate");
		
		mov.addObject("prodlist", prodlist);
		/*mov.addObject("page", page);*/
		/*mov.addObject("ccPageNum", ccPageNum);*/
		//mov.addObject("menuList", menuList);
		/*mov.addObject("elclist", elclist);*/
		 
		return mov;
	}

	//견적 상세정보 ajax
	@RequestMapping(value="/estDetail", method=RequestMethod.GET)
	public ModelAndView detail(HttpSession session, @ModelAttribute EstVO evo){
		String estim_id = evo.getEstim_id();
		System.out.println(estim_id);
		List<EstVO> prod = estInter.estDetail(estim_id);
		List<EstVO> elclist = estInter.elcList();
		
		//List<MenuVO> menuList = menuService.selectAll(session);
		List<EstVO> eduList = estInter.eduList();
		List<String> eduCode = new ArrayList<String>(0);
		for(EstVO est: eduList){
			eduCode.add(est.getCode());
			eduCode.add(est.getCd_nm());
		}
	
		EstVO detail = prod.get(prod.size()-1);
		prod.remove(prod.size()-1);
		
		ModelAndView mov = new ModelAndView("estDetail");
		
		mov.addObject("detail", detail);
		mov.addObject("prodList", prod);
		mov.addObject("eduList", eduList);
		mov.addObject("elclist", elclist);
		mov.addObject("eduCode", eduCode);
		System.out.println(detail);
		return mov;
	}
//		@ResponseBody
//		public Map<String,Object> detail(HttpSession session, HttpServletRequest request, HttpServletResponse response){
//			System.out.println("아이디 : "+request.getParameter("estim_id"));
//			String estim_id = "";
//			
//			if (request.getParameter("estim_id") != null || request.getParameter("estim_id") != "") {
//				estim_id = request.getParameter("estim_id");
//			}
//			
//			List<EstVO> prod = estInter.estDetail(estim_id);
//			List<EstVO> eduList = estInter.eduList();
//		
//			EstVO detail = prod.get(prod.size()-1);
//			prod.remove(prod.size()-1);
//			
//			Map<String,Object> map = new HashMap<String,Object>(0);
//			
//			
//			for(EstVO vo : prod){
//				System.out.println("prod : " + vo.toString());
//			}
//			for(EstVO vo : eduList){
//				System.out.println("edu :" + vo.toString());
//			}
//			
//			map.put("detail", detail);
//			map.put("prodList", prod);
//			map.put("eduList", eduList);
//			
//			return map;
//			
//		}
		
	
	@RequestMapping(value="/estUpdate", method=RequestMethod.POST)
	public ModelAndView opptEstimUpdate(HttpSession session,
		@RequestParam(value="est_list",required=false) List<String> est_list,
		@RequestParam(value="prodAddId",required=false) List<String> prodAddId,
		@RequestParam(value="prodDeleteProdId",required=false) List<String> prodDeleteProdId,
		@RequestParam(value="prodDeleteEstimId",required=false) List<String> prodDeleteEstimId,
		@ModelAttribute EstVO est){
		
		System.out.println(est.toString());
		List<EstVO> estList = new ArrayList<EstVO>(0);
		String id = session.getAttribute("user").toString();
		est.setFin_mdfy_id(id);
		estList.add(est);
		
		for(int i=0 ; i< est_list.size(); i++){
			EstVO vo = new EstVO();
			vo.setProd_id(est_list.get(i));
			vo.setProd_nm(est_list.get(++i));
			vo.setEstim_qty(est_list.get(++i));
			vo.setSales_price(est_list.get(++i));
			vo.setDiscount(est_list.get(++i));
			vo.setSup_price(est_list.get(++i));
			vo.setDiscount_unit_cd(est_list.get(++i));
			estList.add(vo);
		}
		
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("estList", estList);
		map.put("prodAddId", prodAddId);
		map.put("prodDeleteProdId", prodDeleteProdId);
		map.put("prodDeleteEstimId", prodDeleteEstimId);
		int result = estInter.estUpdate(map);
		ModelAndView mov = new ModelAndView();
		if(result > 1){
			mov.setViewName("redirect:/estInqr");
		}
		return mov;
			
	}

	@RequestMapping(value="/estAddForm", method=RequestMethod.GET)
	public ModelAndView opptEstimWrite(HttpSession session){
		String id = session.getAttribute("user").toString();
		ModelAndView mov = new ModelAndView();
		List<EstVO> elclist = estInter.elcList();
		List<EstVO> eduList = estInter.eduList();
		List<String> eduCode = new ArrayList<String>(0);
		for(EstVO est: eduList){
			eduCode.add(est.getCode());
			eduCode.add(est.getCd_nm());
		}
		mov.setViewName("estAdd");
		mov.addObject("elclist", elclist);
		mov.addObject("eduCode", eduCode);
		return mov;
	}
	
	@RequestMapping(value="/estAdd", method={RequestMethod.GET,RequestMethod.POST})
//	@ResponseBody
	public ModelAndView opptEstimAdd(HttpSession session,
			@RequestParam(value="est_list",required=false) List<String> est_list,
			@ModelAttribute EstVO est){
		String id = session.getAttribute("user").toString();
		est.setFin_mdfy_id(id);
		est.setFst_reg_id(id);
		System.out.println("est : "+est.toString());
		System.out.println("size : " + est_list);
		System.out.println("size : " + est_list.size());
		List<EstVO> estList = new ArrayList<EstVO>(0);
		estList.add(est);
		System.out.println("est_list : " + est_list.get(0));
		for(int i=0 ; i< est_list.size(); i++){
			EstVO vo = new EstVO();
			vo.setProd_id(est_list.get(i));
			vo.setProd_nm(est_list.get(++i));
			vo.setEstim_qty(est_list.get(++i));
			vo.setSales_price(est_list.get(++i));
			vo.setDiscount(est_list.get(++i));
			vo.setSup_price(est_list.get(++i));
			vo.setDiscount_unit_cd(est_list.get(++i));
			estList.add(vo);
		}
		ModelAndView mov = new ModelAndView();
		System.out.println(estList);
		
		int result = estInter.estAdd(estList);
		if(result > 1){
			mov.setViewName("redirect:/estInqr");
		}
		return mov;
	}
	
	// 영업활동 tab list ajax
	@RequestMapping(value = "/estimSalesActiveList", method = RequestMethod.GET)
	@ResponseBody
	Map<String, Object> actList(
			@RequestParam Map<String, String> map,
			@RequestParam(value = "actPageNum", defaultValue = "1") String actPageNum) {

		map.put("actPageNum", actPageNum);
		PagerVO page = estInter.actCount(map);
		map.put("startRow", page.getStartRow() + "");
		map.put("endRow", page.getEndRow() + "");
		List<ActVO> actList = estInter.actList(map);
		Map<String, Object> map2 = new HashMap<String, Object>();

		map2.put("page", page);
		map2.put("actPageNum", actPageNum);
		map2.put("actList", actList);

		return map2;
	}
	
	// 영업활동 추가 팝업창
	@RequestMapping(value = "/opptActiveEstPopup", method = RequestMethod.GET)
	public ModelAndView opptActivePopup(HttpSession session,
			String list_cust_id, String list_cust_nm, String list_sales_oppt_id) {
		ModelAndView mov = new ModelAndView("/sales/est/estPop/opptActivePopup");
		// 영업활동 유형코드 가져오기
		List<ActVO> actTypeCd = opptService.actTypeCdList();
		// 영업활동 상태코드 가져오기
		List<ActVO> actStatCd = opptService.actStatCdList();
		// 영업활동 구분코드 가져오기
		List<ActVO> actDivCd = opptService.actDivCdList();

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
	
	//상세정보에서의 영업기회 리스트 
	@RequestMapping(value="/estActOpptList" , method=RequestMethod.GET)
	public ModelAndView estActOpptList(HttpSession session,
			@RequestParam(value="keyfield", defaultValue="ct_id") String keyfield,
			@RequestParam(value="keyword", defaultValue="") String keyword,
			String cust_id){
		System.out.println("cust_id : "+cust_id);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("cust_id", cust_id);
		map.put("keyword", keyword);
		List<Object> estActOpptList = estInter.estActOpptList(map);
		ModelAndView mov = new ModelAndView("/sales/est/estPop/act_oppt_list_pop");
		
		mov.addObject("actOpptList", estActOpptList);
		
		return mov;
	}

		//상세정보에서의 고객 리스트 
		@RequestMapping(value="/estCustcompList" , method=RequestMethod.GET)
		public ModelAndView opptCustcompList(HttpSession session,
				@RequestParam(value="keyfield", defaultValue="ct_id") String keyfield,/*이부분!!!!!!!!!!!!!!!!!!!!!!*/
				@RequestParam(value="keyword", defaultValue="") String keyword
				){
				
				Map<String, Object> map = new HashMap<String, Object>();
			
				map.put("keyfield", keyfield);
				map.put("keyword", keyword);
				List<Object> custcompList = estInter.estCustComp(map);
				ModelAndView mov = new ModelAndView("/sales/est/estPop/custcomp_list_pop");
			
				mov.addObject("custcompList", custcompList);
				
				//javascript에서 상세정보에서의 고객 리스트인지 구분하기 위한 값 전달
				mov.addObject("custType", "normal");
		
			return mov;
		}
	
		@RequestMapping(value="/estProdList", method=RequestMethod.GET)
		public ModelAndView estProdList(HttpSession session,
				@RequestParam(value="keyfield", defaultValue="pt_id") String keyfield,
				@RequestParam(value="keyword", defaultValue="") String keyword){
			ModelAndView mov = new ModelAndView("/sales/est/estPop/product_list_pop");
			
			Map<String,Object> map = new HashMap<String,Object>();
			map.put("keyfield", keyfield);
			map.put("keyword", keyword);
			List<ProdVO> prodList = estInter.prodList(map);
		
			
			mov.addObject("prodList", prodList);
		
			return mov;
		}
	
		
	@RequestMapping(value = "/estDelete", method = RequestMethod.GET)
	@ResponseBody
	public int opptDelete(HttpSession session,
			@RequestParam(value = "estimDeleteIdList[]") List<String> estimDeleteIdList,
			@RequestParam(value = "pageNum", defaultValue = "1") String pageNum) {
			int result = 0;
			// 모든 checked된 견적에 대해 삭제
			for (int i = 0; i < estimDeleteIdList.size(); i++) {
				result += estInter.estDelete(estimDeleteIdList.get(i));
			}
			return result;
		}

	
	
	
}
