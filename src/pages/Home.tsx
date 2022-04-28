import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api";
import { Album } from "../types/Album";

export const Home = () => {
    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        loadAlbum();
    }, []);
    const loadAlbum = async () => {        
        let json = await api.getAllAlbums();
        setAlbums(json);
    }
    return (
        <div className="grid gap-4 grid-cols-2 p-6">
            {albums.map((item, index) => (
                <div key={index} className='border-2 p-4 mb-4 rounded-2xl text-lg'>
                    {item.title}
                </div>
            ))}
        </div>
    );
}