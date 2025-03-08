// 1. =========================  HTTP STATUS CODE  ========================

//------ 2xx : SUCCESSFUL RESPONSES ------------------- 
// 200 - The request succeeded. (getting information about fitness, or getting infromation)
// 201 - The request succeeded, and a new resource was created as a result.

// ------- 3xx: Redirectoin Responses -----------------
// 301 - The URL of the requested resource has been changed permanently. The new URL is given in the response.

// ------ 4xx: Client Error Responses -----------------
// 404 - NOT FOUND - The server cannot find the requested resource. In the browser, this means the URL is not recognized.
// 401 - Unauthorized - "unauthenticated". That is, the client must authenticate itself to get the requested response. (WRONG PASSWORD TO ENTER Facebook).
// 403 - Forbidden - The client does not have access rights to the content; that is, it is unauthorized, 
    // so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is 
    // known to the server. 
    // (YOU entered facebook, but you still cant see admin page :::: you are authorized to FB page but forbidden to its admin page).

// 405 - Method not allowed -
// 422 - Unprocessable Content - The request was well-formed but was unable to be followed due to semantic errors.
// 429 - Too Many Requests - The user has sent too many requests in a given amount of time 
// (A server will send back 429 even though the request is correct, but client has SPAMMED the request at a perticualr given time )


// -------- 5XX: Server Error Responses ----------------
// 500 - Internal server error - The server has encountered a situation it does not know how to handle. This error is generic
// 502 - Bad Gateway - This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
// 503 Service Unavailable - The server is not ready to handle the request.




// 2. ============================ HTTP METHODS   ==========================

// 1. get - get the resource
// 2. post - create a new Resource
// 3. PUT -> create a new resource if the resource do not exist, else EDIT the whole Resource. (FULLY)
// 4. Patch -> Edit a resource (Partially)
// 5. Delete -> delete a resource (seen it rarely)
// 6. Option -> to check server rediness to accept the next request.
