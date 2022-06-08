package lt.vtmc.FOApp.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import lt.vtmc.FOApp.models.Institution;
import lt.vtmc.FOApp.payload.requests.InstitutionInsertRequest;
import lt.vtmc.FOApp.payload.responses.InstitutionResponse;
import lt.vtmc.FOApp.repositories.InstitutionRepository;

@Service
public class InstitutionService {
	
	private InstitutionRepository institutionRepository;
	
	public InstitutionService(InstitutionRepository institutionRepository) {
		this.institutionRepository = institutionRepository;
	}
	
	public InstitutionResponse saveInstitution(InstitutionInsertRequest institutionRequest) {
		
	}
	
	public Optional<Institution> getInstitutionBybusinessName(String businessName) {
		return this.institutionRepository.findByBusinessName(businessName);
	}

}
