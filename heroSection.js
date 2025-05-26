document.getElementById("hero-section").innerHTML = `
  <section id="hero-section" class="relative h-[600px] bg-gradient-to-r from-[#1e3a8a] to-[#0d9488] flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 particles">
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
    </div>
    <div class="container mx-auto px-4 text-center text-white relative z-10">
      <h2 class="text-4xl sm:text-5xl font-extrabold mb-6 animate-fade-in">Welcome to Cueslife</h2>
      <p class="text-lg sm:text-xl mb-12 max-w-2xl mx-auto animate-fade-in">
        Embark on your wellness journey with our expert-guided fitness services.
      </p>
      <div class="space-y-8 max-w-5xl mx-auto">
        <a href="services.html" class="block bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
          <h3 class="text-xl font-semibold text-[#1e3a8a] mb-2">View Services</h3>
          <p class="text-gray-600">Explore our range of fitness programs tailored to your goals.</p>
        </a>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <a href="contact.html" class="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 class="text-xl font-semibold text-[#1e3a8a] mb-2">Get in Touch</h3>
            <p class="text-gray-600">Contact our team for personalized guidance and support.</p>
          </a>
          <a href="booking.html" class="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 class="text-xl font-semibold text-[#1e3a8a] mb-2">Join Now</h3>
            <p class="text-gray-600">Start your fitness journey with Cueslife today.</p>
          </a>
        </div>
      </div>
    </div>
    <style>
      .particles {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .particle {
        position: absolute;
        background: #facc15;
        border-radius: 50%;
        opacity: 0.5;
        animation: float 15s infinite;
      }
      .particle:nth-child(1) { width: 20px; height: 20px; top: 20%; left: 10%; animation-delay: 0s; }
      .particle:nth-child(2) { width: 15px; height: 15px; top: 50%; left: 30%; animation-delay: 3s; }
      .particle:nth-child(3) { width: 25px; height: 25px; top: 70%; left: 50%; animation-delay: 6s; }
      .particle:nth-child(4) { width: 10px; height: 10px; top: 30%; left: 70%; animation-delay: 9s; }
      .particle:nth-child(5) { width: 18px; height: 18px; top: 80%; left: 90%; animation-delay: 12s; }
      @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-50px); }
        100% { transform: translateY(0); }
      }
    </style>
  </section>
`;
