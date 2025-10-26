// Object Destructuring - used for destructuring(or falling apart) an object

const student = () => {
    return {
    'name': 'John Williamson',
    'age': 9,
    'std': 3,
    'subjects': ['Maths', 'English', 'EVS'],
    'parents': {
        'father': 'John Williamson',
        'mother': 'sophia',
        'email': 'john-parents@abcde.com'
    },
    'address': {
        'street': '65/2, brooklyn road',
        'city': 'Carterton',
        'country': 'New Zealand',
        'zip': 5791
    }
    }
}

const {name, age, meal = "bread"} = student;
console.log(name, age, meal); // John Williamson , 9, bread

const {subjects, numberOfSubjects = subjects.length} = student;
console.log(numberOfSubjects); // 3


//Early access

const {std: standard} = student;
console.log(standard); // 3
console.log(std); // ReferenceError

// For nested
const {address: {zip}} = student;
console.log(zip); // 5791


// sendEmail()

/*
function sendEmail() {
    console.log(`sent an email to ${student.parents.email}`)
}
*/

function sendEmail({address: {email}}) {
    console.log(`sent an email to ${email}`)
}

sendEmail(student); // sent an email to john-parents@abcde.com


const {name: anotherName, subjects: anotherSubject} = student;
console.log(anotherName, anotherName); //  The name and subject

const students = [
    {
        'name': 'William',
        'grade': 'A'
    },
    {
        'name': 'Tom',
        'grade': 'A+'
    },
    {
        'name': 'Bob',
        'grade': 'B'
    }
]

// for...of

for (let {name, grade} of students) {
    console.log(name, grade) // William A, Tom A+, Bob B.
}



// Optional chaining is a JavaScript feature that allows you to safely access deeply nested 
// object properties without throwing an error if any part of the chain is null or undefined.

// syntax ?.

const employee = {
    salary: {
        bonus: 300
    }
};

console.log(employee.department) // undefined

//console.log(employee.department.names); // Error

const names = employee.department?.names
console.log(name); // undefined