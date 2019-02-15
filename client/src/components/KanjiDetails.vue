<template>
  <div class="details">
    <h3>{{ kanji }}</h3>
    <ul v-if="kanji">
      <li><a v-bind:href="jisho">Jisho</a></li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: 'KanjiDetails',
  data() {
    return {
      kanji: String,
      jisho: String
    };
  },
  created() {
    this.kanji = "";
    eventBus.$on("kanjiWasUpdated", kanji => {
      this.kanji = kanji.kanji;
      this.jisho = "https://jisho.org/search/" + this.kanji;
    })
  }
}
</script>

<style scoped>

</style>
