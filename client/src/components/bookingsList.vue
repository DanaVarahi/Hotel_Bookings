<template>
  <div id="bookings-wrapper">
      <booking v-for="(booking, index) in bookings" :key="index" :booking="booking" />
  </div>
</template>

<script>
import booking from './booking.vue'
import BookingService from '../services/BookingService.js'


export default {
    name: "bookings-list",
    props: ['bookings'],
    components: {
        'booking': booking,
    },
    mounted(){
     
    },
    methods: {

    }

}
</script>

<style>

</style>