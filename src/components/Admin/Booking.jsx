import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default function AdminBooking() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const bookingRef = collection(db, 'bookings');
        const snapshot = await getDocs(bookingRef);
        const bookingList = snapshot.docs.map(doc => doc.data());
        setData(bookingList);
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <div className='flex flex-col'>
            <p className='text-3xl font-bold underline'>Bookings</p>
            <div className='p-3'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='border p-2'>Full Name</th>
                            <th className='border p-2'>Email</th>
                            <th className='border p-2'>Phone Number</th>
                            <th className='border p-2'>Preferred Date</th>
                            <th className='border p-2'>Preferred Time</th>
                            <th className='border p-2'>Department</th>
                            <th className='border p-2'>Additional Message</th>
                            <th className='border p-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((booking, index) => (
                            <tr key={index}>
                                <td className='border p-2'>{booking.fullName}</td>
                                <td className='border p-2'>{booking.email}</td>
                                <td className='border p-2'>{booking.phoneNumber}</td>
                                <td className='border p-2'>{booking.preferredDate}</td>
                                <td className='border p-2'>{booking.preferredTime}</td>
                                <td className='border p-2'>{booking.department}</td>
                                <td className='border p-2'>{booking.additionalMessage}</td>
                                <td className='border p-2'>
                                    <button className='bg-red-500 text-white p-2 rounded-md'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='p-3'>
                    {loading && <p>Loading...</p>}
                    {error && <p className='w-full text-red-600'>Error...</p>}
                    {data.length === 0 && <p className='w-full text-red-600'>No data found...</p>}
                </div>
            </div>
        </div>
    )
}
