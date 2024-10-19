import { useEffect, useState } from 'react';
import { db, storage } from '../../config/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, doc, setDoc, serverTimestamp, getDocs, deleteDoc } from 'firebase/firestore';
import { AiTwotoneDelete, AiTwotoneEdit } from 'react-icons/ai';

export default function AdminDoctor() {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editingDoctor, setEditingDoctor] = useState(null);
    const [doctorDetails, setDoctorDetails] = useState({
        fullName: '',
        specialization: '',
        department: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDoctorDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const uploadImage = async () => {
        const storageRef = ref(storage, `doctors/${doctorDetails.fullName}`);
        const snapshot = await uploadBytes(storageRef, image);
        return await getDownloadURL(snapshot.ref);
    };

    const createDoctor = async (imageLink) => {
        const uploadData = doc(collection(db, 'doctors'));
        const docId = uploadData.id;

        try {
            await setDoc(uploadData, {
                id: docId,
                fullName: doctorDetails.fullName,
                specialization: doctorDetails.specialization,
                department: doctorDetails.department,
                image: imageLink,
                registeredAt: serverTimestamp(),
            });
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };

    const updateData = async (id) => {
        setLoading(true);
        let imageLink = image ? await uploadImage() : editingDoctor.image; // Use the new image if it exists, otherwise keep the old one.

        try {
            await setDoc(doc(db, 'doctors', id), {
                fullName: doctorDetails.fullName,
                specialization: doctorDetails.specialization,
                department: doctorDetails.department,
                image: imageLink,
                registeredAt: serverTimestamp(),
            });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (doctor) => {
        setEditingDoctor(doctor);
        setDoctorDetails({
            fullName: doctor.fullName,
            specialization: doctor.specialization,
            department: doctor.department,
        });
        setImage(null); // Reset image state if needed
        setShowForm(true); // Show the form
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (editingDoctor) {
            await updateData(editingDoctor.id); // Update existing doctor
        } else {
            const imageLink = await uploadImage(); // Upload new doctor
            await createDoctor(imageLink);
        }

        resetForm();
        fetchData();
    };

    const resetForm = () => {
        setDoctorDetails({ fullName: '', specialization: '', department: '' });
        setImage(null);
        setEditingDoctor(null);
        setShowForm(false);
    };

    const fetchData = async () => {
        const doctorsRef = collection(db, 'doctors');
        const snapshot = await getDocs(doctorsRef);
        const doctorsList = snapshot.docs.map(doc => doc.data());
        setData(doctorsList);
    };

    const deleteData = async (id) => {
        try {
            await deleteDoc(doc(db, 'doctors', id));
        } catch (error) {
            console.log(error);
        }
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='flex flex-col'>
            <div className='flex justify-between px-10 pt-5'>
                <p className='text-3xl font-bold underline'>Doctor</p>
                <button className='bg-green-500 text-white p-2 rounded-md' onClick={() => setShowForm(!showForm)} >
                    {showForm ? 'Close Form' : 'Add Doctor'}
                </button>
            </div>

            {showForm && (
                <div className='flex justify-center items-center p-6'>
                    <div className='bg-gray-400 p-5 rounded-md shadow-lg text-black w-full'>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                            <input placeholder='Full Name' type='text' name='fullName' value={doctorDetails.fullName} onChange={handleInputChange} className='border p-2 rounded-md w-full text-white' required />
                            <input placeholder='Specialization' type='text' name='specialization' value={doctorDetails.specialization} onChange={handleInputChange} className='border p-2 rounded-md text-white w-full' required />
                            <input placeholder='Department' type='text' name='department' value={doctorDetails.department} onChange={handleInputChange} className='border p-2 rounded-md text-white w-full' required />
                            <input placeholder='Upload Profile' type='file' accept='image/*' onChange={handleFileChange} className='border p-2 rounded-md text-white w-full' />
                            <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <div className='p-3'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='border p-2'>Full Name</th>
                            <th className='border p-2'>Specialization</th>
                            <th className='border p-2'>Department</th>
                            <th className='border p-2'>Action</th>
                        </tr>
                    </thead>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error...</p>}
                    {data.length === 0 && <p>No data found...</p>}
                    <tbody>
                        {data.map((doctor, index) => (
                            <tr key={index}>
                                <td className='border p-2'>{doctor.fullName}</td>
                                <td className='border p-2'>{doctor.specialization}</td>
                                <td className='border p-2'>{doctor.department}</td>
                                <td className='border p-2 flex justify-center items-center gap-2'>
                                    <AiTwotoneDelete size={40} className='bg-red-500 text-white p-2 rounded-md cursor-pointer' onClick={() => deleteData(doctor.id)} />
                                    <AiTwotoneEdit size={40} className='bg-blue-500 text-white p-2 rounded-md cursor-pointer' onClick={() => handleEdit(doctor)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
