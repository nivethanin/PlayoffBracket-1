const prod ={
    url:{
        API_URL:
        'https://bracketserver.onrender.com/api'
    }
}

const  dev ={
    url:{
        API_URL:
        "http://localhost:5000/api"
    }
}

export const config = (process.env.NODE_ENV === 'development' ? dev : prod);
// Exports the dev constants if node environments in dev, otherwise it's prod