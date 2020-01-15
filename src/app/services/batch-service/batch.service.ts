import { Injectable } from '@angular/core';
import { Batch } from 'src/app/models/batch';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';

@Injectable({
    providedIn: 'root'
})
export class BatchService {

	url: string = environment.batchesUri;
	
	batches: Batch[] = [
		{batchNumber: 1, batchLocation: 'VWU - Morgantown, WV'},
		{batchNumber: 2, batchLocation: 'UTA - Arlington, TX'},
		{batchNumber: 3, batchLocation: 'USF - Tampa, FL'},
		{batchNumber: 4, batchLocation: 'Revature HQ - Reston, VA'},
		{batchNumber: 5, batchLocation: 'CUNY SPS - New York, NY'},
		{batchNumber: 6, batchLocation: 'CUNY Queens College - Flushing, NY'}
	];
	constructor(private http: HttpClient) { }

	getAllBatches() {
		return this.batches;
	}

	getAllBatchesByLocation(location: string) {
		return this.http.get<Batch>(`${this.url}?location=${location}`);
	}
}
