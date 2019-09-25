
export const pLevel = {
    admin: 1,
    teacher: 2,
    student: 3
}

export const userData = {
        studentId: "AB00001",
        firstName: "John",
        lastName: "Doe",
        dob: "01/01/1985",
        address: "123 Abc Lane. Idaho, 12345",
        schoolName: "University Of Idaho",
        major: "Agribusiness",
        startYear: "2017",
        projectedED: "2021",
        gpa: 3.4,
        gpaLastLogin: 3.2,
        currentCourses: [
            {
                courseId: "12353",
                shortName: "AGEC 101",
                name: "The Business of Agriculture",
                credits: 1,
                time: "8:00AM - 8:50AM",
                days: "T",
                grade: "84",
                feed: [
                    {
                        title: 'The History of Corn',
                        postedDate: '08/14/2019',
                        required: true,
                        thumbnail: 'https://www.shutterstock.com/image-photo/beautiful-morning-sunrise-over-corn-field-613739555'
                    }
                ]
            },
            {
                courseId: "12354",
                shortName: "COMM 101",
                name: "Public Speaking",
                credits: 2,
                time: "9:00AM - 9:50AM",
                days: "TTH",
                grade: "94",
                feed: []
            },
            {
                courseId: "12355",
                shortName: "ISEM 101",
                name: "Integrated Seminar",
                credits: 3,
                time: "8:00AM - 8:50AM",
                days: "MWF",
                grade: "87",
                feed: []
            },
            {
                courseId: "12356",
                shortName: "ENGL 101",
                name: "Introduction to College Writing",
                credits: 3,
                time: "10:00AM - 10:50AM",
                days: "MWF",
                grade: "97",
                feed: []
            },
            {
                courseId: '11352',
                shortName: "ASTR 101",
                name: "Introduction to Astronomy",
                credits: 3,
                time: "1:30PM - 2:50PM",
                days: "MWF",
                grade: "95",
                feed: []
            },
            {
                courseId: "12357",
                shortName: "Math 143",
                name: "Pre-Calculus and Analytic Geometry",
                credits: 3,
                time: "12:30PM - 1:20PM",
                days: "MWF",
                grade: "81",
                feed: []
            }
        ],
        attemptedCourses: [],
        schedule: [
            {
                id: 1,
                task: 'AGEC 101',
                days: [2],
                repeats: true,
                time: "8:00AM - 8:50AM",
                startDate: new Date('09/17/2019'),
                endDate: new Date('12/17/2019'),
                dates: []
            },
            {
                id: 2,
                task: 'COMM 101',
                days: [2, 4],
                repeats: true,
                time: "9:00AM - 9:50AM",
                startDate: new Date('09/17/2019'),
                endDate: new Date('12/17/2019'),
                dates: []
            },
            {
                id: 3,
                task: 'ISEM 101',
                days: [1, 3, 5],
                repeats: true,
                time: "8:00AM - 8:50AM",
                startDate: new Date('09/16/2019'),
                endDate: new Date('12/20/2019'),
                dates: []
            },
            {
                id: 4,
                task: 'ENGL 101',
                days: [1, 3, 5],
                repeats: true,
                time: "10:00AM - 10:50AM",
                startDate: new Date('09/16/2019'),
                endDate: new Date('12/20/2019'),
                dates: []
            }
        ]
    }


