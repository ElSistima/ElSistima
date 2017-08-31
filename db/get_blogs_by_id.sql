select * from blog_posts
join users on blog_posts.user_id = users.user_id
where posts_id = $1
order by date_year desc, date_month_number desc,date_day desc;
