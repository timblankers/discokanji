<template>
  <div class="construct">
    <h3>Choose radicals</h3>
    <ul id="radicals">
      <li v-for="radical in radicals" :key="radical._id">
        <a>{{ radical.radical }}</a>
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
      radicals: ""
    };
  },
  created() {
    axios.get("http://localhost:3000/radicals")
      .then(response => (this.radicals = response.data))
      .catch(e => {
        this.errors.push(e);
      })
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
}

li a {
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #8aa29e;
}
</style>
