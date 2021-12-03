const user = {
    name: 'Fábio',
    lastname: 'Silva'
}

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastname}`
    }
}

const UserWithFullName = getUserWithFullName(user);

console.log(UserWithFullName);