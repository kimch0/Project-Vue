<template>
  <div class="mt-4 hello">
    <h2>Popular drinks</h2>
    <div class="row row-cols-auto">
      <div class="col-4 g-4" v-for="(item, index) in cocktails" :key="index">
        <div class="card bg-transparent border-0">
          <router-link
          id= "drinkInfo"
            :to="{
              name: 'Detailed',
              params: { id: item.drinks[0].idDrink },
            }"
            ><img
              :src="item.drinks[0].strDrinkThumb"
              class="card-img-top"
              alt=""
              width="150"
            />
            <div class="card-body">
              <h5 class="card-title">{{ item.drinks[0].strDrink }}</h5>
            </div></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Main",

  data() {
    return {
      cocktails: [],
    };
  },

  mounted() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      let aux = {};

      for (let i = 0; i < 6; i++) {
        axios
          .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
          .then((response) => {
            aux = response.data;
            this.cocktails.push(aux);
          })
          .catch((e) => console.log(e));
      }
      //  console.log(this.cocktails)
    },
  },
};
</script>

