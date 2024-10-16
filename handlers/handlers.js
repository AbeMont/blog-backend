const Article = require('./../models/article-model');

async function createArticle( req, res ){

    const newArticle = {
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown,
        image: req.body.image
    }

    try {

        const result = new Article(newArticle);
        await result.save();
    
        res.status(200).json({   
            success: true, 
            message: "Article Created", 
            data: result
        });

        console.log(`Article has been created: `, result);
        
    } catch (error) {

        res.send(`Error in creating new Article: ${error.message}`)
        console.log(`Error in creating new Article: ${error.message}`);

    }

}

async function getArticles( req, res ){

    const result = await Article.find();

    try {

        res.status(200).json({
            success: true,
            message: "Fetched all Articles",
            data: result
        });

    } catch (error) {
        
        res.status(500).json({
            success: false,
            message: "Failed in fetching Articles"
        });

        console.log(`Error in fetching articles `, error.message);

    }

}

async function getArticle( req, res ){

    const articleId = req.params.id;

    try {

        const result = await Article.findById(articleId);

        res.status(200).json({
            success: true,
            message: `Fetched Article ${articleId}`,
            data: result
        });

        console.log(`Article Found: `, result);

        
    } catch (error) {

        res.status(404).send({
            success: false,
            message: "404. Oops! Article does not exist."
        });

        console.log(`Error in fetching article `, error.message);
    }

}

async function updateArticle( req, res ){

    const articleId = req.params.id;

    try {

        const result = await Article.findById(articleId);

        result.title = req.body.title;
        result.description = req.body.description;
        result.markdown = req.body.markdown;
        result.image = req.body.image;
        

        await result.save();

        res.status(200).json({
            success: true,
            message: "Successfully Updated",
            data: result
        });

        console.log('Article updated: ', result);
        
    } catch (error) {
        
        res.send("Error in updating ", error.message);
        console.log("Error in updating ", error.message);

    }

}

async function deleteArticle( req, res ){

    const articleId = req.params.id;

    try {

        const result = await Article.findByIdAndDelete(articleId);

        res.status(200).json({
            success: true,
            message: "Article deleted",
            data: result
        });

        console.log("Deleted Article: ", result);
        
    } catch (error) {

        res.send("Failed in deleting Article: ", error.message);
        console.log("Failed in deleting Article: ", error.message);
    }

}

module.exports = { createArticle, getArticles, getArticle, updateArticle, deleteArticle }