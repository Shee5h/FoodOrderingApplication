package lt.vtmc.FOApp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import lt.vtmc.FOApp.models.Institution;
//import lt.vtmc.FOApp.models.User;
import lt.vtmc.FOApp.payload.requests.InstitutionInsertRequest;
import lt.vtmc.FOApp.payload.requests.InstitutionUpdateRequest;
import lt.vtmc.FOApp.payload.responses.InstitutionResponse;
import lt.vtmc.FOApp.repositories.InstitutionRepository;
//import lt.vtmc.FOApp.repositories.UserRepository;

@Service
public class InstitutionService {
	
	private InstitutionRepository institutionRepository;
//	private UserRepository userRepository;
	
//	private String getCurrentPrincipalEmail() {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        return authentication.getName();
//    }
	
	@Autowired
	public InstitutionService(InstitutionRepository institutionRepository) {
		this.institutionRepository = institutionRepository;
	}
	
	public InstitutionResponse saveInstitution(InstitutionInsertRequest institutionRequest) {

		Institution institution = new Institution(
				institutionRequest.getBusinessName(),
				institutionRequest.getCodeName(),
				institutionRequest.getAddress()
				);
		institutionRepository.save(institution);
		
		return new InstitutionResponse(
				institution.getInstitutionId(),
				institutionRequest.getCodeName(),
				institutionRequest.getAddress(),
				institutionRequest.getBusinessName());
	}
	
	public InstitutionResponse updateInstitution(InstitutionUpdateRequest institutionRequest) {
		
		Institution institution = institutionRepository.getById(institutionRequest.getInstitutionId());
		
		institution.setAddress(institutionRequest.getAddress());
		institution.setBusinessName(institutionRequest.getBusinessName());
		institution.setCodeName(institutionRequest.getCodeName());
		
		institutionRepository.save(institution);
		
		return new InstitutionResponse(
				institution.getInstitutionId(),
				institutionRequest.getCodeName(),
				institutionRequest.getAddress(),
				institutionRequest.getBusinessName());
	}
	
	
	
	public Optional<Institution> getInstitutionBybusinessName(String businessName) {
		return this.institutionRepository.findByBusinessName(businessName);
	}
	
	public List<Institution> getAllInstitutions(){
		return this.institutionRepository.findAll();
		
	}

}
