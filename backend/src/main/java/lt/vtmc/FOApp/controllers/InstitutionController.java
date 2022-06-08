package lt.vtmc.FOApp.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import lt.vtmc.FOApp.payload.requests.InstitutionInsertRequest;
import lt.vtmc.FOApp.payload.responses.InstitutionResponse;
import lt.vtmc.FOApp.services.InstitutionService;

@CrossOrigin
@RestController
@RequestMapping("/api/institution")
public class InstitutionController {

	private InstitutionService institutionService;
	
	public InstitutionController(InstitutionService institutionService) {
		this.institutionService = institutionService;
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public InstitutionResponse addInstitution(InstitutionInsertRequest institutionRequest) {
		return this.institutionService.saveInstitution(institutionRequest);
	}
	
}
