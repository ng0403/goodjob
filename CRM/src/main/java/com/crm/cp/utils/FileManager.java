package com.crm.cp.utils;

import java.awt.image.BufferedImage;
import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import javax.imageio.ImageIO;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriUtils;

import com.aspose.slides.ISlide;
import com.aspose.slides.Presentation;

@Service
public class FileManager {
	
	public FileManager(){}
	
	public boolean doFileDownload(String file_name, String pathname, HttpServletResponse response) {
		/*String filePath = "downloads\\";
		/*String filePath = "C:\\users\\core\\desktop\\file\\";*/
/*		String fullpathname = pathname +filePath+ file_name;*/
		String filePath = "C:\\Users\\1234\\Desktop\\test\\";
		String fullpathname = filePath+ file_name;
		System.out.println(fullpathname.toString());
		String viewfilename = file_name.substring(10, file_name.length());
		
	    try {
	        File file = new File(fullpathname);

	        if (file.exists()){
	            byte readByte[] = new byte[4096];

	            response.setContentType("application/octet-stream");
				response.setHeader(
						"Content-disposition",
						"attachment; filename=" + UriUtils.encodeFragment(viewfilename, "UTF-8"));

	            BufferedInputStream  fin  = new BufferedInputStream(new FileInputStream(file));
	            OutputStream outs = response.getOutputStream();
	            
	   			int read;
	    		while ((read = fin.read(readByte, 0, 4096)) != -1)
	    				outs.write(readByte, 0, read);
	    		outs.flush();
	    		outs.close();
	            fin.close();
	            
	            return true;
	        }
	    } catch(Exception e) {
	    	
	    }
	    
	    return false;
	}
	
	public String doFileUpload(MultipartFile file, HttpServletRequest request)  throws IOException{
  
		request.setCharacterEncoding("euc-kr");
		
 		/*String filePath = "downloads\\";*/
		/*String filePath = "C:\\users\\core\\desktop\\file\\";*/
		String filePath = "C:\\Users\\1234\\Desktop\\test\\";
		String folderPath = "";
		String random = ""; 
		
			ServletContext context = request.getSession().getServletContext();
			/*String appPath = context.getRealPath("");*/
			
			for(int i=0; i<10; i++){
				char rtext = (char)((Math.random()*26)+65);
				random += rtext;
 			}
			
			String randomtext = random;
			
			// construct the complete absolute path of the file
			folderPath =  filePath;
			
		   String uploadFilePath =  filePath + randomtext + file.getOriginalFilename();
			/*String uploadFilePath = filePath + randomtext + file.getOriginalFilename();*/
			System.out.println("파일 경로" +uploadFilePath.toString());
			 
			File folderFile = new File(folderPath);	
			File uploadFile = new File(uploadFilePath);
			
			if (folderFile.isDirectory() == false) {
				folderFile.mkdirs();
			}
			
			try {

				byte[] input = file.getBytes();
				FileOutputStream fos = new FileOutputStream(uploadFile);
				fos.write(input);
				fos.close();
				
 				//ppt 슬라이드 이미지 전환 부분
				String a = file.getOriginalFilename();  
				
				//파일명에서 확장자를 구한다.
				int pos = a.lastIndexOf( "." );
				String ext = a.substring( pos + 1 );  
 				
				// 확장자가 PPTX일 때 이미지화 진행
				if(ext.equals("pptx")){
 					String full_file = filePath + a; 
 					
 						String dataPath = "C:/Users/1234/Desktop/과제/";  
						System.out.println("dataPath?? " + dataPath.toString());
						
						//Instantiate a Presentation class that represents the PPTX file 
						Presentation pres = new Presentation(uploadFilePath);
 						
						for (int i = 0; i < pres.getSlides().size(); i++) {
 						//Access the first slide
						ISlide sld = pres.getSlides().get_Item(i);
						
						//Create a full scale image
						BufferedImage image = sld.getThumbnail(1f, 1f);
						
						//Save the image to disk in JPEG format
						ImageIO.write(image,"jpeg",new File("C:/Users/1234/git/goodjob/CRM/src/main/webapp/resources/image/pptx/" + "AsposeThumbnail_Out" + i + ".jpg"));

					    //Printing the status
					    System.out.println("Thumbnail created successfully!");
						}
					
					
					/*FileInputStream is = new FileInputStream(uploadFilePath);
					XMLSlideShow ppt = new XMLSlideShow(is);
					
					System.out.println("ppt??? " + is.toString());
					is.close();

					Dimension pgsize = ppt.getPageSize();
			 		List<XSLFSlide> slide = ppt.getSlides();
			 	 
		 			for (int i = 0; i < slide.size(); i++) {

						BufferedImage img = new BufferedImage(pgsize.width, pgsize.height, BufferedImage.SCALE_SMOOTH);
						Graphics2D graphics = img.createGraphics();
						
						// clear the drawing area
						graphics.setPaint(Color.white);
						graphics.fill(new Rectangle2D.Float(0, 0, pgsize.width,	pgsize.height));
						try{
							// render
							slide.get(i).draw(graphics);
							
							 
							 save the output
							  슬라이드 -> 이미지 파일(PNG)
							
							System.out.println("slide?? " + i);
							FileOutputStream out = new FileOutputStream("C:/Users/1234/git/goodjob/CRM/src/main/webapp/resources/image/pptx/slide-" + (i+1) + ".png"); // 이미지 파일 저장 경로
							javax.imageio.ImageIO.write(img, "JPG", out);
							out.close();
						} catch (Exception e){
							System.out.println("에러 슬라이드 번호 : "+(i+1));
							continue;
						}
						
					}*/
				}  
				
				return uploadFile.toString();

			} catch (IOException e1) {
				System.out.println("error!");
			} 
		    
		return null;
	}
	
	public boolean doCompressFile(String[] source, HttpServletResponse response){
		
		if(source.length<1){
			return false;
		}
		
		File file = new File(source[0]);
		
		if(!file.isFile()){
			return false;
		}
		
		try {
			
			byte[] buf = new byte[4096];
			response.setContentType("application/octet-stream");
			response.setHeader(
					"Content-disposition",
					"attachment; filename=" + UriUtils.encodeFragment("다운로드파일.zip", "UTF-8"));
			OutputStream outs = response.getOutputStream();
			
			ZipOutputStream zipOut = new ZipOutputStream(outs);
			
			for(int i=0; i<source.length; i++){
				
				FileInputStream in = new FileInputStream(source[i]);
				
				String[] temp= source[i].split("\\\\");
				zipOut.putNextEntry(new ZipEntry(temp[temp.length-1])); 
				
				int len;
				while((len = in.read(buf))>0){
					zipOut.write(buf, 0, len);
				}
				
				zipOut.closeEntry();
				in.close();
				
			}
			
			zipOut.close();
			return true;

		} catch (UnsupportedEncodingException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			return false;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}

	}
}