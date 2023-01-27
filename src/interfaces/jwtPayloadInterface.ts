// import { Role } from "@prisma/client";

export interface IJwtPayload {
  userId: number;
  email: string;
  //   role: Role;
  iat: number;
  exp: number;
}

export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  token: string;
}

export interface IProfile {
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  ip: string
  deviceInfo: string
  deviceId: string
  profile: {
    bio: string,
  }
}


/* 
 "id": 27,
        "email": "user@mail.com",
        "token": "$2a$10$gnEob3WeZX5ejOt9dVmjZ.ixbwb7DyZnUDp5O/jezMsD062CEQg1m",
        "createdAt": "2023-01-27T09:08:13.178Z",
        "firstName": "test",
        "lastName": "test",
        "ip": "::1",
        "deviceInfo": null,
        "deviceId": null */