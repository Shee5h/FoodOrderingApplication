package lt.vtmc.FOApp.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "institutions")
public class Institution {
	
	@ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;
	
	@NotBlank
	private String businessName;
	
	@Id
	@NotBlank
	private Long codeName;
	
	@NotBlank
	private String address;
	
	public Institution() {
	}
	
	public Institution(User user, @NotBlank String businessName, @NotBlank Long codeName, @NotBlank String address) {
		this.user = user;
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
