import React, { useEffect, useState } from 'react';
import { db } from '../config/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Doctors = () => {
  // Sample placeholder data for doctors
  const [doctors, setDoctors] = useState([]);

  const fetchData = async () => {
    const doctorsRef = collection(db, 'doctors');
    const snapshot = await getDocs(doctorsRef);
    const doctorsList = snapshot.docs.map(doc => doc.data());
    setDoctors(doctorsList);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-20 pt-5 min-h-screen">
      <h2 className="text-center text-4xl font-bold mb-10 text-gray-800 dark:text-white">Our Doctors</h2>
      <hr className="mb-10 border-gray-300" />

      <div className="flex flex-wrap gap-6 justify-center max-w-7xl mx-auto">
        {doctors.map((doctor, index) => (
          <div key={index} className="card bg-white text-center shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <img className="w-full h-64 object-contain rounded-t-lg" src={doctor.image} alt={doctor.fullName} />
            <div className="p-4">
              <h5 className="text-2xl font-semibold mb-2 text-gray-900">{doctor.fullName}</h5>
              <p className="text-gray-700 mb-2">{doctor.specialization}</p>
              <h6 className="text-gray-600">{doctor.department}</h6>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10" />
    </div>
  );
};

export default Doctors;
