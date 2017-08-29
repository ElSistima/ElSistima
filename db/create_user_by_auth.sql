insert into users (user_auth_id,
user_name,
user_profile_pic,
admin_status)
values
($1, $2, $3, default);
