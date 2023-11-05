// file: ~/server/api/auth/[...].ts
//@ts-ignore
import { NuxtAuthHandler } from "#auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import db  from "../../../drizzle/db"

export default NuxtAuthHandler({
  secret: "2389u234jfn49i38rh234n28734rhngf93e8u19ew12bn80dyghb23",
  session: {
    strategy: "jwt",
  },
  //@ts-ignore
  adapter: DrizzleAdapter(db),
  providers: [
    
  ],
});
