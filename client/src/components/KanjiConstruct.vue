<template>
  <div class="construct">
    <p>Radical Stroke Count</p>
    <ul class="radical-count" v-if="!selectedStrokeCount">
      <li v-for="n in 15" :key="n" v-on:click="showRadicals(n)" class="button">{{ n }}</li>
    </ul>
    <ul class="radicals" v-if="selectedStrokeCount">
      <li class="button" v-on:click="hideRadicals()">&larr;</li>
      <li
        v-for="radical in filteredRadicals"
        :key="radical._id"
        v-on:click="addRadical(radical)"
        class="button"
      >{{ radical.radical }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { eventBus } from "../main";

export default {
  name: "KanjiConstruct",
  data() {
    return {
      radicals: "",
      selectedStrokeCount: false,
      strokeCount: 0,
      selectedRadicals: []
    };
  },
  computed: {
    filteredRadicals: function() {
      return this.radicals.filter(
        radical => radical.strokes == this.strokeCount
      );
    }
  },
  methods: {
    showRadicals: function(strokeCount) {
      this.strokeCount = strokeCount;
      this.selectedStrokeCount = true;
    },
    hideRadicals: function() {
      this.selectedStrokeCount = false;
    },
    addRadical: function(radical) {
      this.selectedRadicals.push(radical.radical);
      eventBus.updateRadicals(this.selectedRadicals);
      this.selectedStrokeCount = false;
    }
  },
  created() {
    axios
      .get("http://localhost:8081/radicals")
      .then(response => (this.radicals = response.data))
      .catch(e => {
        this.errors.push(e);
      });
    eventBus.$on("radicalsWereUpdated", radicals => {
      this.selectedRadicals = radicals;
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
  background-color: #cdb79e;
  text-align: center;
  font-size: 25px;
  margin: 1px;
}

.button:hover {
  background-color: gray;
}
</style>
