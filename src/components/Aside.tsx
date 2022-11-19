import { useEffect, useState } from "react";
import { AsideCard } from "./Card";
import { GithubLogo, LinkedinLogo, MapPin, TwitterLogo } from "phosphor-react";


export function Aside() {
    const [user, setUser] = useState({ name: '', avatar: '', bio: '', location: '', social: { twitter: '', linkedIn: '', gitHub: '' } });


    useEffect(() => {
        async function fetchAsideData() {
            const response = await fetch('https://api.github.com/users/maiquinho');
            const data = await response.json();

            setUser({
                name: data.name,
                avatar: data.avatar_url,
                bio: data.bio,
                location: data.location,
                social: {
                    twitter: data.twitter_username,
                    linkedIn: '',
                    gitHub: data.html_url
                }
            });
        }

        fetchAsideData();
    }, []);


    return (
        <aside className="w-[348px] h-[90vh] text-purple-500 flex flex-col gap-7 overflow-y-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">


            <AsideCard className="flex flex-col justify-center items-center">

                <img src={user.avatar} className="border-2 border-green rounded-full w-32 h-32 mb-7" alt={user.name} title={user.name} />

                <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
                <small className="text-center">{user.bio}</small>

            </AsideCard>


            <AsideCard>

                <ul className="flex flex-col gap-y-5">
                    <li className="text-sm flex items-center gap-x-5">
                        <MapPin width={24} height={24} />
                        {user.location}
                    </li>
                    <li className="text-sm flex items-center gap-x-5">
                        <LinkedinLogo width={24} height={24} />
                        {user.social.linkedIn}
                    </li>
                    <li className="text-sm flex items-center gap-x-5">
                        <TwitterLogo width={24} height={24} />
                        {user.social.twitter}
                    </li>
                    <li className="text-sm flex items-center gap-x-5">
                        <GithubLogo width={24} height={24} />
                        {user.social.gitHub}
                    </li>
                </ul>

            </AsideCard>
     


        </aside>
    );
}