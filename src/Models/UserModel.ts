class UserModel {

    public login: {
        username: string
    };
    public name: {
        first: string,
        last: string
    };
    public gender: string;
    public email: string;
    public dob: {
        age: number
    }
    public picture: {
        thumbnail: string,
        large: string
    }
    public location: {
        street: {
            number: number,
            name: string
        },
        country: string,
        state: string,
        city: string,
        coordinates: {
            latitude: number,
            longitude: number
        }
    }
}

export default UserModel;