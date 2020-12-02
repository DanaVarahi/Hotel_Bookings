<template>
  <div class="booking-details">
      <div class="field">
          <p class="label">Surname: </p>
          <p class="detail">{{booking.surname}}</p>
      </div>
      <div class="field">
          <p class="label">Forename: </p>
          <p class="detail">{{booking.forename}}</p>
      </div>
      <div class="field">
          <p class="label">Email: </p>
          <p class="detail">{{booking.email}}</p>
      </div>
      <div class="field">
          <p class="label">Checked In?: </p>
          <input class="detail" type="checkbox" v-model=booking.isCheckedIn>
      </div>
      <button class="delete-booking" v-on:click="deleteBooking">Delete</button>
  </div>
</template>

<script>
import BookingService from '../services/BookingService.js'
import { eventBus } from '@/main.js'

export default {
    name: "booking",
    props: ['booking'],
    methods:{
        deleteBooking(){
            BookingService.deleteBooking(this.booking._id)
            .then( () => eventBus.$emit('booking-deleted', this.booking._id))
        }
    }
}
</script>

<style lang="css" scoped>

.booking-details{
    padding: 10px;
    margin: 10px;
    background-color: white;
    border: 1px solid grey;
}

.field {
    display: grid;
    grid-template-columns: 100px 1fr;
    margin: -15px 0px;
}

.label{
    grid-column: 1 / 2;
    padding: 3px;
}

.detail {
    grid-column: 2 / 3;
    border: 1px solid grey;
    color: rgb(70, 70, 70);
    padding: 3px;
}

</style>