import { useEffect, useState } from "react";
import { AsideCard } from "./Card";
import { MapPin } from "phosphor-react";


export function Aside() {
    const [user, setUser] = useState({ name: '', avatar: '', bio: '', location: '' });


    useEffect(() => {
        async function fetchAsideData() {
            const response = await fetch('https://api.github.com/users/maiquinho');
            const data = await response.json();

            setUser({
                name: data.name,
                avatar: data.avatar_url,
                bio: data.bio,
                location: data.location
            });
        }

        fetchAsideData();
    }, []);


    return (
        <aside className="w-[348px] h-[90vh] text-purple-500 flex flex-col gap-7">


            <AsideCard className="flex flex-col justify-center items-center">

                <img src={user.avatar} className="border-2 border-green rounded-full w-32 h-32 mb-7" alt={user.name} title={user.name} />

                <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
                <small className="text-center">{user.bio}</small>

            </AsideCard>


            <AsideCard>

                <ul>
                    <li className="text-sm flex items-center gap-x-5">
                        <MapPin width={24} height={24} />
                        {user.location}
                    </li>
                </ul>

            </AsideCard>
     


        </aside>
    );
}