package lt.vtmc.FOApp.payload.requests;

import javax.validation.constraints.NotBlank;

public class MenuInsertRequest {
	
	@NotBlank
	private String menuName;

	public String getMenuName() {
		return menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	@Override
	public String toString() {
		return "MenuInsertRequest [menuName=" + menuName + "]";
	}
	
	

}
