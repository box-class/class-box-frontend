// 1. compare individual grades to a 4.0 scale

// A+	97-100	4.0
// A	93-96	4.0
// A-	90-92	3.7
// B+	87-89	3.3
// B	83-86	3.0
// B-	80-82	2.7
// C+	77-79	2.3
// C	73-76	2.0
// C-	70-72	1.7
// D+	67-69	1.3
// D	65-66	1.0
// F	>65	    0.0

const gradeTranslation = (grade) => {
    if( grade >= 93 && grade <= 100 ) {
        return 4.0
    }
    if( grade <= 92 &&  grade >= 90) {
        return 3.7
    }
    if( grade <= 89 && grade >= 87) {
        return 3.3
    }
    if( grade <= 86 && grade >= 83 ) {
        return 3.0
    }
    if( grade <= 82 && grade >= 80 ) {
        return 2.7
    }
    if( grade <= 79 && grade >= 77 ) {
        return 2.3
    }
    if( grade <= 76 && grade >= 73 ) {
        return 2.0
    }
    if( grade <= 72 && grade >= 70 ) {
        return 1.7
    }
    if( grade <= 69 && grade >= 67 ) {
        return 1.3
    }
    if(grade <= 66 && grade >= 65) {
        return 1.0
    }
    if(grade < 65) {
        return 0
    }
};

// 2. Weight the grades... AP courses get an extra point so if grade is 4.0 it would turn into 5.0
// 3. multiply your grade (converted) by the number of credits the course is worth
// EXAMPLE
// 5.0 x 3 credits + 4.7 x 3 credits + 4.0 x 2 credits + 3.3 x 1 credit + 4.3 x 3 credits =
// 15 + 14.1 + 8 + 3.3 + 12.9 =
// 53.3
const getWeight = (wght, credits) => {
    const total = wght * credits;
    return Math.round( total * 10 ) / 10;
}

// add all the credits/grades up; takes in an array of credits/or grades (numbers)
const addFromTheArray = (arr) => {
    let total = 0;
    arr.forEach(i => {
        total = total + i
    });
    return total;
}



// 4. Divide by total number of credits
const finalGpa = (wght, credits) => {
    const total = wght / credits;
    return Math.round( total * 10 ) / 10;
}

console.log(finalGpa(53.3, 12))