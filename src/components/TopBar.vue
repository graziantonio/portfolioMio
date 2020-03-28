<template>
<div class="card text-center topBar" id="topBar">
  <div class="card-header">
    {{this.nome}} {{this.cognome}}
  </div>
  <div class="card-body">
    <h5 class="card-title">Developer</h5>
    <p class="card-text">.NET developer and currently studying vue, laravel, node.</p>
  </div>
</div>
</template>

<script>
export default {
    name: "TopBar",
    props:{
        nome: String,
        cognome: String
    }
}
</script>

<style>
    
</style>