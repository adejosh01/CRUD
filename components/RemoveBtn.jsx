"use client"

import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation"

export default function RemoveBtn ({id}) {

    const removeTopic = async() => {
        const router = useRouter
        const confirmed = confirm('Are you sure?')

        if (confirmed) {
           const res = await fetch(`http://localhost:3001/api/topics?id=${id}`, {
                method: "DELETE",
            });

        if(res.ok){
            router.refresh()
        }
        }
    }
    return (
        <button onClick={removeTopic} className="text-red-400">
            <HiOutlineTrash size={24} />
        </button>
    )
}