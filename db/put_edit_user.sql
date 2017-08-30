update users set user_name = $2 where user_id = $1;
update users set admin_status = $3 where user_id = $1;
