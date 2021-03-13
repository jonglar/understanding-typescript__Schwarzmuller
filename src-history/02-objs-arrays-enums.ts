// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
// } = {
//     name: 'Maximillian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking']
// }

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role_tuple: [number, string]; // tuple type
// } = {
//     name: 'Maximillian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role_tuple: [2, 'author']
// }

// person.role_tuple.push('admin'); // push() is the exeption, it was not checkd from ts
// person.role_tuple[3] = 10;

// enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Maximillian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

let favouriteActivities: any[];
favouriteActivities = ['Sports', 5, true];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());    //  !!! ERROR !!!
}

if (person.role === Role.ADMIN) {
    console.log('is admin');
}