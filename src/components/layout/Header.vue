<template>
    <header class="header">
        <div class="container">
            <router-link to="/">
                <h1>
                    <img src="../../assets/img/logo.svg" alt="Taiwan Tourguide">
                </h1>
            </router-link>
            <nav class="nav">
                <ul>
                    <li class="attractions_link">
                        <router-link to="/">
                            <div><span>▲</span></div>
                            <p>台灣景點</p>
                        </router-link>
                    </li>
                    <li class="food_link">
                        <router-link to="/foodAndStay">
                            <div><span></span></div>
                            <p>美食住宿</p>
                        </router-link>
                    </li>
                    <li class="traffic_link">
                        <router-link to="/traffic">
                            <div><span></span></div>
                            <p>景點交通</p>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
