const baseUrl = 'http://localhost:3000/api/bookings'

export default {
    getBookings(){
       return fetch(baseUrl)
       .then(res => res.json())
    }
}