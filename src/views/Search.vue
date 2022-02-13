<template>
  <div class="pt-4">
    <h2>Results of: {{ route }}</h2>
    <Cards :array="drinks"/>
  </div>
</template>
<script>
import axios from "axios";
import Cards from "@/components/Cards.vue";
export default {
  name: "Search",
  components: {
    Cards,
  },
  data() {
    return {
      route: this.$route.params.searching,
      drinks: [],
    };
  },
  mounted() {
    this.getSearch();
  },
  methods: {
    getSearch() {
      let aux = [];
      let search = this.route;
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/search.php", {
          params: { s: search },
        })
        .then((response) => {
          aux = response.data;
          let array = aux.drinks;
          this.drinks = array;
        })
        .catch((e) => console.log(e));
    },
  },
  watch: {
        '$route' (to, from) {
          if (from.params.searching !== to.params.searching) {
            this.route = this.$route.params.searching
            this.getSearch();
          }
        }
      }
};
</script>