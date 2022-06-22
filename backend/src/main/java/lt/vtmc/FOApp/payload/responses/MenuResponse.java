package lt.vtmc.FOApp.payload.responses;

import java.util.List;

import lt.vtmc.FOApp.models.Dish;

public class MenuResponse {

	private Long menuId;
	
	private String menuName;
	
//	private List<Dish> dishes;
	
	public MenuResponse(Long menuId, String menuName) {
		this.menuId = menuId;
		this.menuName = menuName;
//		this.dishes = dishes;
	}

	public String getMenuName() {
		return menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	public Long getMenuId() {
		return menuId;
	}

	public void setMenuId(Long menuId) {
		this.menuId = menuId;
	}

//	public List<Dish> getDishes() {
//		return dishes;
//	}
//
//	public void setDishes(List<Dish> dishes) {
//		this.dishes = dishes;
//	}

	@Override
	public String toString() {
		return "MenuResponse [menuId=" + menuId + ", menuName=" + menuName + "]";
	}

	
}
