<template>
  <div class="booking-details">
      <div class="field">
          <span>Surname: </span>
          <span>{{booking.surname}}</span>
      </div>
      <div class="field">
          <span>Forename: </span>
          <span>{{booking.forename}}</span>
      </div>
      <div class="field">
          <span>Email: </span>
          <span>{{booking.email}}</span>
      </div>
      <div class="field">
          <span>Checked In?: </span>
          <input type="checkbox" v-model=booking.isCheckedIn>
      </div>
  </div>
</template>

<script>
export default {
    name: "booking",
    props: ['booking']

}
</script>

<style lang="css" scoped>

.booking-details{
    padding: 10px;
    margin: 10px;
    background-color: red;
}

</style>