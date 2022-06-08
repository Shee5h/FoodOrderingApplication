package lt.vtmc.FOApp.payload.responses;

public class InstitutionResponse {
	
	private Long codeName;
	
	private String address;

	private String businessName;
	
	public InstitutionResponse(Long codeName, String address, String businessName) {
		this.codeName = codeName;
		this.address = address;
		this.businessName = businessName;
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
	
	public void setBusinessName(String businessName) {
		this.businessName = businessName;
	}
	
	public String getBusinessName() {
		return this.businessName;
	}
	
	@Override
    public String toString() {
        return "InstitutionResponse{" +
                "codeName='" + this.codeName + '\'' +
                ", businessName='" + this.businessName + '\'' +
                ", address='" + this.address + '\'' +
                '}';
    }
}
