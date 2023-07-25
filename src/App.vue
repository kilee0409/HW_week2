<script setup>
import HeaderBlock from './components/HeaderBlock.vue';
import FooterBlock from "./components/FooterBlock.vue"
</script>

<template>
  <HeaderBlock/>
  <section class="bg-primary">
    <div class="banner-container">
      <img class="image" src="/image/people.png" alt="people" />
      <div class="title-container">
        <h2 class="sub-title c-secondary">
          <span>Hi</span>
          <span>I’m a front-end developer</span>
        </h2>
        <h1 class="main-title">William</h1>
        <div class="btn-default bg-secondary fl-ai-s-end">
          <span>contact me</span>
          <img src="/image/arrow_outward.svg" />
        </div>
      </div>
    </div>
  </section>
  <section class="introduction-container">
    <div class="text-container">
      <h2 class="sub-title c-secondary">Introduction</h2>
      <p class="details">Hi, I'm William Lee, a Front-End Developer with a passion for building beautiful and responsive websites that provide an optimal user experience.</p>
      <div>
        <img src="/image/sparkle-sm.png"/>
        <img src="/image/sparkle-sm.png" />
        <img src="/image/sparkle-sm.png" />
      </div>
    </div>
    <div class="image-container">
      <img src="/image/sparkle.png" />
      <img src="/image/photographer.png" alt="photographer"/>
      <img src="/image/people-2.png" alt="people-2"/>
    </div>
  </section>
  <section class="about-me-container">
      <div class="content-container">
        <div class="content">
          <span>01</span>
          <h3>Attention to Detail</h3>
          <p>Meticulous code analysis and optimization.</p>
        </div>
        <div class="content">
          <span>02</span>
          <h3>Adaptability</h3>
          <p>Swift learning of new technologies.</p>
        </div>
        <div class="content">
          <span>03</span>
          <h3>Problem Solver</h3>
          <p>Identifying and resolving issues.</p>
        </div>
        <div class="content">
          <span>04</span>
          <h3>Team Player</h3>
          <p>Collaborates and shares ideas.</p>
        </div>
      </div>
      <div class="text-container">
        <h2 class="sub-title">About Me</h2>
        <p>With over 5 years of experience, I'm proficient in HTML, CSS, JavaScript, jQuery, and React. I have a strong understanding of user experience design and accessibility. I'm always learning new technologies and techniques to stay up-to-date in the field.</p>
      </div>
  </section>
  <section class="contact-me-container">
    <div class="title">
      <h2 class="sub-title c-secondary">CONTACT ME</h2>
      <img src="/image/trending_flat_black_24dp.png" />
    </div>
    <div class="media-container">
      <div class="media-box">
        <img src="/image/discord.png" alt="instagram"/>
      </div>
      <div class="media-box">
        <img src="/image/instagram.png" alt="instagram"/>
      </div>
      <div class="media-box">
        <img src="/image/message.png" alt="message"/>
      </div>
      
    </div>
  </section>
  <section class="my-project-container">
    <div class="content">
      <div class="title-content">
        <div class="w-50"></div>
        <h2 class="sub-title w-50">My Projects</h2>
      </div>
      <div class="pic-war">
        <img class="pic-item" src="/image/Rectangle10.png" alt="Rectangle10"/>
        <img class="pic-item" src="/image/Rectangle15.png" alt="Rectangle15"/>
        <div class="pic-item">
          <p>I've worked on a variety of websites, including e-commerce sites, blogs, and landing pages. I take pride in creating clean, efficient, and user-friendly code.</p>
          <div class="btn-default see-more-btn">
            <span>
              SEE MORE
            </span>
            <img src="/image/arrow_outward-white.png" />
          </div>
        </div>
        <img class="pic-item" src="/image/Rectangle14.png" alt="Rectangle14"/>
        <img class="pic-item" src="/image/Rectangle29.png" alt="Rectangle29"/>
      </div>
    </div>
  </section>
  <FooterBlock/>
</template>

<style scoped lang="scss" src="@/assets/scss/layout/index.scss">
</style>
