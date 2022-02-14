<template>
  <div class="d-flex pt-5">
    <div class="w-25">
      <img :src="details.strDrinkThumb" class="img-thumbnail" alt="..." />
      <h3 class="pt-3" style="color: #3e4036">{{ details.strDrink }}</h3>
    </div>
    <div class="w-75 ps-5 pe-5">
      <div>
        <h3 class="mb-4">Ingredients</h3>
        <ul
          style="list-style: none; padding: 0"
          v-for="(item, index) in ingredients"
          :key="index"
        >
          <li style="font-size: 1.2em">
            {{ item.measure }} {{ item.ingredient }}
          </li>
        </ul>
      </div>
      <div class="pt-4 mb-5">
        <h3 class="mb-4">Instructions</h3>
        <p style="margin-left: 10%; margin-right: 10%" class="fw-bold fs-5">
          {{ details.strInstructions }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Detailed",
  data() {
    return {
      details: [],
      ingredients: [],
    };
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    getDetails() {
      let id = this.$route.params.id;
      let aux = {};
      let array = {};
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php", {
          params: { i: id },
        })
        .then((response) => {
          aux = response.data;
          array = aux.drinks[0];
          this.details = array;
          this.getIngredients();
        });
    },
    getIngredients() {
      let key = Object.keys(this.details);
      let value = Object.values(this.details);
      let ingredientsKey = null;
      let arrayIngredients = [];
      let arrayMeasures = [];
      for (let i = 0; i < key.length; i++) {
        ingredientsKey = key[i].substr(0, key[i].length - 1);

        if (
          ingredientsKey === "strIngredient" ||
          ingredientsKey === "strIngredient1"
        ) {
          let bol = typeof value[i] === "string";
          if (bol) {
            arrayIngredients.push(value[i]);
          }
        }

        if (ingredientsKey == "strMeasure" || ingredientsKey == "strMeasure1") {
          let bol = typeof value[i] === "string";
          if (bol) {
            arrayMeasures.push(value[i]);
          }
        }
      }

      let ingre = "";
      let mea = "";
      for (let i = 0; i < arrayIngredients.length; i++) {
        ingre = arrayIngredients[i];

        if (i < arrayMeasures.length) {
          mea = arrayMeasures[i];
        }
        let objeto = {
          ingredient: ingre,
          measure: mea,
        };

        this.ingredients.push(objeto);
      }
    },
  },
};
</script>

<style scoped>
</style>
