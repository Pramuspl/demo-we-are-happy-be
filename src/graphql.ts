
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Roles {
    EMPLOYEE = "EMPLOYEE",
    MANAGER = "MANAGER"
}

export enum Moods {
    BAD = "BAD",
    NEUTRAL = "NEUTRAL",
    GOOD = "GOOD"
}

export class Auth {
    __typename?: 'Auth';
    access_token: string;
}

export class User {
    __typename?: 'User';
    _id: string;
    username: string;
    role: Roles;
}

export abstract class IMutation {
    __typename?: 'IMutation';

    abstract login(username: string, password: string): Auth | Promise<Auth>;

    abstract register(username: string, password: string, role?: Roles): User | Promise<User>;

    abstract addEntry(date: string, value: Moods): Entry | Promise<Entry>;
}

export class Entry {
    __typename?: 'Entry';
    _id: string;
    date: string;
    value: Moods;
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract getEntry(entryID: string): Entry | Promise<Entry>;

    abstract getAllEntries(): Entry[] | Promise<Entry[]>;
}
