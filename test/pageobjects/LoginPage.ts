const ICON_LOGIN = "//android.widget.TextView[@text='Login']";

const TXT_EMAIL = "~input-email";
const TXT_PASSWORD = "~input-password";

const BTN_LOGIN = "//android.view.ViewGroup[@content-desc='button-LOGIN']/android.view.ViewGroup";
const BTN_OK = "//android.widget.Button[@resource-id='android:id/button1']";

const LBL_LOGIN_SUCCESS = "//android.widget.TextView[@resource-id='android:id/alertTitle']";
const LBL_INVALID_EMAIL = "//android.widget.TextView[@text='Please enter a valid email address']";
const LBL_INVALID_PWD = "//android.widget.TextView[@text='Please enter at least 8 characters']";

export default new class LoginPage {

    get icon_login() {
        $(ICON_LOGIN).waitForDisplayed({ timeout: 5000 });
        return $(ICON_LOGIN);
    }

    get txt_email() {
        $(TXT_EMAIL).waitForDisplayed({ timeout: 5000 });
        return $(TXT_EMAIL);
    }

    get txt_password() {
        $(TXT_PASSWORD).waitForDisplayed({ timeout: 5000 });
        return $(TXT_PASSWORD);
    }

    get btn_login() {
        $(BTN_LOGIN).waitForDisplayed({ timeout: 5000 });
        return $(BTN_LOGIN);
    }

    get lbl_login_success() {
        $(LBL_LOGIN_SUCCESS).waitForDisplayed({ timeout: 5000 });
        return $(LBL_LOGIN_SUCCESS);
    }

    get btn_ok() {
        $(BTN_OK).waitForDisplayed({ timeout: 5000 });
        return $(BTN_OK);
    }

    get lbl_invalid_email() {
        $(LBL_INVALID_EMAIL).waitForDisplayed({ timeout: 5000 });
        return $(LBL_INVALID_EMAIL);
    }

    async login(email: string, password: string) {
        await this.icon_login.click();
        await this.txt_email.click();
        await this.txt_email.setValue(email);
        await this.txt_password.setValue(password);
        await this.btn_login.click();
    }

    async click_ok_button() {
        await this.btn_ok.click();
    }

    async assert_msg_login_success(expected_text: string) {
        await expect($(LBL_LOGIN_SUCCESS)).toHaveText(expected_text);
    }

    async assert_error_invalid_email_format(expected_lbl: string) {
        await expect($(LBL_INVALID_EMAIL)).toHaveText(expected_lbl);
    }

    async assert_error_invalid_pwd_length(expected_lbl: string) {
        await expect($(LBL_INVALID_PWD)).toHaveText(expected_lbl);
    }
}