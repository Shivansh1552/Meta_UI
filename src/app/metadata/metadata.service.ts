import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError, map } from "rxjs";

import { IMetadata } from "./metadata";

@Injectable({
  providedIn: 'root'
})
export class MetadataService {
  private metadataUrl = 'api/metadata/metadata.json';

  constructor(private http: HttpClient) { }

  getAllMetadata(): Observable<IMetadata[]> {
    return this.http.get<IMetadata[]>(this.metadataUrl)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
      );
  }

  getMetadatabyId(id: number): Observable<IMetadata | undefined> {
    return this.getAllMetadata()
      .pipe(
        map((metadata: IMetadata[]) => metadata.find(p => p.metadataID === id))
      );
  }

}
