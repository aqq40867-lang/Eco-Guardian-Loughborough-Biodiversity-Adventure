import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import FoxImg from '../assets/Mammals/Fox.jpg';
import FerretImg from '../assets/Mammals/Ferret.jpg';
import DeerImg from '../assets/Mammals/Deer.jpg';
import SquirrelImg from '../assets/Mammals/Squirrel.jpg';
import RabbitImg from '../assets/Mammals/Rabbit.jpg';
import WaterVoleImg from '../assets/Mammals/WaterVole.jpg';
import WoodMouseImg from '../assets/Mammals/WoodMouse.jpg';

import LapwingImg from '../assets/Birds/Lapwing.jpg';
import MallardImg from '../assets/Birds/Mallard.jpg';
import MandarinImg from '../assets/Birds/Mandarin.jpg';
import AvocetImg from '../assets/Birds/Avocet.jpg';
import BuzzardImg from '../assets/Birds/Buzzard.jpg';
import MuteSwan from '../assets/Birds/MuteSwan.jpg';
import PeregrineFalconImg from '../assets/Birds/PeregrineFalcon.jpg';

import CommonLizardImg from '../assets/AmphibiansReptiles/CommonLizard.jpg';
import CommonToadImg from '../assets/AmphibiansReptiles/CommonToad.jpg';
import GrassSnakeImg from '../assets/AmphibiansReptiles/GrassSnake.jpg';
import GreatCrestedNewtImg from '../assets/AmphibiansReptiles/GreatCrestedNewt.jpg';
import RedEaredTerrapinImg from '../assets/AmphibiansReptiles/RedEaredTerrapin.jpg';
import CommonFrogImg from '../assets/AmphibiansReptiles/CommonFrog.jpg';

