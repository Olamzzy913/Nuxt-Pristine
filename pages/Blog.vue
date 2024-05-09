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

      <title>Pristine - Blog Section</title>
    </head>
  </Html>
  <Navigation />
  <!-- Hero Section -->
  <section>
    <div class="relative block" id="hero-section">
      <div class="block relative shrink-0 w-full max-w-full">
        <div class="relative overflow-hidden">
          <div class="heroP1">
            <div class="heroP4 h-[400px]">
              <div class="text-center py-[40px] px-[10px] smi:py-[70px]">
                <div class="showcase-text shrink-0 relative items-center">
                  <span
                    class="text-[#F0BB71] px-[10px] py-[5px] text-[14px] font-semibold inline-block bg-[rgba(186,159,40,0.04)] rounded-[3px]"
                    >A touch of perfection.</span
                  >
                  <h1
                    class="text-white font-bold leading-[1.1] block text-[28px] md:text-[30px] slg:text-[36px] mb-[20px]"
                  >
                    Stay Up to date
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

  <section id="category" class="py-[70px] sm:py-[120px]">
    <div
      class="w-full smi:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] slg:max-w-[1110px] mx-auto px-[.75rem]"
    >
      <div class="block w-full mx-auto px-[.75rem]">
        <div class="flex flex-wrap relative">
          <div class="flex justify-center flex-wrap">
            <div class="w-full max-w-full shrink-0">
              <div class="relative">
                <h2
                  class="text-[14px] md:text-[20px] block text-navText font-bold leading-[1.3] relative"
                >
                  Pristine Haven Care Solutions
                </h2>
              </div>
              <div class="headTitle1 relative block text-center mb-[50px]">
                <h2
                  class="relative block text-[24px] md:text-[30px] font-bold leading-[1.3] mb-[12px]"
                >
                  Recruitments Offers Coming soon.....
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>
