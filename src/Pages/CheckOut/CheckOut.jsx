import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const service = useLoaderData()
    const { title, price, _id } = service;

    const handleCheckOut = event =>{
        event.preventDefault();
        const form = event.target;
        const firstName =form.firstName.value;
        const lastName =form.lastName.value;
        const number =form.number.value;
        const email =form.email.value;
        console.log(firstName,lastName,number,email)
    }

    return (
        <div>
            <div className="text-center text-3xl font-bold">
                <h2>Checkout: {title}</h2>
            </div>

            <form onSubmit={handleCheckOut}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" name="firstName" placeholder="First Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" name="number" placeholder="Your Number" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="Your Email" className="input input-bordered" />
                    </div>

                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;