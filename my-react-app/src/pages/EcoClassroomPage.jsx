import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EcoClassroomPage = () => {
  const topics = [
    {
      icon: '🌍',
      title: 'Climate Change',
      text:
        'Climate change refers to long-term shifts in global temperatures and weather patterns. Human activities such as burning fossil fuels increase greenhouse gas emissions and contribute to global warming.'
    },

    {
      icon: '♻️',
      title: 'Recycling & Waste',
      text:
        'Recycling helps reduce landfill waste and saves natural resources. Small actions such as sorting rubbish, reusing bottles and reducing plastic use can make a big environmental difference.'
    },

    {
      icon: '🦊',
      title: 'Biodiversity',
      text:
        'Biodiversity means the variety of plants, animals and ecosystems living in the environment. Healthy biodiversity supports food chains, clean water and ecosystem balance.'
    },

    {
      icon: '💧',
      title: 'Water Protection',
      text:
        'Rivers, lakes and wetlands are important habitats for wildlife. Protecting water quality helps species such as frogs, ducks and fish survive in local ecosystems.'
    },

    {
      icon: '🌲',
      title: 'Forest Ecosystems',
      text:
        'Forests provide oxygen, absorb carbon dioxide and support wildlife habitats. Woodland areas like Outwoods Woodland Park are important green spaces around Loughborough.'
    },

    {
      icon: '🐝',
      title: 'Pollinators',
      text:
        'Bees and butterflies are essential pollinators. They help flowers and crops grow and are important for maintaining biodiversity and food production.'
    }
  ];

  return (
    <>
      <Navbar />

      <main>

        {/* ==========================================================
            Intro Card
           ========================================================== */}
        <section className="eco-classroom-section">

          <div className="eco-classroom-intro">
            <h2>🌱 Why Environmental Education Matters</h2>

            <p>
              Environmental education helps people understand how ecosystems
              work and why protecting wildlife and natural habitats is
              important. Small daily actions can improve biodiversity,
              sustainability and community wellbeing.
            </p>
          </div>

          {/* ==========================================================
              Topic Grid
             ========================================================== */}
          <div className="eco-topic-grid">

            {topics.map((topic, index) => (
              <div key={index} className="eco-topic-card">

                <div className="eco-topic-icon">
                  {topic.icon}
                </div>

                <h3>
                  {topic.title}
                </h3>

                <p>
                  {topic.text}
                </p>

              </div>
            ))}

          </div>

          {/* ==========================================================
              Bottom Highlight
             ========================================================== */}
          <div className="eco-learning-highlight">

            <h2>🌍 Local Sustainability in Loughborough</h2>

            <p>
              Loughborough contains rivers, parks, woodland habitats and campus
              green spaces that support local wildlife. By protecting these
              environments, communities can improve ecological health and
              support future sustainability goals.
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default EcoClassroomPage;