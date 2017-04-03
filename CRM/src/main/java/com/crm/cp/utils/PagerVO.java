package com.crm.cp.utils;

public class PagerVO {
	private int totalCount; //전체게시글의 총갯수
	private int pageSize;	//한 페이지에 보여줄 게시물 갯수
	private int pageBlockSize;	//한 펭지에 보여질 페이징갯수
	private int startRow; //시작행 번호
	private int endRow; //끝행 번호
	private int firstPageCount;	//첫페이지 수
	private int startPageNum;	//시작페이지 index번호
	private int endPageNum;		//끝페이지 index번호
	private int currentPageNum; //현재페이지 번호
	private int prevPageNum;   //이전페이지 번호
	private int nextPageNum;	//다음페이지 번호
	private int prevStepPage;	//이전 단계 페이지
	private int nextStepPage;	//다음 단계 페이지
	private int totalPageCount; //전체페이징 갯수

	
	public PagerVO(){}

	public PagerVO(int currentPageNum, int totalCount, int pageSize, int pageBlockSize) {
		this.totalCount = totalCount;
		this.currentPageNum = currentPageNum;
		this.pageSize=pageSize;
		this.pageBlockSize=pageBlockSize;
		startRow = (currentPageNum-1)*pageSize+1;
		endRow  = startRow+pageSize-1;
		totalPageCount = (int) Math.ceil((double)totalCount/pageSize);
		
		startPageNum = (int)((currentPageNum-1)/pageBlockSize)*pageBlockSize+1;
		endPageNum = startPageNum+(pageBlockSize-1);
		if(endPageNum>totalPageCount){
			endPageNum = totalPageCount;
		}
		firstPageCount = 1;
		
		prevPageNum = ((currentPageNum-1) < 1 ? 1 : (currentPageNum - 1));
		nextPageNum = ((currentPageNum+1) > totalPageCount ? totalPageCount : (currentPageNum + 1));
		
		prevStepPage = ((currentPageNum-pageSize) < 1 ? 1 : (startPageNum - pageSize));
		nextStepPage = ((currentPageNum+pageSize) > totalPageCount ? totalPageCount : (startPageNum + pageSize));
		
	}

	public int getFirstPageCount() {
		return firstPageCount;
	}

	public void setFirstPageCount(int firstPageCount) {
		this.firstPageCount = firstPageCount;
	}

	public int getPrevStepPage() {
		return prevStepPage;
	}

	public void setPrevStepPage(int prevStepPage) {
		this.prevStepPage = prevStepPage;
	}

	public int getNextStepPage() {
		return nextStepPage;
	}

	public void setNextStepPage(int nextStepPage) {
		this.nextStepPage = nextStepPage;
	}

	public int getPrevPageNum() {
		return prevPageNum;
	}

	public void setPrevPageNum(int prevPageNum) {
		this.prevPageNum = prevPageNum;
	}

	public int getNextPageNum() {
		return nextPageNum;
	}

	public void setNextPageNum(int nextPageNum) {
		this.nextPageNum = nextPageNum;
	}

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public int getStartRow() {
		return startRow;
	}

	public void setStartRow(int startRow) {
		this.startRow = startRow;
	}

	public int getEndRow() {
		return endRow;
	}

	public void setEndRow(int endRow) {
		this.endRow = endRow;
	}

	public int getStartPageNum() {
		return startPageNum;
	}

	public void setStartPageNum(int startPageNum) {
		this.startPageNum = startPageNum;
	}

	public int getEndPageNum() {
		return endPageNum;
	}

	public void setEndPageNum(int endPageNum) {
		this.endPageNum = endPageNum;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getPageBlockSize() {
		return pageBlockSize;
	}

	public void setPageBlockSize(int pageBlockSize) {
		this.pageBlockSize = pageBlockSize;
	}

	public int getTotalPageCount() {
		return totalPageCount;
	}

	public void setTotalPageCount(int totalPageCount) {
		this.totalPageCount = totalPageCount;
	}

	public int getCurrentPageNum() {
		return currentPageNum;
	}

	public void setCurrentPageNum(int currentPageNum) {
		this.currentPageNum = currentPageNum;
	}

	@Override
	public String toString() {
		return "PagerVO [totalCount=" + totalCount + ", pageSize=" + pageSize
				+ ", pageBlockSize=" + pageBlockSize + ", startRow=" + startRow
				+ ", endRow=" + endRow + ", startPageNum=" + startPageNum
				+ ", endPageNum=" + endPageNum + ", currentPageNum="
				+ currentPageNum + ", totalPageCount=" + totalPageCount + "]";
	}
	
}
