import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  serial,
  uniqueIndex,
  varchar,
  numeric,
  text
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  collection: varchar("collection", { length: 256 }),
  image: varchar("image", { length: 256 }),
  price: numeric("price"),
  descriptiontitle: varchar("descriptiontitle", { length: 256 }),
  description: varchar("description"),
  descriptiontitle2: varchar("descriptiontitle2", { length: 256 }),
  description2: varchar("description2"),
  spec1: varchar("spec1", { length: 256 }),
  spec2: varchar("spec2", { length: 256 }),
  spec3: varchar("spec3", { length: 256 }),
  spec4: varchar("spec4", { length: 256 }),
  spec5: varchar("spec5", { length: 256 }),
  spec6: varchar("spec6", { length: 256 }),
  spec7: varchar("spec7", { length: 256 }),
  spec8: varchar("spec8", { length: 256 }),
});

export const softwareProducts = pgTable("softwareproducts", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  collection: varchar("collection", { length: 256 }),
  image: varchar("image", { length: 256 }),
  price: numeric("price"),
  descriptiontitle: varchar("descriptiontitle", { length: 256 }),
  description: varchar("description"),
  descriptiontitle2: varchar("descriptiontitle2", { length: 256 }),
  description2: varchar("description2"),
  spec1: varchar("spec1", { length: 256 }),
  spec2: varchar("spec2", { length: 256 }),
  spec3: varchar("spec3", { length: 256 }),
  spec4: varchar("spec4", { length: 256 }),
  spec5: varchar("spec5", { length: 256 }),
  spec6: varchar("spec6", { length: 256 }),
  spec7: varchar("spec7", { length: 256 }),
  spec8: varchar("spec8", { length: 256 }),
});

export const voucher =  pgTable("voucher", {
id: serial("id"). primaryKey().unique(),
email: varchar("email", {length: 256} ),
isactivated: boolean("isactivated").default(false)
})

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey().unique(),
  productid: integer("productid"),
  name: varchar("name", {length: 256}),
  stars: integer("stars"),
  review: varchar("review")
});

export const orderUser = pgTable("orderUser", {
  id: serial("id").primaryKey().unique(),
  name: varchar("name", { length: 256 }),
  email: varchar("email", { length: 256 }),
  password: varchar("password", { length: 256 }),
  zipcode: varchar("zipcode", { length: 256 }),
  street: varchar("street", { length: 256 }),
  number: varchar("number", { length: 256 }),
  country: varchar("country", { length: 256 }),
  city: varchar("city", { length: 256 }),
});


export const emailReferences = pgTable("emaileferences", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 256 }),
});

export const productCodes = pgTable("productcodes", {
  id: serial("id").primaryKey(),
  order: varchar("order", { length: 256 }),
  code: varchar("code", { length: 256 }),
  send: boolean("send")
});

export const blogs = pgTable("blogs",
{
  id: serial("id").primaryKey().unique(),
  title: text("title"),
  intro: text("intro"),
  text1: text("text1"),
  text2: text("text2"),
  header1: text("header1"),
  text3: text("text3"),
  text4: text("text4"),
  header2: text("header2"),
  text5: text("text5"),
  text6: text("text6"),
  text7: text("text7"),
  image: text("image"),
  author: text("author"),
  date: text("date")
})