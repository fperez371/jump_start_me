# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create!(name:"demo-guy", email: "demo@demoemail.net", password: "starwars123")

Project.create!(body: "A decadent and beautiful postcard book featuring strange and wonderful creatures from unknown parts.", name: "Critters", category: "Arts", proj_image_url: "test_url", creator_id: 2, goal_amt: 10000, deadline: DateTime.now)
Project.create!(body: "Another collection of 100 ink drawings and short stories from the world of Bertram Fiddle. A Make 100 project.", name: "The MACABRE", category: "Comics&Illustration", proj_image_url: "second_url", creator_id: 2, goal_amt: 100000, deadline: DateTime.now)
Project.create!(body: "Scientists who changed the way we see the Universe: Copernicus, Brahe, Kepler and Galileo.", name: "Some Old Books", category: "Publishing", proj_image_url: "another_url", creator_id: 2, goal_amt: 1000, deadline: DateTime.now)
Project.create!(body: "A dance of constant change, a whole lot of labor, and absolute togetherness. World Premiere - March 7-10, 2019 - Velocity Dance Center", name: "Dancing stuff", category: "Arts", proj_image_url: "yet_another_url", creator_id: 2, goal_amt: 5, deadline: DateTime.now)




