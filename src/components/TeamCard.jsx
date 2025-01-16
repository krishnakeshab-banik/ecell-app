import React from "react";
import "./TeamCard.css";
import { FaInstagram, FaLinkedin, FaXing } from "react-icons/fa"; // Replaced FaTwitter with FaXing for X app

const TeamCard = ({ name = "Name Unavailable", position = "Position Unavailable", image, socialLinks = {} }) => {
    const defaultImage = "https://via.placeholder.com/150"; // Default placeholder image if image URL is missing

    return (
        <div className="team-card">
            <img 
                src={image || defaultImage} 
                alt={`${name}'s profile`} 
                className="team-card-image" 
            />
            <h3 className="team-card-name">{name}</h3>
            <p className="team-card-position">{position}</p>
            <div className="team-card-socials">
                {socialLinks.linkedin && (
                    <a 
                        href={socialLinks.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-icon-container"
                    >
                        <FaLinkedin />
                    </a>
                )}
                {socialLinks.instagram && (
                    <a 
                        href={socialLinks.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-icon-container"
                    >
                        <FaInstagram />
                    </a>
                )}
                {socialLinks.twitter && (
                    <a 
                        href={socialLinks.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-icon-container"
                    >
                        <FaXing />
                    </a>
                )}
            </div>
        </div>
    );
};

export default TeamCard;
