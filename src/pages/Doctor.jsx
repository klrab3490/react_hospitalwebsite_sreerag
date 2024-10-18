import React from 'react';

const Doctors = () => {
  // Sample placeholder data for doctors
  const doctors = [
    {
      doc_name: "Dr. Mohmd Musthafa",
      doc_spec: "Dermatologist",
      dept_name: "Dermatology Department",
      doc_image: "https://via.placeholder.com/150", // Placeholder image URL
    },
    {
      doc_name: "Dr. Edwin C Shony",
      doc_spec: "Cardiologist",
      dept_name: "Cardiology Department",
      doc_image: "https://via.placeholder.com/150", // Placeholder image URL
    },
    {
      doc_name: "Dr. Rahul AB",
      doc_spec: "Pediatrician",
      dept_name: "Pediatrics Department",
      doc_image: "https://via.placeholder.com/150", // Placeholder image URL
    },
    {
      doc_name: "Dr. Ajith John",
      doc_spec: "Neurologist",
      dept_name: "Neurology Department",
      doc_image: "https://via.placeholder.com/150", // Placeholder image URL
    },
  ];

  return (
    <div className="px-20 pt-5 min-h-screen">
      <h2 className="text-center text-4xl font-bold mb-10 text-gray-800 dark:text-white">Our Doctors</h2>
      <hr className="mb-10 border-gray-300" />

      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="card bg-white text-center shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              className="w-full h-56 object-cover rounded-t-lg mb-4"
              src={doctor.doc_image}
              alt={doctor.doc_name}
            />
            <div className="p-4">
              <h5 className="text-2xl font-semibold mb-2 text-gray-900">{doctor.doc_name}</h5>
              <p className="text-gray-700 mb-2">{doctor.doc_spec}</p>
              <h6 className="text-gray-600">{doctor.dept_name}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
