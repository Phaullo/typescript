interface TechObject{
    title: string;
    experience: number;
}
interface CreateUserData{
    name?: string;
    email: string;
    passowrd: string;
    techs: Array<string | TechObject>
}

export default function createUser({ name, email, passowrd }: CreateUserData ){
    const user = {
        name, 
        email, 
        passowrd,
    }

    return user;
}