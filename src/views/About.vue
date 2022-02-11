<template>
  <div class="about">
    <div>
      <h1>About the page</h1>
      <p>
        This is not a commercial web page, it was created to demostrate the use
        of the framework Vue.js. The data is taken from a public API called
        TheCocktailDB.
      </p>
    </div>
    <div class="mt-5">
      <h3>Used Complements</h3>
      <ul>
        <li>Vue v3.x</li>
        <li>Vue-Router v4.x</li>
        <li>Vuex v4.x</li>
        <li>Bootstrap v5.1</li>
        <li>API: <a href="https://www.thecocktaildb.com/api.php">https://www.thecocktaildb.com/api.php</a></li>
      </ul>
      <div class="mt-5">
        <h3>Extra</h3>
        <p>
          The front-end is not my strenght, I apologize for the poor desing. <br>
          The page is not responsive yet.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul{
  padding: 0;
}
li{
  list-style: none;
  font-size: 1.2em;
}
p{
  margin-left: 15%;
  margin-right: 15%;
  font-size: 1.4em;
}
</style>

