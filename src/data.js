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
        gpa: "3.4",
        currentCourses: [
            {
                shortName: "AGEC 101",
                name: "The Business of Agriculture",
                credits: 1,
                time: "",
                days: "",
                grade: "84"
            },
            {
                shortName: "COMM 101",
                name: "Public Speaking",
                credits: 2,
                time: "",
                days: "",
                grade: "94"
            },
            {
                shortName: "ISEM 101",
                name: "Integrated Seminar",
                credits: 3,
                time: "",
                days: "",
                grade: "87"
            },
            {
                shortName: "ENGL 101",
                name: "Introduction to College Writing",
                credits: 3,
                time: "",
                days: "",
                grade: "97"
            },
            {
                shortName: "ASTR 101",
                name: "Introduction to Astronomy",
                credits: 3,
                time: "",
                days: "",
                grade: "95"
            },
            {
                shortName: "Math 143",
                name: "Pre-Calculus and Analytic Geometry",
                credits: 3,
                time: "",
                days: "",
                grade: "81"
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
                prereq: []
            },
            {
                courseId: "12354",
                shortName: "COMM 101",
                name: "Public Speaking",
                credits: 2,
                time: "9:00AM - 9:50AM",
                days: "TTH",
                prereq: []
            },
            {
                courseId: "12355",
                shortName: "ISEM 101",
                name: "Integrated Seminar",
                credits: 3,
                time: "8:00AM - 8:50AM",
                days: "MWF",
                prereq: []
            },
            {
                courseId: "12356",
                shortName: "ENGL 101",
                name: "Introduction to College Writing",
                credits: 3,
                time: "10:00AM - 10:50AM",
                days: "MWF",
                prereq: []
            },
            {
                courseId: "12357",
                shortName: "Math 143",
                name: "Pre-Calculus and Analytic Geometry",
                credits: 3,
                time: "12:30PM - 1:20PM",
                days: "MWF",
                prereq: []
            },
            {
                courseId: "12358",
                shortName: "ACCT 201",
                name: "Introduction to Finiancial Accounting",
                credits: 3,
                time: "1:30PM - 2:30PM",
                days: "MWF",
                prereq: []
            },
            {
                courseId: "12359",
                shortName: "BIOL 102/102L",
                name: "Biology and Society",
                credits: 4,
                time: "8:00AM - 9:50AM",
                days: "MWF",
                prereq: []
            },
            {
                courseId: "12360",
                shortName: "BIOL 115/115L",
                name: "Cells and the Evolution of Life",
                credits: 4,
                time: "8:00AM - 9:50AM",
                days: "MWF",
                prereq: []
            },
            {
                courseId: "12361",
                shortName: "ECON 201",
                name: "Principles of Macroeconomics",
                credits: 3,
                time: "10:30AM - 11:50AM",
                days: "MWF",
                prereq: []
            },
            {
                courseId: "12362",
                shortName: "ECON 201",
                name: "Principles of Macroeconomics",
                credits: 3,
                time: "10:30AM - 11:50AM",
                days: "MWF",
                prereq: []
            },
            {
                courseId: "12363",
                shortName: "AGEC 278 (F)",
                name: "Farm & Agribusiness Management",
                credits: 4,
                time: "1:20PM - 3:10PM",
                days: "MWF",
                prereq: []
            },
            {
                courseId: "12364",
                shortName: "AGEC 302",
                name: "Managerial Economics: Consumption and Markets",
                credits: 3,
                time: "1:20PM - 3:10PM",
                days: "MWF",
                prereq: ["MATH 143", "ECON 202"]
            },
            {
                courseId: "12365",
                shortName: "AGEC 356",
                name: "Agricultural and Rural Policy",
                credits: 3,
                time: "3:30PM - 4:50PM",
                days: "MWF",
                prereq: []
            },
            {
                courseId: "12366",
                shortName: "ENGL 313",
                name: "Business Writing",
                credits: 3,
                time: "8:00AM - 9:20AM",
                days: "TTH",
                prereq: []
            },
            {
                courseId: "12367",
                shortName: "ENGL 317",
                name: "Technical Writing",
                credits: 3,
                time: "8:00AM - 9:20AM",
                days: "TTH",
                prereq: []
            },
            {
                courseId: "12369",
                shortName: "AGEC 481",
                name: "Agricultural Markets in a Global Economy",
                credits: 3,
                time: "9:50AM - 11:30AM",
                days: "TTH",
                prereq: []
            },
            {
                courseId: "12370",
                shortName: "ECON 202",
                name: "Principles of Microeconomics",
                credits: 3,
                time: "8:00AM - 9:30AM",
                days: "MWF",
                prereq: []
            },
            {
                courseId: "12371",
                shortName: "ENGL 102",
                name: "College Writing and Rhetoric",
                credits: 3,
                time: "9:50AM - 11:30AM",
                days: "MWF",
                prereq: []
            },
            {
                courseId: "12372",
                shortName: "ACCT 202",
                name: "Introduction to Managerial Accounting",
                credits: 3,
                time: "1:20PM - 2:30PM",
                days: "MWF",
                prereq: ["ACCT 201"]
            },
            {
                courseId: "12373",
                shortName: "AGEC 289 (S)",
                name: "Agricultural Markets and Prices",
                credits: 3,
                time: "3:00PM - 4:20PM",
                days: "MWF",
                prereq: []
            },
            {
                courseId: "12374",
                shortName: "STAT 251",
                name: "Statistical Methods",
                credits: 3,
                time: "4:30PM - 5:20PM",
                days: "MWF",
                prereq: ["MATH 108, 143, 160 or 170"]
            },
            {
                courseId: "12375",
                shortName: "AGEC 301",
                name: "Managerial Economics: Production",
                credits: 3,
                time: "8:00AM - 9:20AM",
                days: "TTH",
                prereq: ["ECON 202", "MATH 143"]
            },
            {
                courseId: "12376",
                shortName: "MKTG 321",
                name: "Marketing",
                credits: 3,
                time: "9:50AM - 11:30AM",
                days: "TTH",
                prereq: []
            },
            {
                courseId: "12377",
                shortName: "MHR 413",
                name: "Organizational Behavior",
                credits: 3,
                time: "1:00PM - 1:50PM",
                days: "TTH",
                prereq: []
            },
            {
                courseId: "12378",
                shortName: "BLAW 265",
                name: "Legal Environments of Business",
                credits: 3,
                time: "2:00PM - 2:50PM",
                days: "TTH",
                prereq: []
            },
            {
                courseId: "12379",
                shortName: "AGEC 333",
                name: "Introduction to Sales",
                credits: 3,
                time: "8:00AM - 9:20AM",
                days: "MWF",
                prereq: []
            },
            {
                courseId: "12380",
                shortName: "AGEC 451 (S)",
                name: "Applied Env. & Nat. Resources Economics",
                credits: 3,
                time: "9:50AM - 11:30AM",
                days: "MWF",
                prereq: []
            },
            {
                courseId: "12381",
                shortName: "ISEM 301",
                name: "Integrated Seminar",
                credits: 1,
                time: "1:00PM - 1:50PM",
                days: "TTH",
                prereq: ["ENGL 102"]
            },
            {
                courseId: "12382",
                shortName: "AGEC 478",
                name: "Advanced Agribusiness Management",
                credits: 3,
                time: "2:00PM - 2:50PM",
                days: "MWF",
                prereq: ["AGEC 301", "AGEC 302", "ACCT 201", "ACCT 202"]
            },
            {
                courseId: "12383",
                shortName: "ACCT 482 ",
                name: "Enterprise Accounting",
                credits: 3,
                time: "3:00PM - 3:50PM",
                days: "MWF",
                prereq: []
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
                prereq: []
            },
            {
                courseId: "12355",
                shortName: "ISEM 101",
                name: "Integrated Seminar",
                credits: 3,
                time: "9:50AM - 11:30AM",
                days: "MWF",
                prereq: []
            },
            {
                courseId: "12356",
                shortName: "ENGL 101",
                name: "Introduction to College Writing",
                credits: 3,
                time: "1:00PM - 1:50PM",
                days: "MWF",
                prereq: []
            },
            {
                courseId: "12357",
                shortName: "Math 143",
                name: "Pre-Calculus and Analytic Geometry",
                credits: 3,
                time: "2:00PM - 2:50PM",
                days: "MWF",
                prereq: []
            },
        ]
    }
    ]