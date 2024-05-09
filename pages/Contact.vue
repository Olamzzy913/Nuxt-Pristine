<template>
  <Html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      />

      <title>Contact Pristine</title>
    </head>
  </Html>
  <Navigation />
  <!-- Hero Section -->
  <section>
    <div class="relative block" id="hero-section">
      <div class="block relative shrink-0 w-full max-w-full">
        <div class="relative overflow-hidden">
          <div class="heroP1">
            <div class="heroP5 h-[400px]">
              <div class="text-center py-[40px] px-[10px] smi:py-[70px]">
                <div class="showcase-text shrink-0 relative items-center">
                  <span
                    class="text-[#F0BB71] px-[10px] py-[5px] text-[14px] font-semibold inline-block bg-[rgba(186,159,40,0.04)] rounded-[3px]"
                    >A touch of perfection.</span
                  >
                  <h1
                    class="text-white font-bold leading-[1.1] block text-[28px] md:text-[30px] slg:text-[36px] mb-[20px]"
                  >
                    Connect With Us
                  </h1>
                  <p
                    class="block text-white leading-[1.4] font-normal pr-0 text-[18px] smi:text-[22px] md:text-[18px] slg:text-[20px] mb-[29px] smi:mb-[40px]"
                  >
                    let’s give you The touch of perfection you deserve, Nobody
                    does it better.
                  </p>
                  <div class="">
                    <NuxtLink
                      to="/contact"
                      class="px-[24px] py-[14px] font-medium text-[16px] text-white bg-navText rounded-[6px] hover:border transition duration-500 hover:border-navText hover:text-navText hover:bg-transparent"
                      >Get Started</NuxtLink
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Map Section -->
  <section class="py-[70px] sm:py-[120px]">
    <div
      class="w-full smi:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] slg:max-w-[1110px] mx-auto px-[.75rem]"
    >
      <div class="block w-full mx-auto px-[.75rem]">
        <div class="w-full h-[350px] max-w-full flex-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.1000400936623!2d3.347779273730588!3d6.634496621866159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93e8f28489b9%3A0x97317078b7d4f248!2s53%20Ogunnusi%20Rd%2C%20Ojodu%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1704357339465!5m2!1sen!2sng"
            width="100%"
            height="450"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact form Section -->
  <section id="contact" class="py-[40px] md:py-[120px]">
    <div
      class="w-full smi:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] slg:max-w-[1110px] mx-auto px-[.75rem]"
    >
      <div class="flex flex-wrap justify-center">
        <div
          class="shrink-0 w-full md:w-[75%] lg:w-[41.666%] max-w-full px-[1.5rem]"
        >
          <div class="relative">
            <h2
              class="text-[14px] md:text-[20px] block text-navText font-bold leading-[1.3] relative"
            >
              Pristine
            </h2>
          </div>
          <div class="headTitle1 relative block mb-[20px]">
            <h2
              class="relative block text-[24px] md:text-[30px] font-bold leading-[1.3] mb-[12px]"
            >
              Get in Touch
            </h2>
          </div>
          <p class="font-medium leading-[20px] text-[16px] mb-[60px]">
            Ready to elevate your household staffing experience,
            procurement/personal shopping experience or enhance your talent
            acquisition process? We’re here to assist you every step of the way.
            Connect with us to explore bespoke solutions tailored to your unique
            needs.
          </p>

          <ul class="mt-[40px]">
            <li
              class="text-[14px] slg:text-[18px] font-semibold mb-[10px] pb-[15px] border-b border-[#DBDEE9]"
            >
              <a href="ser_dom.html">Professional Domestic Recruitment</a>
              <i
                class="fa-solid fa-circle-dot float-right mt-1 text-navText"
              ></i>
            </li>
            <li
              class="text-[14px] slg:text-[18px] font-semibold mb-[10px] pb-[15px] border-b border-[#DBDEE9]"
            >
              <a href="ser_prof.html">Corporate Professionals Recruitment</a>
              <i
                class="fa-solid fa-circle-dot float-right mt-1 text-navText"
              ></i>
            </li>
            <li
              class="text-[14px] slg:text-[18px] font-semibold mb-[10px] pb-[15px] border-b border-[#DBDEE9]"
            >
              <a href="ser_pro.html">Procurement/ Personal Shopping </a
              ><i
                class="fa-solid fa-circle-dot float-right mt-1 text-navText"
              ></i>
            </li>
          </ul>
        </div>

        <div
          class="shrink-0 w-full smi:w-[83.333%] lg:w-[50%] max-w-full px-[1.5rem]"
        >
          <div
            class="relative block border-2 rounded-lg border-gray-500 p-[30px] pb-[80px]"
          >
            <form method="post" name="emailContact">
              <div class="flex-wrap relative block max-w-full w-full">
                <input
                  id="firstName"
                  name="userFirstName"
                  type="text"
                  placeholder="First Name"
                  class="bg-[#F0F0F0] py-3 max-w-full w-full mb-7 outline-none"
                />
                <input
                  id="lastName"
                  name="userLastName"
                  type="text"
                  placeholder="Last Name"
                  class="bg-[#F0F0F0] py-3 max-w-full w-full mb-7 outline-none"
                />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  class="bg-[#F0F0F0] py-3 max-w-full w-full mb-7 outline-none"
                />
                <textarea
                  id="msg"
                  name="userMessage"
                  placeholder="message"
                  cols="20"
                  class="bg-[#F0F0F0] py-3 max-w-full w-full h-[70px] mb-7 outline-none"
                ></textarea>
                <div class="block float-right">
                  <input
                    type="submit"
                    name="send"
                    value="Submit"
                    class="px-[24px] py-[14px] font-medium text-[16px] text-white bg-navText rounded-[6px] hover:border transition duration-500 hover:border-navText hover:text-navText hover:bg-transparent"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-[40px] md:py-[120px]">
    <div
      class="w-full smi:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] slg:max-w-[1110px] mx-auto px-[.75rem]"
    >
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-auto p-6 rounded-lg border-2"
      >
        <div class="text-center block relative">
          <i class="fa-solid fa-location-dot text-green-700"></i>
          <h3 class="text-[14px] font-medium">Headquater</h3>
          <p class="text-[10px] font-normal">53 Ogunnusi road</p>
        </div>

        <div class="text-center block relative">
          <i class="fa-sharp fa-solid fa-envelope text-blue-800"></i>
          <h3 class="text-[14px] font-medium">Email</h3>
          <p class="text-[10px] font-normal">
            <a href="mailto:havencareinfo@gmail.com">havencareinfo@gmail.com</a>
          </p>
        </div>

        <div class="text-center block relative">
          <i class="bx bxl-whatsapp text-green-700"></i>
          <h3 class="text-[14px] font-medium">Whatsapp</h3>
          <p class="text-[10px] font-normal">
            <a href="https://api.whatsapp.com/send?phone=+234708-895-9800"
              >0708-895-9800</a
            >
          </p>
        </div>

        <div class="text-center block relative">
          <i class="bx bxs-phone-call text-green-800"></i>
          <h3 class="text-[14px] font-medium">Phone</h3>
          <p class="text-[10px] font-normal">
            <a href="tel:+234708-895-9800">0708-895-9800</a>
          </p>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>
