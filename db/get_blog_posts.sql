select * from blog_posts
join users on users.user_id = blog_posts.user_id
order by date_year desc, date_month_number desc,date_day desc;
