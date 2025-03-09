function welcomePageResponse (req, res) {
    res.write("Welcome to the home page EXPRESS JS ");
    res.write("Hello utkarsh ");
    res.end("");
}

function aboutsResponseV1 (req, res) {
    const data = {
        phone: 8802473358, 
        email: "thakurutkarsh2@gmail.com", 
        address: {
            post: 110034,
            street: "minto road",
            officeNumber: 1100
        }
    }
   res.status(200).json(data);
}

function aboutsResponseV2 (req, res) {
    const data = {
        message: "no need to know"
    }
   res.status(200).json(data);
}

module.exports = {
    welcomePageResponse,
    aboutsResponseV1,
    aboutsResponseV2
}

