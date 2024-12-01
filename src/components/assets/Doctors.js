let doctors = [
    {
      id: 1,
      name: "Dr. John Smith",
      age: 45,
      gender: "Male",
      specialization: "Orthopedics",
      experience: "20 years",
      contactNumber: "+1234567890",
      email: "johnsmith@hospital.com",
      hospital: "Orthopedic Recovery Center",
      patientsAssigned: [10, 5],
      workingHours: "9 AM - 5 PM",
      notes: "Expert in arthritis management and post-surgical care."
    },
    {
      id: 2,
      name: "Dr. Emma Brown",
      age: 38,
      gender: "Female",
      specialization: "Psychiatry",
      experience: "12 years",
      contactNumber: "+1987654321",
      email: "emmabrown@hospital.com",
      hospital: "RehabCare Center",
      patientsAssigned: [3, 6],
      workingHours: "10 AM - 6 PM",
      notes: "Focuses on mental health therapy and group sessions."
    },
    {
      id: 3,
      name: "Dr. Ahmed Malik",
      age: 50,
      gender: "Male",
      specialization: "Addiction Recovery",
      experience: "25 years",
      contactNumber: "+447987654321",
      email: "ahmedmalik@hospital.com",
      hospital: "Pathways Recovery Center",
      patientsAssigned: [2, 5],
      workingHours: "8 AM - 4 PM",
      notes: "Specialist in drug and alcohol addiction recovery programs."
    },
    {
      id: 4,
      name: "Dr. Olivia Davis",
      age: 42,
      gender: "Female",
      specialization: "Cardiology",
      experience: "18 years",
      contactNumber: "+11234567890",
      email: "oliviadavis@hospital.com",
      hospital: "CMH",
      patientsAssigned: [1],
      workingHours: "9 AM - 3 PM",
      notes: "Handles hypertension and other heart-related conditions."
    },
    {
      id: 5,
      name: "Dr. Michael Wilson",
      age: 40,
      gender: "Male",
      specialization: "Neurology",
      experience: "15 years",
      contactNumber: "+1435678901",
      email: "michaelwilson@hospital.com",
      hospital: "Brain Health Institute",
      patientsAssigned: [8, 7],
      workingHours: "10 AM - 4 PM",
      notes: "Specializes in treating neurological disorders and brain injuries."
    },
    {
      id: 6,
      name: "Dr. Sarah Taylor",
      age: 33,
      gender: "Female",
      specialization: "Dermatology",
      experience: "10 years",
      contactNumber: "+1998765432",
      email: "sarahtaylor@hospital.com",
      hospital: "Skin Care Clinic",
      patientsAssigned: [9],
      workingHours: "9 AM - 3 PM",
      notes: "Treats a wide variety of skin conditions, including eczema and acne."
    },
    {
      id: 7,
      name: "Dr. Robert Clark",
      age: 60,
      gender: "Male",
      specialization: "Geriatrics",
      experience: "35 years",
      contactNumber: "+1209876543",
      email: "robertclark@hospital.com",
      hospital: "ElderCare Hospital",
      patientsAssigned: [4, 3],
      workingHours: "8 AM - 2 PM",
      notes: "Specialist in elderly care, focusing on mobility and cognitive decline."
    },
    {
      id: 8,
      name: "Dr. Natalie Harris",
      age: 48,
      gender: "Female",
      specialization: "Rheumatology",
      experience: "22 years",
      contactNumber: "+1345678901",
      email: "natalieharris@hospital.com",
      hospital: "Rheumatology Center",
      patientsAssigned: [6],
      workingHours: "10 AM - 5 PM",
      notes: "Expert in treating autoimmune disorders and joint pain."
    },
    {
      id: 9,
      name: "Dr. David Lee",
      age: 55,
      gender: "Male",
      specialization: "Pediatrics",
      experience: "25 years",
      contactNumber: "+1456789012",
      email: "davidlee@hospital.com",
      hospital: "Children's Health Center",
      patientsAssigned: [5],
      workingHours: "9 AM - 1 PM",
      notes: "Provides medical care to children with chronic conditions."
    },
    {
      id: 10,
      name: "Dr. Jennifer King",
      age: 38,
      gender: "Female",
      specialization: "Oncology",
      experience: "16 years",
      contactNumber: "+1987654321",
      email: "jenniferking@hospital.com",
      hospital: "Cancer Care Center",
      patientsAssigned: [1],
      workingHours: "10 AM - 4 PM",
      notes: "Specializes in cancer treatment, chemotherapy, and patient support."
    },
    {
      id: 11,
      name: "Dr. Laura White",
      age: 43,
      gender: "Female",
      specialization: "Gastroenterology",
      experience: "18 years",
      contactNumber: "+1123456789",
      email: "laurawhite@hospital.com",
      hospital: "Digestive Health Center",
      patientsAssigned: [7, 4],
      workingHours: "9 AM - 5 PM",
      notes: "Expert in digestive system diseases and disorders."
    },
    {
      id: 12,
      name: "Dr. Peter Robinson",
      age: 60,
      gender: "Male",
      specialization: "Pulmonology",
      experience: "30 years",
      contactNumber: "+1234567891",
      email: "peterrobinson@hospital.com",
      hospital: "Pulmonary Health Center",
      patientsAssigned: [8, 10],
      workingHours: "9 AM - 3 PM",
      notes: "Treats respiratory conditions, including asthma and pneumonia."
    },
    {
      id: 13,
      name: "Dr. William Adams",
      age: 46,
      gender: "Male",
      specialization: "Endocrinology",
      experience: "20 years",
      contactNumber: "+1234678902",
      email: "williamadams@hospital.com",
      hospital: "Hormone Health Clinic",
      patientsAssigned: [9],
      workingHours: "8 AM - 2 PM",
      notes: "Specializes in diabetes, thyroid, and other hormone-related issues."
    },
    {
      id: 14,
      name: "Dr. Rebecca Scott",
      age: 32,
      gender: "Female",
      specialization: "Plastic Surgery",
      experience: "8 years",
      contactNumber: "+1897654321",
      email: "rebeccascott@hospital.com",
      hospital: "Cosmetic Surgery Center",
      patientsAssigned: [2, 7],
      workingHours: "10 AM - 6 PM",
      notes: "Performs reconstructive and cosmetic surgeries."
    },
    {
      id: 15,
      name: "Dr. Steven Mitchell",
      age: 50,
      gender: "Male",
      specialization: "Infectious Diseases",
      experience: "28 years",
      contactNumber: "+1212345678",
      email: "stevenmitchell@hospital.com",
      hospital: "Infectious Disease Center",
      patientsAssigned: [8, 10],
      workingHours: "9 AM - 5 PM",
      notes: "Expert in treating viral, bacterial, and parasitic infections."
    }
  ];
  
  module.exports = doctors;
  