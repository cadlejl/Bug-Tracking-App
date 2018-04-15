import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
require('firebase/database');

import { FIREBASE_CONFIG } from '../constant/constants';

@Injectable()

export class FirebaseConfigService {
    // Database refrence property 
    private database: firebase.database.Database;

    constructor() {
        this.configureApp();
        this.configureDatabase();
    }

    configureApp() {
        firebase.initializeApp(FIREBASE_CONFIG);
    }

    configureDatabase() {
        // Set property to reference of database
        this.database = firebase.database();
    }
}