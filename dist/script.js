// Script for SportsConnect

// Handle "Create Team" button click
document.getElementById('create-team-btn').addEventListener('click', () => {
  alert('Team creation feature coming soon!');
});

// Handle "Update Profile" button click
document.getElementById('update-profile-btn').addEventListener('click', () => {
  alert('Profile update feature coming soon!');
});

// Dynamically load more events (example functionality)
const events = [
  'Cricket Match - October 15',
  'Badminton Championship - November 10',
  'Table Tennis Tournament - December 1'
];

const eventList = document.getElementById('event-list');
events.forEach(event => {
  const li = document.createElement('li');
  li.textContent = event;
  eventList.appendChild(li);
});