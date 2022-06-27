import { EmailValidator } from "@angular/forms";

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
