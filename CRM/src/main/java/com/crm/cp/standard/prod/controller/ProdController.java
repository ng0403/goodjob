package com.crm.cp.standard.prod.controller;

import java.io.File;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.MultipartRequest;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;
import com.crm.cp.standard.prod.service.ProdService;
import com.crm.cp.standard.prod.vo.ProdVO;
import com.crm.cp.utils.PageUtil;
import com.crm.cp.utils.PagerVO;
import com.crm.cp.utils.ProdFileManager;

@Controller
public class ProdController {
	
	@Autowired
	MenuService menuService;
	
	@Autowired
	ProdService prodService;
	
	@Resource(name="ProdfileManager")
	private ProdFileManager fileManager;
	

//	@RequestMapping(value="/prodInsert",method=RequestMethod.POST)
//	@ResponseBody
//	public String prodInsert(
//			HttpSession session,
//			HttpServletRequest req,
//			MultipartRequest prod_img,
//			MultipartRequest prod_cate,			 
//			@RequestBody ProdVO dto       
//			)throws Exception{		
//		String loginid = (String)session.getAttribute("user");
//		if(loginid==null){
//			return "redirect:/";
//		}
//		System.out.println(loginid+"님 로그인중");
//		System.out.println(""+dto.getProd_nm()+"\n"+dto.getCate_nm());
//		
//		// 이미지 업로드
//		String imgroot = session.getServletContext().getRealPath("/");
//		String imgpath =  imgroot + File.separator + "pds" + File.separator + "prodImg";
//		// 카탈로그 업로드
//		String catalroot = session.getServletContext().getRealPath("/");
//		String catalpath =  catalroot + File.separator + "pds" + File.separator + "prodCatal";
//		
//		if(!dto.getProd_img().isEmpty()){
//			String newFilename = fileManager.doFileUpload(dto.getProd_img(), imgpath);
//			
//			if(newFilename != null){
//				dto.setProd_img_nm(dto.getProd_img().getOriginalFilename());;
//				dto.setProd_img_save_loc(newFilename);
//			}
//		}
//		
//		if(!dto.getProd_catal().isEmpty()){
//			String newFilename = fileManager.doFileUpload(dto.getProd_catal(), catalpath);
//			
//			if(newFilename != null){
//				dto.setProd_catal_nm(dto.getProd_catal().getOriginalFilename());;
//				dto.setProd_catal_save_loc(newFilename);
//			}
//		}		
//		dto.setFin_mdfy_id(loginid);
//		dto.setFst_reg_id(loginid);
//		
//		
//		
//		
//		System.out.println("업로드 테스트"+dto.toString());
//		
//		prodService.prodInsert(dto);
//		
//		return "redirect:/prod";
//	}
	@RequestMapping(value="/prodFileUpload",method=RequestMethod.POST)
	public String prodFileUpload(
			HttpSession session,
			@ModelAttribute ProdVO dto
			//MultipartHttpServletRequest data			
			)throws Exception{
		
		// 현재 로그인 사용자 아이디 가져오기
		String loginid = (String)session.getAttribute("user");
			if(loginid==null){
				return "redirect:/";
			}	
			
		//ProdVO dto = new ProdVO();		
		//Map<String, MultipartFile> files = data.getFileMap();
//		MultipartFile prod_img = (MultipartFile) files.get("prod_img");
//		MultipartFile prod_catal = (MultipartFile) files.get("prod_catal");
		MultipartFile prod_img = (MultipartFile) dto.getProd_img();
		MultipartFile prod_catal = (MultipartFile)dto.getProd_catal();
		// 삼풍 및 파일 입력
//		dto.setProd_nm(data.getParameter("prod_nm"));
//		dto.setProd_dtl_cont(data.getParameter("prod_dtl_cont"));
//		dto.setProd_div_cd(data.getParameter("prod_div_cd"));
//		dto.setProd_price(data.getParameter("prod_price"));
//		dto.setProd_url(data.getParameter("prod_url"));
//		dto.setCate_id(data.getParameter("cate_id"));
		
		String root = session.getServletContext().getRealPath("/");
		// 이미지 업로드 path
		String imgpath =  root + File.separator + "pds" + File.separator + "prodImg";
		// 카탈로그 업로드 path
		String catalpath = root + File.separator + "pds" + File.separator + "prodCatal";
				
		// 파일을 지정된 루트에 저장한다.
		if(prod_img != null && !prod_img.isEmpty()){
			String newFilename = fileManager.doFileUpload(prod_img, imgpath);
			
			if(newFilename != null){
				dto.setProd_img_nm(prod_img.getOriginalFilename());;
				dto.setProd_img_save_loc(newFilename);
			}
		}
		if(prod_catal != null && !prod_catal.isEmpty()){
			String newFilename = fileManager.doFileUpload(prod_catal, catalpath);
			
			if(newFilename != null){
				dto.setProd_catal_nm(prod_catal.getOriginalFilename());;
				dto.setProd_catal_save_loc(newFilename);
			}
		}
		// 등록자 수정자 입력
		dto.setFin_mdfy_id(loginid);
		dto.setFst_reg_id(loginid);
		
		prodService.prodInsert(dto);
		
//		return "Insert success";
		return "redirect:/prod";
	}
	@RequestMapping(value="/prodUpdate",method=RequestMethod.POST)
//	@ResponseBody
	public String prodUpdate(
			HttpSession session,
			@ModelAttribute ProdVO dto
//			MultipartHttpServletRequest data
			) throws Exception {
		
		
//		ProdVO dto = new ProdVO();		
//		Map<String, MultipartFile> files = data.getFileMap();
//		MultipartFile prod_img = (MultipartFile) files.get("prod_img");
//		MultipartFile prod_catal = (MultipartFile) files.get("prod_catal");
		MultipartFile prod_img = (MultipartFile) dto.getProd_img();
		MultipartFile prod_catal = (MultipartFile)dto.getProd_catal();
		// 삼풍 및 파일 입력
//		dto.setCate_id(data.getParameter("cate_id"));
//		dto.setProd_id(data.getParameter("prod_id"));
//		dto.setProd_nm(data.getParameter("prod_nm"));
//		dto.setProd_div_cd(data.getParameter("prod_div_cd"));
//		dto.setProd_price(data.getParameter("prod_price"));
//		dto.setProd_dtl_cont(data.getParameter("prod_dtl_cont"));
//		dto.setProd_url(data.getParameter("prod_url"));				
		
		System.out.println("업데이트에 도착!"+dto.toString()+"\n prod_img : ");	
		
		
		String loginid = (String)session.getAttribute("user");		
		System.out.println(loginid);		
		if(loginid==null){
			return "redirect:/";
		}
		
		
		// 이미지 업로드
		String imgroot = session.getServletContext().getRealPath("/");
		String imgpath =  imgroot + File.separator + "pds" + File.separator + "prodImg";
		// 카탈로그 업로드
		String catalroot = session.getServletContext().getRealPath("/");
		String catalpath =  catalroot + File.separator + "pds" + File.separator + "prodCatal";
		
		
		
		// 파일 검사후 !null이면 새로 추가이므로 이전 파일을 지우고 다시 파일delete한뒤 업로드한다.
		/*if(prod_img!=null){*/
		if(prod_img != null && !prod_img.isEmpty()){
			String newFilename = fileManager.doFileUpload(prod_img, imgpath);			

			System.out.println(newFilename);
			if(!newFilename.isEmpty()){
				ProdVO vo = prodService.imgList(dto.getProd_id());
				if(vo!=null && vo.getProd_img_save_loc()!=null){
					fileManager.doFileDelete(vo.getProd_img_save_loc(), imgpath);							
				}						
				dto.setProd_img_nm(prod_img.getOriginalFilename());;
				dto.setProd_img_save_loc(newFilename);
			}
		}
/*		if(prod_catal!=null){*/
		if(prod_catal != null && !prod_catal.isEmpty()){
			String newFilename = fileManager.doFileUpload(prod_catal, catalpath);

			System.out.println(newFilename);	
			if(!newFilename.isEmpty()){
				ProdVO vo = prodService.catalList(dto.getProd_id());
				if(vo!=null && vo.getProd_catal_save_loc()!=null){
					fileManager.doFileDelete(vo.getProd_catal_save_loc(), imgpath);							
				}	
				dto.setProd_catal_nm(prod_catal.getOriginalFilename());;
				dto.setProd_catal_save_loc(newFilename);
			}
		}
		
		// 업데이트 한 아이디
		dto.setFst_reg_id(loginid);
		prodService.prodUpdate(dto);

		
		
		return "redirect:/prod";
	}
	
