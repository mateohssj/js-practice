    let phoneAtention = {};
    let personalAtention = {};

let bankAtention = {
    phoneAtention : {
        totalUsers: 0,
        totalStudents: 0,
        totalTeachers: 0
    }
    ,
    personalAtention : {
        totalUsers: 0,
        totalStudents: 0,
        totalTeachers: 0
    }
}

for (let index = 0; index < 2; index++) {
    let user = prompt('Ingrese 1 para atencion telefonica o 2 para atencion personal');
    let userType = prompt('Ingrese 1 si eres docente o 2 si eres estudiante');
    switch (`${user},${userType}`) {
        case "1,1":
            bankAtention.phoneAtention.totalUsers++
            bankAtention.phoneAtention.totalTeachers++
            break;
        case "1,2":
            bankAtention.phoneAtention.totalUsers++
            bankAtention.phoneAtention.totalStudents++
            break;
        case "2,1":
            bankAtention.personalAtention.totalUsers++
            bankAtention.personalAtention.totalTeachers++
            break;
        case "2,2":
            bankAtention.personalAtention.totalUsers++
            bankAtention.personalAtention.totalStudents++
            break;
    
        default:alert('Valor incorrecto ingresado, intente mas tarde');
            break;
    }
}

console.log(`El total de usuarios atendidos de manera telefonica son: ${bankAtention.phoneAtention.totalUsers}`);
console.log(`El total de docentes atendidos de manera telefonica son: ${bankAtention.phoneAtention.totalTeachers}`);
console.log(`El total de estudiantes atendidos de manera telefonica son: ${bankAtention.phoneAtention.totalStudents}`);
console.log(`El total de usuarios atendidos de manera personal son: ${bankAtention.personalAtention.totalUsers}`);
console.log(`El total de docentes atendidos de manera personal son: ${bankAtention.personalAtention.totalTeachers}`);
console.log(`El total de estudiantes atendidos de manera personal son: ${bankAtention.personalAtention.totalStudents}`);

 
