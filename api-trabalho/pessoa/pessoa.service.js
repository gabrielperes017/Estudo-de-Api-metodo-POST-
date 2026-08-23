const api = require('../api');

module.exports ={
    findAll: async () => {
        try {
            const response = await api.get('/pessoa');
            return response.data;
            }  catch (error) {
                throw error;
            }
        },
        
        findById: async (id) => {
            try {
                const response = await api.get(`/pessoa/${id}`);       
                return response.data;
            } catch (error) {
                throw error;
            }
        }
    }