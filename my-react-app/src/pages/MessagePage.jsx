import React from 'react';

import Navbar from '../components/Navbar';
import MessageBoard from '../components/MessageBoard';
import Footer from '../components/Footer';

const MessagePage = () => {
  return (
    <>
      <Navbar />

      <main>
        <section className="page-hero">
          <span className="page-badge">
            ECO COMMUNITY
          </span>

          <h1>💬 Eco Guardian Community</h1>

          <p>
            Share your green actions, environmental ideas and eco stories with other guardians building a more sustainable future.
          </p>
        </section>

        <MessageBoard />
      </main>

      <Footer />
    </>
  );
};

export default MessagePage;