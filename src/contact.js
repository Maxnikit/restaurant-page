export function loadContact() {
  const content = document.getElementById("content");
  const currentPage = document.createElement("currentPage");
  const contact = document.createElement("h1");
  contact.textContent = "Contact us";
  currentPage.appendChild(contact);
  content.appendChild(currentPage);
}
