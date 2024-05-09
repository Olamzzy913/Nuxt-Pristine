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

      <title>Pristine - Service</title>
    </head>
  </Html>
  <Navigation />
  <!-- Hero Section -->
  <section>
    <div class="relative block" id="hero-section">
      <div class="block relative shrink-0 w-full max-w-full">
        <div class="relative overflow-hidden">
          <div class="heroP1">
            <div class="heroP3 h-[400px]">
              <div class="text-center py-[40px] px-[10px] smi:py-[70px]">
                <div class="showcase-text shrink-0 relative items-center">
                  <span
                    class="text-[#F0BB71] px-[10px] py-[5px] text-[14px] font-semibold inline-block bg-[rgba(186,159,40,0.04)] rounded-[3px]"
                    >A touch of perfection.</span
                  >
                  <h1
                    class="text-white font-bold leading-[1.1] block text-[28px] md:text-[30px] slg:text-[36px] mb-[20px]"
                  >
                    We Offer Best services
                  </h1>
                  <p
                    class="block text-white leading-[1.4] font-medium pr-0 text-[16px] mb-[29px] smi:mb-[40px]"
                  >
                    let’s give you The touch of perfection you deserve, Nobody
                    does it better.
                  </p>
                  <div class="">
                    <a
                      href="contact.html#contact"
                      class="px-[24px] py-[14px] font-medium text-[16px] text-white bg-navText rounded-[6px] hover:border transition duration-500 hover:border-navText hover:text-navText hover:bg-transparent"
                      >Get Started</a
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

  <!-- Domestic Section -->
  <section class="py-[40px] md:pt-[120px]">
    <div
      class="w-full smi:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] slg:max-w-[1110px] mx-auto px-[.75rem]"
    >
      <div class="flex flex-wrap justify-center">
        <div
          class="shrink-0 w-full smi:w-[83.333%] lg:w-[50%] max-w-full px-[1.5rem]"
        >
          <div class="block">
            <img src="assets/images/dsr.png" alt="" class="w-full" />
          </div>
        </div>

        <div
          class="shrink-0 w-full md:w-[75%] lg:w-[41.666%] max-w-full px-[1.5rem] mt-[30px] lg:mt-0"
        >
          <div class="relative">
            <h2
              class="text-[14px] md:text-[20px] block text-navText font-bold leading-[1.3] relative"
            >
              Pristine
            </h2>
          </div>
          <div class="headTitle1 relative block mb-[50px]">
            <h2
              class="relative block text-[24px] md:text-[30px] font-bold leading-[1.3] mb-[12px]"
            >
              Domestic Staff Recuitment
            </h2>
          </div>
          <p class="font-medium leading-[20px] text-[12px] mb-[60px]">
            Step into a realm of refined living with our Professional Household
            Staff Recruitment Service. We specialize in handpicking a team of
            dedicated professionals who go beyond mere household tasks; they
            become an integral part of crafting an elevated lifestyle tailored
            to your preferences.
            <br />
            <br />

            From experienced nannies who nurture your children with care to
            skilled housekeepers ensuring impeccable order, our recruitment
            service is a gateway to a home where every detail is meticulously
            tended to. Join us in transforming your residence into a home of
            excellence, where the art of living is perfected through our
            commitment to unparalleled household staff recruitment.
          </p>
          <NuxtLink
            to="/Domestic"
            class="px-[24px] py-[14px] font-medium text-[16px] text-white bg-navText rounded-[6px] hover:border transition duration-500 hover:border-navText hover:text-navText hover:bg-transparent"
            >Explore Our Services</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>

  <!-- Professional Section -->
  <section class="py-[40px] md:pt-[120px]">
    <div
      class="w-full smi:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] slg:max-w-[1110px] mx-auto px-[.75rem]"
    >
      <div class="flex flex-wrap justify-center">
        <div
          class="shrink-0 w-full md:w-[75%] lg:w-[46.666%] max-w-full px-[1.5rem] pb-[1.5rem]"
        >
          <div class="relative">
            <h2
              class="text-[14px] md:text-[20px] block text-navText font-bold leading-[1.3] relative"
            >
              Pristine
            </h2>
          </div>
          <div class="headTitle1 relative block mb-[50px]">
            <h2
              class="relative block text-[24px] md:text-[30px] font-bold leading-[1.3] mb-[12px]"
            >
              Corporate Professionals Recruitment
            </h2>
          </div>
          <p class="font-medium leading-[20px] text-[12px] mb-[60px]">
            Step into a new era of corporate excellence with our Corporate
            Professionals Recruitment Service. We understand that the heartbeat
            of any successful organization is its people. That's why we go
            beyond traditional recruitment, meticulously selecting professionals
            who don't just meet job requirements but embody the spirit of
            innovation and leadership.
            <br /><br />
            At the core of our service is a commitment to building teams that
            drive success. Whether you seek visionary leaders, executives, or
            creative minds, our recruitment process is tailored to identify and
            attract the brightest talents in the industry.
            <br /><br />
            Elevate your workforce with us, where each placement isn't just a
            hire but a strategic investment in the future of your company.
          </p>
          <NuxtLink
            to="/Professionals"
            class="px-[24px] py-[14px] font-medium text-[16px] text-white bg-navText rounded-[6px] hover:border transition duration-500 hover:border-navText hover:text-navText hover:bg-transparent"
            >Explore Our Services</NuxtLink
          >
        </div>

        <div
          class="shrink-0 w-full md:w-[75%] lg:w-[50%] max-w-full px-[1.5rem] mt-[30px] lg:mt-0"
        >
          <div class="block">
            <img src="assets/images/cpr.png" alt="" class="w-full" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Procurement Section -->
  <section class="py-[40px] md:pt-[120px]">
    <div
      class="w-full smi:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] slg:max-w-[1110px] mx-auto px-[.75rem]"
    >
      <div class="flex flex-wrap justify-center">
        <div
          class="shrink-0 w-full smi:w-[83.333%] lg:w-[50%] max-w-full px-[1.5rem]"
        >
          <div class="block">
            <img src="assets/images/pr.png" alt="" class="w-full" />
          </div>
        </div>

        <div
          class="shrink-0 w-full md:w-[75%] lg:w-[41.666%] max-w-full px-[1.5rem] mt-[30px] lg:mt-0"
        >
          <div class="relative">
            <h2
              class="text-[14px] md:text-[20px] block text-navText font-bold leading-[1.3] relative"
            >
              Pristine
            </h2>
          </div>
          <div class="headTitle1 relative block mb-[50px]">
            <h2
              class="relative block text-[24px] md:text-[30px] font-bold leading-[1.3] mb-[12px]"
            >
              Procurements
            </h2>
          </div>
          <p class="font-medium leading-[20px] text-[12px] mb-[60px]">
            Indulge in luxury and convenience with our Procurement/Personal
            Shopping Service, where your desires meet our expertise. We're not
            just personal shoppers; we're your gateway to a world of curated
            elegance and bespoke experiences.
            <br />
            <br />
            Whether you're envisioning a wardrobe upgrade, seeking unique gifts,
            or enhancing your living/office spaces, our dedicated team is poised
            to turn your vision into reality. With an eye for quality and a
            commitment to exceeding expectations, we redefine the art of
            personal shopping.
            <br />
            <br />
            Embark on a journey where your tastes take center stage, and let our
            Procurement/Personal Shopping Service be your guide to a lifestyle
            tailored exclusively for you. Elevate your shopping experience with
            us, where every purchase is a reflection of your distinct style and
            preferences.
          </p>
          <NuxtLink
            to="/Procurement"
            class="px-[24px] py-[14px] font-medium text-[16px] text-white bg-navText rounded-[6px] hover:border transition duration-500 hover:border-navText hover:text-navText hover:bg-transparent"
            >Explore Our Services</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section class="py-[70px] sm:py-[120px]">
    <div
      class="w-full smi:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] slg:max-w-[1110px] mx-auto px-[.75rem]"
    >
      <div class="block w-full mx-auto px-[.75rem]">
        <div class="flex justify-center flex-wrap">
          <div class="w-full max-w-full lg:w-[66.66%] shrink-0">
            <div class="headTitle relative block text-center mb-[50px]">
              <h2
                class="relative block text-[24px] md:text-[30px] font-bold leading-[1.3] mb-[12px]"
              >
                Why Choose Us
              </h2>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap relative">
          <div
            class="block relative shrink-0 smi:w-[50%] lg:w-[33.33%] w-full px-[12px] max-w-full"
          >
            <div class="relative block mb-[30px] px-[8px] py-[20px]">
              <div
                class="inline-block items-center mb-4 rounded-full border border-navText p-[15px] max-w-[3.2rem] w-[3.2rem] h-[3.2rem] bg-[rgba(235,118,118,0.21)]"
              >
                <i
                  class="fa-solid w-full h-full fa-medal text-center text-navText"
                ></i>
              </div>
              <h2 class="block font-bold mb-4 text-[18px]">
                Quality Professionals
              </h2>
              <div class="block">
                <p class="text-[#555] text-[13.5px] leading-[14px] font-normal">
                  Elevate your home with our handpicked, highly skilled
                  professionals who embody excellence in domestic service. We
                  meticulously select individuals who bring expertise,
                  professionalism, and a commitment to enhancing your household.
                </p>
              </div>
            </div>
          </div>

          <div
            class="block relative shrink-0 smi:w-[50%] lg:w-[33.33%] w-full px-[12px] max-w-full"
          >
            <div class="relative block mb-[30px] px-[8px] py-[20px]">
              <div
                class="inline-block items-center mb-4 rounded-full border border-navText p-[15px] max-w-[3.2rem] w-[3.2rem] h-[3.2rem] bg-[rgba(235,118,118,0.21)]"
              >
                <i
                  class="bx bxs-shield-minus text-center w-full h-full text-navText"
                ></i>
              </div>
              <h2 class="block font-bold mb-4 text-[18px]">Reliablity</h2>
              <div class="block">
                <p class="text-[#555] text-[13.5px] leading-[14px] font-normal">
                  Count on us for consistent and dependable domestic staff. Our
                  rigorous selection process ensures that we match you with
                  reliable professionals who prioritize their responsibilities,
                  providing you peace of mind.
                </p>
              </div>
            </div>
          </div>

          <div
            class="block relative shrink-0 smi:w-[50%] lg:w-[33.33%] w-full px-[12px] max-w-full"
          >
            <div class="relative block mb-[30px] px-[8px] py-[20px]">
              <div
                class="inline-block items-center mb-4 rounded-full border border-navText p-[15px] max-w-[3.2rem] w-[3.2rem] h-[3.2rem] bg-[rgba(235,118,118,0.21)]"
              >
                <i
                  class="bx bxs-badge-check text-center w-full h-full text-navText"
                ></i>
              </div>
              <h2 class="block font-bold mb-4 text-[18px]">
                Background Verification
              </h2>
              <div class="block">
                <p class="text-[#555] text-[13.5px] leading-[14px] font-normal">
                  Your safety is our priority. We conduct thorough background
                  verification to ensure the trustworthiness of our domestic
                  staff. Rest assured, each candidate has been vetted for your
                  security.
                </p>
              </div>
            </div>
          </div>

          <div
            class="block relative shrink-0 smi:w-[50%] lg:w-[33.33%] w-full px-[12px] max-w-full"
          >
            <div class="relative block mb-[30px] px-[8px] py-[20px]">
              <div
                class="inline-block items-center mb-4 rounded-full border border-navText p-[15px] max-w-[3.2rem] w-[3.2rem] h-[3.2rem] bg-[rgba(235,118,118,0.21)]"
              >
                <i
                  class="bx bx-plus-medical text-center w-full h-full text-navText"
                ></i>
              </div>
              <h2 class="block font-bold mb-4 text-[18px]">
                Comprenshive Medical Test
              </h2>
              <div class="block">
                <p class="text-[#555] text-[13.5px] leading-[14px] font-normal">
                  Prioritize the well-being of your household with our
                  comprehensive medical testing. We go beyond the standard to
                  ensure that the professionals we recommend are in optimal
                  health, promoting a safe and healthy environment.
                </p>
              </div>
            </div>
          </div>

          <div
            class="block relative shrink-0 smi:w-[50%] lg:w-[33.33%] w-full px-[12px] max-w-full"
          >
            <div class="relative block mb-[30px] px-[8px] py-[20px]">
              <div
                class="inline-block items-center mb-4 rounded-full border border-navText p-[15px] max-w-[3.2rem] w-[3.2rem] h-[3.2rem] bg-[rgba(235,118,118,0.21)]"
              >
                <i
                  class="fa-solid fa-graduation-cap text-center w-full h-full text-navText"
                ></i>
              </div>
              <h2 class="block font-bold mb-4 text-[18px]">Training</h2>
              <div class="block">
                <p class="text-[#555] text-[13.5px] leading-[14px] font-normal">
                  Invest in the continuous improvement of your domestic staff
                  with our tailored training programs. From specialized skills
                  to etiquette, we ensure that our professionals are equipped to
                  meet your specific needs and preferences.
                </p>
              </div>
            </div>
          </div>

          <div
            class="block relative shrink-0 smi:w-[50%] lg:w-[33.33%] w-full px-[12px] max-w-full"
          >
            <div class="relative block mb-[30px] px-[8px] py-[20px]">
              <div
                class="inline-block items-center mb-4 rounded-full border border-navText p-[15px] max-w-[3.2rem] w-[3.2rem] h-[3.2rem] bg-[rgba(235,118,118,0.21)]"
              >
                <i
                  class="bx bx-clipboard text-center w-full h-full text-navText"
                ></i>
              </div>
              <h2 class="block font-bold mb-4 text-[18px]">Staff Management</h2>
              <div class="block">
                <p class="text-[#555] text-[13.5px] leading-[14px] font-normal">
                  Experience seamless staff management with our dedicated
                  support. We handle the intricacies of payroll, scheduling, and
                  performance management, allowing you to focus on enjoying the
                  benefits of a well-managed household.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Testimonials />
  <Footer />
</template>
