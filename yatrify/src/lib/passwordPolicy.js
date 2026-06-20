export const PASSWORD_REQUIREMENTS = [
  {
    id: "length",
    label: "At least 8 characters",
    test: (password) => password.length >= 8,
  },
  {
    id: "uppercase",
    label: "One uppercase letter",
    test: (password) => /[A-Z]/.test(password),
  },
  {
    id: "number",
    label: "One number",
    test: (password) => /\d/.test(password),
  },
  {
    id: "special",
    label: "One special character",
    test: (password) => /[^A-Za-z0-9]/.test(password),
  },
];

export const PASSWORD_POLICY_MESSAGE =
  "Password must be at least 8 characters and include one uppercase letter, one number, and one special character.";

const normalizePassword = (password) => String(password ?? "");

export const getPasswordRequirementState = (password) => {
  const normalizedPassword = normalizePassword(password);

  return PASSWORD_REQUIREMENTS.map((requirement) => ({
    ...requirement,
    met: requirement.test(normalizedPassword),
  }));
};

export const isStrongPassword = (password) =>
  getPasswordRequirementState(password).every((requirement) => requirement.met);
