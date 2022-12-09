CREATE TABLE "public"."article_follower" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "articleId" uuid NOT NULL, "userId" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("articleId") REFERENCES "public"."article"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("userId") REFERENCES "auth"."users"("id") ON UPDATE cascade ON DELETE cascade);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
