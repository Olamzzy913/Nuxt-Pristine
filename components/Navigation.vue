<template>
  <div :class="{ sticky: isScrolled }">
    <div class="shadow-sm border top-0 border-gray-200">
      <div class="w-full px-[15px] lg:px-[70px]">
        <div
          class="flex flex-wrap relative items-center justify-between lg:px-[12px]"
        >
          <div>
            <NuxtLink to="/"
              ><img
                src="assets/images/PHC%20LOGO1_logo%201.svg"
                alt=""
                class="w-[100px]"
            /></NuxtLink>
          </div>

          <div class="nav-links hidden lg:block">
            <nav>
              <ul class="flex items-center">
                <li
                  class="inline-block mx-1 relative text-black z-[1] hover:text-navText"
                >
                  <NuxtLink
                    to="/"
                    class="font-normal py-[12px] px-[14px] text-[15px] block relative"
                    >Home</NuxtLink
                  >
                </li>
                <li
                  class="inline-block mx-1 relative text-black z-[1] hover:text-navText"
                >
                  <NuxtLink
                    href="/about"
                    class="font-normal py-[12px] px-[14px] text-[15px] block relative"
                    >About Us</NuxtLink
                  >
                </li>
                <li
                  class="inline-block mx-1 relative dropMenu text-black z-[1] hover:text-navText"
                >
                  <NuxtLink
                    to="/service"
                    class="font-normal py-[12px] px-[14px] text-[15px] block relative"
                    >Service</NuxtLink
                  >
                  <ul
                    class="absolute w-[170px] transition-all bg-white left-0 top-[120%] invisible opacity-0 shadow-md py-[17px]"
                  >
                    <li
                      class="block relative text-black z-[1] hover:text-navText mr-[7px] ml-[4px]"
                    >
                      <NuxtLink
                        to="/domestic"
                        class="font-light px-[10px] py-[6px] text-[15px] block relative"
                        >Domestic</NuxtLink
                      >
                    </li>
                    <li
                      class="block relative text-black z-[1] hover:text-navText mr-[7px] ml-[4px]"
                    >
                      <NuxtLink
                        to="/professionals"
                        class="font-light px-[10px] py-[6px] text-[15px] block relative"
                        >Professionals</NuxtLink
                      >
                    </li>
                    <li
                      class="block relative text-black z-[1] hover:text-navText mr-[7px] ml-[4px]"
                    >
                      <NuxtLink
                        to="/procurement"
                        class="font-light px-[10px] py-[6px] text-[15px] block relative"
                        >Procurement</NuxtLink
                      >
                    </li>
                  </ul>
                </li>
                <li
                  class="inline-block mx-1 relative text-black z-[1] hover:text-navText"
                >
                  <NuxtLink
                    to="/blog"
                    class="font-normal py-[12px] px-[14px] text-[15px] block relative"
                    >Blog</NuxtLink
                  >
                </li>
                <li
                  class="inline-block mx-1 relative text-black z-[1] hover:text-navText"
                >
                  <NuxtLink
                    to="/contact"
                    class="font-normal py-[12px] px-[14px] text-[15px] block relative"
                    >Contact Us</NuxtLink
                  >
                </li>
              </ul>
            </nav>
          </div>

          <div class="float-right invisible lg:visible">
            <NuxtLink
              to="/contact"
              class="px-[24px] py-[12px] font-normal text-[16px] text-white bg-navText rounded-[6px] border hover:border transition duration-500 hover:border-navText hover:text-navText hover:bg-white"
              >Get Started</NuxtLink
            >
          </div>

          <div id="menu" class="block lg:hidden">
            <input type="checkbox" id="check" />
            <label for="check" class="checkbtn"
              ><i class="fas fa-bars text-[1.5rem] font-light"></i
            ></label>
            <div class="list">
              <ul>
                <li
                  class="inline-block w-full mx-1 mt-2 relative text-white rounded-md hover:text-black hover:bg-[rgba(212,218,212,0.5)] z-[1]"
                >
                  <NuxtLink
                    to="/"
                    class="font-normal py-[8px] px-[19px] text-[14px] block relative"
                    >Home</NuxtLink
                  >
                </li>
                <li
                  class="inline-block w-full mx-1 relative text-white rounded-md hover:text-black hover:bg-[rgba(212,218,212,0.5)] z-[1]"
                >
                  <NuxtLink
                    to="/about"
                    class="font-normal py-[8px] px-[19px] text-[14px] block relative"
                    >About Us</NuxtLink
                  >
                </li>
                <li
                  class="inline-block w-full mx-1 relative text-white rounded-md hover:text-black hover:bg-[rgba(212,218,212,0.5)] z-[1]"
                >
                  <NuxtLink
                    href="/service"
                    class="font-normal py-[8px] px-[19px] text-[14px] block relative"
                    >Service</NuxtLink
                  >
                </li>
                <li
                  class="inline-block w-full mx-[1rem] list-disc relative text-white rounded-md hover:text-black hover:bg-[rgba(212,218,212,0.5)] z-[1]"
                >
                  <NuxtLink
                    to="/domestic"
                    class="font-normal py-[8px] px-[19px] text-[14px] block relative"
                    >Domestic Staff Recruitment
                  </NuxtLink>
                </li>
                <li
                  class="inline-block w-full mx-[1rem] relative text-white rounded-md hover:text-black hover:bg-[rgba(212,218,212,0.5)] z-[1]"
                >
                  <NuxtLink
                    href="/professionals"
                    class="font-normal py-[8px] px-[19px] text-[14px] block relative"
                    >Corporate Professionals Recruitment</NuxtLink
                  >
                </li>
                <li
                  class="inline-block w-full mx-[1rem] relative text-white rounded-md hover:text-black hover:bg-[rgba(212,218,212,0.5)] z-[1]"
                >
                  <NuxtLink
                    href="/procurement"
                    class="font-normal py-[8px] px-[19px] text-[14px] block relative"
                    >Procurements</NuxtLink
                  >
                </li>
                <li
                  class="inline-block w-full mx-1 relative text-white rounded-md hover:text-black hover:bg-[rgba(212,218,212,0.5)] z-[1]"
                >
                  <NuxtLink
                    to="/blog"
                    class="font-normal py-[8px] px-[19px] text-[14px] block relative"
                    >Blog</NuxtLink
                  >
                </li>
                <li
                  class="inline-block w-full mx-1 relative text-white rounded-md hover:text-black hover:bg-[rgba(212,218,212,0.5)] z-[1]"
                >
                  <NuxtLink
                    to="/contact"
                    class="font-normal py-[8px] px-[19px] text-[14px] block relative"
                    >Contact Us</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
//Sticky Nav
const isScrolled = ref(false);

onMounted(() => {
  const heroSection = document.querySelector("#hero-section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isScrolled.value = !entry.isIntersecting;
      });
    },
    { threshold: 0.5 }
  );

  if (heroSection) {
    observer.observe(heroSection);
  }
});

isScrolled;
</script>

<style scoped>
.sticky {
  position: fixed;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  box-shadow: 0 20px 30px rbga(0, 0, 0, 0.15);
  width: 100%;
  z-index: 100;
}
</style>
