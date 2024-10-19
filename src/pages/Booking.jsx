import { useState } from 'react';
import { db } from '../config/firebaseConfig';
import { doc, setDoc, collection, serverTimestamp } from 'firebase/firestore';

const AppointmentForm = () => {
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        department: '',
        message: '',
    });

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];
    // Get the current time in HH:MM format
    const currentTime = new Date().toTimeString().split(' ')[0].slice(0, 5);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const uploadData = doc(collection(db, 'booking'));
        const docId = uploadData.id;

        try {
            await setDoc(uploadData, {
                id: docId,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                date: formData.date,
                time: formData.time,
                department: formData.department,
                message: formData.message,
                registeredAt: serverTimestamp(),
            })
            alert('Appointment scheduled successfully!');
        } catch (error) {
            setError(true);
            console.log(error);
        }
        setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            department: '',
            message: '',
        });
    };

    return (
        <div style={{ minHeight: 'calc(100vh - 192px)' }} className="flex items-center justify-center w-full h-full">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 w-1/2">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="px-4 py-5 sm:p-6">
                        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Make an Appointment</h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mb-10"></div>
                        {error && <p className="text-red-500 text-center mb-4">Something went wrong. Please try again later.</p>}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
                                </div>
                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
                                    <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} min={today} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
                                </div>
                                <div>
                                    <label htmlFor="time" className="block text-sm font-medium text-gray-700">Preferred Time</label>
                                    <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} min={formData.date === today ? currentTime : '00:00'} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
                                </div>
                                <div>
                                    <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                                    <select id="department" name="department" value={formData.department} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required >
                                        <option value="">Select a department</option>
                                        <option value="cardiology">Cardiology</option>
                                        <option value="neurology">Neurology</option>
                                        <option value="orthopedics">Orthopedics</option>
                                        <option value="pediatrics">Pediatrics</option>
                                        <option value="oncology">Oncology</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Message</label>
                                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
                                    Schedule Appointment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentForm;
