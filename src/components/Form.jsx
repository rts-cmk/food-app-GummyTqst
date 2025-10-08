import "../styles/form.css"

export default function Form() {
    return (
        <>
            <form className="profile-form">
                <fieldset className="profile-form-name">
                    <legend>Name</legend>
                    <input type="text" name="" id="" />
                </fieldset>

                <fieldset className="profile-form-email">
                    <legend>Email</legend>
                    <input type="email" name="" id="" />
                </fieldset>

                <fieldset className="profile-form-address">
                    <legend>Delivery Address</legend>
                    <input type="text" name="" id="" />
                </fieldset>

                <fieldset className="profile-form-password">
                    <legend>Password</legend>
                    <input type="password" name="" id="" />
                </fieldset>
            </form>
        </>
    )
}