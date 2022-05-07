interface AuthenticationResquestDto {
    name: string,
    password: string;
}

interface AuthenticationResponseDto {
    user: {
        id: string,
        name: string;
    },
    token: string;
}


export { AuthenticationResquestDto, AuthenticationResponseDto };
