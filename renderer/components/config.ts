import AttentionNeededIcon from "../../../resources/images/check_attention_icon.svg";
import SuccessCheckIcon from "../../../resources/images/check_success_icon.svg";
import ProblemIcon from "../../../resources/images/problem_icon.svg";
import FailedIcon from "../../../resources/images/status_failed_icon.svg";

export const checkStatusIcons = {
  5: SuccessCheckIcon,
  4: SuccessCheckIcon,
  3: AttentionNeededIcon,
  2: ProblemIcon,
  1: ProblemIcon,
  0: FailedIcon,
};

export const visibleParts = ["A", "B", "C", "TOWER", "door"];

export const variableSeparator = "-varSeparator-";
export const spaceSeparator = "-spaceSeparator-";
