<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet">
    <TopBar nome="Graziantonio" cognome="Panunzio"></TopBar>
    <WorkExperience></WorkExperience>
  </div>
</template>

<script>
import TopBar from "./components/TopBar";
import WorkExperience from "./components/WorkExperience";

export default {
  name: "App",
  components: {
    TopBar,
    WorkExperience
  }
};
</script>

<style>

</style>
