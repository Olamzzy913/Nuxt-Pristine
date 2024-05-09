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

      <title>Pristine - Procurement service</title>
    </head>
  </Html>
  <Navigation />
  <!-- Hero Section -->
  <section>
    <div class="relative block" id="hero-section">
      <div class="block relative shrink-0 w-full max-w-full">
        <div class="relative overflow-hidden">
          <div class="heroP1">
            <div class="heroP6 h-[400px]">
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
                    Procurements services
                  </h1>
                  <p
                    class="block text-white leading-[1.4] font-normal pr-0 text-[16px] mb-[29px] smi:mb-[40px]"
                  >
                    Unlock the full potential of your home and office
                    procurement processes with Pristine Haven Care.
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
            Procurements Services
          </h2>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 slg:grid-cols-4 gap-4"
        >
          <div class="block shrink-0 w-full max-w-full rounded-[8px]">
            <div class="chagnover relative overflow-hidden">
              <div class="hovEffSer17"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    Strategic Sourcing
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
              <div class="hovEffSer18"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    Procurement Consulting
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
              <div class="hovEffSer19"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    Personal Shopping
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
              <div class="hovEffSer20"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    Supplier Management
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
              <div class="hovEffSer21"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    Cost Optimization
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
              <div class="hovEffSer22"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    Risk Mitigation
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
                  class="fa-solid fa-code-merge w-full h-full text-center text-navText"
                ></i>
              </div>
              <h2 class="block font-bold mb-4 text-[18px]">Versatility</h2>
              <div class="block">
                <p class="text-[#555] text-[13.5px] leading-[14px] font-normal">
                  From business essentials to home comforts, we source a diverse
                  range of products to meet your procurement needs, ensuring
                  versatility in every solution we provide.
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
                  class="bx bxs-star text-center w-full h-full text-navText"
                ></i>
              </div>
              <h2 class="block font-bold mb-4 text-[18px]">Expertise</h2>
              <div class="block">
                <p class="text-[#555] text-[13.5px] leading-[14px] font-normal">
                  Backed by a team of seasoned professionals, our deep industry
                  knowledge guarantees expert guidance in selecting the right
                  products for both business and home environments.
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
                  class="fa-sharp fa-solid fa-people-arrows text-center w-full h-full text-navText"
                ></i>
              </div>
              <h2 class="block font-bold mb-4 text-[18px]">
                Tailored Solutions
              </h2>
              <div class="block">
                <p class="text-[#555] text-[13.5px] leading-[14px] font-normal">
                  Recognizing the unique requirements of each client, we craft
                  personalized procurement solutions, ensuring that every
                  purchase aligns seamlessly with your specific business or
                  household goals.
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
                  class="bx bxs-bulb text-center w-full h-full text-navText"
                ></i>
              </div>
              <h2 class="block font-bold mb-4 text-[18px]">Innovation</h2>
              <div class="block">
                <p class="text-[#555] text-[13.5px] leading-[14px] font-normal">
                  Embrace the future of procurement with us. We integrate
                  innovative technologies and cutting-edge practices to redefine
                  the way businesses and homes source their essential products.
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
