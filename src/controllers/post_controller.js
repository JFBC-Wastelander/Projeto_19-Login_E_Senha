import Post from "../models/post_model.js"

const store = async (req, res) => {
    try {
        let { text } = req.body
        let user = req.user._id

        let content = await Post.create({
            text,
            user
        })

        res.status(201).json(content)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const index = async (req, res) => {
    try {
        let { text } = req.body

        let content = await Post.find().exec()

        res.json(content)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const update = async (req, res) => {
    try {
        let content = await Post

        res.json(content)
    } catch (error) {
        res.status(500).json(error.message)
    }
}