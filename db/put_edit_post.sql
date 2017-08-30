update blog_posts set post_content = $2 where posts_id = $1;
update blog_posts set post_title = $3 where posts_id = $1;
update blog_posts set blog_subtitle = $4 where posts_id = $1;
