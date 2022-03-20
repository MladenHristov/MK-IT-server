"# MK-IT-server" 


{url}/api/movies', moviesRouter); //You can get all movies, create new ones, and edit and delete movies //

  ('/top')
  get   --5TopMovies
  
  You have .filter() .sort() .paginate() added here!
  ('/')  
  .get    --getAllMovies)
  .post   --createMovie);
  
  ('/movie/:id')
  get     --getMovie
  patch   --updateMovie
  delete  --deleteMovie
  
  ---------------------------------------------------  

{url}/api/users CRUD for Users

   For All Users   
   post /signup                -- signup
   post /login                 -- login
   post /forgotPassword        -- forgotPassword 
   patch /resetPassword/:token --resetPassword
   patch /updateMyPassword     --updatePassword
   get /me                     --getUser
   patch /updateMe             --updateMe
   delete /deleteMe            --deleteMe
   
   For Admin only
  ('/')
  .get --getAllUsers
  .post --createUser
  ('/:id')
  .get    --getUser
  .patch  --updateUser
  .delete --deleteUser
  
  ---------------------------------------------------- 

{url}/api/review   --reviewRoutes // In /review there are review/notes on films and rating of films  
  ('/')
  .get      --getAllReviews
  .post     --createReview

  ('/:id')
  .get      --getReview)
  .patch    --updateReview
  .delete   --deleteReview
  
   ----------------------------------------------------
  
{url}/api/favorite   --favoriteRoutes

  ('/')
  get        --getAllFavorites
  post       --createFavorite

  ('/:id')
  get        --getFavorite
  delete     --deleteFavorite





