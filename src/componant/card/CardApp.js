import React, { useEffect, useState } from 'react'
import styles from "./CardApp.module.css"
import img from "./image/picture.jpg"

function CardApp() {
    const [email, setEmail] = useState('')
    const [txtValid, setTxt] = useState()
    const regEx = /^\w{3,}@\w{2,}\.\w{2,}$/

    useEffect(() => {
        fetch("https://sendmail-api-docs.vercel.app/")
    }, [])

    function test(e) {
        setEmail(e.target.value)

    }
    function testValidation(e) {
        e.preventDefault()
        if (!(email.match(regEx))) {
            setTxt("Email is not valid")
        } else setTxt("")
    }

    if (email.match(regEx)) {
        return (
            <>
                <div className={styles.heroSection}>
                    <div className={styles.image}>
                        <img src={img} alt="" />
                    </div>
                    <div className={styles.rightSide}>
                        <div className={styles.headeing}>
                            <h1>Subscribe to {email}!</h1>
                        </div>
                        <div className={styles.paragraph}>
                            <p>EraaSoft Task</p>
                            <p>Hello Dania</p>
                        </div>

                        <form>

                            <div className={styles.subscribed}>
                                <span>Subscribed Successfully</span>
                            </div>

                        </form>
                    </div>
                </div>


            </>
        )

    }


    return (
        <>
            <div className={styles.heroSection}>
                <div className={styles.image}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.headeing}>
                        <h1>Subscribe to our Newsletter!</h1>
                    </div>
                    <div className={styles.paragraph}>
                        <p>Be the first to get exclusive offers ands the latest news</p>
                    </div>
                    <form onSubmit={(e) => testValidation(e)}>
                        <div className={styles.inp}>
                            <input
                                value={email}
                                onChange={(e) => test(e)}
                                type="text"
                                placeholder="Enter your email address"
                                required />
                            <div className={styles.errorMsg}>
                                <p>{txtValid ? "Email is not valid" : ""}</p>
                            </div>
                        </div>
                        <div className={styles.btn}>
                            <button type='submit' >Subscribe Now</button>
                        </div>

                    </form>

                </div>
            </div>


        </>
    )
}

export default CardApp
