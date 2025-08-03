document.querySelectorAll(".list img").forEach(img => {
  img.onclick = function () {
    const info = document.createElement("div");
    info.style = `
      background: black;
      color: silver;
      width: ${img.width}px;
      height: ${img.height}px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 1.1rem;
    `;
    info.innerHTML = img.dataset.info;
    img.replaceWith(info);
    info.onclick = () => {
      info.replaceWith(img);
    };
  };
});

      function toggleMode() {
      document.body.classList.toggle("light-mode");
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
    }
    window.onload = function () {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light") {
        document.body.classList.add("light-mode");
      } else {
        document.body.classList.add("dark-mode");
      }
    };
    function checkQuiz() {
      const answers = { q1: 'b', q2: 'c', q3: 'b' };
      let score = 0;
      for (let key in answers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) score++;
      }
      const resultDiv = document.getElementById("quiz-result");
      resultDiv.className = score === 3 ? '' : 'low-score';
      resultDiv.innerHTML = `You scored ${score} out of 3. ${score === 3 ? '🎉 Excellent!' : 'Try again to improve!'}`;
    }