function Home(){
    return (
        <div className="Membership">
            <header class="header">
                <h1>Join Our Gym Today</h1>
                <p>Your journey to fitness starts here. Choose the plan that fits you best!</p>
            </header>

            <main class="membership-container">
                <div class="membership-card basic-plan">
                    <h2>Basic Plan</h2>
                    <p class="price">$20/month</p>
                    <ul>
                        <li>Access to gym equipment</li>
                        <li>Locker facility</li>
                        <li>Open 6AM - 10PM</li>
                    </ul>
                    <form action="/create-checkout-session" method="post">
                        <input type="hidden" name="plan" value="Basic">
                        <button class="btn" type="submit">Buy Now</button>
                    </form>
                </div>

                <div class="membership-card premium-plan">
                    <h2>Premium Plan</h2>
                    <p class="price">$50/month</p>
                    <ul>
                        <li>Includes Basic Plan features</li>
                        <li>Access to group classes</li>
                        <li>1 free personal trainer session</li>
                    </ul>
                    <form action="/create-checkout-session" method="post">
                        <input type="hidden" name="plan" value="Premium">
                        <button class="btn" type="submit">Buy Now</button>
                    </form>
                </div>

                <div class="membership-card elite-plan">
                    <h2>Elite Plan</h2>
                    <p class="price">$100/month</p>
                    <ul>
                        <li>Includes Premium Plan features</li>
                        <li>Unlimited personal trainer sessions</li>
                        <li>Access to VIP lounge</li>
                    </ul>
                    <form action="/create-checkout-session" method="post">
                        <input type="hidden" name="plan" value="Elite">
                        <button class="btn" type="submit">Buy Now</button>
                    </form>
                </div>
            </main>

            <footer>
                <p>&copy; 2024 FitGym. All rights reserved. | Created by Jordi Abrar Satria</p>
            </footer>
        </div>
    )
}

export default Membership