const animalDetails = {
  'red-fox': {
    name: 'Red Fox',
    img: FoxImg,
    type: 'Mammal',
    habitat: 'Woodlands, parks and grassland edges',
    role: 'Predator and ecosystem balancer',
    fact: 'Red foxes are intelligent night hunters. They help control small animal populations and are often found near woodland edges.'
  },

  ferret: {
    name: 'Ferret',
    img: FerretImg,
    type: 'Mammal',
    habitat: 'Grasslands and underground burrows',
    role: 'Small predator',
    fact: 'Ferrets are quick, agile animals that can explore narrow spaces and underground areas.'
  },

  'fallow-deer': {
    name: 'Fallow Deer',
    img: DeerImg,
    type: 'Mammal',
    habitat: 'Woodland parks and open grassland',
    role: 'Grazing animal',
    fact: 'Fallow deer are gentle grazing animals often linked with healthy woodland and parkland habitats.'
  },

  'grey-squirrel': {
    name: 'Grey Squirrel',
    img: SquirrelImg,
    type: 'Mammal',
    habitat: 'Parks, gardens and woodland',
    role: 'Seed spreader',
    fact: 'Grey squirrels are energetic climbers. They collect nuts and seeds and are common in urban green spaces.'
  },

  'wild-rabbit': {
    name: 'Wild Rabbit',
    img: RabbitImg,
    type: 'Mammal',
    habitat: 'Open grassland and field edges',
    role: 'Grazing animal and prey species',
    fact: 'Wild rabbits are fast runners and often live in underground tunnel systems called warrens.'
  },

  'water-vole': {
    name: 'Water Vole',
    img: WaterVoleImg,
    type: 'Mammal',
    habitat: 'Riverbanks and wetland edges',
    role: 'Wetland indicator species',
    fact: 'Water voles live near rivers and are sensitive to habitat loss and water pollution.'
  },

  'wood-mouse': {
    name: 'Wood Mouse',
    img: WoodMouseImg,
    type: 'Mammal',
    habitat: 'Woodland, hedgerows and gardens',
    role: 'Seed disperser and prey species',
    fact: 'Wood mice are small nocturnal animals that feed on seeds, fruits and insects.'
  },

  'northern-lapwing': {
    name: 'Northern Lapwing',
    img: LapwingImg,
    type: 'Bird',
    habitat: 'Wetlands and open fields',
    role: 'Wetland bird',
    fact: 'Northern lapwings are graceful birds often associated with open wetland and farmland areas.'
  },

  'mallard-duck': {
    name: 'Mallard Duck',
    img: MallardImg,
    type: 'Bird',
    habitat: 'Rivers, ponds and wetlands',
    role: 'Water quality indicator',
    fact: 'Mallard ducks are common river birds and can help children understand river ecosystems.'
  },

  'mandarin-duck': {
    name: 'Mandarin Duck',
    img: MandarinImg,
    type: 'Bird',
    habitat: 'Ponds, lakes and sheltered waters',
    role: 'Water bird',
    fact: 'Mandarin ducks are known for their colourful feathers and are often found near calm water.'
  },

  'pied-avocet': {
    name: 'Pied Avocet',
    img: AvocetImg,
    type: 'Bird',
    habitat: 'Wetlands and shallow water',
    role: 'Wading bird',
    fact: 'Pied avocets have distinctive curved bills and search for food in shallow water.'
  },

  'common-buzzard': {
    name: 'Common Buzzard',
    img: BuzzardImg,
    type: 'Bird',
    habitat: 'Woodland edges and open countryside',
    role: 'Bird of prey',
    fact: 'Common buzzards soar high in the sky and use sharp eyesight to search for prey.'
  },

  'mute-swan': {
    name: 'Mute Swan',
    img: MuteSwan,
    type: 'Bird',
    habitat: 'Lakes, rivers and ponds',
    role: 'Water bird',
    fact: 'Mute swans are elegant birds often seen on lakes and slow-moving rivers.'
  },

  'peregrine-falcon': {
    name: 'Peregrine Falcon',
    img: PeregrineFalconImg,
    type: 'Bird',
    habitat: 'Cliffs, tall buildings and open hunting areas',
    role: 'Top predator',
    fact: 'Peregrine falcons are among the fastest birds in the world.'
  },

  'common-lizard': {
    name: 'Common Lizard',
    img: CommonLizardImg,
    type: 'Reptile',
    habitat: 'Sunny rocks, grassland and woodland edges',
    role: 'Small insect predator',
    fact: 'Common lizards enjoy warm sunny places and help control small insect populations.'
  },

  'common-toad': {
    name: 'Common Toad',
    img: CommonToadImg,
    type: 'Amphibian',
    habitat: 'Damp gardens, ponds and wetlands',
    role: 'Amphibian predator',
    fact: 'Common toads prefer damp habitats and are often active during wet weather.'
  },

  'grass-snake': {
    name: 'Grass Snake',
    img: GrassSnakeImg,
    type: 'Reptile',
    habitat: 'Wetlands, grassland and pond edges',
    role: 'Predator of amphibians and fish',
    fact: 'Grass snakes are harmless snakes often found near water.'
  },

  'great-crested-newt': {
    name: 'Great Crested Newt',
    img: GreatCrestedNewtImg,
    type: 'Amphibian',
    habitat: 'Clean ponds and wetland habitats',
    role: 'Protected species',
    fact: 'Great crested newts are protected in the UK and are important indicators of healthy pond habitats.'
  },

  'red-eared-terrapin': {
    name: 'Red-eared Terrapin',
    img: RedEaredTerrapinImg,
    type: 'Reptile',
    habitat: 'Freshwater ponds and lakes',
    role: 'Freshwater reptile',
    fact: 'Red-eared terrapins are freshwater turtles recognised by the red markings near their heads.'
  },

  'common-frog': {
    name: 'Common Frog',
    img: CommonFrogImg,
    type: 'Amphibian',
    habitat: 'Ponds, gardens and wetlands',
    role: 'Pond ecosystem species',
    fact: 'Common frogs are familiar amphibians that often appear around ponds during spring.'
  }
};

const AnimalDetailPage = () => {
  const { animalId } = useParams();


  useEffect(() => {
  window.scrollTo(0, 0);

  const savedTasks = JSON.parse(localStorage.getItem('eco-tasks')) || {
    quizAnswered: 0,
    galleryViewed: 0,
    policyMade: 0
  };

  savedTasks.galleryViewed += 1;

  localStorage.setItem('eco-tasks', JSON.stringify(savedTasks));
}, [animalId]);

  const animal = animalDetails[animalId];

  if (!animal) {
    return (
      <>
        <Navbar />

        <main className="animal-detail-page">
          <section className="animal-detail-card">
            <div className="animal-detail-content">
              <h1>Animal Not Found</h1>

              <p>This animal page does not exist yet.</p>

              <Link to="/biodiversity" className="btn-kid">
                ← Back to Wildlife Gallery
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="animal-detail-page">
        <section className="animal-detail-card">
          <img
            src={animal.img}
            alt={animal.name}
            className="animal-detail-image"
          />

          <div className="animal-detail-content">
            <span className="page-badge">
              {animal.type}
            </span>

            <h1>{animal.name}</h1>

            <p>{animal.fact}</p>

            <div className="animal-info-grid">
              <div>
                <strong>Habitat</strong>
                <p>{animal.habitat}</p>
              </div>

              <div>
                <strong>Ecological Role</strong>
                <p>{animal.role}</p>
              </div>
            </div>

            <Link to="/biodiversity" className="btn-kid">
              ← Back to Wildlife Gallery
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AnimalDetailPage;