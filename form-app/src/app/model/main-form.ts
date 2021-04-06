import { FirstStepForm } from "./first-step-form";
import { FourthStepForm } from "./fourth-step-form";
import { SecondStepForm } from "./second-step-form";
import { ThirdStepForm } from "./third-step-form";

export class MainForm {
    firstStepForm: FirstStepForm = new FirstStepForm();
    secondStepForm: SecondStepForm = new SecondStepForm();
    thirdStepForm: ThirdStepForm = new ThirdStepForm();
    fourthStepForm: FourthStepForm = new FourthStepForm();
}