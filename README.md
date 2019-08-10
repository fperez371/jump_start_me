# JumpStartMe

JumpStartMe is a web application inspired by Kickstarter.

[Visit the Live JumpStartMe App here](https://jumpstartme.herokuapp.com/#/)

<p>
    <img src="app/assets/images/JumpStartMe.jpg"  />
</p>
---

## Features

-   User Authentication
-   Home Page
    -   Featured Project
    -   Recommended Projects
    -   Search Projects
    -   Browse Project categories
-   Start a project
    -   Create a project with a funding goal, rewards, a deadline, etc. just like on Kickstarter!

## Technologies Used

-   ActiveRecord

-   ActiveStorage (AWS)

-   PostgreSQL

-   React/Redux (frontend)

-   jQuery

-   ES6 JavaScript

-   Ruby on Rails (backend)

    Here is a simple search feature implemented with Ruby on Rails. The search term is passed directly into the path and ActiveRecord is used to search for similar terms.

    ```ruby
      # /app/controllers/api/search_controller.rb

      class Api::SearchController < ApplicationController

        def show
          searchParam = params[:id]
          @projects = Project.where("name ILIKE ?", "%#{searchParam}%")
          render 'api/search/show'
        end

      end
    ```
