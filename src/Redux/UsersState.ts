import UserModel from "../Models/UserModel";


export class usersState {
    public users: UserModel[] = [];
}


export enum usersActionType {
    usersDownloaded = "usersDownloaded",

}


export interface usersAction {
    type: usersActionType;
    payload?: any;
}


export function usersDownloadedAction(users: UserModel[]): usersAction {
    return { type: usersActionType.usersDownloaded, payload: users };
}


export function usersReducer(currentState: usersState = new usersState(), action: usersAction): usersState {

    const newState = { ...currentState };

    switch (action.type) {

        case usersActionType.usersDownloaded:
            newState.users = action.payload;
            break;

    }

    return newState;

}