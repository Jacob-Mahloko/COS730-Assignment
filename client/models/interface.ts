

export interface IQuery{
    searchTerm:string
}

export interface IUser {
    id?: string;
    userName: string;
    name: string;
    surname: string;
    phoneNumber: string;
    emailAddress: string;
    password: string;
    gender:number;
    roleNames:string[];
  }
  

export interface ILogin{
    userNameOrEmailAddress: string,
    password: string,
    remember:boolean,
    isLibrarian:boolean
}

export interface ICommentData{
    message?:string;
    rating?:number;
}

export interface IEvent{
    type?:string,
    content?:string,
    dueDate?:string
}

export interface ILoginResponse {
    accessToken: string;
    encryptedAccessToken: string;
    expireInSeconds: number;
  }



export interface IRequest{
  id:string;
  reason:string;
  info:string;
  status:string;
}