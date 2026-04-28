const slots = document.querySelectorAll(".slot");
const selectedSlot = document.getElementById("selectedSlot");
const bookingForm = document.getElementById("bookingForm");
const bookingNotice = document.getElementById("bookingNotice");

slots.forEach((slot) => {
  slot.addEventListener("click", () => {
    slots.forEach((item) => item.classList.remove("selected"));
    slot.classList.add("selected");
    selectedSlot.textContent = `Selected slot: ${slot.dataset.slot}`;
  });
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  bookingNotice.hidden = false;
  bookingForm.reset();
});
