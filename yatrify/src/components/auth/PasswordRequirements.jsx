import { CheckCircle2, Circle, ShieldCheck } from "lucide-react";
import { cn } from "../../lib/utils";
import { getPasswordRequirementState } from "../../lib/passwordPolicy";

const PasswordRequirements = ({ password = "", className = "" }) => {
  const requirements = getPasswordRequirementState(password);

  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-slate-50/90 p-4 shadow-sm",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-4 w-4 text-indigo-600" />
        <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
          Password Requirements
        </p>
      </div>

      <ul className="mt-4 space-y-3">
        {requirements.map((requirement) => (
          <li key={requirement.id} className="flex items-center gap-3">
            <span
              className={cn(
                "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition",
                requirement.met
                  ? "border-emerald-300 bg-emerald-100 text-emerald-600"
                  : "border-slate-300 bg-white text-slate-400"
              )}
            >
              {requirement.met ? (
                <CheckCircle2 className="h-3.5 w-3.5" />
              ) : (
                <Circle className="h-2 w-2 fill-current" />
              )}
            </span>

            <span
              className={cn(
                "text-sm font-medium transition",
                requirement.met ? "text-slate-700" : "text-slate-400"
              )}
            >
              {requirement.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordRequirements;
