<template>
  <div>
    <div class="row row-cols-auto">
      <div class="col-3 g-4" v-for="(item, index) in cocktails" :key="index">
        <div class="card bg-transparent border-0">
          <router-link
           id= "drinkInfo"
           
            :to="{
              name: 'Detailed',
              params: { id: item.idDrink },
            }"
          >
          <img
            :src="item.strDrinkThumb"
            class="card-img-top"
            alt=""
            width="150"
          />
          <div class="card-body">
            <h5 class="card-title">{{ item.strDrink }}</h5>
          </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Category",

  data() {
    return {
      cocktails: [],
      route: this.$route.params.selected,
    };
  },
  mounted() {
    this.getDrinks();
  },
  methods: {
    getDrinks() {
      let aux = {};
      let array = [];
      let ruta = this.$route.params.selected;
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php", {
          params: { c: ruta },
        })
        .then((response) => {
          aux = response.data;
          array = aux.drinks;
          this.cocktails = array;
        })
        .catch((e) => console.log(e));
    },
    
  },
  computed:{
    forzar(){
      console.log('click')
      this.getDrinks();
    }
  },
  watch: {
        '$route' (to, from) {

          if (from.params.selected !== to.params.selected) {

            return this.getDrinks()

          }
        }
      }
};
</script>