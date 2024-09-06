import React, { ReactNode, useEffect, useState } from "react";
import "./ShootingStar.css";

const ShootingStar: React.FC<{ id: string; onRemove: (id: string) => void }> = ({ id, onRemove }) => {
    const [style, setStyle] = useState<React.CSSProperties>({});

    useEffect(() => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 2 + 3;
        const delay = Math.random() * 5;

        setStyle({
            left: `${left}vw`,
            top: `${top}vh`,
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
        });

        const timeout = setTimeout(() => {
            onRemove(id);
        }, (duration + delay) * 900);

        return () => clearTimeout(timeout);
    }, [id, onRemove]);

    return <div className="star" style={style}></div>;
};

const ShootingStarContainer: React.FC = () => {
    const [stars, setStars] = useState<ReactNode[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const id = `${Math.random()}`;
            setStars((prevStars) => [
                ...prevStars,
                <ShootingStar key={id} id={id} onRemove={removeStar} />
            ]);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const removeStar = (id: string) => {
        setStars((prevStars) => prevStars.filter((star) => (star as any).key !== id));
    };

    return <div className="star-container">{stars}</div>;
};

export default ShootingStarContainer;
