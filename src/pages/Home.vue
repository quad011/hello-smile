<script setup></script>

<template>
  <main>
    <HeroHeader
      caption="TOOTHPASTE"
      title1="GUMMY"
      title2="BEAR"
      image1="./src/assets/img/1707483665.jpg"
      image2="./src/assets/img/1707483666.jpg"
      image3="./src/assets/img/1707483667.jpg"
      text="It all started with a simple idea: to build a place where..."
      bottomGradient="./assets/img/background-gradient.png"
    />

    <div class="h-[102vw] sm:h-[52vw]"></div>

    <ImageTextAndCta
      :bgImage="'./assets/img/8.jpg'"
      :title="'BUNDLE BUILDER'"
      :text="'At Spektre we believe in combining style, functionality, and quality to create sunglasses that not only protect your eyes but also elevate your look. With a passion for timeless designs and innovative craftsmanship, our collection caters to individuals who value comfort, durability, and elegance.'"
    />

    <div
      class="pb-5 lg:pb-12 pt-5 lg:pt-24 bg-black flex items-center justify-center"
    >
      <img
        class="w-screen h-auto hidden sm:block"
        src="/assets/img/slider-desk.png"
        :alt="'hello smile'"
      />

      <img
        class="w-screen h-auto block sm:hidden relative left-[-1vw]"
        src="/assets/img/slider-mob.png"
        :alt="'hello smile'"
      />
    </div>

    <SliderComponent />

    <TextAndTwoImages
      title="About us"
      text="At Spektre we believe in combining style, functionality, and quality to create sunglasses that not only protect your eyes but also elevate your look. With a passion for timeless designs and innovative craftsmanship, our collection caters to individuals who value comfort, durability, and elegance."
      textBtn="Learn More"
    />

    <Gallery />

    <PageFooter />
  </main>
</template>
