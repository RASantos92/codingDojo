const express = require("express"),
  app = express(),
  cors = require("cors"),
  port = 8000,
  faker = require("faker"),
  server = app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors());
app.use(express.json());

class User {
  constructor() {
    this.id = faker.random.number();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}
class Company {
  constructor() {
    this.id = faker.random.number();
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.address = {
      streetName: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.county(),
    };
  }
}

var company = new Company();
console.log(company);

var user = new User();
console.log(user);

app.get("/api/user/new", (req, res) => {
  res.json({ result: new User() });
});
app.get("/api/companies/new", (req, res) => {
  res.json({ result: new Company() });
});
app.get("/api/user/company", (req, res) => {
  res.json({ company: new Company(), user: new User() });
});
