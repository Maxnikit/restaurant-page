export function loadContact() {
  const content = document.getElementById("content");
  const contactPage = document.createElement("div");
  const header = document.createElement("h1");
  const female = document.createElement("img");
  const male = document.createElement("img");
  const invite = document.createElement("p");
  const details = document.createElement("ul");
  const mail = document.createElement("a");
  const phone = document.createElement("a");
  const twitter = document.createElement("a");

  contactPage.id = "contactPage";
  header.classList = "header";
  header.textContent = "Contact us";
  female.id = "female";
  female.src = "../src/assets/female.png";
  female.width = "250";
  male.id = "male";
  male.src = "../src/assets/male.png";
  male.width = "250";
  invite.id = "invite";
  invite.textContent =
    "Want to become a part of the Durrr Burger family? Reach out to us today using the details below or swing by for a chat!";
  mail.href = "mailto:durrr.burger@nosweat.com";
  mail.textContent = "durrr.burger@nosweat.com";
  phone.textContent = "+1 (555) 555-5555";
  phone.href = "tel:+15555555555";
  twitter.href = "https://twitter.com/durrr_burger";
  twitter.textContent = "@durrr_burger";
  details.id = "details";
  details.appendChild(mail);
  details.appendChild(phone);
  details.appendChild(twitter);

  contactPage.appendChild(header);
  contactPage.appendChild(male);
  contactPage.appendChild(female);
  contactPage.appendChild(invite);
  contactPage.appendChild(details);
  content.appendChild(contactPage);
}
// TODO add details list
