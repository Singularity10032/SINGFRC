// /pages/team.tsx
import Image from 'next/image';
import styles from '../styles/team.module.css';

type TeamMember = {
  name: string;
  position: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  // Captains & Leads
  { name: 'Aadhitya Senthilkumar', position: 'Mechanical Captain', image: '/images/diddy.jpg' },
  { name: 'Kavin Ravi', position: 'Mech Captain', image: '/images/kavin.jpg' },
  { name: 'Shiven Velagapudi', position: 'Programming Captain', image: '/images/placeholder.jpg' },
  { name: 'Sachin Rajan', position: 'Business Captain', image: '/images/sachin.jpg' },
  { name: 'Nirbhay Challa', position: 'Scouting Captain', image: '/images/placeholder.jpg' },
  { name: 'Sanjana Rajaram', position: 'CAD Captain', image: '/images/placeholder.jpg' },
  { name: 'Shaurya Singh', position: 'Outreach Lead', image: '/images/placeholder.jpg' },
  { name: 'Shreyansh Panigrahi', position: 'Programming Lead', image: '/images/placeholder.jpg' },
  { name: 'Mohan Chillara', position: 'Business & Mech Lead', image: '/images/placeholder.jpg' },

  // Seniors
  { name: 'Arnau Ariga', position: 'Senior', image: '/images/placeholder.jpg' },
  { name: 'Linda Zhang', position: 'Senior', image: '/images/placeholder.jpg' },
  { name: 'Amrith Ponneth', position: 'Senior', image: '/images/placeholder.jpg' },
  { name: 'Chaitu Polavarapu', position: 'Senior', image: '/images/placeholder.jpg' },
  { name: 'Chetan Kapavarapu', position: 'Senior', image: '/images/placeholder.jpg' },
  { name: 'Dhruva', position: 'Senior', image: '/images/placeholder.jpg' },
  { name: 'Eshwar', position: 'Senior', image: '/images/placeholder.jpg' },
  { name: 'Gabriel Bell', position: 'Senior', image: '/images/placeholder.jpg' },
  { name: 'Kavin Dasari', position: 'Senior', image: '/images/placeholder.jpg' },
  { name: 'Rishi Alluri', position: 'Senior', image: '/images/placeholder.jpg' },

  // Juniors
  { name: 'Alexander Wick', position: 'Junior', image: '/images/placeholder.jpg' },
  { name: 'Daniel Brown', position: 'Junior', image: '/images/placeholder.jpg' },
  { name: 'Dheemanth Suddekunte', position: 'Junior', image: '/images/placeholder.jpg' },
  { name: 'Ishaant Majumdar', position: 'Junior', image: '/images/placeholder.jpg' },
  { name: 'Ishan Pachnada', position: 'Junior', image: '/images/placeholder.jpg' },
  { name: 'Shreya Samba', position: 'Junior', image: '/images/placeholder.jpg' },

  // Sophomores
  { name: 'Aahan Kumbham', position: 'Sophomore', image: '/images/placeholder.jpg' },
  { name: 'Aryaman Jalota', position: 'Sophomore', image: '/images/placeholder.jpg' },

  // Freshmen
  { name: 'Sathyndhira', position: 'Freshman', image: '/images/placeholder.jpg' },
  { name: 'Shanavi Rajaram', position: 'Freshman', image: '/images/placeholder.jpg' },
  { name: 'Shivani Umashanker', position: 'Freshman', image: '/images/placeholder.jpg' },
];

const positionsOrder = [
  'Mechanical Captain',
  'Mech Captain',
  'Programming Captain',
  'Business Captain',
  'Scouting Captain',
  'CAD Captain',
  'Outreach Lead',
  'Programming Lead',
  'Business & Mech Lead',
  'Senior',
  'Junior',
  'Sophomore',
  'Freshman',
];

export default function Team() {
  return (
    <div className={styles.container}>
      <h1>Our Team</h1>

      {positionsOrder.map((position) => {
        const members = teamMembers.filter((m) => m.position === position);
        if (members.length === 0) return null;

        return (
          <div key={position} style={{ marginTop: '50px' }}>
            <h2>{position}</h2>
            <div className={styles.grid}>
              {members.map((member) => (
                <div key={member.name} className={styles.card}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className={styles.image}
                  />
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}