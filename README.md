# vocallytest
Interview assignment


## use docker-compose up to run the container  ####'
### This is Book Liabary web app and it's a interview assignment ###
The whole app is dockerize and will only run with docker  



Auth is handled by jwt token , i have made specific middleware to handle auth
       
       
       
       
       
Schema User,Book User and book share 1 to 1 relationship 
User-Username,password
Book-BookName,Author,Description



Api end-point 
############public routes #############
1. /api/user/register  for signup the use
2. /api/user/login   for auth 

######### private routes ###################
3. /api/book/addbook to add book in database
4. /api/book/updatebook/:id to update book content 
5. /api/book/deletebook/:id


Hope i will get recived some mail in form of feedback 
