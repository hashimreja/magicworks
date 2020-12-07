/**
 * @author syed hashim reja <hashimreja2@gmail.com>  
 * @param {*} res 
 */
module.exports.wordToPdf = async (req, res) => {
    try {
        
    } catch (e) {
        return res.status(200).json({
            status: false,
            message: 'error occuredwhile converting to pdf',
            error: e.message
        })
    }
}