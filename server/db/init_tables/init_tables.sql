CREATE TABLE "users" (
	"user_id" serial NOT NULL,
	"user_auth_id" TEXT NOT NULL,
	"user_name" TEXT NOT NULL,
	"user_profile_pic" TEXT NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);