	@RequestMapping(value="/prodDownload",method=RequestMethod.GET)
	public void downloadFile(
			HttpServletRequest req,
			HttpServletResponse resp,
			@RequestParam(value="prod_id") String prod_id,
			@RequestParam(value="mode") String mode
			) throws Exception {
		
    	HttpSession session = req.getSession();
    	// 세이브 파일 네임과 오리지널 파일 네임변수 생성 초기화
    	String SaveFilename = null;
    	String OriginalFilename = null;
    	
		// 다운로드 path
		String root = session.getServletContext().getRealPath("/");
		String path = null;		
    	
		// 리드 중인 Prod_id 값으로 저장된 ProdVO값을 가져온다.
		//ProdVO dto = prodService.prodRead(prod_id);
		ProdVO imgList = prodService.imgList(prod_id);
		ProdVO catalList = prodService.catalList(prod_id);
		
		// 값이 없으면  Return
		if(imgList==null&&catalList==null)
			return;
		
		//  jsp에서 받아온 mode값으로 이미지와 카탈로그 파일중 맞는 위치의 값을 가져온다.
		if(mode.equals("img")){		
		SaveFilename = imgList.getProd_img_save_loc();
		OriginalFilename = imgList.getProd_img_nm();
		path =  root + File.separator + "pds" + File.separator + "prodImg";
		System.out.println(path+"ㅇㅇ"+path.toString());
		}else if(mode.equals("catal")){
		SaveFilename = catalList.getProd_catal_save_loc();
		OriginalFilename = catalList.getProd_catal_nm();
		path =  root + File.separator + "pds" + File.separator + "prodCatal";
		}
		
		// 성공 유무를 flag에 저장하고
		boolean flag = fileManager.doFileDownload(SaveFilename,
				OriginalFilename, path, resp);
		
		// 성공 유무의 따라 실패시 메시지를 띄워준다.
		if (!flag) {
			try {
				resp.setContentType("text/html; charset=utf-8");
				PrintWriter out = resp.getWriter();
				out.print("<script>alert('파일이 존재하지 않아 다운로드 할 수 없습니다.');history.back();</script>");
			} catch (Exception e) {
			}
		}
    }
	@RequestMapping(value="/prodRead",method=RequestMethod.POST)
	public @ResponseBody ProdVO prodReadA(
			HttpSession session,
			MultipartHttpServletRequest data,
			/*@RequestParam(value="prod_id") String prod_id,*/
			@RequestParam(value = "prodPageNum", defaultValue = "1") int prodPageNum
			)throws Exception{						
		
		ProdVO dto = prodService.prodRead(data.getParameter("prod_id"));			
				
		return dto;
	}	
	//상품 수정 폼 출력
	@RequestMapping(value="/prodRead",method=RequestMethod.GET)
	public ModelAndView prodRead(
				HttpSession session,
				@RequestParam(value="prod_id") String prod_id,
				@RequestParam(value = "prodPageNum", defaultValue = "1") int prodPageNum
			)throws Exception{
		
		ModelAndView mov = new ModelAndView("prodDetail");
		
		ProdVO dto = prodService.prodRead(prod_id);
		
		List<ProdVO> prodServicecCodeList = prodService.prodServiceCodeList();
		ProdVO imgList = prodService.imgList(prod_id);
		ProdVO catalList = prodService.catalList(prod_id);

		mov.addObject("prodServicecCodeList",prodServicecCodeList);
		mov.addObject("prodDto",dto);
		mov.addObject("imgList",imgList);
		mov.addObject("catalList",catalList);
		mov.addObject("flg","detail");
		
		return mov;
	}
	
