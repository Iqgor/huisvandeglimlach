<template>
  <h2 class="contactTitle">Contact Ons</h2>
  <p class="ondertitle">Geinteresseerd? Laat het ons weten</p>
  <form class="contactForm">
    <label for="name">
      <p>Naam:</p>
      <input type="text" name="name" id="name" placeholder="Vul hier je naam in" />
    </label>
    <label for="email">
      <p>Email</p>
      <input type="email" name="email" id="email" placeholder="Vul hier je email in" />
    </label>
    <button>Verstuur</button>
  </form>
</template>
<script setup lang="ts"></script>
<style scoped>
.contactForm {
  width: 80%;
  background: white;
  border-radius: 0.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.contactTitle {
  font-size: 2rem;
  text-align: center;
  color: white;
  text-shadow: rgb(10, 10, 10) 1px 0.5rem 1rem;
}

.contactForm label {
  font-size: 1.5rem;
  font-weight: bold;
}
.ondertitle {
  margin-bottom: 2rem;
  color: white;
  text-shadow: rgb(10, 10, 10) 1px 0.5rem 1rem;
}

.contactForm input {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  font-family: 'Open Sans', sans-serif;
}

.contactForm button {
  width: 100%;
  padding: 0.75rem 0.5rem;

  margin-top: 1rem;
  border-radius: 0.5rem;
  background: #333;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
