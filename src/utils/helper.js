const firstName = [
  "Emma",
  "Isabella",
  "Emily",
  "Madison",
  "Ava",
  "Olivia",
  "Sophia",
  "Abigail",
  "Elizabeth",
  "Chloe",
  "Samantha",
  "Addison",
  "Natalie",
  "Mia",
  "Alexis",
  "Alyssa",
  "Jacob",
  "Michael",
  "Ethan",
  "Joshua",
  "Daniel",
  "Alexander",
  "Anthony",
  "William",
  "Christopher",
  "Matthew",
  "Jayden",
  "Andrew",
  "Joseph",
  "David",
  "Noah",
  "Aiden",
  "James",
  "Ryan",
  "Logan",
  "John",
  "Nathan",
  "Elijah",
  "Christian",
  "Gabriel",
  "Benjamin",
  "Jonathan",
  "Tyler",
  "Samuel",
  "Nicholas",
  "Gavin",
  "Dylan",
];

const lastName = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Miller",
  "Davis",
  "Garcia",
  "Rodriguez",
  "Wilson",
  "Martinez",
  "Anderson",
  "Taylor",
  "Thomas",
  "Hernandez",
  "Moore",
  "Martin",
  "Jackson",
  "Thompson",
  "White",
  "Lopez",
  "Lee",
  "Gonzalez",
  "Harris",
  "Clark",
  "Lewis",
  "Robinson",
  "Walker",
  "Perez",
  "Hall",
];

export const generateRandomName = () =>
  firstName[Math.floor(Math.random() * firstName.length)] +
  " " +
  lastName[Math.floor(Math.random() * lastName.length)];

const comments = [
  "Awesome Video 💯",
  "Nice one",
  "What a video",
  "Great Content 🔥 ❤",
  "Hiiii",
  "Live Wohooo",
  "Go Fast ❤",
  "Crazzzzyyy 🔥",
];

export const generateRandomComment = () => {
  return comments[Math.floor(Math.random() * comments.length)];
};

export const randomIdGenerator = () => {
  var chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz".split("");

  var str = "";
  for (var i = 0; i < 10; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
};
