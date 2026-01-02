import { HTTPError } from "nitro/h3"

export class CustomError extends Error {
  
  statusCode: number
  
  constructor(message: string , statusCode: number){
    super(message)
    
    this.statusCode = statusCode
  }
  
  static httpError(message: string , statusCode: number){
    return new HTTPError({
      message: message,
      status: statusCode,
      data: { success: false , message: message }
    })
  }
}