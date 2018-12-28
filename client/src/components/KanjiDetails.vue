<template>
  <div class="details">
    <h3>Details</h3>
    <h3>{{kanji}}</h3>
    <h3>りゅう</h3>
    <ol>
      <li>dragon</li>
      <li>naga</li>
      <li>promoted rook</li>
      <li>Chinese dragon</li>      
    </ol>
  </div>
</template>

<script>
export default {
  name: 'KanjiDetails',
  props: {
    kanji: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.details {
  background-color: #e3f2fd;
}
</style>
