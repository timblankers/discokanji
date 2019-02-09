<template>
  <div class="app">
    <header>
      <img id="logo" src="./assets/logo.png">
      <h1>Disco Kanji</h1>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <disco-kanji></disco-kanji>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DiscoKanji from "./components/DiscoKanji.vue";

export default {
  components: {
    discoKanji: DiscoKanji
  }
};
</script>

<style>
body {
  background-color: #2e2e2e !important;
  color: #fafad2 !important;
}
header {
  background-color: #8b0000;
  padding: 2px 10px 8px;
  margin-bottom: 10px;
  height: 58px;
  align-items: center;
  display: flex !important;
}

header h1 {
  margin: 0px 10px;
  display: inline;
}

header #logo {
  max-height: 85%;
  display: inline;
}

.container {
  max-width: 400px !important;
}
</style>
