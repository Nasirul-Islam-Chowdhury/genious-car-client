export const setToken =(user)=>{
    const currentUser = {
        email: user.user.email
    }
    // console.log(currentUser)
    fetch('https://genius-car-server-sooty-six.vercel.app/jwt', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                localStorage.setItem("geniusToken", data.token)
            })
}