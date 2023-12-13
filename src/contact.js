export function loadContact() {
  const content = document.getElementById("content");
  const contactPage = document.createElement("div");
  const contact = document.createElement("h1");

  contactPage.id = "contactPage";
  contact.textContent = "Contact us";
  contactPage.appendChild(contact);
  content.appendChild(contactPage);
}
