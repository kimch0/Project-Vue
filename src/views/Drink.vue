<template>
  <div>
    <h2>{{ route }}</h2>
    <Cards :array="cocktails"/> 
  </div>
</template>

<script>
import axios from "axios";
import Cards from "@/components/Cards.vue";
export default {
  name: "Drink",
  components: {
    Cards,
  },
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
      let ruta = this.route;
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php", {
          params: { i: ruta },
        })
        .then((response) => {
          aux = response.data;
          array = aux.drinks;

          this.cocktails = array;
        })
        .catch((e) => console.log(e));
    },
  },
  watch: {
    $route(to, from) {
      if (from.params.selected !== to.params.selected) {
        this.route= this.$route.params.selected
        return this.getDrinks();
      }
    },
  },
};
</script>