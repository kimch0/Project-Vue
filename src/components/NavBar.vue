<template>
  <div>
    <nav class="navbar">
      <div class="container-fluid" style="background-color: #faffd8">
        <a class="navbar-brand" href="/">
          <img src="@/assets/cocktailsIcon.png" alt="" width="35" height="50" />
        </a>
        <ul class="nav w-50 d-flex flex-nowrap justify-content-evenly">
          <li class="nav-item dropdown ps-5">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Alcohol
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li v-for="(item, index) in alcohol.drinks" :key="index">
                <router-link
                  :to="{
                    name: 'Alcohol',
                    params: { selected: item.strAlcoholic },
                  }"
                  class="dropdown-item"
                  >{{ item.strAlcoholic }}</router-link
                >
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Base Ingredient
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link to="/drink/Brandy" class="dropdown-item"
                  >Brandy</router-link
                >
                <router-link to="/drink/Champagne" class="dropdown-item"
                  >Champagne</router-link
                >
                <router-link to="/drink/Gin" class="dropdown-item"
                  >Gin</router-link
                >
                <!-- usar href -->
                <router-link to="/drink/Rum" class="dropdown-item"
                  >Rum</router-link
                >
                <router-link to="/drink/Tequila" class="dropdown-item"
                  >Tequila</router-link
                >
                <router-link to="/drink/Vodka" class="dropdown-item"
                  >Vodka</router-link
                >
                <router-link to="/drink/Whiskey" class="dropdown-item"
                  >Whiskey</router-link
                >
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Category
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li v-for="(item, index) in category" :key="index">
                <router-link
                  :to="{
                    name: 'Category',
                    params: { selected: item.strCategory },
                  }"
                  class="dropdown-item"
                  >{{ item.strCategory }}</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link 
            class="nav-link"
            :to="{
                    name: 'About'
                  }">
              About
            </router-link>
          </li>
        </ul>

        <form class="d-flex flex-row w-25 ps-5 flex-fill">
          <input
            v-model="keyboard"
            class="form-control me-2"
            type="search"
            placeholder="What are you looking for?"
            aria-label="Search"
          />
          <button
            class="rounded border border-1 border-secondary"
            @click.prevent="getSearch"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NavBar",
  data() {
    return {
      ingredient: {},
      alcohol: {},
      category: [],
      keyboard: "",
    };
  },
  mounted() {
    this.getIngredients();
    this.getAlcohol();
    this.getCategory();
  },
  methods: {
    getIngredients() {
      let aux = [];
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
        .then((response) => {
          aux = response.data;
          this.ingredient = aux;
        })
        .catch((e) => console.log(e));
    },
    getAlcohol() {
      let aux = [];
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list")
        .then((response) => {
          aux = response.data;
          this.alcohol = aux;
        })
        .catch((e) => console.log(e));
    },
    getCategory() {
      let aux = {};
      let aux2 = [];
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
        .then((response) => {
          aux = response.data;
          aux2 = aux.drinks;
          this.category = aux2;
        })
        .catch((e) => console.log(e));
    },

    getSearch() {
      if (this.keyboard != "") {
        this.$router.push("/search/" + this.keyboard);
      }
      console.log(this.keyboard);
      this.keyboard = "";
    },
  },
};
</script>