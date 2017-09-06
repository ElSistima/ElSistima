update media set media_url = $2 where id = $1;
update media set is_picture = $3 where id = $1;
update media set caption = $4 where id = $1;
update media set post_time = $5 where id = $1;
