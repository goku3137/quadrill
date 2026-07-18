import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ServiceCard.css';

const ServiceCard = ({ icon: Icon, title, description, link = "/services", applications }) => {
  return (
    <div className="service-card">
      <div className="service-card-icon">
        <Icon size={32} />
      </div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-desc">{description}</p>
      
      {applications && (
        <div className="service-applications">
          <strong>Best for:</strong> {applications}
        </div>
      )}
      
      <Link to={link} className="service-card-link">
        Read More <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default ServiceCard;
