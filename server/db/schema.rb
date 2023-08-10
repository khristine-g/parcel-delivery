# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_08_10_121230) do
  create_table "admins", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_admins_on_email"
  end

  create_table "mails", force: :cascade do |t|
    t.integer "user_id"
    t.integer "receiver_id"
    t.string "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "parcels", force: :cascade do |t|
    t.string "sender_name"
    t.string "sender_email"
    t.string "sender_address"
    t.string "receiver_name"
    t.string "receiver_email"
    t.string "receiver_address"
    t.string "receiver_country"
    t.string "weight"
    t.string "type_of_shipment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id", null: false
    t.string "tracking_number"
    t.string "status", default: "Pending"
    t.string "location"
    t.string "sender_phone_number"
    t.string "receiver_phone_number"
    t.index ["tracking_number"], name: "index_parcels_on_tracking_number", unique: true
    t.index ["user_id"], name: "index_parcels_on_user_id"
  end

  create_table "recievers", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.integer "phone_number"
    t.string "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_admin", default: false
  end

  add_foreign_key "parcels", "users"
end
