<template>
  <div class="hello">
    <h3>{{amount}} Kanji Found!</h3>
    <img id="kanji" src="../assets/dragon.gif">
  </div>
</template>

<script>
export default {
  name: 'KanjiDisplay',
  props: {
    amount: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: #fafafa;
}
#kanji {
  width: 100px;
}
</style>
