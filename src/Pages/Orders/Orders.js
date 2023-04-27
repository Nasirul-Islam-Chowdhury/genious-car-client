import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider.js';
import OrderRow from './OrderRow.js';

const Orders = () => {
    
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        fetch(`https://genius-car-server-sooty-six.vercel.app/orders?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem("geniusToken")}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                   return logOut()
                }
               return res.json()
            })
            .then(data => {
               return setOrder(data)
            })
    }, [user?.email, logOut])
    
    const handleDelete = _id =>{
        const proceed = window.confirm("are you sure to cancel this order");
        if(proceed){
            fetch(`https://genius-car-server-sooty-six.vercel.app/orders/${_id}`,{
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
            if(data.deletedCount > 0){
                alert("Order deletes successfully")
                const remaining = orders.filter(order => order._id !== _id);
                setOrder(remaining)
            }
            })
        }
}
    const handleStatusUpdate = _id =>{
            fetch(`https://genius-car-server-sooty-six.vercel.app/orders/${_id}`,{
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({status : "Approved"})
            })
            .then(res=>res.json())
            .then(data=>{console.log(data)
            if(data.modifiedCount > 0){
                const remaining = orders.filter(order => order._id !== _id);
                const approving = orders.find(order => order._id === _id);
                approving.status = "Approved";
                const neworders = [approving,...remaining ];
                setOrder(neworders)
             }
            })
}


    return (
        <div>
            <h1>you have {orders?.length} Orders</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>favourite color</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map(order => <OrderRow handleStatusUpdate={handleStatusUpdate} handleDelete={handleDelete} order={order} key={order._id}/>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Orders