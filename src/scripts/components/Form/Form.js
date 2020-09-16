import { validationErrors } from "../../constants/constants";

export default class Form {
  constructor(form, validationErrors) {
    this.form = form;
    this.validationErrors = validationErrors;
    this.checkInputValidity = this.checkInputValidity.bind(this);
    this.setEventListeners = this.setEventListeners.bind(this);
    this.formInputs = Array.from(this.form.querySelectorAll("input"));
  }

  checkInputValidity(inputElement) {
    if (inputElement.validity.valueMissing) {
      inputElement.nextElementSibling.textContent = validationErrors.Empty;
      return false;
    }
    if (
      (inputElement.validity.tooShort || inputElement.validity.tooLong) &&
      inputElement.type === "password"
    ) {
      inputElement.nextElementSibling.textContent = validationErrors.LongShortPass;
      return false;
    }
    if (
      (inputElement.validity.tooShort || inputElement.validity.tooLong) &&
      inputElement.type === "text"
    ) {
      inputElement.nextElementSibling.textContent = validationErrors.LongShortName;
      return false;
    }
    if (!inputElement.validity.valid && inputElement.type === "email") {
      inputElement.nextElementSibling.textContent = validationErrors.NoEmail;
      return false;
    }
    inputElement.nextElementSibling.textContent = "";
    return true;
  }

  setSubmitButtonState() {
    let isValid = true;

    this.formInputs.forEach((elem) => {
      if (!this.checkInputValidity(elem)) {
        isValid = false;
      }
    });

    if (isValid === true) {
      this.form.submit.classList.remove("button_type_enter");
      this.form.submit.classList.add("button_type_enter_active");
      this.form.submit.removeAttribute("disabled");
    } else {
      this.form.submit.classList.remove("button_type_enter_active");
      this.form.submit.classList.add("button_type_enter");
      this.form.submit.setAttribute("disabled", true);
    }
  }

  setEventListeners() {
    this.form.addEventListener("input", () => {
      this.setSubmitButtonState();
    });
  }
}
