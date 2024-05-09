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

      <title>Pristine - Professional service</title>
    </head>
  </Html>
  <Navigation />
  <!-- Hero Section -->
  <section>
    <div class="relative block" id="hero-section">
      <div class="block relative shrink-0 w-full max-w-full">
        <div class="relative overflow-hidden">
          <div class="heroP1">
            <div class="heroP7 h-[400px]">
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
                    Elevate your Team with PHC Corporate Professionals
                    Recruitment services-where corporate talent meets
                    unparallaled expertise
                  </h1>
                  <p
                    class="block text-white leading-[1.4] font-normal pr-0 text-[16px] mb-[29px] smi:mb-[40px]"
                  >
                    let’s shape the future of your organisation together.
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
            to="/service"
            class="px-[24px] py-[14px] font-medium text-[16px] text-white bg-navText rounded-[6px] hover:border transition duration-500 hover:border-navText hover:text-navText hover:bg-transparent"
            >Explore Other Services</NuxtLink
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
            Corporate Professionals Recruitment
          </h2>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 slg:grid-cols-4 gap-4"
        >
          <div class="block shrink-0 w-full max-w-full rounded-[8px]">
            <div class="chagnover relative overflow-hidden">
              <div class="hovEffSer23"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    Specialized Recruitment
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
              <div class="hovEffSer10"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    Talent Acquisition
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
              <div class="hovEffSer11"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    Interim Management
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
              <div class="hovEffSer12"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    Consultative Approach
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
              <div class="hovEffSer13"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    Onboarding
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
              <div class="hovEffSer14"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    Employee Relations
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
              <div class="hovEffSer15"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    Training and Development
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
              <div class="hovEffSer16"></div>
              <div class="effSer">
                <div class="overlaySer ml-[8px]">
                  <h1
                    class="text-[16px] text-white block font-medium leading-[1] mb-[6px] relative"
                  >
                    Compensation and Benefits
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
                <i class="bx bx-cog w-full h-full text-center text-navText"></i>
              </div>
              <h2 class="block font-bold mb-4 text-[18px]">
                Industry Insights
              </h2>
              <div class="block">
                <p class="text-[#555] text-[13.5px] leading-[14px] font-normal">
                  Gain a competitive edge with our insider knowledge of industry
                  trends, giving you a recruitment strategy that's always one
                  step ahead.
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
                  class="bx bx-network-chart w-full h-full text-center text-navText"
                ></i>
              </div>
              <h2 class="block font-bold mb-4 text-[18px]">Networking</h2>
              <div class="block">
                <p class="text-[#555] text-[13.5px] leading-[14px] font-normal">
                  Access not just candidates, but a community of professionals
                  and influencers, broadening your reach for the perfect match.
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
                  class="fa-solid fa-gears text-center w-full h-full text-navText"
                ></i>
              </div>
              <h2 class="block font-bold mb-4 text-[18px]">Efficiency</h2>
              <div class="block">
                <p class="text-[#555] text-[13.5px] leading-[14px] font-normal">
                  Save time and resources through our hassle-free, efficient
                  recruitment processes, ensuring quality without the prolonged
                  wait.
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
                  class="bx bxs-timer text-center w-full h-full text-navText"
                ></i>
              </div>
              <h2 class="block font-bold mb-4 text-[18px]">Timeliness</h2>
              <div class="block">
                <p class="text-[#555] text-[13.5px] leading-[14px] font-normal">
                  Get the professionals you need when you need them – our
                  commitment to prompt solutions keeps your operations running
                  smoothly.
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
              <h2 class="block font-bold mb-4 text-[18px]">
                Quality Assurance
              </h2>
              <div class="block">
                <p class="text-[#555] text-[13.5px] leading-[14px] font-normal">
                  Rest easy knowing our rigorous standards ensure the candidates
                  we deliver align perfectly with your vision, guaranteeing
                  success from day one.
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
