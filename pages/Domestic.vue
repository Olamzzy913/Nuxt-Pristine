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

      <title>Pristine - Domestic service</title>
    </head>
  </Html>
  <Navigation />
  <section>
    <div class="relative block" id="hero-section">
      <div class="block relative shrink-0 w-full max-w-full">
        <div class="relative overflow-hidden">
          <div class="heroP1">
            <div class="heroP8 h-[400px]">
              <div
                class="text-center bg-[rgba(12,12,12,0.21)] py-[40px] pb-[120px] smi:pb-[200px] px-[10px] smi:py-[70px]"
              >
                <div class="showcase-text shrink-0 relative items-center">
                  <span
                    class="text-[#F0BB71] px-[10px] py-[5px] text-[14px] font-semibold inline-block bg-[rgba(186,159,40,0.04)] rounded-[3px]"
                    >A touch of perfection.</span
                  >
                  <h1
                    class="text-white font-bold leading-[1.1] block text-[28px] md:text-[30px] slg:text-[36px] mb-[20px]"
                  >
                    Domestic Recruitment services
                  </h1>
                  <p
                    class="block text-white leading-[1.4] font-normal pr-0 text-[16px] mb-[29px] smi:mb-[40px]"
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
            to="/service"
            class="px-[24px] py-[14px] font-medium text-[16px] text-white bg-navText rounded-[6px] hover:border transition duration-500 hover:border-navText hover:text-navText hover:bg-transparent"
            >Explore Other Services</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>

  <section class="py-[40px] md:pt-[120px]">
    <div
      class="w-full smi:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] slg:max-w-[1110px] mx-auto px-[.75rem]"
    >
      <div class="w-full max-w-full px-[1.5rem]">
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

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 slg:grid-cols-4 gap-4"
        >
          <div class="block shrink-0 w-full max-w-full rounded-[8px]">
            <div class="relative overflow-hidden">
              <div class="hovEffSer8"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    Nanny
                  </h1>
                  <p
                    class="text-white text-[10px] font-light leading-[1] mb-[6px]"
                  >
                    Let's help ease the load of raising children.
                  </p>
                  <NuxtLink
                    to="/contact"
                    class="px-[8px] py-[4px] font-medium text-[10px] text-white bg-navText rounded-[6px]"
                    >Get Started</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="block shrink-0 w-full max-w-full rounded-[8px]">
            <div class="chagnover relative overflow-hidden">
              <div class="hovEffSer2"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    House-help
                  </h1>
                  <p
                    class="text-white text-[10px] font-light leading-[1] mb-[6px]"
                  >
                    Cleaning excellence at it's finest!!
                  </p>
                  <NuxtLink
                    to="/contact"
                    class="px-[8px] py-[4px] font-medium text-[10px] text-white bg-navText rounded-[6px]"
                    >Get Started</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="block shrink-0 w-full max-w-full rounded-[8px]">
            <div class="chagnover relative overflow-hidden">
              <div class="hovEffSer3"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    Cook
                  </h1>
                  <p
                    class="text-white text-[10px] font-light leading-[1] mb-[6px]"
                  >
                    Let's help save the stress and time
                  </p>
                  <NuxtLink
                    to="/contact"
                    class="px-[8px] py-[4px] font-medium text-[10px] text-white bg-navText rounded-[6px]"
                    >Get Started</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="block shrink-0 w-full max-w-full rounded-[8px]">
            <div class="chagnover relative overflow-hidden">
              <div class="hovEffSer4"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    Chef
                  </h1>
                  <p
                    class="text-white text-[10px] font-light leading-[1] mb-[6px]"
                  >
                    Creating dishes that makes your heart wishes
                  </p>
                  <NuxtLink
                    to="/contact"
                    class="px-[8px] py-[4px] font-medium text-[10px] text-white bg-navText rounded-[6px]"
                    >Get Started</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="block shrink-0 w-full max-w-full rounded-[8px]">
            <div class="chagnover relative overflow-hidden">
              <div class="hovEffSer5"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    Driver
                  </h1>
                  <p
                    class="text-white text-[10px] font-light leading-[1] mb-[6px]"
                  >
                    Facilisis ac eget mauris nulla.
                  </p>
                  <NuxtLink
                    to="/contact"
                    class="px-[8px] py-[4px] font-medium text-[10px] text-white bg-navText rounded-[6px]"
                    >Get Started</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="block shrink-0 w-full max-w-full rounded-[8px]">
            <div class="chagnover relative overflow-hidden">
              <div class="hovEffSer6"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    Adult Caregiver
                  </h1>
                  <p
                    class="text-white text-[10px] font-light leading-[1] mb-[6px]"
                  >
                    Facilisis ac eget mauris nulla.
                  </p>
                  <NuxtLink
                    to="/contact"
                    class="px-[8px] py-[4px] font-medium text-[10px] text-white bg-navText rounded-[6px]"
                    >Get Started</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="block shrink-0 w-full max-w-full rounded-[8px]">
            <div class="chagnover relative overflow-hidden">
              <div class="hovEffSer7"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    Private Tutors
                  </h1>
                  <p
                    class="text-white text-[10px] font-light leading-[1] mb-[6px]"
                  >
                    Facilisis ac eget mauris nulla.
                  </p>
                  <NuxtLink
                    to="/contact"
                    class="px-[8px] py-[4px] font-medium text-[10px] text-white bg-navText rounded-[6px]"
                    >Get Started</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="block shrink-0 w-full max-w-full rounded-[8px]">
            <div class="chagnover relative overflow-hidden">
              <div class="hovEffSer24"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    Baby Sitter
                  </h1>
                  <p
                    class="text-white text-[10px] font-light leading-[1] mb-[6px]"
                  >
                    Facilisis ac eget mauris nulla.
                  </p>
                  <NuxtLink
                    to="/contact"
                    class="px-[8px] py-[4px] font-medium text-[10px] text-white bg-navText rounded-[6px]"
                    >Get Started</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-[40px] md:pt-[120px]">
    <div
      class="w-full smi:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] slg:max-w-[1110px] mx-auto px-[.75rem]"
    >
      <div class="relative w-full border rounded border-navText p-10">
        <h1 class="text-[24px] mb-6 font-bold">Our Service</h1>
        <ul
          class="grid grid-cols-1 smi:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 slg:grid-cols-5 gap-2"
        >
          <li
            class="bg-navText text-white font-semibold text-center rounded p-[6px] w-[180px]"
          >
            Live In
          </li>
          <li
            class="bg-navText text-white font-semibold text-center rounded p-[6px] w-[180px]"
          >
            Live Out
          </li>
          <li
            class="bg-navText text-white font-semibold text-center rounded p-[6px] w-[180px]"
          >
            Weekend Services
          </li>
          <li
            class="bg-navText text-white font-semibold text-center rounded p-[6px] w-[180px]"
          >
            Short Term Contract
          </li>
          <li
            class="bg-navText text-white font-semibold text-center rounded p-[6px] w-[180px]"
          >
            Long Term Contract
          </li>
        </ul>
      </div>
    </div>
  </section>

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
                Comprehensive Medical Test
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
