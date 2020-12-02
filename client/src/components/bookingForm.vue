<template>
  <form v-on:submit="addBooking" mehtod="post">
    <label for="forename">Forename:</label>
    <input type="text" id="forename" v-model="forename" required/>

    <label for="surname">Surname:</label>
    <input type="text" id="surname" v-model="surname" required/>

    <label for="email">Email:</label>
    <input type="text" id="email" v-model="email" required/>

    <input type="submit" value="Save" id="save"/>
  </form>
</template>

<script>
export default {

}
</script>

<style>

</style>