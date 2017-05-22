/**
 * Created by ramkumar on 18/5/17.
 */
import { Injectable } from '@angular/core';
import {Hero} from './hero';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()

export class HeroService {
    private heroesUrl = 'http://test.prod.com/app_dev.php/api/user';
    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
            return this.http
                .get(this.heroesUrl)
                .map((response) => {
                    return response.json();
                })
                .toPromise();
    }
    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http
            .get(url)
            .map((response) => {
                return response.json();
            })
            .toPromise();
    }
}