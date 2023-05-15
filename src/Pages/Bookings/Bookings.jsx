import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/booking?${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl'>Your bookings {bookings.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                      {
                        bookings.map(booking => <BookingRow
                        key={booking._id}
                        booking={booking}
                        ></BookingRow>)
                      }
                        
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default Bookings;