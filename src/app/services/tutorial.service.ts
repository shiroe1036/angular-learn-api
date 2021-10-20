import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const baseUrl = 'http://localhost:8000';

@Injectable({
    providedIn: 'root'
})

export class TutorialService{
    constructor(private http:HttpClient){}

    getAll(): Observable<any> {
        return this.http.get(`${baseUrl}/tutorial`);
    }

    getOne(idTutorial: number): Observable<any> {
        return this.http.get(`${baseUrl}/tutorial/${idTutorial}`);
    }

    create(data: any): Observable<any> {
        return this.http.post(`${baseUrl}/tutorial`, data);
    }

    update(idTutorial: any, data: any): Observable<any> {
        return this.http.put(`${baseUrl}/tutorial/${idTutorial}`, data);
    }

    delete(idTutorial: any): Observable<any> {
        return this.http.delete(`${baseUrl}/tutorial/${idTutorial}`);
    }
}