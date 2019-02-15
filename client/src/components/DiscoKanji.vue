<template>
  <div class="component">
    <div class="row">
      <div class="col-xs-12 col-sm-12">
        <kanji-construct></kanji-construct>
      </div>
    </div>
    <hr />
    <div class="row">  
      <div class="col-xs-12 col-sm-12">
        <kanji-results></kanji-results>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-12">
        <kanji-details></kanji-details>
      </div>
    </div>
  </div>
</template>

<script>
import KanjiConstruct from "./KanjiConstruct.vue";
import KanjiResults from "./KanjiResults.vue";
import KanjiDetails from "./KanjiDetails.vue";

export default {
  components: {
    kanjiConstruct: KanjiConstruct,
    kanjiResults: KanjiResults,
    kanjiDetails: KanjiDetails
  }
};
</script>

<style scoped>

</style>
