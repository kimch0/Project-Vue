<template>
  <div class="row row-cols-auto">
    <div class="col-4 g-4" v-for="(item, index) in array" :key="index">
      <div class="card bg-transparent border-0">
        <router-link
          id="drinkInfo"
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
</template>

<script>
export default {
  name: "Cards",
  props: ["array"],

};
</script>