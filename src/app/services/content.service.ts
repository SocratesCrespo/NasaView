import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { apodImage } from '../interfaces/apod.interface';
import { MediaResponse } from '../interfaces/media.interface';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor( private http: HttpClient ) { }

  apodImgUrl: string = 'https://api.nasa.gov/planetary/apod?api_key=';
  mediaUrl: string = 'https://images-api.nasa.gov';
  apiKey: string = '5KiI9eXAw2wTpfXM8diW8D9c6CHothL9lovY11Nd';

  imageApod(  ): Observable<apodImage[]>{
    const key: string = this.apiKey;
    const url: string = this.apodImgUrl;

    return this.http.get<apodImage[]>( `${ url }${ key }` );

  }

  media( term: string ): Observable<MediaResponse>{
    const url: string = this.mediaUrl;

    return this.http.get<MediaResponse>(`${ url }/asset/${ term }`);
  }

  mediaSearch( term: string ): Observable<MediaResponse>{
    const url: string = this.mediaUrl;

    return this.http.get<MediaResponse>(`${ url }/search?q=${ term }`);
  }
  
}

