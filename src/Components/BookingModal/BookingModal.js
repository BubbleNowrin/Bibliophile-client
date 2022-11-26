import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const BookingModal = ({ bookItem, setBookItem }) => {
    const { user, logOut } = useContext(AuthContext);

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const mobile = form.mobile.value;
        const place = form.place.value;
        const booking = {
            userName: user?.displayName,
            email: user?.email,
            bookName: bookItem.bookName,
            resalePrice: bookItem.resalePrice,
            mobileNumber: mobile,
            location: place,
            image: bookItem.image
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('Token')}`
            },
            body: JSON.stringify(booking)
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                if (data.acknowledged) {
                    setBookItem(null);
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{bookItem.bookName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" value={user?.displayName} disabled className="input input-bordered w-full " />
                        <input type="text" value={user?.email} disabled className="input input-bordered w-full " />
                        <input type="text" value={bookItem.bookName} disabled className="input input-bordered w-full " />
                        <input type="text" value={`$${bookItem.resalePrice}`} disabled className="input input-bordered w-full " />
                        <input name='mobile' type="text" placeholder="Your Mobile Number" className="input input-bordered w-full " />
                        <input name='place' type="text" placeholder="Pick up place" className="input input-bordered w-full " />
                        <br />
                        <input className='w-full btn btn-accent' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;