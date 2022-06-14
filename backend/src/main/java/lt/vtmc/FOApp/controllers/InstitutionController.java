package lt.vtmc.FOApp.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lt.vtmc.FOApp.models.Institution;
import lt.vtmc.FOApp.payload.requests.InstitutionInsertRequest;
import lt.vtmc.FOApp.payload.requests.InstitutionUpdateRequest;
import lt.vtmc.FOApp.payload.responses.InstitutionResponse;
import lt.vtmc.FOApp.services.InstitutionService;

@CrossOrigin
@RestController
@RequestMapping("/api/institutions")
public class InstitutionController {

	private InstitutionService institutionService;
	
	public InstitutionController(InstitutionService institutionService) {
		this.institutionService = institutionService;
	}
	
	@PostMapping
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@ResponseStatus(HttpStatus.CREATED)
	public InstitutionResponse addInstitution(@Valid @RequestBody InstitutionInsertRequest institutionRequest) {
		return this.institutionService.saveInstitution(institutionRequest);
	}
	
	@PutMapping
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@ResponseStatus(HttpStatus.OK)
	public InstitutionResponse updateInstitution(@Valid @RequestBody InstitutionUpdateRequest institutionRequest) {
		return this.institutionService.updateInstitution(institutionRequest);
	}
	
	@GetMapping
	public List<Institution> getAllInstitutions(){
		return this.institutionService.getAllInstitutions();
		
	}
	
}
