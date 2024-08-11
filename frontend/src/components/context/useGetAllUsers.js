import React, { useEffect, useState } from 'react'
import axios from "axios"
import Cookies from 'js-cookie';

export default function useGetAllUsers() {


    const [allUsers, setAllUsers] = useState()
    const [loading, setLoading] = useState(false)
    console.log(allUsers);

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true)
            try {
                const token = Cookies.get("jwt")
                const response = await axios.get("/api/user/allusers", {
                    credentials: "include",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setAllUsers(response.data)

                setLoading(false)
            } catch (err) {
                console.log(err);
            }
        }
        getUsers()
    }, [])


    return [allUsers, loading]

}
