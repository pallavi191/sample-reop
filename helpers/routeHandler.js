const routeHandler = {
    async invoke(res, f) {
        try {
            const data = await f();
            res.status(200).json({ status: 200, data });
        } catch (error) {
            if(process.env.NODE_ENV == 'local')
            console.log("Eror: ", error);

            res.status(500).json({ status: 500, message: error.message })
        }
    }
}

module.exports = routeHandler