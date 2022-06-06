package lt.vtmc.FOApp.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "institutions")
public class Institution {
	
	@NotBlank
	private String businessName;
	
	@Id
	@NotBlank
	private Long codeName;
	
	@NotBlank
	private String address;
	
	public Institution() {
		
	}
	
	public Institution(@NotBlank String businessName, @NotBlank Long codeName, @NotBlank String address) {
		this.businessName = businessName;
		this.codeName = codeName;
		this.address = address;
	}
	
	public void setBusinessName(String businessName) {
		this.businessName = businessName;
	}
	
	public String getBusinessName() {
		return this.businessName;
	}
	
	public void setCodeName(Long codeName) {
		this.codeName = codeName;
	}
	
	public Long getCodeName() {
		return this.codeName;
	}
	
	public void setAddress(String address) {
		this.address = address;
	}
	
	public String getAddress() {
		return this.address;
	}
}
