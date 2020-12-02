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
import BookingService from '../services/BookingService'
import { eventBus } from '@/main.js'
export default {
    name: 'booking-form',
    data(){
        return{
            forname: "",
            surname: "",
            email: ""
        }
    },
    methods: {
        addBooking(event){
            event.preventDefault()
            const booking = {
                forename: this.forename,
                surname: this.surname,
                email: this.email,
                isCheckedIn: false
            }

            BookingService.postBooking(booking)
            .then(res => eventBus.$emit('booking-added', res))
            .then(() => this.forename="")
            .then(() => this.surname="")
            .then(() => this.email="")
        }
    }

}
</script>

<style>

</style>