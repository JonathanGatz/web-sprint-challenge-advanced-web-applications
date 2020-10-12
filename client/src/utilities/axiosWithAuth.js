import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token"); // Recieved the token from server 

    return axios.create({
        baseURL: "http://localhost:5000/api",
        headers: {
            Authorization: token 
        }
    })
}

// Step One  setting up  my calls 

// This is my utility closet 