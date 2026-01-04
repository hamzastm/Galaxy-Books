export function genBar(){
    document.querySelector(".bar-wrapper").innerHTML = `<div class="bar">
                <div class="alerts">
                    <div class="goodAlert alert"> ✅ Item add to cart!</div>
                    <div class="badAlert alert"> 🚫 Item remover from cart!</div>
                </div>
                <a href="index.html" class="left">
                    <img src="assets/logo-no-bg.png" alt="logo" width="60px">
                </a>
                <ul class="right">
                    <li class ="nav-btns">
                        <a class = "nav-btns-text" href="index.html">Home</a>
                    </li>
                    <li class="Category nav-btns"><a class = "nav-btns-text" href = "geners.html">geners</a><svg class="cati-arrow" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
                        <div class="genres">
            
                            <div class="arrow"></div>
                    
                            <h1>choose a genre</h1>
                            <div class="list">
                                <ul>
                                    <li>
                                        <a class="genre" href="#">fiction</a>                            
                                    </li>
                                    <li>
                                        <a class="genre" href="#">Novels</a>
                                    </li>
                                    <li>
                                        <a class="genre" href="#">stir</a>
                                    </li>
                                    <li>
                                        <a class="genre" href="#">Romance Novels</a>
                                    </li>
                                    <li>
                                        <a class="genre" href="#">Narration</a>
                                    </li>
                                    <li>
                                        <a class="genre" href="#">self -improvement</a>
                                    </li>
                                    <li>
                                        <a class="genre" href="#">Mystery </a>
                                    </li>
                                    <li>
                                        <a class="genre" href="#">Sci- fiction</a>                            
                                    </li>
                                    <li>
                                        <a class="genre" href="#">Historical fiction</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li class ="nav-btns"><a class = "nav-btns-text" href="#">More information</a>
                    </li>
                    <li class ="nav-btns">
                        <a class = "nav-btns-text" href="#">contact</a>
                    </li>
                </ul>   
                <div class="mid">
                    <div class="search-wraper">
                        <div class="search">
                            <input type="text" placeholder="search for book" id="searchBar">
                            <button class="search-btn" type="submit">
                                <img style="margin-top: 1px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAT9JREFUSEvVletxwkAMhKVKgEqASogrgVQCqSSmktDJxstIGWFOPo8fP3IznhsMp09a6RaVlZeuHF9SAICtiJxE5GDPo9tbEeH+parcq6sIAHDuTl4GTjP4TVU/a4Q3AIBvy5hnCbmramsVsZpNgLeqehyCvAAAfHQBriZDw8ClwwZjIpTxMlTJH8AO/VjAYxbcgQBYDSGUK00mAlx3atvUtOX3AFgtq06riAD/MbO5jQR4FWkvIoDyUNPd2BEMsj5UdVdKahbAZAL3rtHFkY8AH89qg0OjferSvi3V5FEA6j9lTFlQ2repF82n53nbR120oKuPK19xXO9mcvzMKvc9n+JFY9+K5jfV7Nyn2GRCU0jNrikFM+bO9bRsl6TnSUXI7D+cGmQ2wC4bZXJ3fbGaRQABcuj72GKAzBz/P+AX5rCqGXiDU4UAAAAASUVORK5CYII="/>
                            </button>
                        </div>
                        <div class="searched"></div>
                    </div>
                    <div>
                        <a class="cart-btn" href="cart-items.html">
                            <div class="cart-items" id="cart-items">0</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z"/></svg>
                        </a>
                    </div>
                </div>
                <div class="sign-up">
                    <a href="sign-up-form.html" target="self">Sign up</a>
                </div>
            </div>`;
}
