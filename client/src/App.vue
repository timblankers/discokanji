<template>
  <div id="app">
    <h1>Disco Kanji</h1>
    <KanjiConstruct />
    <KanjiResults :amount=5 />
    <KanjiDetails />
  </div>
</template>

<script>
import KanjiConstruct from './components/KanjiConstruct.vue'
import KanjiResults from './components/KanjiResults.vue'
import KanjiDetails from './components/KanjiDetails.vue'


export default {
  name: 'app',
  components: {
    KanjiConstruct,
    KanjiResults,
    KanjiDetails
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #686963;
}
</style>
