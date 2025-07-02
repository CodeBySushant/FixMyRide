import React, { useEffect, useState } from 'react';

const ServicesList = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch services:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading services...</p>;

  return (
    <div>
      <h2>Our Services</h2>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            {service.name} - ₹{service.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesList;
