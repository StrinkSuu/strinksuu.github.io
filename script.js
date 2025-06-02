// Theme toggle
const toggle = document.getElementById("toggle-mode");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// Contact form submission
const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      message.textContent = "Message sent successfully!";
      form.reset();
    } else {
      message.textContent = "Oops! Something went wrong.";
    }
  } catch (err) {
    message.textContent = "Error: Could not send message.";
  }
});
