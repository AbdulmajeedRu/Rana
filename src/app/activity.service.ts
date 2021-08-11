import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from './types';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private _httpClient: HttpClient) { }

  getActivity(sourceName: string):Observable<Activity>{
    return this._httpClient.get<Activity>(API + "sources?access_key=d21366f36ddd1d81baf8cb7cd7a82a9f&search=" + sourceName);

  }

  getAllActivities(): Observable<Activity[]>{
    return this._httpClient.get<Activity[]>(API + "news?access_key=d21366f36ddd1d81baf8cb7cd7a82a9f");
  }
}

const API = "http://api.mediastack.com/v1/"