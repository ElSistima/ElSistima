CREATE TABLE "users" (
	"user_id" serial NOT NULL,
	"user_auth_id" TEXT NOT NULL,
	"user_name" TEXT NOT NULL,
	"user_profile_pic" TEXT NOT NULL,
	"admin_status" BOOLEAN NOT NULL DEFAULT 'false',
	CONSTRAINT users_pk PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "blog_posts" (
	"posts_id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"post_content" TEXT NOT NULL,
	"post_thumbnail" TEXT NOT NULL,
	"post_title" TEXT NOT NULL,
	"date" TIMESTAMP default date_trunc('second', now()) NOT NULL,
	CONSTRAINT blog_posts_pk PRIMARY KEY ("posts_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "volunteers" (
	"vol_id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"title" TEXT NOT NULL,
	"profile_pic" TEXT NOT NULL,
	"facebook_link" TEXT NOT NULL,
	"twitter_link" TEXT NOT NULL,
	"linkedin_link" TEXT NOT NULL,
	"summary" TEXT NOT NULL,
	CONSTRAINT volunteers_pk PRIMARY KEY ("vol_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "calendar" (
	"id" serial NOT NULL,
	"type" TEXT NOT NULL,
	"title" TEXT NOT NULL,
	"thumbnails" TEXT NOT NULL,
	"date" TIMESTAMP default date_trunc('second', now()) NOT NULL,
	CONSTRAINT calendar_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "donations" (
	"donation_id" serial NOT NULL,
	"amount" float4 NOT NULL,
	"name" TEXT NOT NULL,
	"date" TIMESTAMP default date_trunc('second', now()) NOT NULL,
	CONSTRAINT donations_pk PRIMARY KEY ("donation_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "quotes" (
	"quote_id" serial NOT NULL,
	"quote_content" TEXT NOT NULL,
	"quote_author" TEXT NOT NULL,
	CONSTRAINT quotes_pk PRIMARY KEY ("quote_id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");
