// Toy Category Filter

function filterToys(category) {

    let toys = document.querySelectorAll(".toy-card");

    toys.forEach(function(toy) {

        if (category === "all") {
            toy.style.display = "block";
        }
        else if (toy.classList.contains(category)) {
            toy.style.display = "block";
        }
        else {
            toy.style.display = "none";
        }

    });
}


// Buy Now Button

function orderToy(toyName) {

    alert(
        "You selected: " + toyName +
        "\nPlease complete the inquiry form to place your order."
    );

    window.location.href = "contact.html";
}


// Inquiry Form

let form = document.getElementById("orderForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let toy = document.getElementById("toy").value;
        let quantity = document.getElementById("quantity").value;

        alert(
            "Thank you, " + name +
            "!\n\nToy: " + toy +
            "\nQuantity: " + quantity +
            "\n\nYour inquiry has been received."
        );

        form.reset();

    });

}
    document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-links a').forEach(link => {
      const linkPath = link.getAttribute('href').split('/').pop();
      if (linkPath === currentPath) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  });
