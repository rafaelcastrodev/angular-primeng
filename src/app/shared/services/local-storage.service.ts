import { Injectable } from '@angular/core';

/**MODELS */
import { APP_CONSTANTS } from '@core/constants/app.constants';
export enum LocalStorageTypes {
    LOCAL = 'local',
    SESSION = 'session',
}

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    /**
     * Get the storage facility
     * @param storageType {LocalStorageTypes}
     * @private
     * @returns {localStorage|sessionStorage}
     */
    private static _getStorage(storageType?: LocalStorageTypes) {
        const storage = storageType ? storageType : LocalStorageTypes.LOCAL;
        return storage === LocalStorageTypes.LOCAL
            ? localStorage
            : sessionStorage;
    }

    /**
     * Get a localStorage or sessionStorage item value
     * @param storageType {'local'|'session'}
     * @param key {string}
     */
    static getItem(key: string, storageType?: LocalStorageTypes) {
        const storage = LocalStorageService._getStorage(storageType);
        const val = storage.getItem(`${APP_CONSTANTS.APP_PREFIX}:${key}`) || '';

        try {
            return JSON.parse(val);
        } catch (e) {
            return val;
        }
    }

    /**
     * Set a localStorage or sessionStorage item value
     * @param storageType {LocalStorageTypes}
     * @param key {string}
     * @param value {any}
     */
    static setItem(key: string, value: any, storageType?: LocalStorageTypes) {
        const storage = LocalStorageService._getStorage(storageType);
        const val = typeof value === 'string' ? value : JSON.stringify(value);
        storage.setItem(`${APP_CONSTANTS.APP_PREFIX}:${key}`, val);
    }

    /**
     * Remove an item from localStorage or sessionStorage
     * @param storageType {LocalStorageTypes}
     * @param key {string}
     */
    static removeItem(key: string, storageType?: LocalStorageTypes) {
        const storage = LocalStorageService._getStorage(storageType);
        storage.removeItem(`${APP_CONSTANTS.APP_PREFIX}:${key}`);
    }
}
