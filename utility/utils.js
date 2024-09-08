import onboardingStatusTypes from "contants/onboardingStatusTypes";

const getMsmeStatusColor = (status) => {
  switch (status) {
    case onboardingStatusTypes.COMPLETED:
      return "emerald-500";
    case onboardingStatusTypes.PENDING:
      return "orange-500";
    case onboardingStatusTypes.INPROGRESS:
      return "red-400";
    default:
      return "emerald-500";
  }
};

export { getMsmeStatusColor };
