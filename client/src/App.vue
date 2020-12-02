<template>
  <div id="app">
    <booking-form />
    <bookings-list :bookings="bookings" />
  </div>
</template>

<script>
import bookingForm from './components/bookingForm'
import bookingList from './components/bookingsList'
import BookingService from './services/BookingService.js'
import { eventBus } from '@/main.js'

export default {
  name: 'app',
  data() {
    return {
      bookings: []
    }
  },

  mounted(){
    this.fetchBookings(),

    eventBus.$on('booking-added', (booking) =>{
      this.bookings.push(booking)}),

    eventBus.$on('booking-deleted', (id) => {
      const index = this.bookings.findIndex(item => item._id === id)
      this.bookings.splice(index, 1)
    })
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