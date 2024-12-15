export type DepartmentSpending = {
  record_date: string;
  account_type: string;
  account_name: string;
  withdraw_amt: string;
  deposit_amt: string;
  net_amt: string;
};

export type Department = {
  name: string;
  code: string;
  programs: string[];
};

export const DEPARTMENTS: Department[] = [
  {
    name: "Department of Defense",
    code: "DOD",
    programs: ["Military Programs", "Civil Programs", "Operation & Maintenance"]
  },
  {
    name: "Department of Health and Human Services",
    code: "HHS",
    programs: ["Medicare", "Medicaid", "Public Health"]
  },
  {
    name: "Department of the Treasury",
    code: "TRS",
    programs: ["Interest on Treasury Securities", "IRS Tax Refunds"]
  },
  {
    name: "Department of Education",
    code: "EDU",
    programs: ["Student Financial Aid", "Education Grants", "Research Programs"]
  }
]; 