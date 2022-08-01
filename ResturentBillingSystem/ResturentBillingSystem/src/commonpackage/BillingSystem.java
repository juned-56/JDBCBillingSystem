package commonpackage;
import java.sql.Connection;
//import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

public class BillingSystem {
	public static void main(String[] args) throws ClassNotFoundException, SQLException, ParseException {
	Scanner sc = new Scanner(System.in);
	Item itm = new Item();
	Class.forName("org.postgresql.Driver");
	Connection connet = DriverManager.getConnection("jdbc:postgresql://localhost/login", "postgres", "Juned@56");
	PreparedStatement ps1 = null;
	ResultSet rs = null;
	Date date = new Date();
	java.sql.Date sqldate = new java.sql.Date(date.getTime());
	int count = 0;
//	while(true) {
	System.out.println("**************Choose option***********");
	System.out.println("1. Login");
	System.out.println("2. Sign Up");
	System.out.println("3. Admin Login");
	int opt = sc.nextInt();
	switch(opt) {
	case 1: 
		System.out.println("Welcome to Login");
		System.out.println("Enter the username");
		String username = sc.next();
		System.out.println("Enter the password");
		String password= sc.next();
		PreparedStatement ps = connet.prepareStatement("select * from BIL_SYST where username = ? and password = ?");
		ps.setString(1, username);
		ps.setString(2, password);
		ResultSet result = ps.executeQuery();	
		if(result.next()) {
			System.out.println("login successfull: ");
			while(true) {
			String sqll = "select * from item";
			ps1 = connet.prepareStatement(sqll);
			rs = ps1.executeQuery();
			System.out.println("ItemId\t\tItemName\tItemPrice\tItemQuantity");
			while(rs.next()) {
				int id = rs.getInt("itmid");
				String name = rs.getString("itmname");
				int price = rs.getInt("itmprice");
				int quantity = rs.getInt("itmquantity");
				System.out.println(id + "\t\t" + name + "\t\t" + price + "\t\t" + quantity);
			}
			System.out.println("Enter the item id which you want to order");
			int itmiddd = sc.nextInt();
			System.out.println("Enter the quantity");
			int qtt = sc.nextInt();
			String ordr = "select itmprice from item where itmid = ?";
			ps1 = connet.prepareStatement(ordr);
			ps1.setInt(1, itmiddd);
			//int updateCount0 = ps1.executeUpdate();
			rs = ps1.executeQuery();
			System.out.println("Total bill generated");
			while(rs.next()) {
			int amount = rs.getInt("itmprice");
			count = count + (amount * qtt);
			System.out.println(count);
				}
			String sle = "insert into TOTL_SALE values(?, ?, ?)";
			ps1 = connet.prepareStatement(sle);
			ps1.setString(1, username);
			ps1.setInt(2, count);
			ps1.setDate(3, sqldate);
			int updateCount1 = ps1.executeUpdate();
			System.out.println("User Order added into record");
			}	
		}
		else
		{
			System.out.println("Wrong password try again!!!!!!!");
		}
		connet.close();
		break;
	case 2:
		System.out.println("Welcome to SignUp");
		System.out.println("Enter the username");
		String uname = sc.next();
		System.out.println("Enter the password");
		String pwd = sc.next();
		String insrt = "insert into BIL_SYST values(?, ?)";
		ps1 = connet.prepareStatement(insrt);
		ps1.setString(1, uname);
		ps1.setString(2, pwd);
		int updateCount = ps1.executeUpdate();
		System.out.println("Updated successfully");
		break;
	case 3:
		System.out.println("Welcome to the Admin Section");
		String adminuser = "admin";
		String adminpasswd = "Admin@56";
//		PreparedStatement ps2 = connet.prepareStatement("select * from BIL_SYST where = ? and adminpasswd = ?");
//		ps2.setString(1, adminuser);
//		ps2.setString(2, adminpasswd);
//		ResultSet result2 = ps2.executeQuery();
		System.out.println("Enter the username");
		String usr = sc.next();
		System.out.println("Enter the password");
		String pass = sc.next();
		if(adminuser.equals(usr) && adminpasswd.equals(pass)) {
			System.out.println("======================Admin login successfull=========================");
			System.out.println("1. Get the today generated bill");
			System.out.println("2. See the monthly sale");
			System.out.println("3. Perform CRUD operation");
			int n = sc.nextInt();
			if(n == 3) {
				System.out.println("1. Add Item");
				System.out.println("2. Delete Item");
				int nn = sc.nextInt();
				if(nn == 1) {
					System.out.println("Item id");
					int itmid = sc.nextInt();
					System.out.println("Item Name");
					String itmname = sc.next();
					System.out.println("Item Price");
					int itmprice = sc.nextInt();
					System.out.println("Item Quantity");
					int itmqty = sc.nextInt();
					String insrt1 = "insert into item values(?, ?, ?, ?)";
					ps1 = connet.prepareStatement(insrt1);
					ps1.setInt(1, itmid);
					ps1.setString(2, itmname);
					ps1.setInt(3, itmprice);
					ps1.setInt(4, itmqty);
					int updateCount1 = ps1.executeUpdate();
					System.out.println("Item Added Successfully");
				}
				if(nn == 2) {
					System.out.println("Enter the Item Id which you want to delete");
					int itmidd = sc.nextInt();
					String dlt = "delete from item where itmid = ?";
					ps1 = connet.prepareStatement(dlt);
					ps1.setInt(1, itmidd);
					int updateCount2 = ps1.executeUpdate();
					System.out.println("Item deleted successfully");
				}
			}
			if(n == 1) {
				String sqll1 = "select * from TOTL_SALE WHERE date = '2022-08-01'";
				ps1 = connet.prepareStatement(sqll1);
				rs = ps1.executeQuery();
				System.out.println("CusotmerName\tTotal Bill\tDate");
				while(rs.next()) {
					String usrrname = rs.getString("username");
					int countt = rs.getInt("count");
					Date dtt = rs.getDate("date");
					System.out.println(usrrname + "\t\t" + countt + "\t\t" + dtt);
				}
			}
		if(n == 2) {
			String sqll2 = "SELECT * FROM TOTL_SALE WHERE date BETWEEN  '2022-08-01' AND '2022-08-01'";
			ps1 = connet.prepareStatement(sqll2);
			rs = ps1.executeQuery();
			System.out.println("CusotmerName\tTotal Bill\tDate");
			while(rs.next()) {
				String usrrname = rs.getString("username");
				int countt = rs.getInt("count");
				Date dtt = rs.getDate("date");
				System.out.println(usrrname + "\t\t" + countt + "\t\t" + dtt);
				}
			}
		}
		else {
			System.out.println("!!!!Enter the correct username and password");
			}
		}
	}
}
