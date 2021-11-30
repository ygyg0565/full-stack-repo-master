function formValidation() {
  if (document.getElementById("name").value === "") {
    document.getElementById("nameError").innerHTML = "Username cannot be blank";
    document.getElementById("name").classList.contains("border-dark") &&
      document.getElementById("name").classList.remove("border-dark");
    document.getElementById("name").classList.contains("border-success") &&
      document.getElementById("name").classList.remove("border-success");
    document.getElementById("name").classList.add("border-danger");
    document.getElementById("nameDanger").classList.remove("d-none");
    !document.getElementById("nameSuccess").classList.contains("d-none") &&
      document.getElementById("nameSuccess").classList.add("d-none");
  } else if (!/^[a-z]+$/.test(document.getElementById("name").value)) {
    document.getElementById("nameError").innerHTML =
      "Username only have small letters";
    document.getElementById("name").classList.contains("border-dark") &&
      document.getElementById("name").classList.remove("border-dark");
    document.getElementById("name").classList.contains("border-success") &&
      document.getElementById("name").classList.remove("border-success");
    document.getElementById("name").classList.add("border-danger");
    document.getElementById("nameDanger").classList.remove("d-none");
    !document.getElementById("nameSuccess").classList.contains("d-none") &&
      document.getElementById("nameSuccess").classList.add("d-none");
  } else {
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("name").classList.contains("border-dark") &&
      document.getElementById("name").classList.remove("border-dark");
    document.getElementById("name").classList.contains("border-danger") &&
      document.getElementById("name").classList.remove("border-danger");
    document.getElementById("name").classList.add("border-success");
    !document.getElementById("nameDanger").classList.contains("d-none") &&
      document.getElementById("nameDanger").classList.add("d-none");
    document.getElementById("nameSuccess").classList.remove("d-none");
  }
  if (document.getElementById("email").value === "") {
    document.getElementById("emailError").innerHTML = "Email cannot be blank";
    document.getElementById("email").classList.contains("border-dark") &&
      document.getElementById("email").classList.remove("border-dark");
    document.getElementById("email").classList.contains("border-success") &&
      document.getElementById("email").classList.remove("border-success");
    document.getElementById("email").classList.add("border-danger");
    document.getElementById("emailDanger").classList.remove("d-none");
    !document.getElementById("emailSuccess").classList.contains("d-none") &&
      document.getElementById("emailSuccess").classList.add("d-none");
  } else if (
    !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      document.getElementById("email").value
    )
  ) {
    document.getElementById("emailError").innerHTML = "Provide valid email";
    document.getElementById("email").classList.contains("border-dark") &&
      document.getElementById("email").classList.remove("border-dark");
    document.getElementById("email").classList.contains("border-success") &&
      document.getElementById("email").classList.remove("border-success");
    document.getElementById("email").classList.add("border-danger");
    document.getElementById("emailDanger").classList.remove("d-none");
    !document.getElementById("emailSuccess").classList.contains("d-none") &&
      document.getElementById("emailSuccess").classList.add("d-none");
  } else {
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("email").classList.contains("border-dark") &&
      document.getElementById("email").classList.remove("border-dark");
    document.getElementById("email").classList.contains("border-danger") &&
      document.getElementById("email").classList.remove("border-danger");
    document.getElementById("email").classList.add("border-success");
    !document.getElementById("emailDanger").classList.contains("d-none") &&
      document.getElementById("emailDanger").classList.add("d-none");
    document.getElementById("emailSuccess").classList.remove("d-none");
  }
  if (document.getElementById("password").value === "") {
    document.getElementById("passwordError").innerHTML =
      "Password cannot be blank";
    document.getElementById("password").classList.contains("border-dark") &&
      document.getElementById("password").classList.remove("border-dark");
    document.getElementById("password").classList.contains("border-success") &&
      document.getElementById("password").classList.remove("border-success");
    document.getElementById("password").classList.add("border-danger");
    document.getElementById("passwordDanger").classList.remove("d-none");
    !document.getElementById("passwordSuccess").classList.contains("d-none") &&
      document.getElementById("passwordSuccess").classList.add("d-none");
  } else {
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("password").classList.contains("border-dark") &&
      document.getElementById("password").classList.remove("border-dark");
    document.getElementById("password").classList.contains("border-danger") &&
      document.getElementById("password").classList.remove("border-danger");
    document.getElementById("password").classList.add("border-success");
    !document.getElementById("passwordDanger").classList.contains("d-none") &&
      document.getElementById("passwordDanger").classList.add("d-none");
    document.getElementById("passwordSuccess").classList.remove("d-none");
  }
  if (document.getElementById("confirmPassword").value === "") {
    document.getElementById("confirmError").innerHTML =
      "Confirm Password cannot be blank";
    document
      .getElementById("confirmPassword")
      .classList.contains("border-dark") &&
      document
        .getElementById("confirmPassword")
        .classList.remove("border-dark");
    document
      .getElementById("confirmPassword")
      .classList.contains("border-success") &&
      document
        .getElementById("confirmPassword")
        .classList.remove("border-success");
    document.getElementById("confirmPassword").classList.add("border-danger");
    document.getElementById("confirmDanger").classList.remove("d-none");
    !document.getElementById("confirmSuccess").classList.contains("d-none") &&
      document.getElementById("confirmSuccess").classList.add("d-none");
  } else if (
    document.getElementById("confirmPassword").value !==
    document.getElementById("password").value
  ) {
    document.getElementById("confirmError").innerHTML =
      "Both passowrd are not equal";
    document
      .getElementById("confirmPassword")
      .classList.contains("border-dark") &&
      document
        .getElementById("confirmPassword")
        .classList.remove("border-dark");
    document
      .getElementById("confirmPassword")
      .classList.contains("border-success") &&
      document
        .getElementById("confirmPassword")
        .classList.remove("border-success");
    document.getElementById("confirmPassword").classList.add("border-danger");
    document.getElementById("confirmDanger").classList.remove("d-none");
    !document.getElementById("confirmSuccess").classList.contains("d-none") &&
      document.getElementById("confirmSuccess").classList.add("d-none");
  } else {
    document.getElementById("confirmError").innerHTML = "";
    document
      .getElementById("confirmPassword")
      .classList.contains("border-dark") &&
      document
        .getElementById("confirmPassword")
        .classList.remove("border-dark");
    document
      .getElementById("confirmPassword")
      .classList.contains("border-danger") &&
      document
        .getElementById("confirmPassword")
        .classList.remove("border-danger");
    document.getElementById("confirmPassword").classList.add("border-success");
    !document.getElementById("confirmDanger").classList.contains("d-none") &&
      document.getElementById("confirmDanger").classList.add("d-none");
    document.getElementById("confirmSuccess").classList.remove("d-none");
  }
}
