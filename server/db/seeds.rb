# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.create!(username: "User1", email: 'user1@example.com', password: 'password1')
User.create!(username: "User2", email: 'user2@example.com', password: 'password2')

# Seed data for Parcel model
Parcel.create!(
  user_id: 1,
  destination: '123 Main St, City A, Country X',
  status: 'pending',
  present_location: 'Pickup Point 1',
  weight: '2 kg'
)

Parcel.create!(
  user_id: 1,
  destination: '456 Elm St, City B, Country Y',
  status: 'delivered',
  present_location: 'Delivery Hub B',
  weight: '3 kg'
)

Parcel.create!(
  user_id: 2,
  destination: '789 Oak St, City C, Country Z',
  status: 'in_transit',
  present_location: 'Transit Point 2',
  weight: '1 kg'
)