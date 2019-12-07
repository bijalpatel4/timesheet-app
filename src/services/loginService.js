var usersData = [
  {
    username: "bijalpatel8@gmail.com",
    password: "12345",
    firstname: "Bijal",
    lastname: "Patel",
    employeeId: "856733",
    managerName: "Suresh",
    isAdmin: false
  },
  {
    username: "paraspatel89@gmail.com",
    password: "56789",
    firstname: "paras",
    lastname: "patel",
    employeeId: "856352",
    managerName: "Suresh",
    isAdmin: false
  },
  {
    username: "admin@admin.com",
    password: "admin",
    firstname: "admin",
    lastname: "patel",
    employeeId: "342345",
    managerName: "Amif",
    isAdmin: true
  }
];

export function login(username, password, isAdmin) {
  console.log("Total user", usersData);
  const user = usersData.find(function(user) {
    return user.username === username && user.password === password;
  });
  return user;
}

export default function register(user) {
  usersData.push(user);
  console.log("After adiing user", usersData);
}

export function getUserFromLocalStorage() {
  if (localStorage.getItem("user") != null) {
    return JSON.parse(localStorage.getItem("user"));
  }
  return null;
}
