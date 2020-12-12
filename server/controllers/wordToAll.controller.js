const mammoth = require('mammoth');
const fs = require('fs');
/**
 * @author syed hashim reja <hashimreja2@gmail.com>  
 * @param {*} res 
 */
module.exports.wordToHTML = async (req, res) => {
    try {
        var options = {
            styleMap: [
                "p[style-name='Section Title'] => h1:fresh",
                "p[style-name='Subsection Title'] => h2:fresh"
            ]
        };
        mammoth.convertToHtml({path: req.file.path},options)
        .then(result => {
            var html = result.value; // The generated HTML
            fs.unlink(req.file.path,() => {console.log('file deleted successfully')});
            var messages = result.messages; // Any messages, such as warnings during conversion
            return res.status(200).json({
                status : true,
                message : 'successful',
                html : html
            })
        })
        .done(); 
    } catch (e) {
        return res.status(200).json({
            status: false,
            message: 'error occuredwhile converting to pdf',
            error: e.message
        })
    }
}