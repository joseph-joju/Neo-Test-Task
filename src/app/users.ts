import { EmailValidator } from "@angular/forms";

export const USERS_LIMIT = 6;

export interface Users {
age: number;
avatarUrl: string;
bio: string;
color: string;
createdAt: any;
email: EmailValidator;
id: number;
isPublic: boolean;
name: string;
statusMessage: string;
}
