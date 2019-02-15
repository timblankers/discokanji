<template>
  <div class="results">
    <p>Filtering on Radicals - <a href="#" v-on:click="clearRadicals()">clear</a></p>
    <ul class="all-radicals">
      <li v-for="radical in radicals" :key="radical._id">{{ radical }}</li>
    </ul>
    <hr>
    <ul class="all-kanji">
      <li v-for="kanji in filteredKanji" :key="kanji._id">{{ kanji.kanji }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { eventBus } from "../main";

export default {
  name: "KanjiResults",
  props: {
    radicals: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      allKanji: []
    };
  },
  computed: {
    filteredKanji: function() {
      if (this.radicals.length > 0) {
        return this.allKanji.filter(
          kanji => this.radicals.every(selectedRadical => kanji.radicals.indexOf(selectedRadical) > -1)
        );
      } else {
        return [];
      }
    }
  },
  methods: {
    clearRadicals: function() {
      this.radicals = [];
      eventBus.updateRadicals([]);
    }
  },
  created() {
    axios
      .get("http://localhost:8081/kanji")
      .then(response => (this.allKanji = response.data))
      .catch(e => {
        this.errors.push(e);
      });
    eventBus.$on("radicalsWereUpdated", radicals => {
      this.radicals = radicals;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
  display: block;
  height: 40px;
  width: 40px;
}
</style>
