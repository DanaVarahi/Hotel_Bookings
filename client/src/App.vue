<template>
  <div id="app">
    <booking-form />
    <bookings-list />
  </div>
</template>

<script>
import bookingForm from './components/bookingForm'
import bookingList from './components/bookingsList'
import BookingService from './services/BookingService.js'

export default {
  name: 'app',
  data() {
    return {
      bookings: []
    }
  },

  mounted(){
    this.fetchBookings()
  },
  components: {
    'booking-form': bookingForm,
    'bookings-list': bookingList
  },

  methods: {
    fetchBookings(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings)
    }
  }
}
</script>

<style>

</style>