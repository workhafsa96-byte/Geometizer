

    function calculateCircle() {
      const radius = parseFloat(document.getElementById("radius").value);
      const result = document.getElementById("result");
      const pi = 3.142;

      if (isNaN(radius) || radius <= 0) {
        result.innerHTML = "Please enter a valid radius";
        return;
      }

      const circumference = 2 * pi * radius;
      const area = pi * radius * radius;

      result.innerHTML = `
        The circumference is: ${circumference.toFixed(2)} <br>
        The area is: ${area.toFixed(2)}
      `;
    }