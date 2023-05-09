function logout(){
    localStorage.removeItem("loginUser");
    window.location.href="../login/login.html"
}