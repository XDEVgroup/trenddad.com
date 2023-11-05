import { emailReferences } from "./../../drizzle/schema";
import db from "../../drizzle/db";
import * as nodemailer from "nodemailer";
import { generateTemplateReference } from "../../utils/templateReference";

const createReference = async (email: string) => {
  await db.insert(emailReferences).values({ email: email });

  const transporter = nodemailer.createTransport({
    host: "mail.trenddad.site",
    port: 465,
    secure: true,
    auth: {
      user: "info@trenddad.site", // generated ethereal user
      pass: process.env.EMAILPASS, // generated ethereal password
    },
  });

  const code = "DADDY10";

  await transporter.sendMail({
    from: "TRENDDAD <info@trenddad.site>", // sender address
    to: email, // list of receivers
    subject: `Try this code now: ' ${code} '`, // Subject line
    text: `${code} `, // plain text body
    html: generateTemplateReference(code, email as string), // html body
  });
};

export default defineEventHandler(async (event) => {
  const { email } = await readBody(event);
  const data = await createReference(email);

  return { data: data };
});
