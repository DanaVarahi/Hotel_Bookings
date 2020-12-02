use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        forename: 'Jhon',
        surname: 'Smith',
        email: 'js@gmail.com',
        isCheckedIn: false
    },

    {
        forename: 'Kate',
        surname: 'Wood',
        email: 'kw@gmail.com',
        isCheckedIn: true
    },
    {
        forename: 'Toni',
        surname: 'Brown',
        email: 'tb@gmail.com',
        isCheckedIn: false
    }
])