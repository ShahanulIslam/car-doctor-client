import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Service = () => {
    const {user} = useContext(AuthContext)
    const service = useLoaderData()
    const { title, price, _id,img } = service;

    const handleService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email =user?.email;
        const booking = {
            customerName : name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price:price,
        }
        console.log(booking)
        fetch("http://localhost:5000/booking",{
            method:"POST",
            headers:{
                "content-type" : "application/json"
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                alert("Service Booked successfully")
            }
        })
    }

    return (
        <div>
            <div className="text-center text-3xl font-bold">
                <h2>Service Name: {title}</h2>
            </div>

            <form onSubmit={handleService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" defaultValue={user?.display_name} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" name="amount" defaultValue={"$" + price} className="input input-bordered" />
                    </div>


                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    )
};

export default Service;