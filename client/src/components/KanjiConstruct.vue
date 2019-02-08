<template>
  <div class="construct">
    <h3>Choose radicals</h3>
    <ul class="radical-count" v-if="!selectedStrokeCount">
      <li v-for="n in 15" :key="n" v-on:click="showRadicals(n)" class="button">
        {{ n }}
      </li>
    </ul>
    <ul class="radicals" v-if="selectedStrokeCount">
      <li v-for="radical in filteredRadicals" :key="radical._id" v-on:click="addRadical(radical)" class="button">
        {{ radical.radical }}
    </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "KanjiConstruct",
  props: {
    msg: String
  },
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
      return this.radicals.filter(radical => radical.strokes == this.strokeCount);
    }
  },
  methods: {
    showRadicals: function(strokeCount) {
      this.strokeCount = strokeCount;
      this.selectedStrokeCount = true;
    },
    addRadical: function(radical) {
      this.selectedRadicals.push(radical);
      this.selectedStrokeCount = false;
    }
  },
  created() {
    axios
      .get("http://localhost:3000/radicals")
      .then(response => (this.radicals = response.data))
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.construct {
  background-color: #e3f2fd;
}
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

.button:hover {
  background-color: #8aa29e;
}
</style>
