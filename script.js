// Footer year (sirf jaha #year hoga, waha chalega)
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Join form validation (sirf join.html par chalega)
const joinForm = document.getElementById("join-form");
if (joinForm) {
  const successMsg = document.getElementById("success-msg");

  joinForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let hasError = false;

    function showError(id, condition) {
      const el = document.getElementById(id);
      if (!el) return;
      if (condition) {
        el.style.display = "block";
        hasError = true;
      } else {
        el.style.display = "none";
      }
    }

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const role = document.getElementById("role").value;
    const skills = document.getElementById("skills").value.trim();
    const reason = document.getElementById("reason").value.trim();
    const time = document.getElementById("time").value.trim();

    showError("error-name", !name);
    showError(
      "error-email",
      !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    );
    showError("error-role", !role);
    showError("error-skills", skills.length < 10);
    showError("error-reason", reason.length < 15);
    showError("error-time", time.length < 2);

    if (!hasError && successMsg) {
      successMsg.style.display = "block";
    } else if (successMsg) {
      successMsg.style.display = "none";
    }
  });
}


