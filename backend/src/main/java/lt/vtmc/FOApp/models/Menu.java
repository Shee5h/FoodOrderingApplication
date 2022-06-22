package lt.vtmc.FOApp.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "menus")
public class Menu {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long menuId;
	
	@NotBlank
	private String menuName;
	
//	@NotBlank
//	@ManyToOne
//    @JoinColumn(name = "dish_id")
//	private List<Dish> dishes;
	
}
