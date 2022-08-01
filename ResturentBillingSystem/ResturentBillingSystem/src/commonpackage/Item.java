package commonpackage;

public class Item {
	private int itemid;
	private String itemname;
	private int itemprice;
	private int quentity;
	public Item(int itemid, String itemname, int itemprice, int quentity) {
		super();
		this.itemid = itemid;
		this.itemname = itemname;
		this.itemprice = itemprice;
		this.quentity = quentity;
	}
	public int getQuentity() {
		return quentity;
	}
	public void setQuentity(int quentity) {
		this.quentity = quentity;
	}
	public Item() {
		// TODO Auto-generated constructor stub
	}
	public int getItemid() {
		return itemid;
	}
	public void setItemid(int itemid) {
		this.itemid = itemid;
	}
	public String getItemname() {
		return itemname;
	}
	public void setItemname(String itemname) {
		this.itemname = itemname;
	}
	public int getItemprice() {
		return itemprice;
	}
	public void setItemprice(int itemprice) {
		this.itemprice = itemprice;
	}
	@Override
	public String toString() {
		return "Item [itemid=" + itemid + ", itemname=" + itemname + ", itemprice=" + itemprice + ", quentity="
				+ quentity + "]";
	}
	
}
