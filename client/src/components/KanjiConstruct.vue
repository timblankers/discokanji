<template>
  <div class="construct">
    <h3>Choose radicals</h3>
    <ul id="radicals">
      <li v-for="kanji in kanji1">
        <a>{{ kanji.radical }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "KanjiConstruct",
  props: {
    msg: String
  },
  data() {
    return {
      kanji1: [
        { radical: "一" },
        { radical: "丨" },
        { radical: "丶" },
        { radical: "ノ" },
        { radical: "乙" },
        { radical: "乚" },
        { radical: "亅" },
        { radical: "𠃊" },
        { radical: "ㄋ" },
        { radical: "㇇" }
      ]
    };
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
