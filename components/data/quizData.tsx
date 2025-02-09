import { Role } from "@/types";
import { engineerSet1Stages } from "./roles/engineer/set1";
import { engineerSet2Stages } from "./roles/engineer/set2";
import { engineerSet3Stages } from "./roles/engineer/set3";
import { engineerSet4Stages } from "./roles/engineer/set4";

import { nonEngineerSet1Stages } from "./roles/non-engineer/set1";
import { nonEngineerSet2Stages } from "./roles/non-engineer/set2";
import { nonEngineerSet3Stages } from "./roles/non-engineer/set3";
import { nonEngineerSet4Stages } from "./roles/non-engineer/set4";

export const quizDataByRole: Role[] = [
  { 
    roleName: "Engineer",
    quizSets: [
      { setName: "Set 1", stages: engineerSet1Stages },
      { setName: "Set 2", stages: engineerSet2Stages },
      { setName: "Set 3", stages: engineerSet3Stages },
      { setName: "Set 4", stages: engineerSet4Stages },
    ]
  },
  { 
    roleName: "Non-Engineer",
    quizSets: [
      { setName: "Set 1", stages: nonEngineerSet1Stages },
      { setName: "Set 2", stages: nonEngineerSet2Stages },
      { setName: "Set 3", stages: nonEngineerSet3Stages },
      { setName: "Set 4", stages: nonEngineerSet4Stages },
    ]
  }
];