export const courseData =
    [
        {
        major: "Agribusiness",
        approvedCourses: [
            {
                courseId: "12353",
                shortName: "AGEC 101",
                name: "The Business of Agriculture",
                credits: 1,
                time: "8:00AM - 8:50AM",
                days: "T",
                prereq: [],
                feed: [
                    {
                        id: '1234',
                        title: 'The History of Corn',
                        postedDate: '08/14/2019',
                        required: true,
                        thumbnail: 'https://picsum.photos/150',
                        article: 'https://www.nytimes.com/2010/05/25/science/25creature.html',
                        assignmentDesc: 'Read the article and write a brief 3 paragraph summary',
                        dueDate: '08/20/19'
                    },
                    {
                        id: '1235',
                        title: 'Food and Nutrition in the Aftermath of Nuclear War',
                        postedDate: '08/14/2019',
                        required: true,
                        thumbnail: 'https://picsum.photos/150',
                        article: 'https://www.ncbi.nlm.nih.gov/books/NBK219173/',
                        assignmentDesc: 'Read the article and write a brief 3 paragraph summary',
                        dueDate: '08/20/19'
                    }
                ],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12354",
                shortName: "COMM 101",
                name: "Public Speaking",
                credits: 2,
                time: "9:00AM - 9:50AM",
                days: "TTH",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12355",
                shortName: "ISEM 101",
                name: "Integrated Seminar",
                credits: 3,
                time: "8:00AM - 8:50AM",
                days: "MWF",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12356",
                shortName: "ENGL 101",
                name: "Introduction to College Writing",
                credits: 3,
                time: "10:00AM - 10:50AM",
                days: "MWF",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12357",
                shortName: "Math 143",
                name: "Pre-Calculus and Analytic Geometry",
                credits: 3,
                time: "12:30PM - 1:20PM",
                days: "MWF",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12358",
                shortName: "ACCT 201",
                name: "Introduction to Finiancial Accounting",
                credits: 3,
                time: "1:30PM - 2:30PM",
                days: "MWF",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12359",
                shortName: "BIOL 102/102L",
                name: "Biology and Society",
                credits: 4,
                time: "8:00AM - 9:50AM",
                days: "MWF",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12360",
                shortName: "BIOL 115/115L",
                name: "Cells and the Evolution of Life",
                credits: 4,
                time: "8:00AM - 9:50AM",
                days: "MWF",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12361",
                shortName: "ECON 201",
                name: "Principles of Macroeconomics",
                credits: 3,
                time: "10:30AM - 11:50AM",
                days: "MWF",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12362",
                shortName: "ECON 201",
                name: "Principles of Macroeconomics",
                credits: 3,
                time: "10:30AM - 11:50AM",
                days: "MWF",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12363",
                shortName: "AGEC 278 (F)",
                name: "Farm & Agribusiness Management",
                credits: 4,
                time: "1:20PM - 3:10PM",
                days: "MWF",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12364",
                shortName: "AGEC 302",
                name: "Managerial Economics: Consumption and Markets",
                credits: 3,
                time: "1:20PM - 3:10PM",
                days: "MWF",
                prereq: ["MATH 143", "ECON 202"],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12365",
                shortName: "AGEC 356",
                name: "Agricultural and Rural Policy",
                credits: 3,
                time: "3:30PM - 4:50PM",
                days: "MWF",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12366",
                shortName: "ENGL 313",
                name: "Business Writing",
                credits: 3,
                time: "8:00AM - 9:20AM",
                days: "TTH",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12367",
                shortName: "ENGL 317",
                name: "Technical Writing",
                credits: 3,
                time: "8:00AM - 9:20AM",
                days: "TTH",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12369",
                shortName: "AGEC 481",
                name: "Agricultural Markets in a Global Economy",
                credits: 3,
                time: "9:50AM - 11:30AM",
                days: "TTH",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12370",
                shortName: "ECON 202",
                name: "Principles of Microeconomics",
                credits: 3,
                time: "8:00AM - 9:30AM",
                days: "MWF",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12371",
                shortName: "ENGL 102",
                name: "College Writing and Rhetoric",
                credits: 3,
                time: "9:50AM - 11:30AM",
                days: "MWF",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12372",
                shortName: "ACCT 202",
                name: "Introduction to Managerial Accounting",
                credits: 3,
                time: "1:20PM - 2:30PM",
                days: "MWF",
                prereq: ["ACCT 201"],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12373",
                shortName: "AGEC 289 (S)",
                name: "Agricultural Markets and Prices",
                credits: 3,
                time: "3:00PM - 4:20PM",
                days: "MWF",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12374",
                shortName: "STAT 251",
                name: "Statistical Methods",
                credits: 3,
                time: "4:30PM - 5:20PM",
                days: "MWF",
                prereq: ["MATH 108, 143, 160 or 170"],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12375",
                shortName: "AGEC 301",
                name: "Managerial Economics: Production",
                credits: 3,
                time: "8:00AM - 9:20AM",
                days: "TTH",
                prereq: ["ECON 202", "MATH 143"],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12376",
                shortName: "MKTG 321",
                name: "Marketing",
                credits: 3,
                time: "9:50AM - 11:30AM",
                days: "TTH",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12377",
                shortName: "MHR 413",
                name: "Organizational Behavior",
                credits: 3,
                time: "1:00PM - 1:50PM",
                days: "TTH",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12378",
                shortName: "BLAW 265",
                name: "Legal Environments of Business",
                credits: 3,
                time: "2:00PM - 2:50PM",
                days: "TTH",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12379",
                shortName: "AGEC 333",
                name: "Introduction to Sales",
                credits: 3,
                time: "8:00AM - 9:20AM",
                days: "MWF",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12380",
                shortName: "AGEC 451 (S)",
                name: "Applied Env. & Nat. Resources Economics",
                credits: 3,
                time: "9:50AM - 11:30AM",
                days: "MWF",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12381",
                shortName: "ISEM 301",
                name: "Integrated Seminar",
                credits: 1,
                time: "1:00PM - 1:50PM",
                days: "TTH",
                prereq: ["ENGL 102"],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12382",
                shortName: "AGEC 478",
                name: "Advanced Agribusiness Management",
                credits: 3,
                time: "2:00PM - 2:50PM",
                days: "MWF",
                prereq: ["AGEC 301", "AGEC 302", "ACCT 201", "ACCT 202"],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12383",
                shortName: "ACCT 482 ",
                name: "Enterprise Accounting",
                credits: 3,
                time: "3:00PM - 3:50PM",
                days: "MWF",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            }
        ],
    },
    {
        major: "Computer Science",
        approvedCourses: [
            {
                courseId: "12354",
                shortName: "COMM 101",
                name: "Public Speaking",
                credits: 2,
                time: "8:00AM - 9:20AM",
                days: "TTH",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12355",
                shortName: "ISEM 101",
                name: "Integrated Seminar",
                credits: 3,
                time: "9:50AM - 11:30AM",
                days: "MWF",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12356",
                shortName: "ENGL 101",
                name: "Introduction to College Writing",
                credits: 3,
                time: "1:00PM - 1:50PM",
                days: "MWF",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
            {
                courseId: "12357",
                shortName: "Math 143",
                name: "Pre-Calculus and Analytic Geometry",
                credits: 3,
                time: "2:00PM - 2:50PM",
                days: "MWF",
                prereq: [],
                feed: [],
                teacher: {
                    name: 'Luke Skywalker',
                    officeHours: {
                        days: 'MWF',
                        time: '5:30PM - 6:00PM'
                    },
                    email: 'Luke.Skywalker@school.com',
                    officePhone: '111-111-1111'
                }
            },
        ]
    }
    ]

export const admins = [
    {
        userId: 'AD1111',
        firstName: 'John',
        lastName: 'Smith',
        email: 'John.Smith@TXU.edu',
        pLevel: pLevel.admin,
        department: {
            id: 1,
            deptHead: 'AD1111',
            teachers: [],
            classes: []
        },
        employees: [],
        requests: [],
        schedule: []
    }
]

export const teachers = [
    {
        userId: 'TR1111',
        firstName: 'Elizabeth',
        lastName: 'Hutch',
        email: 'Elizabeth.Hutch@TXU.edu',
        pLevel: pLevel.teacher,
        department: {
            id: 1,
            deptHead: 'AD1111',
            teachers: [],
            classes: []
        },
        classes: [],
        schedule: []
    }
]

