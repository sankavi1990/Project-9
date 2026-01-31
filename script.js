// Home Page
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// BuyNow Page
function toggleDropdown() {
  const dropdown = document.getElementById("paymentDropdown");
  const card = document.getElementById("paymentCard");

  // hide payment card when dropdown opens
  card.style.display = "none";

  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

function confirmPayment() {
  const selected = document.querySelector('input[name="pay"]:checked');
  if (!selected) {
    alert("Please select a payment method");
    return;
  }

  const logo = document.getElementById("payLogo");
  const card = document.getElementById("paymentCard");

  if (selected.value === "gpay") {
    logo.src = "Images/gpay.png";
  } else if (selected.value === "phonepe") {
    logo.src = "Images/phonepe.png";
  } else {
    logo.src = "Images/paytm.png";
  }

  document.getElementById("paymentDropdown").style.display = "none";
  card.style.display = "flex"; // show only AFTER OK
}


function completePayment() {
  const paymentCard = document.getElementById("paymentCard");

  // Replace content with success message
  paymentCard.innerHTML = `
    <div style="
      width:100%;
      text-align:center;
      font-size:20px;
      font-weight:600;
      padding:40px 10px;
    ">
      ✅ Payment Done Successfully
    </div>
  `;

  // Redirect after 2 seconds
  setTimeout(() => {
    window.location.href = "AfterPayment.html"; // change page name if needed
  }, 2000);
}



// Products Page
function applyFilter() {

  const productView = document.getElementById("productView");

  productView.innerHTML = `
    
    <section class="top-images">
      <img src="Images/image 86.png">
      <img src="Images/headphone.png">
    </section>

    <section class="card-grid">

      <div class="product-cardp">
        <div class="card-top">
          <div class="text">
            <p class="offer">25% Big Offer Coming Soon</p>
            <p class="name">Airpad Pro</p>
          </div>
          <span class="heart">♡</span>
        </div>

        <img src="Images/headphones.png" class="product-img">

        <p class="price">$29</p>

        <div class="card-bottom">
          <span class="cart">🛒</span>
          <a href="Buynow.html">
          <button class="buy-btn">Buy Now</button>
          </a>
          <img src="Images/group.png" class="users">
        </div>
      </div>

      <!-- duplicate cards if needed -->
      <div class="product-cardp">
        <div class="card-top">
          <div class="text">
            <p class="offer">25% Big Offer Coming Soon</p>
            <p class="name">Airpad Pro</p>
          </div>
          <span class="heart">♡</span>
        </div>

        <img src="Images/image 87.png" class="product-img">

        <p class="price">$29</p>

        <div class="card-bottom">
          <span class="cart">🛒</span>
          <a href="Buynow.html">
          <button class="buy-btn">Buy Now</button>
          </a>
          <img src="Images/group.png" class="users">
        </div>
      </div>


      <div class="product-cardp">
        <div class="card-top">
          <div class="text">
            <p class="offer">25% Big Offer Coming Soon</p>
            <p class="name">Airpad Pro</p>
          </div>
          <span class="heart">♡</span>
        </div>

        <img src="Images/image 88.png" class="product-img">

        <p class="price">$29</p>

        <div class="card-bottom">
          <span class="cart">🛒</span>
          <a href="Buynow.html">
          <button class="buy-btn">Buy Now</button>
          </a>
          <img src="Images/group.png" class="users">
        </div>
      </div>


      <div class="product-cardp">
        <div class="card-top">
          <div class="text">
            <p class="offer">25% Big Offer Coming Soon</p>
            <p class="name">Airpad Pro</p>
          </div>
          <span class="heart">♡</span>
        </div>

        <img src="Images/image 85.png" class="product-img">

        <p class="price">$29</p>

        <div class="card-bottom">
          <span class="cart">🛒</span>
          <a href="Buynow.html">
          <button class="buy-btn">Buy Now</button>
          </a>
          <img src="Images/group.png" class="users">
        </div>
      </div>


      <div class="product-cardp">
        <div class="card-top">
          <div class="text">
            <p class="offer">25% Big Offer Coming Soon</p>
            <p class="name">Airpad Pro</p>
          </div>
          <span class="heart">♡</span>
        </div>

        <img src="Images/image 90.png" class="product-img">

        <p class="price">$29</p>

        <div class="card-bottom">
          <span class="cart">🛒</span>
          <a href="Buynow.html">
          <button class="buy-btn">Buy Now</button>
          </a>
          <img src="Images/group.png" class="users">
        </div>
      </div>


      <div class="product-cardp">
        <div class="card-top">
          <div class="text">
            <p class="offer">25% Big Offer Coming Soon</p>
            <p class="name">Airpad Pro</p>
          </div>
          <span class="heart">♡</span>
        </div>

        <img src="Images/image 91.png" class="product-img">

        <p class="price">$29</p>

        <div class="card-bottom">
          <span class="cart">🛒</span>
          <a href="Buynow.html">
          <button class="buy-btn">Buy Now</button>
          </a>
          <img src="Images/group.png" class="users">
        </div>
      </div>


      <div class="product-cardp">
        <div class="card-top">
          <div class="text">
            <p class="offer">25% Big Offer Coming Soon</p>
            <p class="name">Airpad Pro</p>
          </div>
          <span class="heart">♡</span>
        </div>

        <img src="Images/image 92.png" class="product-img">

        <p class="price">$29</p>

        <div class="card-bottom">
          <span class="cart">🛒</span>
        <a href="Buynow.html">
          <button class="buy-btn">Buy Now</button>
          </a>
          <img src="Images/group.png" class="users">
        </div>
      </div>


      <div class="product-cardp">
        <div class="card-top">
          <div class="text">
            <p class="offer">25% Big Offer Coming Soon</p>
            <p class="name">Airpad Pro</p>
          </div>
          <span class="heart">♡</span>
        </div>

        <img src="Images/image 66.png" class="product-img">

        <p class="price">$29</p>

        <div class="card-bottom">
          <span class="cart">🛒</span>
          <a href="Buynow.html">
          <button class="buy-btn">Buy Now</button>
          </a>
          <img src="Images/group.png" class="users">
        </div>
      </div>


      <div class="product-cardp">
        <div class="card-top">
          <div class="text">
            <p class="offer">25% Big Offer Coming Soon</p>
            <p class="name">Airpad Pro</p>
          </div>
          <span class="heart">♡</span>
        </div>

        <img src="Images/image 85.png" class="product-img">

        <p class="price">$29</p>

        <div class="card-bottom">
          <span class="cart">🛒</span>
          <a href="Buynow.html">
          <button class="buy-btn">Buy Now</button>
          </a>
          <img src="Images/group.png" class="users">
        </div>
      </div>

    </section>
  `;
}
