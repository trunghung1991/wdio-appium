import LoginPage from '../pageobjects/LoginPage'

describe("test page object", () => {
    it("should display login success message", async () => {
        await LoginPage.login("nguyen.trung.hung@moneyforward.co.jp", "12345678");
        await LoginPage.assert_msg_login_success("Success");
        await LoginPage.click_ok_button();
    })

    it("should display invalid email format", async() => {
        await LoginPage.login("nguyen.trung.hung", "12345678");
        await LoginPage.assert_error_invalid_email_format("Please enter a valid email address");
    })

    it("should display invalid password length", async() => {
        await LoginPage.login("nguyen.trung.hung@moneyforward.co.jp", "1234567");
        await LoginPage.assert_error_invalid_pwd_length("Please enter at least 8 characters");
    })
})