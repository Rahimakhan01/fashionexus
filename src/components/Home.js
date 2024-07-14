import React from 'react';
import bannerImage from './bannerImage.jpg';
import summerImage from './summer.jpeg';
import streetImage from './street.jpeg';
import { Link } from 'react-router-dom';

const Home = () => {
  // Mock data for contests (replace with actual data or fetch from API)
  const contests = [
    { id: 1, name: 'Summer Fashion Contest', description: 'Create the coolest summer outfit!', deadline: '2024-08-01', backgroundImage: summerImage },
    { id: 2, name: 'Streetwear Challenge', description: 'Design the trendiest streetwear look!', deadline: '2024-09-15', backgroundImage: streetImage }
  ];

  // Colors
  const titleColor = '#00848c'; // Contest title color
  const welcomeTextColor = '#fff'; // Welcome text color
  const trendColor = 'pink'; // Color for "fashion trends" and "design submissions"
  const nexusColor = 'orange'; // Color for "NEXUS"
  const platformColor = 'pink'; // Color for platform description

  return (
    <div>
      <div style={{
        position: 'relative',
        width: '100%',
      }}>
        {/* Banner Image */}
        <img
          src={bannerImage}
          alt="Welcome to FashioNEXUS"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: welcomeTextColor, // Welcome text color
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Optional: Text shadow
        }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: welcomeTextColor }}>Welcome to Fashio<span style={{ color: nexusColor }}>NEXUS</span></h1>
          <p style={{ fontSize: '1.5rem', color: platformColor }}>Your go-to platform for <span style={{ color: trendColor }}>fashion trends</span> and <span style={{ color: trendColor }}>design submissions.</span></p>
        </div>
      </div>

      {/* Contest Cards Section */}
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: titleColor }}>Contests</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {contests.map(contest => (
            <div key={contest.id} style={{
              maxWidth: '400px',
              width: '100%',
              height: '300px',
              backgroundImage: `url(${contest.backgroundImage})`,
              backgroundSize: 'cover',
              position: 'relative',
              color: '#fff',
              overflow: 'hidden',
              borderRadius: '10px',
              boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)',
            }}>
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                padding: '20px',
                transition: 'background-color 0.3s ease',
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  marginBottom: '10px',
                  color: titleColor, // Apply contest title color
                }}>{contest.name}</h3>
                <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{contest.description}</p>
               
                <Link to={`/contest/${contest.id}`} className="btn btn-primary" style={{
                  display: 'inline-block',
                  padding: '8px 20px',
                  fontSize: '1rem',
                  border: 'none',
                  backgroundColor: '#00848c',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  transition: 'background-color 0.3s ease',
                }}>View Contest</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
