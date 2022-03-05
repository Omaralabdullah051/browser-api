const getCookie = name => {
    const cookie = document.cookie;
    const allCookie = cookie.split('; ');
    const findCookie = allCookie.find(c => c.includes(name));
    if (findCookie) {
        const cookieNameValue = findCookie.split('=');
        return cookieNameValue[1];
    }
}


//get cookie value
//go in the dev-tool and type this
//document.cookie (to get cookies)
//document.cookie.split('; ')    (to get cookies in an array of substrings)
//document.cookie.split('; ').find(c=> c.includes('cookie-name')) (to get a specific cookie(name,value pairs))
//document.cookie.split('; ').find(c=> c.includes('cookie-name)).split('=')[1]       (to get cookie value)