export interface IBook{
    _id: number,
    Author: string,
    Genre: string,
    Title: string,
    Description?: string,
    PublicationDate: number| string,
    quantity?:number,
     authorEmail?:string

}