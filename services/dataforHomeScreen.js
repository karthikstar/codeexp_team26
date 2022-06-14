const cycle = require('../assets/cycle.png');
const yoga = require('../assets/yoga.png');
const walk = require('../assets/walk.png');
const next = require('../assets/next.png');

const DATA = [
    {
      name: 'Cycling',
      status: 85,
      image: cycle,
      lightColor: '#f8e4d9',
      color: '#fcf1ea',
      darkColor: '#fac5a4',
    },
    {
      name: 'Walking',
      status: 25,
      image: walk,
      lightColor: '#d7f0f7',
      color: '#e8f7fc',
      darkColor: '#aceafc',
    },
    {
      name: 'Yoga',
      status: 85,
      image: yoga,
      lightColor: '#dad5fe',
      color: '#e7e3ff',
      darkColor: '#8860a2',
    },
  ];

export function getData() {
    return DATA;
}