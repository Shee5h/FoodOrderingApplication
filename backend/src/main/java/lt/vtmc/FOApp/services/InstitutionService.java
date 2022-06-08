package lt.vtmc.FOApp.services;

import java.util.Optional;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import lt.vtmc.FOApp.models.Institution;
import lt.vtmc.FOApp.models.User;
import lt.vtmc.FOApp.payload.requests.InstitutionInsertRequest;
import lt.vtmc.FOApp.payload.responses.InstitutionResponse;
import lt.vtmc.FOApp.repositories.InstitutionRepository;
import lt.vtmc.FOApp.repositories.UserRepository;

@Service
public class InstitutionService {
	
	private InstitutionRepository institutionRepository;
	private UserRepository userRepository;
	
	private String getCurrentPrincipalEmail() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication.getName();
    }
	
	public InstitutionService(InstitutionRepository institutionRepository) {
		this.institutionRepository = institutionRepository;
	}
	
	public InstitutionResponse saveInstitution(InstitutionInsertRequest institutionRequest) {
		String getCurrentEmail = getCurrentPrincipalEmail();
		User user = userRepository.findByEmail(getCurrentEmail).orElse(null);
		Institution institution = new Institution(
				user,
				institutionRequest.getBusinessName(),
				institutionRequest.getCodeName(),
				institutionRequest.getAddress()
				);
		institutionRepository.save(institution);
		
		return new InstitutionResponse(
				institutionRequest.getCodeName(),
				institutionRequest.getAddress(),
				institutionRequest.getBusinessName());
	}
	
	public Optional<Institution> getInstitutionBybusinessName(String businessName) {
		return this.institutionRepository.findByBusinessName(businessName);
	}

}
