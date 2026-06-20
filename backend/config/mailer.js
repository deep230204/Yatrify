const dns = require("dns").promises;
const net = require("net");
const nodemailer = require("nodemailer");

const parsePort = (value, fallback) => {
  const parsedValue = Number.parseInt(value, 10);
  return Number.isFinite(parsedValue) ? parsedValue : fallback;
};

const getMailConfig = () => {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const port = parsePort(process.env.SMTP_PORT, 587);
  const secure =
    process.env.SMTP_SECURE === "true" || port === 465;
  const preferIpv4 = process.env.SMTP_PREFER_IPV4 !== "false";
  const from =
    process.env.MAIL_FROM?.trim() || user || "";

  return {
    host,
    port,
    secure,
    preferIpv4,
    from,
    auth: user && pass ? { user, pass } : null,
  };
};

const isMailConfigured = () => {
  const config = getMailConfig();
  return Boolean(config.host && config.auth?.user && config.auth?.pass && config.from);
};

const resolveTransportHost = async (host, preferIpv4) => {
  if (!host || !preferIpv4 || net.isIP(host)) {
    return {
      host,
      tls: undefined,
    };
  }

  try {
    const { address } = await dns.lookup(host, { family: 4 });

    return {
      host: address,
      tls: {
        servername: host,
      },
    };
  } catch (error) {
    console.warn(
      `SMTP IPv4 lookup failed for ${host}. Falling back to default DNS resolution: ${error.message}`
    );

    return {
      host,
      tls: undefined,
    };
  }
};

const createTransporter = async () => {
  const config = getMailConfig();

  if (!isMailConfigured()) {
    throw new Error(
      "Email service is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and MAIL_FROM in backend/.env."
    );
  }

  const resolvedTransport = await resolveTransportHost(config.host, config.preferIpv4);

  return nodemailer.createTransport({
    host: resolvedTransport.host,
    port: config.port,
    secure: config.secure,
    auth: config.auth,
    tls: resolvedTransport.tls,
  });
};

const sendPasswordResetOtpEmail = async ({ to, otp, name }) => {
  const transporter = await createTransporter();
  const { from } = getMailConfig();
  const recipientName = name || "Traveler";

  await transporter.sendMail({
    from,
    to,
    subject: "Reset your Yatrify password",
    text: [
      `Hello ${recipientName},`,
      "",
      "We received a request to reset your Yatrify password.",
      "",
      `Your OTP is: ${otp}`,
      "",
      "This code expires in 10 minutes.",
      "If you did not request a password reset, you can safely ignore this email.",
    ].join("\n"),
    html: `
      <div style="margin:0; padding:40px 16px; background:#eef2ff; font-family:Arial,Helvetica,sans-serif; color:#0f172a;">
        <div style="max-width:620px; margin:0 auto;">
          <div style="margin:0 auto 18px; width:88px; height:88px; border-radius:28px; background:linear-gradient(135deg,#4f46e5 0%,#7c3aed 55%,#d946ef 100%); text-align:center; line-height:88px; font-size:34px; color:#ffffff; box-shadow:0 20px 45px rgba(99,102,241,0.28);">
            ✈
          </div>

          <div style="background:rgba(255,255,255,0.92); border:1px solid rgba(255,255,255,0.7); border-radius:36px; overflow:hidden; box-shadow:0 25px 80px rgba(99,102,241,0.15);">
            <div style="padding:20px 24px 0; text-align:center;">
              <div style="display:inline-block; padding:8px 16px; border-radius:999px; background:#eef2ff; color:#5b21b6; font-size:12px; font-weight:700; letter-spacing:1.4px; text-transform:uppercase;">
                Yatrify Secure Access
              </div>
            </div>

            <div style="padding:18px 32px 10px; text-align:center;">
              <h1 style="margin:0; font-size:36px; line-height:1.15; font-weight:700; color:#0f172a;">
                Reset your password
              </h1>
              <p style="margin:14px 0 0; font-size:16px; line-height:1.8; color:#64748b;">
                Use this one-time password to get back into your account and continue planning your next trip.
              </p>
            </div>

            <div style="padding:28px 32px 34px;">
              <div style="margin:0 0 22px; padding:22px 24px; border-radius:24px; background:#ffffff; border:1px solid #e2e8f0;">
                <p style="margin:0; font-size:16px; line-height:1.8; color:#334155;">
                  Hello <strong style="color:#0f172a;">${recipientName}</strong>,
                </p>
                <p style="margin:10px 0 0; font-size:15px; line-height:1.8; color:#475569;">
                  We received a password reset request for your Yatrify account. Enter the OTP below in the app to continue.
                </p>
              </div>

              <div style="margin:0 0 22px; border-radius:28px; background:linear-gradient(135deg,#eef2ff 0%,#f5f3ff 50%,#fdf2f8 100%); padding:28px 24px; text-align:center; border:1px solid #e9d5ff;">
                <div style="margin:0 0 10px; font-size:12px; font-weight:700; letter-spacing:1.8px; text-transform:uppercase; color:#6d28d9;">
                  One-Time Password
                </div>
                <div style="display:inline-block; padding:16px 22px; border-radius:22px; background:#ffffff; box-shadow:0 14px 35px rgba(124,58,237,0.10); font-size:38px; line-height:1; font-weight:700; letter-spacing:12px; color:#1e1b4b;">
                  ${otp}
                </div>
              </div>

              <div style="margin:0 0 18px; padding:18px 20px; border-radius:20px; background:#fff7ed; border:1px solid #fdba74; color:#9a3412; font-size:14px; line-height:1.8; text-align:center;">
                This OTP expires in <strong>10 minutes</strong>.
              </div>

              <p style="margin:0; text-align:center; font-size:14px; line-height:1.8; color:#64748b;">
                If you did not request this, you can ignore this email and your account will stay secure.
              </p>
            </div>

            <div style="padding:18px 28px 24px; text-align:center; font-size:12px; line-height:1.8; color:#94a3b8;">
              Yatrify account protection email
            </div>
          </div>
        </div>
      </div>
    `,
  });
};

module.exports = {
  isMailConfigured,
  sendPasswordResetOtpEmail,
};
