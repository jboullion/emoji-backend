const t=/^\S+@\S+\.\S+$/;function a(s){let e="";return s?t.test(s)||(e="Email must be a valid email address"):e="Email is Required",e}function r(s){let e="";return s?s.length<8?e="Password must be at least 8 characters long":s.length>32&&(e="Password must be less than 32 characters long"):e="Password is Required",e}function l(s){let e="";return s?s.length<3?e="Username must be at least 3 characters long":s.length>20&&(e="Username must be less than 20 characters long"):e="Username is Required",e}export{r as a,l as b,a as v};
