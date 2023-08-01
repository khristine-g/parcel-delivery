# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Sample seed data for users table
users_data = [
  { username: "Alice", password: "secure_password1", email: "alice@example.com", phone_number: 1112223333, address: "789 Oak Ave, City C", admin_tag: false },
  { username: "AdminUser", password: "admin123", email: "admin@example.com", phone_number: 4445556666, address: "101 Admin St, City D", admin_tag: true },
]
User.create!(users_data)

# Sample seed data for recievers table
recievers_data = [
  { username: "John Doe", email: "john@example.com", phone_number: 1234567890, address: "123 Main St, City A" },
  { username: "Jane Smith", email: "jane@example.com", phone_number: 9876543210, address: "456 Elm St, City B" },
]
Reciever.create!(recievers_data)

# Sample seed data for mails table
mails_data = [
  { user_id: 1, receiver_id: 2, content: "Hello, how are you doing?" },
  { user_id: 2, receiver_id: 1, content: "Thanks for the package!" },
]
Mail.create!(mails_data)

# Sample seed data for parcels table
parcels_data = [
  { weight: 5, password: "secure123", present_location: "Warehouse A", status: "In Transit", user_id: 1, destination: "Home Address", Type_of_shipment: "Express", Carrier: "Carrier X", journey_duration: "2 days", Package: 1, travel_distance: 150, Pick_up_date: Time.now, Departure_date: Time.now + 2.days, receiver_id: 2 },
  { weight: 10, password: "delivery789", present_location: "Courier Center B", status: "Delivered", user_id: 2, destination: "Office Address", Type_of_shipment: "Standard", Carrier: "Carrier Y", journey_duration: "5 days", Package: 2, travel_distance: 300, Pick_up_date: Time.now - 3.days, Departure_date: Time.now - 1.day, receiver_id: 1 },
]
Parcel.create!(parcels_data)