	@RequestMapping(value="/prodListSearch")
	public @ResponseBody Map<String,Object> ProdListSearch(
			HttpSession session,
			@RequestParam Map<String, Object> map,
			@RequestParam(value = "prodPageNum", defaultValue = "1") int prodPageNum,
			@RequestParam (value = "prod_nm" , required = false)String prod_nm,
			@RequestParam (value = "code" , required = false)String code,
			@RequestParam(value = "order_by", defaultValue = "fin_mdfy_dt") String order_by,
			@RequestParam(value = "order_sc", defaultValue = "DESC") String order_sc
			){
		System.out.println("검색어 prod_id : "+prod_nm+" 코드 : "+code);				
		
		Map<String,Object> prodMap = new HashMap<String, Object>();
		map.put("prodPageNum", prodPageNum);
		map.put("prod_nm",prod_nm);
		map.put("code", code);
		
		PagerVO page = prodService.getProdListCount(map);
		map.put("order_by", order_by);
		map.put("order_sc", order_sc);
		prodMap.put("page", page);
		map.put("startRow", page.getStartRow() + "");
		map.put("endRow", page.getEndRow() + "");
		
		List<ProdVO> prodList =prodService.prodAllList(map);
		prodMap.put("prodList", prodList);
		prodMap.put("prodListSize", prodList.size());		
		prodMap.put("ccPageNum", prodPageNum);
		prodMap.put("data", map);
		
		return prodMap;
	}
	
	

/*	@RequestMapping(value="/prod" , method=RequestMethod.GET)*/
	@RequestMapping(value="/prod")
	public ModelAndView Prod(
			HttpSession session,
			@RequestParam HashMap<String, Object> prodMap,
			@RequestParam(value = "prodPageNum", defaultValue = "1") int prodPageNum,
			@RequestParam(value = "order_by", defaultValue = "fin_mdfy_dt") String order_by,
			@RequestParam(value = "order_sc", defaultValue = "DESC") String order_sc
			) throws Exception{
		prodMap.put("prodPageNum",prodPageNum);
		
		PagerVO page = prodService.getProdListCount(prodMap);
		prodMap.put("order_by", order_by);
		prodMap.put("order_sc", order_sc);
		prodMap.put("startRow", page.getStartRow());
		prodMap.put("endRow", page.getEndRow());
		prodMap.put("page", page);

		
		List<ProdVO> prodList = prodService.prodAllList(prodMap);
		ModelAndView mov = new ModelAndView("prodList");
		List<ProdVO> prodServicecCodeList = prodService.prodServiceCodeList();
		//List<MenuVO> menuList = menuService.selectAll(session);
		
		System.out.println(page +" : "+ prodPageNum);

		mov.addObject("prodServicecCodeList",prodServicecCodeList);	 
		//mov.addObject("menuList", menuList);
		mov.addObject("ccPageNum", prodPageNum);
		mov.addObject("page", page);
		mov.addObject("prodList", prodList);
		mov.addObject("data", prodMap);
		System.out.println(prodList);
		System.out.println(page);
		return mov;
	}
	//상품 입력 폼 출력
	@RequestMapping(value="/prodAddForm")
	public ModelAndView ProdAddForm(
			HttpSession session,
			@RequestParam HashMap<String, Object> prodMap
			) throws Exception{
		
		ModelAndView mov = new ModelAndView("prodDetail");
		
		List<ProdVO> prodServicecCodeList = prodService.prodServiceCodeList();

		mov.addObject("prodServicecCodeList",prodServicecCodeList);
		mov.addObject("flg","add");
		
		return mov;
	}
	
//	//상품 수정
//	@RequestMapping(value="/prodMdfyForm")
//	public ModelAndView ProdMdfyForm(
//			HttpSession session,
//			@RequestParam(value="prod_id") String prod_id,
//			@RequestParam HashMap<String, Object> prodMap
//			) throws Exception{
//		
//		ModelAndView mov = new ModelAndView("prodDetail");
//		
//		ProdVO dto = prodService.prodRead(prod_id);
//		
//		List<ProdVO> prodServicecCodeList = prodService.prodServiceCodeList();
//
//		mov.addObject("prodServicecCodeList",prodServicecCodeList);
//		mov.addObject("prodDto",dto);
//		mov.addObject("flg","Detail");
//		
//		return mov;
//	}	
	
	//상품카테고리리스트 팝업창 
	@RequestMapping(value="/prodCateList" , method=RequestMethod.GET)
	public ModelAndView prodCateList(HttpSession session){

		List<ProdVO> prodCateList = prodService.prodCateList();
		ModelAndView mov = new ModelAndView("/standard/prod/prodPop/prod_cate_list_pop");
		
		mov.addObject("prodCateList", prodCateList);
	
		return mov;
	}
	
	@RequestMapping(value = "/prodDelete", method = RequestMethod.GET)
	@ResponseBody
	public int opptDelete(HttpSession session,
			@RequestParam(value = "prodDeleteIdList[]") List<String> prodDeleteIdList,
			@RequestParam(value = "ccPageNum", defaultValue = "1") String pageNum) {
		int result = 0;
		// 모든 checked된 견적에 대해 삭제
		for (int i = 0; i < prodDeleteIdList.size(); i++) {
			result += prodService.prodDelete(prodDeleteIdList.get(i));
		}
		return result;
	}

}
