import { useEffect, useState } from 'react';
import Card from '../Card';
import { db } from '../../config/firebaseConfig';
import { FaPerson, FaUserDoctor } from 'react-icons/fa6';
import { collection, getDocs } from 'firebase/firestore';

export default function AdminDashboard() {
    const [docCount, setDocCount] = useState(0);
    const [patCount, setPatCount] = useState(0);

    const getCount = async () => {
        const docRef = collection(db, 'doctors');
        const patRef = collection(db, 'booking');

        const docSnap = await getDocs(docRef);
        const patSnap = await getDocs(patRef);

        const doctorList = docSnap.docs.map(doc => doc.data());
        const patientList = patSnap.docs.map(doc => doc.data());

        setDocCount(doctorList.length);
        setPatCount(patientList.length);
    }

    useEffect(() => {
        getCount();
    }, []);

    return (
        <div className='p-4'>
            <h1>Admin Dashboard</h1>
            <div className='p-4 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <Card icon={<FaUserDoctor size={50} />} title="Doctors" count={docCount} description="Available Number Of Doctors" />
                <Card icon={<FaPerson size={50} />} title="Patients" count={patCount} description="The number of patient requested for service today" />
            </div>
        </div>
    )
}
