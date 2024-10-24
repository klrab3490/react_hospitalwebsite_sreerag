import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export default function AdminMessages() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const messagesRef = collection(db, 'contact');
        const snapshot = await getDocs(messagesRef);
        const messagesList = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setData(messagesList);
    }

    const deleteData = async (id) => {
        try {
            await deleteDoc(doc(db, 'contact', id));
        } catch (error) {
            console.log(error);
        }
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <div className='flex flex-col'>
            <p className='text-3xl font-bold underline'>Messages</p>
            <div className='p-3'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='border p-2'>Name</th>
                            <th className='border p-2'>Email</th>
                            <th className='border p-2'>Message</th>
                            <th className='border p-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((message, index) => (
                            <tr key={index}>
                                <td className='border p-2'>{message.name}</td>
                                <td className='border p-2'>{message.email}</td>
                                <td className='border p-2'>{message.message}</td>
                                <td className='border p-2'>
                                    <button 
                                        className='bg-red-500 text-white p-2 rounded-md' 
                                        onClick={() => deleteData(message.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='p-3'>
                    {loading && <p>Loading...</p>}
                    {error && <p className='w-full text-red-600'>Error...</p>}
                    {data.length === 0 && <p className='w-full text-red-600'>No messages found...</p>}
                </div>
            </div>
        </div>
    )
}